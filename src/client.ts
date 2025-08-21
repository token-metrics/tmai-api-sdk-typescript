
import { TokensEndpoint } from './endpoints/tokens';
import { AIAgentEndpoint } from './endpoints/ai_agent';
import { TradingSignalsEndpoint } from './endpoints/trading_signals';
import { HourlyTradingSignalsEndpoint } from './endpoints/hourly_trading_signals';
import { HourlyOHLCVEndpoint } from './endpoints/hourly_ohlcv';
import { DailyOHLCVEndpoint } from './endpoints/daily_ohlcv';
import { MarketMetricsEndpoint } from './endpoints/market_metrics';
import { AIReportsEndpoint } from './endpoints/ai_reports';
import { CryptoInvestorsEndpoint } from './endpoints/crypto_investors';
import { TopMarketCapTokensEndpoint } from './endpoints/top_market_cap_tokens';
import { ResistanceSupportEndpoint } from './endpoints/resistance_support';
import { PriceEndpoint } from './endpoints/price';
import { QuantmetricsEndpoint } from './endpoints/quantmetrics';
import { PricePredictionEndpoint } from './endpoints/price_prediction';
import { CorrelationEndpoint } from './endpoints/correlation';
import { IndicesEndpoint } from './endpoints/indices';
import { IndicesHoldingsEndpoint } from './endpoints/indices_holdings';
import { IndicesPerformanceEndpoint } from './endpoints/indices_performance';
import { MoonshotTokensEndpoint } from './endpoints/moonshot_tokens';
import { TMGradesEndpoint } from './endpoints/tm_grades';
import { TechnologyGradesEndpoint } from './endpoints/technology_grades';
import { FundamentalGradesEndpoint } from './endpoints/fundamental_grades';

/**
 * Main client for interacting with the Token Metrics AI API.
 */
export class TokenMetricsClient {
  /**
   * Base URL for the Token Metrics API
   */
  static readonly BASE_URL = "https://api.tokenmetrics.com/v2";

  /**
   * API key for authentication
   */
  readonly apiKey: string;

  /**
   * Endpoint instances
   */
  readonly tokens: TokensEndpoint;
  readonly aiAgent: AIAgentEndpoint;
  readonly tradingSignals: TradingSignalsEndpoint;
  readonly hourlyTradingSignals: HourlyTradingSignalsEndpoint;
  readonly hourlyOhlcv: HourlyOHLCVEndpoint;
  readonly dailyOhlcv: DailyOHLCVEndpoint;
  readonly marketMetrics: MarketMetricsEndpoint;
  readonly aiReports: AIReportsEndpoint;
  readonly cryptoInvestors: CryptoInvestorsEndpoint;
  readonly topMarketCapTokens: TopMarketCapTokensEndpoint;
  readonly resistanceSupport: ResistanceSupportEndpoint;
  readonly price: PriceEndpoint;
  readonly quantmetrics: QuantmetricsEndpoint;
  readonly pricePrediction: PricePredictionEndpoint;
  readonly correlation: CorrelationEndpoint;
  readonly indices: IndicesEndpoint;
  readonly indicesHoldings: IndicesHoldingsEndpoint;
  readonly indicesPerformance: IndicesPerformanceEndpoint;
  readonly moonshotTokens: MoonshotTokensEndpoint;
  readonly tmGrades: TMGradesEndpoint;
  readonly technologyGrades: TechnologyGradesEndpoint;
  readonly fundamentalGrades: FundamentalGradesEndpoint;

  /**
   * Initialize the Token Metrics client.
   * 
   * @param apiKey - Your Token Metrics API key
   */
  constructor(apiKey: string) {
    this.apiKey = apiKey;
    
    this.tokens = new TokensEndpoint(this);
    this.aiAgent = new AIAgentEndpoint(this);
    this.tradingSignals = new TradingSignalsEndpoint(this);
    this.hourlyTradingSignals = new HourlyTradingSignalsEndpoint(this);
    this.hourlyOhlcv = new HourlyOHLCVEndpoint(this);
    this.dailyOhlcv = new DailyOHLCVEndpoint(this);
    this.marketMetrics = new MarketMetricsEndpoint(this);
    this.aiReports = new AIReportsEndpoint(this);
    this.cryptoInvestors = new CryptoInvestorsEndpoint(this);
    this.topMarketCapTokens = new TopMarketCapTokensEndpoint(this);
    this.resistanceSupport = new ResistanceSupportEndpoint(this);
    this.price = new PriceEndpoint(this);
    this.quantmetrics = new QuantmetricsEndpoint(this);
    this.pricePrediction = new PricePredictionEndpoint(this);
    this.correlation = new CorrelationEndpoint(this);
    this.indices = new IndicesEndpoint(this);
    this.indicesHoldings = new IndicesHoldingsEndpoint(this);
    this.indicesPerformance = new IndicesPerformanceEndpoint(this);
    this.moonshotTokens = new MoonshotTokensEndpoint(this);
    this.tmGrades = new TMGradesEndpoint(this);
    this.technologyGrades = new TechnologyGradesEndpoint(this);
    this.fundamentalGrades = new FundamentalGradesEndpoint(this);
  }
}
