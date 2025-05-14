import { BaseEndpoint } from '../base';
import { TokenFilterParams, ApiResponse } from '../types';

/**
 * Interface for resistance and support data
 */
interface ResistanceSupportData {
  symbol: string;
  resistance: number;
  support: number;
  timestamp: string;
  [key: string]: any;
}

/**
 * Endpoint for accessing technical price resistance and support levels
 */
export class ResistanceSupportEndpoint extends BaseEndpoint {
  /**
   * Get resistance and support levels for tokens.
   * 
   * @param options - Query parameters
   * @param options.symbol - Comma-separated Token Symbols (e.g., "BTC,ETH")
   * @returns - Resistance and support data
   */
  async get(options: Pick<TokenFilterParams, 'symbol'> = {}): Promise<ApiResponse<ResistanceSupportData>> {
    return this._request<ApiResponse<ResistanceSupportData>>('get', 'resistance-support', options);
  }
}
