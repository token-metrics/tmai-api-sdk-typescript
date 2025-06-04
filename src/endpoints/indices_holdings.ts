import { BaseEndpoint } from '../base';
import { IndexHoldingData, IndicesHoldingsParams, ApiResponse } from '../types';

export class IndicesHoldingsEndpoint extends BaseEndpoint {
  async get(options: IndicesHoldingsParams): Promise<ApiResponse<IndexHoldingData>> {
    return this._request<ApiResponse<IndexHoldingData>>('get', 'indices-holdings', options);
  }
}
