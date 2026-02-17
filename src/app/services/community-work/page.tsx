import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Community Work - QPCTech",
  description: "Learn about our involvement in the community.",
};

const keyAreas = [
    "Non-Profits",
    "Enterprise IT Asset Disposition",
    "Sustainability",
    "Corporate Giving",
    "On the Job Training",
];

export default function CommunityWorkPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold text-primary">Community Work</h1>
      </div>
      
      <div className="space-y-8">
        <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-3xl text-primary">Our Mission... is to enable your Mission.</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6 text-black">
                        <p>We have coordinated the giving of local enterprise businesses whose purpose is to grant their disused IT assets for the benefit of local non-profit organizations. We have coordinated the reuse of hundreds of laptop and desktop computers, monitors, switches, etc.</p>
                        <p>By reusing enterprise IT computers that are only a few years old, we can provide an "economy of scale" for our approach to PC support to the non-profit customer. Often a used PC is of considerably higher quality than a PC that would otherwise be within the budget of a non-profit.</p>
                        <p>Finally, given the "corporate standard" nature of the available used IT assets, the time cost of upkeep on these computers is much lower than a "sale of the week" computer from OfficeMax. It has been our privilege to Work with the Jackson Area Career Center and Hillsdale Area Career Center students on the job and in the schools to train our next generation of IT consultants.</p>
                    </CardContent>
                </Card>
            </div>
            <aside>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 font-headline text-xl text-primary">
                            <span>Key Areas</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3">
                            {keyAreas.map(item => (
                                <li key={item} className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                                    <span className="text-black">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </aside>
        </div>
      </div>
    </div>
  );
}
