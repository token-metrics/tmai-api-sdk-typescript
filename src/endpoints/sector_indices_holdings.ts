import { BaseEndpoint } from '../base';
import { ApiResponse } from '../types';

/**
 * Interface for sector indices holdings data
 */
interface SectorIndicesHoldingsData {
  INDEX_ID: string;
  SYMBOL: string;
  WEIGHT: number;
  TIMESTAMP: string;
  [key: string]: any;
}

/**
 * Endpoint for retrieving holdings data for sector indices
 */
export class SectorIndicesHoldingsEndpoint extends BaseEndpoint {
  /**
   * Get sector indices holdings data.
   * 
   * @param options - Query parameters
   * @param options.index_id - Index ID
   * @returns - Sector indices holdings data
   */
  async get(options: { index_id: string }): Promise<ApiResponse<SectorIndicesHoldingsData>> {
    return this._request<ApiResponse<SectorIndicesHoldingsData>>('get', 'sector-indices-holdings', options);
  }
}
