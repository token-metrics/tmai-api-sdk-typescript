import { BaseEndpoint } from '../base';
import { ResistanceSupportParams, ResistanceSupportData, PaginatedApiResponse } from '../types';

/**
 * Endpoint for accessing technical price resistance and support levels
 */
export class ResistanceSupportEndpoint extends BaseEndpoint {
  /**
   * Get the historical levels of resistance and support for each token.
   * 
   * @param options - Query parameters
   * @param options.token_id - Comma Separated Token IDs. Example: 3375,3306
   * @param options.token_name - Comma Separated Crypto Asset Names (e.g., Bitcoin, Ethereum)
   * @param options.symbol - Comma Separated Token Symbols. Example: BTC,ETH
   * @param options.slug - Comma separated token slugs. Example: bitcoin,ethereum
   * @param options.limit - Limit the number of items in response. Defaults to 50
   * @param options.page - Page number for pagination. Defaults to 1
   * @returns - Resistance and support data with pagination
   */
  async get(options: ResistanceSupportParams = {}): Promise<PaginatedApiResponse<ResistanceSupportData>> {
    return this._request<PaginatedApiResponse<ResistanceSupportData>>('get', 'resistance-support', options);
  }
}
