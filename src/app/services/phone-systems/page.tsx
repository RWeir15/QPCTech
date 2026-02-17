import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Phone Systems - QPCTech",
  description: "Upgrade your communication with our cost-effective VoIP solutions, designed for seamless business connectivity.",
};

const keyAreas = [
    "Tailored VoIP solution",
    "Integration with Analog Phones",
    "Savings",
    "Vendor Agnostic Approach",
    "Initial VoIP Project Management",
    "Ongoing VoIP Tech Support",
];

export default function PhoneSystemsPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold text-primary">Phone Systems</h1>
      </div>
      
      <div className="space-y-8">
        <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-3xl text-primary">Our Approach</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-black">
                        <p>“Simple” Land Lines are becoming un-sustainably expensive. “Fancy” Voice over IP phones (VoIP) offer tremendous savings over conventional phone systems. We have assisted many Michigan businesses with this transition to VoIP. In our experience, one size does not fit all organizations.</p>
                        <p>It’s not hard to find a “phone guy” eager to show you how to change your entire business process to fit his new fancy phone system. At QPCTech we take a different approach: pulling from our experience working with several VoIP vendors we can help you find the right VoIP solution with the right features to meet your specific requirements. We can provide tech support throughout the transition process.</p>
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
            <Card>
                <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                <Image
                    src="https://www.qpctech.com/wp-content/uploads/2024/01/UniFi-Talk-1-768x363.png"
                    alt="UniFi Talk Phones"
                    fill
                    className="object-cover"
                />
                </div>
                <CardHeader>
                    <CardTitle className="font-headline text-xl text-primary">UniFi Talk - Use the Phones</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-black">
                        Configure Voicemail To configure voicemail on the Touch and Touch Max phone: From the Keypad, dial *86 or long-press...
                    </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/services/phone-systems/unifi-talk-use-the-phones">
                      Read More
                    </Link>
                  </Button>
                </CardFooter>
            </Card>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
