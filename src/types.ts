/**
 * Common types for the Token Metrics AI API SDK
 */

/**
 * Client configuration options
 */
export interface ClientOptions {
  apiKey: string;
}

/**
 * Base API response structure
 */
export interface ApiResponse<T> {
  data: T[];
  [key: string]: any;
}

/**
 * Pagination parameters
 */
export interface PaginationParams {
  page?: number;
  limit?: number;
}

/**
 * Date range parameters
 */
export interface DateRangeParams {
  startDate?: string;
  endDate?: string;
}

/**
 * Token filter parameters
 */
export interface TokenFilterParams {
  token_id?: string;
  token_name?: string;
  symbol?: string;
  category?: string;
  exchange?: string;
  marketcap?: string;
  volume?: string;
  fdv?: string;
}

/**
 * Token data structure
 */
export interface Token {
  id: string;
  symbol: string;
  name: string;
  [key: string]: any;
}

/**
 * OHLCV data structure
 */
export interface OHLCVData {
  symbol: string;
  timestamp: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  [key: string]: any;
}

/**
 * Grade data structure
 */
export interface GradeData {
  symbol: string;
  timestamp: string;
  grade: number;
  [key: string]: any;
}

/**
 * AI Agent message
 */
export interface AIAgentMessage {
  user: string;
}

/**
 * AI Agent response
 */
export interface AIAgentResponse {
  answer?: string;
  [key: string]: any;
}

/**
 * Trading signal data
 */
export interface TradingSignalData {
  symbol: string;
  timestamp: string;
  signal: string;
  [key: string]: any;
}

/**
 * Market metrics data
 */
export interface MarketMetricsData {
  timestamp: string;
  [key: string]: any;
}

/**
 * Correlation data
 */
export interface CorrelationData {
  base_symbol: string;
  quote_symbol: string;
  timestamp: string;
  correlation: number;
  [key: string]: any;
}

/**
 * Indices filter parameters
 */
export interface IndicesParams extends PaginationParams {
  indicesType?: string;
}

/**
 * Indices holdings parameters
 */
export interface IndicesHoldingsParams {
  id: string;
}

/**
 * Indices performance parameters
 */
export interface IndicesPerformanceParams extends DateRangeParams, PaginationParams {
  id: string;
}

/**
 * Index data structure
 */
export interface IndexData {
  id: string;
  name: string;
  type: string;
  [key: string]: any;
}

/**
 * Index holding data structure
 */
export interface IndexHoldingData {
  token_id: string;
  symbol: string;
  name: string;
  weight: number;
  market_cap: number;
  icon_url?: string;
  [key: string]: any;
}

/**
 * Index performance data structure
 */
export interface IndexPerformanceData {
  id: string;
  timestamp: string;
  performance: number;
  [key: string]: any;
}

/**
 * Endpoint limits configuration
 */
export interface EndpointLimits {
  [endpoint: string]: number;
}

/**
 * Hourly trading signal data structure
 */
export interface HourlyTradingSignalData {
  TIMESTAMP: string;
  TOKEN_ID: number;
  TOKEN_NAME: string;
  TOKEN_SYMBOL: string;
  CLOSE: number;
  SIGNAL: string;
  POSITION: string;
  [key: string]: any;
}

/**
 * Moonshot token filter parameters
 */
export interface MoonshotTokenParams extends PaginationParams {
  type?: 'active' | 'past';
}

/**
 * Moonshot token data structure
 */
export interface MoonshotToken {
  LAST_TRADING_SIGNAL_TIME: string;
  TM_TRADER_GRADE: string;
  TM_TRADER_GRADE_24H_PCT_CHANGE: string;
  PRICE_CHANGE_PERCENTAGE_7D_IN_CURRENCY: string;
  MARKET_CAP: string;
  VOLUME_24H: string;
  MOONSHOT_END_AT: string | null;
  MOONSHOT_AT: string;
  MOONSHOT_ROI: number;
  TOKEN_NAME: string;
  TOKEN_SYMBOL: string;
}
