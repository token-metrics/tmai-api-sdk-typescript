import { BaseEndpoint } from '../base';
import { GradeData, DateRangeParams, PaginationParams, ApiResponse } from '../types';

/**
 * Technology Grades endpoint parameters
 */
export interface TechnologyGradesParams {
  token_id?: string;
  token_name?: string;
  symbol?: string;
}

/**
 * Technology Grades Historical endpoint parameters
 */
export interface TechnologyGradesHistoricalParams extends DateRangeParams, PaginationParams {
  token_id?: string;
  token_name?: string;
  symbol?: string;
}

/**
 * Endpoint for accessing Technology Grades
 */
export class TechnologyGradesEndpoint extends BaseEndpoint {
  /**
   * Get Technology Grade insights for a token, including activity score, security score, repository score, collaboration score, and DeFi scanner score.
   * 
   * @param options - Query parameters
   * @param options.token_id - Token ID to get technology grade for
   * @param options.token_name - Crypto Asset Names (e.g., Bitcoin, Ethereum)
   * @param options.symbol - Token symbol (e.g., BTC, ETH)
   * @returns - Technology Grades data
   */
  async get(options: TechnologyGradesParams = {}): Promise<ApiResponse<GradeData>> {
    return this._paginatedRequest<GradeData>('get', 'technology-grade', options);
  }

  /**
   * Get historical Technology Grade data for a token, including activity score, security score, repository score, collaboration score, and DeFi scanner score over time.
   * 
   * @param options - Query parameters
   * @param options.token_id - Token ID to get historical technology grades for
   * @param options.token_name - Crypto Asset Names (e.g., Bitcoin, Ethereum)
   * @param options.symbol - Token symbol (e.g., BTC, ETH)
   * @param options.startDate - Start date in YYYY-MM-DD format
   * @param options.endDate - End date in YYYY-MM-DD format
   * @param options.limit - Number of results to return per page (defaults to 50)
   * @param options.page - Page number for pagination (defaults to 1)
   * @returns - Historical Technology Grades data with all pages and date ranges combined
   * 
   * Note:
   * This method handles automatic pagination and date chunking for large date ranges.
   */
  async getHistorical(options: TechnologyGradesHistoricalParams = {}): Promise<ApiResponse<GradeData>> {
    return this._paginatedRequest<GradeData>('get', 'technology-grade-history', options);
  }
}