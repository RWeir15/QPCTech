import { Wrench, Laptop, Monitor, Printer, KeyRound, Cpu, Bug, Tv2, Phone, Mail } from "lucide-react";

const TEAL = "#2dd4bf";

const services = [
  { Icon: Wrench, title: "Computer Repair", desc: "Desktop and laptop PC repair. We do not repair phones or tablets." },
  { Icon: Laptop, title: "Computer Sales", desc: "Refurbished computers held to our strict quality standards." },
  { Icon: Monitor, title: "Windows OS Upgrade", desc: "Keep your OS current — patch security vulnerabilities before they're exploited." },
  { Icon: Printer, title: "Printer Sales", desc: "Quality EPSON printers via our Printer Source Plus partnership." },
  { Icon: KeyRound, title: "Password Reset", desc: "Locked out? We have the tools to get you back in." },
  { Icon: Cpu, title: "Hardware Upgrades", desc: "Hands-on installation of RAM, storage, GPUs, and more." },
  { Icon: Bug, title: "Virus Removal", desc: "Deep scans and full remediation of malware and persistent threats." },
  { Icon: Tv2, title: "Custom PC Builds", desc: "Gaming rigs and workstation builds engineered to your exact specs." },
];

const footerLinks = ["Network Infrastructure", "Cybersecurity", "Managed IT Systems", "Phone Systems", "Remote Support", "Physical Security"];

