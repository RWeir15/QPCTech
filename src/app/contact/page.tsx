import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "./contact-form";

export const metadata = {
  title: "Contact Us - QPCTech",
  description: "Get in touch with QPCTech for inquiries, support, or to schedule a consultation.",
};

const contactDetails = [
  {
    Icon: Mail,
    title: "Email",
    value: "contact@qpctech.com",
    href: "mailto:contact@qpctech.com",
  },
  {
    Icon: Phone,
    title: "Phone",
    value: "(555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    Icon: MapPin,
    title: "Address",
    value: "123 Tech Avenue, Silicon Valley, CA 94000",
  },
];

export default function ContactPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Get In Touch
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          We're here to help. Whether you have a question about our services or want to discuss your IT needs, our team is ready to assist you.
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
                                <a href={href} className="text-muted-foreground hover:text-primary transition-colors">
                                    {value}
                                </a>
                            ) : (
                                <p className="text-muted-foreground">{value}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Send us a Message</CardTitle>
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
