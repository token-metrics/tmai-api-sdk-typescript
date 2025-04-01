const BaseEndpoint = require('../base');

/**
 * Endpoint for accessing long-term investment grades
 */
class InvestorGradesEndpoint extends BaseEndpoint {
  /**
   * Get the long-term investment grades with automatic date chunking and pagination.
   * 
   * @param {Object} options - Query parameters
   * @param {string} options.token_id - Comma-separated Token IDs
   * @param {string} options.startDate - Start date in YYYY-MM-DD format
   * @param {string} options.endDate - End date in YYYY-MM-DD format
   * @param {string} options.symbol - Comma-separated Token Symbols (e.g., "BTC,ETH")
   * @param {string} options.category - Comma-separated category names
   * @param {string} options.exchange - Comma-separated exchange names
   * @param {string} options.marketcap - Minimum MarketCap in $
   * @param {string} options.fdv - Minimum fully diluted valuation in $
   * @param {string} options.volume - Minimum 24h trading volume in $
   * @param {string} options.investorGrade - Minimum TM Investor Grade
   * @returns {Promise<Object>} - Investor grades data with all pages and date ranges combined
   * 
   * Note:
   * This method handles the API's 29-day limit limitation by:
   * 1. Automatically chunking the date range into 29-day periods
   * 2. Logging progress during fetching
   * 3. Combining all results into a single response
   */
  async get(options = {}) {
    return this._paginatedRequest('get', 'investor-grades', options, 29);
  }
}

module.exports = InvestorGradesEndpoint;
