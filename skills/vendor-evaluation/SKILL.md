---
name: vendor-evaluation
description: Objective MarTech vendor evaluation and RFP comparison scorecard for marketing teams and agencies selecting software (CDP, Attribution, ESP/SMS, Creative Automation, BI, Reporting). Calculates 3-year Total Cost of Ownership (TCO), rates multi-client agency management features, API limits, data lock-in risks, and weighted requirements criteria. Use when evaluating marketing tech vendors, replacing expensive SaaS subscriptions, drafting MarTech RFIs, or when asked to "compare martech tools", "vendor evaluation scorecard", "Triple Whale vs Northbeam", "Klaviyo vs Attentive", "TCO calculator".
metadata:
  version: 1.0.0
  author: darimamhaider
  category: agency-operations
---

# MarTech Vendor Evaluation & Scorecard Engine

Agencies frequently advise clients who are burning tens of thousands of dollars on shelfware—expensive enterprise MarTech tools that take 6 months to implement and fail to deliver ROI. Alternatively, clients adopt cheap single-seat tools that cannot handle agency multi-account switching or lack server-side event streaming.

This skill provides an objective, weighted scorecard framework to evaluate marketing technology vendors, model 3-year Total Cost of Ownership (TCO), and identify hidden vendor lock-in traps.

---

## 1. Trigger Conditions

Activate when the user requests:
- `"Compare Triple Whale vs Northbeam for a $5M D2C brand"`
- `"Evaluate Klaviyo vs Omnisend vs Attentive"`
- `"Build a MarTech vendor evaluation scorecard"`
- `"Calculate 3-year Total Cost of Ownership (TCO) for this analytics tool"`
- `"Help our agency choose a creative automation platform"`

---

## 2. The 6-Dimensional Evaluation Framework

Every marketing tool is evaluated across six weighted dimensions:

```
+-------------------------------------------------------------------------------+
|                       6-DIMENSIONAL MARTECH SCORECARD                         |
+-------------------------------------------------------------------------------+
|  1. CORE CAPABILITY & FEATURE PARITY (30% Weight)                             |
|     - Does it solve the client's stated primary bottleneck out-of-the-box?    |
|                                                                               |
|  2. DATA ARCHITECTURE & INTEGRATION ECOSYSTEM (20% Weight)                    |
|     - Native webhook support, raw event export, BigQuery/Snowflake sync       |
|                                                                               |
|  3. TOTAL COST OF OWNERSHIP - TCO (20% Weight)                                |
|     - Base subscription + tier overage penalities + implementation onboarding |
|                                                                               |
|  4. AGENCY MULTI-ACCOUNT USABILITY (10% Weight)                               |
|     - Single sign-on (SSO), cross-account switcher, centralized billing       |
|                                                                               |
|  5. TIME-TO-VALUE & IMPLEMENTATION OVERHEAD (10% Weight)                      |
|     - Self-serve in 48 hours vs mandatory 8-week enterprise professional svcs |
|                                                                               |
|  6. DATA PORTABILITY & VENDOR LOCK-IN RISK (10% Weight)                       |
|     - Can we export historical data if we terminate? Proprietary data traps?  |
+-------------------------------------------------------------------------------+
```

---

## 3. Total Cost of Ownership (TCO) Model

Never evaluate software purely on the monthly sticker price. Model the true 3-year financial footprint:

$$\text{Year 1 TCO} = \text{Annual Base Fee} + \text{Setup/Onboarding Fee} + \text{Projected Overages} + \text{Internal Dev Hours} \times \$125$$
$$\text{3-Year TCO} = \text{Year 1 TCO} + (\text{Annual Base} \times (1 + \text{Price Escalation})^1) + (\text{Annual Base} \times (1 + \text{Price Escalation})^2)$$

*(Enterprise contracts typically insert an automatic 7-12% annual renewal price escalator unless negotiated out).*

---

## 4. Standard Output Schema: MarTech Vendor Evaluation

