import { BaseEndpoint } from '../base';
import { IndexData, IndicesParams, ApiResponse } from '../types';

export class IndicesEndpoint extends BaseEndpoint {
  async get(options: IndicesParams = {}): Promise<ApiResponse<IndexData>> {
    return this._request<ApiResponse<IndexData>>('get', 'indices', options);
  }
}
