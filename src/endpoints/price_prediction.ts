import { BaseEndpoint } from '../base';
import { TokenFilterParams, ApiResponse, PaginationParams } from '../types';

/**
 * Interface for price prediction scenario data
 */
interface PricePredictionScenario {
  scenario: number;
  predicted_fdv_base: number;
  predicted_fdv_bear: number;
  predicted_fdv_moon: number;
  predicted_roi_base: number;
  predicted_roi_bear: number;
  predicted_roi_moon: number;
  predicted_mcap_base: number;
  predicted_mcap_bear: number;
  predicted_mcap_moon: number;
  total_mcap_scenario: number;
  predicted_price_base: number;
  predicted_price_bear: number;
  predicted_price_moon: number;
}

/**
 * Interface for price prediction data
 */
interface PricePrediction {
  token_mcap: number;
  total_mcap: number;
  category_name: string;
  current_price: number;
  predicted_date: string;
  similar_tokens_info: any;
  avg_past_performance: number;
  self_past_performance: number;
  price_prediction: PricePredictionScenario[];
}

/**
 * Interface for price prediction response data
 */
interface PricePredictionData {
  TOKEN_ID: number;
  TOKEN_NAME: string;
  TOKEN_SYMBOL: string;
  DATE: string;
  PRICE_PREDICTION: PricePrediction;
}

/**
 * Interface for price prediction query parameters
 */
export interface PricePredictionParams extends Pick<TokenFilterParams, 'token_id' | 'symbol'>, PaginationParams {
  limit?: number;
}

/**
 * Endpoint for accessing crypto price predictions
 */
export class PricePredictionEndpoint extends BaseEndpoint {
  /**
   * Get price prediction data.
   * 
   * @param options - Query parameters
   * @param options.token_id - Comma-separated Token IDs (e.g., "3306,3375")
   * @param options.symbol - Comma-separated Token Symbols (e.g., "BTC,ETH")
   * @param options.limit - Limit the number of results (defaults to 50)
   * @param options.page - Page number for pagination
   * @returns - Price prediction data
   */
  async get(options: PricePredictionParams = {}): Promise<ApiResponse<PricePredictionData>> {
    return this._request<ApiResponse<PricePredictionData>>('get', 'price-prediction', options);
  }
}
