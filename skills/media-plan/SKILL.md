---
name: media-plan
description: Builds flighted, multi-channel performance media plans with channel budget splits, reach and frequency modeling, funnel stage allocations, and unit economic CAC/ROAS projections across Meta, Google Search, YouTube, TikTok, and Programmatic. Use when planning quarterly or monthly media spend, launching a new campaign, sizing channel budgets, projecting blended CAC and MER, or when asked to "build media plan", "allocate ad spend", "channel budget split", "reach and frequency model", "paid media strategy".
metadata:
  version: 1.0.0
  author: darhaiderimam
  category: agency-media
---

# Multi-Channel Performance Media Plan

A media plan is an investment thesis, not a wishlist. Junior marketers pick random round numbers ($5,000 here, $2,000 there); agency leaders engineer media plans backwards from revenue targets, margin constraints, and channel unit economics.

This skill builds end-to-end flighted media plans with mathematical reach/frequency projections, funnel stage splits, and scenario modeling.

---

## 1. Trigger Phrases & Intent Matching

Activate when the user requests:
- `"Build a media plan for [Client]"`
- `"Allocate $50k monthly ad budget across Meta, Google, and TikTok"`
- `"Flighted media plan for Q3 product launch"`
- `"Reach and frequency model for ad spend"`
- `"Calculate projected conversions, CAC, and blended MER from ad budget"`

---

## 2. Core Methodologies & Formulas

### A. The 60/20/10/10 Agency Funnel Split Rule
For performance brands with established tracking, allocate media spend across:
1. **Top-of-Funnel / Cold Prospecting (60%):** Broad Meta, Google Non-Brand/PMax, TikTok Broad. Objective: Net-new audience discovery.
2. **Middle/Bottom-of-Funnel Retargeting (20%):** Engaged viewers (75% video view), 30-day website visitors, social engagers. High intent capture.
3. **Retention / Existing Customer Reactivation (10%):** Lapsed customer lists, cross-sells, subscription renewals.
4. **Experimental / Sandbox (10%):** Untested angles, new platforms (Reddit, Pinterest, CTV, Influencer whitelisting). Isolated from primary KPIs.

*(Note: If client has <10k monthly visitors, reduce Retargeting to 10% and allocate 70% to Cold Prospecting to prevent audience exhaustion).*

### B. Mathematical Formulas for Projections
- **Projected Impressions:** `(Spend / CPM) * 1,000`
- **Projected Clicks:** `Impressions * Outbound CTR %`
- **Effective CPC:** `Spend / Clicks`
- **Projected Conversions:** `Clicks * Landing Page CVR %`
- **Projected CPA:** `Spend / Conversions`
- **Projected Revenue:** `Conversions * AOV`
- **Projected Channel ROAS:** `Projected Revenue / Spend`
- **Blended Marketing Efficiency Ratio (MER):** `Total Projected Brand Revenue / Total Blended Media Spend`
- **Reach & Frequency Estimation:**
  - $\text{Estimated Unique Reach} = \frac{\text{Total Impressions}}{\text{Target Average Frequency}}$
  - $\text{Effective Frequency Benchmark}: \text{3 to 5 exposures per 7-day rolling window for direct conversion}.$

---

## 3. Step-by-Step Media Planning Protocol

### Step 1: Input Validation
Extract from `context/client-context.md` or user prompt:
1. **Total Available Budget & Flight Duration:** (e.g., $150,000 over 90 days).
2. **AOV & Gross Margin %:** Required to ensure projected CPA < allowable CPA ceiling.
3. **Primary Goal:** Revenue / Purchases (E-commerce) vs Qualified Leads (B2B/Services).
4. **Target Geo & Audience Size:** Addressable market constraints.

### Step 2: Channel Selection Heuristic
Match product characteristics to platform mechanics:
- **High Intent / Pull Demand (Google Search / Shopping):** Essential if search volume exists for high-intent problem or competitor keywords.
- **Visual Discovery / Push Demand (Meta Ads - IG/FB):** Primary engine for impulse, lifestyle, visual proof, or problem-unaware buyers.
- **Short-Form Viral / High Fatigue (TikTok):** Ideal for products with high visual demos, younger demographic (18-34), or sub-$60 AOV.
- **B2B / Account-Based (LinkedIn):** Mandatory when ACV > $10,000 and target buyers are specific job titles.

### Step 3: Flighting Strategy
Select one of the three classic flighting schedules:
- **Continuous:** Steady baseline spend. Best for Evergreen D2C and SaaS recurring demand.
- **Flighted:** Periods of heavy spend alternated with zero spend. Best for seasonal bursts or inventory drops.
- **Pulsing:** Constant low baseline with heavy spikes during promotional moments (e.g., Black Friday, product launches).

