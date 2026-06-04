import { useState } from "react";
import {
  Wrench, Laptop, Monitor, Printer, KeyRound, Cpu, Bug, Tv2,
  ChevronDown, Menu, X, Phone, Mail, MapPin, ArrowRight,
  ArrowUpRight, Shield, Clock, Star,
} from "lucide-react";

const TEAL = "#37b5e6";

const services = [
  {
    Icon: Wrench,
    title: "Computer Repair",
    desc: (
      <>We repair desktop and laptop PCs.<br /><em>We do not repair phones or tablets.</em></>
    ),
  },
  {
    Icon: Laptop,
    title: "Computer Sales",
    desc: "We purchase and refurbish computers and ensure they meet our quality standards.",
  },
  {
    Icon: Monitor,
    title: "Windows OS Upgrade",
    desc: "Operating Systems need to stay up-to-date to ensure security vulnerabilities get patched.",
  },
  {
    Icon: Printer,
    title: "Printer Sales",
    desc: "We've partnered with Printer Source Plus and sell quality EPSON printers.",
    link: "https://printersourceplus.com/",
  },
  {
    Icon: KeyRound,
    title: "Password Reset",
    desc: "Forgot your computer login password? We have the tools to reset it.",
  },
  {
    Icon: Cpu,
    title: "Hardware Installation",
    desc: "Have a computer part you don't feel comfortable installing yourself? Let our technicians handle it.",
  },
  {
    Icon: Bug,
    title: "Virus Removal",
    desc: "We can detect and remove footholds created by viruses, keeping your system safe.",
  },
  {
    Icon: Tv2,
    title: "Custom PC Builds",
    desc: "We build custom computers for gaming or specialized workloads. Contact us to plan a new build!",
  },
];

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "10+", label: "Years Experience" },
  { value: "100%", label: "Local Business" },
];

const trust = [
  { Icon: Shield, label: "Trusted & Local", sub: "Serving Hillsdale since 2014" },
  { Icon: Clock, label: "Fast Turnaround", sub: "Most repairs done same-day" },
  { Icon: Star, label: "5-Star Rated", sub: "Loved by 500+ customers" },
  { Icon: Phone, label: "Always Reachable", sub: "(517) 610-5372" },
];

const serviceLinks = [
  { label: "Network Infrastructure", href: "/network-infrastructure/" },
  { label: "Cybersecurity", href: "/cybersecurity/" },
  { label: "Managed IT Systems", href: "/managed-it-systems/" },
  { label: "Phone Systems", href: "/phone-systems/" },
  { label: "Remote Support", href: "/remote-support/" },
  { label: "Physical Security", href: "/physical-security/" },
  { label: "Printing & Scanning", href: "/printing-and-scanning/" },
  { label: "Community Work", href: "/community-work/" },
];

