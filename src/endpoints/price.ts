import { BaseEndpoint } from '../base';
import { TokenFilterParams, PriceData, PaginatedApiResponse } from '../types';

/**
 * Endpoint for accessing token price data
 */
export class PriceEndpoint extends BaseEndpoint {
  /**
   * Get token prices based on the provided token ids.
   * 
   * @param options - Query parameters
   * @param options.token_id - Comma-separated Token IDs. Example: 3375,3306
   * @param options.token_name - Comma-separated Crypto Asset Names (e.g., Bitcoin, Ethereum)
   * @param options.symbol - Comma-separated Token Symbols. Example: BTC,ETH
   * @param options.slug - Comma-separated token slugs. Example: bitcoin,ethereum
   * @returns - Price data
   */
  async get(options: Pick<TokenFilterParams, 'token_id' | 'token_name' | 'symbol' | 'slug'> = {}): Promise<PaginatedApiResponse<PriceData>> {
    return this._request<PaginatedApiResponse<PriceData>>('get', 'price', options);
  }
}
