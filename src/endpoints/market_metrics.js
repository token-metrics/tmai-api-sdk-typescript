const BaseEndpoint = require('../base');

/**
 * Endpoint for accessing market sentiment metrics
 */
class MarketMetricsEndpoint extends BaseEndpoint {
  /**
   * Get the Market Analytics from Token Metrics with automatic date chunking and pagination.
   * 
   * These provide insight into the full Crypto Market, including the Bullish/Bearish Market indicator.
   * 
   * @param {Object} options - Query parameters
   * @param {string} options.startDate - Start date in YYYY-MM-DD format
   * @param {string} options.endDate - End date in YYYY-MM-DD format
   * @returns {Promise<Object>} - Market metrics data with all pages and date ranges combined
   * 
   * Note:
   * This method handles the API's 29-day limit limitation by:
   * 1. Automatically chunking the date range into 29-day periods
   * 2. Logging progress during fetching
   * 3. Combining all results into a single response
   */
  async get(options = {}) {
    return this._paginatedRequest('get', 'market-metrics', options, 29);
  }
}

module.exports = MarketMetricsEndpoint;