const externalLinks = [
  { label: "NinjaOne Portal", href: "https://qpctech.rmmservices.net" },
  { label: "Huntress Portal", href: "https://qpctech.huntress.io/" },
  { label: "UniFi Portal", href: "http://unifi.ui.com" },
  { label: "ConnectWise Portal", href: "http://home.connectwise.com" },
  { label: "Q-BITS Landing Page", href: "/q-bits/" },
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header style={{ background: "#111827", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 80 }}>
        <a href="/" style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://www.qpctech.com/wp-content/uploads/2024/03/cropped-QPCTech-logo.png"
            alt="QPCTech"
            style={{ height: 56, width: "auto" }}
          />
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="desktop-nav">
          <a href="/" style={{ color: "#e5e7eb", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>Home</a>

          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <a href="#" style={{ color: "#e5e7eb", textDecoration: "none", fontSize: 14, fontWeight: 500, display: "flex", alignItems: "center", gap: 5 }}>
              Services <ChevronDown size={12} />
            </a>
            {servicesOpen && (
              <div style={{
                position: "absolute", top: "calc(100% + 8px)", left: 0, background: "white",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)", minWidth: 220, zIndex: 200,
                border: "1px solid #e2e8f0", borderRadius: 8, padding: "6px 0",
              }}>
                {serviceLinks.map(link => (
                  <a key={link.href} href={link.href} style={{ display: "block", padding: "9px 18px", color: "#334155", textDecoration: "none", fontSize: 14 }}
                    onMouseEnter={e => { e.currentTarget.style.background = "#f0f9ff"; e.currentTarget.style.color = TEAL; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#334155"; }}
                  >{link.label}</a>
                ))}
              </div>
            )}
          </div>

          <a href="/about-us/" style={{ color: "#e5e7eb", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>Who we Are</a>
          <a href="/contact/" style={{ color: "#e5e7eb", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>Contact Us</a>
          <a
            href="https://qpctech.rmmservices.net/connect/#/9951961931"
            target="_blank"
            rel="noreferrer"
            style={{ background: TEAL, color: "white", padding: "9px 22px", borderRadius: 6, fontSize: 14, fontWeight: 600, textDecoration: "none" }}
          >Remote Support</a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(o => !o)}
          style={{ display: "none", background: "none", border: "none", color: "white", cursor: "pointer", padding: 4 }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ background: "#111827", padding: "12px 24px 20px", borderTop: "1px solid #1f2937" }} className="mobile-menu">
          <a href="/" style={{ display: "block", color: "#e5e7eb", textDecoration: "none", padding: "10px 0", fontSize: 15 }}>Home</a>
          <div>
            <button
              onClick={() => setServicesOpen(o => !o)}
              style={{ background: "none", border: "none", color: "#e5e7eb", fontSize: 15, cursor: "pointer", padding: "10px 0", display: "flex", alignItems: "center", gap: 6, width: "100%" }}
            >
              Services <ChevronDown size={12} />
            </button>
            {servicesOpen && (
              <div style={{ paddingLeft: 16 }}>
                {serviceLinks.map(link => (
                  <a key={link.href} href={link.href} style={{ display: "block", color: "#94a3b8", textDecoration: "none", padding: "8px 0", fontSize: 14 }}>{link.label}</a>
                ))}
              </div>
            )}
          </div>
          <a href="/about-us/" style={{ display: "block", color: "#e5e7eb", textDecoration: "none", padding: "10px 0", fontSize: 15 }}>Who we Are</a>
          <a href="/contact/" style={{ display: "block", color: "#e5e7eb", textDecoration: "none", padding: "10px 0", fontSize: 15 }}>Contact Us</a>
          <a
            href="https://qpctech.rmmservices.net/connect/#/9951961931"
            target="_blank"
            rel="noreferrer"
            style={{ display: "inline-block", background: TEAL, color: "white", textDecoration: "none", fontSize: 15, borderRadius: 6, padding: "8px 22px", marginTop: 8, fontWeight: 600 }}
          >Remote Support</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}

export default function App() {
  return (
    <div style={{ fontFamily: "'Roboto', sans-serif", color: "#1e293b", overflowX: "hidden" }}>
      <Header />

      {/* ── ANNOUNCEMENT BAR ── */}
      <div style={{ background: `linear-gradient(to right, #0c4a6e, ${TEAL})`, padding: "10px 24px", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
        <MapPin size={14} color="white" />
        <span style={{ color: "white", fontSize: 13, fontWeight: 500 }}>Walk-ins welcome at 37 Waldron St, Hillsdale, MI &middot; Mon–Fri</span>
        <a href="https://maps.google.com/?q=37+Waldron+St+Hillsdale+MI" target="_blank" rel="noreferrer"
          style={{ color: "white", fontSize: 13, fontWeight: 700, textDecoration: "none", display: "flex", alignItems: "center", gap: 3 }}>
          Get Directions <ArrowUpRight size={12} />
        </a>
      </div>

      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 55%, #0d3050 100%)", padding: "80px 24px 72px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -60, top: -80, width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(55,181,230,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", left: -60, bottom: -60, width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(55,181,230,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", position: "relative" }} className="hero-grid">
          <div>
            <h1 style={{ color: "white", fontSize: 52, fontWeight: 800, lineHeight: 1.1, margin: "0 0 20px", letterSpacing: "-0.02em" }}>
              Technology That{" "}
              <span style={{ color: TEAL }}>Just Works.</span>
            </h1>
            <p style={{ color: "#94a3b8", fontSize: 17, lineHeight: 1.7, margin: "0 0 32px" }}>
              From computer repair to full managed IT services — QPCTech keeps Hillsdale businesses running smoothly, securely, and efficiently.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="#services" style={{ background: TEAL, color: "white", padding: "13px 30px", borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
                View All Services <ArrowRight size={16} />
              </a>
              <a href="tel:5176105372" style={{ background: "transparent", color: "white", padding: "13px 28px", borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: "none", border: "2px solid rgba(255,255,255,0.22)", display: "flex", alignItems: "center", gap: 8 }}>
                <Phone size={15} color={TEAL} /> Call Us Now
              </a>
            </div>
          </div>

          {/* Trust cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="trust-grid">
            {trust.map((t, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.06)", borderRadius: 12, padding: "20px", border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 2px 12px rgba(0,0,0,0.2)" }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${TEAL}25`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                  <t.Icon size={20} color={TEAL} />
                </div>
                <p style={{ color: "white", fontWeight: 700, fontSize: 14, margin: "0 0 4px" }}>{t.label}</p>
                <p style={{ color: "#94a3b8", fontSize: 12, margin: 0 }}>{t.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{ background: TEAL, padding: "28px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "center", gap: 80, textAlign: "center" }} className="stats-grid">
          {stats.map(s => (
            <div key={s.value}>
              <div style={{ color: "white", fontSize: 32, fontWeight: 800, lineHeight: 1 }}>{s.value}</div>
              <div style={{ color: "rgba(255,255,255,0.85)", fontSize: 13, marginTop: 4, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── IN STORE SERVICES ── */}
      <section id="services" style={{ padding: "80px 24px", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ width: 40, height: 4, background: `linear-gradient(to right, #0c4a6e, ${TEAL})`, borderRadius: 2, marginBottom: 16 }} />
            <h2 style={{ color: "#0f172a", fontSize: 32, fontWeight: 800, margin: "0 0 10px", letterSpacing: "-0.02em" }}>In Store Services</h2>
            <p style={{ color: "#64748b", fontSize: 16, margin: 0 }}>Walk in and we'll take care of the rest — no appointment needed for most services.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="services-grid">
            {services.map((s, i) => (
              <div key={i} style={{ background: "#f8fafc", borderRadius: 12, padding: "24px", border: "1px solid #e2e8f0", borderLeft: `4px solid ${TEAL}`, display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "white", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.06)", flexShrink: 0 }}>
                  <s.Icon size={20} color={TEAL} />
                </div>
                <h3 style={{ color: "#0f172a", fontSize: 14, fontWeight: 700, margin: 0, lineHeight: 1.3 }}>
                  {s.link
                    ? <a href={s.link} target="_blank" rel="noreferrer" style={{ color: "#0f172a", textDecoration: "none" }}>{s.title}</a>
                    : s.title
                  }
                </h3>
                <p style={{ color: "#64748b", fontSize: 13, lineHeight: 1.6, margin: 0, flex: 1 }}>{s.desc}</p>
                {s.link && (
                  <a href={s.link} target="_blank" rel="noreferrer" style={{ color: TEAL, fontSize: 12, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                    Visit site <ArrowUpRight size={11} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA CALLOUT ── */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #0c4a6e 100%)", borderRadius: 16, padding: "48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}>
          <div>
            <h2 style={{ color: "white", fontSize: 26, fontWeight: 800, margin: "0 0 8px" }}>Need IT support for your business?</h2>
            <p style={{ color: "#94a3b8", fontSize: 15, margin: 0 }}>
              Call us at{" "}
              <a href="tel:5176105372" style={{ color: TEAL, textDecoration: "none", fontWeight: 700 }}>(517) 610-5372</a>
              {" "}or stop by our Hillsdale office.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexShrink: 0 }}>
            <a href="/contact/" style={{ background: TEAL, color: "white", padding: "12px 28px", borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>Get In Touch</a>
            <a href="tel:5176105372" style={{ background: "rgba(255,255,255,0.1)", color: "white", padding: "12px 24px", borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)" }}>
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section style={{ padding: "0 24px 80px", background: "#f8fafc", paddingTop: 80 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ width: 40, height: 4, background: `linear-gradient(to right, #0c4a6e, ${TEAL})`, borderRadius: 2, marginBottom: 16 }} />
          <h2 style={{ color: "#0f172a", fontSize: 28, fontWeight: 800, margin: "0 0 8px" }}>Where We Are Located</h2>
          <p style={{ color: "#64748b", fontSize: 15, margin: "0 0 28px" }}>37 Waldron St, Hillsdale, MI 49242</p>
          <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", height: 420, border: "1px solid #e2e8f0" }}>
            <iframe
              loading="lazy"
              src="https://maps.google.com/maps?q=QPCTech&t=m&z=16&output=embed&iwloc=near"
              title="QPCTech"
              aria-label="QPCTech location map"
              style={{ width: "100%", height: "100%", border: "none" }}
            />
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#0f172a", color: "#64748b", padding: "56px 24px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, paddingBottom: 48 }} className="footer-grid">
          <div>
            <img src="https://www.qpctech.com/wp-content/uploads/2024/03/cropped-QPCTech-logo.png" alt="QPCTech" style={{ height: 48, marginBottom: 16 }} />
            <p style={{ fontSize: 14, lineHeight: 1.7, margin: "0 0 20px" }}>Managed IT services for southern Michigan businesses — trusted by 500+ local clients.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <p style={{ color: "#4b5563", fontSize: 13, margin: 0 }}>37 Waldron St, Hillsdale, MI 49242</p>
              <a href="tel:5176105372" style={{ color: "#64748b", textDecoration: "none", fontSize: 13, display: "flex", alignItems: "center", gap: 6 }}
                onMouseEnter={e => (e.currentTarget.style.color = TEAL)}
                onMouseLeave={e => (e.currentTarget.style.color = "#64748b")}
              ><Phone size={13} color={TEAL} />(517) 610-5372</a>
              <a href="mailto:support@qpctech.com" style={{ color: "#64748b", textDecoration: "none", fontSize: 13, display: "flex", alignItems: "center", gap: 6 }}
                onMouseEnter={e => (e.currentTarget.style.color = TEAL)}
                onMouseLeave={e => (e.currentTarget.style.color = "#64748b")}
              ><Mail size={13} color={TEAL} />support@qpctech.com</a>
            </div>
          </div>

          <div>
            <p style={{ color: "#e2e8f0", fontWeight: 700, fontSize: 14, marginTop: 0, marginBottom: 16 }}>Services</p>
            {serviceLinks.map(link => (
              <a key={link.href} href={link.href} style={{ display: "block", color: "#64748b", textDecoration: "none", fontSize: 14, marginBottom: 8 }}
                onMouseEnter={e => (e.currentTarget.style.color = TEAL)}
                onMouseLeave={e => (e.currentTarget.style.color = "#64748b")}
              >{link.label}</a>
            ))}
          </div>

          <div>
            <p style={{ color: "#e2e8f0", fontWeight: 700, fontSize: 14, marginTop: 0, marginBottom: 16 }}>Quick Links</p>
            {externalLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
                style={{ display: "block", color: "#64748b", textDecoration: "none", fontSize: 14, marginBottom: 8 }}
                onMouseEnter={e => (e.currentTarget.style.color = TEAL)}
                onMouseLeave={e => (e.currentTarget.style.color = "#64748b")}
              >{link.label}</a>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid #1e293b", padding: "16px 0", textAlign: "center" }}>
          <p style={{ color: "#334155", fontSize: 13, margin: 0 }}>Copyright &copy; 2026 QPCTech</p>
        </div>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .trust-grid { display: none !important; }
        }
        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 20px; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .footer-grid { grid-template-columns: 1fr !important; }
          h1 { font-size: 38px !important; }
        }
      `}</style>
    </div>
  );
}
