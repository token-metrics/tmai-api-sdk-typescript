import { BaseEndpoint } from '../base';
import { OHLCVData, TokenFilterParams, DateRangeParams, ApiResponse } from '../types';

/**
 * Endpoint for accessing hourly OHLCV (Open, High, Low, Close, Volume) data
 */
export class HourlyOHLCVEndpoint extends BaseEndpoint {
  /**
   * Get hourly OHLCV data with automatic date chunking and pagination.
   * 
   * @param options - Query parameters
   * @param options.token_id - Comma-separated Token IDs
   * @param options.symbol - Comma-separated Token Symbols (e.g., "BTC,ETH")
   * @param options.startDate - Start date in YYYY-MM-DD format
   * @param options.endDate - End date in YYYY-MM-DD format
   * @returns - Hourly OHLCV data with all pages and date ranges combined
   */
  async get(options: TokenFilterParams & DateRangeParams = {}): Promise<ApiResponse<OHLCVData>> {
    return this._paginatedRequest<OHLCVData>('get', 'hourly-ohlcv', options, 29);
  }
}
