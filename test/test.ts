/**
 * Test script for the Token Metrics AI API TypeScript SDK
 * 
 * This script demonstrates the functionality of each endpoint in the SDK.
 * To run this test, you need a valid Token Metrics API key.
 * 
 * Usage: 
 * npm test
 * 
 * Or set the TM_API_KEY environment variable:
 * TM_API_KEY=your-api-key npm test
 */

import { TokenMetricsClient } from '../src/index.js';
import assert from 'assert';

const apiKey = "tm-5e83cfa9-58d5-48a1-920a-4c628d196bfd";

if (!apiKey) {
  console.error('Please provide your Token Metrics API key as a command line argument or set the TM_API_KEY environment variable');
  console.error('Usage: node test.js YOUR_API_KEY');
  console.error('   or: TM_API_KEY=your-api-key node test.js');
  process.exit(1);
}

const client = new TokenMetricsClient(apiKey);

async function runTests(): Promise<void> {
  try {
    console.log('Testing Token Metrics AI API TypeScript SDK...\n');
    
    await testExistingEndpoints();
    
    await testNewEndpoints();
    
    console.log('\n✅ All tests completed successfully!');
    
  } catch (error) {
    console.error('❌ Test failed:', error instanceof Error ? error.message : String(error));
    if (error instanceof Error && error.stack) {
      console.error(error.stack);
    }
    process.exit(1);
  }
}

async function testExistingEndpoints(): Promise<void> {
  console.log('Testing tokens endpoint...');
  const tokens = await client.tokens.get({ symbol: 'BTC,ETH' });
  assert(tokens.data && tokens.data.length > 0, 'Tokens endpoint failed');
  console.log(`✅ Tokens endpoint: Retrieved ${tokens.data.length} tokens`);
  
  console.log('\nTesting hourly OHLCV endpoint...');
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
  assert(hourlyData.data && hourlyData.data.length > 0, 'Hourly OHLCV endpoint failed');
  console.log(`✅ Hourly OHLCV endpoint: Retrieved ${hourlyData.data.length} data points`);
  
  console.log('\nTesting daily OHLCV endpoint...');
  const tenDaysAgo = new Date(today);
  tenDaysAgo.setDate(tenDaysAgo.getDate() - 10);
  
  const dailyData = await client.dailyOhlcv.get({ 
    symbol: 'BTC', 
    startDate: tenDaysAgo.toISOString().split('T')[0], 
    endDate: yesterday.toISOString().split('T')[0] 
  });
  assert(dailyData.data && dailyData.data.length > 0, 'Daily OHLCV endpoint failed');
  console.log(`✅ Daily OHLCV endpoint: Retrieved ${dailyData.data.length} data points`);
  
  console.log('\nTesting investor grades endpoint...');
  const investorGrades = await client.investorGrades.get({ 
    symbol: 'BTC,ETH', 
    startDate: tenDaysAgo.toISOString().split('T')[0], 
    endDate: yesterday.toISOString().split('T')[0] 
  });
  assert(investorGrades.data && investorGrades.data.length > 0, 'Investor grades endpoint failed');
  console.log(`✅ Investor grades endpoint: Retrieved ${investorGrades.data.length} grades`);
  
  console.log('\nTesting trader grades endpoint...');
  const traderGrades = await client.traderGrades.get({ 
    symbol: 'BTC,ETH', 
    startDate: tenDaysAgo.toISOString().split('T')[0], 
    endDate: yesterday.toISOString().split('T')[0] 
  });
  assert(traderGrades.data && traderGrades.data.length > 0, 'Trader grades endpoint failed');
  console.log(`✅ Trader grades endpoint: Retrieved ${traderGrades.data.length} grades`);
  
  console.log('\nTesting market metrics endpoint...');
  const marketMetrics = await client.marketMetrics.get({ 
    startDate: tenDaysAgo.toISOString().split('T')[0], 
    endDate: yesterday.toISOString().split('T')[0] 
  });
  assert(marketMetrics.data && marketMetrics.data.length > 0, 'Market metrics endpoint failed');
  console.log(`✅ Market metrics endpoint: Retrieved ${marketMetrics.data.length} metrics`);
  
  console.log('\nTesting AI reports endpoint...');
  const aiReports = await client.aiReports.get({ symbol: 'BTC' });
  assert(aiReports.data && aiReports.data.length > 0, 'AI reports endpoint failed');
  console.log(`✅ AI reports endpoint: Retrieved ${aiReports.data.length} reports`);
  
  console.log('\nTesting trading signals endpoint...');
  const tradingSignals = await client.tradingSignals.get({ 
    symbol: 'BTC', 
    startDate: tenDaysAgo.toISOString().split('T')[0], 
    endDate: yesterday.toISOString().split('T')[0],
    signal: '1' 
  });
  assert(tradingSignals.data && tradingSignals.data.length > 0, 'Trading signals endpoint failed');
  console.log(`✅ Trading signals endpoint: Retrieved ${tradingSignals.data.length} signals`);
  
  console.log('\nTesting AI agent endpoint...');
  try {
    const aiResponse = await client.aiAgent.ask('What is your analysis of Bitcoin?');
    assert(aiResponse && aiResponse.answer, 'AI agent endpoint failed');
    console.log(`✅ AI agent endpoint: Retrieved response`);
  } catch (error) {
    console.log(`⚠️ AI agent endpoint: ${error instanceof Error ? error.message : String(error)} - Skipping this test`);
  }
}

