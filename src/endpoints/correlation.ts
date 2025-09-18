import { BaseEndpoint } from '../base';
import { CorrelationParams, CorrelationData, PaginatedApiResponse } from '../types';

/**
 * Endpoint for retrieving price correlation data between tokens
 */
export class CorrelationEndpoint extends BaseEndpoint {
  /**
   * Get the Top 10 and Bottom 10 correlation of tokens with the top 100 market cap tokens.
   * 
   * @param options - Query parameters
   * @param options.token_id - Comma Separated Token IDs. Example: 3375,3306
   * @param options.token_name - Comma Separated Crypto Asset Names (e.g., Bitcoin, Ethereum)
   * @param options.symbol - Comma Separated Token Symbols. Example: BTC,ETH
   * @param options.slug - Comma separated token slugs. Example: bitcoin,ethereum
   * @param options.category - Comma separated category name. Example: layer-1,nft
   * @param options.exchange - Comma separated exchange name. Example: gate,binance
   * @param options.limit - Limit the number of items in response. Defaults to 50
   * @param options.page - Page number for pagination. Defaults to 1
   * @returns - Correlation data with pagination
   */
  async get(options: CorrelationParams = {}): Promise<PaginatedApiResponse<CorrelationData>> {
    return this._request<PaginatedApiResponse<CorrelationData>>('get', 'correlation', options);
  }
}
