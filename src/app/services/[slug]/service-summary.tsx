import { getServiceSummary } from '@/lib/actions';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';

export async function ServiceSummary({ description }: { description: string }) {
  const summary = await getServiceSummary(description);

  return (
    <Card className="bg-primary/5 border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 font-headline text-xl">
          <Lightbulb className="h-6 w-6 text-primary" />
          <span>AI-Powered Summary</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{summary}</p>
      </CardContent>
    </Card>
  );
}
