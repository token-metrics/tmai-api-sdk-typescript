import { BaseEndpoint } from '../base.js';
import { TokenFilterParams, DateRangeParams, ApiResponse } from '../types.js';

/**
 * Interface for price data
 */
interface PriceData {
  symbol: string;
  timestamp: string;
  price: number;
  [key: string]: any;
}

/**
 * Endpoint for accessing historical price data
 */
export class PriceEndpoint extends BaseEndpoint {
  /**
   * Get historical price data with automatic date chunking and pagination.
   * 
   * @param options - Query parameters
   * @param options.symbol - Comma-separated Token Symbols (e.g., "BTC,ETH")
   * @param options.startDate - Start date in YYYY-MM-DD format
   * @param options.endDate - End date in YYYY-MM-DD format
   * @returns - Price data with all pages and date ranges combined
   */
  async get(options: Pick<TokenFilterParams, 'symbol'> & DateRangeParams = {}): Promise<ApiResponse<PriceData>> {
    return this._paginatedRequest<PriceData>('get', 'price', options, 29);
  }
}
