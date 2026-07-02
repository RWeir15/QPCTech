import {
  Wrench, Laptop, Monitor, Printer, KeyRound, Cpu, Bug, Tv2,
  Phone, Mail, MapPin, ArrowRight, ArrowUpRight,
  Shield, Clock, Star, CheckCircle, Network, Users,
  ChevronDown, Zap, HeartHandshake, Award,
} from "lucide-react";

const TEAL = "#37b5e6";
const DARK = "#0f172a";

const services = [
  { Icon: Wrench, title: "Computer Repair", desc: "Fast, reliable desktop and laptop diagnostics and repairs. Walk in anytime — no appointment needed." },
  { Icon: Laptop, title: "Computer Sales", desc: "Rigorously tested refurbished computers. Premium performance without the brand-new price tag." },
  { Icon: Monitor, title: "Windows OS Upgrade", desc: "Keep your computer safe and fast with the latest security patches and Windows features." },
  { Icon: Printer, title: "Printer Sales", desc: "Top-tier EPSON printers through our Printer Source Plus partnership — perfect for home or office." },
  { Icon: KeyRound, title: "Password Reset", desc: "Locked out? We have the tools to safely reset your password and get you right back to work." },
  { Icon: Cpu, title: "Hardware Installation", desc: "Certified technicians for safe GPU, RAM, SSD, and other hardware upgrades." },
  { Icon: Bug, title: "Virus Removal", desc: "Complete malware elimination and system optimization for maximum security." },
  { Icon: Tv2, title: "Custom PC Builds", desc: "Gaming rigs or specialized workstations — built to your exact specs." },
];

const stats = [
  { value: "1,000+", label: "Clients Served" },
  { value: "10+", label: "Years Experience" },
  { value: "100%", label: "Southern Michigan" },
];

const trust = [
  { Icon: Shield, label: "Trusted & Local", sub: "Serving Hillsdale since 2014" },
  { Icon: Clock, label: "Fast Turnaround", sub: "Most repairs done same-day" },
  { Icon: Star, label: "5-Star Rated", sub: "Loved by 1,000+ customers" },
  { Icon: Phone, label: "Easy to Reach", sub: "(517) 610-5372" },
];

const whyUs = [
  {
    Icon: Zap,
    title: "Same-Day Service",
    desc: "Most walk-in repairs are finished the same day. No weeks-long waits or shipping your device away.",
  },
  {
    Icon: HeartHandshake,
    title: "Honest, Transparent Pricing",
    desc: "We diagnose before we quote. No surprise fees — you'll know exactly what it costs before any work begins.",
  },
  {
    Icon: Award,
    title: "Certified Technicians",
    desc: "Our team holds industry certifications in IT, cybersecurity, and networking — not just self-taught tinkerers.",
  },
];

