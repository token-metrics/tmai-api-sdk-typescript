import { BaseEndpoint } from '../base';
import { GradeData, DateRangeParams, PaginationParams, ApiResponse } from '../types';

/**
 * TM Grades endpoint parameters
 */
export interface TMGradesParams {
  token_id?: string;
}

/**
 * TM Grades Historical endpoint parameters
 */
export interface TMGradesHistoricalParams extends DateRangeParams, PaginationParams {
  token_id?: string;
}

/**
 * Endpoint for accessing TM Grades (Token Metrics Grades) and Fundamental Grade insights
 */
export class TMGradesEndpoint extends BaseEndpoint {
  /**
   * Get the latest TM Grade and Fundamental Grade insights for a token, including signals, momentum, and 24‑hour percentage changes.
   * 
   * @param options - Query parameters
   * @param options.token_id - Token ID to get grades for
   * @returns - TM Grades data
   */
  async get(options: TMGradesParams = {}): Promise<ApiResponse<GradeData>> {
    return this._paginatedRequest<GradeData>('get', 'tm-grade', options);
  }

  /**
   * Retrieve historical TM Grade and Fundamental Grade data for a token over a specified date range, including signals and momentum trends.
   * 
   * @param options - Query parameters
   * @param options.token_id - Token ID to get historical grades for
   * @param options.startDate - Start date in YYYY-MM-DD format
   * @param options.endDate - End date in YYYY-MM-DD format
   * @param options.limit - Number of results to return per page
   * @param options.page - Page number for pagination
   * @returns - Historical TM Grades data with all pages and date ranges combined
   * 
   * Note:
   * This method handles the API's 29-day limit limitation by:
   * 1. Automatically chunking the date range into 29-day periods
   * 2. Logging progress during fetching
   * 3. Combining all results into a single response
   */
  async getHistorical(options: TMGradesHistoricalParams = {}): Promise<ApiResponse<GradeData>> {
    return this._paginatedRequest<GradeData>('get', 'tm-grade-history', options, 29);
  }
}