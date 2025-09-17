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
export interface TokenFilterParams extends PaginationParams {
  token_id?: string;
  token_name?: string;
  symbol?: string;
  category?: string;
  exchange?: string;
  marketcap?: string;
  volume?: string;
  fdv?: string;
  slug?: string;
  expand?: string;
  blockchain_address?: string;
}

/**
 * Trading signals filter parameters
 */
export interface TradingSignalsParams extends TokenFilterParams, DateRangeParams {
  signal?: string;
}

/**
 * Exchange data structure
 */
export interface ExchangeData {
  exchange_id: string;
  exchange_name: string;
}

/**
 * Category data structure  
 */
export interface CategoryData {
  category_id: number;
  category_name: string;
  category_slug: string;
}

/**
 * Token data structure
 */
export interface Token {
  token_id: number;
  token_name: string;
  token_symbol: string;
  slug: string;
  exchange_list: ExchangeData[];
  category_list: CategoryData[];
  contract_address: Record<string, any>;
  current_price: number;
  market_cap: number;
  total_volume: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  fully_diluted_valuation: number;
  high_24_h: number;
  low_24_h: number;
  price_change_percentage_24_h_in_currency: number;
  app_link: string;
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
  token_id: number;
  token_name: string;
  token_symbol: string;
  slug: string;
  date: string;
  trading_signal: number;
  trading_signal_str: string;
  token_trend: number;
  token_trend_str: string;
  trading_signals_returns: number;
  holding_returns: number;
  app_link: string;
  tm_grade: number;
  fundamental_grade: number;
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

/**
 * Paginated API response structure
 */
export interface PaginatedApiResponse<T> {
  success: boolean;
  message: string;
  data: T[];
  pagination: {
    total: number;
    total_pages: number;
    current_page: number;
    limit: number;
  };
}
