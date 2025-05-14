import { BaseEndpoint } from '../base.js';
import { TokenFilterParams, DateRangeParams, ApiResponse } from '../types.js';

/**
 * Interface for quantitative metrics data
 */
interface QuantmetricsData {
  symbol: string;
  timestamp: string;
  [key: string]: any;
}

/**
 * Endpoint for accessing quantitative market metrics
 */
export class QuantmetricsEndpoint extends BaseEndpoint {
  /**
   * Get quantitative metrics data with automatic date chunking and pagination.
   * 
   * @param options - Query parameters
   * @param options.symbol - Comma-separated Token Symbols (e.g., "BTC,ETH")
   * @param options.startDate - Start date in YYYY-MM-DD format
   * @param options.endDate - End date in YYYY-MM-DD format
   * @returns - Quantitative metrics data with all pages and date ranges combined
   */
  async get(options: Pick<TokenFilterParams, 'symbol'> & DateRangeParams = {}): Promise<ApiResponse<QuantmetricsData>> {
    return this._paginatedRequest<QuantmetricsData>('get', 'quantmetrics', options, 29);
  }
}
