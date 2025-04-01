const BaseEndpoint = require('../base');

/**
 * Endpoint for accessing AI-generated trading signals for long and short positions
 */
class TradingSignalsEndpoint extends BaseEndpoint {
  /**
   * Get AI-generated trading signals with automatic date chunking and pagination.
   * 
   * @param {Object} options - Query parameters
   * @param {string} options.token_id - Comma-separated Token IDs
   * @param {string} options.symbol - Comma-separated Token Symbols (e.g., "BTC,ETH")
   * @param {string} options.startDate - Start date in YYYY-MM-DD format
   * @param {string} options.endDate - End date in YYYY-MM-DD format
   * @param {string} options.category - Comma-separated category names (e.g., "layer-1,nft")
   * @param {string} options.exchange - Comma-separated exchange names (e.g., "binance,gate")
   * @param {string} options.marketcap - Minimum MarketCap in $
   * @param {string} options.volume - Minimum 24h trading volume in $
   * @param {string} options.fdv - Minimum fully diluted valuation in $
   * @param {string} options.signal - Signal value: bullish (1), bearish (-1) or no signal (0)
   * @returns {Promise<Object>} - Trading signals data with all pages and date ranges combined
   */
  async get(options = {}) {
    return this._paginatedRequest('get', 'trading-signals', options, 29);
  }
}

module.exports = TradingSignalsEndpoint;
