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
    
  }
}

module.exports = TokenMetricsClient;