### Step 4: Scenario Modeling (3 Tiers)
Always generate three models:
1. **Conservative:** Lowest expected CVR, highest expected CPM (Worst-case downside protection).
2. **Target (Base Case):** Historical baseline metrics or industry median.
3. **Aggressive (Scale Case):** Creative hits viral hook rates, higher conversion rates, unlocking budget expansion.

---

## 4. Standard Output Schema: Media Plan Deliverable

Generate the output using this markdown structure:

```markdown
# Performance Media Plan: [Client Name]
**Flight Window:** [Start Date] - [End Date] ([X] Weeks) | **Total Budget:** $[Amount]
**Strategic Objective:** [e.g., Achieve $450k in Net Revenue at >= 3.0x Blended MER]

---

## 1. Executive Summary & Strategic Rationale
- **Investment Thesis:** [Why this budget split maximizes risk-adjusted return]
- **Primary Channels:** [Meta 55%, Google 30%, TikTok 15%]
- **Target Blended CPA:** $[Target] | **Max Tolerable CPA:** $[Ceiling]

---

## 2. Channel Budget Allocation & Performance Projections (Base Case)

| Channel | Funnel Stage | Budget ($) | % Split | Projected CPM | Projected Clicks | Avg CPC | Est. CVR | Est. Conversions | Est. CPA | Projected ROAS |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Meta Ads | Cold (Broad) | $XX,XXX | 45% | $XX.XX | X,XXX | $X.XX | X.X% | XXX | $XX.XX | X.Xx |
| Meta Ads | Retargeting | $XX,XXX | 15% | $XX.XX | X,XXX | $X.XX | X.X% | XXX | $XX.XX | X.Xx |
| Google Search | Non-Brand | $XX,XXX | 20% | $XX.XX | X,XXX | $X.XX | X.X% | XXX | $XX.XX | X.Xx |
| Google Search | Brand Protect | $X,XXX | 5% | $XX.XX | X,XXX | $X.XX | XX.X% | XXX | $XX.XX | XX.Xx |
| TikTok Ads | Cold / UGC | $XX,XXX | 15% | $XX.XX | X,XXX | $X.XX | X.X% | XXX | $XX.XX | X.Xx |
| **BLENDED TOTAL** | **Omnichannel** | **$XX,XXX** | **100%** | **$XX.XX** | **XX,XXX** | **$X.XX** | **X.X%** | **X,XXX** | **$XX.XX** | **X.XXx** |

---

## 3. Flighting Schedule & Weekly Pacing

| Week | Date Range | Flight Phase | Focus Channels | Weekly Spend | Cumulative Spend | Expected Conversions |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| W1 | YYYY-MM-DD | Testing & Calibration | Meta DCT + Google Search | $XX,XXX | $XX,XXX | XXX |
| W2 | YYYY-MM-DD | Momentum Scaling | Meta Winners + TikTok | $XX,XXX | $XX,XXX | XXX |
| W3-W6 | YYYY-MM-DD | Core Scaling Phase | Full Funnel Push | $XX,XXX | $XX,XXX | XXX |
| W7-W8 | YYYY-MM-DD | Retargeting / Push | Retention + Promo Spikes | $XX,XXX | $XX,XXX | XXX |

---

## 4. Scenario Sensitivity Analysis

| Scenario | Blended CVR | Blended CPA | Total Conversions | Total Revenue | Blended MER |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Conservative (-20% CVR)** | X.XX% | $XX.XX | X,XXX | $XXX,XXX | X.XXx |
| **Target Base Case** | X.XX% | $XX.XX | X,XXX | $XXX,XXX | X.XXx |
| **Aggressive (+25% CVR)** | X.XX% | $XX.XX | X,XXX | $XXX,XXX | X.XXx |

---

## 5. Technical Tracking, UTMs & Pre-Flight Guardrails
- **UTM Campaign Naming Convention:** `{{channel}}_{{objective}}_{{audience}}_{{date}}`
- **Pixel / CAPI Verification:** Confirm server-side event deduplication before flight begins.
- **Budget Reallocation Triggers:**
  - If a channel exhibits CPA > 1.35x target over a 72-hour rolling window with >3x target CPA spend, pause ad set and reallocate remaining weekly budget to top-performing channel.
```

---

## 6. Edge Cases & Safety Gates

1. **Brand Search Cannibalization:** Never allocate >10% of total budget to Brand Search unless competitors are aggressively bidding on the brand trademark.
2. **Cold Traffic Starvation:** If retargeting ROAS looks high (e.g., 8x) but blended revenue is declining, the agency is suffocating top-of-funnel. Enforce minimum 60% cold spend.
3. **Statistical Significance Check:** Never project conversion counts for ad sets spending under $50/day if the product CPA is $100+. Ensure minimum 3 conversions per day per ad set for algorithm optimization.
