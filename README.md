# agencyskills

> **Marketing skills for people who run budgets, teams, and clients — not a single SaaS product.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Claude Code Plugin](https://img.shields.io/badge/Claude%20Code-Plugin%20Ready-6366f1.svg)](https://claude.ai)
[![Agent Skills](https://img.shields.io/badge/Spec-Agent%20Skills%20v1.0-emerald.svg)](https://agenticskills.io)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

---

## Quick Install (Get Started in 10 Seconds)

### Option 1: Via npx skills (Recommended)
```bash
npx skills add darimamhaider/agencyskills
```

### Option 2: Via Claude Code Plugin Marketplace
```bash
/plugin marketplace add darimamhaider/agencyskills
/plugin install agencyskills@darimamhaider-agencyskills
```

### Option 3: Direct Git Clone / Submodule
```bash
git clone https://github.com/darimamhaider/agencyskills.git .claude/skills/agencyskills
```

---

## Real Output in 30 Seconds

When you run `@campaign-launch` with a budget and client context, you get immediate deterministic agency-grade execution:

```
[+] Loading context/client-context.md: Apex Performance Lab ($65k/mo budget, 74% gross margin)
[+] Running @media-plan:
    - Funnel Split: 60% Cold Prospecting ($39,000) | 20% Retargeting ($13,000) | 10% Testing ($6,500)
    - Effective Frequency Target: 3.2 exposures / 7-day rolling window
    - Projected Blended MER: 3.54x ($230,100 Net Rev) | Max CPA: $38.00
[+] Running @creative-brief:
    - Single-Minded Proposition (SMP): "Zero-sugar clinical hydration with 3:1 sweat biomarker ratio"
    - 3-Second Hook Variations Generated:
      * Hook A (Pattern-Interrupt): Violent trash can toss of cloudy competitor powder
      * Hook B (Agony Callout): "Why your electrolyte mix causes cramps at Mile 15"
      * Hook C (The Osmolality Test): Split-screen dissolution speed test
[+] Running @compliance-check:
    - Meta Ads Standards Check: PASS (Zero 2nd-person personal attribute violations)
    - FDA Supplement Disclaimers: INSERTED on end-cards (Y: 1680px safe zone)
[+] Running brief-gate: PASS (Score: 94/100, 0 hard constraint violations)
[✔] Pre-flight launch package generated in /examples/campaign-launch/
```

---

## Why `agencyskills`?

Existing open-source marketing skill packs are built for a solo US B2B SaaS founder marketing one product. Read their directories: copywriting, landing page SEO, founder blogs, churn emails.

**They fall apart when you run an agency.**

A growth director managing $200k/month across Meta, Google, and TikTok for multiple clients does not need a generic prompt to "write a headline." They need:
- **Mathematical media planning** with reach/frequency curves and funnel pacing.
- **Mid-flight budget reallocation** that does not trigger ad platform learning phase resets.
- **Production-grade creative briefs** with safe zones and second-by-second storyboards for editors.
- **Pre-flight compliance gates** that prevent ad account bans.
- **Attribution reconciliation** that proves ROI against first-party bank deposits, not inflated platform pixels.

`agencyskills` fills every one of those gaps.

---

## The 12 Skills Matrix

All 12 skills are built according to the open **Agent Skills specification** (`SKILL.md`) and adhere to the foundation context architecture.

| Skill | Directory | What It Does |
| :--- | :--- | :--- |
| **`client-onboarding`** *(Foundation)* | [`skills/client-onboarding`](skills/client-onboarding/SKILL.md) | Conducts client audit interview; generates persistent `client-context.md` that all skills read. |
| **`media-plan`** | [`skills/media-plan`](skills/media-plan/SKILL.md) | Flighted multi-channel media plan with 60/20/10/10 budget splits, reach/frequency modeling, and scenario projections. |
| **`budget-pacing`** | [`skills/budget-pacing`](skills/budget-pacing/SKILL.md) | Mid-flight spend burn monitor; under/overspend detection and algorithmic 20% reallocation rules. |
| **`creative-brief`** | [`skills/creative-brief`](skills/creative-brief/SKILL.md) | Single-Minded Proposition, 3s hook variations, and second-by-second storyboards for video editors & creators. |
| **`creative-testing-matrix`** | [`skills/creative-testing-matrix`](skills/creative-testing-matrix/SKILL.md) | Hook × Format × Angle test matrix with minimum sample size formulas and 3:2:2 DCT isolation. |
| **`post-campaign-report`** | [`skills/post-campaign-report`](skills/post-campaign-report/SKILL.md) | C-suite wrap deliverable, planned vs actual variance analysis, attribution reconciliation, and creative league tables. |
| **`agency-scoping`** | [`skills/agency-scoping`](skills/agency-scoping/SKILL.md) | SOW builder, blended hourly rate modeling ($125-$250/hr), retainer tiers, and out-of-scope guardrails. |
| **`new-business`** | [`skills/new-business`](skills/new-business/SKILL.md) | RFP response engine, competitor teardowns, "The Pitch Wedge", and 90-day turnaround proposals. |
| **`offline-to-online`** | [`skills/offline-to-online`](skills/offline-to-online/SKILL.md) | Dynamic Number Insertion (DNI), Google Store Visits, Meta Offline CAPI hashing, and geo-matched market tests. |
| **`compliance-check`** | [`skills/compliance-check`](skills/compliance-check/SKILL.md) | Policy check across Meta, Google, TikTok, and FTC/FDA with line-level compliant rewrites. |
| **`vendor-evaluation`** | [`skills/vendor-evaluation`](skills/vendor-evaluation/SKILL.md) | Weighted MarTech RFP scorecard, multi-tenant agency evaluation, and 3-year Total Cost of Ownership (TCO). |
| **`crisis-comms`** | [`skills/crisis-comms`](skills/crisis-comms/SKILL.md) | 15-minute paid media killswitch, 3-tier severity ladder, and public holding statement framework. |

---

## The 2 Orchestrated Workflows

Workflows chain individual skills into end-to-end multi-agent pipelines:

### 1. `workflows/campaign-launch.md`
**Brief $\rightarrow$ Media Plan $\rightarrow$ Creative Brief $\rightarrow$ Testing Matrix $\rightarrow$ Compliance Check $\rightarrow$ Quality Gate $\rightarrow$ Launch Checklist**
*Runs the entire go-to-market sequence in a single deterministic pass.*

### 2. `workflows/monthly-client-report.md`
**Ingest Export $\rightarrow$ Anomaly Detection $\rightarrow$ Attribution Reconciliation $\rightarrow$ Executive Wrap $\rightarrow$ Next-Month Pacing**
*Automates the recurring monthly reporting cycle with zero manual spreadsheet copy-pasting.*

---

## Committed Examples

Don't take our word for it. Review committed synthetic runs directly in the repository:
- [`examples/campaign-launch/`](examples/campaign-launch/): Complete input brief, command, media plan output, creative brief, and compliance gate findings.
- [`examples/monthly-client-report/`](examples/monthly-client-report/): Raw multi-channel CSV export and finished C-suite wrap presentation.

---

## How It Works: The Foundation Context Architecture

```
                  +-------------------------------+
                  |  context/client-context.md    |
                  |  (Unit Economics, Tone, ICPs) |
                  +---------------+---------------+
                                  |
            +---------------------+---------------------+
            |                     |                     |
            v                     v                     v
    [@media-plan]         [@creative-brief]     [@compliance-check]
   Budget & CAC Limits    Voice & Power Angles   Forbidden Disclosures
            |                     |                     |
            +---------------------+---------------------+
                                  |
                                  v
                    [workflows/campaign-launch.md]
                    Unified High-Converting Delivery
```

---

## GitHub Topics & Discovery Tags
`agent-skills` • `claude-skills` • `claude-code` • `cursor` • `windsurf` • `marketing-agency` • `performance-marketing` • `media-planning` • `budget-pacing` • `creative-testing` • `ad-compliance` • `growth-marketing` • `fractional-cmo`

---

## Contributing & License
- We welcome contributions that expand agency workflows. Review [CONTRIBUTING.md](CONTRIBUTING.md) for quality criteria.
- Released under the [MIT License](LICENSE). Built by [@darimamhaider](https://github.com/darimamhaider).
