"use client";

import { useFormState, useFormStatus } from "react-dom";
import { getServiceRecommendation } from "@/lib/actions";
import type { RecommendationState } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Bot, Loader2, User } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const initialState: RecommendationState = {};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full font-semibold">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          Get Recommendation <ArrowRight className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
}

export function RecommendationForm() {
  const [state, formAction] = useFormState(
    getServiceRecommendation,
    initialState
  );

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Describe Your Needs</CardTitle>
          <CardDescription>
            Tell us about your business challenges or IT requirements, and our AI assistant will suggest the best QPCTech services for you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-4">
            <Textarea
              name="needs"
              placeholder="e.g., 'We are a small startup of 10 people and need to set up a secure network, manage our employee laptops, and get our data into the cloud. We are worried about cybersecurity threats.'"
              rows={6}
              className="text-base"
              required
            />
            {state.error && (
              <p className="text-sm font-medium text-destructive">{state.error}</p>
            )}
            <SubmitButton />
          </form>
        </CardContent>
      </Card>

      {state.recommendation && (
        <Card className="mt-8">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Our Recommendation</CardTitle>
            </CardHeader>
          <CardContent className="space-y-6 text-base">
            <div className="flex gap-4">
                <User className="h-6 w-6 text-primary flex-shrink-0" />
                <div className="flex-1 pt-0.5">
                    <p className="font-semibold">Your Needs:</p>
                    <p className="text-muted-foreground italic">"{state.needs}"</p>
                </div>
            </div>
            <div className="flex gap-4">
                <Bot className="h-6 w-6 text-primary flex-shrink-0" />
                 <div className="flex-1 pt-0.5">
                    <p className="font-semibold">AI Assistant:</p>
                    <p className="text-muted-foreground whitespace-pre-wrap">{state.recommendation}</p>
                 </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
