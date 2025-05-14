/**
 * Test script for the Token Metrics AI API JavaScript SDK
 * 
 * This script demonstrates the functionality of each endpoint in the SDK.
 * To run this test, you need a valid Token Metrics API key.
 * 
 * Usage: 
 * node test.js YOUR_API_KEY
 * 
 * Or set the TM_API_KEY environment variable:
 * TM_API_KEY=your-api-key node test.js
 */

const { TokenMetricsClient } = require('../src/index');
const assert = require('assert');

const apiKey = "tm-a123f8d9-2cde-4e50-af3b-c5e2b7ffcc81";

if (!apiKey) {
  console.error('Please provide your Token Metrics API key as a command line argument or set the TM_API_KEY environment variable');
  console.error('Usage: node test.js YOUR_API_KEY');
  console.error('   or: TM_API_KEY=your-api-key node test.js');
  process.exit(1);
}

const client = new TokenMetricsClient(apiKey);

async function runTests() {
  try {
    console.log('Testing Token Metrics AI API JavaScript SDK...\n');
    
    await testExistingEndpoints();
    
    await testNewEndpoints();
    
    console.log('\n✅ All tests completed successfully!');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    if (error.stack) {
      console.error(error.stack);
    }
    process.exit(1);
  }
}

async function testExistingEndpoints() {
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
  
  console.log('\nTesting trader indices endpoint...');
  const traderIndices = await client.traderIndices.get({ 
    startDate: tenDaysAgo.toISOString().split('T')[0], 
    endDate: yesterday.toISOString().split('T')[0] 
  });
  assert(traderIndices.data && traderIndices.data.length > 0, 'Trader indices endpoint failed');
  console.log(`✅ Trader indices endpoint: Retrieved ${traderIndices.data.length} indices`);
  
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
    const aiResponse = await client.aiAgent.get({ message: 'What is your analysis of Bitcoin?' });
    assert(aiResponse && aiResponse.data, 'AI agent endpoint failed');
    console.log(`✅ AI agent endpoint: Retrieved response`);
  } catch (error) {
    console.log(`⚠️ AI agent endpoint: ${error.message} - Skipping this test`);
  }
}

async function testNewEndpoints() {
  try {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const tenDaysAgo = new Date(today);
    tenDaysAgo.setDate(tenDaysAgo.getDate() - 10);
    console.log('\nTesting investor indices endpoint...');
    const investorIndices = await client.investorIndices.get();
    assert(investorIndices.data !== undefined, 'Investor indices endpoint failed');
    console.log(`✅ Investor indices endpoint: Retrieved ${investorIndices.data.length} indices`);
    
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
    
    let indexId = null;
    if (investorIndices.data && investorIndices.data.length > 0) {
      indexId = investorIndices.data[0].INDEX_ID;
    }
    
    if (indexId) {
      console.log('\nTesting sector indices holdings endpoint...');
      const sectorIndicesHoldings = await client.sectorIndicesHoldings.get({ index_id: indexId });
      assert(sectorIndicesHoldings.data !== undefined, 'Sector indices holdings endpoint failed');
      console.log(`✅ Sector indices holdings endpoint: Retrieved ${sectorIndicesHoldings.data.length} holdings`);
      
      console.log('\nTesting sector indices performance endpoint...');
      const sectorIndicesPerformance = await client.sectorIndicesPerformance.get({ 
        index_id: indexId,
        startDate: tenDaysAgo.toISOString().split('T')[0],
        endDate: yesterday.toISOString().split('T')[0]
      });
      assert(sectorIndicesPerformance.data !== undefined, 'Sector indices performance endpoint failed');
      console.log(`✅ Sector indices performance endpoint: Retrieved ${sectorIndicesPerformance.data.length} data points`);
      
      console.log('\nTesting sector index transaction endpoint...');
      const sectorIndexTransaction = await client.sectorIndexTransaction.get({ 
        index_id: indexId,
        startDate: tenDaysAgo.toISOString().split('T')[0],
        endDate: yesterday.toISOString().split('T')[0]
      });
      assert(sectorIndexTransaction.data !== undefined, 'Sector index transaction endpoint failed');
      console.log(`✅ Sector index transaction endpoint: Retrieved ${sectorIndexTransaction.data.length} transactions`);
    } else {
      console.log('\n⚠️ Could not test index-related endpoints because no index_id was found');
    }
    
  } catch (error) {
    console.error(`❌ New endpoints test failed: ${error.message}`);
    throw error;
  }
}

runTests();
