
import { TokensEndpoint } from './endpoints/tokens';
import { AIAgentEndpoint } from './endpoints/ai_agent';
import { TradingSignalsEndpoint } from './endpoints/trading_signals';
import { HourlyOHLCVEndpoint } from './endpoints/hourly_ohlcv';
import { DailyOHLCVEndpoint } from './endpoints/daily_ohlcv';
import { InvestorGradesEndpoint } from './endpoints/investor_grades';
import { TraderGradesEndpoint } from './endpoints/trader_grades';
import { MarketMetricsEndpoint } from './endpoints/market_metrics';
import { AIReportsEndpoint } from './endpoints/ai_reports';
import { CryptoInvestorsEndpoint } from './endpoints/crypto_investors';
import { TopMarketCapTokensEndpoint } from './endpoints/top_market_cap_tokens';
import { ResistanceSupportEndpoint } from './endpoints/resistance_support';
import { PriceEndpoint } from './endpoints/price';
import { SentimentEndpoint } from './endpoints/sentiment';
import { QuantmetricsEndpoint } from './endpoints/quantmetrics';
import { ScenarioAnalysisEndpoint } from './endpoints/scenario_analysis';
import { CorrelationEndpoint } from './endpoints/correlation';

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
  readonly hourlyOhlcv: HourlyOHLCVEndpoint;
  readonly dailyOhlcv: DailyOHLCVEndpoint;
  readonly investorGrades: InvestorGradesEndpoint;
  readonly traderGrades: TraderGradesEndpoint;
  readonly marketMetrics: MarketMetricsEndpoint;
  readonly aiReports: AIReportsEndpoint;
  readonly cryptoInvestors: CryptoInvestorsEndpoint;
  readonly topMarketCapTokens: TopMarketCapTokensEndpoint;
  readonly resistanceSupport: ResistanceSupportEndpoint;
  readonly price: PriceEndpoint;
  readonly sentiment: SentimentEndpoint;
  readonly quantmetrics: QuantmetricsEndpoint;
  readonly scenarioAnalysis: ScenarioAnalysisEndpoint;
  readonly correlation: CorrelationEndpoint;

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
    this.hourlyOhlcv = new HourlyOHLCVEndpoint(this);
    this.dailyOhlcv = new DailyOHLCVEndpoint(this);
    this.investorGrades = new InvestorGradesEndpoint(this);
    this.traderGrades = new TraderGradesEndpoint(this);
    this.marketMetrics = new MarketMetricsEndpoint(this);
    this.aiReports = new AIReportsEndpoint(this);
    this.cryptoInvestors = new CryptoInvestorsEndpoint(this);
    this.topMarketCapTokens = new TopMarketCapTokensEndpoint(this);
    this.resistanceSupport = new ResistanceSupportEndpoint(this);
    this.price = new PriceEndpoint(this);
    this.sentiment = new SentimentEndpoint(this);
    this.quantmetrics = new QuantmetricsEndpoint(this);
    this.scenarioAnalysis = new ScenarioAnalysisEndpoint(this);
    this.correlation = new CorrelationEndpoint(this);
  }
}
