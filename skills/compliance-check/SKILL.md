---
name: compliance-check
description: Verifies ad copy, landing pages, visual concepts, and promotional offers against Meta Advertising Standards, Google Ads Policies, TikTok Policies, and regulatory standards (FTC disclosures, FDA wellness claims, GDPR/CCPA). Detects banned claims, personal attribute violations, deceptive framing, missing material disclosures, and assigns risk severity scores with line-level compliant rewrites. Use before publishing ad copy, auditing landing pages, evaluating high-risk verticals (health, finance, crypto, beauty, supplements), or when asked to "check ad compliance", "Meta ad policy check", "will this ad get banned", "FTC disclosure check", "ad policy review".
metadata:
  version: 1.0.0
  author: darhaiderimam
  category: agency-compliance
---

# Multi-Platform Ad Policy & Regulatory Compliance Gate

Getting an ad account restricted or banned is the ultimate catastrophe for an agency. Meta, Google, and TikTok deploy aggressive automated AI moderation bots that flag and disable accounts based on keyword triggers, personal attribute callouts, and landing page mismatches.

This skill acts as a pre-flight compliance quality gate. It scans copy, visual concepts, headlines, and offers against platform terms and FTC/FDA regulatory requirements, delivering line-level risk scores and compliant rewrites that preserve high-converting sales psychology without triggering policy bans.

---

## 1. Trigger Conditions

Activate when the user requests:
- `"Check this ad copy for Meta policy compliance"`
- `"Will this ad get disapproved on Google Ads or TikTok?"`
- `"Audit our supplement / finance landing page for FTC / FDA compliance"`
- `"Review these 5 ad variations for policy violations"`
- `"Give compliant rewrites for this aggressive direct-response copy"`

---

## 2. Platform Policy Matrix & Banned Patterns

```
+-------------------------------------------------------------------------------+
|                       PLATFORM COMPLIANCE RULES MATRIX                        |
+-------------------------------------------------------------------------------+
|  META ADVERTISING STANDARDS (Meta Business Help Center)                       |
|  - Personal Attributes: Never imply or state personal attributes ("Are you    |
|    struggling with debt?", "Stressed out mom?"). Must reframe to 3rd person.  |
|  - Sensational / Deceptive: No side-by-side Before/After body weight photos.  |
|  - Guaranteed Outcomes: No "Lose 15 lbs in 7 days" or "Make $10k this week". |
|                                                                               |
|  GOOGLE ADS POLICIES (Google Advertising Policies)                            |
|  - Misleading Representation: Missing business address, hidden subscriptions. |
|  - Editorial Standards: Gimmicky capitalization ("BUY NOW FREE!!!"), symbols.  |
|  - Trademark Violations: Bidding on or using competitor trademarks in ad text.|
|                                                                               |
|  FTC / FDA REGULATORY STANDARDS                                               |
|  - Endorsements & Testimonials: Clear & conspicuous disclosures (#ad, Paid).   |
|  - Material Connection: Disclose free product, sponsorship, or affiliate cut.  |
|  - FDA Disclaimer: Required on all dietary supplements and wellness products. |
+-------------------------------------------------------------------------------+
```

---

## 3. The 4-Tier Risk Severity Scale

Every analyzed line of copy or visual cue is graded against this scale:

| Level | Severity | Platform Outcome | Agency Action Required |
| :--- | :--- | :--- | :--- |
| **RED** | **Critical (Ban Risk)** | Immediate Ad Rejection / Account Restriction | **Block launch.** Mandatory rewrite. |
| **ORANGE** | **High Risk** | Algorithm Flag / Shadow-Ban / High Disapproval | High probability of rejection. Rewrite. |
| **YELLOW** | **Moderate Risk** | Manual Review Trigger / CPM Penalty | Optional polish; ensure disclaimers present. |
| **GREEN** | **Compliant** | Fast Automated Approval | Approved for deployment. |

---

## 4. Line-Level Rewrite Engine: The Reframe Technique

The core agency skill is rewriting aggressive claims so they pass AI moderation while retaining maximum persuasive power:

