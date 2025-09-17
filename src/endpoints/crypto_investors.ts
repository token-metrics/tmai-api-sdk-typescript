import { BaseEndpoint } from '../base';
import { CryptoInvestorsParams, CryptoInvestorData, PaginatedApiResponse } from '../types';

/**
 * Endpoint for accessing information about crypto investors
 */
export class CryptoInvestorsEndpoint extends BaseEndpoint {
  /**
   * Get the latest list of crypto investors and their scores.
   * 
   * @param options - Query parameters
   * @param options.limit - Limit the number of items in response. Defaults to 50
   * @param options.page - Page number for pagination. Defaults to 1
   * @returns - Crypto investors data with pagination
   */
  async get(options: CryptoInvestorsParams = {}): Promise<PaginatedApiResponse<CryptoInvestorData>> {
    return this._request<PaginatedApiResponse<CryptoInvestorData>>('get', 'crypto-investors', options);
  }
}
