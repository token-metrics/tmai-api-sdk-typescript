import axios, { AxiosResponse } from 'axios';
import { 
  ApiResponse, 
  EndpointLimits
} from './types';

/**
 * Base class for all API endpoints
 */
export class BaseEndpoint {
  protected client: any;
  protected baseUrl: string;

  /**
   * Initialize the endpoint with a client instance.
   * 
   * @param client - TokenMetricsClient instance
   */
  constructor(client: any) {
    this.client = client;
    this.baseUrl = client.constructor.BASE_URL;
  }

  /**
   * Make a request to the API.
   * 
   * @param method - HTTP method (get, post, etc.)
   * @param endpoint - API endpoint path
   * @param params - Query parameters for GET requests
   * @param json - JSON payload for POST requests
   * @returns - API response data
   * @private
   */
  protected async _request<T>(
    method: string, 
    endpoint: string, 
    params: Record<string, any> | null = null, 
    json: Record<string, any> | null = null
  ): Promise<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    const headers: Record<string, string> = {
      'accept': 'application/json',
      'api_key': this.client.apiKey
    };

    try {
      let response: AxiosResponse;

      if (method.toLowerCase() === 'get') {
        response = await axios.get(url, { headers, params });
      } else if (method.toLowerCase() === 'post') {
        headers['content-type'] = 'application/json';
        response = await axios.post(url, json, { headers });
      } else {
        throw new Error(`Unsupported HTTP method: ${method}`);
      }

      return response.data;
    } catch (error: any) {
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
   * @param startDate - Start date in YYYY-MM-DD format
   * @param endDate - End date in YYYY-MM-DD format
   * @param maxDays - Maximum number of days in each chunk
   * @returns - List of [chunkStartDate, chunkEndDate] arrays
   * @private
   */
  protected _chunkDateRange(
    startDate: string | undefined, 
    endDate: string | undefined, 
    maxDays: number = 29
  ): Array<[string | undefined, string | undefined]> {
    if (!startDate || !endDate) {
      return [[startDate, endDate]]; // If dates not provided, return as is
    }

    try {
      const start = new Date(startDate);
      const end = new Date(endDate);

      const daysDiff = Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
      if (daysDiff <= maxDays) {
        return [[startDate, endDate]];
      }

      const result: Array<[string, string]> = [];
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
   * @param method - HTTP method (get, post, etc.)
   * @param endpoint - API endpoint path
   * @param params - Query parameters including startDate and endDate
   * @param maxDays - Maximum number of days allowed between startDate and endDate
   * @param customLimit - Custom limit value. If null, uses endpoint-specific defaults.
   * @returns - Combined API response data
   * @private
   */
  protected async _paginatedRequest<T>(
    method: string, 
    endpoint: string, 
    params: Record<string, any> = {}, 
    maxDays: number = 29, 
    customLimit: number | null = null
  ): Promise<ApiResponse<T>> {
    const endpointLimits: EndpointLimits = {
      'daily-ohlcv': 100,
      'hourly-ohlcv': 1000,
      'trader-grades': 1000,
      'investor-grades': 1000,
      'market-metrics': 1000,
      'trader-indices': 1000,
      'trading-signals': 1000,
      'investor-indices': 1000,
      'crypto-investors': 1000,
      'top-market-cap-tokens': 1000,
      'resistance-support': 1000,
      'price': 1000,
      'sentiments': 1000,
      'quantmetrics': 1000,
      'scenario-analysis': 1000,
      'correlation': 1000,
      'sector-indices-holdings': 1000,
      'index-specific-performance': 1000,
      'sector-index-transaction': 1000,
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

    const allData: T[] = [];
    const combinedMeta: Record<string, any> = {};

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
        const response = await this._request<any>(method, endpoint, chunkParams, null);

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
      } catch (error: any) {
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
      return { data: allData } as ApiResponse<T>;
    }
  }
}
