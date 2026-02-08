'use server';

/**
 * @fileOverview This file defines the Genkit flow for the Service Recommendation tool.
 *
 * - recommendServices - A function that recommends IT services based on user input.
 * - ServiceRecommendationInput - The input type for the recommendServices function.
 * - ServiceRecommendationOutput - The return type for the recommendServices function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ServiceRecommendationInputSchema = z.object({
  needs: z.string().describe('The user input describing their IT service needs.'),
});
export type ServiceRecommendationInput = z.infer<typeof ServiceRecommendationInputSchema>;

const ServiceRecommendationOutputSchema = z.object({
  recommendation: z.string().describe('The IT services recommended based on the user input.'),
});
export type ServiceRecommendationOutput = z.infer<typeof ServiceRecommendationOutputSchema>;

export async function recommendServices(input: ServiceRecommendationInput): Promise<ServiceRecommendationOutput> {
  return serviceRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'serviceRecommendationPrompt',
  input: {schema: ServiceRecommendationInputSchema},
  output: {schema: ServiceRecommendationOutputSchema},
  prompt: `You are an expert IT service consultant. Based on the user's needs, recommend the most suitable IT services.

User Needs: {{{needs}}}

Recommendation:`, 
});

const serviceRecommendationFlow = ai.defineFlow(
  {
    name: 'serviceRecommendationFlow',
    inputSchema: ServiceRecommendationInputSchema,
    outputSchema: ServiceRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
