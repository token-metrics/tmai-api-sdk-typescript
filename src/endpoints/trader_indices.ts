import { BaseEndpoint } from '../base';
import { DateRangeParams, ApiResponse } from '../types';

/**
 * Interface for trader indices data
 */
interface TraderIndicesData {
  INDEX_ID: string;
  INDEX_NAME: string;
  TIMESTAMP: string;
  [key: string]: any;
}

/**
 * Endpoint for accessing AI-generated trading portfolios
 */
export class TraderIndicesEndpoint extends BaseEndpoint {
  /**
   * Get trader indices data with automatic date chunking and pagination.
   * 
   * @param options - Query parameters
   * @param options.startDate - Start date in YYYY-MM-DD format
   * @param options.endDate - End date in YYYY-MM-DD format
   * @returns - Trader indices data with all pages and date ranges combined
   */
  async get(options: DateRangeParams = {}): Promise<ApiResponse<TraderIndicesData>> {
    return this._paginatedRequest<TraderIndicesData>('get', 'trader-indices', options, 29);
  }
}
