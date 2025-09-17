import { BaseEndpoint } from '../base';
import { TokenFilterParams, QuantmetricsData, PaginatedApiResponse } from '../types';

/**
 * Endpoint for accessing quantitative market metrics
 */
export class QuantmetricsEndpoint extends BaseEndpoint {
  /**
   * Get the latest quantitative metrics for tokens. Note that Token Metrics pricing data starts on 2010-01-01 for most tokens. More historical data will be available soon.
   * 
   * @param options - Query parameters
   * @param options.token_id - Comma-separated Token IDs. Example: 3375,3306
   * @param options.token_name - Comma-separated Crypto Asset Names (e.g., Bitcoin, Ethereum)
   * @param options.symbol - Comma-separated Token Symbols. Example: BTC,ETH
   * @param options.slug - Comma-separated token slugs. Example: bitcoin,ethereum
   * @param options.category - Comma-separated category name. Example: layer-1,nft
   * @param options.exchange - Comma-separated exchange name. Example: binance,gate
   * @param options.marketcap - Minimum MarketCap in $. Example: 1000000000
   * @param options.volume - Minimum 24h trading volume in $. Example: 1000000000
   * @param options.fdv - Minimum fully diluted valuation in $. Example: 1000000000
   * @param options.limit - Limit the number of items in response. Defaults to 50
   * @param options.page - Page number for pagination. Defaults to 1
   * @returns - Quantitative metrics data
   */
  async get(options: TokenFilterParams = {}): Promise<PaginatedApiResponse<QuantmetricsData>> {
    return this._request<PaginatedApiResponse<QuantmetricsData>>('get', 'quantmetrics', options);
  }
}
