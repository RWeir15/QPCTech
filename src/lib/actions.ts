"use server";

import { recommendServices } from "@/ai/flows/service-recommendation";
import { summarizeService } from "@/ai/flows/service-summarization";
import { z } from "zod";

export type RecommendationState = {
  recommendation?: string;
  error?: string;
  needs?: string;
};

const RecommendationSchema = z.object({
  needs: z.string().min(10, { message: "Please describe your needs in more detail." }),
});

export async function getServiceRecommendation(
  prevState: RecommendationState,
  formData: FormData
): Promise<RecommendationState> {
  const validatedFields = RecommendationSchema.safeParse({
    needs: formData.get("needs"),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.needs?.[0],
    };
  }

  try {
    const result = await recommendServices({ needs: validatedFields.data.needs });
    return {
      recommendation: result.recommendation,
      needs: validatedFields.data.needs,
    };
  } catch (error) {
    console.error(error);
    return {
      error: "We couldn't generate a recommendation at this time. Please try again later.",
      needs: validatedFields.data.needs,
    };
  }
}


export async function getServiceSummary(serviceDescription: string) {
  try {
    const result = await summarizeService({ serviceDescription });
    return result.summary;
  } catch (error) {
    console.error(error);
    return "Summary could not be generated at this time.";
  }
}

export type ContactState = {
  message?: string;
  error?: string;
};

const ContactSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  service: z.string().min(1, { message: "Please select a service." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function submitContactForm(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const validatedFields = ContactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    service: formData.get("service"),
    message: formData.get("message"),
  });
  
  if (!validatedFields.success) {
    const firstError = Object.values(validatedFields.error.flatten().fieldErrors)[0]?.[0];
    return {
      error: firstError ?? "Invalid input.",
    };
  }

  // Here you would typically send an email, save to a database, etc.
  // For this demo, we'll just simulate a success response.
  console.log("Form submitted:", validatedFields.data);

  return {
    message: "Thank you for your inquiry! We will get back to you shortly.",
  };
}
