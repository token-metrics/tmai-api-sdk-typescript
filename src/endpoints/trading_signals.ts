import { BaseEndpoint } from '../base';
import { TokenFilterParams, DateRangeParams, ApiResponse } from '../types';

/**
 * Interface for trading signal data
 */
interface TradingSignalData {
  symbol: string;
  timestamp: string;
  signal: string;
  [key: string]: any;
}

/**
 * Endpoint for accessing AI-generated trading signals
 */
export class TradingSignalsEndpoint extends BaseEndpoint {
  /**
   * Get trading signals with automatic date chunking and pagination.
   * 
   * @param options - Query parameters
   * @param options.token_id - Comma-separated Token IDs
   * @param options.symbol - Comma-separated Token Symbols (e.g., "BTC,ETH")
   * @param options.startDate - Start date in YYYY-MM-DD format
   * @param options.endDate - End date in YYYY-MM-DD format
   * @param options.signal - Signal type (e.g., "1" for buy, "0" for neutral, "-1" for sell)
   * @returns - Trading signals data with all pages and date ranges combined
   */
  async get(options: TokenFilterParams & DateRangeParams & {
    signal?: string;
  } = {}): Promise<ApiResponse<TradingSignalData>> {
    return this._paginatedRequest<TradingSignalData>('get', 'trading-signals', options, 29);
  }
}
