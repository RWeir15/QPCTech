import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Physical Security - QPCTech",
  description: "Secure your business with state-of-the-art physical security systems, including surveillance and access control.",
};

const keyAreas = [
    "Surveillance Cameras",
    "Affordable",
    "Consultation",
    "NIST Cybersecurity Certification",
    "Burglar Alarms",
    "Building Access Control Systems",
    "Licensed by the State of Michigan",
];

export default function PhysicalSecurityPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold text-primary">Physical Security</h1>
      </div>
      
      <div className="space-y-8">
        <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-3xl text-primary">Approach to Physical Security</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6 text-black">
                        <div>
                            <h3 className="font-semibold text-xl text-primary mb-2">Surveillance Cameras</h3>
                            <p className="text-black">Like phones, cameras have become a lot more affordable in a short period of time. Just like phones, you cannot assume one size fits all. Often the camera is the easy part. The video management application is what separates the men from the boys. Let our Technicians and expert contractors talk through your requirements and select the right solution for your growing business. Buyers beware: today’s marketplace is full of popular solutions that do not pass NIST Cybersecurity Certification, depending on your business governance you may have a solution in place that is compromising the security of your customers.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-xl text-primary mb-2">Burglar Alarms and Building Access Control systems</h3>
                            <p className="text-black">QPC's expert contractors are licensed by the State of Michigan to provide installation and service of these critical security technologies. Before you resign yourself to a DIY solution advertised on your favorite podcast, give us a call and we would love to help you define your strategy, and make sure that your investment will hold up to the challenge.</p>
                        </div>
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
