import { BaseEndpoint } from '../base';
import { DateRangeParams, MarketMetricsData, ApiResponse } from '../types';

/**
 * Endpoint for accessing overall market data
 */
export class MarketMetricsEndpoint extends BaseEndpoint {
  /**
   * Get market metrics data with automatic date chunking and pagination.
   * 
   * @param options - Query parameters
   * @param options.startDate - Start date in YYYY-MM-DD format
   * @param options.endDate - End date in YYYY-MM-DD format
   * @returns - Market metrics data with all pages and date ranges combined
   */
  async get(options: DateRangeParams = {}): Promise<ApiResponse<MarketMetricsData>> {
    return this._paginatedRequest<MarketMetricsData>('get', 'market-metrics', options, 29);
  }
}
