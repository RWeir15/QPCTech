import { useState } from "react";
import { Switch, Route } from "wouter";
import {
  Wrench, Laptop, Monitor, Printer, KeyRound, Cpu, Bug, Tv2,
  ChevronDown, Menu, X, Phone, Mail, MapPin, ArrowRight,
  ArrowUpRight, Shield, Clock, Star, CheckCircle, Network, Users,
  Zap, HeartHandshake, Award,
} from "lucide-react";

const TEAL = "#37b5e6";
const TEAL2 = "#0ea5e9";
const REMOTE_URL = "https://qpctech.rmmservices.net/connect/#/9951961931";
const DARK = "#0f172a";

const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; }

  .service-card { transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease; }
  .service-card:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(55,181,230,0.14), 0 4px 16px rgba(0,0,0,0.07) !important; border-color: #37b5e6 !important; }

  .team-card { transition: transform 0.22s ease, box-shadow 0.22s ease; }
  .team-card:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(55,181,230,0.13), 0 4px 16px rgba(0,0,0,0.07) !important; }

  .trust-card { transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease; }
  .trust-card:hover { background: rgba(55,181,230,0.11) !important; border-color: rgba(55,181,230,0.35) !important; transform: translateY(-3px); }

  .why-card { transition: transform 0.22s ease, box-shadow 0.22s ease; }
  .why-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.08) !important; }

  .nav-link { position: relative; transition: color 0.18s ease; }
  .nav-link::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 2px; background: #37b5e6; border-radius: 2px; transition: width 0.2s ease; }
  .nav-link:hover { color: #37b5e6 !important; }
  .nav-link:hover::after { width: 100%; }

  .btn-teal { transition: opacity 0.18s, transform 0.18s, box-shadow 0.18s; }
  .btn-teal:hover { opacity: 0.88; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(55,181,230,0.38); }
`;

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
  { value: "1,000+", label: "Clients Served" },
  { value: "10+", label: "Years Experience" },
  { value: "100%", label: "Local Business" },
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

/* ────────────────────────────────────── HEADER ── */
function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header style={{ background: "#111827", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 80 }}>
        <a href="/" style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/logo.png"
            alt="QPCTech"
            style={{ height: 56, width: "auto" }}
          />
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="desktop-nav">
          <a href="/" className="nav-link" style={{ color: "#e5e7eb", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>Home</a>

          <div style={{ position: "relative" }} onMouseLeave={() => setServicesOpen(false)}>
            <a
              href="#"
              onClick={e => { e.preventDefault(); setServicesOpen(o => !o); }}
              className="nav-link"
              style={{ color: "#e5e7eb", textDecoration: "none", fontSize: 14, fontWeight: 500, display: "flex", alignItems: "center", gap: 5 }}
            >
              Services <ChevronDown size={12} style={{ transition: "transform 0.2s", transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
            </a>
            {servicesOpen && (
              <div style={{ position: "absolute", top: "100%", left: 0, paddingTop: 8, zIndex: 200, minWidth: 220 }}>
                <div style={{ background: "white", boxShadow: "0 8px 24px rgba(0,0,0,0.15)", border: "1px solid #e2e8f0", borderRadius: 8, padding: "6px 0" }}>
                  {serviceLinks.map(link => (
                    <a key={link.href} href={link.href}
                      style={{ display: "block", padding: "9px 18px", color: "#334155", textDecoration: "none", fontSize: 14, transition: "background 0.15s, color 0.15s" }}
                      onMouseEnter={e => { e.currentTarget.style.background = "#f0f9ff"; e.currentTarget.style.color = TEAL; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#334155"; }}
                    >{link.label}</a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a href="/who-we-are" className="nav-link" style={{ color: "#e5e7eb", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>Who We Are</a>
          <a href="/contact" className="nav-link" style={{ color: "#e5e7eb", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>Contact Us</a>
          <a
            href="https://qpctech.rmmservices.net/connect/#/9951961931"
            target="_blank"
            rel="noreferrer"
            className="btn-teal"
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
          <a href="/contact" style={{ display: "block", color: "#e5e7eb", textDecoration: "none", padding: "10px 0", fontSize: 15 }}>Contact Us</a>
          <a
            href="https://qpctech.rmmservices.net/connect/#/9951961931"
            target="_blank"
            rel="noreferrer"
            style={{ display: "inline-block", background: TEAL, color: "white", textDecoration: "none", fontSize: 15, borderRadius: 6, padding: "8px 22px", marginTop: 8, fontWeight: 600 }}
          >Remote Support</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) { .desktop-nav { display: none !important; } .mobile-menu-btn { display: block !important; } }
      `}</style>
    </header>
  );
}

/* ────────────────────────────────────── FOOTER ── */
function Footer() {
  return (
    <footer style={{ background: DARK, borderTop: `3px solid ${TEAL}`, color: "#64748b", padding: "56px 24px 0" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, paddingBottom: 48 }} className="footer-grid">
        <div>
          <img src="/logo.png" alt="QPCTech" style={{ height: 48, marginBottom: 18 }} />
          <p style={{ fontSize: 14, lineHeight: 1.75, margin: "0 0 20px", maxWidth: 280 }}>Managed IT services for southern Michigan businesses — trusted by 1,000+ local clients.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span style={{ color: "#4b5563", fontSize: 13 }}>37 Waldron St, Hillsdale, MI 49242</span>
            <a href="tel:5176105372" style={{ color: "#64748b", textDecoration: "none", fontSize: 13, display: "flex", alignItems: "center", gap: 6, transition: "color 0.18s" }}
              onMouseEnter={e => (e.currentTarget.style.color = TEAL)}
              onMouseLeave={e => (e.currentTarget.style.color = "#64748b")}
            ><Phone size={13} color={TEAL} />(517) 610-5372</a>
            <a href="mailto:support@qpctech.com" style={{ color: "#64748b", textDecoration: "none", fontSize: 13, display: "flex", alignItems: "center", gap: 6, transition: "color 0.18s" }}
              onMouseEnter={e => (e.currentTarget.style.color = TEAL)}
              onMouseLeave={e => (e.currentTarget.style.color = "#64748b")}
            ><Mail size={13} color={TEAL} />support@qpctech.com</a>
          </div>
        </div>
        <div>
          <p style={{ color: "#e2e8f0", fontWeight: 700, fontSize: 12, marginTop: 0, marginBottom: 16, letterSpacing: "0.07em", textTransform: "uppercase" }}>Services</p>
          {serviceLinks.map(link => (
            <a key={link.href} href={link.href} style={{ display: "block", color: "#64748b", textDecoration: "none", fontSize: 14, marginBottom: 9, transition: "color 0.18s" }}
              onMouseEnter={e => (e.currentTarget.style.color = TEAL)}
              onMouseLeave={e => (e.currentTarget.style.color = "#64748b")}
            >{link.label}</a>
          ))}
        </div>
        <div>
          <p style={{ color: "#e2e8f0", fontWeight: 700, fontSize: 12, marginTop: 0, marginBottom: 16, letterSpacing: "0.07em", textTransform: "uppercase" }}>Quick Links</p>
          {externalLinks.map(link => (
            <a key={link.href} href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
              style={{ display: "block", color: "#64748b", textDecoration: "none", fontSize: 14, marginBottom: 9, transition: "color 0.18s" }}
              onMouseEnter={e => (e.currentTarget.style.color = TEAL)}
              onMouseLeave={e => (e.currentTarget.style.color = "#64748b")}
            >{link.label}</a>
          ))}
        </div>
      </div>
      <div style={{ borderTop: "1px solid #1e293b", padding: "16px 0", textAlign: "center" }}>
        <p style={{ color: "#334155", fontSize: 13, margin: 0 }}>Copyright &copy; 2026 QPCTech &middot; All rights reserved</p>
      </div>
    </footer>
  );
}

