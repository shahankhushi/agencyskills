# Agent Workflow: Campaign Launch Protocol (`campaign-launch.md`)

An orchestrated agent workflow that executes the entire agency go-to-market sequence in a single deterministic pipeline.

```
+---------------------------------------------------------------------------------------------------+
|                                  CAMPAIGN LAUNCH PIPELINE                                         |
+---------------------------------------------------------------------------------------------------+
|  [01. Context Ingestion]                                                                          |
|       Load context/client-context.md (unit economics, brand voice, forbidden terms)               |
|                                                                                                   |
|  [02. Media Planning] -> @media-plan                                                              |
|       Budget allocation, funnel splits (60/20/10/10), reach & frequency, flighting calendar       |
|                                                                                                   |
|  [03. Creative Strategy] -> @creative-brief                                                       |
|       Single-Minded Proposition (SMP), 3-second hook variations, second-by-second storyboard      |
|                                                                                                   |
|  [04. Experimentation Architecture] -> @creative-testing-matrix                                   |
|       Hook x Format x Angle test cells, sample size calculations, 3:2:2 DCT isolation             |
|                                                                                                   |
|  [05. Compliance Verification] -> @compliance-check                                               |
|       Meta & Google policy checks, FTC disclosure verification, personal attribute reframing      |
|                                                                                                   |
|  [06. Quality Gate Assessment] -> brief-gate tool                                                 |
|       Deterministic line-level evaluation against brief criteria (Pass / Fix / Block)             |
|                                                                                                   |
|  [07. Final Pre-Flight Launch Checklist]                                                          |
|       UTM taxonomy verification, CAPI event deduplication, budget caps, client approval sign-off  |
+---------------------------------------------------------------------------------------------------+
```

---

## How to Run This Workflow

In Claude Code, Antigravity CLI, Cursor, or your AI Agent terminal:

```bash
# Full workflow execution
claude "Run workflows/campaign-launch.md using context/client-context-template.md for the Q3 Summer Hydration Launch with a $60,000 budget"
```

---

## Step-by-Step Execution Sequence

### Phase 1: Context Verification
1. Read `context/client-context.md` (or run `@client-onboarding` if context is missing).
2. Extract the target unit economics:
   - Target CPA Ceiling
   - Break-even ROAS
   - Brand voice constraints & forbidden terms

### Phase 2: Media Plan Sizing
1. Execute `@media-plan`:
   - Split budget across Meta (Cold + Retargeting), Google Search, and TikTok.
   - Establish weekly flighting calendar and projected conversions.
   - Run conservative vs base vs aggressive scenario models.

### Phase 3: Creative Briefing & Storyboarding
1. Execute `@creative-brief`:
   - Define the Single-Minded Proposition (SMP).
   - Generate 3 distinct 3-second hooks (Visual + Audio + On-screen text).
   - Script the second-by-second video storyboard.
   - Specify 9:16 vertical and 4:5 feed safe zone guidelines.

### Phase 4: Creative Testing Matrix
1. Execute `@creative-testing-matrix`:
   - Map out the Hook × Angle × Format testing cells.
   - Calculate minimum spend per cell ($3\times \text{Target CPA}$).
   - Set 3:2:2 DCT ad set configuration.

### Phase 5: Policy & Compliance Gate
1. Execute `@compliance-check`:
   - Scan all copy and visual prompts for Meta policy violations (personal attributes, before/after claims).
   - Ensure FTC and FDA disclosures are burned into creative.
   - Generate compliant rewrites for any flagged lines.

### Phase 6: Deterministic Quality Gate (brief-gate)
1. Run `brief-gate` CLI verification:
   ```bash
   brief-gate evaluate --brief campaign_brief.json --asset creative_output.md
   ```
2. Verify:
   - Word count within range.
   - Mandatory brand keywords present.
   - Zero forbidden words detected.
   - CTA matches required URL destination.

### Phase 7: Final Pre-Flight Checklist
Output the committed pre-flight launch checklist:
- [ ] Tracking pixels & CAPI verified active with <48hr event latency.
- [ ] UTM parameters structured according to agency taxonomy.
- [ ] Daily budget caps set; payment method verified with backup card.
- [ ] Creative Post IDs ready for winner graduation.
- [ ] Client Partner sign-off received.
