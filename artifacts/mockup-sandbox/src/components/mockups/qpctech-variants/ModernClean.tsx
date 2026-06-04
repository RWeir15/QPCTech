import { Wrench, Laptop, Monitor, Printer, KeyRound, Cpu, Bug, Tv2, Phone, Mail, MapPin, Shield, Clock, Star, ArrowUpRight } from "lucide-react";

const TEAL = "#0ea5e9";
const TEAL_DARK = "#0284c7";

const services = [
  { icon: Wrench, title: "Computer Repair", desc: "Desktop and laptop repair by certified technicians. We do not repair phones or tablets." },
  { icon: Laptop, title: "Computer Sales", desc: "Refurbished computers tested to our quality standards before sale." },
  { icon: Monitor, title: "Windows OS Upgrade", desc: "Stay patched and protected — OS upgrades keep your machine secure." },
  { icon: Printer, title: "Printer Sales", desc: "Quality EPSON printers via our Printer Source Plus partnership.", link: "https://printersourceplus.com/" },
  { icon: KeyRound, title: "Password Reset", desc: "Locked out of your computer? We have the tools to get you back in quickly." },
  { icon: Cpu, title: "Hardware Upgrades", desc: "RAM, storage, GPU, or full hardware installs — handled by our team." },
  { icon: Bug, title: "Virus Removal", desc: "Comprehensive malware detection and removal to protect your data." },
  { icon: Tv2, title: "Custom PC Builds", desc: "Gaming rigs and workstations built to your exact requirements." },
];

const trust = [
  { icon: Shield, label: "Trusted & Local", sub: "Serving Hillsdale since 2014" },
  { icon: Clock, label: "Fast Turnaround", sub: "Most repairs done same-day" },
  { icon: Star, label: "5-Star Rated", sub: "Loved by 500+ customers" },
  { icon: Phone, label: "Always Reachable", sub: "(517) 610-5372" },
];

const navServices = ["Network Infrastructure", "Cybersecurity", "Managed IT Systems", "Phone Systems", "Remote Support", "Physical Security", "Printing & Scanning", "Community Work"];

