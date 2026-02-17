import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Managed IT Systems - QPCTech",
  description: "We can optimize and manage your IT systems with tailored solutions for businesses of all sizes.",
};

const applications = [
    "AutoDesk AutoCAD", "BlackMagic", "BrighTreea", "CamWorks", "CompuLink",
    "GageTrack", "Hypertherm ProNest", "Infor Visual Manufacturing", "JobBoss",
    "MS SQL Server", "MS Teams", "MS Windows BitLocker", "Peachtree Accounting",
    "Polygon Systems Octagon", "QuickBooks", "Sage Accounting", "SharePoint",
    "SolidWorks", "SongShowPlus", "Stream Yard", "Synology",
    "Thompson Reuters", "WINrx", "Zoom"
];

export default function ManagedITSystemsPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold text-primary">Managed IT Systems</h1>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">

          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-3xl text-primary">Approach to IT Systems</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-black">
              <div>
                <h3 className="font-semibold text-lg text-primary mb-2">Hardware</h3>
                <p>QPC technicians have more than 60 years of combined experience across all areas of IT. We have one axiom that guides our approach. “High-value IT Service Delivery begins with careful IT Service Design.” Our customers get the most value from our services when they spend time being proactive, not reactive.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-primary mb-2">Platform</h3>
                <p>QPCTech can manage your Server platform whether it is a physical server, virtualized server, or a cloud-hosted virtual server. We can keep your servers healthy delivering business value reliably and effectively.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-primary mb-2">Applications</h3>
                <p>QPCTech supports a large and growing catalog of business applications. Here are a few that we work with regularly:</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">Supported Applications</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="columns-2 sm:columns-3 md:columns-4 gap-x-6 gap-y-2 text-black list-disc list-outside pl-4">
                    {applications.map(app => <li key={app} className="text-sm break-inside-avoid">{app}</li>)}
                </ul>
            </CardContent>
          </Card>

           <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">Backups</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-black">
              <p>At QPCTech, we design automated and monitored backups for our clients both onsite and cloud. Small businesses without a server still need to back up their PCs. OneDrive and Google Drive are often good choices, but implementation can be troublesome across multiple users and systems. Still, other customers prefer to stay out of the cloud as much as possible. For them, we can provide a Network Attached Storage (NAS). Synology makes some of our favorite NAS products along with a complement of user profile file replication products (similar to Dropbox or OneDrive). These Synology applications run “internally” on the customer’s hardware and their terms!</p>
              <p>When it comes to managing these IT assets you can depend on QPCTech’s experience and knowledge of these vendors to help you stay on top of licensing, software updates patch management, and more.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">Q-BITS</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-black mb-6">Q-BITS is our IT management package which comes with NinjaOne for patching and remote support and Huntress for antivirus. $10 per device per month with an annual commitment.</p>
                <div className="grid sm:grid-cols-2 gap-6 text-black">
                    <div>
                        <h4 className="font-semibold text-lg text-primary mb-2">NinjaOne:</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Provides end point management</li>
                            <li>Remote support</li>
                            <li>Patching</li>
                            <li>Scripting</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg text-primary mb-2">Huntress</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Monitored Anti-Virus solution</li>
                            <li>Provides real time protection</li>
                            <li>Prevents ransomware</li>
                            <li>Stops scammers</li>
                        </ul>
                    </div>
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
                {["Hardware", "Platform", "Applications", "Backups", "(NAS) Devices", "Licensing & Software Updates"].map(item => (
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
  );
}
