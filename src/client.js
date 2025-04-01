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
  }
}

module.exports = TokenMetricsClient;
