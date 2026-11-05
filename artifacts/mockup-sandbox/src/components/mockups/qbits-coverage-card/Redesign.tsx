import "./_group.css";
import {
  Activity,
  Globe2,
  KeyRound,
  Monitor,
  Network,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import styles from "./Redesign.module.css";

type ProviderBadge = {
  label: string;
  type: "partner" | "qpc";
};

type CoverageStep = {
  kind: "protection" | "detection" | "response";
  title: string;
  phase: string;
  icon: LucideIcon;
  providers: ProviderBadge[];
  copy: string;
  note?: string;
};

type CoverageLayer = {
  title: string;
  icon: LucideIcon;
  steps: CoverageStep[];
};

const layers: CoverageLayer[] = [
  {
    title: "PC / Endpoint Security",
    icon: Monitor,
    steps: [
      {
        kind: "protection",
        title: "Protection",
        phase: "Preventative",
        icon: ShieldCheck,
        providers: [{ label: "NinjaOne", type: "partner" }],
        copy: "Delivers continuous preventative maintenance, automated patch management, OS updates, and system hardening.",
      },
      {
        kind: "detection",
        title: "Detection",
        phase: "Monitoring",
        icon: Activity,
        providers: [{ label: "Huntress EDR", type: "partner" }],
        copy: "Continuous 24/7 threat monitoring, behavioral analysis, and persistent access detection across all endpoints.",
      },
      {
        kind: "response",
        title: "Response",
        phase: "Remediation",
        icon: Wrench,
        providers: [
          { label: "Huntress SOC", type: "partner" },
          { label: "QPC", type: "qpc" },
        ],
        copy: "Huntress provides 24/7 human threat hunting and automated device isolation, while QPC delivers hands-on local remediation and support.",
      },
    ],
  },
  {
    title: "Network Security",
    icon: Network,
    steps: [
      {
        kind: "protection",
        title: "Protection",
        phase: "Preventative",
        icon: ShieldCheck,
        providers: [{ label: "Ubiquiti UniFi", type: "partner" }],
        copy: "Ensures preventative security through optimized network segmentation, firewalls, VLANs, and hardware configurations.",
      },
      {
        kind: "detection",
        title: "Detection",
        phase: "Monitoring",
        icon: Activity,
        providers: [
          { label: "UniFi", type: "partner" },
          { label: "SIEM · some clients", type: "partner" },
        ],
        copy: "Centralizes and analyzes network log telemetry to identify anomalies and suspicious traffic patterns in real time.",
        note: "SIEM (Security Information and Event Management) is used for some clients.",
      },
      {
        kind: "response",
        title: "Response",
        phase: "Remediation",
        icon: Wrench,
        providers: [{ label: "QPC", type: "qpc" }],
        copy: "When UniFi or SIEM flags an alert, QPC engineers manually investigate, isolate, and resolve the threat.",
      },
    ],
  },
  {
    title: "Online Identity",
    icon: KeyRound,
    steps: [
      {
        kind: "protection",
        title: "Protection",
        phase: "Preventative",
        icon: ShieldCheck,
        providers: [
          { label: "Microsoft Entra ID", type: "partner" },
          { label: "Google Admin Console", type: "partner" },
        ],
        copy: "Secure identity governance through strict administrative configurations, Multi-Factor Authentication (MFA), and Conditional Access policies.",
      },
      {
        kind: "detection",
        title: "Detection",
        phase: "Monitoring",
        icon: Activity,
        providers: [
          { label: "ITDR", type: "partner" },
          { label: "QPC", type: "qpc" },
        ],
        copy: "Powered by ITDR (Identity Threat Detection and Response) & QPC. Continuously monitors for compromised credentials, unauthorized logins, and privilege abuse.",
      },
      {
        kind: "response",
        title: "Response",
        phase: "Remediation",
        icon: Wrench,
        providers: [{ label: "QPC", type: "qpc" }],
        copy: "QPC takes immediate action to lock down compromised accounts.",
      },
    ],
  },
  {
    title: "Web Presence & Email Security",
    icon: Globe2,
    steps: [
      {
        kind: "protection",
        title: "Protection",
        phase: "Preventative",
        icon: ShieldCheck,
        providers: [
          { label: "DNS", type: "partner" },
          { label: "SPF · DKIM · DMARC", type: "partner" },
        ],
        copy: "Establishes proper domain records to protect brand domain reputation and ensure secure email flow.",
      },
      {
        kind: "detection",
        title: "Detection",
        phase: "Monitoring",
        icon: Activity,
        providers: [{ label: "Cloudflare", type: "partner" }],
        copy: "Real-time traffic monitoring, DDoS protection, and automated bot mitigation to filter malicious site traffic.",
      },
      {
        kind: "response",
        title: "Response",
        phase: "Remediation",
        icon: Wrench,
        providers: [{ label: "QPC", type: "qpc" }],
        copy: "QPC actively monitors Cloudflare alerts and manually resolves web-based threats, DNS changes, or site security issues.",
      },
    ],
  },
];

export function Redesign() {
  return (
    <main className={styles.frameRoot}>
      <section className={styles.coverageSection} aria-labelledby="qbits-coverage-title">
        <div className={styles.coverageContainer}>
          <header className={styles.coverageHeader}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              Layered Q-BITS protection
            </div>
            <h2 id="qbits-coverage-title">A clear plan for every layer.</h2>
            <p>
              Prevention, monitoring, and response work together to protect your technology and keep your team moving.
            </p>
            <div className={styles.legend} aria-label="Coverage providers">
              <span className={styles.legendItem}><span className={styles.legendPartner} aria-hidden="true" /> Technology partner</span>
              <span className={styles.legendItem}><span className={styles.legendQpc} aria-hidden="true" /> QPC team</span>
            </div>
          </header>

          <div className={styles.layerGrid}>
            {layers.map((layer, index) => {
              const LayerIcon = layer.icon;

              return (
                <article className={styles.layerCard} data-testid={`card-qbits-layer-${index + 1}`} key={layer.title}>
                  <header className={styles.layerHeader}>
                    <span className={styles.layerNumber}>0{index + 1}</span>
                    <div className={styles.layerIcon} aria-hidden="true">
                      <LayerIcon size={22} strokeWidth={1.8} />
                    </div>
                    <h3>{layer.title}</h3>
                  </header>

                  <div className={styles.stepList}>
                    {layer.steps.map((step) => {
                      const StepIcon = step.icon;

                      return (
                        <section className={`${styles.step} ${styles[step.kind]}`} key={step.kind} aria-label={`${step.title} — ${step.phase}`} data-testid={`text-qbits-${index + 1}-${step.kind}`}>
                          <div className={styles.stepHeading}>
                            <StepIcon className={styles.stepIcon} size={17} strokeWidth={2} aria-hidden="true" />
                            <div>
                              <h4>{step.title}</h4>
                              <span>{step.phase}</span>
                            </div>
                          </div>
                          <div className={styles.providerList}>
                            {step.providers.map((provider) => (
                              <span className={`${styles.providerBadge} ${provider.type === "qpc" ? styles.qpcBadge : styles.partnerBadge}`} key={provider.label}>
                                {provider.label}
                              </span>
                            ))}
                          </div>
                          <p>{step.copy}</p>
                          {step.note && <p className={styles.stepNote}>{step.note}</p>}
                        </section>
                      );
                    })}
                  </div>
                </article>
              );
            })}
          </div>
          <p className={styles.coverageNote}>
            Services and tools vary by client setup. QPC will confirm the coverage included in your Q-BITS plan.
          </p>
        </div>
      </section>
    </main>
  );
}
