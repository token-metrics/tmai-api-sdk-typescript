import { BaseEndpoint } from '../base';
import { TradingSignalsParams, TradingSignalData, PaginatedApiResponse } from '../types';

/**
 * Endpoint for accessing AI-generated trading signals
 */
export class TradingSignalsEndpoint extends BaseEndpoint {
  /**
   * Get AI-generated trading signals for long and short positions for all tokens.
   * 
   * @param options - Query parameters
   * @param options.token_id - Comma-separated Token IDs. Defaults to 3375
   * @param options.token_name - Comma-separated Crypto Asset Names (e.g., Bitcoin, Ethereum)
   * @param options.symbol - Comma-separated Token Symbols (e.g., "BTC,ETH")
   * @param options.slug - Comma-separated token slugs. Example: bitcoin,ethereum
   * @param options.start_date - Start date in YYYY-MM-DD format. Example: 2023-10-01
   * @param options.end_date - End date in YYYY-MM-DD format. Example: 2023-10-10
   * @param options.category - Comma-separated category name. Example: layer-1,nft
   * @param options.exchange - Comma-separated exchange name. Example: binance,gate
   * @param options.marketcap - Minimum MarketCap in $. Example: 1000000000
   * @param options.volume - Minimum 24h trading volume in $. Example: 1000000000
   * @param options.fdv - Minimum fully diluted valuation in $. Example: 1000000000
   * @param options.signal - Signal value: bullish (1), bearish (-1) or no signal (0). Example: 1
   * @param options.limit - Limit the number of items in response. Defaults to 50
   * @param options.page - Page number for pagination. Defaults to 1
   * @returns - Trading signals data with pagination
   */
  async get(options: TradingSignalsParams = {}): Promise<PaginatedApiResponse<TradingSignalData>> {
    return this._request<PaginatedApiResponse<TradingSignalData>>('get', 'trading-signals', options);
  }
}
