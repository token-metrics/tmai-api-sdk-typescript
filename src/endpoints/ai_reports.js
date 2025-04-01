const BaseEndpoint = require('../base');

/**
 * Endpoint for accessing AI-generated trading and investment reports
 */
class AIReportsEndpoint extends BaseEndpoint {
  /**
   * Get the latest AI-generated trading and investment reports.
   * 
   * @param {Object} options - Query parameters
   * @param {string} options.token_id - Comma-separated Token IDs
   * @param {string} options.symbol - Comma-separated Token Symbols (e.g., "BTC,ETH")
   * @param {number} options.limit - Limit the number of items in response (default: 1000)
   * @param {number} options.page - Page number for pagination (default: 0)
   * @returns {Promise<Object>} - AI reports data
   */
  async get(options = {}) {
    const params = {
      limit: 1000,
      page: 0,
      ...options
    };
    
    return this._request('get', 'ai-reports', params);
  }
}

module.exports = AIReportsEndpoint;
