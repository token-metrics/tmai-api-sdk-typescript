const axios = require('axios');

/**
 * Base class for all API endpoints
 */
class BaseEndpoint {
  /**
   * Initialize the endpoint with a client instance.
   * 
   * @param {Object} client - TokenMetricsClient instance
   */
  constructor(client) {
    this.client = client;
    this.baseUrl = client.constructor.BASE_URL;
  }

  /**
   * Make a request to the API.
   * 
   * @param {string} method - HTTP method (get, post, etc.)
   * @param {string} endpoint - API endpoint path
   * @param {Object} params - Query parameters for GET requests
   * @param {Object} json - JSON payload for POST requests
   * @returns {Promise<Object>} - API response data
   * @private
   */
  async _request(method, endpoint, params = null, json = null) {
    const url = `${this.baseUrl}/${endpoint}`;
    const headers = {
      'accept': 'application/json',
      'api_key': this.client.apiKey
    };

    try {
      let response;

      if (method.toLowerCase() === 'get') {
        response = await axios.get(url, { headers, params });
      } else if (method.toLowerCase() === 'post') {
        headers['content-type'] = 'application/json';
        response = await axios.post(url, json, { headers });
      } else {
        throw new Error(`Unsupported HTTP method: ${method}`);
      }

      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error(`API Error: ${error.response.status} - ${error.response.data.message || error.response.statusText}`);
      } else if (error.request) {
        throw new Error('No response received from API');
      } else {
        throw error;
      }
    }
  }

  /**
   * Split a date range into chunks of max_days.
   * 
   * @param {string} startDate - Start date in YYYY-MM-DD format
   * @param {string} endDate - End date in YYYY-MM-DD format
   * @param {number} maxDays - Maximum number of days in each chunk
   * @returns {Array<Array<string>>} - List of [chunkStartDate, chunkEndDate] arrays
   * @private
   */
  _chunkDateRange(startDate, endDate, maxDays = 29) {
    if (!startDate || !endDate) {
      return [[startDate, endDate]]; // If dates not provided, return as is
    }

    try {
      const start = new Date(startDate);
      const end = new Date(endDate);

      const daysDiff = Math.floor((end - start) / (1000 * 60 * 60 * 24));
      if (daysDiff <= maxDays) {
        return [[startDate, endDate]];
      }

      const result = [];
      let chunkStart = new Date(start);

      while (chunkStart < end) {
        const chunkEnd = new Date(chunkStart);
        chunkEnd.setDate(chunkEnd.getDate() + maxDays);

        if (chunkEnd > end) {
          result.push([
            chunkStart.toISOString().split('T')[0],
            endDate
          ]);
        } else {
          result.push([
            chunkStart.toISOString().split('T')[0],
            chunkEnd.toISOString().split('T')[0]
          ]);
        }

        chunkStart = new Date(chunkEnd);
        chunkStart.setDate(chunkStart.getDate() + 1);
      }

      return result;
    } catch (error) {
      return [[startDate, endDate]];
    }
  }

  /**
   * Make paginated requests to handle date ranges and custom pagination logic.
   * 
   * This method handles two forms of pagination:
   * 1. Date chunking: Splitting long date ranges into <= maxDays chunks
   * 2. Offset-based pagination: Since the API's page parameter doesn't work as expected
   * 
   * @param {string} method - HTTP method (get, post, etc.)
   * @param {string} endpoint - API endpoint path
   * @param {Object} params - Query parameters including startDate and endDate
   * @param {number} maxDays - Maximum number of days allowed between startDate and endDate
   * @param {number} customLimit - Custom limit value. If null, uses endpoint-specific defaults.
   * @returns {Promise<Object>} - Combined API response data
   * @private
   */
  async _paginatedRequest(method, endpoint, params = {}, maxDays = 29, customLimit = null) {
    const endpointLimits = {
      'daily-ohlcv': 100,
      'hourly-ohlcv': 1000,
      'trader-grades': 1000,
      'investor-grades': 1000,
      'market-metrics': 1000,
      'trader-indices': 1000,
      'trading-signals': 1000,
      'default': 1000
    };

    const startDate = params.startDate;
    const endDate = params.endDate;

    const limit = customLimit !== null ? customLimit : 
      (endpointLimits[endpoint] || endpointLimits.default);

    params.limit = limit;

    if (params.page !== undefined) {
      delete params.page;
    }

    const dateChunks = !startDate || !endDate ? 
      [[startDate, endDate]] : 
      this._chunkDateRange(startDate, endDate, maxDays);

    const allData = [];
    const combinedMeta = {};

    console.log(`Fetching ${endpoint} data...`);

    for (const [chunkStart, chunkEnd] of dateChunks) {
      const chunkParams = { ...params };
      if (chunkStart) {
        chunkParams.startDate = chunkStart;
      }
      if (chunkEnd) {
        chunkParams.endDate = chunkEnd;
      }

      chunkParams.limit = limit;

      chunkParams.page = 0;

      try {
        const response = await this._request(method, endpoint, chunkParams, null);

        if (response && typeof response === 'object') {
          if (response.data) {
            if (Array.isArray(response.data)) {
              allData.push(...response.data);
            } else {
              allData.push(response.data);
            }
          }

          Object.entries(response).forEach(([key, value]) => {
            if (key !== 'data') {
              combinedMeta[key] = value;
            }
          });
        } else if (Array.isArray(response)) {
          allData.push(...response);
        } else if (response) {
          allData.push(response);
        }
      } catch (error) {
        console.error(`Error fetching chunk ${chunkStart} to ${chunkEnd}: ${error.message}`);
      }

      console.log(`Processed chunk: ${chunkStart || 'start'} to ${chunkEnd || 'end'}`);
    }

    if (allData.length === 0) {
      return { data: [] };
    }

    if (Object.keys(combinedMeta).length > 0) {
      return {
        ...combinedMeta,
        data: allData
      };
    } else if (allData.length > 0 && typeof allData[0] === 'object') {
      return { data: allData };
    } else {
      return allData;
    }
  }
}

module.exports = BaseEndpoint;
