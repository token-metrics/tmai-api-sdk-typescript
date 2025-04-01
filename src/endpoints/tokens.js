const BaseEndpoint = require('../base');

/**
 * Endpoint for accessing token information
 */
class TokensEndpoint extends BaseEndpoint {
  /**
   * Get information about tokens.
   * 
   * @param {Object} options - Query parameters
   * @param {string} options.token_id - Comma-separated Token IDs
   * @param {string} options.symbol - Comma-separated Token Symbols (e.g., "BTC,ETH")
   * @param {string} options.category - Comma-separated category names (e.g., "layer-1,nft")
   * @param {string} options.exchange - Comma-separated exchange names (e.g., "binance,gate")
   * @param {string} options.marketcap - Minimum MarketCap in $
   * @param {string} options.volume - Minimum 24h trading volume in $
   * @param {string} options.fdv - Minimum fully diluted valuation in $
   * @returns {Promise<Object>} - Token information
   */
  async get(options = {}) {
    return this._request('get', 'tokens', options);
  }
}

module.exports = TokensEndpoint;