/* ────────────────────────────── PAGE HERO (shared) ── */
function PageHero({ breadcrumb, label, icon: Icon, title, subtitle }: {
  breadcrumb: string;
  label: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
}) {
  return (
    <section style={{ background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 55%, #0d3050 100%)", padding: "72px 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
      <div style={{ position: "absolute", right: -60, top: -80, width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(55,181,230,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <a href="/" style={{ color: "#94a3b8", fontSize: 13, textDecoration: "none", transition: "color 0.18s" }}
            onMouseEnter={e => (e.currentTarget.style.color = TEAL)}
            onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}
          >Home</a>
          <span style={{ color: "#475569" }}>›</span>
          <span style={{ color: "#94a3b8", fontSize: 13 }}>Services</span>
          <span style={{ color: "#475569" }}>›</span>
          <span style={{ color: TEAL, fontSize: 13, fontWeight: 600 }}>{breadcrumb}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <Icon size={22} color={TEAL} />
          <span style={{ color: TEAL, fontSize: 12, fontWeight: 700, letterSpacing: "0.09em", textTransform: "uppercase" }}>{label}</span>
        </div>
        <h1 style={{ color: "white", fontSize: 48, fontWeight: 800, margin: "0 0 16px", letterSpacing: "-0.02em", lineHeight: 1.1 }}>{title}</h1>
        <p style={{ color: "#94a3b8", fontSize: 17, lineHeight: 1.7, maxWidth: 600, margin: 0 }}>{subtitle}</p>
      </div>
    </section>
  );
}

/* ────────────────────────────────── CONTACT CTA BOX ── */
function ContactBox({ headline, body }: { headline: string; body: string }) {
  return (
    <div style={{ background: "#f0f9ff", borderRadius: 12, padding: "24px", border: `1px solid ${TEAL}30` }}>
      <p style={{ color: "#0f172a", fontWeight: 700, fontSize: 15, margin: "0 0 8px" }}>{headline}</p>
      <p style={{ color: "#475569", fontSize: 14, margin: "0 0 16px" }}>{body}</p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <a href="tel:5176105372" className="btn-teal" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: TEAL, color: "white", padding: "10px 22px", borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
          <Phone size={14} /> (517) 610-5372
        </a>
        <a href="mailto:support@qpctech.com" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "white", color: "#0f172a", padding: "10px 22px", borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: "none", border: "1px solid #e2e8f0" }}>
          <Mail size={14} /> Email Us
        </a>
      </div>
    </div>
  );
}

/* ────────────────────────────────────── HOME PAGE ── */
const FALLBACK_REVIEWS = [
  { name: "Google Reviewer", date: "3 weeks ago", stars: 5, text: "I went to this company for a gaming PC — I personally didn't know much about PCs. They not only took the task of building my gaming rig, but they took the time to educate me. Mike was very knowledgeable and very respectful through the entire process." },
  { name: "Brenda Reed", date: "2 months ago", stars: 5, text: "Always friendly, knowledgeable, and helpful!" },
  { name: "Ashton St John", date: "1 year ago", stars: 5, text: "Excellent customer service and very efficient. Jeremy was fantastic — he took the time to explain what was wrong with my PC, and once the parts arrived, he had it fixed in under an hour. If I ever have another computer issue, this is where I'll go." },
];

function HomePage() {
  const displayReviews = FALLBACK_REVIEWS;
  const rating = 4.7;
  const total = 59;

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: "#1e293b", overflowX: "hidden" }}>
      <style>{GLOBAL_CSS}</style>
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
      <section style={{ background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 55%, #0d3050 100%)", padding: "88px 24px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: -80, top: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(55,181,230,0.13) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", left: -60, bottom: -60, width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(55,181,230,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", position: "relative" }} className="hero-grid">
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(55,181,230,0.15)", border: "1px solid rgba(55,181,230,0.3)", borderRadius: 20, padding: "5px 14px", marginBottom: 20 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: TEAL }} />
              <span style={{ color: TEAL, fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Hillsdale's IT Experts Since 2014</span>
            </div>
            <h1 style={{ color: "white", fontSize: 54, fontWeight: 900, lineHeight: 1.08, margin: "0 0 20px", letterSpacing: "-0.03em" }}>
              Technology That{" "}
              <span style={{ color: TEAL }}>Works For You.</span>
            </h1>
            <p style={{ color: "#94a3b8", fontSize: 17, lineHeight: 1.75, margin: "0 0 36px", maxWidth: 480 }}>
              From quick walk-in computer repairs to comprehensive managed IT services — QPCTech keeps local residents and businesses running smoothly, securely, and efficiently.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="#services" className="btn-teal" style={{ background: TEAL, color: "white", padding: "14px 30px", borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                View All Services <ArrowRight size={16} />
              </a>
              <a href="tel:5176105372" style={{ background: "transparent", color: "white", padding: "14px 28px", borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: "none", border: "2px solid rgba(255,255,255,0.22)", display: "inline-flex", alignItems: "center", gap: 8 }}>
                <Phone size={15} color={TEAL} /> Call Us Now
              </a>
            </div>
          </div>

          {/* Trust cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="trust-grid">
            {trust.map((t, i) => (
              <div key={i} className="trust-card" style={{ background: "rgba(255,255,255,0.06)", borderRadius: 14, padding: "22px", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 2px 12px rgba(0,0,0,0.2)" }}>
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

      {/* ── STATS BAR ── */}
      <div style={{ background: `linear-gradient(135deg, ${DARK} 0%, #0c4a6e 50%, #1e3a5f 100%)`, borderBottom: `2px solid ${TEAL}40`, padding: "36px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 20% 50%, ${TEAL}18 0%, transparent 50%), radial-gradient(circle at 80% 50%, ${TEAL2}12 0%, transparent 50%)`, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1400, margin: "0 auto", display: "flex", justifyContent: "center", position: "relative" }} className="stats-flex">
          {stats.map((s, i) => (
            <div key={s.value} style={{ flex: 1, maxWidth: 280, textAlign: "center", borderRight: i < stats.length - 1 ? `1px solid ${TEAL}30` : "none", padding: "0 24px" }}>
              <div style={{ background: `linear-gradient(135deg, ${TEAL}, ${TEAL2})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontSize: 42, fontWeight: 900, lineHeight: 1, letterSpacing: "-0.02em" }}>{s.value}</div>
              <div style={{ color: "#94a3b8", fontSize: 12, marginTop: 8, fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── IN STORE SERVICES ── */}
      <section id="services" style={{ padding: "88px 24px", background: "white" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ marginBottom: 52 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `linear-gradient(135deg, ${TEAL}22, ${TEAL2}18)`, border: `1px solid ${TEAL}50`, borderRadius: 20, padding: "5px 16px", marginBottom: 16 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: `linear-gradient(135deg, ${TEAL}, ${TEAL2})` }} />
              <span style={{ color: TEAL, fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Walk-In Services</span>
            </div>
            <h2 style={{ color: DARK, fontSize: 34, fontWeight: 800, margin: "0 0 12px", letterSpacing: "-0.025em" }}>In Store Services</h2>
            <p style={{ color: "#475569", fontSize: 16, margin: 0, maxWidth: 520 }}>Walk in and we'll take care of the rest — no appointment needed for most services.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }} className="services-grid">
            {services.map((s, i) => (
              <div key={i} className="service-card" style={{ background: "white", borderRadius: 14, padding: "28px 22px", border: "1px solid #e2e8f0", borderTop: `3px solid ${TEAL}`, display: "flex", flexDirection: "column", gap: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                <div style={{ width: 46, height: 46, borderRadius: 12, background: `linear-gradient(135deg, ${TEAL}20, ${TEAL2}14)`, border: `1px solid ${TEAL}30`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <s.Icon size={21} color={TEAL} />
                </div>
                <h3 style={{ color: "#111827", fontSize: 15, fontWeight: 700, margin: 0, lineHeight: 1.3 }}>
                  {s.link
                    ? <a href={s.link} target="_blank" rel="noreferrer" style={{ color: "#111827", textDecoration: "none" }}>{s.title}</a>
                    : s.title
                  }
                </h3>
                <p style={{ color: "#475569", fontSize: 13, lineHeight: 1.75, margin: 0, flex: 1 }}>{s.desc}</p>
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

      {/* ── WHY QPCTECH ── */}
      <section style={{ padding: "88px 24px", background: `linear-gradient(160deg, #0f172a 0%, #0c4a6e 50%, #1e3a5f 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 700, height: 700, borderRadius: "50%", background: `radial-gradient(circle, ${TEAL}10 0%, transparent 65%)`, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `${TEAL}22`, border: `1px solid ${TEAL}50`, borderRadius: 20, padding: "5px 16px", marginBottom: 16 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: `linear-gradient(135deg, ${TEAL}, ${TEAL2})` }} />
              <span style={{ color: TEAL, fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Why Choose Us</span>
            </div>
            <h2 style={{ color: "white", fontSize: 34, fontWeight: 800, margin: "0 0 14px", letterSpacing: "-0.025em" }}>The QPCTech Difference</h2>
            <p style={{ color: "#94a3b8", fontSize: 16, margin: "0 auto", maxWidth: 520, lineHeight: 1.7 }}>
              We're not a faceless tech giant — we're your neighbors. Here's what makes working with us different.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }} className="why-grid">
            {whyUs.map((item, i) => (
              <div key={i} className="why-card" style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(4px)", borderRadius: 16, padding: "36px 32px", border: `1px solid ${TEAL}25`, borderTop: `3px solid ${TEAL}`, display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: `linear-gradient(135deg, ${TEAL}30, ${TEAL2}20)`, border: `1px solid ${TEAL}40`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <item.Icon size={24} color={TEAL} />
                </div>
                <h3 style={{ color: "white", fontSize: 18, fontWeight: 800, margin: 0, letterSpacing: "-0.01em" }}>{item.title}</h3>
                <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.8, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Q-BITS TEASER ── */}
      <section style={{ padding: "72px 24px 0", background: "white" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{
            background: `linear-gradient(135deg, ${DARK} 0%, #0c3a5a 50%, #0f172a 100%)`,
            borderRadius: 20,
            padding: "48px 52px",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 40,
            alignItems: "center",
            border: `1px solid ${TEAL}30`,
            position: "relative",
            overflow: "hidden",
          }} className="qbits-grid">
            {/* decorative glow */}
            <div style={{ position: "absolute", right: 180, top: "50%", transform: "translateY(-50%)", width: 340, height: 340, borderRadius: "50%", background: `radial-gradient(circle, ${TEAL}18 0%, transparent 65%)`, pointerEvents: "none" }} />
            <div style={{ position: "absolute", left: -60, bottom: -80, width: 220, height: 220, borderRadius: "50%", background: `radial-gradient(circle, ${TEAL2}10 0%, transparent 65%)`, pointerEvents: "none" }} />

            <div style={{ position: "relative" }}>
              {/* badge */}
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `${TEAL}22`, border: `1px solid ${TEAL}50`, borderRadius: 20, padding: "5px 14px", marginBottom: 18 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: TEAL, boxShadow: `0 0 6px ${TEAL}` }} />
                <span style={{ color: TEAL, fontSize: 11, fontWeight: 700, letterSpacing: "0.09em", textTransform: "uppercase" }}>IT Management Package</span>
              </div>

              {/* heading */}
              <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 12, flexWrap: "wrap" }}>
                <h2 style={{ color: "white", fontSize: 30, fontWeight: 900, margin: 0, letterSpacing: "-0.02em" }}>
                  Ask us about{" "}
                  <span style={{ background: `linear-gradient(135deg, ${TEAL}, ${TEAL2})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Q-BITS</span>
                </h2>
              </div>

              <p style={{ color: "#94a3b8", fontSize: 15, lineHeight: 1.75, margin: "0 0 0", maxWidth: 560 }}>
                Our all-in-one IT management bundle — <strong style={{ color: "#e2e8f0" }}>NinjaOne</strong> for <a href={REMOTE_URL} target="_blank" rel="noreferrer" style={{ color: TEAL, textDecoration: "underline" }}>remote support</a> & patching plus <strong style={{ color: "#e2e8f0" }}>Huntress</strong> for managed antivirus — keeping your endpoints secure and your business running without interruption.
              </p>
            </div>

            {/* right side buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "stretch", position: "relative", flexShrink: 0 }}>
              <a
                href="/managed-it-systems"
                className="btn-teal"
                style={{ background: `linear-gradient(135deg, ${TEAL}, ${TEAL2})`, color: "white", padding: "13px 28px", borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: "none", textAlign: "center", whiteSpace: "nowrap", boxShadow: `0 4px 20px ${TEAL}40` }}
              >
                Learn About Q-BITS →
              </a>
              <a
                href="/contact"
                style={{ background: "rgba(255,255,255,0.08)", color: "#e2e8f0", padding: "12px 28px", borderRadius: 10, fontWeight: 600, fontSize: 14, textDecoration: "none", border: "1px solid rgba(255,255,255,0.15)", textAlign: "center", whiteSpace: "nowrap" }}
              >
                Call to Ask
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA CALLOUT ── */}
      <section style={{ padding: "80px 24px", background: "white" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", background: `linear-gradient(135deg, ${TEAL} 0%, ${TEAL2} 40%, #0284c7 100%)`, borderRadius: 20, padding: "56px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 28, boxShadow: `0 12px 48px ${TEAL}40`, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", right: -60, top: -60, width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.08)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", left: -40, bottom: -60, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />
          <div style={{ position: "relative" }}>
            <h2 style={{ color: "white", fontSize: 28, fontWeight: 800, margin: "0 0 10px", letterSpacing: "-0.02em" }}>Need Reliable IT Support or Computer Repair?</h2>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 15, margin: 0, maxWidth: 520, lineHeight: 1.7 }}>
              Whether you're a local business looking for managed IT or a neighbor needing a quick computer fix, we're here to help. Call us at{" "}
              <a href="tel:5176105372" style={{ color: "white", textDecoration: "none", fontWeight: 700, borderBottom: "1px solid rgba(255,255,255,0.5)" }}>(517) 610-5372</a>
              {" "}or stop by our Hillsdale office today!
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexShrink: 0, position: "relative" }}>
            <a href="/contact" style={{ background: "white", color: TEAL, padding: "13px 28px", borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: "0 4px 16px rgba(0,0,0,0.12)", transition: "transform 0.18s, box-shadow 0.18s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.18)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.12)"; }}
            >Get In Touch</a>
            <a href="tel:5176105372" style={{ background: "rgba(255,255,255,0.18)", color: "white", padding: "13px 24px", borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: "none", border: "1px solid rgba(255,255,255,0.3)" }}>
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ── GOOGLE REVIEWS ── */}
      <section style={{ padding: "0 24px 80px", background: "white" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: 48 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `${TEAL}12`, border: `1px solid ${TEAL}35`, borderRadius: 20, padding: "4px 14px", marginBottom: 16 }}>
              <Star size={12} color={TEAL} fill={TEAL} />
              <span style={{ color: TEAL, fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Google Reviews</span>
            </div>
            <h2 style={{ color: DARK, fontSize: 32, fontWeight: 800, margin: "0 0 12px", letterSpacing: "-0.02em" }}>What Our Customers Say</h2>
            <p style={{ color: "#64748b", fontSize: 15, margin: "0 0 24px", maxWidth: 480, lineHeight: 1.7 }}>
              Don't take our word for it — here's what the Hillsdale community thinks.
            </p>
            {/* Overall rating badge */}
            <a
              href="https://www.google.com/maps/place/QPCTech,+37+Waldron+St,+Hillsdale,+MI+49242"
              target="_blank"
              rel="noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 14, background: "white", border: "1px solid #e2e8f0", borderRadius: 16, padding: "16px 28px", textDecoration: "none", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.83z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div style={{ textAlign: "left" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ color: DARK, fontSize: 22, fontWeight: 800, lineHeight: 1 }}>{rating.toFixed(1)}</span>
                  <div style={{ display: "flex", gap: 2 }}>
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} size={16} color="#FBBC05" fill={i <= Math.round(rating) ? "#FBBC05" : "none"} strokeWidth={i > Math.round(rating) ? 1.5 : 0} />
                    ))}
                  </div>
                </div>
                <p style={{ color: "#64748b", fontSize: 12, margin: "2px 0 0", fontWeight: 500 }}>{total} reviews on Google</p>
              </div>
            </a>
          </div>

          {/* Review cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 40 }} className="reviews-grid">
            {displayReviews.map(({ name, date, stars, text }) => (
              <div key={name} className="why-card" style={{ background: "#f8fafc", borderRadius: 16, padding: "28px 32px", border: "1px solid #e2e8f0", display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "flex", gap: 3 }}>
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} size={15} color="#FBBC05" fill={i <= stars ? "#FBBC05" : "none"} strokeWidth={i > stars ? 1.5 : 0} />
                  ))}
                </div>
                <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>"{text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: "auto" }}>
                  <div style={{ width: 38, height: 38, borderRadius: "50%", background: `linear-gradient(135deg, ${TEAL}, ${TEAL2})`, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: 15, flexShrink: 0 }}>
                    {name[0]}
                  </div>
                  <div>
                    <p style={{ color: DARK, fontWeight: 700, fontSize: 14, margin: 0 }}>{name}</p>
                    <p style={{ color: "#94a3b8", fontSize: 12, margin: "2px 0 0" }}>{date}</p>
                  </div>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: "auto", opacity: 0.5 }}>
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.83z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* CTA to Google */}
          <div style={{ textAlign: "center" }}>
            <a
              href="https://www.google.com/maps/place/QPCTech,+37+Waldron+St,+Hillsdale,+MI+49242"
              target="_blank"
              rel="noreferrer"
              className="btn-teal"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: TEAL, color: "white", padding: "13px 28px", borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: `0 4px 20px ${TEAL}40` }}
            >
              See All {total} Reviews on Google <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section style={{ padding: "0 24px 88px", background: "white" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `${TEAL}12`, border: `1px solid ${TEAL}35`, borderRadius: 20, padding: "4px 14px", marginBottom: 16 }}>
            <span style={{ color: TEAL, fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Find Us</span>
          </div>
          <h2 style={{ color: DARK, fontSize: 28, fontWeight: 800, margin: "0 0 8px", letterSpacing: "-0.02em" }}>Where We Are Located</h2>
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
        @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; } .trust-grid { display: none !important; } .qbits-grid { grid-template-columns: 1fr !important; } .reviews-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 1024px) { .services-grid { grid-template-columns: repeat(2,1fr) !important; } .why-grid { grid-template-columns: 1fr !important; } .stats-flex { flex-direction: column; gap: 20px; } .footer-grid { grid-template-columns: 1fr 1fr !important; } .reviews-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 600px) { .services-grid { grid-template-columns: 1fr !important; } .stats-flex { flex-direction: column; gap: 20px; } .footer-grid { grid-template-columns: 1fr !important; } .reviews-grid { grid-template-columns: 1fr !important; } h1 { font-size: 38px !important; } }
      `}</style>
    </div>
  );
}

/* ──────────────────────────────── NETWORK INFRASTRUCTURE ── */
function NetworkInfrastructurePage() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: "#1e293b", overflowX: "hidden" }}>
      <style>{GLOBAL_CSS}</style>
      <Header />
      <PageHero
        breadcrumb="Network Infrastructure" label="Business Services" icon={Network}
        title="Network Infrastructure"
        subtitle="Building and maintaining reliable, scalable networks for businesses across southern Michigan — from small offices to industrial facilities."
      />
      <section style={{ background: "white", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="hero-grid">
            <div>
              <div style={{ width: 40, height: 4, background: `linear-gradient(to right, #0c4a6e, ${TEAL})`, borderRadius: 2, marginBottom: 20 }} />
              <h2 style={{ color: DARK, fontSize: 30, fontWeight: 800, margin: "0 0 8px", letterSpacing: "-0.02em" }}>Our Approach</h2>
              <p style={{ color: "#334155", fontSize: 16, lineHeight: 1.8, margin: "0 0 32px" }}>
                Our technicians and contractors have experience in Industrial, Residential, Hospitality and Healthcare installations and maintenance of all aspects of any network project.
              </p>
              <ContactBox headline="Ready for a quote?" body="Contact us and we'll assess your needs and provide a detailed estimate." />
            </div>
            <div style={{ background: "#f8fafc", borderRadius: 16, padding: "36px", border: "1px solid #e2e8f0", borderLeft: `4px solid ${TEAL}` }}>
              <p style={{ color: DARK, fontWeight: 800, fontSize: 18, margin: "0 0 24px" }}>What We Cover</p>
              {["Indoor, Outdoor and Industrial Cabling", "Wireless Access Points", "Router and Firewall", "Switch Configuration & Setup", "Recertification of Existing Cables", "New Installation or Datacenter Make-Over"].map(item => (
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
      <style>{`@media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; } } @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 600px) { .footer-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

/* ──────────────────────────────────── CYBERSECURITY ── */
function CybersecurityPage() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: "#1e293b", overflowX: "hidden" }}>
      <style>{GLOBAL_CSS}</style>
      <Header />
      <PageHero
        breadcrumb="Cybersecurity" label="Business Services" icon={Shield}
        title="Cybersecurity"
        subtitle="Protect your business with comprehensive cybersecurity solutions — from managed antivirus and patch management to emerging security standards."
      />
      <section style={{ background: "white", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="hero-grid">
            <div>
              <div style={{ width: 40, height: 4, background: `linear-gradient(to right, #0c4a6e, ${TEAL})`, borderRadius: 2, marginBottom: 20 }} />
              <h2 style={{ color: DARK, fontSize: 30, fontWeight: 800, margin: "0 0 8px", letterSpacing: "-0.02em" }}>Our Approach</h2>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}>
                QPC has acquired many perspectives over the years helping small and large business customers across multiple industries such as Healthcare, Finance, Retail, Energy, Education, Non-profit, and Government. We have committed significant time to studying current and emerging governance such as CMMC, HIPAA, GLBA, PCI and other important security standards.
              </p>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}>
                We recommend <strong>Managed Antivirus</strong> powered by Huntress Labs — a globally recognized leader whose comprehensive approach captures known and unknown malware before it delivers its payload.
              </p>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.8, margin: "0 0 32px" }}>
                <strong>Patch Management</strong> via NinjaOne delivers Windows updates and third-party software patches, while also blacklisting nuisance or near-malicious software.
              </p>
              <ContactBox headline="Ready to secure your business?" body="Contact us for a security assessment and tailored recommendations." />
            </div>
            <div style={{ background: "#f8fafc", borderRadius: 16, padding: "36px", border: "1px solid #e2e8f0", borderLeft: `4px solid ${TEAL}` }}>
              <p style={{ color: DARK, fontWeight: 800, fontSize: 18, margin: "0 0 24px" }}>What We Cover</p>
              {["Current & Emerging Cybersecurity", "Small & Large Businesses", "Security Standards (CMMC, HIPAA, GLBA, PCI)", "Managed Antivirus", "Patch Management", "NinjaOne RMM", "Huntress Managed EDR"].map(item => (
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
      <style>{`@media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; } } @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 600px) { .footer-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

/* ──────────────────────────────────── MANAGED IT ── */
function ManagedITPage() {
  const apps = [
    "AutoDesk AutoCAD", "BlackMagic", "BrightTree", "CamWorks", "CompuLink",
    "GageTrack", "Hypertherm ProNest", "Infor Visual Manufacturing", "JobBoss",
    "MS SQL Server", "MS Teams", "MS Windows BitLocker", "Peachtree Accounting",
    "QuickBooks", "Sage Accounting", "SharePoint", "SolidWorks", "Synology",
    "Thompson Reuters", "WINrx", "Zoom",
  ];
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: "#1e293b", overflowX: "hidden" }}>
      <style>{GLOBAL_CSS}</style>
      <Header />
      <PageHero
        breadcrumb="Managed IT Systems" label="Business Services" icon={Cpu}
        title="Managed IT Systems"
        subtitle="We can optimize and manage your IT systems with tailored solutions for businesses of all sizes — from hardware and servers to backups and business applications."
      />
      <section style={{ background: "white", padding: "80px 24px 64px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="hero-grid">
            <div>
              <div style={{ width: 40, height: 4, background: `linear-gradient(to right, #0c4a6e, ${TEAL})`, borderRadius: 2, marginBottom: 20 }} />
              <h2 style={{ color: DARK, fontSize: 30, fontWeight: 800, margin: "0 0 20px", letterSpacing: "-0.02em" }}>Approach to IT Systems</h2>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}>
                <strong>Hardware</strong> — QPC technicians have more than 60 years of combined experience across all areas of IT. Our guiding axiom: <em>"High-value IT Service Delivery begins with careful IT Service Design."</em> Our customers get the most value when they spend time being proactive, not reactive.
              </p>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}>
                <strong>Platform</strong> — QPCTech can manage your server platform whether it is a physical server, virtualized server, or a cloud-hosted virtual server, keeping it healthy and delivering business value reliably.
              </p>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}>
                <strong>Backups</strong> — We design automated and monitored backups for clients both onsite and in the cloud. For customers who prefer to stay out of the cloud, we provide Network Attached Storage (NAS) solutions via Synology.
              </p>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                <strong>Applications</strong> — QPCTech supports a large and growing catalog of business applications, and can help you stay on top of licensing, software updates, and patch management.
              </p>
            </div>
            <div style={{ background: "#f8fafc", borderRadius: 16, padding: "36px", border: "1px solid #e2e8f0", borderLeft: `4px solid ${TEAL}` }}>
              <p style={{ color: DARK, fontWeight: 800, fontSize: 18, margin: "0 0 24px" }}>What We Cover</p>
              {["Hardware Procurement & Setup", "Server Platform Management", "Business Applications Support", "Automated Onsite & Cloud Backups", "NAS (Network Attached Storage) Devices", "Licensing & Software Updates"].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 16 }}>
                  <CheckCircle size={20} color={TEAL} style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ color: "#1e293b", fontSize: 15, lineHeight: 1.5, fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "#f8fafc", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }} className="hero-grid">
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `${TEAL}18`, border: `1px solid ${TEAL}40`, borderRadius: 20, padding: "4px 14px", marginBottom: 16 }}>
                <span style={{ color: TEAL, fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Our IT Management Package</span>
              </div>
              <h2 style={{ color: DARK, fontSize: 30, fontWeight: 800, margin: "0 0 12px", letterSpacing: "-0.02em" }}>Q-BITS</h2>
              <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.8, margin: "0 0 28px" }}>
                Q-BITS is our all-in-one IT management package combining <strong>NinjaOne</strong> for patching and <a href={REMOTE_URL} target="_blank" rel="noreferrer" style={{ color: TEAL, textDecoration: "underline" }}>remote support</a> with <strong>Huntress</strong> for managed antivirus — keeping your endpoints secure and your systems running smoothly.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="tel:5176105372" className="btn-teal" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: TEAL, color: "white", padding: "10px 22px", borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
                  <Phone size={14} /> (517) 610-5372
                </a>
                <a href="mailto:support@qpctech.com" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "white", color: "#0f172a", padding: "10px 22px", borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: "none", border: "1px solid #e2e8f0" }}>
                  <Mail size={14} /> Email Us
                </a>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div className="service-card" style={{ background: "white", borderRadius: 12, padding: "24px", border: "1px solid #e2e8f0", borderTop: `3px solid ${TEAL}` }}>
                <p style={{ color: DARK, fontWeight: 800, fontSize: 15, margin: "0 0 12px" }}>NinjaOne RMM</p>
                {["Endpoint management", "Remote support", "Patching", "Scripting"].map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <CheckCircle size={14} color={TEAL} style={{ flexShrink: 0 }} />
                    {f === "Remote support" ? (
                      <a href={REMOTE_URL} target="_blank" rel="noreferrer" style={{ color: TEAL, fontSize: 13, textDecoration: "underline" }}>{f}</a>
                    ) : (
                      <span style={{ color: "#475569", fontSize: 13 }}>{f}</span>
                    )}
                  </div>
                ))}
              </div>
              <div className="service-card" style={{ background: "white", borderRadius: 12, padding: "24px", border: "1px solid #e2e8f0", borderTop: `3px solid ${TEAL}` }}>
                <p style={{ color: DARK, fontWeight: 800, fontSize: 15, margin: "0 0 12px" }}>Huntress EDR</p>
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
      <section style={{ background: "white", padding: "64px 24px 80px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ width: 40, height: 4, background: `linear-gradient(to right, #0c4a6e, ${TEAL})`, borderRadius: 2, marginBottom: 16 }} />
          <h2 style={{ color: DARK, fontSize: 26, fontWeight: 800, margin: "0 0 6px" }}>Supported Applications</h2>
          <p style={{ color: "#64748b", fontSize: 15, margin: "0 0 32px" }}>A sample of the business software we support and manage for our clients.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {apps.map(app => (
              <span key={app} style={{ background: "#f1f5f9", color: "#1e293b", fontSize: 13, fontWeight: 500, padding: "6px 14px", borderRadius: 20, border: "1px solid #e2e8f0" }}>{app}</span>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <style>{`@media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; } } @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 600px) { .footer-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

/* ──────────────────────────────────── PHONE SYSTEMS ── */
function PhoneSystemsPage() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: "#1e293b", overflowX: "hidden" }}>
      <style>{GLOBAL_CSS}</style>
      <Header />
      <PageHero
        breadcrumb="Phone Systems" label="Business Services" icon={Phone}
        title="Phone Systems"
        subtitle="Upgrade your communication with cost-effective VoIP solutions designed for seamless business connectivity — tailored to your organization, not the other way around."
      />
      <section style={{ background: "white", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="hero-grid">
            <div>
              <div style={{ width: 40, height: 4, background: `linear-gradient(to right, #0c4a6e, ${TEAL})`, borderRadius: 2, marginBottom: 20 }} />
              <h2 style={{ color: DARK, fontSize: 30, fontWeight: 800, margin: "0 0 16px", letterSpacing: "-0.02em" }}>Our Approach</h2>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}>
                "Simple" landlines are becoming unsustainably expensive. Voice over IP (VoIP) phones offer tremendous savings over conventional phone systems, and we have assisted many Michigan businesses through this transition. In our experience, one size does not fit all organizations.
              </p>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.8, margin: "0 0 32px" }}>
                It's easy to find a "phone guy" eager to change your entire business process to fit his system. At QPCTech we take a different approach — drawing from experience with several VoIP vendors, we help you find the right solution with the right features for your specific requirements.
              </p>
              <ContactBox headline="Ready to modernize your phones?" body="We'll assess your current setup and recommend the right VoIP solution for your business." />
            </div>
            <div style={{ background: "#f8fafc", borderRadius: 16, padding: "36px", border: "1px solid #e2e8f0", borderLeft: `4px solid ${TEAL}` }}>
              <p style={{ color: DARK, fontWeight: 800, fontSize: 18, margin: "0 0 24px" }}>What We Cover</p>
              {["Tailored VoIP Solution", "Integration with Analog Phones", "Cost Savings Over Landlines", "Vendor Agnostic Approach", "Initial VoIP Project Management", "Ongoing VoIP Tech Support"].map(item => (
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
      <style>{`@media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; } } @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 600px) { .footer-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

/* ──────────────────────────────── PHYSICAL SECURITY ── */
function PhysicalSecurityPage() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: "#1e293b", overflowX: "hidden" }}>
      <style>{GLOBAL_CSS}</style>
      <Header />
      <PageHero
        breadcrumb="Physical Security" label="Business Services" icon={KeyRound}
        title="Physical Security"
        subtitle="Secure your business with state-of-the-art physical security systems — surveillance cameras, burglar alarms, and access control installed by Michigan-licensed contractors."
      />
      <section style={{ background: "white", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="hero-grid">
            <div>
              <div style={{ width: 40, height: 4, background: `linear-gradient(to right, #0c4a6e, ${TEAL})`, borderRadius: 2, marginBottom: 20 }} />
              <h2 style={{ color: DARK, fontSize: 30, fontWeight: 800, margin: "0 0 16px", letterSpacing: "-0.02em" }}>Approach to Physical Security</h2>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}>
                <strong>Surveillance Cameras</strong> — Like phones, cameras have become far more affordable. But the camera is often the easy part — the video management application is what separates the good solutions from the bad. Our technicians and expert contractors will talk through your requirements and select the right solution for your growing business. Buyer beware: today's marketplace is full of popular solutions that do not pass NIST Cybersecurity Certification.
              </p>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.8, margin: "0 0 32px" }}>
                <strong>Burglar Alarms and Building Access Control</strong> — QPC's expert contractors are licensed by the State of Michigan to provide installation and service of these critical security technologies.
              </p>
              <ContactBox headline="Ready to secure your facility?" body="Call us for a free consultation and we'll help you build the right security strategy." />
            </div>
            <div style={{ background: "#f8fafc", borderRadius: 16, padding: "36px", border: "1px solid #e2e8f0", borderLeft: `4px solid ${TEAL}` }}>
              <p style={{ color: DARK, fontWeight: 800, fontSize: 18, margin: "0 0 24px" }}>What We Cover</p>
              {["Surveillance Cameras", "Video Management Systems", "NIST-Certified Solutions", "Burglar Alarms", "Building Access Control Systems", "Licensed by the State of Michigan", "Security Strategy Consultation"].map(item => (
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
      <style>{`@media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; } } @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 600px) { .footer-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

/* ──────────────────────────────── PRINTING & SCANNING ── */
function PrintingAndScanningPage() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: "#1e293b", overflowX: "hidden" }}>
      <style>{GLOBAL_CSS}</style>
      <Header />
      <PageHero
        breadcrumb="Printing & Scanning" label="Business Services" icon={Printer}
        title="Printing & Scanning"
        subtitle="Simplify office workflows with managed printing and scanning solutions that save time and resources — backed by over 3 decades of hands-on IT experience."
      />
      <section style={{ background: "white", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="hero-grid">
            <div>
              <div style={{ width: 40, height: 4, background: `linear-gradient(to right, #0c4a6e, ${TEAL})`, borderRadius: 2, marginBottom: 20 }} />
              <h2 style={{ color: DARK, fontSize: 30, fontWeight: 800, margin: "0 0 16px", letterSpacing: "-0.02em" }}>Approach to Printing and Scanning</h2>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}>
                With over 3 decades of IT experience, QPC's technicians have seen the good, the bad, and the ugly when it comes to printers. Not all printers are created equal and not all customers have the same expectations. We take a vendor-agnostic approach, but we can advise based on what we've seen in the trenches — similarly with scanners and document management applications.
              </p>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.8, margin: "0 0 32px" }}>
                With a large portion of our client base in healthcare and financial industries, we understand the need for a thoughtful document management workflow with appropriate security and backups.
              </p>
              <ContactBox headline="Not sure what you need?" body="We'll assess your current setup and recommend a solution that fits your workflow and budget." />
            </div>
            <div style={{ background: "#f8fafc", borderRadius: 16, padding: "36px", border: "1px solid #e2e8f0", borderLeft: `4px solid ${TEAL}` }}>
              <p style={{ color: DARK, fontWeight: 800, fontSize: 18, margin: "0 0 24px" }}>What We Cover</p>
              {["Vendor Agnostic Approach", "Printers for Every Budget & Use Case", "Scanners and Document Management Applications", "Document Management Workflow", "Security and Backups", "Healthcare & Financial Industry Expertise"].map(item => (
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
      <style>{`@media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; } } @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 600px) { .footer-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

/* ──────────────────────────────────── COMMUNITY WORK ── */
function CommunityWorkPage() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: "#1e293b", overflowX: "hidden" }}>
      <style>{GLOBAL_CSS}</style>
      <Header />
      <PageHero
        breadcrumb="Community Work" label="Community" icon={Users}
        title="Community Work"
        subtitle="Supporting nonprofits, schools, and career centers with reliable IT solutions — because great technology shouldn't be out of reach for organizations doing important work."
      />
      <section style={{ background: "white", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="hero-grid">
            <div>
              <div style={{ width: 40, height: 4, background: `linear-gradient(to right, #0c4a6e, ${TEAL})`, borderRadius: 2, marginBottom: 20 }} />
              <h2 style={{ color: DARK, fontSize: 30, fontWeight: 800, margin: "0 0 16px", letterSpacing: "-0.02em" }}>Our Mission... is to enable your Mission.</h2>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}>
                We have coordinated the giving of local enterprise businesses whose purpose is to grant their disused IT assets for the benefit of local non-profit organizations. We have coordinated the reuse of hundreds of laptops, desktop computers, monitors, switches, and more.
              </p>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}>
                By reusing enterprise IT equipment that is only a few years old, we can provide an "economy of scale" for PC support to the non-profit customer. Often a used enterprise PC is of considerably higher quality than a PC that would otherwise be within the budget of a non-profit.
              </p>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.8, margin: "0 0 32px" }}>
                Given the "corporate standard" nature of available used IT assets, the upkeep cost on these computers is much lower than a "sale of the week" machine from a big-box store. It has been our privilege to work with the Jackson Area Career Center and Hillsdale Area Career Center students — both on the job and in schools — to train the next generation of IT consultants.
              </p>
              <ContactBox headline="Is your organization eligible?" body="Reach out and let us know what you do — we'd love to see how we can help." />
            </div>
            <div style={{ background: "#f8fafc", borderRadius: 16, padding: "36px", border: "1px solid #e2e8f0", borderLeft: `4px solid ${TEAL}` }}>
              <p style={{ color: DARK, fontWeight: 800, fontSize: 18, margin: "0 0 24px" }}>What We Do</p>
              {["Non-Profit IT Support", "Enterprise IT Asset Disposition", "Sustainability & Equipment Reuse", "Corporate Giving Coordination", "On the Job Training", "Career Center Partnerships"].map(item => (
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
      <style>{`@media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; } } @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 600px) { .footer-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

/* ──────────────────────────────────── WHO WE ARE ── */
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
    photo: "/kimberly-lindley.jpg",
    photoPosition: "center 30%",
  },
  {
    name: "Rodney Weir",
    title: "Technician",
    bio: "Experienced Web Designer and Cloud Based Provider.",
    certs: ["ITF+", "TestOut PC Pro", "TestOut Security Pro", "TestOut Linux Pro", "TestOut Networking Pro", "TestOut CyberDefense Pro", "TestOut Ethical Hacker Pro"],
    photo: "/rodney-weir.jpg",
    photoPosition: "center 52%",
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
    <div style={{ fontFamily: "'Inter', sans-serif", color: "#1e293b", overflowX: "hidden" }}>
      <style>{GLOBAL_CSS}</style>
      <Header />

      <section style={{ background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 55%, #0d3050 100%)", padding: "72px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: -60, top: -80, width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(55,181,230,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <a href="/" style={{ color: "#94a3b8", fontSize: 13, textDecoration: "none" }}>Home</a>
            <span style={{ color: "#475569" }}>›</span>
            <span style={{ color: TEAL, fontSize: 13, fontWeight: 600 }}>Who We Are</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <Users size={22} color={TEAL} />
            <span style={{ color: TEAL, fontSize: 12, fontWeight: 700, letterSpacing: "0.09em", textTransform: "uppercase" }}>Our Team</span>
          </div>
          <h1 style={{ color: "white", fontSize: 48, fontWeight: 800, margin: "0 0 16px", letterSpacing: "-0.02em", lineHeight: 1.1 }}>Meet The Team</h1>
          <p style={{ color: "#94a3b8", fontSize: 17, lineHeight: 1.7, maxWidth: 660, margin: 0 }}>
            At QPCTech, our veteran staff embodies professionalism, honesty, integrity, and education. We work diligently to create and maintain a meaningful relationship with you — providing a more personal level of service.
          </p>
        </div>
      </section>

      <section style={{ background: "white", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }} className="team-grid">
            {teamMembers.map(member => (
              <div key={member.name} className="team-card" style={{ background: "#f8fafc", borderRadius: 16, padding: "32px 28px", border: "1px solid #e2e8f0", borderTop: `4px solid ${TEAL}`, display: "flex", flexDirection: "column", gap: 12 }}>
                {member.photo ? (
                  <div style={{ width: 130, height: 130, borderRadius: "50%", overflow: "hidden", border: `3px solid ${TEAL}`, margin: "0 auto 4px", flexShrink: 0 }}>
                    <img src={member.photo} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: member.photoPosition, imageRendering: "auto" }} />
                  </div>
                ) : (
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: `linear-gradient(135deg, #0c4a6e, ${TEAL})`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 4, margin: "0 auto 4px" }}>
                    <span style={{ color: "white", fontWeight: 800, fontSize: 20 }}>{member.name.split(" ").map(n => n[0]).join("")}</span>
                  </div>
                )}
                <div style={{ textAlign: "center" }}>
                  <h3 style={{ color: DARK, fontSize: 19, fontWeight: 800, margin: "0 0 4px" }}>{member.name}</h3>
                  <p style={{ color: TEAL, fontSize: 12, fontWeight: 700, margin: 0, textTransform: "uppercase", letterSpacing: "0.07em" }}>{member.title}</p>
                </div>
                {member.bio && (
                  <p style={{ color: "#475569", fontSize: 14, lineHeight: 1.7, margin: 0, textAlign: "center" }}>{member.bio}</p>
                )}
                {member.certs.length > 0 && (
                  <div>
                    <p style={{ color: DARK, fontSize: 12, fontWeight: 700, margin: "4px 0 8px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Certifications</p>
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
      <style>{`@media (max-width: 1024px) { .team-grid { grid-template-columns: repeat(2,1fr) !important; } .footer-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 600px) { .team-grid { grid-template-columns: 1fr !important; } .footer-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

/* ──────────────────────────────────── CONTACT PAGE ── */
const INPUT_STYLE: React.CSSProperties = {
  width: "100%",
  padding: "11px 14px",
  borderRadius: 8,
  border: "1px solid #e2e8f0",
  fontSize: 14,
  color: "#1e293b",
  background: "white",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.18s, box-shadow 0.18s",
  fontFamily: "'Inter', sans-serif",
};

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", notes: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function set(field: string) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(f => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("https://formsubmit.co/ajax/support@qpctech.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          Name: form.name,
          Email: form.email,
          Phone: form.phone,
          Company: form.company || "—",
          Notes: form.notes,
          _subject: "New Contact Form Submission — QPCTech Website",
          _template: "table",
        }),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setForm({ name: "", email: "", phone: "", company: "", notes: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: "#1e293b", overflowX: "hidden" }}>
      <style>{GLOBAL_CSS}</style>
      <Header />

      {/* Hero */}
      <section style={{ background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 55%, #0d3050 100%)", padding: "72px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: -60, top: -80, width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(55,181,230,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <a href="/" style={{ color: "#94a3b8", fontSize: 13, textDecoration: "none" }}>Home</a>
            <span style={{ color: "#475569" }}>›</span>
            <span style={{ color: TEAL, fontSize: 13, fontWeight: 600 }}>Contact Us</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <Mail size={22} color={TEAL} />
            <span style={{ color: TEAL, fontSize: 12, fontWeight: 700, letterSpacing: "0.09em", textTransform: "uppercase" }}>Get In Touch</span>
          </div>
          <h1 style={{ color: "white", fontSize: 48, fontWeight: 800, margin: "0 0 16px", letterSpacing: "-0.02em", lineHeight: 1.1 }}>Contact Us</h1>
          <p style={{ color: "#94a3b8", fontSize: 17, lineHeight: 1.7, maxWidth: 560, margin: 0 }}>
            Have a question, need a quote, or ready to get started? Fill out the form and we'll get back to you within one business day.
          </p>
        </div>
      </section>

      <section style={{ background: "white", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="hero-grid">

            {/* LEFT — Contact Form */}
            <div>
              <div style={{ width: 40, height: 4, background: `linear-gradient(to right, #0c4a6e, ${TEAL})`, borderRadius: 2, marginBottom: 20 }} />
              <h2 style={{ color: DARK, fontSize: 28, fontWeight: 800, margin: "0 0 8px", letterSpacing: "-0.02em" }}>Send Us a Message</h2>
              <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.8, margin: "0 0 32px" }}>
                Tell us a little about what you need and we'll reach back out right away.
              </p>

              {status === "success" ? (
                <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 12, padding: "32px", textAlign: "center" }}>
                  <div style={{ width: 52, height: 52, borderRadius: "50%", background: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                    <CheckCircle size={26} color="#16a34a" />
                  </div>
                  <h3 style={{ color: "#15803d", fontSize: 18, fontWeight: 800, margin: "0 0 8px" }}>Message Sent!</h3>
                  <p style={{ color: "#166534", fontSize: 14, margin: "0 0 20px", lineHeight: 1.6 }}>
                    Thanks for reaching out. We'll respond to <strong>{form.email || "your email"}</strong> within one business day.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    style={{ background: TEAL, color: "white", border: "none", padding: "10px 24px", borderRadius: 8, fontWeight: 700, fontSize: 14, cursor: "pointer" }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  {/* Name */}
                  <div>
                    <label style={{ display: "block", color: "#374151", fontSize: 13, fontWeight: 600, marginBottom: 6 }}>
                      Full Name <span style={{ color: TEAL }}>*</span>
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={set("name")}
                      style={INPUT_STYLE}
                      onFocus={e => { e.currentTarget.style.borderColor = TEAL; e.currentTarget.style.boxShadow = `0 0 0 3px ${TEAL}20`; }}
                      onBlur={e => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.boxShadow = "none"; }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label style={{ display: "block", color: "#374151", fontSize: 13, fontWeight: 600, marginBottom: 6 }}>
                      Email Address <span style={{ color: TEAL }}>*</span>
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={set("email")}
                      style={INPUT_STYLE}
                      onFocus={e => { e.currentTarget.style.borderColor = TEAL; e.currentTarget.style.boxShadow = `0 0 0 3px ${TEAL}20`; }}
                      onBlur={e => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.boxShadow = "none"; }}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label style={{ display: "block", color: "#374151", fontSize: 13, fontWeight: 600, marginBottom: 6 }}>
                      Phone Number <span style={{ color: TEAL }}>*</span>
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="(555) 000-0000"
                      value={form.phone}
                      onChange={set("phone")}
                      style={INPUT_STYLE}
                      onFocus={e => { e.currentTarget.style.borderColor = TEAL; e.currentTarget.style.boxShadow = `0 0 0 3px ${TEAL}20`; }}
                      onBlur={e => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.boxShadow = "none"; }}
                    />
                  </div>

                  {/* Company (optional) */}
                  <div>
                    <label style={{ display: "block", color: "#374151", fontSize: 13, fontWeight: 600, marginBottom: 6 }}>
                      Company Name <span style={{ color: "#94a3b8", fontWeight: 400 }}>(optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Corp"
                      value={form.company}
                      onChange={set("company")}
                      style={INPUT_STYLE}
                      onFocus={e => { e.currentTarget.style.borderColor = TEAL; e.currentTarget.style.boxShadow = `0 0 0 3px ${TEAL}20`; }}
                      onBlur={e => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.boxShadow = "none"; }}
                    />
                  </div>

                  {/* Notes (required) */}
                  <div>
                    <label style={{ display: "block", color: "#374151", fontSize: 13, fontWeight: 600, marginBottom: 6 }}>
                      Describe Your Issue <span style={{ color: TEAL }}>*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us what's going on — the more detail, the better we can help."
                      value={form.notes}
                      onChange={set("notes")}
                      style={{ ...INPUT_STYLE, resize: "vertical", minHeight: 120 }}
                      onFocus={e => { e.currentTarget.style.borderColor = TEAL; e.currentTarget.style.boxShadow = `0 0 0 3px ${TEAL}20`; }}
                      onBlur={e => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.boxShadow = "none"; }}
                    />
                  </div>

                  {status === "error" && (
                    <p style={{ color: "#dc2626", fontSize: 13, margin: 0, background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 8, padding: "10px 14px" }}>
                      Something went wrong. Please try again or call us directly at (517) 610-5372.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-teal"
                    style={{ background: `linear-gradient(135deg, ${TEAL}, ${TEAL2})`, color: "white", border: "none", padding: "13px 28px", borderRadius: 8, fontWeight: 700, fontSize: 15, cursor: status === "submitting" ? "not-allowed" : "pointer", opacity: status === "submitting" ? 0.7 : 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, boxShadow: `0 4px 16px ${TEAL}35` }}
                  >
                    {status === "submitting" ? "Sending…" : <>Send Message <ArrowRight size={16} /></>}
                  </button>

                  <p style={{ color: "#94a3b8", fontSize: 12, margin: 0 }}>
                    We'll reply to your email within one business day. Fields marked <span style={{ color: TEAL }}>*</span> are required.
                  </p>
                </form>
              )}
            </div>

            {/* RIGHT — Call & Walk-In */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div className="why-card" style={{ background: "#f0f9ff", borderRadius: 16, padding: "32px", border: `1px solid ${TEAL}30` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `${TEAL}20`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Phone size={20} color={TEAL} />
                  </div>
                  <h3 style={{ color: DARK, fontSize: 17, fontWeight: 800, margin: 0 }}>Call or Text Us</h3>
                </div>
                <p style={{ color: "#475569", fontSize: 14, lineHeight: 1.75, margin: "0 0 20px" }}>
                  The fastest way to reach us — give us a call and we'll get you sorted out right away.
                </p>
                <a href="tel:5176105372" className="btn-teal" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: TEAL, color: "white", padding: "12px 24px", borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
                  <Phone size={15} /> (517) 610-5372
                </a>
              </div>

              <div className="why-card" style={{ background: "#f8fafc", borderRadius: 16, padding: "32px", border: "1px solid #e2e8f0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `${TEAL}15`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <MapPin size={20} color={TEAL} />
                  </div>
                  <h3 style={{ color: DARK, fontSize: 17, fontWeight: 800, margin: 0 }}>Walk Right In</h3>
                </div>
                <p style={{ color: "#475569", fontSize: 14, lineHeight: 1.75, margin: "0 0 8px" }}>
                  No appointment needed for most in-store services. Stop by our Hillsdale office Monday through Friday.
                </p>
                <div style={{ background: "white", borderRadius: 10, padding: "14px 16px", border: "1px solid #e2e8f0", marginBottom: 20 }}>
                  {[
                    { day: "Monday – Friday", hours: "9:00 AM – 5:00 PM" },
                    { day: "Saturday", hours: "By Appointment" },
                    { day: "Sunday", hours: "Closed" },
                  ].map(({ day, hours }) => (
                    <div key={day} style={{ display: "flex", justifyContent: "space-between", fontSize: 13, padding: "4px 0" }}>
                      <span style={{ color: "#475569" }}>{day}</span>
                      <span style={{ color: DARK, fontWeight: 600 }}>{hours}</span>
                    </div>
                  ))}
                </div>
                <a href="https://maps.google.com/?q=37+Waldron+St+Hillsdale+MI" target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "white", color: DARK, padding: "12px 24px", borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: "none", border: "1px solid #e2e8f0" }}>
                  <MapPin size={15} /> Get Directions <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section style={{ background: "#f8fafc", padding: "0 24px 80px", borderTop: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", paddingTop: 56 }}>
          <h2 style={{ color: DARK, fontSize: 24, fontWeight: 800, margin: "0 0 6px", letterSpacing: "-0.02em" }}>Find Us</h2>
          <p style={{ color: "#64748b", fontSize: 15, margin: "0 0 24px" }}>37 Waldron St, Hillsdale, MI 49242</p>
          <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", height: 380, border: "1px solid #e2e8f0" }}>
            <iframe
              loading="lazy"
              src="https://maps.google.com/maps?q=QPCTech&t=m&z=16&output=embed&iwloc=near"
              title="QPCTech location"
              style={{ width: "100%", height: "100%", border: "none" }}
            />
          </div>
        </div>
      </section>

      <Footer />
      <style>{`@media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; } } @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 600px) { .footer-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

/* ──────────────────────────────────── ROUTER ── */
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
      <Route path="/contact" component={ContactPage} />
      <Route path="/contact/" component={ContactPage} />
      <Route component={HomePage} />
    </Switch>
  );
}
