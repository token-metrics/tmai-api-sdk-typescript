const BaseEndpoint = require('../base');

/**
 * Endpoint for accessing AI-generated trading portfolios
 */
class TraderIndicesEndpoint extends BaseEndpoint {
  /**
   * Get the AI-generated portfolio for Traders with automatic date chunking and pagination.
   * 
   * @param {Object} options - Query parameters
   * @param {string} options.startDate - Start date in YYYY-MM-DD format
   * @param {string} options.endDate - End date in YYYY-MM-DD format
   * @returns {Promise<Object>} - Trader indices data with all pages and date ranges combined
   * 
   * Note:
   * This method handles the API's 29-day limit limitation by:
   * 1. Automatically chunking the date range into 29-day periods
   * 2. Logging progress during fetching
   * 3. Combining all results into a single response
   */
  async get(options = {}) {
    return this._paginatedRequest('get', 'trader-indices', options, 29);
  }
}

module.exports = TraderIndicesEndpoint;
