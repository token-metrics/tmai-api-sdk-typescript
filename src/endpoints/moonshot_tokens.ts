import { BaseEndpoint } from '../base';
import { MoonshotToken, MoonshotTokenParams, PaginatedApiResponse } from '../types';

/**
 * Endpoint for accessing moonshot token information
 */
export class MoonshotTokensEndpoint extends BaseEndpoint {
  /**
   * Get AI-curated token picks (Moonshots) with high breakout potential based on grades, sentiment, volume, and on-chain data to help users trade smarter and faster.
   * 
   * @param options - Query parameters
   * @param options.type - Accepts "active" or "past" to fetch respective moonshots. Defaults to "active" if not provided.
   * @param options.sort_by - Field to sort results by. Supported values: moonshot_at, roi_pct, tm_grade, market_cap_usd
   * @param options.limit - Limit the number of items in response. Defaults to 50
   * @param options.page - Page number for pagination. Defaults to 1
   * @returns - Moonshot token information including trading signals, grades, market data and ROI
   */
  async get(options: MoonshotTokenParams = {}): Promise<PaginatedApiResponse<MoonshotToken>> {
    return this._request<PaginatedApiResponse<MoonshotToken>>('get', 'moonshot-tokens', options);
  }
} 