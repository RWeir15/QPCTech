import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Network Infrastructure - QPCTech",
  description: "Build a robust, scalable network with QPCTech's expert infrastructure solutions, designed for businesses.",
};

const keyAreas = [
    "Indoor Outdoor and Industrial cabling",
    "Wireless Access Points",
    "Router and Firewall",
    "Switch",
    "Recertification of existing cables",
    "New installation or Datacenter \"make-over\"",
];

export default function NetworkInfrastructurePage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold text-primary">Network Infrastructure</h1>
      </div>
      
      <div className="space-y-8">
        <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-3xl text-primary">Our Approach</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-black">Our technicians and contractors have experience in Industrial, Residential, Hospitality and Healthcare installations and maintenance of all aspects of any network project.</p>
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
            <CardTitle className="font-headline text-2xl text-primary">For more information or a quote contact us</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-black text-lg">517-610-5372</p>
            <p className="text-black text-lg">support@qpctech.com</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
