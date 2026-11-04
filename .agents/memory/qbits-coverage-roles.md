---
name: Q-BITS coverage roles
description: Owner-confirmed distinctions for PC and Network coverage and unconfirmed Identity/Web Presence cell assignments.
---

## Confirmed coverage

- PC: Huntress provides antivirus/security protection, compromise detection, and response.
- NinjaOne is an RMM tool used alongside Huntress to remotely access client computers, resolve issues, and review device details.
- Network: UniFi is used for protection, detection, and response in most cases. A few clients use SIEM instead.

## Not yet confirmed

- The user has not specified the exact Network column where SIEM belongs.
- The user's original reference names Entra ID and TechIDManager for Online Identity, and Cloudflare and DNS for Web Presence, but their Protection/Detection/Response roles still need confirmation.

**Why:** These service distinctions and the user's requested category boundaries are not recoverable from the code alone.

**How to apply:** Keep confirmed roles explicit in Q-BITS content. Do not place SIEM in a specific Network column or assign Identity/Web Presence tools to columns until the user confirms those roles.
