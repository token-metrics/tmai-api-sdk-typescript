import { BaseEndpoint } from '../base.js';
import { TokenFilterParams, ApiResponse } from '../types.js';

/**
 * Interface for scenario analysis data
 */
interface ScenarioAnalysisData {
  symbol: string;
  scenario: string;
  probability: number;
  price_target: number;
  timestamp: string;
  [key: string]: any;
}

/**
 * Endpoint for accessing market scenario predictions
 */
export class ScenarioAnalysisEndpoint extends BaseEndpoint {
  /**
   * Get scenario analysis data.
   * 
   * @param options - Query parameters
   * @param options.symbol - Comma-separated Token Symbols (e.g., "BTC,ETH")
   * @returns - Scenario analysis data
   */
  async get(options: Pick<TokenFilterParams, 'symbol'> = {}): Promise<ApiResponse<ScenarioAnalysisData>> {
    return this._request<ApiResponse<ScenarioAnalysisData>>('get', 'scenario-analysis', options);
  }
}
