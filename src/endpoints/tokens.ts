import { BaseEndpoint } from '../base';
import { Token, TokenFilterParams } from '../types';
import { ApiResponse } from '../types';

/**
 * Endpoint for accessing token information
 */
export class TokensEndpoint extends BaseEndpoint {
  /**
   * Get information about tokens.
   * 
   * @param options - Query parameters
   * @param options.token_id - Comma-separated Token IDs
   * @param options.symbol - Comma-separated Token Symbols (e.g., "BTC,ETH")
   * @param options.category - Comma-separated category names (e.g., "layer-1,nft")
   * @param options.exchange - Comma-separated exchange names (e.g., "binance,gate")
   * @param options.marketcap - Minimum MarketCap in $
   * @param options.volume - Minimum 24h trading volume in $
   * @param options.fdv - Minimum fully diluted valuation in $
   * @returns - Token information
   */
  async get(options: TokenFilterParams = {}): Promise<ApiResponse<Token>> {
    return this._request<ApiResponse<Token>>('get', 'tokens', options);
  }
}
