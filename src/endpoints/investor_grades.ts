import { BaseEndpoint } from '../base';
import { GradeData, TokenFilterParams, DateRangeParams, ApiResponse } from '../types';

/**
 * Endpoint for accessing long-term investment grades
 */
export class InvestorGradesEndpoint extends BaseEndpoint {
  /**
   * Get the long-term investment grades with automatic date chunking and pagination.
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
   * @param options.investorGrade - Minimum TM Investor Grade
   * @param options.investorGradePercentChange - Minimum 24h percent change in TM Investor Grade
   * @returns - Investor grades data with all pages and date ranges combined
   */
  async get(options: TokenFilterParams & DateRangeParams & {
    investorGrade?: string;
    investorGradePercentChange?: string;
  } = {}): Promise<ApiResponse<GradeData>> {
    return this._paginatedRequest<GradeData>('get', 'investor-grades', options, 29);
  }
}
