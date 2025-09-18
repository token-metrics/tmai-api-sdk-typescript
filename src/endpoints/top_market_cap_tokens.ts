import { BaseEndpoint } from '../base';
import { TopMarketCapTokensParams, Token, PaginatedApiResponse } from '../types';

/**
 * Endpoint for accessing top tokens by market capitalization
 */
export class TopMarketCapTokensEndpoint extends BaseEndpoint {
  /**
   * Get the list of coins for top market cap.
   * 
   * @param options - Query parameters
   * @param options.top_k - Specifies the number of top cryptocurrencies to retrieve, based on their market capitalization. Example: 100
   * @param options.expand - Expand exchange_list or category_list to return full object
   * @returns - Top market cap tokens data with pagination
   */
  async get(options: TopMarketCapTokensParams = {}): Promise<PaginatedApiResponse<Token>> {
    return this._request<PaginatedApiResponse<Token>>('get', 'top-market-cap-tokens', options);
  }
}
