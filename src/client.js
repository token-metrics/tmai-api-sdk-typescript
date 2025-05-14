/**
 * Main client for interacting with the Token Metrics AI API.
 */
class TokenMetricsClient {
  /**
   * Base URL for the Token Metrics API
   */
  static BASE_URL = "https://api.tokenmetrics.com/v2";

  /**
   * Initialize the Token Metrics client.
   * 
   * @param {string} apiKey - Your Token Metrics API key
   */
  constructor(apiKey) {
    this.apiKey = apiKey;
    
    const TokensEndpoint = require('./endpoints/tokens');
    const AIAgentEndpoint = require('./endpoints/ai_agent');
    const TradingSignalsEndpoint = require('./endpoints/trading_signals');
    const HourlyOHLCVEndpoint = require('./endpoints/hourly_ohlcv');
    const DailyOHLCVEndpoint = require('./endpoints/daily_ohlcv');
    const InvestorGradesEndpoint = require('./endpoints/investor_grades');
    const TraderGradesEndpoint = require('./endpoints/trader_grades');
    const TraderIndicesEndpoint = require('./endpoints/trader_indices');
    const MarketMetricsEndpoint = require('./endpoints/market_metrics');
    const AIReportsEndpoint = require('./endpoints/ai_reports');
    
    const InvestorIndicesEndpoint = require('./endpoints/investor_indices');
    const CryptoInvestorsEndpoint = require('./endpoints/crypto_investors');
    const TopMarketCapTokensEndpoint = require('./endpoints/top_market_cap_tokens');
    const ResistanceSupportEndpoint = require('./endpoints/resistance_support');
    const PriceEndpoint = require('./endpoints/price');
    const SentimentEndpoint = require('./endpoints/sentiment');
    const QuantmetricsEndpoint = require('./endpoints/quantmetrics');
    const ScenarioAnalysisEndpoint = require('./endpoints/scenario_analysis');
    const CorrelationEndpoint = require('./endpoints/correlation');
    const SectorIndicesHoldingsEndpoint = require('./endpoints/sector_indices_holdings');
    const SectorIndicesPerformanceEndpoint = require('./endpoints/sector_indices_performance');
    const SectorIndexTransactionEndpoint = require('./endpoints/sector_index_transaction');
    
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

module.exports = TokenMetricsClient;
