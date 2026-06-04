import { Wrench, Laptop, Monitor, Printer, KeyRound, Cpu, Bug, Tv2, Phone, Mail, MapPin, Shield, Clock, Star, ArrowRight, ArrowUpRight } from "lucide-react";

const TEAL = "#37b5e6";
const TEAL_DARK = "#0ea5e9";

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

const trust = [
  { icon: Shield, label: "Trusted & Local", sub: "Serving Hillsdale since 2014" },
  { icon: Clock, label: "Fast Turnaround", sub: "Most repairs done same-day" },
  { icon: Star, label: "5-Star Rated", sub: "Loved by 500+ customers" },
  { icon: Phone, label: "Always Reachable", sub: "(517) 610-5372" },
];

const navServices = ["Network Infrastructure", "Cybersecurity", "Managed IT Systems", "Phone Systems", "Remote Support", "Physical Security", "Printing & Scanning", "Community Work"];

export function HeroCleanMix() {
  return (
    <div style={{ fontFamily: "'Roboto', sans-serif", color: "#1e293b", overflowX: "hidden" }}>

      {/* ── HEADER (from HeroVibrant: dark, bold) ── */}
      <header style={{
        background: "#111827",
        padding: "0 40px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 80, position: "sticky", top: 0, zIndex: 50,
        boxShadow: "0 2px 20px rgba(0,0,0,0.4)",
      }}>
        <img src="https://www.qpctech.com/wp-content/uploads/2024/03/cropped-QPCTech-logo.png" alt="QPCTech" style={{ height: 56 }} />
        <nav style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {["Home", "Services ▾", "Who we Are", "Contact Us"].map(n => (
            <a key={n} href="#" style={{ color: "#e5e7eb", textDecoration: "none", fontSize: 14, fontWeight: 500, letterSpacing: "0.02em" }}>{n}</a>
          ))}
          <a href="https://qpctech.rmmservices.net/connect/#/9951961931" target="_blank" rel="noreferrer"
            style={{ background: TEAL, color: "white", padding: "9px 22px", borderRadius: 6, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
            Remote Support
          </a>
        </nav>
      </header>

      {/* ── ANNOUNCEMENT BAR (from ModernClean) ── */}
      <div style={{ background: `linear-gradient(to right, #0c4a6e, ${TEAL})`, padding: "10px 48px", display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
        <MapPin size={14} color="white" />
        <span style={{ color: "white", fontSize: 13, fontWeight: 500 }}>Walk-ins welcome at 37 Waldron St, Hillsdale, MI · Mon–Fri</span>
        <a href="#" style={{ color: "white", fontSize: 13, fontWeight: 700, textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
          Get Directions <ArrowUpRight size={12} />
        </a>
      </div>

      {/* ── HERO (ModernClean layout + HeroVibrant headline style) ── */}
      <section style={{
        background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 55%, #f0f9ff 100%)",
        padding: "80px 48px 72px",
        position: "relative", overflow: "hidden",
      }}>
        {/* decorative circles from HeroVibrant */}
        <div style={{ position: "absolute", right: -60, top: -80, width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(55,181,230,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", left: -60, bottom: -60, width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(55,181,230,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", position: "relative" }}>
          {/* Left: headline from HeroVibrant */}
          <div>
            <div style={{ display: "inline-block", background: "rgba(55,181,230,0.18)", border: `1px solid ${TEAL}50`, borderRadius: 20, padding: "6px 16px", marginBottom: 24 }}>
              <span style={{ color: TEAL, fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" as const }}>Southern Michigan's IT Experts</span>
            </div>
            <h1 style={{ color: "white", fontSize: 52, fontWeight: 800, lineHeight: 1.1, margin: "0 0 20px", letterSpacing: "-0.02em" }}>
              Technology That{" "}
              <span style={{ color: TEAL }}>Just Works.</span>
            </h1>
            <p style={{ color: "#94a3b8", fontSize: 17, lineHeight: 1.7, margin: "0 0 32px" }}>
              From computer repair to full managed IT services — QPCTech keeps Hillsdale businesses running smoothly, securely, and efficiently.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" as const }}>
              <a href="#" style={{ background: TEAL, color: "white", padding: "13px 30px", borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
                View All Services <ArrowRight size={16} />
              </a>
              <a href="tel:5176105372" style={{ background: "transparent", color: "white", padding: "13px 28px", borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: "none", border: "2px solid rgba(255,255,255,0.22)", display: "flex", alignItems: "center", gap: 8 }}>
                <Phone size={15} color={TEAL} /> Call Us Now
              </a>
            </div>
          </div>
          {/* Right: trust cards from ModernClean */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {trust.map((t, i) => {
              const Icon = t.icon;
              return (
                <div key={i} style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(8px)", borderRadius: 12, padding: "20px", border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 2px 12px rgba(0,0,0,0.2)" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: `${TEAL}25`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                    <Icon size={20} color={TEAL} />
                  </div>
                  <p style={{ color: "white", fontWeight: 700, fontSize: 14, margin: "0 0 4px" }}>{t.label}</p>
                  <p style={{ color: "#94a3b8", fontSize: 12, margin: 0 }}>{t.sub}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── STATS BAR (from HeroVibrant) ── */}
      <div style={{ background: TEAL, padding: "28px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", textAlign: "center" as const }}>
          {stats.map(s => (
            <div key={s.value}>
              <div style={{ color: "white", fontSize: 32, fontWeight: 800, lineHeight: 1 }}>{s.value}</div>
              <div style={{ color: "rgba(255,255,255,0.85)", fontSize: 13, marginTop: 4, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── IN STORE SERVICES (ModernClean cards on light bg) ── */}
      <section style={{ padding: "80px 48px", background: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ width: 40, height: 4, background: `linear-gradient(to right, #0c4a6e, ${TEAL})`, borderRadius: 2, marginBottom: 16 }} />
            <h2 style={{ color: "#0f172a", fontSize: 32, fontWeight: 800, margin: "0 0 10px", letterSpacing: "-0.02em" }}>In Store Services</h2>
            <p style={{ color: "#64748b", fontSize: 16, margin: 0 }}>Walk in and we'll take care of the rest — no appointment needed for most services.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} style={{
                  background: "#f8fafc", borderRadius: 12, padding: "24px",
                  border: "1px solid #e2e8f0", borderLeft: `4px solid ${TEAL}`,
                  display: "flex", flexDirection: "column" as const, gap: 12,
                }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: "white", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
                    <Icon size={20} color={TEAL} />
                  </div>
                  <h3 style={{ color: "#0f172a", fontSize: 14, fontWeight: 700, margin: 0, lineHeight: 1.3 }}>{s.title}</h3>
                  <p style={{ color: "#64748b", fontSize: 13, lineHeight: 1.6, margin: 0, flex: 1 }}>{s.desc}</p>
                  {s.link && <a href={s.link} style={{ color: TEAL, fontSize: 12, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>Visit site <ArrowUpRight size={11} /></a>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA CALLOUT (from ModernClean, using HeroVibrant dark palette) ── */}
      <section style={{ padding: "0 48px 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #0c4a6e 100%)", borderRadius: 16, padding: "48px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}>
          <div>
            <h2 style={{ color: "white", fontSize: 26, fontWeight: 800, margin: "0 0 8px" }}>Need IT support for your business?</h2>
            <p style={{ color: "#94a3b8", fontSize: 15, margin: 0 }}>Call us at <a href="tel:5176105372" style={{ color: TEAL, textDecoration: "none", fontWeight: 700 }}>(517) 610-5372</a> or stop by our Hillsdale office.</p>
          </div>
          <div style={{ display: "flex", gap: 12, flexShrink: 0, marginLeft: 32 }}>
            <a href="#" style={{ background: TEAL, color: "white", padding: "12px 28px", borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>Get In Touch</a>
            <a href="tel:5176105372" style={{ background: "rgba(255,255,255,0.1)", color: "white", padding: "12px 24px", borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)" }}>
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ── MAP (from ModernClean, cleaner styling) ── */}
      <section style={{ padding: "0 48px 80px", background: "#f8fafc", paddingTop: 80 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ width: 40, height: 4, background: `linear-gradient(to right, #0c4a6e, ${TEAL})`, borderRadius: 2, marginBottom: 16 }} />
          <h2 style={{ color: "#0f172a", fontSize: 28, fontWeight: 800, margin: "0 0 8px" }}>Where We Are Located</h2>
          <p style={{ color: "#64748b", fontSize: 15, margin: "0 0 28px" }}>37 Waldron St, Hillsdale, MI 49242</p>
          <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", height: 420, border: "1px solid #e2e8f0" }}>
            <iframe loading="lazy" src="https://maps.google.com/maps?q=QPCTech&t=m&z=16&output=embed&iwloc=near"
              title="QPCTech" style={{ width: "100%", height: "100%", border: "none" }} />
          </div>
        </div>
      </section>

      {/* ── FOOTER (ModernClean: dark with logo + Quick Links column) ── */}
      <footer style={{ background: "#0f172a", color: "#64748b", padding: "56px 48px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, paddingBottom: 48 }}>
          <div>
            <img src="https://www.qpctech.com/wp-content/uploads/2024/03/cropped-QPCTech-logo.png" alt="QPCTech" style={{ height: 48, marginBottom: 16 }} />
            <p style={{ fontSize: 14, lineHeight: 1.7, margin: "0 0 20px" }}>Managed IT services for southern Michigan businesses — trusted by 500+ local clients.</p>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: 8 }}>
              <a href="tel:5176105372" style={{ color: "#64748b", textDecoration: "none", fontSize: 13, display: "flex", alignItems: "center", gap: 6 }}><Phone size={13} color={TEAL} />(517) 610-5372</a>
              <a href="mailto:support@qpctech.com" style={{ color: "#64748b", textDecoration: "none", fontSize: 13, display: "flex", alignItems: "center", gap: 6 }}><Mail size={13} color={TEAL} />support@qpctech.com</a>
            </div>
          </div>
          <div>
            <p style={{ color: "#e2e8f0", fontWeight: 700, fontSize: 14, marginTop: 0, marginBottom: 16 }}>Services</p>
            {navServices.slice(0, 5).map(l => (
              <a key={l} href="#" style={{ display: "block", color: "#64748b", textDecoration: "none", fontSize: 14, marginBottom: 8 }}>{l}</a>
            ))}
          </div>
          <div>
            <p style={{ color: "#e2e8f0", fontWeight: 700, fontSize: 14, marginTop: 0, marginBottom: 16 }}>Quick Links</p>
            {["NinjaOne Portal", "Huntress Portal", "UniFi Portal", "ConnectWise Portal", "Q-BITS Landing Page"].map(l => (
              <a key={l} href="#" style={{ display: "block", color: "#64748b", textDecoration: "none", fontSize: 14, marginBottom: 8 }}>{l}</a>
            ))}
          </div>
        </div>
        <div style={{ borderTop: "1px solid #1e293b", padding: "16px 0", textAlign: "center" as const }}>
          <p style={{ color: "#334155", fontSize: 13, margin: 0 }}>Copyright © 2026 QPCTech</p>
        </div>
      </footer>
    </div>
  );
}
