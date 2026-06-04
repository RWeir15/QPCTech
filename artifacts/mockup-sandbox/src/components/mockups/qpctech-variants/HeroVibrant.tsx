import { Wrench, Laptop, Monitor, Printer, KeyRound, Cpu, Bug, Tv2, ChevronDown, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const TEAL = "#37b5e6";

const services = [
  { icon: Wrench, title: "Computer Repair", desc: "We repair desktop and laptop PCs. We do not repair phones or tablets." },
  { icon: Laptop, title: "Computer Sales", desc: "We purchase and refurbish computers and ensure they meet our quality standards." },
  { icon: Monitor, title: "Windows OS Upgrade", desc: "Operating Systems need to stay up-to-date to ensure security vulnerabilities get patched." },
  { icon: Printer, title: "Printer Sales", desc: "We've partnered with Printer Source Plus and sell quality EPSON printers.", link: "https://printersourceplus.com/" },
  { icon: KeyRound, title: "Password Reset", desc: "Forgot your computer login password? We have the tools to reset it." },
  { icon: Cpu, title: "Hardware Installation", desc: "Let our professional technicians handle computer part installation and upgrades." },
  { icon: Bug, title: "Virus Removal", desc: "We can detect and remove footholds created by viruses, keeping your system safe." },
  { icon: Tv2, title: "Custom PC Builds", desc: "We build custom computers for gaming or specialized workloads. Contact us to plan a new build!" },
];

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "10+", label: "Years Experience" },
  { value: "24hr", label: "Avg. Turnaround" },
  { value: "100%", label: "Local Business" },
];

