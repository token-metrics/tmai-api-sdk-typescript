import { BaseEndpoint } from '../base';
import { PaginationParams, HourlyTradingSignalData, ApiResponse } from '../types';

/**
 * Endpoint for accessing hourly AI-generated trading signals
 */
export class HourlyTradingSignalsEndpoint extends BaseEndpoint {
  /**
   * Get hourly AI-generated trading signals for long and short positions for all tokens.
   * 
   * @param options - Query parameters
   * @param options.token_id - Comma-separated Token IDs (required)
   * @param options.limit - Number of results to return per page
   * @param options.page - Page number for pagination
   * @returns - Hourly trading signals data
   */
  async get(options: {
    token_id: string;
  } & PaginationParams): Promise<ApiResponse<HourlyTradingSignalData>> {
    return this._request<ApiResponse<HourlyTradingSignalData>>('get', 'hourly-trading-signals', options);
  }
}
