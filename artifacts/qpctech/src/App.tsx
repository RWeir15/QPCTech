import { useState } from "react";
import {
  FaWrench, FaLaptop, FaWindows, FaPrint, FaKey,
  FaScrewdriver, FaBug, FaDesktop, FaChevronDown, FaBars, FaTimes
} from "react-icons/fa";

const TEAL = "#37b5e6";
const ICON_GRAY = "#777";
const HEADER_BG = "#1a1a1a";

const services = [
  {
    icon: <FaWrench size={40} color={ICON_GRAY} />,
    title: "Computer Repair",
    description: (
      <>
        We repair desktop and laptop PCs
        <br /><br />
        <b><i>We do not repair phones or tablets</i></b>
      </>
    ),
  },
  {
    icon: <FaLaptop size={40} color={ICON_GRAY} />,
    title: "Computer Sales",
    description: "We purchase and refurbish computers and ensure they meet our quality standards",
  },
  {
    icon: <FaWindows size={40} color={ICON_GRAY} />,
    title: "Windows OS Upgrade",
    description: (
      <>
        Operating Systems need to stay
        <br />up-to-date to ensure security vulnerabilities get patched
      </>
    ),
  },
  {
    icon: <FaPrint size={40} color={ICON_GRAY} />,
    title: "Printer Sales",
    titleLink: "https://printersourceplus.com/",
    iconLink: "https://printersourceplus.com/",
    description: (
      <>
        We have partnered with <br />
        Printer Source Plus and sell quality EPSON printers
      </>
    ),
  },
  {
    icon: <FaKey size={40} color={ICON_GRAY} />,
    title: "Password Reset",
    description: "Forgot your computer login password? We have to tools to reset your password",
  },
  {
    icon: <FaScrewdriver size={40} color={ICON_GRAY} />,
    title: "Computer Hardware Installation / Upgrade",
    description: "Have a computer part that you don't feel comfortable to install yourself? Let our professional technicians handle the daunting task!",
  },
  {
    icon: <FaBug size={40} color={ICON_GRAY} />,
    title: "Virus Removal",
    description: "We can detect and remove footholds created by viruses",
  },
  {
    icon: <FaDesktop size={40} color={ICON_GRAY} />,
    title: "Custom PC Builds",
    description: "We build custom computers for gaming or specialized workloads. Contact us plan a new build!",
  },
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
    <header style={{ background: HEADER_BG, position: "sticky", top: 0, zIndex: 100 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 100 }}>
        {/* Logo */}
        <a href="/" style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://www.qpctech.com/wp-content/uploads/2024/03/cropped-QPCTech-logo.png"
            alt="QPCTech"
            style={{ height: 72, width: "auto" }}
          />
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="desktop-nav">
          <a href="/" style={{ color: "white", textDecoration: "none", fontSize: 15, fontWeight: 500 }}>Home</a>

          {/* Services dropdown */}
          <div style={{ position: "relative" }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <a href="#" style={{ color: "white", textDecoration: "none", fontSize: 15, fontWeight: 500, display: "flex", alignItems: "center", gap: 6 }}>
              Services <FaChevronDown size={10} />
            </a>
            {servicesOpen && (
              <div style={{
                position: "absolute", top: "100%", left: 0, background: "white",
                boxShadow: "0 4px 16px rgba(0,0,0,0.15)", minWidth: 220, zIndex: 200,
                border: "1px solid #e0e0e0", borderRadius: 4, paddingTop: 4, paddingBottom: 4,
              }}>
                {serviceLinks.map(link => (
                  <a key={link.href} href={link.href} style={{
                    display: "block", padding: "10px 20px", color: "#333",
                    textDecoration: "none", fontSize: 14,
                  }}
                    onMouseEnter={e => (e.currentTarget.style.background = "#f0f0f0")}
                    onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                  >{link.label}</a>
                ))}
              </div>
            )}
          </div>

          <a href="/about-us/" style={{ color: "white", textDecoration: "none", fontSize: 15, fontWeight: 500 }}>Who we Are</a>
          <a href="/contact/" style={{ color: "white", textDecoration: "none", fontSize: 15, fontWeight: 500 }}>Contact Us</a>
          <a
            href="https://qpctech.rmmservices.net/connect/#/9951961931"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "white", textDecoration: "none", fontSize: 15, fontWeight: 500,
              border: "2px solid white", borderRadius: 6, padding: "6px 24px",
            }}
          >Remote Support</a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(o => !o)}
          style={{ display: "none", background: "none", border: "none", color: "white", cursor: "pointer" }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ background: HEADER_BG, padding: "16px 20px", borderTop: "1px solid #333" }} className="mobile-menu">
          <a href="/" style={{ display: "block", color: "white", textDecoration: "none", padding: "10px 0", fontSize: 15 }}>Home</a>
          <div>
            <button
              onClick={() => setServicesOpen(o => !o)}
              style={{ background: "none", border: "none", color: "white", fontSize: 15, cursor: "pointer", padding: "10px 0", display: "flex", alignItems: "center", gap: 6, width: "100%" }}
            >
              Services <FaChevronDown size={10} />
            </button>
            {servicesOpen && (
              <div style={{ paddingLeft: 16 }}>
                {serviceLinks.map(link => (
                  <a key={link.href} href={link.href} style={{ display: "block", color: "#ccc", textDecoration: "none", padding: "8px 0", fontSize: 14 }}>{link.label}</a>
                ))}
              </div>
            )}
          </div>
          <a href="/about-us/" style={{ display: "block", color: "white", textDecoration: "none", padding: "10px 0", fontSize: 15 }}>Who we Are</a>
          <a href="/contact/" style={{ display: "block", color: "white", textDecoration: "none", padding: "10px 0", fontSize: 15 }}>Contact Us</a>
          <a
            href="https://qpctech.rmmservices.net/connect/#/9951961931"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block", color: "white", textDecoration: "none", fontSize: 15,
              border: "2px solid white", borderRadius: 6, padding: "6px 24px", marginTop: 8,
            }}
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

