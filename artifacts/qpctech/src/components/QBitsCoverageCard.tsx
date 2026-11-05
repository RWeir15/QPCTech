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
import styles from "./QBitsCoverageCard.module.css";

const coverageColumns = [
  { kind: "protection", label: "Protection" },
  { kind: "detection", label: "Detection" },
  { kind: "response", label: "Response" },
] as const;

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
        copy: "Provides preventative maintenance, patching, OS updates, and system hardening. Used alongside Huntress to remotely access computers, troubleshoot and resolve issues, and review detailed device information.",
      },
      {
        kind: "detection",
        title: "Detection",
        phase: "Monitoring",
        icon: Activity,
        providers: [{ label: "Huntress EDR", type: "partner" }],
        copy: "Huntress EDR monitors endpoints 24/7 for suspicious behavior and persistent access.",
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
        copy: "Huntress SOC hunts threats and isolates devices; QPC provides local remediation and support.",
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
        copy: "UniFi secures network hardware with segmentation, firewalls, and VLANs.",
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
        copy: "UniFi is standard; SIEM analyzes network logs for anomalies on some client setups.",
        note: "SIEM means Security Information and Event Management.",
      },
      {
        kind: "response",
        title: "Response",
        phase: "Remediation",
        icon: Wrench,
        providers: [{ label: "QPC", type: "qpc" }],
        copy: "QPC investigates alerts, isolates affected systems, and resolves network threats.",
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
        copy: "Entra ID and Google Admin Console use MFA, admin controls, and Conditional Access to help secure accounts.",
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
        copy: "ITDR (Identity Threat Detection and Response) and QPC monitor for compromised credentials, unauthorized logins, and privilege abuse.",
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
        copy: "DNS, SPF, DKIM, and DMARC records help protect domain reputation and secure email delivery.",
      },
      {
        kind: "detection",
        title: "Detection",
        phase: "Monitoring",
        icon: Activity,
        providers: [{ label: "Cloudflare", type: "partner" }],
        copy: "Cloudflare monitors traffic and helps mitigate DDoS attacks and malicious bots.",
      },
      {
        kind: "response",
        title: "Response",
        phase: "Remediation",
        icon: Wrench,
        providers: [{ label: "QPC", type: "qpc" }],
        copy: "QPC reviews Cloudflare alerts and resolves web threats, DNS changes, or site-security issues.",
      },
    ],
  },
];

export function QBitsCoverageCard() {
  return (
    <section className={styles.bingoSection} aria-labelledby="qbits-bingo-title">
      <div className={styles.bingoContainer}>
        <div className={styles.bingoHeading}>
          <span className={styles.bingoEyebrow}>A layered approach</span>
          <h2 id="qbits-bingo-title" className={styles.heading}>Q-BITS Coverage Card</h2>
          <p className={styles.bingoIntro}>
            See how each area is protected, monitored, and supported.
          </p>
          <div className={styles.legend} aria-label="Coverage providers">
            <span className={styles.legendItem}><span className={styles.partnerKey} aria-hidden="true" /> Technology partner</span>
            <span className={styles.legendItem}><span className={styles.qpcKey} aria-hidden="true" /> QPC team</span>
          </div>
        </div>

        <div className={styles.bingoBoard} role="table" aria-label="Q-BITS coverage by technology area">
          <div className={`${styles.bingoRow} ${styles.bingoHeader}`} role="row">
            <div className={styles.bingoCell} role="columnheader">Area</div>
            {coverageColumns.map((column) => (
              <div className={styles.bingoCell} role="columnheader" key={column.kind}>{column.label}</div>
            ))}
          </div>
          {layers.map((layer, index) => (
            <div className={styles.bingoRow} role="row" key={layer.title}>
              <div className={`${styles.bingoCell} ${styles.bingoArea}`} role="rowheader" data-testid={`text-qbits-area-${index + 1}`}>
                {layer.title}
              </div>
              {coverageColumns.map((column) => {
                const step = layer.steps.find((item) => item.kind === column.kind);
                if (!step) return null;

                return (
                  <div className={styles.bingoCell} role="cell" data-label={column.label} data-testid={`text-qbits-${index + 1}-${column.kind}`} key={column.kind}>
                    <span className={styles.cellLabel}>{column.label}</span>
                    <div className={styles.cellContent}>
                      <div className={styles.providerList}>
                        {step.providers.map((provider) => (
                          <span className={`${styles.providerBadge} ${provider.type === "qpc" ? styles.qpcBadge : styles.partnerBadge}`} key={provider.label}>
                            {provider.label}
                          </span>
                        ))}
                      </div>
                      <p className={styles.cellDescription}>{step.copy}</p>
                      {step.note && <p className={styles.stepNote}>{step.note}</p>}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <p className={styles.bingoNote}>
          Tools and coverage vary by client setup and Q-BITS service scope.
        </p>
      </div>
    </section>
  );
}
