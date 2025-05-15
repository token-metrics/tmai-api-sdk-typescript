import { BaseEndpoint } from '../base';
import { TokenFilterParams, ApiResponse } from '../types';

/**
 * Interface for AI reports data
 */
interface AIReportData {
  symbol: string;
  report_type: string;
  report_content: string;
  timestamp: string;
  [key: string]: any;
}

/**
 * Endpoint for accessing AI-generated analysis reports
 */
export class AIReportsEndpoint extends BaseEndpoint {
  /**
   * Get AI-generated reports for tokens.
   * 
   * @param options - Query parameters
   * @param options.symbol - Comma-separated Token Symbols (e.g., "BTC,ETH")
   * @returns - AI reports data
   */
  async get(options: Pick<TokenFilterParams, 'symbol'> = {}): Promise<ApiResponse<AIReportData>> {
    return this._request<ApiResponse<AIReportData>>('get', 'ai-reports', options);
  }
}