export function HeroVibrant() {
  return (
    <div style={{ fontFamily: "'Roboto', sans-serif", color: "#1a1a1a", overflowX: "hidden" }}>

      {/* ── HEADER ── */}
      <header style={{ background: "#111827", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 80, position: "sticky", top: 0, zIndex: 50, boxShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>
        <img src="https://www.qpctech.com/wp-content/uploads/2024/03/cropped-QPCTech-logo.png" alt="QPCTech" style={{ height: 56 }} />
        <nav style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {["Home", "Services ▾", "Who we Are", "Contact Us"].map(n => (
            <a key={n} href="#" style={{ color: "#e5e7eb", textDecoration: "none", fontSize: 14, fontWeight: 500, letterSpacing: "0.02em" }}>{n}</a>
          ))}
          <a href="https://qpctech.rmmservices.net/connect/#/9951961931" target="_blank" rel="noreferrer"
            style={{ background: TEAL, color: "white", padding: "9px 22px", borderRadius: 6, fontSize: 14, fontWeight: 600, textDecoration: "none", letterSpacing: "0.03em" }}>
            Remote Support
          </a>
        </nav>
      </header>

      {/* ── HERO ── */}
      <section style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0c4a6e 100%)",
        padding: "100px 40px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* decorative teal circle */}
        <div style={{ position: "absolute", right: -120, top: -120, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(55,181,230,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", left: -80, bottom: -80, width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(55,181,230,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "inline-block", background: "rgba(55,181,230,0.15)", border: `1px solid ${TEAL}40`, borderRadius: 20, padding: "6px 16px", marginBottom: 24 }}>
            <span style={{ color: TEAL, fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Southern Michigan's IT Experts</span>
          </div>
          <h1 style={{ color: "white", fontSize: 56, fontWeight: 800, lineHeight: 1.1, margin: "0 0 24px", maxWidth: 700 }}>
            Technology That <span style={{ color: TEAL }}>Just Works.</span>
          </h1>
          <p style={{ color: "#94a3b8", fontSize: 18, lineHeight: 1.7, maxWidth: 560, margin: "0 0 40px" }}>
            From computer repair to full managed IT services — QPCTech keeps Hillsdale businesses running smoothly, securely, and efficiently.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#" style={{ background: TEAL, color: "white", padding: "14px 32px", borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
              View All Services <ArrowRight size={16} />
            </a>
            <a href="#" style={{ background: "transparent", color: "white", padding: "14px 32px", borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: "none", border: "2px solid rgba(255,255,255,0.25)" }}>
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{ background: TEAL, padding: "28px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", textAlign: "center" }}>
          {stats.map(s => (
            <div key={s.value}>
              <div style={{ color: "white", fontSize: 32, fontWeight: 800, lineHeight: 1 }}>{s.value}</div>
              <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, marginTop: 4, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── IN STORE SERVICES ── */}
      <section style={{ background: "#f8fafc", padding: "80px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <p style={{ color: TEAL, fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 10px" }}>Walk-In Welcome</p>
            <h2 style={{ color: "#0f172a", fontSize: 36, fontWeight: 800, margin: 0 }}>In Store Services</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} style={{
                  background: "white", borderRadius: 12, padding: "28px 20px",
                  border: "1px solid #e2e8f0", textAlign: "center",
                  transition: "all 0.2s",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  borderTop: `3px solid ${TEAL}`,
                }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: "50%",
                    background: `${TEAL}15`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 16px",
                  }}>
                    <Icon size={24} color={TEAL} />
                  </div>
                  <h3 style={{ color: "#0f172a", fontSize: 15, fontWeight: 700, margin: "0 0 10px" }}>{s.title}</h3>
                  <p style={{ color: "#64748b", fontSize: 13, lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section style={{ background: "#111827", padding: "60px 40px", textAlign: "center" }}>
        <h2 style={{ color: "white", fontSize: 30, fontWeight: 800, margin: "0 0 12px" }}>Need IT support for your business?</h2>
        <p style={{ color: "#94a3b8", fontSize: 16, margin: "0 0 28px" }}>Call us at <a href="tel:5176105372" style={{ color: TEAL, textDecoration: "none", fontWeight: 700 }}>(517) 610-5372</a> or stop by our Hillsdale office.</p>
        <a href="#" style={{ background: TEAL, color: "white", padding: "14px 36px", borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: "none", display: "inline-block" }}>Get In Touch</a>
      </section>

      {/* ── MAP ── */}
      <section style={{ padding: "80px 40px", background: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ color: "#0f172a", fontSize: 28, fontWeight: 800, margin: "0 0 28px" }}>
            <MapPin size={22} color={TEAL} style={{ marginRight: 8, verticalAlign: "middle" }} />
            Where We Are Located
          </h2>
          <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.1)", height: 400 }}>
            <iframe loading="lazy" src="https://maps.google.com/maps?q=QPCTech&t=m&z=16&output=embed&iwloc=near"
              title="QPCTech" style={{ width: "100%", height: "100%", border: 0 }} />
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#0f172a", color: "#94a3b8", padding: "48px 40px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40, paddingBottom: 48 }}>
          <div>
            <img src="https://www.qpctech.com/wp-content/uploads/2024/03/cropped-QPCTech-logo.png" alt="QPCTech" style={{ height: 48, marginBottom: 16 }} />
            <p style={{ fontSize: 14, lineHeight: 1.7, margin: 0 }}>Reliable managed IT services for southern Michigan businesses.</p>
          </div>
          <div>
            <p style={{ color: "white", fontWeight: 700, fontSize: 14, marginTop: 0, marginBottom: 16 }}>Services</p>
            {["Network Infrastructure", "Cybersecurity", "Managed IT Systems", "Phone Systems", "Remote Support"].map(l => (
              <a key={l} href="#" style={{ display: "block", color: "#94a3b8", textDecoration: "none", fontSize: 14, marginBottom: 8 }}>{l}</a>
            ))}
          </div>
          <div>
            <p style={{ color: "white", fontWeight: 700, fontSize: 14, marginTop: 0, marginBottom: 16 }}>Contact</p>
            <p style={{ fontSize: 14, marginBottom: 8 }}>37 Waldron St, Hillsdale, MI 49242</p>
            <a href="tel:5176105372" style={{ display: "flex", alignItems: "center", gap: 8, color: "#94a3b8", textDecoration: "none", fontSize: 14, marginBottom: 8 }}><Phone size={14} />(517) 610-5372</a>
            <a href="mailto:support@qpctech.com" style={{ display: "flex", alignItems: "center", gap: 8, color: "#94a3b8", textDecoration: "none", fontSize: 14 }}><Mail size={14} />support@qpctech.com</a>
          </div>
        </div>
        <div style={{ borderTop: "1px solid #1e293b", padding: "16px 0", textAlign: "center" }}>
          <p style={{ color: "#475569", fontSize: 13, margin: 0 }}>Copyright © 2026 QPCTech</p>
        </div>
      </footer>
    </div>
  );
}
