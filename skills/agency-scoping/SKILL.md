---
name: agency-scoping
description: Generates professional agency Scopes of Work (SOWs), tiered retainer packages, FTE resource models, blended hourly rate calculations, contingency buffers, deliverables schedules, and legally sound out-of-scope boundaries. Use when scoping new client engagements, quoting monthly retainers, pricing performance marketing or creative services, drafting SOWs, or when asked to "scope agency project", "write SOW", "agency pricing model", "resource allocation estimate", "retainer tiers".
metadata:
  version: 1.0.0
  author: darimamhaider
  category: agency-operations
---

# Agency Scoping, SOW & Retainer Architecture

Agency profitability is won or lost during scoping. Scope creep is the silent killer of agency margins: undefined revision rounds, surprise tracking audits, and out-of-scope creative requests turn a profitable $10,000/month retainer into an unprofitable 80-hour/month money pit.

This skill builds structured, defensible Scopes of Work (SOWs) with transparent FTE resource allocations, blended hourly rate modeling, clear deliverable SLAs, and airtight out-of-scope guardrails.

---

## 1. Trigger Conditions

Activate when the user requests:
- `"Scope a 6-month growth marketing engagement for [Client]"`
- `"Write an agency Scope of Work (SOW)"`
- `"Calculate required agency hours and monthly retainer fee"`
- `"Create 3-tier agency service packages (Core, Growth, Enterprise)"`
- `"Draft out-of-scope boundaries and change order terms"`

---

## 2. Core Scoping & Margin Mathematics

### A. Blended Hourly Rate Formula
Agencies price using a target blended hourly rate across seniority levels:
$$\text{Blended Rate} = \frac{\sum (\text{Hours}_i \times \text{Billing Rate}_i)}{\text{Total Hours}}$$

Standard agency billing rates:
- **Managing Director / Strategy Lead:** $250 - $350 / hr
- **Media Director / Growth Architect:** $175 - $225 / hr
- **Senior Creative Strategist / Copywriter:** $150 - $185 / hr
- **Media Buyer / Account Manager:** $125 - $150 / hr
- **Graphic Designer / Video Editor:** $95 - $125 / hr
- *Target Agency Blended Rate Benchmark:* **$150 - $185 / hr**

### B. Agency Capacity & Margin Formula
$$\text{Target Retainer Price} = \frac{\text{Total Direct Labor Cost}}{\text{Target Margin Coefficient}}$$
*Where Target Agency Gross Margin is 50-60% (Coefficient: 0.40 - 0.50).*

### C. The 20% Scope Contingency Buffer
Always add a 15-20% contingency buffer to estimated hours to absorb client communication, ad hoc Slack inquiries, and unexpected platform bugs.

---

## 3. Retainer Packaging Architecture (3 Tiers)

Structure agency proposals into 3 tiered offerings:
1. **Tier 1: Core Performance (Media Buying Only):**
   - Media management across 1-2 channels.
   - Client provides all creative assets.
   - Weekly pacing + monthly wrap reports.
2. **Tier 2: Growth Engine (Full Funnel Media + Creative Production):**
   - Multi-channel media buying (Meta + Google + TikTok).
   - 6-10 new creative assets / edits produced per month.
   - Bi-weekly strategy sprint calls + Slack channel.
3. **Tier 3: Enterprise Scale (Omnichannel + Dedicated Strategist + CRO):**
   - Complete digital marketing ownership + landing page experimentation.
   - 15-25 creative assets / month + custom attribution modeling.
   - Dedicated growth team + weekly executive calls.

---

## 4. Standard Output Schema: Agency Scope of Work (SOW)

```markdown
# Scope of Work (SOW): Performance Marketing Engagement
**Client Name:** [Client Company] | **Agency:** [Agency Name]
**Engagement Term:** [6 Months: YYYY-MM-DD to YYYY-MM-DD]
**Monthly Retainer:** $[Amount] / month (+ [X]% of Ad Spend over $[Threshold])

---

## 1. Engagement Overview & Objectives
- **Core Mission:** Accelerate profitable customer acquisition from $[Current] to $[Target] monthly revenue while keeping Blended MER >= [Target MER].
- **Covered Channels:** Meta Ads (Facebook & Instagram), Google Ads (Search, Shopping, PMax), Creative Direction.

---

## 2. Monthly Deliverables & Service Level Agreements (SLAs)

| Functional Area | Specific Monthly Deliverables | Delivery Cadence | SLA Turnaround |
| :--- | :--- | :--- | :--- |
| **Media Management** | Daily pacing audits, bid adjustments, campaign optimizations across Meta & Google | Ongoing Daily | 24-hr response |
| **Creative Strategy** | 2 Creative Briefs per month with 6-8 net-new video cutdowns/variations | Bi-weekly | 5 business days |
| **Reporting & BI** | Live looker dashboard + detailed monthly executive wrap deliverable | Monthly (1st week) | 3 business days |
| **Strategic Comms** | 45-minute bi-weekly performance sync + private Slack channel | Bi-weekly | 4-hr business SLA |

---

## 3. Resource Allocation & Hours Model

| Team Role | Target Monthly Hours | Billing Rate | Monthly Value |
| :--- | :--- | :--- | :--- |
| Strategy Director | 6 hrs | $250 / hr | $1,500 |
| Senior Media Buyer | 22 hrs | $150 / hr | $3,300 |
| Creative Strategist | 12 hrs | $160 / hr | $1,920 |
| Video Editor / Motion Designer | 16 hrs | $110 / hr | $1,760 |
| Account Manager | 10 hrs | $130 / hr | $1,300 |
| **Subtotal (Base Hours)** | **66 hrs** | - | $9,780 |
| **+15% Contingency Buffer** | **10 hrs** | - | $1,500 |
| **Total Monthly Capacity** | **76 hrs / mo** | **Blended: ~$148/hr** | **Fixed Retainer: $11,280/mo** |

---

## 4. Airtight Out-of-Scope Boundaries (Guardrails)
*The following services are strictly out-of-scope for this agreement and require a signed Change Order:*
1. **Net-New Raw Video Production / Live Shoots:** Agency provides creative briefs, scripts, editing, and motion design. Raw UGC filming or studio camera crews are billed separately or handled via creator whitelisting agreements.
2. **Landing Page Re-development:** Copy recommendations and wireframes are included; custom web development, Shopify theme redesign, or code implementation are excluded.
3. **Public Relations & Crisis Communications:** Managing press inquiries, viral backlash, or organic social media moderation (comment monitoring) is not covered under media buying retainers.
4. **Third-Party MarTech Tool Subscriptions:** Client pays all software licensing (Triple Whale, Elevar, Shopify, ad spend directly to Meta/Google).

---

## 5. Change Order Protocol & Additional Hours
Any work requested outside Section 2 will be documented in a written Change Order. Additional hourly work will be billed at the standard agency rate of **$165/hour**, subject to client written approval before initiation.
```

---

## 5. Agency Guardrails

1. **Never Agree to Uncapped Revisions:** Enforce a maximum of 2 revision rounds per creative deliverable. Revisions beyond round 2 are billed at hourly rates.
2. **Tie Percentage of Spend to Spend Tiers:** If including a percentage of ad spend (e.g., 10% of spend), ensure there is always a **base retainer floor** (e.g., "$8,000/mo minimum or 10% of ad spend, whichever is greater"). If the client cuts budget to zero, your team still gets paid.