export function BoldDark() {
  return (
    <div style={{ fontFamily: "'Roboto', sans-serif", background: "#0a0a0a", color: "#e5e7eb", overflowX: "hidden", minHeight: "100vh" }}>

      {/* HEADER */}
      <header style={{
        background: "#0a0a0a",
        borderBottom: "1px solid #1f1f1f",
        padding: "0 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 76,
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}>
        <img src="https://www.qpctech.com/wp-content/uploads/2024/03/cropped-QPCTech-logo.png" alt="QPCTech" style={{ height: 50 }} />
        <nav style={{ display: "flex", gap: 36, alignItems: "center" }}>
          {["Home", "Services", "Who we Are", "Contact"].map(n => (
            <a key={n} href="#" style={{ color: "#9ca3af", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>{n}</a>
          ))}
          <a href="https://qpctech.rmmservices.net/connect/#/9951961931" target="_blank" rel="noreferrer"
            style={{ border: `2px solid ${TEAL}`, color: TEAL, padding: "8px 24px", borderRadius: 4, fontSize: 14, fontWeight: 700, textDecoration: "none" }}>
            REMOTE SUPPORT
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section style={{ padding: "96px 48px 80px", borderBottom: "1px solid #222" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: TEAL, marginBottom: 20 }}>
            ── HILLSDALE, MICHIGAN
          </div>
          <h1 style={{ fontSize: 72, fontWeight: 900, lineHeight: 1, margin: "0 0 24px", letterSpacing: "-0.03em", maxWidth: 700 }}>
            IT SERVICES
            <br />
            <span style={{ color: TEAL }}>DONE RIGHT.</span>
          </h1>
          <p style={{ color: "#6b7280", fontSize: 17, maxWidth: 500, lineHeight: 1.7, margin: "0 0 40px" }}>
            Walk-in repairs, managed IT, cybersecurity, and custom builds — all under one roof in southern Michigan.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            <a href="#" style={{ background: TEAL, color: "#000", padding: "14px 32px", borderRadius: 4, fontWeight: 800, fontSize: 14, textDecoration: "none", letterSpacing: "0.05em" }}>
              OUR SERVICES
            </a>
            <a href="tel:5176105372" style={{ background: "transparent", color: "#e5e7eb", padding: "14px 32px", borderRadius: 4, fontWeight: 600, fontSize: 14, textDecoration: "none", border: "1px solid #333" }}>
              CALL (517) 610-5372
            </a>
          </div>
        </div>
      </section>

      {/* IN STORE SERVICES */}
      <section style={{ padding: "80px 48px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
            <h2 style={{ color: "white", fontSize: 34, fontWeight: 900, margin: 0, letterSpacing: "-0.02em" }}>IN STORE SERVICES</h2>
            <div style={{ height: 2, flex: 1, background: "linear-gradient(to right, #333, transparent)" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }}>
            {services.map((s, i) => (
              <div key={i} style={{
                background: "#141414",
                padding: "28px 20px",
                border: "1px solid #222",
                position: "relative" as const,
                overflow: "hidden",
              }}>
                <div style={{ position: "absolute" as const, top: 0, left: 0, width: 3, height: "100%", background: TEAL }} />
                <s.Icon size={28} color={TEAL} style={{ marginBottom: 14, display: "block" }} />
                <h3 style={{ color: "white", fontSize: 15, fontWeight: 700, margin: "0 0 10px", lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section style={{ padding: "0 48px 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", border: "1px solid #222", borderRadius: 8, padding: "36px 40px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <p style={{ color: "white", fontSize: 22, fontWeight: 800, margin: "0 0 6px" }}>Need business IT management?</p>
            <p style={{ color: "#6b7280", fontSize: 14, margin: 0 }}>We offer full managed IT packages for southern Michigan companies.</p>
          </div>
          <a href="#" style={{ background: TEAL, color: "#000", padding: "14px 28px", borderRadius: 4, fontWeight: 800, fontSize: 14, textDecoration: "none", whiteSpace: "nowrap" as const, letterSpacing: "0.04em", flexShrink: 0, marginLeft: 24 }}>
            VIEW PLANS →
          </a>
        </div>
      </section>

      {/* MAP */}
      <section style={{ padding: "0 48px 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ color: "white", fontSize: 22, fontWeight: 800, margin: "0 0 20px", letterSpacing: "-0.01em" }}>WHERE WE ARE LOCATED</h2>
          <div style={{ border: "1px solid #222", borderRadius: 8, overflow: "hidden", height: 380 }}>
            <iframe loading="lazy" src="https://maps.google.com/maps?q=QPCTech&t=m&z=16&output=embed&iwloc=near"
              title="QPCTech" style={{ width: "100%", height: "100%", border: "none" }} />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #1a1a1a", padding: "48px 48px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40, paddingBottom: 40 }}>
          <div>
            <img src="https://www.qpctech.com/wp-content/uploads/2024/03/cropped-QPCTech-logo.png" alt="QPCTech" style={{ height: 42, marginBottom: 16 }} />
            <p style={{ color: "#4b5563", fontSize: 13, lineHeight: 1.7, margin: 0 }}>Local IT. Real results. Hillsdale, Michigan.</p>
          </div>
          <div>
            <p style={{ color: "#6b7280", fontWeight: 700, fontSize: 11, textTransform: "uppercase" as const, letterSpacing: "0.1em", marginTop: 0, marginBottom: 16 }}>Services</p>
            {footerLinks.map(l => (
              <a key={l} href="#" style={{ display: "block", color: "#4b5563", textDecoration: "none", fontSize: 14, marginBottom: 8 }}>{l}</a>
            ))}
          </div>
          <div>
            <p style={{ color: "#6b7280", fontWeight: 700, fontSize: 11, textTransform: "uppercase" as const, letterSpacing: "0.1em", marginTop: 0, marginBottom: 16 }}>Get In Touch</p>
            <a href="tel:5176105372" style={{ display: "flex", gap: 10, alignItems: "center", color: "#4b5563", textDecoration: "none", fontSize: 14, marginBottom: 10 }}>
              <Phone size={14} color={TEAL} />
              (517) 610-5372
            </a>
            <a href="mailto:support@qpctech.com" style={{ display: "flex", gap: 10, alignItems: "center", color: "#4b5563", textDecoration: "none", fontSize: 14 }}>
              <Mail size={14} color={TEAL} />
              support@qpctech.com
            </a>
          </div>
        </div>
        <div style={{ borderTop: "1px solid #1a1a1a", padding: "14px 0", textAlign: "center" as const }}>
          <p style={{ color: "#374151", fontSize: 13, margin: 0 }}>Copyright © 2026 QPCTech</p>
        </div>
      </footer>
    </div>
  );
}