export function ModernClean() {
  return (
    <div style={{ fontFamily: "'Roboto', sans-serif", background: "white", color: "#1e293b" }}>

      {/* ── HEADER ── */}
      <header style={{ background: "white", borderBottom: "1px solid #e2e8f0", padding: "0 48px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 80, position: "sticky", top: 0, zIndex: 50 }}>
        <img src="https://www.qpctech.com/wp-content/uploads/2024/03/cropped-QPCTech-logo.png" alt="QPCTech" style={{ height: 54 }} />
        <nav style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {["Home", "Services ▾", "Who we Are", "Contact Us"].map(n => (
            <a key={n} href="#" style={{ color: "#475569", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>{n}</a>
          ))}
          <a href="https://qpctech.rmmservices.net/connect/#/9951961931" target="_blank" rel="noreferrer"
            style={{ background: TEAL, color: "white", padding: "10px 22px", borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
            Remote Support
          </a>
        </nav>
      </header>

      {/* ── ANNOUNCEMENT BAR ── */}
      <div style={{ background: `linear-gradient(to right, ${TEAL_DARK}, ${TEAL})`, padding: "10px 48px", display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
        <MapPin size={14} color="white" />
        <span style={{ color: "white", fontSize: 13, fontWeight: 500 }}>Walk-ins welcome at 37 Waldron St, Hillsdale, MI · Mon–Fri</span>
        <a href="#" style={{ color: "white", fontSize: 13, fontWeight: 700, textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>Get Directions <ArrowUpRight size={12} /></a>
      </div>

      {/* ── HERO ── */}
      <section style={{
        background: "linear-gradient(160deg, #f0f9ff 0%, #e0f2fe 40%, #f8fafc 100%)",
        padding: "80px 48px 72px",
        borderBottom: "1px solid #e2e8f0",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `${TEAL}15`, borderRadius: 20, padding: "6px 14px", marginBottom: 20 }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: TEAL }} />
              <span style={{ color: TEAL_DARK, fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>Southern Michigan IT Experts</span>
            </div>
            <h1 style={{ color: "#0f172a", fontSize: 48, fontWeight: 800, lineHeight: 1.15, margin: "0 0 20px", letterSpacing: "-0.02em" }}>
              Your local IT partner for every challenge.
            </h1>
            <p style={{ color: "#64748b", fontSize: 17, lineHeight: 1.7, margin: "0 0 32px" }}>
              From walk-in computer repair to full business IT management — QPCTech has served the Hillsdale community for over a decade.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <a href="#" style={{ background: TEAL, color: "white", padding: "13px 28px", borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: "none" }}>See All Services</a>
              <a href="tel:5176105372" style={{ background: "white", color: "#1e293b", padding: "13px 28px", borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: "none", border: "1px solid #cbd5e1", display: "flex", alignItems: "center", gap: 8 }}>
                <Phone size={15} color={TEAL} /> Call Us Now
              </a>
            </div>
          </div>
          {/* Trust cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {trust.map((t, i) => {
              const Icon = t.icon;
              return (
                <div key={i} style={{ background: "white", borderRadius: 12, padding: "20px", border: "1px solid #e2e8f0", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: `${TEAL}15`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                    <Icon size={20} color={TEAL} />
                  </div>
                  <p style={{ color: "#0f172a", fontWeight: 700, fontSize: 14, margin: "0 0 4px" }}>{t.label}</p>
                  <p style={{ color: "#94a3b8", fontSize: 12, margin: 0 }}>{t.sub}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── IN STORE SERVICES ── */}
      <section style={{ padding: "80px 48px", background: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ width: 40, height: 4, background: `linear-gradient(to right, ${TEAL}, ${TEAL_DARK})`, borderRadius: 2, marginBottom: 16 }} />
            <h2 style={{ color: "#0f172a", fontSize: 32, fontWeight: 800, margin: "0 0 10px", letterSpacing: "-0.02em" }}>In Store Services</h2>
            <p style={{ color: "#64748b", fontSize: 16, margin: 0 }}>Walk in and we'll take care of the rest — no appointment needed for most services.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} style={{
                  background: "#f8fafc",
                  borderRadius: 12,
                  padding: "24px",
                  border: "1px solid #e2e8f0",
                  borderLeft: `4px solid ${TEAL}`,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
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

      {/* ── CONTACT CALLOUT ── */}
      <section style={{ padding: "0 48px 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", background: `linear-gradient(135deg, ${TEAL_DARK} 0%, ${TEAL} 100%)`, borderRadius: 16, padding: "48px 48px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h2 style={{ color: "white", fontSize: 26, fontWeight: 800, margin: "0 0 8px" }}>Ready to get your tech sorted?</h2>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 15, margin: 0 }}>Walk in or call us at <strong>(517) 610-5372</strong> — we're here to help.</p>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <a href="#" style={{ background: "white", color: TEAL_DARK, padding: "12px 24px", borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>Contact Us</a>
            <a href="tel:5176105372" style={{ background: "rgba(255,255,255,0.15)", color: "white", padding: "12px 24px", borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: "none", border: "1px solid rgba(255,255,255,0.3)" }}>
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section style={{ padding: "0 48px 80px", background: "#f8fafc", paddingTop: 80 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ width: 40, height: 4, background: `linear-gradient(to right, ${TEAL}, ${TEAL_DARK})`, borderRadius: 2, marginBottom: 16 }} />
          <h2 style={{ color: "#0f172a", fontSize: 28, fontWeight: 800, margin: "0 0 8px" }}>Where We Are Located</h2>
          <p style={{ color: "#64748b", fontSize: 15, margin: "0 0 28px" }}>37 Waldron St, Hillsdale, MI 49242</p>
          <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", height: 420, border: "1px solid #e2e8f0" }}>
            <iframe loading="lazy" src="https://maps.google.com/maps?q=QPCTech&t=m&z=16&output=embed&iwloc=near"
              title="QPCTech" style={{ width: "100%", height: "100%", border: 0 }} />
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#0f172a", color: "#64748b", padding: "56px 48px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, paddingBottom: 48 }}>
          <div>
            <img src="https://www.qpctech.com/wp-content/uploads/2024/03/cropped-QPCTech-logo.png" alt="QPCTech" style={{ height: 48, marginBottom: 16 }} />
            <p style={{ fontSize: 14, lineHeight: 1.7, margin: "0 0 20px" }}>Managed IT services for southern Michigan businesses — trusted by 500+ local clients.</p>
            <div style={{ display: "flex", gap: 12 }}>
              <a href="tel:5176105372" style={{ color: "#64748b", textDecoration: "none", fontSize: 13, display: "flex", alignItems: "center", gap: 6 }}><Phone size={13} color={TEAL} />(517) 610-5372</a>
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
        <div style={{ borderTop: "1px solid #1e293b", padding: "16px 0", textAlign: "center" }}>
          <p style={{ color: "#334155", fontSize: 13, margin: 0 }}>Copyright © 2026 QPCTech</p>
        </div>
      </footer>
    </div>
  );
}
