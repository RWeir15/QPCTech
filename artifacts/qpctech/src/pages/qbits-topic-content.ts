export type QBitsTopicSection = {
  heading: string;
  paragraphs: string[];
};

export type QBitsTopic = {
  slug: string;
  area: string;
  stage: string;
  title: string;
  lead: string;
  tools: string[];
  sections: QBitsTopicSection[];
  takeaway: string;
};

export const qbitsTopics: QBitsTopic[] = [
  {
    slug: "pc-protection",
    area: "PC / Endpoint Security",
    stage: "Protection",
    title: "Protecting and Maintaining PCs",
    lead: "Reliable computer security starts with devices that are monitored, maintained, and kept up to date.",
    tools: ["NinjaOne", "Huntress"],
    sections: [
      {
        heading: "Keep devices maintained",
        paragraphs: [
          "NinjaOne is the remote monitoring and management tool used alongside Huntress. It gives technicians detailed device information and lets them remotely troubleshoot and resolve computer issues.",
          "Routine maintenance can include operating-system and software patching, updates, and system hardening. These steps help keep devices in a known, supportable condition.",
        ],
      },
      {
        heading: "How this layer fits Q-BITS",
        paragraphs: [
          "NinjaOne supports visibility and maintenance, while Huntress provides managed endpoint security. Together, they help keep computers running smoothly and make it easier to investigate issues when they arise.",
        ],
      },
    ],
    takeaway: "NinjaOne helps monitor, maintain, and remotely troubleshoot computers.",
  },
  {
    slug: "pc-detection",
    area: "PC / Endpoint Security",
    stage: "Detection",
    title: "Detecting Suspicious PC Activity",
    lead: "Endpoint detection looks for suspicious activity that basic antivirus protection may not explain on its own.",
    tools: ["Huntress EDR"],
    sections: [
      {
        heading: "What endpoint detection does",
        paragraphs: [
          "Huntress EDR monitors endpoints for suspicious behavior and signs of persistent access. EDR means Endpoint Detection and Response.",
          "Monitoring helps surface activity for investigation. An alert is a signal to review what happened, not by itself proof that a device is compromised.",
        ],
      },
      {
        heading: "Why ongoing monitoring matters",
        paragraphs: [
          "Security events can be easy to miss when no one is actively watching. Managed monitoring adds ongoing review so unusual activity can be investigated and addressed.",
        ],
      },
    ],
    takeaway: "Huntress EDR monitors endpoints around the clock for suspicious activity.",
  },
  {
    slug: "pc-response",
    area: "PC / Endpoint Security",
    stage: "Response",
    title: "Responding to PC Threats",
    lead: "When a device raises a security concern, investigation and containment help guide the next steps.",
    tools: ["Huntress SOC"],
    sections: [
      {
        heading: "Investigate and contain",
        paragraphs: [
          "Huntress's Security Operations Center (SOC) hunts for threats and can isolate supported devices while an incident is investigated. Isolation can help limit a problem from spreading to other systems.",
          "The response depends on the alert and the affected device. The goal is to understand what happened and choose an appropriate remediation path.",
        ],
      },
      {
        heading: "Restore normal operation",
        paragraphs: [
          "After investigation, remediation and local support help return the computer to a safe, usable state. Follow-up may also include maintenance or prevention steps based on what was found.",
        ],
      },
    ],
    takeaway: "Huntress SOC investigates threats and isolates affected devices; local support handles remediation.",
  },
  {
    slug: "network-protection",
    area: "Network Security",
    stage: "Protection",
    title: "Protecting the Business Network",
    lead: "A well-organized network helps separate devices, manage traffic, and support reliable connections across a business.",
    tools: ["Ubiquiti UniFi"],
    sections: [
      {
        heading: "Organize devices and traffic",
        paragraphs: [
          "UniFi network equipment can be configured with segmentation, firewalls, and VLANs. These controls help group devices and manage how traffic moves between parts of a network.",
          "The right configuration depends on the organization’s equipment, layout, and business needs. A clear network design also makes troubleshooting easier.",
        ],
      },
      {
        heading: "Build around the environment",
        paragraphs: [
          "Network protection includes the hardware and the way it is configured. Access points, switches, and routing equipment need to work together to provide coverage and keep business systems connected.",
        ],
      },
    ],
    takeaway: "UniFi provides the network platform for segmentation, firewall controls, and VLANs.",
  },
  {
    slug: "network-detection",
    area: "Network Security",
    stage: "Detection",
    title: "Monitoring Network Activity",
    lead: "Network monitoring helps identify unusual patterns that may need a closer look.",
    tools: ["UniFi", "SIEM"],
    sections: [
      {
        heading: "Review activity across the network",
        paragraphs: [
          "UniFi is the standard network platform. Where a SIEM is included, it can bring together network logs so activity can be reviewed for anomalies.",
          "SIEM means Security Information and Event Management. It helps organize security-related information for monitoring and investigation; an alert still needs context before deciding what action to take.",
        ],
      },
      {
        heading: "Detection depends on context",
        paragraphs: [
          "Unusual network activity can have many causes, from normal business changes to a security issue. Monitoring provides information that helps determine what deserves follow-up. Available tools can vary by client setup.",
        ],
      },
    ],
    takeaway: "UniFi is standard for network coverage; SIEM can provide additional log analysis.",
  },
  {
    slug: "network-response",
    area: "Network Security",
    stage: "Response",
    title: "Responding to Network Alerts",
    lead: "A network alert is the start of a review: the goal is to understand the event, limit impact, and resolve the issue.",
    tools: ["UniFi", "SIEM"],
    sections: [
      {
        heading: "Investigate before acting",
        paragraphs: [
          "Network alerts are reviewed alongside the available logs and information about affected systems. This helps distinguish an unusual but expected event from a problem that needs a response.",
          "When a threat is confirmed, affected systems can be isolated while the issue is investigated and resolved.",
        ],
      },
      {
        heading: "Keep the business moving",
        paragraphs: [
          "Response is tailored to the systems involved and the impact on day-to-day work. The objective is to address the network threat while restoring normal access as safely as possible.",
        ],
      },
    ],
    takeaway: "Network response focuses on investigating alerts, containing affected systems, and resolving threats.",
  },
  {
    slug: "identity-protection",
    area: "Online Identity",
    stage: "Protection",
    title: "Protecting Online Identities",
    lead: "Identity controls help ensure that the right people can access business accounts and services.",
    tools: ["Microsoft Entra ID", "Google Admin Console"],
    sections: [
      {
        heading: "Strengthen account access",
        paragraphs: [
          "Microsoft Entra ID and Google Admin Console provide identity and account-management controls. Multi-factor authentication (MFA) adds a verification step beyond a password.",
          "Administrative controls and Conditional Access policies can help shape how accounts sign in and what they are allowed to access.",
        ],
      },
      {
        heading: "Use controls that fit the organization",
        paragraphs: [
          "Identity protection works best when account settings match how a business operates. Reviewing access and administrative privileges helps keep accounts manageable as staff and needs change.",
        ],
      },
    ],
    takeaway: "Entra ID and Google Admin Console support MFA, administrative controls, and Conditional Access.",
  },
  {
    slug: "identity-detection",
    area: "Online Identity",
    stage: "Detection",
    title: "Detecting Identity Threats",
    lead: "Identity monitoring looks for signs that credentials or accounts may be misused.",
    tools: ["ITDR"],
    sections: [
      {
        heading: "What ITDR monitors",
        paragraphs: [
          "ITDR means Identity Threat Detection and Response. It focuses on signals such as compromised credentials, unauthorized sign-ins, and unusual privilege use.",
          "These signals need context. Reviewing them helps determine whether an event is expected or whether an account may need protection.",
        ],
      },
      {
        heading: "Connect identity signals",
        paragraphs: [
          "Identity threats may involve more than one account or service. Monitoring helps bring attention to suspicious activity so it can be investigated before further action is taken.",
        ],
      },
    ],
    takeaway: "ITDR helps monitor for compromised credentials, unauthorized logins, and privilege abuse.",
  },
  {
    slug: "identity-response",
    area: "Online Identity",
    stage: "Response",
    title: "Responding to Identity Incidents",
    lead: "When an account may be compromised, securing access quickly helps reduce the chance of continued misuse.",
    tools: ["ITDR"],
    sections: [
      {
        heading: "Secure the affected account",
        paragraphs: [
          "Response may include locking down a compromised account while the activity is reviewed. The steps depend on the account, the alert, and the organization’s access requirements.",
          "A careful response aims to protect business information while limiting unnecessary disruption for the account owner and team.",
        ],
      },
      {
        heading: "Review and recover",
        paragraphs: [
          "After access is secured, the incident can be investigated and appropriate recovery steps taken. Clear account practices and strong sign-in controls can help reduce the chance of a repeat issue.",
        ],
      },
    ],
    takeaway: "Identity response focuses on securing affected accounts and reviewing the incident.",
  },
  {
    slug: "web-protection",
    area: "Web Presence & Email Security",
    stage: "Protection",
    title: "Protecting Your Web Presence and Email",
    lead: "Domain and email settings help people reach your website and help receiving mail systems verify messages from your business.",
    tools: ["DNS", "SPF", "DKIM", "DMARC"],
    sections: [
      {
        heading: "Understand the key records",
        paragraphs: [
          "DNS records direct a domain’s traffic to the right services. SPF identifies approved sources for sending email, DKIM adds a verifiable signature to messages, and DMARC sets a policy for messages that fail authentication checks.",
          "Together, SPF, DKIM, and DMARC help receiving mail systems assess whether email claiming to come from a domain is authorized.",
        ],
      },
      {
        heading: "Keep changes coordinated",
        paragraphs: [
          "A domain may support a website, email, and other business services at the same time. Reviewing DNS and email-authentication changes carefully helps protect delivery and avoid interrupting services.",
        ],
      },
    ],
    takeaway: "DNS, SPF, DKIM, and DMARC support domain reputation and secure email delivery.",
  },
  {
    slug: "web-detection",
    area: "Web Presence & Email Security",
    stage: "Detection",
    title: "Monitoring Web Traffic",
    lead: "Web traffic monitoring helps identify requests that may threaten a site’s availability or security.",
    tools: ["Cloudflare"],
    sections: [
      {
        heading: "Review incoming traffic",
        paragraphs: [
          "Cloudflare monitors web traffic and helps mitigate distributed denial-of-service (DDoS) attacks and malicious bots. Filtering unwanted traffic can help protect a site’s availability.",
          "Traffic patterns can change for many reasons. Monitoring helps surface activity for review rather than treating every spike as an incident.",
        ],
      },
      {
        heading: "Support a reliable web presence",
        paragraphs: [
          "A website is often a key part of how customers find and contact a business. Monitoring adds another layer of visibility into activity reaching the site.",
        ],
      },
    ],
    takeaway: "Cloudflare monitors traffic and helps mitigate DDoS attacks and malicious bots.",
  },
  {
    slug: "web-response",
    area: "Web Presence & Email Security",
    stage: "Response",
    title: "Responding to Web and DNS Issues",
    lead: "When a web or DNS alert needs attention, reviewing the change and its impact helps guide a safe resolution.",
    tools: ["Cloudflare"],
    sections: [
      {
        heading: "Review the alert and affected service",
        paragraphs: [
          "Cloudflare alerts can help identify web threats or unusual traffic. A review also considers related DNS changes and site-security settings to understand what is affected.",
          "Resolution depends on the issue. The priority is to address the threat or configuration problem while keeping the website and related services available.",
        ],
      },
      {
        heading: "Check service after changes",
        paragraphs: [
          "After a web or DNS change, the affected site and related services should be checked to confirm they are working as expected. This helps close the loop after the issue is resolved.",
        ],
      },
    ],
    takeaway: "Web response includes reviewing Cloudflare alerts and resolving web, DNS, or site-security issues.",
  },
];

export function getQBitsTopic(slug: string) {
  return qbitsTopics.find((topic) => topic.slug === slug);
}
