const BaseEndpoint = require('../base');

/**
 * Endpoint for accessing the AI Agent (chatbot) for token insights
 */
class AIAgentEndpoint extends BaseEndpoint {
  /**
   * Send a message to the Token Metrics AI chatbot.
   * 
   * @param {Array} messages - List of message objects, each containing a "user" key with the message text
   * @returns {Promise<Object>} - AI chatbot response
   */
  async chat(messages) {
    const payload = {
      messages: messages
    };
    
    return this._request('post', 'tmai', null, payload);
  }
  
  /**
   * Simplified method to ask a single question to the AI chatbot.
   * 
   * @param {string} question - The question to ask
   * @returns {Promise<Object>} - AI chatbot response
   */
  async ask(question) {
    const messages = [{ user: question }];
    return this.chat(messages);
  }
  
  /**
   * Get just the answer text from the AI chatbot response.
   * 
   * @param {string} question - The question to ask
   * @returns {Promise<string>} - The answer text from the AI chatbot
   */
  async getAnswerText(question) {
    const response = await this.ask(question);
    return response.answer || "";
  }
}

module.exports = AIAgentEndpoint;
