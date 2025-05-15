import { BaseEndpoint } from '../base';
import { GradeData, TokenFilterParams, DateRangeParams, ApiResponse } from '../types';

/**
 * Endpoint for accessing short-term trading grades
 */
export class TraderGradesEndpoint extends BaseEndpoint {
  /**
   * Get the short-term trading grades with automatic date chunking and pagination.
   * 
   * @param options - Query parameters
   * @param options.token_id - Comma-separated Token IDs
   * @param options.startDate - Start date in YYYY-MM-DD format
   * @param options.endDate - End date in YYYY-MM-DD format
   * @param options.symbol - Comma-separated Token Symbols (e.g., "BTC,ETH")
   * @param options.category - Comma-separated category names
   * @param options.exchange - Comma-separated exchange names
   * @param options.marketcap - Minimum MarketCap in $
   * @param options.fdv - Minimum fully diluted valuation in $
   * @param options.volume - Minimum 24h trading volume in $
   * @param options.traderGrade - Minimum TM Trader Grade
   * @param options.traderGradePercentChange - Minimum 24h percent change in TM Trader Grade
   * @returns - Trader grades data with all pages and date ranges combined
   * 
   * Note:
   * This method handles the API's 29-day limit limitation by:
   * 1. Automatically chunking the date range into 29-day periods
   * 2. Logging progress during fetching
   * 3. Combining all results into a single response
   */
  async get(options: TokenFilterParams & DateRangeParams & {
    traderGrade?: string;
    traderGradePercentChange?: string;
  } = {}): Promise<ApiResponse<GradeData>> {
    return this._paginatedRequest<GradeData>('get', 'trader-grades', options, 29);
  }
}
