import { Phone, Wrench, Laptop, Monitor, Shield, Clock, Star, ArrowRight } from "lucide-react";

const TEAL = "#37b5e6";
const DARK = "#0f172a";

const trustItems = [
  { Icon: Shield, label: "Trusted & Local", sub: "Since 2014" },
  { Icon: Clock, label: "Same-Day Repairs", sub: "Most jobs done fast" },
  { Icon: Star, label: "5-Star Rated", sub: "1,000+ customers" },
  { Icon: Phone, label: "(517) 610-5372", sub: "Always reachable" },
];

const serviceIcons = [Wrench, Laptop, Monitor, Shield];
const serviceTitles = ["Computer Repair", "Computer Sales", "OS Upgrade", "Virus Removal"];
const serviceDescs = ["Fast diagnostics and repair.", "Tested refurbished computers.", "Stay secure and patched.", "Full malware removal."];

const swatches = [
  { c: TEAL, l: "#37b5e6 — Logo Teal" },
  { c: DARK, l: "#0f172a — Hero Dark" },
  { c: "#f8fafc", l: "#f8fafc — Section BG" },
  { c: "#ffffff", l: "white — Header + Cards" },
];

export function PaletteC() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", minHeight: "100vh", background: "#f8fafc", color: "#1e293b", overflowX: "hidden" }}>

      {/* LABEL BAR */}
      <div style={{ background: TEAL, color: "white", textAlign: "center", padding: "8px", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em" }}>
        OPTION C — TEAL + LIGHT: White Header, Light Content Sections
      </div>

      {/* WHITE HEADER */}
      <header style={{ background: "white", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72, borderBottom: "1px solid #e2e8f0" }}>
        <img src="https://www.qpctech.com/wp-content/uploads/2024/03/cropped-QPCTech-logo.png" alt="QPCTech" style={{ height: 50 }} />
        <nav style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {["Home", "Services", "Who We Are", "Contact Us"].map(n => (
            <span key={n} style={{ color: "#374151", fontSize: 14, fontWeight: 500 }}>{n}</span>
          ))}
          <span style={{ background: TEAL, color: "white", padding: "9px 20px", borderRadius: 6, fontSize: 13, fontWeight: 700 }}>Remote Support</span>
        </nav>
      </header>

      {/* DARK HERO */}
      <section style={{ background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 55%, #0d3050 100%)", padding: "60px 48px 52px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", position: "relative" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(55,181,230,0.15)", border: "1px solid rgba(55,181,230,0.3)", borderRadius: 20, padding: "5px 14px", marginBottom: 18 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: TEAL }} />
              <span style={{ color: TEAL, fontSize: 11, fontWeight: 700, letterSpacing: "0.09em", textTransform: "uppercase" }}>Hillsdale IT Experts Since 2014</span>
            </div>
            <h1 style={{ color: "white", fontSize: 44, fontWeight: 900, lineHeight: 1.08, margin: "0 0 16px", letterSpacing: "-0.03em" }}>
              Technology That <span style={{ color: TEAL }}>Works For You.</span>
            </h1>
            <p style={{ color: "#94a3b8", fontSize: 15, lineHeight: 1.75, margin: "0 0 26px", maxWidth: 400 }}>
              From quick walk-in repairs to comprehensive managed IT.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <span style={{ background: TEAL, color: "white", padding: "12px 24px", borderRadius: 8, fontWeight: 700, fontSize: 14, display: "inline-flex", alignItems: "center", gap: 8 }}>
                View Services <ArrowRight size={14} />
              </span>
              <span style={{ background: "white", color: DARK, padding: "12px 20px", borderRadius: 8, fontWeight: 700, fontSize: 14, display: "inline-flex", alignItems: "center", gap: 8 }}>
                <Phone size={14} color={TEAL} /> Call Now
              </span>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {trustItems.map((t, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.08)", borderRadius: 12, padding: "18px", border: "1px solid rgba(255,255,255,0.12)" }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(55,181,230,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                  <t.Icon size={18} color={TEAL} />
                </div>
                <p style={{ color: "white", fontWeight: 700, fontSize: 13, margin: "0 0 3px" }}>{t.label}</p>
                <p style={{ color: "#94a3b8", fontSize: 11, margin: 0 }}>{t.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHITE STATS BAR */}
      <div style={{ background: "white", padding: "26px 48px", display: "flex", justifyContent: "center", borderBottom: "1px solid #f1f5f9" }}>
        {[["1,000+", "Clients Served"], ["10+", "Years Experience"], ["100%", "Southern Michigan"]].map(([val, lbl], i) => (
          <div key={i} style={{ flex: 1, maxWidth: 260, textAlign: "center", borderRight: i < 2 ? "1px solid #f1f5f9" : "none", padding: "0 20px" }}>
            <div style={{ color: TEAL, fontSize: 30, fontWeight: 900 }}>{val}</div>
            <div style={{ color: "#94a3b8", fontSize: 11, marginTop: 5, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>{lbl}</div>
          </div>
        ))}
      </div>

      {/* LIGHT SERVICE CARDS */}
      <section style={{ padding: "44px 48px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", background: "rgba(55,181,230,0.1)", border: "1px solid rgba(55,181,230,0.3)", borderRadius: 20, padding: "4px 14px", marginBottom: 14 }}>
            <span style={{ color: TEAL, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Walk-In Services</span>
          </div>
          <h2 style={{ color: DARK, fontSize: 26, fontWeight: 800, margin: "0 0 24px" }}>In-Store Services</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
            {serviceIcons.map((Icon, i) => (
              <div key={i} style={{ background: "white", borderRadius: 12, padding: "20px 16px", border: "1px solid #e2e8f0", borderTop: "3px solid " + TEAL }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(55,181,230,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                  <Icon size={17} color={TEAL} />
                </div>
                <h3 style={{ color: "#111827", fontSize: 13, fontWeight: 700, margin: "0 0 5px" }}>{serviceTitles[i]}</h3>
                <p style={{ color: "#64748b", fontSize: 12, lineHeight: 1.6, margin: 0 }}>{serviceDescs[i]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PALETTE SWATCHES */}
      <div style={{ background: "white", padding: "20px 48px", borderTop: "1px solid #e2e8f0", display: "flex", alignItems: "center", gap: 20 }}>
        <span style={{ color: "#94a3b8", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>Palette:</span>
        {swatches.map(({ c, l }) => (
          <div key={l} style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <div style={{ width: 24, height: 24, borderRadius: 5, background: c, border: "2px solid #e2e8f0" }} />
            <span style={{ fontSize: 11, color: "#64748b" }}>{l}</span>
          </div>
        ))}
      </div>

    </div>
  );
}
