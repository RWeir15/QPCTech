import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Responsibility: Antivirus vs. EDR - QPCTech",
  description: "Understand the key differences between Antivirus and Endpoint Detection and Response (EDR) to protect your digital environment from evolving cyber threats.",
};

export default function AntivirusVsEdrPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl text-primary">
            Responsibility: Antivirus vs. EDR
          </h1>
        </header>

        <div className="relative aspect-video w-full overflow-hidden rounded-xl mb-8">
          <Image
            src="https://www.qpctech.com/wp-content/uploads/2024/12/Diagrams_Managed-EDR-Dark.webp"
            alt="Diagram of Antivirus vs EDR"
            fill
            className="object-cover"
          />
        </div>

        <div className="text-black space-y-8">
          <p className="text-lg">
            In the ever-evolving world of cybersecurity, businesses and individuals face numerous threats targeting their digital assets. Two common solutions often discussed are <strong>Antivirus (AV)</strong> and <strong>Endpoint Detection and Response (EDR)</strong>. While both serve critical roles in securing endpoints, understanding their responsibilities and distinctions is key to selecting the right protection for your needs.
          </p>

          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-3xl text-primary">What is Antivirus (AV)?</CardTitle>
            </CardHeader>
            <CardContent className="text-black space-y-4">
              <p>Antivirus software is a foundational security tool designed to detect and remove known malware such as viruses, trojans, and worms. It works primarily by using:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Signature-Based Detection:</strong> Matching files and programs against a database of known malware signatures.</li>
                <li><strong>Heuristic Analysis:</strong> Identifying suspicious behaviors or patterns that may indicate malware.</li>
                <li><strong>Scheduled Scans:</strong> Regularly checking files and systems for potential threats.</li>
              </ul>
              <p>AV focuses on prevention, aiming to block malware before it can execute. However, traditional antivirus has limitations when it comes to addressing sophisticated attacks like zero-day exploits or advanced persistent threats (APTs).</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-3xl text-primary">What is EDR?</CardTitle>
            </CardHeader>
            <CardContent className="text-black space-y-4">
              <p>Endpoint Detection and Response expands on traditional antivirus by adding advanced detection, analysis, and response capabilities. Key features include:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Real-Time Threat Detection:</strong> Constantly monitoring endpoint activity to identify anomalies.</li>
                <li><strong>Behavioral Analysis:</strong> Using machine learning and AI to detect patterns associated with emerging threats.</li>
                <li><strong>Threat Containment and Response:</strong> Isolating compromised devices and providing tools for investigating and mitigating attacks.</li>
                <li><strong>Incident Visibility:</strong> Offering detailed logs and forensic data to understand the scope and impact of threats.</li>
              </ul>
              <p>EDR not only focuses on prevention but also provides the means to detect, respond to, and recover from attacks that bypass initial defenses.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-3xl text-primary">Key Differences Between Antivirus and EDR</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold text-lg text-black">Aspect</TableHead>
                    <TableHead className="font-bold text-lg text-black">Antivirus</TableHead>
                    <TableHead className="font-bold text-lg text-black">EDR</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="text-black">
                  <TableRow>
                    <TableCell className="font-semibold">Focus</TableCell>
                    <TableCell>Prevention of known threats</TableCell>
                    <TableCell>Detection, response, and prevention</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Threat Types</TableCell>
                    <TableCell>Known malware</TableCell>
                    <TableCell>Known and unknown (e.g., zero-day vulnerabilities)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Detection Method</TableCell>
                    <TableCell>Signature and heuristic based</TableCell>
                    <TableCell>Behavioral and AI-driven</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Response Capabilities</TableCell>
                    <TableCell>Limited (quarantine, delete)</TableCell>
                    <TableCell>Comprehensive (containment, investigation)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Visibility</TableCell>
                    <TableCell>Minimal</TableCell>
                    <TableCell>Extensive endpoint visibility</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-3xl text-primary">Which Should You Choose?</CardTitle>
            </CardHeader>
            <CardContent className="text-black space-y-4">
              <p>The choice between antivirus and EDR depends on the specific needs and resources of your organization:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>For Basic Protection:</strong> Antivirus remains a cost-effective option for small businesses and individuals primarily concerned with known malware.</li>
                <li><strong>For Advanced Threats:</strong> EDR is better suited for organizations needing robust defense against sophisticated attacks, particularly those operating in high-risk industries or managing sensitive data.</li>
              </ul>
              <p>In many cases, combining both solutions within a layered security strategy ensures optimal protection. For example, antivirus can serve as the first line of defense, while EDR provides advanced capabilities for detection and response.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-3xl text-primary">Final Thoughts</CardTitle>
            </CardHeader>
            <CardContent className="text-black space-y-4">
              <p>Cyber threats continue to grow in complexity, making it essential to understand the responsibilities of antivirus and EDR solutions. By assessing your organization’s risk level and security requirements, you can make an informed decision to safeguard your digital environment effectively.</p>
              <p>If you’re unsure which solution fits your needs, consult with a trusted managed service provider (MSP) for guidance tailored to your unique situation.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
