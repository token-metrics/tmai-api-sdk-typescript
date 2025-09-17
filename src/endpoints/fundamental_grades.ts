import { BaseEndpoint } from '../base';
import { FundamentalGradesParams, FundamentalGradeData, FundamentalGradesHistoricalParams, PaginatedApiResponse } from '../types';

/**
 * Endpoint for accessing Fundamental Grades
 */
export class FundamentalGradesEndpoint extends BaseEndpoint {
  /**
   * Get the latest Fundamental Grade insights for a token, including grade class, community score, exchange score, VC score, tokenomics score, and DeFi scanner score.
   * 
   * @param options - Query parameters
   * @param options.token_id - Token ID to get fundamental grades for. Example: 3375
   * @param options.token_name - Crypto Asset Names (e.g., Bitcoin, Ethereum)
   * @param options.symbol - Token symbol (e.g., BTC, ETH)
   * @param options.slug - Comma separated token slugs. Example: bitcoin,ethereum
   * @param options.limit - Limit the number of items in response. Defaults to 50
   * @param options.page - Page number for pagination. Defaults to 1
   * @returns - Fundamental Grades data with pagination
   */
  async get(options: FundamentalGradesParams = {}): Promise<PaginatedApiResponse<FundamentalGradeData>> {
    return this._request<PaginatedApiResponse<FundamentalGradeData>>('get', 'fundamental-grade', options);
  }

  /**
   * Get historical Fundamental Grade insights for a token, including grade class, community score, exchange score, VC score, tokenomics score, and DeFi scanner score over time.
   * 
   * @param options - Query parameters
   * @param options.token_id - Token ID to get historical fundamental grades for. Example: 3375
   * @param options.token_name - Crypto Asset Names (e.g., Bitcoin, Ethereum)
   * @param options.symbol - Token symbol (e.g., BTC, ETH)
   * @param options.slug - Comma separated token slugs. Example: bitcoin,ethereum
   * @param options.start_date - Start Date accepts date as a string - YYYY-MM-DD format. Example: 2025-07-01
   * @param options.end_date - End Date accepts date as a string - YYYY-MM-DD format. Example: 2025-07-05
   * @param options.limit - Limit the number of items in response. Defaults to 50
   * @param options.page - Page number for pagination. Defaults to 1
   * @returns - Historical Fundamental Grades data with pagination
   */
  async getHistorical(options: FundamentalGradesHistoricalParams = {}): Promise<PaginatedApiResponse<FundamentalGradeData>> {
    return this._request<PaginatedApiResponse<FundamentalGradeData>>('get', 'fundamental-grade-history', options);
  }
}
