import React, { useEffect } from "react";
import { Shield, ShieldAlert, Cpu, MonitorPlay, Crosshair, HelpCircle, HardDrive, Network, CheckCircle, ChevronRight, Zap } from "lucide-react";
import styles from "./QBits.module.css";

// Constants matching existing brand
const TEAL = "#37b5e6";
const TEAL2 = "#0ea5e9";
const DARK = "#0f172a";
const GREEN = "#7FC343";

interface QBitsPageProps {
  Header: React.ComponentType;
  Footer: React.ComponentType;
  PageHero: React.ComponentType<any>;
  ContactBox: React.ComponentType<any>;
}

export function QBitsPage({ Header, Footer, PageHero, ContactBox }: QBitsPageProps) {
  useEffect(() => {
    const originalTitle = document.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute("content") : null;

    document.title = "Q-BITS Managed IT Bundle | QPCTech";
    if (metaDesc) {
      metaDesc.setAttribute("content", "Discover Q-BITS by QPCTech: Our all-in-one managed IT bundle featuring NinjaOne monitoring, Huntress Managed EDR, and trusted local support in Hillsdale, MI.");
    }

    return () => {
      document.title = originalTitle;
      if (metaDesc && originalDesc) {
        metaDesc.setAttribute("content", originalDesc);
      }
    };
  }, []);

  return (
    <div className={styles.pageContainer}>
      <Header />
      
      <PageHero 
        breadcrumb="Q-BITS"
        label="MANAGED IT BUNDLE"
        icon={Shield}
        title="Meet Q-BITS."
        subtitle="Our flagship IT management bundle. We combine NinjaOne's remote monitoring with Huntress's 24/7 Managed EDR to keep your business running securely—all backed by our approachable local support."
      />

      {/* Main Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <div className={styles.introContent}>
              <div className={styles.badge}>
                <div className={styles.badgeDot} />
                <span>What is Q-BITS?</span>
              </div>
              <h2 className={styles.heading}>The Ultimate Foundation for Your Endpoints.</h2>
              <p className={styles.paragraph}>
                Managing IT for a local business shouldn't mean piecing together software from a dozen vendors. <strong>Q-BITS</strong> is our curated bundle designed to give you exactly what you need: robust health monitoring, seamless patching, and enterprise-grade security.
              </p>
              <p className={styles.paragraph}>
                We partner with industry leaders to provide the technology, while our Hillsdale team provides the local, approachable support you know and trust. We handle the heavy lifting behind the scenes so you can focus on your business.
              </p>
            </div>
            
            <div className={styles.contactWrapper}>
              <ContactBox 
                headline="Ready to secure your business?"
                body="Call our local Hillsdale office to see if Q-BITS is the right fit for your endpoints."
              />
            </div>
          </div>
        </div>
      </section>

      {/* NinjaOne Section */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <div className={styles.vendorHeader}>
            <Cpu size={32} color={TEAL} className={styles.vendorIcon} />
            <div>
              <h3 className={styles.vendorTitle}>Endpoint Management via NinjaOne</h3>
              <a href="https://www.ninjaone.com/endpoint-management/" target="_blank" rel="noreferrer" className={styles.vendorLink}>
                Learn more about NinjaOne's capabilities <ChevronRight size={14} />
              </a>
            </div>
          </div>
          
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <MonitorPlay size={24} color={TEAL} />
              <h4>Health Monitoring</h4>
              <p>We keep a pulse on your hardware health, spotting failing drives or maxed-out memory before they bring your workflow to a halt.</p>
            </div>
            <div className={styles.featureCard}>
              <Zap size={24} color={TEAL} />
              <h4>Patching & Updates</h4>
              <p>Your operating systems and third-party software are kept up-to-date automatically, closing vulnerabilities and improving performance.</p>
            </div>
            <div className={styles.featureCard}>
              <HardDrive size={24} color={TEAL} />
              <h4>Inventory & Asset Tracking</h4>
              <p>We maintain an accurate inventory of your deployed devices so you always know what hardware you have and when it's time to refresh.</p>
            </div>
            <div className={styles.featureCard}>
              <Network size={24} color={TEAL} />
              <h4>Remote Access Support</h4>
              <p>When you have a problem, we can securely remote in to troubleshoot and resolve issues quickly without waiting for an on-site visit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Huntress Section */}
      <section className={styles.featureSectionAlternate}>
        <div className={styles.container}>
          <div className={styles.vendorHeader}>
            <ShieldAlert size={32} color={GREEN} className={styles.vendorIconGreen} />
            <div>
              <h3 className={styles.vendorTitle}>Managed EDR via Huntress</h3>
              <a href="https://www.huntress.com/platform/managed-edr" target="_blank" rel="noreferrer" className={styles.vendorLink}>
                Learn more about Huntress's platform <ChevronRight size={14} />
              </a>
            </div>
          </div>
          
          <div className={styles.featureGrid}>
            <div className={styles.featureCardAlt}>
              <Crosshair size={24} color={GREEN} />
              <h4>Endpoint Detection & Response</h4>
              <p>Going beyond traditional antivirus, EDR hunts for active threats and suspicious behavior that might slip past basic defenses.</p>
            </div>
            <div className={styles.featureCardAlt}>
              <Network size={24} color={GREEN} />
              <h4>24/7 Security Operations Center</h4>
              <p>Huntress's dedicated human threat hunters monitor alerts around the clock, investigating anomalies while you sleep.</p>
            </div>
            <div className={styles.featureCardAlt}>
              <Shield size={24} color={GREEN} />
              <h4>Rapid Threat Isolation</h4>
              <p>When a threat is confirmed, supported endpoints can be isolated from the network to help limit its spread while the incident is investigated.</p>
            </div>
            <div className={styles.featureCardAlt}>
              <CheckCircle size={24} color={GREEN} />
              <h4>Actionable Remediation</h4>
              <p>Instead of just sending alerts, Huntress helps investigate threats and provides actionable remediation guidance so our team can coordinate a response.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Support Section */}
      <section className={styles.localSupportSection}>
        <div className={styles.container}>
          <div className={styles.localSupportBox}>
            <h2 className={styles.localSupportTitle}>Global Tech. Local Touch.</h2>
            <p className={styles.localSupportDesc}>
              NinjaOne and Huntress provide the heavy-duty infrastructure, but software alone doesn't fix everything. That's where QPCTech comes in. We manage the tools, interpret the alerts, approve the patches, and provide the friendly, local face you can actually talk to when something goes wrong. No infinite phone trees—just our Hillsdale team keeping your business moving.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.faqHeader}>
            <HelpCircle size={28} color={TEAL} />
            <h2 className={styles.heading}>Frequently Asked Questions</h2>
          </div>
          
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h4>Do you provide 24/7 helpdesk support?</h4>
              <p>Huntress provides around-the-clock security monitoring. That is separate from QPCTech helpdesk availability. Contact us to confirm support hours, response arrangements, and the services included in your Q-BITS agreement.</p>
            </div>
            <div className={styles.faqItem}>
              <h4>Why not just use standard Windows Defender?</h4>
              <p>Modern antivirus, including Microsoft Defender, already uses multiple detection methods. Huntress Managed EDR adds security monitoring, investigation, and response expertise to help identify suspicious behavior and guide action when threats are found.</p>
            </div>
            <div className={styles.faqItem}>
              <h4>Will the remote access tool slow down my computer?</h4>
              <p>NinjaOne supports background monitoring and remote troubleshooting. Performance can vary by device and maintenance task; we can discuss update scheduling and your team's working hours when setting up your service.</p>
            </div>
            <div className={styles.faqItem}>
              <h4>Can I buy Q-BITS for my home computer?</h4>
              <p>Q-BITS is primarily designed for businesses that need centralized management and enterprise-grade security across multiple endpoints. However, we're happy to discuss your specific needs if you have a demanding home office setup.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
