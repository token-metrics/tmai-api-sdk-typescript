import { BaseEndpoint } from '../base';
import { PricePredictionParams, PricePredictionData, PaginatedApiResponse } from '../types';

/**
 * Endpoint for accessing crypto price predictions
 */
export class PricePredictionEndpoint extends BaseEndpoint {
  /**
   * Get price prediction of a crypto asset under different market cap scenarios.
   * 
   * @param options - Query parameters
   * @param options.token_id - Comma Separated Token IDs. Example: 3375,3306
   * @param options.token_name - Comma Separated Crypto Asset Names (e.g., Bitcoin, Ethereum)
   * @param options.symbol - Comma Separated Token Symbols. Example: BTC,ETH
   * @param options.slug - Comma separated token slugs. Example: bitcoin,ethereum
   * @param options.limit - Limit the number of items in response. Defaults to 50
   * @param options.page - Page number for pagination. Defaults to 1
   * @returns - Price prediction data with pagination
   */
  async get(options: PricePredictionParams = {}): Promise<PaginatedApiResponse<PricePredictionData>> {
    return this._request<PaginatedApiResponse<PricePredictionData>>('get', 'price-prediction', options);
  }
}
