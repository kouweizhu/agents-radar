/**
 * Base class for OpenAI-compatible providers.
 *
 * Shared by OpenAI, GitHub Copilot, and OpenRouter providers.
 */

import OpenAI from "openai";
import type { LlmProvider } from "./types.ts";

export abstract class OpenAICompatibleProvider implements LlmProvider {
  abstract readonly name: string;
  protected readonly client: OpenAI;
  protected readonly model: string;

  constructor(opts: { apiKey?: string; baseURL?: string; model: string }) {
    this.model = opts.model;
    this.client = new OpenAI({
      apiKey: opts.apiKey,
      baseURL: opts.baseURL,
    });
  }

  async call(prompt: string, maxTokens: number): Promise<string> {
    const response = await this.client.chat.completions.create({
      model: this.model,
      max_completion_tokens: maxTokens,
      messages: [{ role: "user", content: prompt }],
    });
    const choice = response.choices[0];
    const text = choice?.message?.content;
    if (!text) {
      // A thinking model can spend the entire max_completion_tokens budget on
      // reasoning and still return an empty `content` with finish_reason
      // "length". Without the envelope that reads as "the provider is down";
      // with it, it reads as "this model needs a bigger budget or none at all".
      const meta = choice as { finish_reason?: string; message?: { reasoning_content?: string } } | undefined;
      throw new Error(
        `Unexpected empty response from ${this.name} ` +
          `(finish_reason=${meta?.finish_reason ?? "?"}, ` +
          `reasoning_chars=${meta?.message?.reasoning_content?.length ?? 0}, ` +
          `completion_tokens=${response.usage?.completion_tokens ?? "?"}, ` +
          `max_completion_tokens=${maxTokens})`,
      );
    }
    return text;
  }
}
