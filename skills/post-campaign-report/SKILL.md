---
name: post-campaign-report
description: Generates executive-ready agency campaign wrap reports, C-suite summaries, planned vs actual budget variance analysis, blended MER and platform attribution reconciliation, creative performance league tables (top 5 vs bottom 5 teardowns), audience saturation metrics, and next-quarter strategic recommendations. Use when concluding a campaign flight, delivering monthly or quarterly client wraps, analyzing post-mortem ad performance, or when asked to "post campaign report", "campaign wrap", "monthly client wrap deliverable", "ad post-mortem", "reconcile attribution".
metadata:
  version: 1.0.0
  author: darimamhaider
  category: agency-reporting
---

# Executive Post-Campaign Report & Wrap Deliverable

Clients do not read 40-page dashboard screenshots. Founders, CMOs, and private equity board members care about three numbers: *How much did we spend? How much net cash did it generate? What are we doing next month to make it better?*

This skill transforms messy ad platform exports and blended store metrics into an executive-level post-campaign wrap deliverable with attribution reconciliation, creative post-mortems, and a clear strategic roadmap.

---

## 1. Trigger Conditions

Activate when the user requests:
- `"Write a post-campaign wrap report for [Client]"`
- `"Summarize Q2 paid ad performance for the CMO"`
- `"Reconcile Meta and Google reported conversions against Shopify actuals"`
- `"Generate creative post-mortem and next sprint recommendations"`
- `"Prepare monthly executive client presentation deliverable"`

---

## 2. Core Attribution Reconciliation Framework

Ad platforms double-count conversions. Meta claims 500 purchases, Google claims 400 purchases, but Shopify or Stripe only processed 650 total orders.

Always report on three tiers of truth:

```
+-------------------------------------------------------------------------------+
|                       3-TIER ATTRIBUTION RECONCILIATION                       |
+-------------------------------------------------------------------------------+
|  TIER 1: FIRST-PARTY CASH TRUTH (Shopify / Stripe / CRM)                      |
|  - Real dollars deposited into the bank account                               |
|  - Blended MER = Total Store Net Revenue / Total Blended Ad Spend             |
|                                                                               |
|  TIER 2: INDEPENDENT ATTRIBUTION (GA4 Last Non-Direct / Triple Whale / Northbeam)|
|  - De-duplicated conversion paths and fractional touchpoint credit            |
|                                                                               |
|  TIER 3: IN-PLATFORM REPORTING (Meta Ads Manager, Google Ads)                 |
|  - Diagnostic signals (CPM, CTR, Hook Rate, In-Platform ROAS)                |
|  - Useful for creative & auction bidding, but never reported as sole revenue  |
+-------------------------------------------------------------------------------+
```

---

## 3. Step-by-Step Reporting Protocol

### Step 1: Topline Financial Summary (The C-Suite Snapshot)
Calculate:
- **Total Blended Media Spend:** Sum of all channel spends.
- **Total Net Sales / Revenue:** From e-commerce or CRM.
- **Blended Marketing Efficiency Ratio (MER):** $\text{Net Revenue} / \text{Total Ad Spend}$.
- **Blended Customer Acquisition Cost (CAC):** $\text{Total Ad Spend} / \text{New Customers Acquired}$.
- **Variance vs Plan:** Percentage delta between budgeted and actual metrics.

### Step 2: Channel-by-Channel Decomposition
Evaluate each channel against its primary assigned role (Prospecting vs Retargeting vs Search Intent Capture).

### Step 3: Creative League Table (Top 5 vs Bottom 5)
Rank creatives by total conversions and ROAS. For each winner, dissect *why* it won (Hook angle, visual pattern, pacing). For each loser, explain *why* it failed (High drop-off, fatigue, offer mismatch).

### Step 4: Next Sprint Strategic Roadmap
Translate learnings into 3 high-conviction, prioritized initiatives for the upcoming cycle.

---

## 4. Standard Output Schema: Post-Campaign Report

