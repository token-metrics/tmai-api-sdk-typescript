import { BaseEndpoint } from '../base';
import { IndexPerformanceData, IndicesPerformanceParams, ApiResponse } from '../types';

export class IndicesPerformanceEndpoint extends BaseEndpoint {
  async get(options: IndicesPerformanceParams): Promise<ApiResponse<IndexPerformanceData>> {
    return this._paginatedRequest<IndexPerformanceData>('get', 'indices-performance', options, 29);
  }
}
