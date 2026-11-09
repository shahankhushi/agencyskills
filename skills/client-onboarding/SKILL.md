---
name: client-onboarding
description: Conducts comprehensive agency-grade client onboarding, extracts core business model, unit economics, target ICPs, brand voice, positioning wedges, channel benchmarks, and generates the standardized client-context.md file required by all agencyskills. Use when onboarding a new client, kicking off an agency engagement, updating brand context, running a marketing audit interview, or when asked to "onboard new client", "create client context", "extract brand positioning", "set up marketing context", "interview client".
metadata:
  version: 1.0.0
  author: darimamhaider
  category: agency-foundation
---

# Client Onboarding & Brand Context Foundation

The foundation skill of the `agencyskills` suite. Every multi-client performance agency struggles with context drift: creative teams guessing at brand voice, media buyers optimizing against inaccurate margin thresholds, and copywriters using forbidden compliance words.

This skill interviews the stakeholder or ingests raw brand documents to generate a single source of truth: `context/client-context.md`. Every other skill in this library reads that context file before executing media plans, creative briefs, reports, or compliance checks.

---

## 1. Trigger Conditions

Activate this skill when:
- Starting an agency engagement with a new client.
- Creating the centralized `client-context.md` file for an account.
- Refreshing brand positioning, target unit economics, or compliance boundaries.
- User invokes phrases: `"onboard client"`, `"set up client context"`, `"extract brand guidelines"`, `"intake new account"`, `"build client profile"`.

---

## 2. The 7-Pillar Onboarding Framework

When running client onboarding, extract data across seven non-negotiable pillars:

```
+--------------------------------------------------------------------------+
|                        7-PILLAR CLIENT ONBOARDING                        |
+--------------------------------------------------------------------------+
|  1. BUSINESS MODEL & REVENUE ENGINE (AOV, LTV, Gross Margins, Payback)  |
|  2. TARGET AUDIENCE & ICP MATRICES (Pain points, Objections, Triggers)  |
|  3. BRAND POSITIONING & VOICE GUARDRAILS (Tonality, Dos & Don'ts, Wedge) |
|  4. UNIT ECONOMICS & TARGET KPIs (Target Blended MER, CPA ceiling, ROAS) |
|  5. HISTORICAL CHANNEL AUDIT (Meta, Google, TikTok, Email benchmarks)    |
|  6. REGULATORY & COMPLIANCE BOUNDARIES (Banned claims, Disclosures)      |
|  7. TRACKING & MARTECH STACK (GA4, CAPI, Shopify/Stripe, CRM)            |
+--------------------------------------------------------------------------+
```

---

## 3. Execution Protocol

### Step 1: Ingestion Mode Check
Assess what information the user has supplied:
- **Mode A (Raw Materials Provided):** User drops website URLs, brand decks, historical reports, or raw notes. Ingest, extract all 7 pillars, and flag missing gaps.
- **Mode B (Interactive Interview):** If starting from scratch, ask targeted questions in 3 phased batches. Never ask 30 questions at once.

### Step 2: Extracting Unit Economics (The Agency Filter)
Marketers who fail usually do not know the real numbers. You must extract:
- **Gross Margin %** (Excluding ad spend).
- **Average Order Value (AOV)** or Average Contract Value (ACV).
- **Break-even ROAS:** Calculated as `1 / Gross Margin %`.
- **Target Customer Acquisition Cost (CAC) Ceiling:** Max allowable acquisition spend.
- **LTV Horizon:** 30-day, 90-day, and 12-month expected customer value.
- **Monthly Media Budget:** Floor, planned baseline, and scale ceiling.

### Step 3: Brand Tone and Voice Spectrum
Classify tone across these 5 spectrums:
1. Formal/Corporate (1) <-----------------> Irreverent/Casual (10)
2. Academic/Technical (1) <---------------> Plain English/Punchy (10)
3. Modest/Understated (1) <---------------> Bold/High-Energy (10)
4. Premium/Luxury (1) <-------------------> Accessible/Value-Driven (10)
5. Direct Response (1) <------------------> Brand-Led/Storytelling (10)

