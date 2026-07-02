import { Phone, Wrench, Laptop, Monitor, Shield, Clock, Star, ArrowRight } from "lucide-react";

const TEAL = "#06b6d4";
const DARK = "#050d1a";
const CARD = "#0a1628";
const BORDER = "#0f2040";

export function PaletteB() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: DARK, color: "#e2e8f0", overflowX: "hidden" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');`}</style>

      <div style={{ background: TEAL, color: DARK, textAlign: "center", padding: "8px", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em" }}>
        OPTION B — DEEP OCEAN · Deeper Navy + Cyan
      </div>

      <header style={{ background: "#02080f", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72, borderBottom: `1px solid ${BORDER}` }}>
        <img src="https://www.qpctech.com/wp-content/uploads/2024/03/cropped-QPCTech-logo.png" alt="QPCTech" style={{ height: 50 }} />
        <nav style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {["Home", "Services ▾", "Who We Are", "Contact Us"].map(n => (
            <span key={n} style={{ color: "#64748b", fontSize: 14, fontWeight: 500 }}>{n}</span>
          ))}
          <span style={{ background: TEAL, color: DARK, padding: "9px 20px", borderRadius: 6, fontSize: 13, fontWeight: 800 }}>Remote Support</span>
        </nav>
      </header>

      <section style={{ background: `linear-gradient(160deg, ${DARK} 0%, #071428 50%, #030f1e 100%)`, padding: "60px 48px 52px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(6,182,212,0.05) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div style={{ position: "absolute", right: -60, top: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(6,182,212,0.09) 0%, transparent 70%)" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", position: "relative" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(6,182,212,0.12)", border: "1px solid rgba(6,182,212,0.28)", borderRadius: 20, padding: "5px 14px", marginBottom: 18 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: TEAL }} />
              <span style={{ color: TEAL, fontSize: 11, fontWeight: 700, letterSpacing: "0.09em", textTransform: "uppercase" }}>Hillsdale's IT Experts Since 2014</span>
            </div>
            <h1 style={{ color: "white", fontSize: 44, fontWeight: 900, lineHeight: 1.08, margin: "0 0 16px", letterSpacing: "-0.03em" }}>
              Technology That <span style={{ color: TEAL }}>Works For You.</span>
            </h1>
            <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.75, margin: "0 0 26px", maxWidth: 400 }}>
              From quick walk-in repairs to comprehensive managed IT — QPCTech keeps local businesses running.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <span style={{ background: TEAL, color: DARK, padding: "12px 24px", borderRadius: 8, fontWeight: 800, fontSize: 14, display: "inline-flex", alignItems: "center", gap: 8 }}>
                View Services <ArrowRight size={14} />
              </span>
              <span style={{ background: "rgba(255,255,255,0.05)", color: "#e2e8f0", padding: "12px 20px", borderRadius: 8, fontWeight: 600, fontSize: 14, border: `1px solid ${BORDER}`, display: "inline-flex", alignItems: "center", gap: 8 }}>
                <Phone size={14} color={TEAL} /> Call Now
              </span>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              { Icon: Shield, label: "Trusted & Local", sub: "Since 2014" },
              { Icon: Clock, label: "Same-Day Repairs", sub: "Most jobs done fast" },
              { Icon: Star, label: "5-Star Rated", sub: "1,000+ customers" },
              { Icon: Phone, label: "(517) 610-5372", sub: "Always reachable" },
            ].map((t, i) => (
              <div key={i} style={{ background: CARD, borderRadius: 12, padding: "18px", border: `1px solid ${BORDER}` }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(6,182,212,0.14)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                  <t.Icon size={18} color={TEAL} />
                </div>
                <p style={{ color: "white", fontWeight: 700, fontSize: 13, margin: "0 0 3px" }}>{t.label}</p>
                <p style={{ color: "#334155", fontSize: 11, margin: 0 }}>{t.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ background: "#02080f", padding: "26px 48px", display: "flex", justifyContent: "center", borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        {[["1,000+", "Clients Served"], ["10+", "Years Experience"], ["100%", "Southern Michigan"]].map(([val, lbl], i) => (
          <div key={i} style={{ flex: 1, maxWidth: 260, textAlign: "center", borderRight: i < 2 ? `1px solid ${BORDER}` : "none", padding: "0 20px" }}>
            <div style={{ color: TEAL, fontSize: 30, fontWeight: 900, letterSpacing: "-0.02em" }}>{val}</div>
            <div style={{ color: "#1e3a5f", fontSize: 11, marginTop: 5, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>{lbl}</div>
          </div>
        ))}
      </div>

      <section style={{ padding: "44px 48px", background: DARK }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.22)", borderRadius: 20, padding: "4px 14px", marginBottom: 14 }}>
            <span style={{ color: TEAL, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Walk-In Services</span>
          </div>
          <h2 style={{ color: "white", fontSize: 26, fontWeight: 800, margin: "0 0 24px" }}>In-Store Services</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
            {[Wrench, Laptop, Monitor, Shield].map((Icon, i) => (
              <div key={i} style={{ background: CARD, borderRadius: 12, padding: "20px 16px", border: `1px solid ${BORDER}`, borderLeft: `4px solid ${TEAL}` }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(6,182,212,0.12)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                  <Icon size={17} color={TEAL} />
                </div>
                <h3 style={{ color: "white", fontSize: 13, fontWeight: 700, margin: "0 0 5px" }}>{["Computer Repair", "Computer Sales", "OS Upgrade", "Virus Removal"][i]}</h3>
                <p style={{ color: "#334155", fontSize: 12, lineHeight: 1.6, margin: 0 }}>{["Fast diagnostics and repair.", "Tested refurbished computers.", "Stay secure and patched.", "Full malware removal."][i]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ background: "#02080f", padding: "20px 48px", borderTop: `1px solid ${BORDER}`, display: "flex", alignItems: "center", gap: 20 }}>
        <span style={{ color: "#334155", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>Palette:</span>
        {[{ c: "#06b6d4", l: "#06b6d4 — Cyan 500" }, { c: "#050d1a", l: "#050d1a — Near Black" }, { c: "#0a1628", l: "#0a1628 — Card Dark" }, { c: "#0f2040", l: "#0f2040 — Borders" }].map(({ c, l }) => (
          <div key={c} style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <div style={{ width: 24, height: 24, borderRadius: 5, background: c, border: "2px solid #1e3a5f" }} />
            <span style={{ fontSize: 11, color: "#475569" }}>{l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
