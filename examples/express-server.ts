/**
 * Example Express.js server that uses the Token Metrics AI API TypeScript SDK
 * 
 * This example demonstrates how to integrate the SDK with an Express.js server
 * to create your own API endpoints that leverage Token Metrics data.
 * 
 * To run this example:
 * 1. Install dependencies: npm install express cors
 * 2. Set your API key: export TM_API_KEY=your_api_key
 * 3. Run the server: ts-node express-server.ts
 * 4. Access the API at http://localhost:3000
 */

import express, { Request, Response } from 'express';
import cors from 'cors';
import { TokenMetricsClient } from '../src/index.js';

const apiKey = process.env.TM_API_KEY;

if (!apiKey) {
  console.error('Please set your Token Metrics API key as an environment variable:');
  console.error('export TM_API_KEY=your_api_key');
  process.exit(1);
}

const tmClient = new TokenMetricsClient(apiKey);

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.json({
    message: 'Token Metrics AI API Express Server',
    endpoints: [
      '/api/tokens',
      '/api/tokens/:symbol',
      '/api/hourly-ohlcv/:symbol',
      '/api/daily-ohlcv/:symbol',
      '/api/investor-grades/:symbol',
      '/api/trader-grades/:symbol',
      '/api/trader-indices',
      '/api/market-metrics',
      '/api/ai-reports/:symbol',
      '/api/trading-signals/:symbol',
      '/api/ai-agent/ask'
    ]
  });
});

app.get('/api/tokens', async (_req: Request, res: Response) => {
  try {
    const result = await tmClient.tokens.get();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

app.get('/api/tokens/:symbol', async (req: Request, res: Response) => {
  try {
    const { symbol } = req.params;
    const result = await tmClient.tokens.get({ symbol });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

app.get('/api/hourly-ohlcv/:symbol', async (req: Request, res: Response) => {
  try {
    const { symbol } = req.params;
    const { startDate, endDate } = req.query;
    
    const result = await tmClient.hourlyOhlcv.get({
      symbol,
      startDate: startDate as string | undefined,
      endDate: endDate as string | undefined
    });
    
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

app.get('/api/daily-ohlcv/:symbol', async (req: Request, res: Response) => {
  try {
    const { symbol } = req.params;
    const { startDate, endDate } = req.query;
    
    const result = await tmClient.dailyOhlcv.get({
      symbol,
      startDate: startDate as string | undefined,
      endDate: endDate as string | undefined
    });
    
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

app.get('/api/investor-grades/:symbol', async (req: Request, res: Response) => {
  try {
    const { symbol } = req.params;
    const { startDate, endDate } = req.query;
    
    const result = await tmClient.investorGrades.get({
      symbol,
      startDate: startDate as string | undefined,
      endDate: endDate as string | undefined
    });
    
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

app.get('/api/trader-grades/:symbol', async (req: Request, res: Response) => {
  try {
    const { symbol } = req.params;
    const { startDate, endDate } = req.query;
    
    const result = await tmClient.traderGrades.get({
      symbol,
      startDate: startDate as string | undefined,
      endDate: endDate as string | undefined
    });
    
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

app.get('/api/trader-indices', async (req: Request, res: Response) => {
  try {
    const { startDate, endDate } = req.query;
    
    const result = await tmClient.traderIndices.get({
      startDate: startDate as string | undefined,
      endDate: endDate as string | undefined
    });
    
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

app.get('/api/market-metrics', async (req: Request, res: Response) => {
  try {
    const { startDate, endDate } = req.query;
    
    const result = await tmClient.marketMetrics.get({
      startDate: startDate as string | undefined,
      endDate: endDate as string | undefined
    });
    
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

app.get('/api/ai-reports/:symbol', async (req: Request, res: Response) => {
  try {
    const { symbol } = req.params;
    
    const result = await tmClient.aiReports.get({
      symbol
    });
    
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

app.get('/api/trading-signals/:symbol', async (req: Request, res: Response) => {
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
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

interface AskRequest {
  question?: string;
}

app.post('/api/ai-agent/ask', async (req: Request<{}, {}, AskRequest>, res: Response) => {
  try {
    const { question } = req.body;
    
    if (!question) {
      return res.status(400).json({ error: 'Question is required' });
    }
    
    const result = await tmClient.aiAgent.ask(question);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

app.listen(port, () => {
  console.log(`Token Metrics Express server running at http://localhost:${port}`);
  console.log('Available endpoints:');
  console.log('  GET  /api/tokens');
  console.log('  GET  /api/tokens/:symbol');
  console.log('  GET  /api/hourly-ohlcv/:symbol?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD');
  console.log('  GET  /api/daily-ohlcv/:symbol?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD');
  console.log('  GET  /api/investor-grades/:symbol?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD');
  console.log('  GET  /api/trader-grades/:symbol?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD');
  console.log('  GET  /api/trader-indices?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD');
  console.log('  GET  /api/market-metrics?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD');
  console.log('  GET  /api/ai-reports/:symbol');
  console.log('  GET  /api/trading-signals/:symbol?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD&signal=1');
  console.log('  POST /api/ai-agent/ask  (body: { "question": "Your question here" })');
});
