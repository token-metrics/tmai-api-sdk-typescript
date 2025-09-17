import { BaseEndpoint } from '../base';
import { TechnologyGradeData, DateRangeParams, PaginationParams, PaginatedApiResponse } from '../types';

/**
 * Technology Grades endpoint parameters
 */
export interface TechnologyGradesParams {
  token_id?: string;
  token_name?: string;
  symbol?: string;
  slug?: string;
}

/**
 * Technology Grades Historical endpoint parameters
 */
export interface TechnologyGradesHistoricalParams extends DateRangeParams, PaginationParams {
  token_id?: string;
  token_name?: string;
  symbol?: string;
  slug?: string;
}

/**
 * Endpoint for accessing Technology Grades
 */
export class TechnologyGradesEndpoint extends BaseEndpoint {
  /**
   * Get Technology Grade insights for a token, including activity score, security score, repository score, collaboration score, and DeFi scanner score.
   * 
   * @param options - Query parameters
   * @param options.token_id - Token IDs. Example: 3375
   * @param options.token_name - Crypto Asset Names (e.g., Bitcoin, Ethereum)
   * @param options.symbol - Token symbols. Example: BTC
   * @param options.slug - Token slugs. Example: bitcoin,ethereum
   * @returns - Technology Grades data
   */
  async get(options: TechnologyGradesParams = {}): Promise<PaginatedApiResponse<TechnologyGradeData>> {
    return this._request<PaginatedApiResponse<TechnologyGradeData>>('get', 'technology-grade', options);
  }

  /**
   * Get historical Technology Grade data for a token, including activity score, security score, repository score, collaboration score, and DeFi scanner score over time.
   * 
   * @param options - Query parameters
   * @param options.token_id - Token IDs. Example: 3375
   * @param options.token_name - Crypto Asset Names (e.g., Bitcoin, Ethereum)
   * @param options.symbol - Token symbols. Example: BTC
   * @param options.slug - Token slugs. Example: bitcoin,ethereum
   * @param options.start_date - Start Date (YYYY-MM-DD format). Example: 2025-07-01
   * @param options.end_date - End Date (YYYY-MM-DD format). Example: 2025-07-05
   * @param options.limit - Limit the number of items in response. Defaults to 50
   * @param options.page - Page number for pagination. Defaults to 1
   * @returns - Historical Technology Grades data
   */
  async getHistorical(options: TechnologyGradesHistoricalParams = {}): Promise<PaginatedApiResponse<TechnologyGradeData>> {
    return this._request<PaginatedApiResponse<TechnologyGradeData>>('get', 'technology-grade-history', options);
  }
}