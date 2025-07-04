// src/ai/flows/personalize-content.ts
'use server';

/**
 * @fileOverview A content personalization AI agent based on user profession.
 *
 * - personalizeContent - A function that handles the content personalization process.
 * - PersonalizeContentInput - The input type for the personalizeContent function.
 * - PersonalizeContentOutput - The return type for the personalizeContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizeContentInputSchema = z.object({
  visitorProfile: z
    .string()
    .describe('The visitor profile information, could include job title, company, etc.'),
});
export type PersonalizeContentInput = z.infer<typeof PersonalizeContentInputSchema>;

const PersonalizeContentOutputSchema = z.object({
  prioritizedSections: z
    .array(z.string())
    .describe(
      'An array of content section names, prioritized based on the visitor profile (e.g., recruiter, academic)'
    ),
});
export type PersonalizeContentOutput = z.infer<typeof PersonalizeContentOutputSchema>;

export async function personalizeContent(input: PersonalizeContentInput): Promise<PersonalizeContentOutput> {
  return personalizeContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizeContentPrompt',
  input: {schema: PersonalizeContentInputSchema},
  output: {schema: PersonalizeContentOutputSchema},
  prompt: `You are an AI assistant specializing in tailoring website content to better match visitor profiles.

  Based on the following visitor profile:
  {{visitorProfile}}

  Please prioritize the following content sections of a personal portfolio website to best suit this visitor. Return a JSON array of section names in order of priority. Possible sections include:

  - About Me
  - Skills
  - Projects
  - Experience
  - Achievements
  - Employment Express Verband LLP

  If the visitor is likely a recruiter, prioritize "Employment Express Verband LLP" and "Experience". If the visitor is likely from a college or university, prioritize "Achievements" and "Projects". Otherwise, use your best judgement.
  `,
});

const personalizeContentFlow = ai.defineFlow(
  {
    name: 'personalizeContentFlow',
    inputSchema: PersonalizeContentInputSchema,
    outputSchema: PersonalizeContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
