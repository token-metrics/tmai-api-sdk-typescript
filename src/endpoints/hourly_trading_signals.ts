import { BaseEndpoint } from '../base';
import { HourlyTradingSignalsParams, HourlyTradingSignalData, PaginatedApiResponse } from '../types';

/**
 * Endpoint for accessing hourly AI-generated trading signals
 */
export class HourlyTradingSignalsEndpoint extends BaseEndpoint {
  /**
   * Get hourly AI-generated trading signals for long and short positions for all tokens.
   * 
   * @param options - Query parameters
   * @param options.token_id - Comma Separated Token IDs. Example: 3375,3306
   * @param options.token_name - Comma Separated Crypto Asset Names (e.g., Bitcoin, Ethereum)
   * @param options.symbol - Comma Separated Token Symbols. Example: BTC,ETH
   * @param options.slug - Comma separated token slugs. Example: bitcoin,ethereum
   * @param options.limit - Limit the number of items in response. Defaults to 50
   * @param options.page - Page number for pagination. Defaults to 1
   * @returns - Hourly trading signals data with pagination
   */
  async get(options: HourlyTradingSignalsParams = {}): Promise<PaginatedApiResponse<HourlyTradingSignalData>> {
    return this._request<PaginatedApiResponse<HourlyTradingSignalData>>('get', 'hourly-trading-signals', options);
  }
}
