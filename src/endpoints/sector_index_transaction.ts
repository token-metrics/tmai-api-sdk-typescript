import { BaseEndpoint } from '../base';
import { DateRangeParams, ApiResponse } from '../types';

/**
 * Interface for sector index transaction data
 */
interface SectorIndexTransactionData {
  INDEX_ID: string;
  SYMBOL: string;
  TRANSACTION_TYPE: string;
  AMOUNT: number;
  TIMESTAMP: string;
  [key: string]: any;
}

/**
 * Endpoint for accessing sector index transaction data
 */
export class SectorIndexTransactionEndpoint extends BaseEndpoint {
  /**
   * Get sector index transaction data with automatic date chunking and pagination.
   * 
   * @param options - Query parameters
   * @param options.index_id - Index ID
   * @param options.startDate - Start date in YYYY-MM-DD format
   * @param options.endDate - End date in YYYY-MM-DD format
   * @returns - Sector index transaction data with all pages and date ranges combined
   */
  async get(options: { index_id: string } & DateRangeParams): Promise<ApiResponse<SectorIndexTransactionData>> {
    return this._paginatedRequest<SectorIndexTransactionData>('get', 'sector-index-transaction', options, 29);
  }
}
