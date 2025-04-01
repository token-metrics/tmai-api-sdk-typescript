const TokenMetricsClient = require('./client');
const BaseEndpoint = require('./base');

const TokensEndpoint = require('./endpoints/tokens');
const HourlyOHLCVEndpoint = require('./endpoints/hourly_ohlcv');
const DailyOHLCVEndpoint = require('./endpoints/daily_ohlcv');
const InvestorGradesEndpoint = require('./endpoints/investor_grades');
const TraderGradesEndpoint = require('./endpoints/trader_grades');
const TraderIndicesEndpoint = require('./endpoints/trader_indices');
const MarketMetricsEndpoint = require('./endpoints/market_metrics');
const AIAgentEndpoint = require('./endpoints/ai_agent');
const AIReportsEndpoint = require('./endpoints/ai_reports');
const TradingSignalsEndpoint = require('./endpoints/trading_signals');

class ExtendedTokenMetricsClient extends TokenMetricsClient {
  constructor(apiKey) {
    super(apiKey);
    
    this.tokens = new TokensEndpoint(this);
    this.hourlyOhlcv = new HourlyOHLCVEndpoint(this);
    this.dailyOhlcv = new DailyOHLCVEndpoint(this);
    this.investorGrades = new InvestorGradesEndpoint(this);
    this.traderGrades = new TraderGradesEndpoint(this);
    this.traderIndices = new TraderIndicesEndpoint(this);
    this.marketMetrics = new MarketMetricsEndpoint(this);
    this.aiAgent = new AIAgentEndpoint(this);
    this.aiReports = new AIReportsEndpoint(this);
    this.tradingSignals = new TradingSignalsEndpoint(this);
  }
}

module.exports = {
  TokenMetricsClient: ExtendedTokenMetricsClient,
  BaseEndpoint
};
