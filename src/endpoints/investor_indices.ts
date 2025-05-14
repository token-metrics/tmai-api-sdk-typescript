import { BaseEndpoint } from '../base.js';
import { DateRangeParams, ApiResponse } from '../types.js';

/**
 * Interface for investor indices data
 */
interface InvestorIndicesData {
  INDEX_ID: string;
  INDEX_NAME: string;
  TIMESTAMP: string;
  [key: string]: any;
}

/**
 * Endpoint for accessing AI-generated investor indices
 */
export class InvestorIndicesEndpoint extends BaseEndpoint {
  /**
   * Get investor indices data.
   * 
   * @param options - Query parameters
   * @param options.startDate - Start date in YYYY-MM-DD format
   * @param options.endDate - End date in YYYY-MM-DD format
   * @returns - Investor indices data
   */
  async get(options: DateRangeParams = {}): Promise<ApiResponse<InvestorIndicesData>> {
    return this._request<ApiResponse<InvestorIndicesData>>('get', 'investor-indices', options);
  }
}
