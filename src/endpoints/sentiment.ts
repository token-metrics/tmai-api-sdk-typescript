import { BaseEndpoint } from '../base.js';
import { TokenFilterParams, DateRangeParams, ApiResponse } from '../types.js';

/**
 * Interface for sentiment data
 */
interface SentimentData {
  symbol: string;
  timestamp: string;
  sentiment: number;
  [key: string]: any;
}

/**
 * Endpoint for accessing market sentiment data
 */
export class SentimentEndpoint extends BaseEndpoint {
  /**
   * Get market sentiment data with automatic date chunking and pagination.
   * 
   * @param options - Query parameters
   * @param options.symbol - Comma-separated Token Symbols (e.g., "BTC,ETH")
   * @param options.startDate - Start date in YYYY-MM-DD format
   * @param options.endDate - End date in YYYY-MM-DD format
   * @returns - Sentiment data with all pages and date ranges combined
   */
  async get(options: Pick<TokenFilterParams, 'symbol'> & DateRangeParams = {}): Promise<ApiResponse<SentimentData>> {
    return this._paginatedRequest<SentimentData>('get', 'sentiments', options, 29);
  }
}
