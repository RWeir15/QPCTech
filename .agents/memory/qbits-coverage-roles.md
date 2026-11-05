---
name: Q-BITS coverage roles
description: Owner-confirmed Protection, Detection, and Response responsibilities across Q-BITS service areas.
---

## Current coverage map

- PC / Endpoint Security: NinjaOne provides preventative maintenance, patching, OS updates, and system hardening. Huntress EDR detects threats; Huntress SOC and QPC handle isolation, remediation, and support.
- Network Security: Ubiquiti UniFi is the standard network platform. Some clients use SIEM for network detection; QPC investigates, isolates, and resolves alerts.
- Online Identity: Microsoft Entra ID and Google Admin Console support identity protection. ITDR and QPC monitor for compromise; QPC locks down affected accounts.
- Web Presence & Email Security: DNS, SPF, DKIM, and DMARC protect domains and email; Cloudflare detects web threats; QPC monitors alerts and resolves web, DNS, and site issues.
- NinjaOne is also the RMM used alongside Huntress to remotely access computers, troubleshoot, resolve issues, and review device details.

**Why:** The user supplied the detailed coverage map in the Q-BITS redesign brief and specified SIEM is only used for some clients.

**How to apply:** Keep all four areas separated into Protection, Detection, and Response, label SIEM as client-specific, and distinguish partner tools from QPC-managed work.
