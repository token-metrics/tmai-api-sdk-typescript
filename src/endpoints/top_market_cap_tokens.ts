import { BaseEndpoint } from '../base';
import { Token, ApiResponse } from '../types';

/**
 * Endpoint for accessing top tokens by market capitalization
 */
export class TopMarketCapTokensEndpoint extends BaseEndpoint {
  /**
   * Get top tokens by market capitalization.
   * 
   * @param options - Query parameters
   * @param options.top_k - Number of top tokens to retrieve
   * @returns - Top market cap tokens data
   */
  async get(options: { top_k?: number } = {}): Promise<ApiResponse<Token>> {
    return this._request<ApiResponse<Token>>('get', 'top-market-cap-tokens', options);
  }
}