Document:
- **Forbidden Words / Claims:** Specific words the client refuses to use (e.g., "cheap", "guarantee", "hack", specific health claims).
- **Mandatory Terms / Framing:** Required legal disclaimers, brand taglines, trademark symbols.

### Step 4: Generate `client-context.md`
Write the standardized client context file using the exact schema below.

---

## 4. Standard Output Schema: `client-context.md`

```markdown
# Client Context: [Client Name / Brand]
*Last Updated: YYYY-MM-DD | Version: 1.0.0 | Lead Strategist: [Name]*

## 1. Executive Summary & Value Proposition
- **One-Line Wedge:** [What makes this brand radically better than competitors?]
- **Category:** [e.g., D2C Functional Beverage / B2B FinTech / MedSpa Chain]
- **Core Product / Service:** [Description and primary SKU/package]
- **Primary Website:** [URL]

## 2. Unit Economics & Financial Guardrails
| Metric | Baseline | Target | Hard Limit (Kill Trigger) |
| :--- | :--- | :--- | :--- |
| Average Order Value (AOV) | $XX.XX | $XX.XX | < $XX.XX |
| Gross Margin % | XX% | XX% | < XX% |
| Break-even ROAS | X.XX | - | - |
| Target Blended MER | X.XX | X.XX | < X.XX |
| Max Allowable CPA | $XX.XX | $XX.XX | > $XX.XX |
| Monthly Media Budget | $XX,XXX | $XX,XXX | Hard Cap: $XX,XXX |

## 3. Ideal Customer Profiles (ICPs)
### Primary ICP: [Segment Name, e.g., "Burned-Out Tech Lead"]
- **Demographics:** [Age, geography, role/income]
- **Core Agony / Problem:** [The urgent pain point they are desperate to fix]
- **Failed Alternatives:** [What they tried before that failed]
- **Buying Trigger:** [The specific event that forces them to act this week]
- **Primary Objections:** [Price, trust, implementation time, partner approval]

### Secondary ICP: [Segment Name]
- *(Structured identical to Primary ICP)*

## 4. Brand Voice, Angles & Positioning Guardrails
- **Tone Profile:** [e.g., Punchy, authoritative, empathetic, dry wit]
- **Approved Power Angles:**
  1. [Angle 1: The Counter-Intuitive Truth]
  2. [Angle 2: The Direct Competitor Comparison]
  3. [Angle 3: Proof / Data / Clinical Trial]
- **Forbidden Vocabulary (NEVER USE):** `[Word 1]`, `[Word 2]`, `[Word 3]`
- **Mandatory Disclosures:** [e.g., "Results vary based on individual metabolism. *These statements have not been evaluated by the FDA."]

## 5. Active Channel Stack & Current Benchmarks
| Channel | Role | Monthly Budget | Baseline CPA | Baseline ROAS / CVR |
| :--- | :--- | :--- | :--- | :--- |
| Meta Ads | Top / Mid Funnel | $XX,XXX | $XX.XX | X.Xx ROAS |
| Google Search | High Intent Capture | $XX,XXX | $XX.XX | X.Xx ROAS |
| TikTok / UGC | High Volume Testing | $XX,XXX | $XX.XX | X.Xx ROAS |
| Retention (Klaviyo) | LTV Maximization | - | - | XX% of Total Rev |

## 6. Technical Tracking & Verification Stack
- **Pixel / CAPI Status:** [Meta CAPI via Stape / Google Tag Manager Web + Server]
- **Attribution Model:** [7-day click / 1-day view vs GA4 Last Non-Direct vs Northbeam]
- **UTM Taxonomy Standard:** `utm_source={{site_source_name}}&utm_medium=paid_social&utm_campaign={{campaign.name}}&utm_content={{ad.name}}`

## 7. Key Stakeholders & Approval SLA
- **Approver (Client):** [Name & Role]
- **Turnaround SLA:** [24 hours for creative, 4 hours for emergency comms]
```

---

## 5. Verification Checklist

Before saving `client-context.md`, verify:
- [ ] Break-even ROAS matches the Gross Margin formula `1 / Gross Margin %`.
- [ ] At least 3 specific customer objections and buying triggers are documented.
- [ ] Forbidden words and mandatory legal disclaimers are explicitly listed.
- [ ] All team members know that this file must be linked in any future prompt.