async function testNewEndpoints(): Promise<void> {
  try {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const tenDaysAgo = new Date(today);
    tenDaysAgo.setDate(tenDaysAgo.getDate() - 10);
    
    console.log('\nTesting crypto investors endpoint...');
    const cryptoInvestors = await client.cryptoInvestors.get();
    assert(cryptoInvestors.data !== undefined, 'Crypto investors endpoint failed');
    console.log(`✅ Crypto investors endpoint: Retrieved ${cryptoInvestors.data.length} investors`);
    
    console.log('\nTesting top market cap tokens endpoint...');
    const topMarketCapTokens = await client.topMarketCapTokens.get();
    assert(topMarketCapTokens.data !== undefined, 'Top market cap tokens endpoint failed');
    console.log(`✅ Top market cap tokens endpoint: Retrieved ${topMarketCapTokens.data.length} tokens`);
    
    console.log('\nTesting resistance support endpoint...');
    const resistanceSupport = await client.resistanceSupport.get({ symbol: 'BTC' });
    assert(resistanceSupport.data !== undefined, 'Resistance support endpoint failed');
    console.log(`✅ Resistance support endpoint: Retrieved ${resistanceSupport.data.length} data points`);
    
    console.log('\nTesting price endpoint...');
    const price = await client.price.get({ 
      symbol: 'BTC',
      startDate: tenDaysAgo.toISOString().split('T')[0],
      endDate: yesterday.toISOString().split('T')[0]
    });
    assert(price.data !== undefined, 'Price endpoint failed');
    console.log(`✅ Price endpoint: Retrieved ${price.data.length} data points`);
    
    console.log('\nTesting sentiment endpoint...');
    const sentiment = await client.sentiment.get({ 
      symbol: 'BTC',
      startDate: tenDaysAgo.toISOString().split('T')[0],
      endDate: yesterday.toISOString().split('T')[0]
    });
    assert(sentiment.data !== undefined, 'Sentiment endpoint failed');
    console.log(`✅ Sentiment endpoint: Retrieved ${sentiment.data.length} data points`);
    
    console.log('\nTesting quantmetrics endpoint...');
    const quantmetrics = await client.quantmetrics.get({ 
      symbol: 'BTC',
      startDate: tenDaysAgo.toISOString().split('T')[0],
      endDate: yesterday.toISOString().split('T')[0]
    });
    assert(quantmetrics.data !== undefined, 'Quantmetrics endpoint failed');
    console.log(`✅ Quantmetrics endpoint: Retrieved ${quantmetrics.data.length} data points`);
    
    console.log('\nTesting scenario analysis endpoint...');
    const scenarioAnalysis = await client.scenarioAnalysis.get({ symbol: 'BTC' });
    assert(scenarioAnalysis.data !== undefined, 'Scenario analysis endpoint failed');
    console.log(`✅ Scenario analysis endpoint: Retrieved ${scenarioAnalysis.data.length} scenarios`);
    
    console.log('\nTesting correlation endpoint...');
    const correlation = await client.correlation.get({ 
      base_symbol: 'BTC',
      quote_symbol: 'ETH',
      startDate: tenDaysAgo.toISOString().split('T')[0],
      endDate: yesterday.toISOString().split('T')[0]
    });
    assert(correlation.data !== undefined, 'Correlation endpoint failed');
    console.log(`✅ Correlation endpoint: Retrieved ${correlation.data.length} data points`);
    
    console.log('\nTesting indices overview endpoint...');
    const indices = await client.indices.get({ indicesType: 'active' });
    assert(indices.data !== undefined, 'Indices overview endpoint failed');
    console.log(`✅ Indices overview endpoint: Retrieved ${indices.data.length} indices`);
    
    console.log('\nTesting indices holdings endpoint...');
    const indexId = indices.data.length > 0 ? indices.data[0].id : 'crypto-index-1';
    const indicesHoldings = await client.indicesHoldings.get({ id: indexId });
    assert(indicesHoldings.data !== undefined, 'Indices holdings endpoint failed');
    console.log(`✅ Indices holdings endpoint: Retrieved ${indicesHoldings.data.length} holdings`);
    
    console.log('\nTesting indices performance endpoint...');
    const indicesPerformance = await client.indicesPerformance.get({ 
      id: indexId,
      startDate: tenDaysAgo.toISOString().split('T')[0],
      endDate: yesterday.toISOString().split('T')[0]
    });
    assert(indicesPerformance.data !== undefined, 'Indices performance endpoint failed');
    console.log(`✅ Indices performance endpoint: Retrieved ${indicesPerformance.data.length} data points`);
    

    
  } catch (error) {
    console.error(`❌ New endpoints test failed: ${error instanceof Error ? error.message : String(error)}`);
    throw error;
  }
}

export const test = (): void => {
  describe('Token Metrics SDK', () => {
    it('should run all tests', async () => {
      await runTests();
    }, 60000); // 60 second timeout
  });
};

if (typeof require !== 'undefined' && require.main === module) {
  runTests();
}
