import { BaseEndpoint } from '../base';
import { GradeData, DateRangeParams, PaginationParams, ApiResponse } from '../types';

/**
 * Fundamental Grades endpoint parameters
 */
export interface FundamentalGradesParams {
  token_id?: string;
  token_name?: string;
  symbol?: string;
}

/**
 * Fundamental Grades Historical endpoint parameters
 */
export interface FundamentalGradesHistoricalParams extends DateRangeParams, PaginationParams {
  token_id?: string;
  token_name?: string;
  symbol?: string;
}

/**
 * Endpoint for accessing Fundamental Grades
 */
export class FundamentalGradesEndpoint extends BaseEndpoint {
  /**
   * Get the latest Fundamental Grade insights for a token, including grade class, community score, exchange score, VC score, tokenomics score, and DeFi scanner score.
   * 
   * @param options - Query parameters
   * @param options.token_id - Token ID to get fundamental grades for
   * @param options.token_name - Crypto Asset Names (e.g., Bitcoin, Ethereum)
   * @param options.symbol - Token symbol (e.g., BTC, ETH)
   * @returns - Fundamental Grades data
   */
  async get(options: FundamentalGradesParams = {}): Promise<ApiResponse<GradeData>> {
    return this._paginatedRequest<GradeData>('get', 'fundamental-grade', options);
  }

  /**
   * Get historical Fundamental Grade insights for a token, including grade class, community score, exchange score, VC score, tokenomics score, and DeFi scanner score over time.
   * 
   * @param options - Query parameters
   * @param options.token_id - Token ID to get historical fundamental grades for
   * @param options.token_name - Crypto Asset Names (e.g., Bitcoin, Ethereum)
   * @param options.symbol - Token symbol (e.g., BTC, ETH)
   * @param options.startDate - Start date in YYYY-MM-DD format
   * @param options.endDate - End date in YYYY-MM-DD format
   * @param options.limit - Number of results to return per page (defaults to 50)
   * @param options.page - Page number for pagination (defaults to 1)
   * @returns - Historical Fundamental Grades data with all pages and date ranges combined
   * 
   * Note:
   * This method handles automatic pagination and date chunking for large date ranges.
   */
  async getHistorical(options: FundamentalGradesHistoricalParams = {}): Promise<ApiResponse<GradeData>> {
    return this._paginatedRequest<GradeData>('get', 'fundamental-grade-history', options);
  }
}
