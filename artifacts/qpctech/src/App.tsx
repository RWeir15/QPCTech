import { useState } from "react";
import { Switch, Route } from "wouter";
import {
  Wrench, Laptop, Monitor, Printer, KeyRound, Cpu, Bug, Tv2,
  ChevronDown, Menu, X, Phone, Mail, MapPin, ArrowRight,
  ArrowUpRight, Shield, Clock, Star, CheckCircle, Network, Users,
} from "lucide-react";

const TEAL = "#37b5e6";

const services = [
  {
    Icon: Wrench,
    title: "Computer Repair",
    desc: (<>Fast, reliable desktop and laptop diagnostics and repairs.<br /><br /><strong>(Please note: We specialize in PCs and do not service phones or tablets.)</strong></>),
  },
  {
    Icon: Laptop,
    title: "Computer Sales",
    desc: "High-quality, rigorously tested refurbished computers. Get premium performance without the brand-new price tag.",
  },
  {
    Icon: Monitor,
    title: "Windows OS Upgrade",
    desc: "Keep your computer safe and fast. We seamlessly upgrade your Windows OS to ensure you have the latest security patches and features.",
  },
  {
    Icon: Printer,
    title: "Printer Sales",
    desc: "Reliable printing solutions. Through our partnership with Printer Source Plus, we offer top-tier EPSON printers perfect for home or office use.",
    link: "https://printersourceplus.com/",
  },
  {
    Icon: KeyRound,
    title: "Password Reset",
    desc: "Locked out of your computer? Don't panic. We have the tools to safely reset your password and get you right back to work.",
  },
  {
    Icon: Cpu,
    title: "Hardware Installation",
    desc: "Upgrading your hardware? Let our certified technicians safely install graphics cards, RAM, hard drives, and more.",
  },
  {
    Icon: Bug,
    title: "Virus Removal",
    desc: "Comprehensive malware and virus removal. We completely eliminate hidden threats and optimize your system for maximum security.",
  },
  {
    Icon: Tv2,
    title: "Custom PC Builds",
    desc: "We build custom computers for gaming or specialized workloads. Contact us to plan a new build!",
  },
];

const stats = [
  { value: "1000+", label: "Clients Served" },
  { value: "10+", label: "Years Experience" },
  { value: "100%", label: "Local Business" },
];

const trust = [
  { Icon: Shield, label: "Trusted & Local", sub: "Serving Hillsdale since 2014" },
  { Icon: Clock, label: "Fast Turnaround", sub: "Most repairs done same-day" },
  { Icon: Star, label: "5-Star Rated", sub: "Loved by 1000+ customers" },
  { Icon: Phone, label: "Easy to Reach", sub: "(517) 610-5372" },
];

