import React, { useEffect } from "react";
import { HeartHandshake, ArrowUpRight, MapPin } from "lucide-react";
import styles from "./OurPartners.module.css";

interface OurPartnersPageProps {
  Header: React.ComponentType;
  Footer: React.ComponentType;
}

const JUD_URL = "https://judllc.com";
const PSP_URL = "https://printersourceplus.com/";

const judServices = [
  "Monitored intrusion alarms",
  "Access control",
  "Surveillance cameras",
  "Managed wired and wireless networks",
  "Structured cabling and voice/data",
  "Audio/video and intercoms",
  "Door hardware and locksmith services",
  "System integration",
];

export function OurPartnersPage({ Header, Footer }: OurPartnersPageProps) {
  useEffect(() => {
    const originalTitle = document.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute("content") : null;
    document.title = "Our Partners | QPCTech";
    if (metaDesc) {
      metaDesc.setAttribute("content", "Meet QPCTech's partners: Jud LLC for security and low-voltage systems, and Printer Source Plus for office equipment and managed print services.");
    }
    return () => {
      document.title = originalTitle;
      if (metaDesc && originalDesc) metaDesc.setAttribute("content", originalDesc);
    };
  }, []);

  return (
    <div className={styles.pageContainer}>
      <Header />

      <section className={styles.hero}>
        <div className={styles.heroDots} />
        <div className={styles.container}>
          <div className={styles.crumbs}>
            <a href="/">Home</a>
            <span className={styles.sep}>›</span>
            <span className={styles.current}>Our Partners</span>
          </div>
          <div className={styles.label}>
            <HeartHandshake size={22} color="#37b5e6" />
            <span>Trusted Partners</span>
          </div>
          <h1 className={styles.title}>Our Partners</h1>
          <p className={styles.subtitle}>
            Some projects need more than IT. We work alongside trusted local specialists so your technology and your building are covered.
          </p>
        </div>
      </section>

      <section className={styles.partnerSection}>
        <div className={styles.container}>
          <article className={styles.partnerCard} data-testid="card-partner-jud">
            <a
              href={JUD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.thumbLink}
              data-testid="link-jud-thumbnail"
            >
              <img
                src="/jud-website.png"
                alt="Jud LLC website homepage screenshot"
                className={styles.thumb}
                loading="lazy"
              />
            </a>

            <div className={styles.partnerBody}>
              <p className={styles.eyebrow}>Security &amp; Low-Voltage Partner</p>
              <div className={styles.partnerIdentity}>
                <h2 className={styles.partnerName}>Jud LLC</h2>
                <img src="/jud-partner-logo.png" alt="Jud LLC logo" className={styles.partnerLogo} loading="lazy" />
              </div>
              <p className={styles.location}><MapPin size={14} color="#7FC343" /> Jackson, Michigan</p>
              <p className={styles.paragraph}>
                Jud LLC is an owner-operated company serving homes, businesses, and industrial customers in Jackson and surrounding counties. They design, install, and service monitored intrusion alarms, access control, surveillance cameras, and managed wired and wireless networks.
              </p>
              <p className={styles.paragraph}>
                Their security and low-voltage work, including structured cabling, voice/data, audio/video, intercoms, and door hardware, complements QPCTech's computer, network, and managed IT services. Together we can help cover both the physical systems in your building and the technology your team uses every day.
              </p>
              <ul className={styles.serviceList}>
                {judServices.map(s => <li key={s}>{s}</li>)}
              </ul>
              <a
                href={JUD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.visitBtn}
                data-testid="link-visit-jud"
              >
                Visit Jud LLC <ArrowUpRight size={16} />
              </a>
            </div>
          </article>
          <article className={styles.partnerCard} data-testid="card-partner-printer-source-plus">
            <a
              href={PSP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.thumbLink}
            >
              <img
                src="/printer-source-plus-website.png"
                alt="Printer Source Plus website homepage screenshot"
                className={styles.thumb}
                loading="lazy"
              />
            </a>
            <div className={styles.partnerBody}>
              <p className={styles.eyebrow}>Printing &amp; Office Solutions Partner</p>
              <div className={styles.partnerIdentity}>
                <h2 className={styles.partnerName}>Printer Source Plus</h2>
                <img src="/psp-partner-logo.png" alt="Printer Source Plus logo" className={styles.partnerLogo} loading="lazy" />
              </div>
              <p className={styles.location}><MapPin size={14} color="#7FC343" /> Jackson, Michigan · Serving Michigan</p>
              <p className={styles.paragraph}>
                Printer Source Plus, also known as PSP Office Solutions, is a locally owned company headquartered in Jackson with service locations in Albion and Hillsdale. They help businesses, schools, and organizations across Michigan with printers, copiers, office equipment, ink and toner, and managed print services—from a single office printer to a fleet of devices.
              </p>
              <p className={styles.paragraph}>
                Their printing expertise complements QPCTech's computer, network, and managed IT services. Through our partnership, we help connect customers with printing solutions that fit their needs, including Epson equipment and ongoing print support, so their office technology works together.
              </p>
              <ul className={styles.serviceList}>
                {["Printers and copiers", "Managed print services", "Ink and toner", "Office equipment", "Epson printing solutions", "Multi-brand service and support"].map(s => <li key={s}>{s}</li>)}
              </ul>
              <a href={PSP_URL} target="_blank" rel="noopener noreferrer" className={styles.visitBtn}>
                Visit Printer Source Plus <ArrowUpRight size={16} />
              </a>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
}
