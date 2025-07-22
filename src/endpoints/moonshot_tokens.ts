import { BaseEndpoint } from '../base';
import { MoonshotToken, MoonshotTokenParams, ApiResponse } from '../types';

/**
 * Endpoint for accessing moonshot token information
 */
export class MoonshotTokensEndpoint extends BaseEndpoint {
  /**
   * Get AI-curated token picks (Moonshots) with high breakout potential based on grades, sentiment, volume, and on-chain data.
   * 
   * @param options - Query parameters
   * @param options.type - Type of moonshots to fetch. Accepts "active" or "past". Defaults to "active" if not provided.
   * @param options.limit - Limit the number of items in response. Defaults to 50.
   * @param options.page - Page number for pagination. Defaults to 1.
   * @returns - Moonshot token information including trading signals, grades, market data and ROI
   */
  async get(options: MoonshotTokenParams = {}): Promise<ApiResponse<MoonshotToken>> {
    return this._request<ApiResponse<MoonshotToken>>('get', 'moonshot-tokens', options);
  }
} 