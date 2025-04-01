# Token Metrics AI API JavaScript SDK

The official JavaScript SDK for Token Metrics AI API - providing professional investors and traders with comprehensive cryptocurrency analysis, AI-powered trading signals, market data, and advanced insights.

## Features

- **Comprehensive Market Data**: Access detailed information on thousands of cryptocurrencies
- **AI-Powered Analysis**: Get trading and investment grades based on advanced AI models
- **Technical Indicators**: Access technical analysis grades and quantitative metrics
- **Price Data**: Retrieve historical OHLCV (Open, High, Low, Close, Volume) data 
- **Trading Signals**: Receive AI-generated long and short trading signals
- **AI Agent**: Interact with Token Metrics' AI chatbot for market insights
- **AI Reports**: Access detailed technical, fundamental, and trading reports
- **Simple Interface**: Intuitive API with Express.js integration

## Installation

```bash
npm install tm-api-sdk-javascript
```

## Quick Start

```javascript
const { TokenMetricsClient } = require('tm-api-sdk-javascript');

// Initialize the client with your API key
const client = new TokenMetricsClient('your-api-key');

// Get information for top cryptocurrencies
client.tokens.get({ symbol: 'BTC,ETH' })
  .then(tokens => {
    console.log(tokens);
  });

// Get short-term trading grades
client.traderGrades.get({
  symbol: 'BTC,ETH',
  startDate: '2023-10-01',
  endDate: '2023-10-10'
})
  .then(traderGrades => {
    console.log(traderGrades);
  });

// Get long-term investment grades
client.investorGrades.get({
  symbol: 'BTC,ETH',
  startDate: '2023-10-01',
  endDate: '2023-10-10'
})
  .then(investorGrades => {
    console.log(investorGrades);
  });

// Ask the AI agent a question
client.aiAgent.getAnswerText('What is your analysis of Bitcoin?')
  .then(answer => {
    console.log(answer);
  });

// Using async/await
async function getTokenData() {
  const tokens = await client.tokens.get({ symbol: 'BTC,ETH' });
  console.log(tokens);
}
```

## Available Endpoints

| Endpoint | Description | Example |
|----------|-------------|---------|
| `tokens` | Information about all supported tokens | `client.tokens.get({ symbol: 'BTC,ETH' })` |
| `hourlyOhlcv` | Hourly price and volume data | `client.hourlyOhlcv.get({ symbol: 'BTC', startDate: '2023-10-01', endDate: '2023-10-10' })` |
| `investorGrades` | Long-term investment ratings | `client.investorGrades.get({ symbol: 'BTC,ETH', startDate: '2023-10-01', endDate: '2023-10-10' })` |
| `traderGrades` | Short-term trading signals | `client.traderGrades.get({ symbol: 'BTC,ETH', startDate: '2023-10-01', endDate: '2023-10-10' })` |
| `traderIndices` | AI-generated trading portfolios | `client.traderIndices.get({ startDate: '2023-10-01', endDate: '2023-10-10' })` |
| `marketMetrics` | Overall market data | `client.marketMetrics.get({ startDate: '2023-10-01', endDate: '2023-10-10' })` |
| `aiAgent` | Interact with Token Metrics AI chatbot | `client.aiAgent.ask('What is your Bitcoin forecast?')` |
| `aiReports` | AI-generated analysis reports | `client.aiReports.get({ symbol: 'BTC,ETH' })` |
| `tradingSignals` | AI-generated trading signals | `client.tradingSignals.get({ symbol: 'BTC,ETH', startDate: '2023-10-01', endDate: '2023-10-10', signal: '1' })` |

## Detailed Usage Examples

### Working with Trading Signals

```javascript
// Get bullish trading signals (signal=1) for Bitcoin
client.tradingSignals.get({
  symbol: 'BTC',
  startDate: '2023-10-01',
  endDate: '2023-10-10',
  signal: '1'  // 1=Bullish, -1=Bearish
})
  .then(signals => {
    // Calculate potential returns
    const avgSignalReturn = signals.data.reduce((sum, signal) => sum + signal.TRADING_SIGNALS_RETURNS, 0) / signals.data.length;
    const avgHoldingReturn = signals.data.reduce((sum, signal) => sum + signal.HOLDING_RETURNS, 0) / signals.data.length;
    
    console.log(`Average signal return: ${avgSignalReturn.toFixed(2)}%`);
    console.log(`Average holding return: ${avgHoldingReturn.toFixed(2)}%`);
  });
```

### Getting AI-Generated Reports

```javascript
// Get comprehensive AI reports for Ethereum
client.aiReports.get({ symbol: 'ETH' })
  .then(reports => {
    // Access specific report sections
    const traderReport = reports.data[0].TRADER_REPORT;
    const techReport = reports.data[0].TECHNOLOGY_REPORT;
    const fundamentalReport = reports.data[0].FUNDAMENTAL_REPORT;
    
    console.log(`Trading Report Excerpt:\n${traderReport.substring(0, 200)}...`);
  });
```

### Analyzing Market Metrics

```javascript
// Get market sentiment metrics
client.marketMetrics.get({
  startDate: '2023-10-01',
  endDate: '2023-10-10'
})
  .then(metrics => {
    console.log('Fear & Greed Index:', metrics.data.map(m => ({
      date: m.DATE,
      value: m.FEAR_AND_GREED_VALUE
    })));
  });
```

## Authentication

All API requests require an API key. You can get your API key by signing up at [Token Metrics](https://tokenmetrics.com).

```javascript
// Initialize with your API key
const client = new TokenMetricsClient('your-api-key');
```

## Error Handling

The SDK provides built-in error handling for API requests:

```javascript
client.tokens.get({ symbol: 'INVALID_SYMBOL' })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error.message);
    // Handle the error appropriately
  });

// Using async/await with try/catch
async function getTokenData() {
  try {
    const data = await client.tokens.get({ symbol: 'INVALID_SYMBOL' });
    console.log(data);
  } catch (error) {
    console.error('Error:', error.message);
    // Handle the error appropriately
  }
}
```

## Requirements

- Node.js 14+
- `axios` package
- `express` package

## Express.js Integration

This SDK can be easily integrated with Express.js to create your own API endpoints that leverage Token Metrics data:

```javascript
const express = require('express');
const cors = require('cors');
const { TokenMetricsClient } = require('tm-api-sdk-javascript');

// Initialize the Token Metrics client
const tmClient = new TokenMetricsClient('your-api-key');

// Create Express app
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Get tokens endpoint
app.get('/api/tokens/:symbol', async (req, res) => {
  try {
    const { symbol } = req.params;
    const result = await tmClient.tokens.get({ symbol });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get trading signals endpoint
app.get('/api/trading-signals/:symbol', async (req, res) => {
  try {
    const { symbol } = req.params;
    const { startDate, endDate, signal } = req.query;
    
    const result = await tmClient.tradingSignals.get({
      symbol,
      startDate,
      endDate,
      signal
    });
    
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

For a complete Express.js server example, see the [examples/express-server.js](examples/express-server.js) file.

## Documentation

For complete API documentation, visit:
- [Token Metrics API Documentation](https://api.tokenmetrics.com/docs)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This SDK is distributed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

<p align="center">
  <a href="https://tokenmetrics.com">
    <img src="https://files.readme.io/6141d8ec9ddb9dd233e52357e7526ba5fea3dacafab20cd042bc20a2de070beb-dark_mode_1.svg" alt="Token Metrics Logo" width="300">
  </a>
</p>
<p align="center">
  <i>Empowering investors with AI-powered crypto insights</i>
</p>