function ServiceCard({ icon, title, titleLink, description }: {
  icon: React.ReactNode;
  title: string;
  titleLink?: string;
  description: React.ReactNode;
}) {
  return (
    <div style={{
      textAlign: "center", padding: "32px 24px", background: "white",
      border: "1px solid #e8e8e8", borderRadius: 4, transition: "box-shadow 0.2s",
    }}
      onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)")}
      onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
    >
      <div style={{ marginBottom: 16 }}>{icon}</div>
      <h3 style={{ color: TEAL, fontSize: 20, fontWeight: 600, marginBottom: 12, marginTop: 0 }}>
        {titleLink
          ? <a href={titleLink} style={{ color: TEAL, textDecoration: "none" }}>{title}</a>
          : title
        }
      </h3>
      <p style={{ color: "#555", fontSize: 15, lineHeight: 1.6, margin: 0 }}>{description}</p>
    </div>
  );
}

function Footer() {
  const linkStyle: React.CSSProperties = {
    color: "#ccc", textDecoration: "none", fontSize: 14, display: "block", marginBottom: 8,
  };
  const headingStyle: React.CSSProperties = {
    color: "white", fontSize: 15, fontWeight: 700, marginBottom: 16, marginTop: 0,
  };

  return (
    <footer style={{ background: "#1a1a1a", color: "#ccc", padding: "48px 0 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 40,
          paddingBottom: 48,
        }} className="footer-grid">
          {/* Column 1 – Services */}
          <div>
            <p style={headingStyle}>Services</p>
            {serviceLinks.map(link => (
              <a key={link.href} href={link.href} style={linkStyle}
                onMouseEnter={e => (e.currentTarget.style.color = "white")}
                onMouseLeave={e => (e.currentTarget.style.color = "#ccc")}
              >{link.label}</a>
            ))}
          </div>

          {/* Column 2 – Office + Contact */}
          <div>
            <p style={headingStyle}>Office</p>
            <p style={{ color: "#ccc", fontSize: 14, marginTop: 0, marginBottom: 4 }}>37 Waldron St</p>
            <p style={{ color: "#ccc", fontSize: 14, marginTop: 0, marginBottom: 24 }}>Hillsdale, MI 49242</p>
            <hr style={{ border: "none", borderTop: "1px solid #444", marginBottom: 24 }} />
            <p style={headingStyle}>Contact Us</p>
            <a href="tel:5176105372" style={linkStyle}
              onMouseEnter={e => (e.currentTarget.style.color = "white")}
              onMouseLeave={e => (e.currentTarget.style.color = "#ccc")}
            >(517) 610-5372</a>
            <a href="mailto:support@qpctech.com" style={linkStyle}
              onMouseEnter={e => (e.currentTarget.style.color = "white")}
              onMouseLeave={e => (e.currentTarget.style.color = "#ccc")}
            >support@qpctech.com</a>
          </div>

          {/* Column 3 – Links */}
          <div>
            <p style={headingStyle}>Links</p>
            {externalLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
                style={linkStyle}
                onMouseEnter={e => (e.currentTarget.style.color = "white")}
                onMouseLeave={e => (e.currentTarget.style.color = "#ccc")}
              >{link.label}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div style={{ borderTop: "1px solid #333", padding: "16px 20px", textAlign: "center" }}>
        <p style={{ color: "#999", fontSize: 13, margin: 0 }}>Copyright &copy; 2026 QPCTech</p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

export default function App() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <main style={{ flex: 1 }}>
        {/* In Store Services */}
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 20px" }}>
          <h3 style={{ color: TEAL, fontSize: 22, fontWeight: 600, marginTop: 0, marginBottom: 32 }}>
            In Store Services
          </h3>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
          }} className="services-grid">
            {services.map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}
          </div>
        </div>

        {/* Where we are Located */}
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 20px" }}>
          <h3 style={{ color: TEAL, fontSize: 22, fontWeight: 600, marginTop: 0, marginBottom: 24 }}>
            Where we are Located
          </h3>
          <div style={{ width: "100%", height: 450 }}>
            <iframe
              loading="lazy"
              src="https://maps.google.com/maps?q=QPCTech&t=m&z=16&output=embed&iwloc=near"
              title="QPCTech"
              aria-label="QPCTech"
              style={{ width: "100%", height: "100%", border: 0 }}
            />
          </div>
        </div>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
