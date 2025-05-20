[Token Metrics AI API TypeScript SDK - v1.0.5](../README.md) / [Exports](../modules.md) / TokenMetricsClient

# Class: TokenMetricsClient

Main client for interacting with the Token Metrics AI API.

## Table of contents

### Constructors

- [constructor](TokenMetricsClient.md#constructor)

### Properties

- [aiAgent](TokenMetricsClient.md#aiagent)
- [aiReports](TokenMetricsClient.md#aireports)
- [apiKey](TokenMetricsClient.md#apikey)
- [correlation](TokenMetricsClient.md#correlation)
- [cryptoInvestors](TokenMetricsClient.md#cryptoinvestors)
- [dailyOhlcv](TokenMetricsClient.md#dailyohlcv)
- [hourlyOhlcv](TokenMetricsClient.md#hourlyohlcv)
- [investorGrades](TokenMetricsClient.md#investorgrades)
- [marketMetrics](TokenMetricsClient.md#marketmetrics)
- [price](TokenMetricsClient.md#price)
- [quantmetrics](TokenMetricsClient.md#quantmetrics)
- [resistanceSupport](TokenMetricsClient.md#resistancesupport)
- [scenarioAnalysis](TokenMetricsClient.md#scenarioanalysis)
- [sectorIndexTransaction](TokenMetricsClient.md#sectorindextransaction)
- [sectorIndicesHoldings](TokenMetricsClient.md#sectorindicesholdings)
- [sectorIndicesPerformance](TokenMetricsClient.md#sectorindicesperformance)
- [sentiment](TokenMetricsClient.md#sentiment)
- [tokens](TokenMetricsClient.md#tokens)
- [topMarketCapTokens](TokenMetricsClient.md#topmarketcaptokens)
- [traderGrades](TokenMetricsClient.md#tradergrades)
- [tradingSignals](TokenMetricsClient.md#tradingsignals)
- [BASE\_URL](TokenMetricsClient.md#base_url)

## Constructors

### constructor

• **new TokenMetricsClient**(`apiKey`): [`TokenMetricsClient`](TokenMetricsClient.md)

Initialize the Token Metrics client.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `apiKey` | `string` | Your Token Metrics API key |

#### Returns

[`TokenMetricsClient`](TokenMetricsClient.md)

#### Defined in

[client.ts:70](https://github.com/token-metrics/tmai-api-sdk-javascript/blob/ad1a6be01cc667f1988de9933d7cf75a657e9d1f/src/client.ts#L70)

## Properties

### aiAgent

• `Readonly` **aiAgent**: `AIAgentEndpoint`

#### Defined in

[client.ts:43](https://github.com/token-metrics/tmai-api-sdk-javascript/blob/ad1a6be01cc667f1988de9933d7cf75a657e9d1f/src/client.ts#L43)

___

### aiReports

• `Readonly` **aiReports**: `AIReportsEndpoint`

#### Defined in

[client.ts:51](https://github.com/token-metrics/tmai-api-sdk-javascript/blob/ad1a6be01cc667f1988de9933d7cf75a657e9d1f/src/client.ts#L51)

___

### apiKey

• `Readonly` **apiKey**: `string`

API key for authentication

#### Defined in

[client.ts:37](https://github.com/token-metrics/tmai-api-sdk-javascript/blob/ad1a6be01cc667f1988de9933d7cf75a657e9d1f/src/client.ts#L37)

___

### correlation

• `Readonly` **correlation**: `CorrelationEndpoint`

#### Defined in

[client.ts:60](https://github.com/token-metrics/tmai-api-sdk-javascript/blob/ad1a6be01cc667f1988de9933d7cf75a657e9d1f/src/client.ts#L60)

___

### cryptoInvestors

• `Readonly` **cryptoInvestors**: `CryptoInvestorsEndpoint`

#### Defined in

[client.ts:53](https://github.com/token-metrics/tmai-api-sdk-javascript/blob/ad1a6be01cc667f1988de9933d7cf75a657e9d1f/src/client.ts#L53)

___

### dailyOhlcv

• `Readonly` **dailyOhlcv**: `DailyOHLCVEndpoint`

#### Defined in

[client.ts:46](https://github.com/token-metrics/tmai-api-sdk-javascript/blob/ad1a6be01cc667f1988de9933d7cf75a657e9d1f/src/client.ts#L46)

___

### hourlyOhlcv

• `Readonly` **hourlyOhlcv**: `HourlyOHLCVEndpoint`

#### Defined in

[client.ts:45](https://github.com/token-metrics/tmai-api-sdk-javascript/blob/ad1a6be01cc667f1988de9933d7cf75a657e9d1f/src/client.ts#L45)

___

### investorGrades

• `Readonly` **investorGrades**: `InvestorGradesEndpoint`

#### Defined in

[client.ts:47](https://github.com/token-metrics/tmai-api-sdk-javascript/blob/ad1a6be01cc667f1988de9933d7cf75a657e9d1f/src/client.ts#L47)

___

### marketMetrics

• `Readonly` **marketMetrics**: `MarketMetricsEndpoint`

#### Defined in

[client.ts:50](https://github.com/token-metrics/tmai-api-sdk-javascript/blob/ad1a6be01cc667f1988de9933d7cf75a657e9d1f/src/client.ts#L50)

___

### price

• `Readonly` **price**: `PriceEndpoint`

#### Defined in

[client.ts:56](https://github.com/token-metrics/tmai-api-sdk-javascript/blob/ad1a6be01cc667f1988de9933d7cf75a657e9d1f/src/client.ts#L56)

___

### quantmetrics

• `Readonly` **quantmetrics**: `QuantmetricsEndpoint`

#### Defined in

[client.ts:58](https://github.com/token-metrics/tmai-api-sdk-javascript/blob/ad1a6be01cc667f1988de9933d7cf75a657e9d1f/src/client.ts#L58)

___

### resistanceSupport

• `Readonly` **resistanceSupport**: `ResistanceSupportEndpoint`

#### Defined in

[client.ts:55](https://github.com/token-metrics/tmai-api-sdk-javascript/blob/ad1a6be01cc667f1988de9933d7cf75a657e9d1f/src/client.ts#L55)

___

### scenarioAnalysis

• `Readonly` **scenarioAnalysis**: `ScenarioAnalysisEndpoint`

#### Defined in

[client.ts:59](https://github.com/token-metrics/tmai-api-sdk-javascript/blob/ad1a6be01cc667f1988de9933d7cf75a657e9d1f/src/client.ts#L59)

___

### sectorIndexTransaction

• `Readonly` **sectorIndexTransaction**: `SectorIndexTransactionEndpoint`

#### Defined in

[client.ts:63](https://github.com/token-metrics/tmai-api-sdk-javascript/blob/ad1a6be01cc667f1988de9933d7cf75a657e9d1f/src/client.ts#L63)

___

### sectorIndicesHoldings

• `Readonly` **sectorIndicesHoldings**: `SectorIndicesHoldingsEndpoint`

#### Defined in

[client.ts:61](https://github.com/token-metrics/tmai-api-sdk-javascript/blob/ad1a6be01cc667f1988de9933d7cf75a657e9d1f/src/client.ts#L61)

___

### sectorIndicesPerformance

• `Readonly` **sectorIndicesPerformance**: `SectorIndicesPerformanceEndpoint`

#### Defined in

[client.ts:62](https://github.com/token-metrics/tmai-api-sdk-javascript/blob/ad1a6be01cc667f1988de9933d7cf75a657e9d1f/src/client.ts#L62)

___

### sentiment

• `Readonly` **sentiment**: `SentimentEndpoint`

#### Defined in

[client.ts:57](https://github.com/token-metrics/tmai-api-sdk-javascript/blob/ad1a6be01cc667f1988de9933d7cf75a657e9d1f/src/client.ts#L57)

___

### tokens

• `Readonly` **tokens**: `TokensEndpoint`

Endpoint instances

#### Defined in

[client.ts:42](https://github.com/token-metrics/tmai-api-sdk-javascript/blob/ad1a6be01cc667f1988de9933d7cf75a657e9d1f/src/client.ts#L42)

___

### topMarketCapTokens

• `Readonly` **topMarketCapTokens**: `TopMarketCapTokensEndpoint`

#### Defined in

[client.ts:54](https://github.com/token-metrics/tmai-api-sdk-javascript/blob/ad1a6be01cc667f1988de9933d7cf75a657e9d1f/src/client.ts#L54)

___

### traderGrades

• `Readonly` **traderGrades**: `TraderGradesEndpoint`

#### Defined in

[client.ts:48](https://github.com/token-metrics/tmai-api-sdk-javascript/blob/ad1a6be01cc667f1988de9933d7cf75a657e9d1f/src/client.ts#L48)

___

### tradingSignals

• `Readonly` **tradingSignals**: `TradingSignalsEndpoint`

#### Defined in

[client.ts:44](https://github.com/token-metrics/tmai-api-sdk-javascript/blob/ad1a6be01cc667f1988de9933d7cf75a657e9d1f/src/client.ts#L44)

___

### BASE\_URL

▪ `Static` `Readonly` **BASE\_URL**: ``"https://api.tokenmetrics.com/v2"``

Base URL for the Token Metrics API

#### Defined in

[client.ts:32](https://github.com/token-metrics/tmai-api-sdk-javascript/blob/ad1a6be01cc667f1988de9933d7cf75a657e9d1f/src/client.ts#L32)
