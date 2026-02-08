'use server';

/**
 * @fileOverview This file defines a Genkit flow for summarizing IT services.
 *
 * - summarizeService - An async function that takes a service description and returns a summary.
 * - ServiceSummarizationInput - The input type for the summarizeService function.
 * - ServiceSummarizationOutput - The output type for the summarizeService function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ServiceSummarizationInputSchema = z.object({
  serviceDescription: z
    .string()
    .describe('The detailed description of the IT service to summarize.'),
});
export type ServiceSummarizationInput = z.infer<typeof ServiceSummarizationInputSchema>;

const ServiceSummarizationOutputSchema = z.object({
  summary: z
    .string()
    .describe('A concise summary of the IT service, highlighting its key offerings and benefits.'),
});
export type ServiceSummarizationOutput = z.infer<typeof ServiceSummarizationOutputSchema>;

export async function summarizeService(input: ServiceSummarizationInput): Promise<ServiceSummarizationOutput> {
  return summarizeServiceFlow(input);
}

const summarizeServicePrompt = ai.definePrompt({
  name: 'summarizeServicePrompt',
  input: {schema: ServiceSummarizationInputSchema},
  output: {schema: ServiceSummarizationOutputSchema},
  prompt: `You are an expert IT consultant. Summarize the following IT service description into a concise summary that highlights the key offerings and benefits for potential customers.\n\nService Description: {{{serviceDescription}}}`,
});

const summarizeServiceFlow = ai.defineFlow(
  {
    name: 'summarizeServiceFlow',
    inputSchema: ServiceSummarizationInputSchema,
    outputSchema: ServiceSummarizationOutputSchema,
  },
  async input => {
    const {output} = await summarizeServicePrompt(input);
    return output!;
  }
);
