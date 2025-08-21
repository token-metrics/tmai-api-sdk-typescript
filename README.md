# Token Metrics AI API TypeScript SDK

[![npm version](https://badge.fury.io/js/tmai-api.svg)](https://www.npmjs.com/package/tmai-api)

The official TypeScript SDK for Token Metrics AI API - providing professional investors and traders with comprehensive cryptocurrency analysis, AI-powered trading signals, market data, and advanced insights.

## Features

- **Comprehensive Market Data**: Access detailed information on thousands of cryptocurrencies
- **AI-Powered Analysis**: Get trading and investment grades based on advanced AI models
- **Technical Indicators**: Access technical analysis grades and quantitative metrics
- **Price Data**: Retrieve historical OHLCV (Open, High, Low, Close, Volume) data 
- **Trading Signals**: Receive AI-generated long and short trading signals
- **AI Agent**: Interact with Token Metrics' AI chatbot for market insights
- **AI Reports**: Access detailed technical, fundamental, and trading reports
- **Simple Interface**: Intuitive API with Express.js integration
- **JavaScript & TypeScript Compatible**: Works with both JavaScript and TypeScript projects

## Installation

```bash
npm install tmai-api
```

You can find the package on npm at: [tmai-api](https://www.npmjs.com/package/tmai-api)

## Quick Start

### TypeScript Usage

```typescript
import { TokenMetricsClient } from 'tmai-api';

// Initialize the client with your API key
const client = new TokenMetricsClient('your-api-key');

// Get information for top cryptocurrencies
client.tokens.get({ symbol: 'BTC,ETH' })
  .then(tokens => {
    console.log(tokens);
  });

// Ask the AI agent a question
client.aiAgent.ask('What is your analysis of Bitcoin?')
  .then(answer => {
    console.log(answer);
  });

// Get hourly trading signals
client.hourlyTradingSignals.get({
  token_id: '3375', // Bitcoin token ID
  limit: 10,
  page: 1
})
  .then(signals => {
    console.log(signals);
  });

// Get indices overview
client.indices.get({ indicesType: 'active' })
  .then(indices => {
    console.log(indices);
  });

// Get indices holdings
client.indicesHoldings.get({ id: 'crypto-index-1' })
  .then(holdings => {
    console.log(holdings);
  });

// Get indices performance
client.indicesPerformance.get({
  id: 'crypto-index-1',
  startDate: '2023-10-01',
  endDate: '2023-10-10'
})
  .then(performance => {
    console.log(performance);
  });

// Get TM Grades (multiple filter options)
client.tmGrades.get({ token_id: '3375' })
  .then(grades => {
    console.log(grades);
  });

// Get TM Grades by symbol
client.tmGrades.get({ symbol: 'BTC' })
  .then(grades => {
    console.log(grades);
  });

// Get TM Grades by token name
client.tmGrades.get({ token_name: 'Bitcoin' })
  .then(grades => {
    console.log(grades);
  });

// Get TM Grades Historical
client.tmGrades.getHistorical({ 
  token_id: '3375',
  startDate: '2025-07-01',
  endDate: '2025-07-05',
  limit: 100,
  page: 1
})
  .then(historicalGrades => {
    console.log(historicalGrades);
  });

// Get Technology Grades (multiple filter options)
client.technologyGrades.get({ token_id: '3306' })
  .then(techGrades => {
    console.log(techGrades);
  });

// Get Technology Grades by symbol
client.technologyGrades.get({ symbol: 'ETH' })
  .then(techGrades => {
    console.log(techGrades);
  });

// Get Technology Grades by token name
client.technologyGrades.get({ token_name: 'Ethereum' })
  .then(techGrades => {
    console.log(techGrades);
  });

// Get Technology Grades Historical
client.technologyGrades.getHistorical({ 
  symbol: 'BTC',
  startDate: '2025-07-01',
  endDate: '2025-07-05',
  limit: 50,
  page: 1
})
  .then(historicalTechGrades => {
    console.log(historicalTechGrades);
  });

// Get Fundamental Grades (multiple filter options)
client.fundamentalGrades.get({ token_id: '3375' })
  .then(fundamentalGrades => {
    console.log(fundamentalGrades);
  });

// Get Fundamental Grades by symbol
client.fundamentalGrades.get({ symbol: 'BTC' })
  .then(fundamentalGrades => {
    console.log(fundamentalGrades);
  });

// Get Fundamental Grades by token name
client.fundamentalGrades.get({ token_name: 'Bitcoin' })
  .then(fundamentalGrades => {
    console.log(fundamentalGrades);
  });

// Get Fundamental Grades Historical
client.fundamentalGrades.getHistorical({ 
  symbol: 'ETH',
  startDate: '2025-07-01',
  endDate: '2025-07-05',
  limit: 50,
  page: 1
})
  .then(historicalFundamentalGrades => {
    console.log(historicalFundamentalGrades);
  });

// Using async/await with type annotations
async function getTokenData(): Promise<void> {
  const tokens = await client.tokens.get({ symbol: 'BTC,ETH' });
  console.log(tokens);
}
```

### JavaScript Usage

```javascript
// ES Modules
import { TokenMetricsClient } from 'tmai-api';

// OR CommonJS
// const { TokenMetricsClient } = require('tmai-api');

// Initialize the client with your API key
const client = new TokenMetricsClient('your-api-key');

// Get information for top cryptocurrencies
client.tokens.get({ symbol: 'BTC,ETH' })
  .then(tokens => {
    console.log(tokens);
  });

// Get hourly trading signals
client.hourlyTradingSignals.get({
  token_id: '3375', 
  limit: 20
})
  .then(signals => {
    console.log(signals);
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
| `dailyOhlcv` | Daily price and volume data | `client.dailyOhlcv.get({ symbol: 'BTC', startDate: '2023-10-01', endDate: '2023-10-10' })` |
| `marketMetrics` | Overall market data | `client.marketMetrics.get({ startDate: '2023-10-01', endDate: '2023-10-10' })` |
| `aiAgent` | Interact with Token Metrics AI chatbot | `client.aiAgent.ask('What is your Bitcoin forecast?')` |
| `aiReports` | AI-generated analysis reports | `client.aiReports.get({ symbol: 'BTC,ETH' })` |
| `tradingSignals` | AI-generated trading signals | `client.tradingSignals.get({ symbol: 'BTC,ETH', startDate: '2023-10-01', endDate: '2023-10-10', signal: '1' })` |
| `hourlyTradingSignals` | Hourly AI-generated trading signals | `client.hourlyTradingSignals.get({ token_id: '3375'})` |
| `cryptoInvestors` | Information about crypto investors | `client.cryptoInvestors.get()` |
| `topMarketCapTokens` | Top tokens by market capitalization | `client.topMarketCapTokens.get({ top_k: 100 })` |
| `resistanceSupport` | Resistance and support levels | `client.resistanceSupport.get({ symbol: 'BTC' })` |
| `price` | Historical price data | `client.price.get({ symbol: 'BTC', startDate: '2023-10-01', endDate: '2023-10-10' })` |
| `quantmetrics` | Quantitative metrics | `client.quantmetrics.get({ symbol: 'BTC', startDate: '2023-10-01', endDate: '2023-10-10' })` |
| `pricePrediction` | Crypto price predictions under different market scenarios | `client.pricePrediction.get({ symbol: 'BTC' })` |
| `correlation` | Asset correlation data | `client.correlation.get({ base_symbol: 'BTC', quote_symbol: 'ETH', startDate: '2023-10-01', endDate: '2023-10-10' })` |
| `indices` | Overview of active/passive indices | `client.indices.get({ indicesType: 'active' })` |
| `indicesHoldings` | Token holdings with icons, weight, and market cap | `client.indicesHoldings.get({ id: 'index_id' })` |
| `indicesPerformance` | Index performance across different timeframes | `client.indicesPerformance.get({ id: 'index_id', startDate: '2023-10-01', endDate: '2023-10-10' })` |
| `moonshotTokens` | Get AI-curated token picks with high breakout potential | `client.moonshotTokens.get({ type: 'active' })` |
| `tmGrades` | Latest TM Grade and Fundamental Grade insights with signals and momentum | `client.tmGrades.get({ token_id: '3375' })` or `client.tmGrades.get({ symbol: 'BTC' })` or `client.tmGrades.get({ token_name: 'Bitcoin' })` |
| `tmGrades.getHistorical` | Historical TM Grade and Fundamental Grade data over a date range | `client.tmGrades.getHistorical({ token_id: '3375', startDate: '2023-10-01', endDate: '2023-10-10', limit: 100, page: 1 })` |
| `technologyGrades` | Technology Grade insights including activity, security, repository, collaboration, and DeFi scanner scores | `client.technologyGrades.get({ token_id: '3306' })` or `client.technologyGrades.get({ symbol: 'ETH' })` or `client.technologyGrades.get({ token_name: 'Ethereum' })` |
| `technologyGrades.getHistorical` | Historical Technology Grade data over a date range with all scoring metrics | `client.technologyGrades.getHistorical({ symbol: 'BTC', startDate: '2023-10-01', endDate: '2023-10-10', limit: 50, page: 1 })` |
| `fundamentalGrades` | Fundamental Grade insights including grade class, community score, exchange score, VC score, tokenomics score, and DeFi scanner score | `client.fundamentalGrades.get({ token_id: '3375' })` or `client.fundamentalGrades.get({ symbol: 'BTC' })` or `client.fundamentalGrades.get({ token_name: 'Bitcoin' })` |
| `fundamentalGrades.getHistorical` | Historical Fundamental Grade data over a date range with all scoring metrics | `client.fundamentalGrades.getHistorical({ symbol: 'ETH', startDate: '2023-10-01', endDate: '2023-10-10', limit: 50, page: 1 })` |


## Authentication

All API requests require an API key. You can get your API key by signing up at [Token Metrics](https://tokenmetrics.com).

```javascript
// Initialize with your API key
const client = new TokenMetricsClient('your-api-key');
```

## Error Handling

The SDK provides built-in error handling for API requests:

```typescript
client.tokens.get({ symbol: 'INVALID_SYMBOL' })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error.message);
    // Handle the error appropriately
  });

// Using async/await with try/catch
async function getTokenData(): Promise<void> {
  try {
    const data = await client.tokens.get({ symbol: 'INVALID_SYMBOL' });
    console.log(data);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error:', error.message);
    } else {
      console.error('Unknown error:', error);
    }
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

```typescript
import express from 'express';
import cors from 'cors';
import { TokenMetricsClient } from 'tmai-api';

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
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error occurred' });
    }
  }
});

// Get trading signals endpoint
app.get('/api/trading-signals/:symbol', async (req, res) => {
  try {
    const { symbol } = req.params;
    const { startDate, endDate, signal } = req.query;
    
    const result = await tmClient.tradingSignals.get({
      symbol,
      startDate: startDate as string | undefined,
      endDate: endDate as string | undefined,
      signal: signal as string | undefined
    });
    
    res.json(result);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error occurred' });
    }
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
