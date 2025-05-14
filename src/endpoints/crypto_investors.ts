import { BaseEndpoint } from '../base.js';
import { ApiResponse } from '../types.js';

/**
 * Interface for crypto investor data
 */
interface CryptoInvestorData {
  id: string;
  name: string;
  [key: string]: any;
}

/**
 * Endpoint for accessing information about crypto investors
 */
export class CryptoInvestorsEndpoint extends BaseEndpoint {
  /**
   * Get information about crypto investors.
   * 
   * @param options - Query parameters
   * @returns - Crypto investors data
   */
  async get(options: Record<string, any> = {}): Promise<ApiResponse<CryptoInvestorData>> {
    return this._request<ApiResponse<CryptoInvestorData>>('get', 'crypto-investors', options);
  }
}
