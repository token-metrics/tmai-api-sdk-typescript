const BaseEndpoint = require('../base');

/**
 * Endpoint for accessing daily OHLCV (Open, High, Low, Close, Volume) data
 */
class DailyOHLCVEndpoint extends BaseEndpoint {
  /**
   * Get daily OHLCV data for tokens with automatic date chunking and pagination.
   * 
   * @param {Object} options - Query parameters
   * @param {string} options.token_id - Comma-separated Token IDs
   * @param {string} options.symbol - Comma-separated Token Symbols (e.g., "BTC,ETH")
   * @param {string} options.token_name - Comma-separated Token Names (e.g., "Bitcoin, Ethereum")
   * @param {string} options.startDate - Start date in YYYY-MM-DD format
   * @param {string} options.endDate - End date in YYYY-MM-DD format
   * @returns {Promise<Object>} - Daily OHLCV data with all pages and date ranges combined
   * 
   * Note:
   * This method handles the API's 29-day limit limitation by:
   * 1. Automatically chunking the date range into 29-day periods
   * 2. Logging progress during fetching
   * 3. Combining all results into a single response
   */
  async get(options = {}) {
    return this._paginatedRequest('get', 'daily-ohlcv', options, 29);
  }
}

module.exports = DailyOHLCVEndpoint;
