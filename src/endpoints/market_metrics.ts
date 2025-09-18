import { BaseEndpoint } from '../base';
import { MarketMetricsParams, MarketMetricsData, PaginatedApiResponse } from '../types';

/**
 * Endpoint for accessing overall market data
 */
export class MarketMetricsEndpoint extends BaseEndpoint {
  /**
   * Get the Market Analytics from Token Metrics. They provide insight into the full Crypto Market, including the Bullish/Bearish Market indicator.
   * 
   * @param options - Query parameters
   * @param options.start_date - Start Date accepts date as a string - YYYY-MM-DD format. Example: 2023-10-01
   * @param options.end_date - End Date accepts date as a string - YYYY-MM-DD format. Example: 2023-10-10
   * @param options.limit - Limit the number of items in response. Defaults to 50
   * @param options.page - Page number for pagination. Defaults to 1
   * @returns - Market metrics data with pagination
   */
  async get(options: MarketMetricsParams = {}): Promise<PaginatedApiResponse<MarketMetricsData>> {
    return this._request<PaginatedApiResponse<MarketMetricsData>>('get', 'market-metrics', options);
  }
}
