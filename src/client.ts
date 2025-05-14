import { ClientOptions } from './types.js';

import { TokensEndpoint } from './endpoints/tokens.js';
import { AIAgentEndpoint } from './endpoints/ai_agent.js';
import { TradingSignalsEndpoint } from './endpoints/trading_signals.js';
import { HourlyOHLCVEndpoint } from './endpoints/hourly_ohlcv.js';
import { DailyOHLCVEndpoint } from './endpoints/daily_ohlcv.js';
import { InvestorGradesEndpoint } from './endpoints/investor_grades.js';
import { TraderGradesEndpoint } from './endpoints/trader_grades.js';
import { TraderIndicesEndpoint } from './endpoints/trader_indices.js';
import { MarketMetricsEndpoint } from './endpoints/market_metrics.js';
import { AIReportsEndpoint } from './endpoints/ai_reports.js';
import { InvestorIndicesEndpoint } from './endpoints/investor_indices.js';
import { CryptoInvestorsEndpoint } from './endpoints/crypto_investors.js';
import { TopMarketCapTokensEndpoint } from './endpoints/top_market_cap_tokens.js';
import { ResistanceSupportEndpoint } from './endpoints/resistance_support.js';
import { PriceEndpoint } from './endpoints/price.js';
import { SentimentEndpoint } from './endpoints/sentiment.js';
import { QuantmetricsEndpoint } from './endpoints/quantmetrics.js';
import { ScenarioAnalysisEndpoint } from './endpoints/scenario_analysis.js';
import { CorrelationEndpoint } from './endpoints/correlation.js';
import { SectorIndicesHoldingsEndpoint } from './endpoints/sector_indices_holdings.js';
import { SectorIndicesPerformanceEndpoint } from './endpoints/sector_indices_performance.js';
import { SectorIndexTransactionEndpoint } from './endpoints/sector_index_transaction.js';

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
  readonly traderIndices: TraderIndicesEndpoint;
  readonly marketMetrics: MarketMetricsEndpoint;
  readonly aiReports: AIReportsEndpoint;
  readonly investorIndices: InvestorIndicesEndpoint;
  readonly cryptoInvestors: CryptoInvestorsEndpoint;
  readonly topMarketCapTokens: TopMarketCapTokensEndpoint;
  readonly resistanceSupport: ResistanceSupportEndpoint;
  readonly price: PriceEndpoint;
  readonly sentiment: SentimentEndpoint;
  readonly quantmetrics: QuantmetricsEndpoint;
  readonly scenarioAnalysis: ScenarioAnalysisEndpoint;
  readonly correlation: CorrelationEndpoint;
  readonly sectorIndicesHoldings: SectorIndicesHoldingsEndpoint;
  readonly sectorIndicesPerformance: SectorIndicesPerformanceEndpoint;
  readonly sectorIndexTransaction: SectorIndexTransactionEndpoint;

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
    this.traderIndices = new TraderIndicesEndpoint(this);
    this.marketMetrics = new MarketMetricsEndpoint(this);
    this.aiReports = new AIReportsEndpoint(this);
    this.investorIndices = new InvestorIndicesEndpoint(this);
    this.cryptoInvestors = new CryptoInvestorsEndpoint(this);
    this.topMarketCapTokens = new TopMarketCapTokensEndpoint(this);
    this.resistanceSupport = new ResistanceSupportEndpoint(this);
    this.price = new PriceEndpoint(this);
    this.sentiment = new SentimentEndpoint(this);
    this.quantmetrics = new QuantmetricsEndpoint(this);
    this.scenarioAnalysis = new ScenarioAnalysisEndpoint(this);
    this.correlation = new CorrelationEndpoint(this);
    this.sectorIndicesHoldings = new SectorIndicesHoldingsEndpoint(this);
    this.sectorIndicesPerformance = new SectorIndicesPerformanceEndpoint(this);
    this.sectorIndexTransaction = new SectorIndexTransactionEndpoint(this);
  }
}
