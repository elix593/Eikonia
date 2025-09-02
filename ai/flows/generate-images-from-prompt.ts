'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating images from a text prompt.
 *
 * The flow takes a text prompt as input and returns a data URI of the generated image.
 * It exports:
 * - `generateImageFromPrompt`: The function to call to generate an image from a prompt.
 * - `GenerateImageFromPromptInput`: The input type for the `generateImageFromPrompt` function.
 * - `GenerateImageFromPromptOutput`: The output type for the `generateImageFromPrompt` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { googleAI } from '@genkit-ai/googleai';

const GenerateImageFromPromptInputSchema = z.object({
  prompt: z.string().describe('A detailed text prompt describing the desired image.'),
});
export type GenerateImageFromPromptInput = z.infer<typeof GenerateImageFromPromptInputSchema>;

const GenerateImageFromPromptOutputSchema = z.object({
  image: z.string().describe('A data URI of the generated image.'),
});
export type GenerateImageFromPromptOutput = z.infer<typeof GenerateImageFromPromptOutputSchema>;

export async function generateImageFromPrompt(input: GenerateImageFromPromptInput): Promise<GenerateImageFromPromptOutput> {
  return generateImageFromPromptFlow(input);
}

const generateImageFromPromptFlow = ai.defineFlow(
  {
    name: 'generateImageFromPromptFlow',
    inputSchema: GenerateImageFromPromptInputSchema,
    outputSchema: GenerateImageFromPromptOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: input.prompt,
    });

    if (!media) {
      throw new Error('No image was generated.');
    }

    return {image: media.url!};
  }
);
