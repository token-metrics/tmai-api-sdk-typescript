import { BaseEndpoint } from '../base';
import { TMGradesParams, TMGradesHistoricalParams, TMGradeData, TMGradeHistoricalData, PaginatedApiResponse } from '../types';

/**
 * Endpoint for accessing TM Grades (Token Metrics Grades)
 */
export class TMGradesEndpoint extends BaseEndpoint {
  /**
   * Get the latest TM Grade for a token, including trader grade change, quant grade, signals, momentum, and 24-hour percentage changes for both TM Grade and Trader Grade.
   * 
   * @param options - Query parameters
   * @param options.token_id - Token ID to get grades for. Example: 3375
   * @param options.token_name - Crypto Asset Names (e.g., Bitcoin, Ethereum)
   * @param options.symbol - Token symbol (e.g., BTC, ETH)
   * @param options.slug - Comma separated token slugs. Example: bitcoin,ethereum
   * @param options.limit - Limit the number of items in response. Defaults to 50
   * @param options.page - Page number for pagination. Defaults to 1
   * @returns - TM Grades data with pagination
   */
  async get(options: TMGradesParams = {}): Promise<PaginatedApiResponse<TMGradeData>> {
    return this._request<PaginatedApiResponse<TMGradeData>>('get', 'tm-grade', options);
  }

  /**
   * Get historical TM Grade data for a token, including trader grade change, quant grade, signals, momentum, and 24-hour percentage changes for both TM Grade and Trader Grade over time.
   * 
   * @param options - Query parameters
   * @param options.token_id - Token ID to get historical grades for. Example: 3375
   * @param options.token_name - Crypto Asset Names (e.g., Bitcoin, Ethereum)
   * @param options.symbol - Token symbol (e.g., BTC, ETH)
   * @param options.slug - Comma separated token slugs. Example: bitcoin,ethereum
   * @param options.start_date - Start Date accepts date as a string - YYYY-MM-DD format. Example: 2025-07-01
   * @param options.end_date - End Date accepts date as a string - YYYY-MM-DD format. Example: 2025-07-05
   * @param options.limit - Limit the number of items in response. Defaults to 50
   * @param options.page - Page number for pagination. Defaults to 1
   * @returns - Historical TM Grades data with pagination
   */
  async getHistorical(options: TMGradesHistoricalParams = {}): Promise<PaginatedApiResponse<TMGradeHistoricalData>> {
    return this._request<PaginatedApiResponse<TMGradeHistoricalData>>('get', 'tm-grade-history', options);
  }
}