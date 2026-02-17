import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Cybersecurity - QPCTech",
  description: "Protect your business with comprehensive cybersecurity solutions, including threat monitoring, EDR, and more.",
};

const keyAreas = [
    "Current & Emerging Cybersecurity",
    "Small & Large Businesses",
    "Security Standards",
    "Managed Antivirus",
    "Patch Management",
    "NinjaOne",
    "Huntress",
];

export default function CybersecurityPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold text-primary">Cybersecurity</h1>
      </div>
      
      <div className="space-y-8">
        <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-3xl text-primary">Our Approach</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-black">
                        <p>The first known use of the word “cybersecurity” according to Merriam-Webster was in 1989. Everything we knew about cybersecurity has changed ten-fold since then. How has this term been defined and redefined over the years in your business? QPC has acquired many perspectives over the years helping small and large business customers across multiple industries such as Healthcare, Finance, Retail, Energy, Education, Non-profit, Government. More importantly, we have committed a significant portion of our consultants’ personal development time to studying current and emerging governance such as CMMC, HIPAA, GLBA, PCI and other important security standards.</p>
                        <p>At QPC, we recommend a <strong>Managed Antivirus</strong>. Huntress Labs is a globally recognized leader in the Antivirus industry. Our customers love the price of this solution our auditors love the comprehensive approach Huntress takes. Our PC techs love the low performance footprint and of course our experience gives us the most important metric… the efficiency at which Huntress captures known and unknown malware on our customers systems has saved untold thousands of hours and dollars as we can stop threats before they deliver their payload, or do their dastardly deed on your data.</p>
                        <p><strong>Patch Management</strong>, though often ignored, is perhaps even more critical than an Antivirus at establishing Cyber Defense. QPC uses NinjaOne to deliver Windows updates as well as third-party software patches. We use it also to blacklist nuisance or near-malicious software, that when installed, adds no value and may increase your threat exposure.</p>
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

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary">In the Field</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                    <Image
                        src="https://www.qpctech.com/wp-content/uploads/2024/12/Diagrams_Managed-EDR-Dark-768x371.webp"
                        alt="Responsibility: Antivirus vs. EDR"
                        width={768}
                        height={371}
                        className="object-cover"
                    />
                    </div>
                    <CardHeader>
                        <CardTitle className="font-headline text-xl text-primary">Responsibility: Antivirus vs. EDR</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-black text-sm">Antivirus and Endpoint Detection and Response (EDR) serve distinct but complementary roles in cybersecurity....</p>
                    </CardContent>
                </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
