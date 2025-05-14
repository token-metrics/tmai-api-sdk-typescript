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
 * Endpoint limits configuration
 */
export interface EndpointLimits {
  [endpoint: string]: number;
}
