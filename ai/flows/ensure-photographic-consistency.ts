'use server';
/**
 * @fileOverview A photographic consistency AI agent.
 *
 * - ensurePhotographicConsistency - A function that handles the photographic consistency process.
 * - EnsurePhotographicConsistencyInput - The input type for the ensurePhotographicConsistency function.
 * - EnsurePhotographicConsistencyOutput - The return type for the ensurePhotographicConsistency function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnsurePhotographicConsistencyInputSchema = z.object({
  initialImage: z
    .string()
    .describe(
      "The initial image in the series, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  prompt: z.string().describe('The prompt for the subsequent images.'),
  numImages: z.number().describe('The number of images to generate.'),
  consistencyChecklist: z
    .string()
    .describe(
      'A checklist of elements (characters, attire, lighting, etc.) to maintain consistency across generated images.'
    ),
});
export type EnsurePhotographicConsistencyInput = z.infer<typeof EnsurePhotographicConsistencyInputSchema>;

const EnsurePhotographicConsistencyOutputSchema = z.object({
  generatedImages: z.array(
    z.string().describe(
      'A list of data URIs of the generated images, ensuring consistency in key elements.'
    )
  ),
});
export type EnsurePhotographicConsistencyOutput = z.infer<typeof EnsurePhotographicConsistencyOutputSchema>;

export async function ensurePhotographicConsistency(
  input: EnsurePhotographicConsistencyInput
): Promise<EnsurePhotographicConsistencyOutput> {
  return ensurePhotographicConsistencyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'ensurePhotographicConsistencyPrompt',
  input: {schema: EnsurePhotographicConsistencyInputSchema},
  output: {schema: EnsurePhotographicConsistencyOutputSchema},
  prompt: `You are an expert in generating consistent photographic series.

You will use the initial image and the checklist to ensure that the generated images maintain consistency in the specified elements.

Initial Image: {{media url=initialImage}}
Prompt: {{{prompt}}}
Consistency Checklist: {{{consistencyChecklist}}}
Number of Images: {{{numImages}}}

Generate a series of images based on the prompt, while ensuring consistency in:
- Characters
- Attire
- Lighting
- Other elements specified in the checklist

Return the generated images as a list of data URIs.

Output format:
{
  "generatedImages": ["data:image/png;base64,...", "data:image/png;base64,..."]
}`,
});

const ensurePhotographicConsistencyFlow = ai.defineFlow(
  {
    name: 'ensurePhotographicConsistencyFlow',
    inputSchema: EnsurePhotographicConsistencyInputSchema,
    outputSchema: EnsurePhotographicConsistencyOutputSchema,
  },
  async input => {
    const generatedImages: string[] = [];

    for (let i = 0; i < input.numImages; i++) {
      const {media} = await ai.generate({
        model: 'googleai/imagen-4.0-fast-generate-001',
        prompt: [
          {text: input.prompt},
          {media: {url: input.initialImage}},
          {text: `Ensure consistency in ${input.consistencyChecklist}`},
        ],
      });

      if (media) {
        generatedImages.push(media.url);
      }
    }

    return {generatedImages};
  }
);
