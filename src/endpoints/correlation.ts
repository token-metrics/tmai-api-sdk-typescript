import { BaseEndpoint } from '../base.js';
import { DateRangeParams, CorrelationData, ApiResponse } from '../types.js';

/**
 * Endpoint for retrieving price correlation data between tokens
 */
export class CorrelationEndpoint extends BaseEndpoint {
  /**
   * Get correlation data between two tokens with automatic date chunking and pagination.
   * 
   * @param options - Query parameters
   * @param options.base_symbol - Base token symbol (e.g., "BTC")
   * @param options.quote_symbol - Quote token symbol (e.g., "ETH")
   * @param options.startDate - Start date in YYYY-MM-DD format
   * @param options.endDate - End date in YYYY-MM-DD format
   * @returns - Correlation data with all pages and date ranges combined
   */
  async get(options: {
    base_symbol: string;
    quote_symbol: string;
  } & DateRangeParams): Promise<ApiResponse<CorrelationData>> {
    return this._paginatedRequest<CorrelationData>('get', 'correlation', options, 29);
  }
}