```markdown
# Executive Campaign Wrap Deliverable: [Client Name]
**Flight Window:** [Date] to [Date] | **Report Date:** YYYY-MM-DD
**Prepared By:** [Agency Name / Strategist] | **Reviewed By:** [Client Stakeholder]

---

## 1. Executive Summary: The Macro Scorecard

| Metric | Planned Target | Actual Delivered | Variance ($ / %) | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Total Media Spend** | $100,000 | $98,450 | -$1,550 (-1.5%) | On Budget |
| **Total Net Revenue** | $320,000 | $354,200 | +$34,200 (+10.7%) | **Exceeded Target** |
| **Blended MER** | 3.20x | **3.60x** | +0.40x (+12.5%) | **Exceeded Target** |
| **New Customers Acquired** | 4,200 | 4,580 | +380 (+9.0%) | **Exceeded Target** |
| **Blended First-Order CAC**| $23.80 | **$21.50** | -$2.30 (-9.7%) | **Under Ceiling** |

*Key Takeaway: The campaign exceeded top-line revenue targets by 10.7% while maintaining a blended CAC of $21.50 against the $23.80 threshold. Meta cold prospecting delivered 62% of new customer acquisition, amplified by branded search capture.*

---

## 2. Channel Performance Breakdown

| Channel | Spend ($) | Share (%) | Platform Conversions | Platform CPA | Platform ROAS | Independent CVR |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Meta Ads (Cold + DCT)** | $58,200 | 59.1% | 2,420 | $24.05 | 2.95x | 2.8% |
| **Meta Ads (Retargeting)**| $12,400 | 12.6% | 890 | $13.93 | 4.80x | 4.1% |
| **Google Search (Non-Brand)**| $18,600 | 18.9% | 610 | $30.49 | 2.45x | 3.2% |
| **Google Search (Brand Protect)**| $4,250 | 4.3% | 510 | $8.33 | 8.90x | 14.5% |
| **TikTok Ads (UGC Test)** | $5,000 | 5.1% | 150 | $33.33 | 2.10x | 1.9% |
| **TOTAL / BLENDED** | **$98,450** | **100%** | **4,580\*** | **$21.50** | **3.60x (MER)** | **2.9%** |

*\*Note: Conversions de-duplicated via Shopify Order IDs and GA4 Data-Driven Attribution.*

---

## 3. Creative League Table: Winners & Post-Mortem

### Top 3 Performing Creatives
1. **`AD_04_SINK_DUMP_HOOK-A` (Meta Reels 9:16)**
   - *Spend:* $18,400 | *CPA:* $19.20 | *ROAS:* 3.45x | *Hook Rate:* 36.2%
   - *Why It Won:* The visual pattern-interrupt in the first 2 seconds (dumping cloudy liquid) drove 36.2% hook rate, nearly 2x account benchmark.
2. **`AD_07_US_VS_THEM_GRID` (Meta Feed 4:5)**
   - *Spend:* $14,100 | *CPA:* $21.80 | *ROAS:* 3.10x | *Hold Rate:* 22.0%
   - *Why It Won:* Clear comparison table against top 2 market leaders removed buyer skepticism on pricing.
3. **`AD_02_DOCTOR_EXPLAINER` (Meta Feed 9:16)**
   - *Spend:* $9,800 | *CPA:* $22.40 | *ROAS:* 2.95x | *CTR:* 1.95%
   - *Why It Won:* Clinical authority hook created high trust with the 35+ demographic.

### Bottom 2 Underperformers (Post-Mortem)
1. **`AD_09_LIFESTYLE_SUNSET_RUN` (TikTok 9:16)**
   - *Spend:* $2,800 | *CPA:* $54.20 | *Hook Rate:* 14.1%
   - *Failure Post-Mortem:* Looked like a cinematic TV commercial. Users scrolled past immediately because it lacked native pacing, text hooks, or immediate conflict.
2. **`AD_11_FOUNDER_DESK_MONOLOGUE` (Meta 9:16)**
   - *Spend:* $1,900 | *CPA:* $49.50 | *Hold Rate:* 6.4%
   - *Failure Post-Mortem:* Slow 8-second introduction before mentioning the problem. Massive 82% drop-off by second 4.

---

## 4. Audience & Frequency Fatigue Analysis
- **Meta Cold Broad Frequency:** Averaged `1.84` across the flight (Optimal health; below the 2.5 saturation threshold).
- **Retargeting Pool Fatigue:** Frequency hit `5.4` in Week 4, causing retargeting CPA to rise from $11.20 to $17.80.
  - *Correction for Next Month:* Refresh retargeting creative every 14 days and expand window from 14-day to 30-day website visitors.

---

## 5. Strategic Roadmap: Next Flight Action Items
1. **Double Down on High-Hook Pattern Interrupts:** Produce 6 iterations of the "Sink Dump" visual mechanism testing new voiceovers.
2. **Launch Google Performance Max:** Reallocate $5,000 from underperforming non-brand search into a targeted PMax asset group.
3. **Establish Creative Refresh Cadence:** Schedule 4 new UGC hooks bi-weekly to counter retargeting pool fatigue.
```

---

## 6. Presentation Best Practices

1. **Lead with Dollars, Not Clicks:** Never open a presentation discussing impressions or CTR. Start with Net Revenue, Spend, and Blended MER.
2. **Be Brutally Honest About Failures:** Agencies that disguise failed ads lose client trust. Highlight failed experiments, explain the exact root cause, and demonstrate how that learning prevents wasted spend next month.
