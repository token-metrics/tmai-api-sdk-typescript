import { BaseEndpoint } from '../base';
import { OHLCVData, TokenFilterParams, DateRangeParams, PaginatedApiResponse } from '../types';

/**
 * Endpoint for accessing daily OHLCV (Open, High, Low, Close, Volume) data
 */
export class DailyOHLCVEndpoint extends BaseEndpoint {
  /**
   * Get daily OHLCV (open, high, low, close, volume) data for tokens.
   * 
   * @param options - Query parameters
   * @param options.token_id - Comma-separated Token IDs. Example: 3375
   * @param options.token_name - Comma-separated Crypto Asset Names (e.g., Bitcoin, Ethereum)
   * @param options.symbol - Comma-separated Token Symbols. Example: BTC
   * @param options.slug - Comma-separated token slugs. Example: bitcoin,ethereum
   * @param options.startDate - Start Date (YYYY-MM-DD format). Note: Start Date cannot be earlier than the past 30 days from current date. Example: 2025-01-01
   * @param options.endDate - End Date (YYYY-MM-DD format). Example: 2025-01-23
   * @param options.limit - Limit the number of items in response. Defaults to 50
   * @param options.page - Page number for pagination. Defaults to 1
   * @returns - Daily OHLCV data with pagination
   */
  async get(options: TokenFilterParams & DateRangeParams = {}): Promise<PaginatedApiResponse<OHLCVData>> {
    return this._request<PaginatedApiResponse<OHLCVData>>('get', 'daily-ohlcv', options);
  }
}
