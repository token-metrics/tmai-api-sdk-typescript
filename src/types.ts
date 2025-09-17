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
  start_date?: string;
  end_date?: string;
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
  token_id: number;
  token_name: string;
  token_symbol: string;
  slug: string;
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
  timestamp: string;
  token_id: number;
  token_name: string;
  token_symbol: string;
  slug: string;
  close: number;
  signal: number;
  signal_str: string;
  position: number;
  position_str: string;
  app_link: string;
  [key: string]: any;
}

/**
 * Hourly trading signals filter parameters
 */
export interface HourlyTradingSignalsParams extends PaginationParams {
  token_id?: string;
  token_name?: string;
  symbol?: string;
  slug?: string;
}

/**
 * Moonshot token filter parameters
 */
export interface MoonshotTokenParams extends PaginationParams {
  type?: 'active' | 'past';
  sort_by?: 'moonshot_at' | 'roi_pct' | 'tm_grade' | 'market_cap_usd';
}

/**
 * Moonshot token data structure
 */
export interface MoonshotToken {
  token_id: string;
  last_trading_signal_time: string;
  tm_grade: number;
  tm_grade_24_h_change_pct: number;
  price_change_percentage_7d_in_currency: number;
  market_cap_usd: number;
  volume_24_h_usd: number;
  moonshot_end_at: string | null;
  moonshot_at: string;
  moonshot_roi: number;
  currency: string;
  token_name: string;
  token_symbol: string;
  slug: string;
  last_trading_signal: number;
  last_trading_signal_str: string;
  app_link: string;
  [key: string]: any;
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

/**
 * Price data structure
 */
export interface PriceData {
  token_id: number;
  current_price: number;
  token_name: string;
  token_symbol: string;
  slug: string;
  app_link: string;
  [key: string]: any;
}

/**
 * Technology Grade data structure
 */
export interface TechnologyGradeData {
  token_id: number;
  token_name: string;
  token_symbol: string;
  slug: string;
  date?: string;
  technology_grade: number;
  activity_score: number;
  security_score: number;
  repository_score: number;
  collaboration_score: number;
  defi_scanner_score: number;
  app_link: string;
  [key: string]: any;
}

/**
 * Quantmetrics data structure
 */
export interface QuantmetricsData {
  token_id: number;
  token_name: string;
  token_symbol: string;
  slug: string;
  date: string;
  volatility: number;
  all_time_return: number;
  cap: number;
  sharpe: number;
  sortino: number;
  max_drawdown: number;
  skew: number;
  tail_ratio: number;
  risk_reward_ratio: number;
  profit_factor: number;
  kurtosis: number;
  daily_value_at_risk: number;
  daily_return_avg: number;
  daily_return_std: number;
  app_link: string;
  [key: string]: any;
}

/**
 * Resistance support filter parameters
 */
export interface ResistanceSupportParams extends PaginationParams {
  token_id?: string;
  token_name?: string;
  symbol?: string;
  slug?: string;
}

/**
 * Historical resistance support level data structure
 */
export interface HistoricalResistanceSupportLevel {
  date: string;
  level: number;
}

/**
 * Resistance support data structure
 */
export interface ResistanceSupportData {
  token_id: number;
  token_name: string;
  token_symbol: string;
  slug: string;
  date: string;
  historical_resistance_support_levels: HistoricalResistanceSupportLevel[];
  app_link: string;
  [key: string]: any;
}

/**
 * Fundamental grades filter parameters
 */
export interface FundamentalGradesParams extends PaginationParams {
  token_id?: string;
  token_name?: string;
  symbol?: string;
  slug?: string;
}

/**
 * Fundamental grade data structure
 */
export interface FundamentalGradeData {
  token_id: number;
  token_name: string;
  token_symbol: string;
  slug: string;
  fundamental_grade: number;
  fundamental_grade_class: string;
  community_score: number;
  exchange_score: number;
  vc_score: number;
  tokenomics_score: number;
  defi_scanner_score: number;
  app_link: string;
  [key: string]: any;
}

/**
 * Fundamental Grades Historical endpoint parameters
 */
export interface FundamentalGradesHistoricalParams extends DateRangeParams, PaginationParams {
  token_id?: string;
  token_name?: string;
  symbol?: string;
  slug?: string;
}
