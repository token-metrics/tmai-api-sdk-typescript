import { BaseEndpoint } from '../base';
import { GradeData, DateRangeParams, PaginationParams, ApiResponse } from '../types';

/**
 * Technology Grades endpoint parameters
 */
export interface TechnologyGradesParams extends DateRangeParams, PaginationParams {
  token_id?: string;
  symbol?: string;
}

/**
 * Endpoint for accessing Technology Grades
 */
export class TechnologyGradesEndpoint extends BaseEndpoint {
  /**
   * Get the latest Technology Grade for a token, reflecting its tech strength and innovation ranking compared to other tokens.
   * 
   * @param options - Query parameters
   * @param options.token_id - Token ID to get technology grade for
   * @param options.symbol - Token symbol (e.g., "BTC")
   * @param options.startDate - Start date in YYYY-MM-DD format
   * @param options.endDate - End date in YYYY-MM-DD format
   * @param options.limit - Number of results to return per page (defaults to 50)
   * @param options.page - Page number for pagination (defaults to 1)
   * @returns - Technology Grades data with all pages and date ranges combined
   * 
   * Note:
   * This method handles automatic pagination and date chunking for large date ranges.
   */
  async get(options: TechnologyGradesParams = {}): Promise<ApiResponse<GradeData>> {
    return this._paginatedRequest<GradeData>('get', 'technology-grade', options);
  }
}