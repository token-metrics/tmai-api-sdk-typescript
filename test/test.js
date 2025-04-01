/**
 * Test script for the Token Metrics AI API JavaScript SDK
 * 
 * This script demonstrates the functionality of each endpoint in the SDK.
 * To run this test, you need a valid Token Metrics API key.
 * 
 * Usage: 
 * node test.js YOUR_API_KEY
 */

const { TokenMetricsClient } = require('../src/index');

const apiKey = process.argv[2];

if (!apiKey) {
  console.error('Please provide your Token Metrics API key as a command line argument');
  console.error('Usage: node test.js YOUR_API_KEY');
  process.exit(1);
}

const client = new TokenMetricsClient(apiKey);

async function runTests() {
  try {
    console.log('Testing Token Metrics AI API JavaScript SDK...\n');
    
    console.log('Testing tokens endpoint...');
    const tokens = await client.tokens.get({ symbol: 'BTC,ETH' });
    console.log(`✅ Tokens endpoint: Retrieved ${tokens.data.length} tokens`);
    
    console.log('\nTesting hourly OHLCV endpoint...');
    const hourlyData = await client.hourlyOhlcv.get({ 
      symbol: 'BTC', 
      startDate: '2023-01-01', 
      endDate: '2023-01-02' 
    });
    console.log(`✅ Hourly OHLCV endpoint: Retrieved ${hourlyData.data.length} data points`);
    
    console.log('\nTesting daily OHLCV endpoint...');
    const dailyData = await client.dailyOhlcv.get({ 
      symbol: 'BTC', 
      startDate: '2023-01-01', 
      endDate: '2023-01-10' 
    });
    console.log(`✅ Daily OHLCV endpoint: Retrieved ${dailyData.data.length} data points`);
    
    console.log('\nTesting investor grades endpoint...');
    const investorGrades = await client.investorGrades.get({ 
      symbol: 'BTC,ETH', 
      startDate: '2023-01-01', 
      endDate: '2023-01-10' 
    });
    console.log(`✅ Investor grades endpoint: Retrieved ${investorGrades.data.length} grades`);
    
    console.log('\nTesting trader grades endpoint...');
    const traderGrades = await client.traderGrades.get({ 
      symbol: 'BTC,ETH', 
      startDate: '2023-01-01', 
      endDate: '2023-01-10' 
    });
    console.log(`✅ Trader grades endpoint: Retrieved ${traderGrades.data.length} grades`);
    
    console.log('\nTesting trader indices endpoint...');
    const traderIndices = await client.traderIndices.get({ 
      startDate: '2023-01-01', 
      endDate: '2023-01-10' 
    });
    console.log(`✅ Trader indices endpoint: Retrieved ${traderIndices.data.length} indices`);
    
    console.log('\nTesting market metrics endpoint...');
    const marketMetrics = await client.marketMetrics.get({ 
      startDate: '2023-01-01', 
      endDate: '2023-01-10' 
    });
    console.log(`✅ Market metrics endpoint: Retrieved ${marketMetrics.data.length} metrics`);
    
    console.log('\nTesting AI reports endpoint...');
    const aiReports = await client.aiReports.get({ symbol: 'BTC' });
    console.log(`✅ AI reports endpoint: Retrieved ${aiReports.data.length} reports`);
    
    console.log('\nTesting trading signals endpoint...');
    const tradingSignals = await client.tradingSignals.get({ 
      symbol: 'BTC', 
      startDate: '2023-01-01', 
      endDate: '2023-01-10',
      signal: '1' 
    });
    console.log(`✅ Trading signals endpoint: Retrieved ${tradingSignals.data.length} signals`);
    
    console.log('\nTesting AI agent endpoint...');
    const aiResponse = await client.aiAgent.ask('What is your analysis of Bitcoin?');
    console.log(`✅ AI agent endpoint: Retrieved response of length ${aiResponse.answer.length}`);
    
    console.log('\n✅ All tests completed successfully!');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    if (error.stack) {
      console.error(error.stack);
    }
  }
}

runTests();