const serviceLinks = [
  { label: "Network Infrastructure", href: "/network-infrastructure" },
  { label: "Cybersecurity", href: "/cybersecurity" },
  { label: "Managed IT Systems", href: "/managed-it-systems" },
  { label: "Phone Systems", href: "/phone-systems" },

  { label: "Physical Security", href: "/physical-security" },
  { label: "Printing & Scanning", href: "/printing-and-scanning" },
  { label: "Community Work", href: "/community-work" },
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
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 0 0", display: "flex", alignItems: "center", justifyContent: "space-between", height: 80 }}>
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
            onMouseLeave={() => setServicesOpen(false)}
          >
            <a
              href="#"
              onClick={e => { e.preventDefault(); setServicesOpen(o => !o); }}
              style={{ color: "#e5e7eb", textDecoration: "none", fontSize: 14, fontWeight: 500, display: "flex", alignItems: "center", gap: 5 }}
            >
              Services <ChevronDown size={12} style={{ transition: "transform 0.2s", transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
            </a>
            {servicesOpen && (
              <div style={{ position: "absolute", top: "100%", left: 0, paddingTop: 8, zIndex: 200, minWidth: 220 }}>
              <div style={{
                background: "white",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                border: "1px solid #e2e8f0", borderRadius: 8, padding: "6px 0",
              }}>
                {serviceLinks.map(link => (
                  <a key={link.href} href={link.href} style={{ display: "block", padding: "9px 18px", color: "#334155", textDecoration: "none", fontSize: 14 }}
                    onMouseEnter={e => { e.currentTarget.style.background = "#f0f9ff"; e.currentTarget.style.color = TEAL; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#334155"; }}
                  >{link.label}</a>
                ))}
              </div>
              </div>
            )}
          </div>

          <a href="/who-we-are" style={{ color: "#e5e7eb", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>Who We Are</a>
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
          <a href="/who-we-are" style={{ display: "block", color: "#e5e7eb", textDecoration: "none", padding: "10px 0", fontSize: 15 }}>Who We Are</a>
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

function HomePage() {
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
      <section style={{ background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 55%, #0d3050 100%)", padding: "80px 24px 72px 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -60, top: -80, width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(55,181,230,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", left: -60, bottom: -60, width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(55,181,230,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", position: "relative" }} className="hero-grid">
          <div>
            <h1 style={{ color: "white", fontSize: 52, fontWeight: 800, lineHeight: 1.1, margin: "0 0 20px", letterSpacing: "-0.02em" }}>
              Technology That{" "}
              <span style={{ color: TEAL }}>Works For You.</span>
            </h1>
            <p style={{ color: "#94a3b8", fontSize: 17, lineHeight: 1.7, margin: "0 0 32px" }}>
              From quick walk-in computer repairs to comprehensive managed IT services — QPCTech keeps local residents and businesses running smoothly, securely, and efficiently.
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
      <div style={{ background: TEAL, padding: "28px 24px 28px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "center", gap: 160, textAlign: "center" }} className="stats-grid">
          {stats.map(s => (
            <div key={s.value}>
              <div style={{ color: "white", fontSize: 32, fontWeight: 800, lineHeight: 1 }}>{s.value}</div>
              <div style={{ color: "rgba(255,255,255,0.85)", fontSize: 13, marginTop: 4, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── IN STORE SERVICES ── */}
      <section id="services" style={{ padding: "80px 24px 80px 0", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ width: 40, height: 4, background: `linear-gradient(to right, #0c4a6e, ${TEAL})`, borderRadius: 2, marginBottom: 16 }} />
            <h2 style={{ color: "#0f172a", fontSize: 32, fontWeight: 800, margin: "0 0 10px", letterSpacing: "-0.02em" }}>In Store Services</h2>
            <p style={{ color: "#111827", fontSize: 16, margin: 0 }}>Walk in and we'll take care of the rest — no appointment needed for most services.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="services-grid">
            {services.map((s, i) => (
              <div key={i} style={{ background: "#f8fafc", borderRadius: 12, padding: "28px 24px", border: "1px solid #e2e8f0", borderLeft: `4px solid ${TEAL}`, display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "white", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.06)", flexShrink: 0 }}>
                  <s.Icon size={20} color={TEAL} />
                </div>
                <h3 style={{ color: "#111827", fontSize: 15, fontWeight: 700, margin: 0, lineHeight: 1.3 }}>
                  {s.link
                    ? <a href={s.link} target="_blank" rel="noreferrer" style={{ color: "#111827", textDecoration: "none" }}>{s.title}</a>
                    : s.title
                  }
                </h3>
                <p style={{ color: "#111827", fontSize: 13, lineHeight: 1.7, margin: 0, flex: 1 }}>{s.desc}</p>
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
      <section style={{ padding: "0 24px 80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #0c4a6e 100%)", borderRadius: 16, padding: "48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}>
          <div>
            <h2 style={{ color: "white", fontSize: 26, fontWeight: 800, margin: "0 0 8px" }}>Need Reliable IT Support or Computer Repair?</h2>
            <p style={{ color: "#94a3b8", fontSize: 15, margin: 0 }}>
              Whether you're a local business looking for managed IT or a neighbor needing a quick computer fix, we're here to help. Call us at{" "}
              <a href="tel:5176105372" style={{ color: TEAL, textDecoration: "none", fontWeight: 700 }}>(517) 610-5372</a>
              {" "}or stop by our Hillsdale office today!
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
      <section style={{ padding: "80px 24px 80px 0", background: "#f8fafc" }}>
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

      <Footer />

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

function Footer() {
  return (
    <footer style={{ background: "#0f172a", color: "#64748b", padding: "56px 24px 0 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, paddingBottom: 48 }} className="footer-grid">
        <div>
          <img src="https://www.qpctech.com/wp-content/uploads/2024/03/cropped-QPCTech-logo.png" alt="QPCTech" style={{ height: 48, marginBottom: 16 }} />
          <p style={{ fontSize: 14, lineHeight: 1.7, margin: "0 0 20px" }}>Managed IT services for southern Michigan businesses — trusted by 1000+ local clients.</p>
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
            <a key={link.href} href={link.href}
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
  );
}

function NetworkInfrastructurePage() {
  return (
    <div style={{ fontFamily: "'Roboto', sans-serif", color: "#1e293b", overflowX: "hidden" }}>
      <Header />

      {/* ── PAGE HERO ── */}
      <section style={{ background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 55%, #0d3050 100%)", padding: "72px 24px 72px 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -60, top: -80, width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(55,181,230,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <a href="/" style={{ color: "#94a3b8", fontSize: 13, textDecoration: "none" }}>Home</a>
            <span style={{ color: "#475569" }}>›</span>
            <span style={{ color: "#94a3b8", fontSize: 13 }}>Services</span>
            <span style={{ color: "#475569" }}>›</span>
            <span style={{ color: TEAL, fontSize: 13, fontWeight: 600 }}>Network Infrastructure</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <Network size={22} color={TEAL} />
            <span style={{ color: TEAL, fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Business Services</span>
          </div>
          <h1 style={{ color: "white", fontSize: 48, fontWeight: 800, margin: "0 0 16px", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Network Infrastructure
          </h1>
          <p style={{ color: "#94a3b8", fontSize: 17, lineHeight: 1.7, maxWidth: 600, margin: 0 }}>
            Building and maintaining reliable, scalable networks for businesses across southern Michigan — from small offices to industrial facilities.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section style={{ background: "white", padding: "80px 24px 80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="hero-grid">

            {/* Left — Our Approach */}
            <div>
              <div style={{ width: 40, height: 4, background: `linear-gradient(to right, #0c4a6e, ${TEAL})`, borderRadius: 2, marginBottom: 20 }} />
              <h2 style={{ color: "#0f172a", fontSize: 30, fontWeight: 800, margin: "0 0 8px", letterSpacing: "-0.02em" }}>Our Approach</h2>
              <p style={{ color: "#334155", fontSize: 16, lineHeight: 1.8, margin: "0 0 32px" }}>
                Our technicians and contractors have experience in Industrial, Residential, Hospitality and Healthcare installations and maintenance of all aspects of any network project.
              </p>
              <div style={{ background: "#f0f9ff", borderRadius: 12, padding: "24px", border: `1px solid ${TEAL}30`, marginBottom: 32 }}>
                <p style={{ color: "#0f172a", fontWeight: 700, fontSize: 15, margin: "0 0 8px" }}>Ready for a quote?</p>
                <p style={{ color: "#475569", fontSize: 14, margin: "0 0 16px" }}>Contact us and we'll assess your needs and provide a detailed estimate.</p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a href="tel:5176105372" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: TEAL, color: "white", padding: "10px 22px", borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
                    <Phone size={14} /> (517) 610-5372
                  </a>
                  <a href="mailto:support@qpctech.com" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "white", color: "#0f172a", padding: "10px 22px", borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: "none", border: "1px solid #e2e8f0" }}>
                    <Mail size={14} /> Email Us
                  </a>
                </div>
              </div>
            </div>

            {/* Right — What We Cover */}
            <div style={{ background: "#f8fafc", borderRadius: 16, padding: "36px", border: "1px solid #e2e8f0", borderLeft: `4px solid ${TEAL}` }}>
              <p style={{ color: "#0f172a", fontWeight: 800, fontSize: 18, margin: "0 0 24px" }}>What We Cover</p>
              {[
                "Indoor, Outdoor and Industrial Cabling",
                "Wireless Access Points",
                "Router and Firewall",
                "Switch Configuration & Setup",
                "Recertification of Existing Cables",
                "New Installation or Datacenter Make-Over",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 16 }}>
                  <CheckCircle size={20} color={TEAL} style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ color: "#1e293b", fontSize: 15, lineHeight: 1.5, fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}

function CybersecurityPage() {
  return (
    <div style={{ fontFamily: "'Roboto', sans-serif", color: "#1e293b", overflowX: "hidden" }}>
      <Header />

      {/* ── PAGE HERO ── */}
      <section style={{ background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 55%, #0d3050 100%)", padding: "72px 24px 72px 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -60, top: -80, width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(55,181,230,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <a href="/" style={{ color: "#94a3b8", fontSize: 13, textDecoration: "none" }}>Home</a>
            <span style={{ color: "#475569" }}>›</span>
            <span style={{ color: "#94a3b8", fontSize: 13 }}>Services</span>
            <span style={{ color: "#475569" }}>›</span>
            <span style={{ color: TEAL, fontSize: 13, fontWeight: 600 }}>Cybersecurity</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <Shield size={22} color={TEAL} />
            <span style={{ color: TEAL, fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Business Services</span>
          </div>
          <h1 style={{ color: "white", fontSize: 48, fontWeight: 800, margin: "0 0 16px", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Cybersecurity
          </h1>
          <p style={{ color: "#94a3b8", fontSize: 17, lineHeight: 1.7, maxWidth: 600, margin: 0 }}>
            Protect your business with comprehensive cybersecurity solutions — from managed antivirus and patch management to emerging security standards.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section style={{ background: "white", padding: "80px 24px 80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="hero-grid">

            {/* Left — Our Approach */}
            <div>
              <div style={{ width: 40, height: 4, background: `linear-gradient(to right, #0c4a6e, ${TEAL})`, borderRadius: 2, marginBottom: 20 }} />
              <h2 style={{ color: "#0f172a", fontSize: 30, fontWeight: 800, margin: "0 0 8px", letterSpacing: "-0.02em" }}>Our Approach</h2>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}>
                QPC has acquired many perspectives over the years helping small and large business customers across multiple industries such as Healthcare, Finance, Retail, Energy, Education, Non-profit, and Government. We have committed significant time to studying current and emerging governance such as CMMC, HIPAA, GLBA, PCI and other important security standards.
              </p>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}>
                We recommend <strong>Managed Antivirus</strong> powered by Huntress Labs — a globally recognized leader whose comprehensive approach captures known and unknown malware before it delivers its payload, saving our customers untold hours and dollars.
              </p>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.8, margin: "0 0 32px" }}>
                <strong>Patch Management</strong> via NinjaOne delivers Windows updates and third-party software patches, while also blacklisting nuisance or near-malicious software that adds no value and may increase your threat exposure.
              </p>
              <div style={{ background: "#f0f9ff", borderRadius: 12, padding: "24px", border: `1px solid ${TEAL}30` }}>
                <p style={{ color: "#0f172a", fontWeight: 700, fontSize: 15, margin: "0 0 8px" }}>Ready to secure your business?</p>
                <p style={{ color: "#475569", fontSize: 14, margin: "0 0 16px" }}>Contact us for a security assessment and tailored recommendations.</p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a href="tel:5176105372" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: TEAL, color: "white", padding: "10px 22px", borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
                    <Phone size={14} /> (517) 610-5372
                  </a>
                  <a href="mailto:support@qpctech.com" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "white", color: "#0f172a", padding: "10px 22px", borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: "none", border: "1px solid #e2e8f0" }}>
                    <Mail size={14} /> Email Us
                  </a>
                </div>
              </div>
            </div>

            {/* Right — What We Cover */}
            <div style={{ background: "#f8fafc", borderRadius: 16, padding: "36px", border: "1px solid #e2e8f0", borderLeft: `4px solid ${TEAL}` }}>
              <p style={{ color: "#0f172a", fontWeight: 800, fontSize: 18, margin: "0 0 24px" }}>What We Cover</p>
              {[
                "Current & Emerging Cybersecurity",
                "Small & Large Businesses",
                "Security Standards (CMMC, HIPAA, GLBA, PCI)",
                "Managed Antivirus",
                "Patch Management",
                "NinjaOne RMM",
                "Huntress Managed EDR",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 16 }}>
                  <CheckCircle size={20} color={TEAL} style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ color: "#1e293b", fontSize: 15, lineHeight: 1.5, fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}

function ManagedITPage() {
  const apps = [
    "AutoDesk AutoCAD", "BlackMagic", "BrightTree", "CamWorks", "CompuLink",
    "GageTrack", "Hypertherm ProNest", "Infor Visual Manufacturing", "JobBoss",
    "MS SQL Server", "MS Teams", "MS Windows BitLocker", "Peachtree Accounting",
    "QuickBooks", "Sage Accounting", "SharePoint", "SolidWorks", "Synology",
    "Thompson Reuters", "WINrx", "Zoom",
  ];
  return (
    <div style={{ fontFamily: "'Roboto', sans-serif", color: "#1e293b", overflowX: "hidden" }}>
      <Header />

      {/* ── PAGE HERO ── */}
      <section style={{ background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 55%, #0d3050 100%)", padding: "72px 24px 72px 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -60, top: -80, width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(55,181,230,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <a href="/" style={{ color: "#94a3b8", fontSize: 13, textDecoration: "none" }}>Home</a>
            <span style={{ color: "#475569" }}>›</span>
            <span style={{ color: "#94a3b8", fontSize: 13 }}>Services</span>
            <span style={{ color: "#475569" }}>›</span>
            <span style={{ color: TEAL, fontSize: 13, fontWeight: 600 }}>Managed IT Systems</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <Cpu size={22} color={TEAL} />
            <span style={{ color: TEAL, fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Business Services</span>
          </div>
          <h1 style={{ color: "white", fontSize: 48, fontWeight: 800, margin: "0 0 16px", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Managed IT Systems
          </h1>
          <p style={{ color: "#94a3b8", fontSize: 17, lineHeight: 1.7, maxWidth: 600, margin: 0 }}>
            We can optimize and manage your IT systems with tailored solutions for businesses of all sizes — from hardware and servers to backups and business applications.
          </p>
        </div>
      </section>

      {/* ── APPROACH + CHECKLIST ── */}
      <section style={{ background: "white", padding: "80px 24px 64px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="hero-grid">

            {/* Left — Approach */}
            <div>
              <div style={{ width: 40, height: 4, background: `linear-gradient(to right, #0c4a6e, ${TEAL})`, borderRadius: 2, marginBottom: 20 }} />
              <h2 style={{ color: "#0f172a", fontSize: 30, fontWeight: 800, margin: "0 0 20px", letterSpacing: "-0.02em" }}>Approach to IT Systems</h2>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}>
                <strong>Hardware</strong> — QPC technicians have more than 60 years of combined experience across all areas of IT. Our guiding axiom: <em>"High-value IT Service Delivery begins with careful IT Service Design."</em> Our customers get the most value when they spend time being proactive, not reactive.
              </p>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}>
                <strong>Platform</strong> — QPCTech can manage your server platform whether it is a physical server, virtualized server, or a cloud-hosted virtual server, keeping it healthy and delivering business value reliably.
              </p>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}>
                <strong>Backups</strong> — We design automated and monitored backups for clients both onsite and in the cloud. For customers who prefer to stay out of the cloud, we provide Network Attached Storage (NAS) solutions via Synology — running entirely on your hardware and your terms.
              </p>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                <strong>Applications</strong> — QPCTech supports a large and growing catalog of business applications, and can help you stay on top of licensing, software updates, and patch management.
              </p>
            </div>

            {/* Right — What We Cover */}
            <div style={{ background: "#f8fafc", borderRadius: 16, padding: "36px", border: "1px solid #e2e8f0", borderLeft: `4px solid ${TEAL}` }}>
              <p style={{ color: "#0f172a", fontWeight: 800, fontSize: 18, margin: "0 0 24px" }}>What We Cover</p>
              {[
                "Hardware Procurement & Setup",
                "Server Platform Management",
                "Business Applications Support",
                "Automated Onsite & Cloud Backups",
                "NAS (Network Attached Storage) Devices",
                "Licensing & Software Updates",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 16 }}>
                  <CheckCircle size={20} color={TEAL} style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ color: "#1e293b", fontSize: 15, lineHeight: 1.5, fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Q-BITS PACKAGE ── */}
      <section style={{ background: "#f8fafc", padding: "64px 24px 64px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }} className="hero-grid">
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `${TEAL}18`, border: `1px solid ${TEAL}40`, borderRadius: 20, padding: "4px 14px", marginBottom: 16 }}>
                <span style={{ color: TEAL, fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Our IT Management Package</span>
              </div>
              <h2 style={{ color: "#0f172a", fontSize: 30, fontWeight: 800, margin: "0 0 12px", letterSpacing: "-0.02em" }}>Q-BITS</h2>
              <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.8, margin: "0 0 28px" }}>
                Q-BITS is our all-in-one IT management package combining <strong>NinjaOne</strong> for patching and remote support with <strong>Huntress</strong> for managed antivirus — keeping your endpoints secure and your systems running smoothly.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="tel:5176105372" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: TEAL, color: "white", padding: "10px 22px", borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
                  <Phone size={14} /> (517) 610-5372
                </a>
                <a href="mailto:support@qpctech.com" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "white", color: "#0f172a", padding: "10px 22px", borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: "none", border: "1px solid #e2e8f0" }}>
                  <Mail size={14} /> Email Us
                </a>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div style={{ background: "white", borderRadius: 12, padding: "24px", border: "1px solid #e2e8f0", borderTop: `3px solid ${TEAL}` }}>
                <p style={{ color: "#0f172a", fontWeight: 800, fontSize: 15, margin: "0 0 12px" }}>NinjaOne RMM</p>
                {["Endpoint management", "Remote support", "Patching", "Scripting"].map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <CheckCircle size={14} color={TEAL} style={{ flexShrink: 0 }} />
                    <span style={{ color: "#475569", fontSize: 13 }}>{f}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: "white", borderRadius: 12, padding: "24px", border: "1px solid #e2e8f0", borderTop: `3px solid ${TEAL}` }}>
                <p style={{ color: "#0f172a", fontWeight: 800, fontSize: 15, margin: "0 0 12px" }}>Huntress EDR</p>
                {["Managed antivirus", "Threat detection", "Malware prevention", "24/7 SOC"].map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <CheckCircle size={14} color={TEAL} style={{ flexShrink: 0 }} />
                    <span style={{ color: "#475569", fontSize: 13 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUPPORTED APPLICATIONS ── */}
      <section style={{ background: "white", padding: "64px 24px 80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ width: 40, height: 4, background: `linear-gradient(to right, #0c4a6e, ${TEAL})`, borderRadius: 2, marginBottom: 16 }} />
          <h2 style={{ color: "#0f172a", fontSize: 26, fontWeight: 800, margin: "0 0 6px" }}>Supported Applications</h2>
          <p style={{ color: "#64748b", fontSize: 15, margin: "0 0 32px" }}>A sample of the business software we support and manage for our clients.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {apps.map(app => (
              <span key={app} style={{ background: "#f1f5f9", color: "#1e293b", fontSize: 13, fontWeight: 500, padding: "6px 14px", borderRadius: 20, border: "1px solid #e2e8f0" }}>{app}</span>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}

function PhoneSystemsPage() {
  return (
    <div style={{ fontFamily: "'Roboto', sans-serif", color: "#1e293b", overflowX: "hidden" }}>
      <Header />

      {/* ── PAGE HERO ── */}
      <section style={{ background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 55%, #0d3050 100%)", padding: "72px 24px 72px 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -60, top: -80, width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(55,181,230,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <a href="/" style={{ color: "#94a3b8", fontSize: 13, textDecoration: "none" }}>Home</a>
            <span style={{ color: "#475569" }}>›</span>
            <span style={{ color: "#94a3b8", fontSize: 13 }}>Services</span>
            <span style={{ color: "#475569" }}>›</span>
            <span style={{ color: TEAL, fontSize: 13, fontWeight: 600 }}>Phone Systems</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <Phone size={22} color={TEAL} />
            <span style={{ color: TEAL, fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Business Services</span>
          </div>
          <h1 style={{ color: "white", fontSize: 48, fontWeight: 800, margin: "0 0 16px", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Phone Systems
          </h1>
          <p style={{ color: "#94a3b8", fontSize: 17, lineHeight: 1.7, maxWidth: 600, margin: 0 }}>
            Upgrade your communication with cost-effective VoIP solutions designed for seamless business connectivity — tailored to your organization, not the other way around.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section style={{ background: "white", padding: "80px 24px 80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="hero-grid">

            {/* Left — Our Approach */}
            <div>
              <div style={{ width: 40, height: 4, background: `linear-gradient(to right, #0c4a6e, ${TEAL})`, borderRadius: 2, marginBottom: 20 }} />
              <h2 style={{ color: "#0f172a", fontSize: 30, fontWeight: 800, margin: "0 0 16px", letterSpacing: "-0.02em" }}>Our Approach</h2>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}>
                "Simple" landlines are becoming unsustainably expensive. Voice over IP (VoIP) phones offer tremendous savings over conventional phone systems, and we have assisted many Michigan businesses through this transition. In our experience, one size does not fit all organizations.
              </p>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.8, margin: "0 0 32px" }}>
                It's easy to find a "phone guy" eager to change your entire business process to fit his system. At QPCTech we take a different approach — drawing from experience with several VoIP vendors, we help you find the right solution with the right features for your specific requirements, and provide tech support throughout the entire transition.
              </p>
              <div style={{ background: "#f0f9ff", borderRadius: 12, padding: "24px", border: `1px solid ${TEAL}30` }}>
                <p style={{ color: "#0f172a", fontWeight: 700, fontSize: 15, margin: "0 0 8px" }}>Ready to modernize your phones?</p>
                <p style={{ color: "#475569", fontSize: 14, margin: "0 0 16px" }}>We'll assess your current setup and recommend the right VoIP solution for your business.</p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a href="tel:5176105372" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: TEAL, color: "white", padding: "10px 22px", borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
                    <Phone size={14} /> (517) 610-5372
                  </a>
                  <a href="mailto:support@qpctech.com" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "white", color: "#0f172a", padding: "10px 22px", borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: "none", border: "1px solid #e2e8f0" }}>
                    <Mail size={14} /> Email Us
                  </a>
                </div>
              </div>
            </div>

            {/* Right — What We Cover */}
            <div style={{ background: "#f8fafc", borderRadius: 16, padding: "36px", border: "1px solid #e2e8f0", borderLeft: `4px solid ${TEAL}` }}>
              <p style={{ color: "#0f172a", fontWeight: 800, fontSize: 18, margin: "0 0 24px" }}>What We Cover</p>
              {[
                "Tailored VoIP Solution",
                "Integration with Analog Phones",
                "Cost Savings Over Landlines",
                "Vendor Agnostic Approach",
                "Initial VoIP Project Management",
                "Ongoing VoIP Tech Support",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 16 }}>
                  <CheckCircle size={20} color={TEAL} style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ color: "#1e293b", fontSize: 15, lineHeight: 1.5, fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}

function PhysicalSecurityPage() {
  return (
    <div style={{ fontFamily: "'Roboto', sans-serif", color: "#1e293b", overflowX: "hidden" }}>
      <Header />

      {/* ── PAGE HERO ── */}
      <section style={{ background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 55%, #0d3050 100%)", padding: "72px 24px 72px 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -60, top: -80, width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(55,181,230,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <a href="/" style={{ color: "#94a3b8", fontSize: 13, textDecoration: "none" }}>Home</a>
            <span style={{ color: "#475569" }}>›</span>
            <span style={{ color: "#94a3b8", fontSize: 13 }}>Services</span>
            <span style={{ color: "#475569" }}>›</span>
            <span style={{ color: TEAL, fontSize: 13, fontWeight: 600 }}>Physical Security</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <KeyRound size={22} color={TEAL} />
            <span style={{ color: TEAL, fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Business Services</span>
          </div>
          <h1 style={{ color: "white", fontSize: 48, fontWeight: 800, margin: "0 0 16px", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Physical Security
          </h1>
          <p style={{ color: "#94a3b8", fontSize: 17, lineHeight: 1.7, maxWidth: 600, margin: 0 }}>
            Secure your business with state-of-the-art physical security systems — surveillance cameras, burglar alarms, and access control installed by Michigan-licensed contractors.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section style={{ background: "white", padding: "80px 24px 80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="hero-grid">

            {/* Left — Approach */}
            <div>
              <div style={{ width: 40, height: 4, background: `linear-gradient(to right, #0c4a6e, ${TEAL})`, borderRadius: 2, marginBottom: 20 }} />
              <h2 style={{ color: "#0f172a", fontSize: 30, fontWeight: 800, margin: "0 0 16px", letterSpacing: "-0.02em" }}>Approach to Physical Security</h2>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}>
                <strong>Surveillance Cameras</strong> — Like phones, cameras have become far more affordable. But the camera is often the easy part — the video management application is what separates the good solutions from the bad. Our technicians and expert contractors will talk through your requirements and select the right solution for your growing business. Buyer beware: today's marketplace is full of popular solutions that do not pass NIST Cybersecurity Certification, which could be compromising the security of your customers.
              </p>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.8, margin: "0 0 32px" }}>
                <strong>Burglar Alarms and Building Access Control</strong> — QPC's expert contractors are licensed by the State of Michigan to provide installation and service of these critical security technologies. Before you resign yourself to a DIY solution, give us a call — we'd love to help you define your strategy and make sure your investment holds up to the challenge.
              </p>
              <div style={{ background: "#f0f9ff", borderRadius: 12, padding: "24px", border: `1px solid ${TEAL}30` }}>
                <p style={{ color: "#0f172a", fontWeight: 700, fontSize: 15, margin: "0 0 8px" }}>Ready to secure your facility?</p>
                <p style={{ color: "#475569", fontSize: 14, margin: "0 0 16px" }}>Call us for a free consultation and we'll help you build the right security strategy.</p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a href="tel:5176105372" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: TEAL, color: "white", padding: "10px 22px", borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
                    <Phone size={14} /> (517) 610-5372
                  </a>
                  <a href="mailto:support@qpctech.com" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "white", color: "#0f172a", padding: "10px 22px", borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: "none", border: "1px solid #e2e8f0" }}>
                    <Mail size={14} /> Email Us
                  </a>
                </div>
              </div>
            </div>

            {/* Right — What We Cover */}
            <div style={{ background: "#f8fafc", borderRadius: 16, padding: "36px", border: "1px solid #e2e8f0", borderLeft: `4px solid ${TEAL}` }}>
              <p style={{ color: "#0f172a", fontWeight: 800, fontSize: 18, margin: "0 0 24px" }}>What We Cover</p>
              {[
                "Surveillance Cameras",
                "Video Management Systems",
                "NIST-Certified Solutions",
                "Burglar Alarms",
                "Building Access Control Systems",
                "Licensed by the State of Michigan",
                "Security Strategy Consultation",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 16 }}>
                  <CheckCircle size={20} color={TEAL} style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ color: "#1e293b", fontSize: 15, lineHeight: 1.5, fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}

function PrintingAndScanningPage() {
  return (
    <div style={{ fontFamily: "'Roboto', sans-serif", color: "#1e293b", overflowX: "hidden" }}>
      <Header />

      {/* ── PAGE HERO ── */}
      <section style={{ background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 55%, #0d3050 100%)", padding: "72px 24px 72px 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -60, top: -80, width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(55,181,230,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <a href="/" style={{ color: "#94a3b8", fontSize: 13, textDecoration: "none" }}>Home</a>
            <span style={{ color: "#475569" }}>›</span>
            <span style={{ color: "#94a3b8", fontSize: 13 }}>Services</span>
            <span style={{ color: "#475569" }}>›</span>
            <span style={{ color: TEAL, fontSize: 13, fontWeight: 600 }}>Printing &amp; Scanning</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <Printer size={22} color={TEAL} />
            <span style={{ color: TEAL, fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Business Services</span>
          </div>
          <h1 style={{ color: "white", fontSize: 48, fontWeight: 800, margin: "0 0 16px", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Printing &amp; Scanning
          </h1>
          <p style={{ color: "#94a3b8", fontSize: 17, lineHeight: 1.7, maxWidth: 600, margin: 0 }}>
            Simplify office workflows with managed printing and scanning solutions that save time and resources — backed by over 3 decades of hands-on IT experience.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section style={{ background: "white", padding: "80px 24px 80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="hero-grid">

            {/* Left — Approach */}
            <div>
              <div style={{ width: 40, height: 4, background: `linear-gradient(to right, #0c4a6e, ${TEAL})`, borderRadius: 2, marginBottom: 20 }} />
              <h2 style={{ color: "#0f172a", fontSize: 30, fontWeight: 800, margin: "0 0 16px", letterSpacing: "-0.02em" }}>Approach to Printing and Scanning</h2>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}>
                With over 3 decades of IT experience, QPC's technicians have seen the good, the bad, and the ugly when it comes to printers. Not all printers are created equal and not all customers have the same expectations. We take a vendor-agnostic approach, but we can advise based on what we've seen in the trenches — similarly with scanners and document management applications.
              </p>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.8, margin: "0 0 32px" }}>
                With a large portion of our client base in healthcare and financial industries, we understand the need for a thoughtful document management workflow with appropriate security and backups.
              </p>
              <div style={{ background: "#f0f9ff", borderRadius: 12, padding: "24px", border: `1px solid ${TEAL}30` }}>
                <p style={{ color: "#0f172a", fontWeight: 700, fontSize: 15, margin: "0 0 8px" }}>Not sure what you need?</p>
                <p style={{ color: "#475569", fontSize: 14, margin: "0 0 16px" }}>We'll assess your current setup and recommend a solution that fits your workflow and budget.</p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a href="tel:5176105372" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: TEAL, color: "white", padding: "10px 22px", borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
                    <Phone size={14} /> (517) 610-5372
                  </a>
                  <a href="mailto:support@qpctech.com" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "white", color: "#0f172a", padding: "10px 22px", borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: "none", border: "1px solid #e2e8f0" }}>
                    <Mail size={14} /> Email Us
                  </a>
                </div>
              </div>
            </div>

            {/* Right — What We Cover */}
            <div style={{ background: "#f8fafc", borderRadius: 16, padding: "36px", border: "1px solid #e2e8f0", borderLeft: `4px solid ${TEAL}` }}>
              <p style={{ color: "#0f172a", fontWeight: 800, fontSize: 18, margin: "0 0 24px" }}>What We Cover</p>
              {[
                "Vendor Agnostic Approach",
                "Printers for Every Budget & Use Case",
                "Scanners and Document Management Applications",
                "Document Management Workflow",
                "Security and Backups",
                "Healthcare & Financial Industry Expertise",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 16 }}>
                  <CheckCircle size={20} color={TEAL} style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ color: "#1e293b", fontSize: 15, lineHeight: 1.5, fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}

function CommunityWorkPage() {
  return (
    <div style={{ fontFamily: "'Roboto', sans-serif", color: "#1e293b", overflowX: "hidden" }}>
      <Header />

      {/* ── PAGE HERO ── */}
      <section style={{ background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 55%, #0d3050 100%)", padding: "72px 24px 72px 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -60, top: -80, width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(55,181,230,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <a href="/" style={{ color: "#94a3b8", fontSize: 13, textDecoration: "none" }}>Home</a>
            <span style={{ color: "#475569" }}>›</span>
            <span style={{ color: "#94a3b8", fontSize: 13 }}>Services</span>
            <span style={{ color: "#475569" }}>›</span>
            <span style={{ color: TEAL, fontSize: 13, fontWeight: 600 }}>Community Work</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <Users size={22} color={TEAL} />
            <span style={{ color: TEAL, fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Community</span>
          </div>
          <h1 style={{ color: "white", fontSize: 48, fontWeight: 800, margin: "0 0 16px", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Community Work
          </h1>
          <p style={{ color: "#94a3b8", fontSize: 17, lineHeight: 1.7, maxWidth: 600, margin: 0 }}>
            Supporting nonprofits, schools, and career centers with reliable IT solutions — because great technology shouldn't be out of reach for organizations doing important work.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section style={{ background: "white", padding: "80px 24px 80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="hero-grid">

            {/* Left — Mission */}
            <div>
              <div style={{ width: 40, height: 4, background: `linear-gradient(to right, #0c4a6e, ${TEAL})`, borderRadius: 2, marginBottom: 20 }} />
              <h2 style={{ color: "#0f172a", fontSize: 30, fontWeight: 800, margin: "0 0 16px", letterSpacing: "-0.02em" }}>Our Mission... is to enable your Mission.</h2>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}>
                We have coordinated the giving of local enterprise businesses whose purpose is to grant their disused IT assets for the benefit of local non-profit organizations. We have coordinated the reuse of hundreds of laptops, desktop computers, monitors, switches, and more.
              </p>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}>
                By reusing enterprise IT equipment that is only a few years old, we can provide an "economy of scale" for PC support to the non-profit customer. Often a used enterprise PC is of considerably higher quality than a PC that would otherwise be within the budget of a non-profit.
              </p>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.8, margin: "0 0 32px" }}>
                Given the "corporate standard" nature of available used IT assets, the upkeep cost on these computers is much lower than a "sale of the week" machine from a big-box store. It has been our privilege to work with the Jackson Area Career Center and Hillsdale Area Career Center students — both on the job and in schools — to train the next generation of IT consultants.
              </p>
              <div style={{ background: "#f0f9ff", borderRadius: 12, padding: "24px", border: `1px solid ${TEAL}30` }}>
                <p style={{ color: "#0f172a", fontWeight: 700, fontSize: 15, margin: "0 0 8px" }}>Is your organization eligible?</p>
                <p style={{ color: "#475569", fontSize: 14, margin: "0 0 16px" }}>Reach out and let us know what you do — we'd love to see how we can help.</p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a href="tel:5176105372" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: TEAL, color: "white", padding: "10px 22px", borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
                    <Phone size={14} /> (517) 610-5372
                  </a>
                  <a href="mailto:support@qpctech.com" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "white", color: "#0f172a", padding: "10px 22px", borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: "none", border: "1px solid #e2e8f0" }}>
                    <Mail size={14} /> Email Us
                  </a>
                </div>
              </div>
            </div>

            {/* Right — What We Do */}
            <div style={{ background: "#f8fafc", borderRadius: 16, padding: "36px", border: "1px solid #e2e8f0", borderLeft: `4px solid ${TEAL}` }}>
              <p style={{ color: "#0f172a", fontWeight: 800, fontSize: 18, margin: "0 0 24px" }}>What We Do</p>
              {[
                "Non-Profit IT Support",
                "Enterprise IT Asset Disposition",
                "Sustainability & Equipment Reuse",
                "Corporate Giving Coordination",
                "On the Job Training",
                "Career Center Partnerships",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 16 }}>
                  <CheckCircle size={20} color={TEAL} style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ color: "#1e293b", fontSize: 15, lineHeight: 1.5, fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}

const teamMembers = [
  {
    name: "Tim Lindley",
    title: "Owner / Senior Technician",
    bio: "Tim attended Jackson College, Spring Arbor University, and New Tribes Bible Institute.",
    certs: ["MS Certified Technology Specialist", "MCTS 70-673", "MCTS 4-678", "ITIL V3 Foundations"],
    photo: "/tim-lindley.jpg",
    photoPosition: "center 45%",
  },
  {
    name: "Kimberly Lindley",
    title: "Office Manager",
    bio: "Experienced Bookkeeper with a Certified Background in Finance.",
    certs: [],
  },
  {
    name: "Rodney Weir",
    title: "Technician",
    bio: "Experienced Web Designer and Cloud Based Provider.",
    certs: ["ITF+", "TestOut PC Pro", "TestOut Security Pro", "TestOut Linux Pro", "TestOut Networking Pro", "TestOut CyberDefense Pro", "TestOut Ethical Hacker Pro"],
    photo: "/rodney-weir.jpg",
    photoPosition: "center 52%",
    photoFilter: "sepia(20%) saturate(1.4) brightness(1.05)",
  },
  {
    name: "Nolan Korman",
    title: "IT System Specialist",
    bio: "Experienced in Networking, Cloud-Based Services, and Administration.",
    certs: ["ITF+", "TestOut PC Pro", "TestOut Security Pro"],
    photo: "/nolan-korman.jpg",
    photoPosition: "center 30%",
  },
  {
    name: "Josh Hall",
    title: "Office Supervisor",
    bio: "Experienced Retail Advisor and Outstanding Hardware Technician.",
    certs: [],
    photo: "/josh-hall.jpg",
    photoPosition: "center 42%",
  },
  {
    name: "Mike Raker",
    title: "Technician",
    bio: "Experienced in NinjaOne Services and Sales.",
    certs: [],
    photo: "/mike-raker.jpg",
    photoPosition: "center 30%",
  },
];

function WhoWeArePage() {
  return (
    <div style={{ fontFamily: "'Roboto', sans-serif", color: "#1e293b", overflowX: "hidden" }}>
      <Header />

      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 55%, #0d3050 100%)", padding: "72px 24px 72px 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -60, top: -80, width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(55,181,230,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <a href="/" style={{ color: "#94a3b8", fontSize: 13, textDecoration: "none" }}>Home</a>
            <span style={{ color: "#475569" }}>›</span>
            <span style={{ color: TEAL, fontSize: 13, fontWeight: 600 }}>Who We Are</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <Users size={22} color={TEAL} />
            <span style={{ color: TEAL, fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Our Team</span>
          </div>
          <h1 style={{ color: "white", fontSize: 48, fontWeight: 800, margin: "0 0 16px", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Meet The Team
          </h1>
          <p style={{ color: "#94a3b8", fontSize: 17, lineHeight: 1.7, maxWidth: 660, margin: 0 }}>
            At QPCTech, our veteran staff embodies professionalism, honesty, integrity, and education. We work diligently to create and maintain a meaningful relationship with you — providing a more personal level of service.
          </p>
        </div>
      </section>

      {/* ── TEAM GRID ── */}
      <section style={{ background: "white", padding: "80px 24px 80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }} className="team-grid">
            {teamMembers.map(member => (
              <div key={member.name} style={{ background: "#f8fafc", borderRadius: 16, padding: "32px 28px", border: "1px solid #e2e8f0", borderTop: `4px solid ${TEAL}`, display: "flex", flexDirection: "column", gap: 12 }}>
                {/* Avatar — photo or initials */}
                {"photo" in member && member.photo ? (
                  <div style={{ width: 100, height: 100, borderRadius: "50%", overflow: "hidden", border: `3px solid ${TEAL}`, display: "block", margin: "0 auto 4px", flexShrink: 0 }}>
                    <img
                      src={member.photo}
                      alt={member.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: ("photoPosition" in member ? member.photoPosition : "center 45%") as string, filter: ("photoFilter" in member ? member.photoFilter : "none") as string }}
                    />
                  </div>
                ) : (
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: `linear-gradient(135deg, #0c4a6e, ${TEAL})`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 4 }}>
                    <span style={{ color: "white", fontWeight: 800, fontSize: 20, letterSpacing: "-0.02em" }}>
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                )}

                <div>
                  <h3 style={{ color: "#0f172a", fontSize: 19, fontWeight: 800, margin: "0 0 4px" }}>{member.name}</h3>
                  <p style={{ color: TEAL, fontSize: 13, fontWeight: 700, margin: 0, textTransform: "uppercase", letterSpacing: "0.06em" }}>{member.title}</p>
                </div>

                {member.bio && (
                  <p style={{ color: "#475569", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{member.bio}</p>
                )}

                {member.certs.length > 0 && (
                  <div>
                    <p style={{ color: "#0f172a", fontSize: 13, fontWeight: 700, margin: "0 0 8px" }}>Certifications</p>
                    {member.certs.map(cert => (
                      <div key={cert} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                        <CheckCircle size={14} color={TEAL} style={{ flexShrink: 0 }} />
                        <span style={{ color: "#334155", fontSize: 13 }}>{cert}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 1024px) { .team-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .team-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}

export default function App() {
  return (
    <Switch>
      <Route path="/network-infrastructure" component={NetworkInfrastructurePage} />
      <Route path="/cybersecurity" component={CybersecurityPage} />
      <Route path="/managed-it-systems" component={ManagedITPage} />
      <Route path="/phone-systems" component={PhoneSystemsPage} />
      <Route path="/physical-security" component={PhysicalSecurityPage} />
      <Route path="/printing-and-scanning" component={PrintingAndScanningPage} />
      <Route path="/community-work" component={CommunityWorkPage} />
      <Route path="/who-we-are" component={WhoWeArePage} />
      <Route component={HomePage} />
    </Switch>
  );
}