### Pattern 1: Personal Attributes (Meta Policy Section 4.6)
- **Banned:** *"Are you suffering from chronic back pain at your desk?"* (Meta flags "Are you..." attributing medical flaws).
- **Compliant Rewrite:** *"Why 80% of desk workers experience spinal compression—and the ergonomic fix doctors recommend."*

### Pattern 2: Unrealistic Timeframes & Absolute Guarantees
- **Banned:** *"Lose 20 pounds in 14 days without dieting!"*
- **Compliant Rewrite:** *"A clinically backed metabolic protocol designed to support sustained, healthy fat loss over time."*

### Pattern 3: Financial & Income Claims
- **Banned:** *"How I make $12,500/month working 2 hours a day from my laptop."*
- **Compliant Rewrite:** *"The exact client acquisition system our agency uses to scale B2B service retainers."*

---

## 5. Standard Output Schema: Compliance Audit Report

```markdown
# Ad Compliance & Policy Audit Report: [Campaign / Asset Name]
**Audit Date:** YYYY-MM-DD | **Auditor:** Automated Compliance Gate v1.0
**Analyzed Assets:** [3 Ad Variations / 1 Landing Page] | **Overall Account Risk:** [LOW / MEDIUM / CRITICAL]

---

## 1. Compliance Scorecard & Gate Verdict

| Asset ID | Platform Target | Risk Score (0-100) | Gate Verdict | Primary Policy Flag |
| :--- | :--- | :--- | :--- | :--- |
| **Ad_01_VideoHook** | Meta Ads (Reels) | **42 / 100** | **BLOCK** | Personal Attributes (Physical Health) |
| **Ad_02_StaticGrid** | Meta + Google | **88 / 100** | **PASS WITH FIX**| Missing Mandatory FDA Disclosure |
| **Ad_03_UGCStory** | TikTok Ads | **95 / 100** | **APPROVED** | Clean (All disclosures present) |

---

## 2. Line-by-Line Finding & Compliant Rewrites

### Asset: `Ad_01_VideoHook`
- **Flagged Copy / Visual:**
  > *"Are you embarrassed by your thinning hair? Stop going bald with this single daily dropper."*
- **Policy Violated:** Meta Advertising Standards §4.6 (Personal Attributes) & §4.12 (Misleading Health Claims).
- **Risk Severity:** **RED (Critical Ban Risk)**
- **Why It Gets Flagged:** Uses direct second-person accusation ("Are you embarrassed...", "your thinning hair") which automated bots flag for body shaming, paired with an absolute promise to "stop going bald".
- **Compliant Drop-In Rewrite:**
  > *"How thousands of men are supporting scalp follicle density naturally—without messy chemical treatments or prescriptions."*

---

### Asset: `Ad_02_StaticGrid`
- **Flagged Copy / Visual:**
  > *"Clinically proven to burn fat 3x faster than standard cardio."*
- **Policy Violated:** FTC Truth in Advertising & FDA Dietary Supplement Guidelines.
- **Risk Severity:** **ORANGE (High Disapproval Risk)**
- **Why It Gets Flagged:** Making comparative quantitative claims ("3x faster") without visible clinical trial citations and FDA disclaimer.
- **Compliant Drop-In Rewrite:**
  > *"Formulated with patented green tea catechins shown in published studies to support metabolic rate during exercise.\* \n\n*These statements have not been evaluated by the FDA."*

---

## 3. Landing Page Policy Parity Check
*Warning: Even if the ad copy is 100% compliant, Meta and Google scrape the destination URL.*
- [ ] Destination URL contains functional links to **Privacy Policy** and **Terms of Service** in footer.
- [ ] No aggressive exit-intent popups that disable the back button (Google Ads policy violation).
- [ ] Testimonials include explicit disclosure: *"Results may vary based on individual effort and starting point."*
- [ ] Business entity legal name, physical address, and contact email are visible in the website footer.
```

---

## 6. Verification Checklist

Before pushing any ad to production:
- [ ] Zero second-person personal attribute interrogatives ("Do you have...", "Are you sick of...").
- [ ] No unrealistic timeframes attached to physical transformation or monetary gain.
- [ ] Required platform and regulatory disclaimers (#ad, FDA, FTC) are burned into creative or headline.
- [ ] Landing page footer matches platform legal standards.
