import { BaseEndpoint } from '../base.js';
import { AIAgentMessage, AIAgentResponse } from '../types.js';

/**
 * Endpoint for accessing the AI Agent (chatbot) for token insights
 */
export class AIAgentEndpoint extends BaseEndpoint {
  /**
   * Send a message to the Token Metrics AI chatbot.
   * 
   * @param messages - List of message objects, each containing a "user" key with the message text
   * @returns - AI chatbot response
   */
  async chat(messages: AIAgentMessage[]): Promise<AIAgentResponse> {
    const payload = {
      messages: messages
    };
    
    return this._request<AIAgentResponse>('post', 'tmai', null, payload);
  }
  
  /**
   * Simplified method to ask a single question to the AI chatbot.
   * 
   * @param question - The question to ask
   * @returns - AI chatbot response
   */
  async ask(question: string): Promise<AIAgentResponse> {
    const messages: AIAgentMessage[] = [{ user: question }];
    return this.chat(messages);
  }
  
  /**
   * Get just the answer text from the AI chatbot response.
   * 
   * @param question - The question to ask
   * @returns - The answer text from the AI chatbot
   */
  async getAnswerText(question: string): Promise<string> {
    const response = await this.ask(question);
    return response.answer || "";
  }
}
