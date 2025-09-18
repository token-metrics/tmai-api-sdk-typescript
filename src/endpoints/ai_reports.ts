import { BaseEndpoint } from '../base';
import { AIReportsParams, AIReportData, PaginatedApiResponse } from '../types';

/**
 * Endpoint for accessing AI-generated analysis reports
 */
export class AIReportsEndpoint extends BaseEndpoint {
  /**
   * Retrieve AI-generated reports providing comprehensive analyses of cryptocurrency tokens, including deep dives, investment analyses, and code reviews.
   * 
   * @param options - Query parameters
   * @param options.token_id - Comma Separated Token IDs. Example: 37493,3484
   * @param options.token_name - Comma Separated Crypto Asset Names (e.g., Bitcoin, Ethereum)
   * @param options.symbol - Comma Separated Token Symbols. Example: APX,PAAL
   * @param options.limit - Limit the number of items in response. Defaults to 50
   * @param options.page - Page number for pagination. Defaults to 1
   * @returns - AI reports data with pagination
   */
  async get(options: AIReportsParams = {}): Promise<PaginatedApiResponse<AIReportData>> {
    return this._request<PaginatedApiResponse<AIReportData>>('get', 'ai-reports', options);
  }
}
