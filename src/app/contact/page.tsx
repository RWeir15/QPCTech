import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "./contact-form";

export const metadata = {
  title: "QPCTech - Contact Us",
  description: "Need IT support? Contact QPCTech for professional, prompt assistance with all your IT needs.",
};

const contactDetails = [
  {
    Icon: Mail,
    title: "Email",
    value: "support@qpctech.com",
    href: "mailto:support@qpctech.com",
  },
  {
    Icon: Phone,
    title: "Phone",
    value: "(517) 610-5372",
    href: "tel:+15176105372",
  },
  {
    Icon: MapPin,
    title: "Address",
    value: "37 Waldron St, Hillsdale, MI 49242",
  },
];

export default function ContactPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Contact Us
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-black">
          Need IT support? Contact QPCTech for professional, prompt assistance with all your IT needs.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
            <div className="space-y-8">
                {contactDetails.map(({ Icon, title, value, href }) => (
                    <div key={title} className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">
                            <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">{title}</h3>
                            {href ? (
                                <a href={href} className="text-black hover:text-primary transition-colors">
                                    {value}
                                </a>
                            ) : (
                                <p className="text-black">{value}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Send us an Email</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
