import { BaseEndpoint } from '../base';
import { Token, TokenFilterParams, PaginatedApiResponse } from '../types';

/**
 * Endpoint for accessing token information
 */
export class TokensEndpoint extends BaseEndpoint {
  /**
   * Get information about tokens.
   * 
   * @param options - Query parameters
   * @param options.token_id - Comma-separated Token IDs
   * @param options.token_name - Comma-separated Crypto Asset Names (e.g., Bitcoin, Ethereum)
   * @param options.symbol - Comma-separated Token Symbols (e.g., "BTC,ETH")
   * @param options.slug - Comma-separated token slugs. Click here to access the list of token slugs. Example: bitcoin,ethereum
   * @param options.expand - Expand exchange_list or category_list to return full object
   * @param options.category - Comma-separated category name. Click here to access the list of categories. Example: yield-farming,defi
   * @param options.exchange - Comma-separated exchange name. Click here to access the list of exchanges. Example: binance,gate
   * @param options.blockchain_address - Use this parameter to search tokens through specific blockchains and contract addresses. Input the blockchain name followed by colon and then the contract address. Example: binance-smart-chain:0x57185d1b8c7636fc1e9dcc1f9b5b3c5fd5f95ad
   * @param options.marketcap - Minimum MarketCap in $
   * @param options.volume - Minimum 24h trading volume in $
   * @param options.fdv - Minimum fully diluted valuation in $
   * @param options.limit - Limit the number of items in response. Defaults to 50
   * @param options.page - Enable pagination and data retrieval control by skipping a specified number of records. Defaults to 1
   * @returns - Token information with pagination
   */
  async get(options: TokenFilterParams = {}): Promise<PaginatedApiResponse<Token>> {
    return this._request<PaginatedApiResponse<Token>>('get', 'tokens', options);
  }
}
