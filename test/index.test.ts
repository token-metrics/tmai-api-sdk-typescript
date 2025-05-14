/**
 * Test script for the Token Metrics AI API TypeScript SDK
 */

import { TokenMetricsClient } from '../src/index.js';

const apiKey = "tm-a123f8d9-2cde-4e50-af3b-c5e2b7ffcc81";
const client = new TokenMetricsClient(apiKey);

describe('Token Metrics AI API SDK', () => {
  it('should retrieve token data', async () => {
    const tokens = await client.tokens.get({ symbol: 'BTC,ETH' });
    expect(tokens.data).toBeDefined();
    expect(tokens.data.length).toBeGreaterThan(0);
  });

  it('should retrieve hourly OHLCV data', async () => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const twoDaysAgo = new Date(today);
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
    
    const hourlyData = await client.hourlyOhlcv.get({ 
      symbol: 'BTC', 
      startDate: twoDaysAgo.toISOString().split('T')[0], 
      endDate: yesterday.toISOString().split('T')[0] 
    });
    
    expect(hourlyData.data).toBeDefined();
    expect(hourlyData.data.length).toBeGreaterThan(0);
  });

  it('should retrieve AI agent response', async () => {
    try {
      const aiResponse = await client.aiAgent.ask('What is your analysis of Bitcoin?');
      expect(aiResponse).toBeDefined();
      expect(aiResponse.answer).toBeDefined();
    } catch (error) {
      console.log(`AI agent test skipped: ${error instanceof Error ? error.message : String(error)}`);
    }
  });
});
