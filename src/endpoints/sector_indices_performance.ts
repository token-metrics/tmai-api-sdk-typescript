import { BaseEndpoint } from '../base.js';
import { DateRangeParams, ApiResponse } from '../types.js';

/**
 * Interface for sector indices performance data
 */
interface SectorIndicesPerformanceData {
  INDEX_ID: string;
  TIMESTAMP: string;
  PERFORMANCE: number;
  [key: string]: any;
}

/**
 * Endpoint for accessing performance data of sector indices
 */
export class SectorIndicesPerformanceEndpoint extends BaseEndpoint {
  /**
   * Get sector indices performance data with automatic date chunking and pagination.
   * 
   * @param options - Query parameters
   * @param options.index_id - Index ID
   * @param options.startDate - Start date in YYYY-MM-DD format
   * @param options.endDate - End date in YYYY-MM-DD format
   * @returns - Sector indices performance data with all pages and date ranges combined
   */
  async get(options: { index_id: string } & DateRangeParams): Promise<ApiResponse<SectorIndicesPerformanceData>> {
    return this._paginatedRequest<SectorIndicesPerformanceData>('get', 'index-specific-performance', options, 29);
  }
}
