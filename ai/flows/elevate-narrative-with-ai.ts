'use server';
/**
 * @fileOverview A flow that enhances existing photographs with AI to add narrative depth and emotional impact.
 *
 * - elevateNarrativeWithAI - A function that accepts an image and transforms it into a cinematic scene.
 * - ElevateNarrativeWithAIInput - The input type for the elevateNarrativeWithAI function.
 * - ElevateNarrativeWithAIOutput - The return type for the elevateNarrativeWithAI function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ElevateNarrativeWithAIInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo to be enhanced, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  narrativeDescription: z
    .string()
    .describe("A description of the desired narrative and emotional impact."),
});
export type ElevateNarrativeWithAIInput = z.infer<typeof ElevateNarrativeWithAIInputSchema>;

const ElevateNarrativeWithAIOutputSchema = z.object({
  enhancedPhotoDataUri: z
    .string()
    .describe("The enhanced photo as a data URI."),
});
export type ElevateNarrativeWithAIOutput = z.infer<typeof ElevateNarrativeWithAIOutputSchema>;

export async function elevateNarrativeWithAI(input: ElevateNarrativeWithAIInput): Promise<ElevateNarrativeWithAIOutput> {
  return elevateNarrativeWithAIFlow(input);
}

const prompt = ai.definePrompt({
  name: 'elevateNarrativeWithAIPrompt',
  input: {schema: ElevateNarrativeWithAIInputSchema},
  output: {schema: ElevateNarrativeWithAIOutputSchema},
  prompt: `Transform the given photo into a cinematic scene that tells a compelling story, as described below.\n\nNarrative Description: {{{narrativeDescription}}}\nPhoto: {{media url=photoDataUri}}\n\nOutput: Enhanced Photo Data URI`,
});

const elevateNarrativeWithAIFlow = ai.defineFlow(
  {
    name: 'elevateNarrativeWithAIFlow',
    inputSchema: ElevateNarrativeWithAIInputSchema,
    outputSchema: ElevateNarrativeWithAIOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/gemini-2.0-flash-preview-image-generation',
      prompt: [
        {media: {url: input.photoDataUri}},
        {text: input.narrativeDescription},
      ],
      config: {
        responseModalities: ['TEXT', 'IMAGE'], // MUST provide both TEXT and IMAGE, IMAGE only won't work
      },
    });

    return {
      enhancedPhotoDataUri: media!.url,
    };
  }
);