export function Homepage() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: "#1e293b", overflowX: "hidden", background: "white" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; }

        .sc { transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease; }
        .sc:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(55,181,230,0.15), 0 4px 16px rgba(0,0,0,0.08) !important; border-color: ${TEAL} !important; }

        .tc { transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease; }
        .tc:hover { background: rgba(55,181,230,0.11) !important; border-color: rgba(55,181,230,0.35) !important; transform: translateY(-3px); }

        .navlink { position: relative; transition: color 0.18s ease; }
        .navlink::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 2px; background: ${TEAL}; border-radius: 2px; transition: width 0.2s ease; }
        .navlink:hover { color: ${TEAL} !important; }
        .navlink:hover::after { width: 100%; }

        .btn-primary { transition: opacity 0.18s, transform 0.18s, box-shadow 0.18s; }
        .btn-primary:hover { opacity: 0.9; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(55,181,230,0.4); }

        .why-card { transition: transform 0.22s ease, box-shadow 0.22s ease; }
        .why-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.08); }

        @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; } .trust-grid { display: none !important; } }
        @media (max-width: 1024px) { .svc-grid { grid-template-columns: repeat(2,1fr) !important; } .why-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 600px) { .svc-grid { grid-template-columns: 1fr !important; } h1.hero-h1 { font-size: 38px !important; } }
      `}</style>

      {/* ── HEADER ── */}
      <header style={{ background: "#111827", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 20px rgba(0,0,0,0.45)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 80 }}>
          <a href="#" style={{ display: "flex", alignItems: "center" }}>
            <img src="https://www.qpctech.com/wp-content/uploads/2024/03/cropped-QPCTech-logo.png" alt="QPCTech" style={{ height: 52, width: "auto" }} />
          </a>
          <nav style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <a href="#" className="navlink" style={{ color: "#e5e7eb", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>Home</a>
            <a href="#" className="navlink" style={{ color: "#e5e7eb", textDecoration: "none", fontSize: 14, fontWeight: 500, display: "flex", alignItems: "center", gap: 4 }}>
              Services <ChevronDown size={12} />
            </a>
            <a href="#" className="navlink" style={{ color: "#e5e7eb", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>Who We Are</a>
            <a href="#" className="navlink" style={{ color: "#e5e7eb", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>Contact Us</a>
            <a href="#" className="btn-primary" style={{ background: TEAL, color: "white", padding: "9px 22px", borderRadius: 6, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>Remote Support</a>
          </nav>
        </div>
      </header>

      {/* ── ANNOUNCEMENT BAR ── */}
      <div style={{ background: `linear-gradient(to right, #0c4a6e, ${TEAL})`, padding: "10px 24px", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
        <MapPin size={14} color="white" />
        <span style={{ color: "white", fontSize: 13, fontWeight: 500 }}>Walk-ins welcome at 37 Waldron St, Hillsdale, MI · Mon–Fri</span>
        <a href="#" style={{ color: "white", fontSize: 13, fontWeight: 700, textDecoration: "none", display: "flex", alignItems: "center", gap: 3 }}>
          Get Directions <ArrowUpRight size={12} />
        </a>
      </div>

      {/* ── HERO ── */}
      <section style={{
        background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 55%, #0d3050 100%)",
        padding: "88px 24px 80px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Dot grid overlay */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          pointerEvents: "none",
        }} />
        {/* Glow orbs */}
        <div style={{ position: "absolute", right: -80, top: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(55,181,230,0.13) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", left: -60, bottom: -60, width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(55,181,230,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", position: "relative" }} className="hero-grid">
          <div>
            {/* Badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(55,181,230,0.15)", border: "1px solid rgba(55,181,230,0.3)", borderRadius: 20, padding: "5px 14px", marginBottom: 20 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: TEAL }} />
              <span style={{ color: TEAL, fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Hillsdale's IT Experts Since 2014</span>
            </div>

            <h1 className="hero-h1" style={{ color: "white", fontSize: 54, fontWeight: 900, lineHeight: 1.08, margin: "0 0 20px", letterSpacing: "-0.03em" }}>
              Technology That{" "}
              <span style={{ color: TEAL }}>Works For You.</span>
            </h1>
            <p style={{ color: "#94a3b8", fontSize: 17, lineHeight: 1.75, margin: "0 0 36px", maxWidth: 480 }}>
              From quick walk-in computer repairs to comprehensive managed IT services — QPCTech keeps local residents and businesses running smoothly, securely, and efficiently.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="#services" className="btn-primary" style={{ background: TEAL, color: "white", padding: "14px 30px", borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                View All Services <ArrowRight size={16} />
              </a>
              <a href="tel:5176105372" style={{ background: "transparent", color: "white", padding: "14px 28px", borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: "none", border: "2px solid rgba(255,255,255,0.22)", display: "inline-flex", alignItems: "center", gap: 8, transition: "border-color 0.2s" }}>
                <Phone size={15} color={TEAL} /> Call Us Now
              </a>
            </div>
          </div>

          {/* Trust cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="trust-grid">
            {trust.map((t, i) => (
              <div key={i} className="tc" style={{ background: "rgba(255,255,255,0.06)", borderRadius: 14, padding: "22px", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 2px 12px rgba(0,0,0,0.2)" }}>
                <div style={{ width: 42, height: 42, borderRadius: 11, background: `${TEAL}22`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <t.Icon size={20} color={TEAL} />
                </div>
                <p style={{ color: "white", fontWeight: 700, fontSize: 14, margin: "0 0 5px" }}>{t.label}</p>
                <p style={{ color: "#94a3b8", fontSize: 12, margin: 0 }}>{t.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR — dark navy, not loud teal ── */}
      <div style={{ background: DARK, borderBottom: "1px solid #1e293b", padding: "32px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "center", gap: 0 }}>
          {stats.map((s, i) => (
            <div key={s.value} style={{
              flex: 1, maxWidth: 280, textAlign: "center",
              borderRight: i < stats.length - 1 ? "1px solid #1e293b" : "none",
              padding: "0 24px",
            }}>
              <div style={{ color: TEAL, fontSize: 36, fontWeight: 900, lineHeight: 1, letterSpacing: "-0.02em" }}>{s.value}</div>
              <div style={{ color: "#64748b", fontSize: 13, marginTop: 6, fontWeight: 500, letterSpacing: "0.03em", textTransform: "uppercase" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── IN-STORE SERVICES ── */}
      <section id="services" style={{ padding: "88px 24px", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 52 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `${TEAL}12`, border: `1px solid ${TEAL}35`, borderRadius: 20, padding: "4px 14px", marginBottom: 16 }}>
              <span style={{ color: TEAL, fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Walk-In Services</span>
            </div>
            <h2 style={{ color: DARK, fontSize: 34, fontWeight: 800, margin: "0 0 12px", letterSpacing: "-0.025em" }}>In-Store Services</h2>
            <p style={{ color: "#475569", fontSize: 16, margin: 0, maxWidth: 520 }}>Walk in and we'll take care of the rest — no appointment needed for most services.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }} className="svc-grid">
            {services.map((s, i) => (
              <div key={i} className="sc" style={{
                background: "#f8fafc", borderRadius: 14, padding: "28px 22px",
                border: "1px solid #e2e8f0", borderLeft: `4px solid ${TEAL}`,
                display: "flex", flexDirection: "column", gap: 12,
              }}>
                <div style={{ width: 46, height: 46, borderRadius: 12, background: "white", border: "1px solid #e8edf2", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", flexShrink: 0 }}>
                  <s.Icon size={21} color={TEAL} />
                </div>
                <h3 style={{ color: "#111827", fontSize: 15, fontWeight: 700, margin: 0, lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ color: "#475569", fontSize: 13, lineHeight: 1.75, margin: 0, flex: 1 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY QPCTECH (NEW SECTION) ── */}
      <section style={{ padding: "88px 24px", background: "#f8fafc", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `${TEAL}12`, border: `1px solid ${TEAL}35`, borderRadius: 20, padding: "4px 14px", marginBottom: 16 }}>
              <span style={{ color: TEAL, fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Why Choose Us</span>
            </div>
            <h2 style={{ color: DARK, fontSize: 34, fontWeight: 800, margin: "0 0 14px", letterSpacing: "-0.025em" }}>The QPCTech Difference</h2>
            <p style={{ color: "#475569", fontSize: 16, margin: "0 auto", maxWidth: 540, lineHeight: 1.7 }}>
              We're not a faceless tech giant — we're your neighbors. Here's what makes working with us different.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }} className="why-grid">
            {whyUs.map((item, i) => (
              <div key={i} className="why-card" style={{
                background: "white", borderRadius: 16, padding: "36px 32px",
                border: "1px solid #e2e8f0",
                display: "flex", flexDirection: "column", gap: 16,
              }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: `${TEAL}15`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <item.Icon size={24} color={TEAL} />
                </div>
                <h3 style={{ color: DARK, fontSize: 18, fontWeight: 800, margin: 0, letterSpacing: "-0.01em" }}>{item.title}</h3>
                <p style={{ color: "#475569", fontSize: 14, lineHeight: 1.8, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #0c4a6e 100%)", borderRadius: 20, padding: "56px 56px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 28, boxShadow: "0 12px 48px rgba(0,0,0,0.22)" }}>
          <div>
            <h2 style={{ color: "white", fontSize: 28, fontWeight: 800, margin: "0 0 10px", letterSpacing: "-0.02em" }}>Need Reliable IT Support or Computer Repair?</h2>
            <p style={{ color: "#94a3b8", fontSize: 16, margin: 0, maxWidth: 520, lineHeight: 1.7 }}>
              Whether you're a local business looking for managed IT or a neighbor needing a quick computer fix, we're here to help.{" "}
              <a href="tel:5176105372" style={{ color: TEAL, textDecoration: "none", fontWeight: 700 }}>(517) 610-5372</a>
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexShrink: 0 }}>
            <a href="#" className="btn-primary" style={{ background: TEAL, color: "white", padding: "13px 28px", borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: "none" }}>Get In Touch</a>
            <a href="tel:5176105372" style={{ background: "rgba(255,255,255,0.1)", color: "white", padding: "13px 24px", borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: "none", border: "1px solid rgba(255,255,255,0.18)", transition: "background 0.2s" }}>
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: DARK, borderTop: `3px solid ${TEAL}`, color: "#64748b", padding: "56px 24px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, paddingBottom: 48 }}>
          <div>
            <img src="https://www.qpctech.com/wp-content/uploads/2024/03/cropped-QPCTech-logo.png" alt="QPCTech" style={{ height: 48, marginBottom: 18 }} />
            <p style={{ fontSize: 14, lineHeight: 1.75, margin: "0 0 20px", maxWidth: 280 }}>Managed IT services for southern Michigan businesses — trusted by 1,000+ local clients.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span style={{ color: "#4b5563", fontSize: 13 }}>37 Waldron St, Hillsdale, MI 49242</span>
              <a href="tel:5176105372" style={{ color: "#64748b", textDecoration: "none", fontSize: 13, display: "flex", alignItems: "center", gap: 6 }}><Phone size={13} color={TEAL} />(517) 610-5372</a>
              <a href="mailto:support@qpctech.com" style={{ color: "#64748b", textDecoration: "none", fontSize: 13, display: "flex", alignItems: "center", gap: 6 }}><Mail size={13} color={TEAL} />support@qpctech.com</a>
            </div>
          </div>
          <div>
            <p style={{ color: "#e2e8f0", fontWeight: 700, fontSize: 13, marginTop: 0, marginBottom: 16, letterSpacing: "0.06em", textTransform: "uppercase" }}>Services</p>
            {["Network Infrastructure", "Cybersecurity", "Managed IT Systems", "Phone Systems", "Physical Security", "Printing & Scanning"].map(s => (
              <a key={s} href="#" style={{ display: "block", color: "#64748b", textDecoration: "none", fontSize: 13, marginBottom: 9, transition: "color 0.18s" }}
                onMouseEnter={e => (e.currentTarget.style.color = TEAL)}
                onMouseLeave={e => (e.currentTarget.style.color = "#64748b")}
              >{s}</a>
            ))}
          </div>
          <div>
            <p style={{ color: "#e2e8f0", fontWeight: 700, fontSize: 13, marginTop: 0, marginBottom: 16, letterSpacing: "0.06em", textTransform: "uppercase" }}>Quick Links</p>
            {["NinjaOne Portal", "Huntress Portal", "UniFi Portal", "ConnectWise Portal", "Q-BITS"].map(s => (
              <a key={s} href="#" style={{ display: "block", color: "#64748b", textDecoration: "none", fontSize: 13, marginBottom: 9, transition: "color 0.18s" }}
                onMouseEnter={e => (e.currentTarget.style.color = TEAL)}
                onMouseLeave={e => (e.currentTarget.style.color = "#64748b")}
              >{s}</a>
            ))}
          </div>
        </div>
        <div style={{ borderTop: "1px solid #1e293b", padding: "16px 0", textAlign: "center" }}>
          <p style={{ color: "#334155", fontSize: 13, margin: 0 }}>Copyright © 2026 QPCTech · All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