```markdown
# MarTech Vendor Evaluation: [Tool Category, e.g., Attribution & MMM]
**Client Profile:** [e.g., $10M ARR Multi-Channel E-commerce Brand]
**Evaluator:** [Agency Name / Strategist] | **Date:** YYYY-MM-DD
**Candidate Vendors:** [Vendor A] vs [Vendor B] vs [Vendor C]

---

## 1. Executive Summary & Agency Recommendation
- **Recommended Selection:** **[Vendor A Name]**
- **Decision Rationale:** [Clear 2-sentence explanation of why Vendor A wins on risk-adjusted value, implementation speed, and fit for client's active channel stack]
- **Primary Caveat / Limitation:** [The one known downside the team must manage]

---

## 2. Weighted Scorecard Matrix

| Evaluation Dimension | Weight (%) | Vendor A: [Name] | Vendor B: [Name] | Vendor C: [Name] |
| :--- | :--- | :--- | :--- | :--- |
| **Core Feature Parity** | 30% | 9.0 / 10 | 8.5 / 10 | 7.0 / 10 |
| **Data & API Integrations** | 20% | 8.5 / 10 | 9.5 / 10 | 6.5 / 10 |
| **Total Cost of Ownership (TCO)**| 20% | 8.0 / 10 | 6.0 / 10 | 9.0 / 10 |
| **Agency Multi-Tenant Support**| 10% | 9.5 / 10 | 7.0 / 10 | 5.0 / 10 |
| **Time-to-Value (Days to Live)**| 10% | 9.0 / 10 (3 days) | 5.0 / 10 (6 wks) | 9.0 / 10 (2 days) |
| **Data Portability / Export** | 10% | 8.5 / 10 | 9.0 / 10 | 4.0 / 10 |
| **WEIGHTED COMPOSITE SCORE** | **100%** | **8.65 / 10** | **7.65 / 10** | **6.90 / 10** |

---

## 3. Financial Analysis: 3-Year TCO Comparison

| Cost Element | Vendor A | Vendor B | Vendor C |
| :--- | :--- | :--- | :--- |
| Base Monthly Subscription | $1,200 / mo | $2,400 / mo | $450 / mo |
| Mandatory Implementation Fee | $0 (Self-serve) | $6,000 (Required) | $0 |
| Expected Annual Overages (Orders/MTP)| $1,800 / yr | $3,500 / yr | $1,200 / yr |
| Internal Engineering Setup Cost | $1,250 (10 hrs) | $6,250 (50 hrs) | $1,000 (8 hrs) |
| **Total Year 1 Investment** | **$17,450** | **$44,550** | **$7,600** |
| **3-Year Projected TCO** | **$53,850** | **$124,200** | **$24,800** |

---

## 4. Feature Deep-Dive & Trade-Off Analysis

### Vendor A: [Name]
- **Key Strengths:** Real-time first-party pixel, seamless Shopify integration, superior agency dashboard allowing one-click switching between 20+ client ad accounts.
- **Key Weaknesses:** Lacks native Marketing Mix Modeling (MMM); reports MTA only.

### Vendor B: [Name]
- **Key Strengths:** Advanced Bayesian MMM modeling, enterprise Snowflake data warehouse sync, superior for $20M+ brands running TV/offline media.
- **Key Weaknesses:** 3x higher cost, painful 6-week onboarding requiring developer resources, punitive event overage penalties.

---

## 5. Agency Negotiation Playbook (Vendor Terms to Enforce)
*Before signing the Master Services Agreement (MSA), ensure the client demands:*
1. **Remove Automatic Renewal Escalator:** Cap annual price increases at 3% or CPI (down from standard 8-10%).
2. **Data Portability Clause:** Guarantee full CSV / Parquet raw event export within 14 days of termination.
3. **Agency Pilot Period:** Secure a 30-day proof-of-concept clause with full refund if pixel match rate < 85%.
```

---

## 5. Verification Checklist

Before recommending any MarTech tool:
- [ ] Confirmed whether pricing scales on ad spend, tracked events, or page views.
- [ ] Verified native integrations with client's existing CRM, e-commerce engine, and ad platforms.
- [ ] Checked agency multi-account login permissions so team members do not share passwords.
- [ ] Reviewed cancellation notice window (typically 30-60 days before auto-renewal).
