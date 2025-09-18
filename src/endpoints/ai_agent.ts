import { BaseEndpoint } from '../base';
import { AIAgentMessage, AIAgentResponse } from '../types';

/**
 * Endpoint for accessing the Token Metrics AI chatbot
 */
export class AIAgentEndpoint extends BaseEndpoint {
  /**
   * Token Metrics AI is designed to help answer any questions about crypto. In its first version, the chatbot integrates data specifically from Token Metrics, providing targeted and relevant answers to various crypto queries.
   * 
   * @param messages - List of message objects, each containing a "user" key with the message text
   * @returns - AI chatbot response with conversation thread
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
   * @param question - The question to ask the AI chatbot
   * @returns - AI chatbot response with conversation thread
   */
  async ask(question: string): Promise<AIAgentResponse> {
    const messages: AIAgentMessage[] = [{ user: question }];
    return this.chat(messages);
  }
  
  /**
   * Get just the answer text from the AI chatbot response.
   * 
   * @param question - The question to ask the AI chatbot
   * @returns - The answer text from the AI chatbot
   */
  async getAnswerText(question: string): Promise<string> {
    const response = await this.ask(question);
    return response.answer || "";
  }
}
