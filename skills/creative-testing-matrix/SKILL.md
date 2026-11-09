---
name: creative-testing-matrix
description: Structures statistically rigorous ad creative testing architectures: Hook × Format × Angle × Audience matrices. Calculates minimum sample sizes, ad spend per test cell, test sandbox isolation methodologies (Dynamic Creative Testing DCT vs ABO Sandboxes vs Cost Cap validation), kill/scale metrics (3-second hook rate, 15-second hold rate, outbound CTR, CPA), and winner graduation rules into scale campaigns. Use when launching creative sprints, setting up A/B creative tests, auditing test validity, or when asked to "creative testing matrix", "test ad creative", "DCT setup", "hook rate benchmark", "scale winning ads".
metadata:
  version: 1.0.0
  author: darimamhaider
  category: agency-creative
---

# Creative Testing Matrix & Experimentation Architecture

Throwing 50 ad variations into an Advantage+ campaign and hoping Meta picks the best one is not testing—it is gambling. Ad algorithms are biased toward early impressions; a mediocre ad that gets lucky in the first 500 impressions can starve superior creatives of delivery.

This skill builds structured creative testing matrices that isolate variables (Hook vs Body vs Format), enforce statistical significance thresholds, and operate a systematic "Sandbox to Scale" pipeline.

---

## 1. Trigger Conditions

Activate when the user requests:
- `"Build a creative testing matrix for our next sprint"`
- `"How should we test 4 new hooks and 3 formats?"`
- `"What is the minimum budget required to test these ads?"`
- `"Evaluate test results: which ads should we scale or kill?"`
- `"Set up a Meta DCT (Dynamic Creative Test) structure"`

---

## 2. The 3-Tier Testing Architecture

```
+--------------------------------------------------------------------------+
|                       CREATIVE TESTING PIPELINE                          |
+--------------------------------------------------------------------------+
|  STAGE 1: THE SANDBOX (Variable Isolation)                               |
|  - Meta DCT (3:2:2) or ABO Ad Sets at fixed spend                        |
|  - Objective: Isolate winning Hooks & Angles with statistical confidence|
|                                                                          |
|                               v (Passes Hook Rate > 30% & CPA < Target)  |
|                                                                          |
|  STAGE 2: VALIDATION (Cost Cap / Bid Sandbox)                            |
|  - Test winners against controlled cost caps                             |
|  - Objective: Ensure CPA holds as delivery expands                       |
|                                                                          |
|                               v (Holds Target CPA across 50+ purchases)  |
|                                                                          |
|  STAGE 3: THE SCALE ENGINE (CBO / Advantage+ Shopping)                   |
|  - Graduate Post ID into main scaling campaign                           |
|  - Preserves social proof, likes, and comment history                    |
+--------------------------------------------------------------------------+
```

---

## 3. Mathematical Foundations & Sample Sizing

### A. Minimum Spend Per Cell Formula
To reach 90% statistical confidence before judging an ad's performance:
$$\text{Min Spend Per Test Cell} = 3 \times \text{Target CPA}$$
*Example: If Target CPA is $40, each ad variation must spend at least $120 before you can declare it a loser. Killing an ad after $25 spend is premature and invalidates test results.*

### B. Funnel Metric Diagnostic Tree
Analyze creative drop-off through this 4-step diagnostic filter:

| Funnel Metric | Calculation | Agency Benchmark | What Failure Means | Action Required |
| :--- | :--- | :--- | :--- | :--- |
| **Hook Rate** (3s View Rate) | `3s Video Plays / Impressions` | **$\ge$ 30.0%** | Visual/hook failed to stop the scroll | Rework first 3 seconds of visual/text |
| **Hold Rate** (Completion Rate) | `ThruPlays (15s) / 3s Video Plays` | **$\ge$ 15.0%** | Mechanism/body is boring or misleading | Tighten pacing, improve VO clarity |
| **Outbound CTR** | `Outbound Clicks / Impressions` | **$\ge$ 1.20%** | Offer/CTA is weak or uncompelling | Strengthen CTA, add urgency/guarantee |
| **Landing Page CVR** | `Conversions / Outbound Clicks` | **$\ge$ 2.50%** | Ad promise does not match landing page | Fix message match, pricing, or page speed |

---

## 4. The 3:2:2 Dynamic Creative Testing (DCT) Protocol

For Meta Ads, the 3:2:2 DCT structure is the gold standard for testing creative components:
- **3 Creatives:** 3 distinct video hooks or image concepts (identical offer).
- **2 Primary Texts:** 1 short punchy body copy, 1 long-form narrative copy.
- **2 Headlines:** 1 curiosity-driven headline, 1 direct offer/benefit headline.

**Test Setup Rules:**
1. Keep the audience **Broad** (No narrow interest or lookalike stacking) so creative does the targeting.
2. Set budget to $50 - $100/day per DCT ad set.
3. Run for 72 - 96 hours or until the test cell spends $3\times \text{Target CPA}$.
4. Break down by `Dynamic Creative Element` in Ads Manager to identify the winning combinations.

---

## 5. Standard Output Schema: Creative Testing Matrix

```markdown
# Creative Testing Matrix: [Sprint Name / Month]
**Brand:** [Brand Name] | **Test Flight:** YYYY-MM-DD to YYYY-MM-DD
**Test Budget Allocation:** $[Budget] | **Target CPA:** $[Target CPA]

---

## 1. The Variable Testing Matrix Grid

| Cell ID | Concept Name | Angle Category | Hook Variation | Asset Format | Copy Style | Target Audience |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **T01** | Hydration Teardown | Contrarian | Hook A (Sink Dump) | 9:16 Video | Short Punchy | Broad Open (US 25-54) |
| **T02** | Hydration Teardown | Contrarian | Hook B (Curiosity) | 9:16 Video | Short Punchy | Broad Open (US 25-54) |
| **T03** | Hydration Teardown | Contrarian | Hook C (Runner Cramp)| 9:16 Video | Short Punchy | Broad Open (US 25-54) |
| **T04** | Us vs Them | Comparison | Hook A (Side-by-side) | 4:5 Static Grid | Long Narrative | Broad Open (US 25-54) |
| **T05** | Doctor Endorsement | Social Proof | Hook A (Lab Coat) | 9:16 UGC | Bullet Points | Broad Open (US 25-54) |

---

## 2. Test Execution Parameters & Budget Sizing
- **Total Test Cells:** [5 Cells]
- **Min Spend Per Cell ($3 \times \text{CPA}$):** $[XX.XX]
- **Total Required Test Budget:** $[XX,XXX]
- **Daily Budget per Test Ad Set:** $[XX.XX] / day
- **Test Duration:** [4 Days / 96 Hours]

---

## 3. Decision Matrix: Kill vs Scale Rules

```
+-------------------------------------------------------------------------------+
| TEST OUTCOME DECISION TREE                                                    |
+-------------------------------------------------------------------------------+
| Case A: Spend >= 3x CPA & Conversions == 0                                    |
|         --> ACTION: KILL. Do not let it spend another dollar.                 |
|                                                                               |
| Case B: Hook Rate < 25% but CPA is acceptable                                 |
|         --> ACTION: ITERATE. Body converts, but top-of-funnel is leaky.       |
|             Cut 3 new hook variations for this winning body.                  |
|                                                                               |
| Case C: Hook Rate >= 32%, Hold Rate >= 18%, CPA <= Target CPA                 |
|         --> ACTION: GRADUATE. Extract winning Post ID. Move into Scale CBO.   |
+-------------------------------------------------------------------------------+
```

---

## 4. Post-Test Winner Graduation Log (Tracking Template)

| Cell ID | Post ID | Spend ($) | Hook Rate (%) | Hold Rate (%) | CTR (%) | CPA ($) | ROAS | Status | Graduation Campaign |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| T01 | `12020491823` | $145.00 | 34.2% | 19.5% | 1.85% | $28.50 | 3.2x | **GRADUATE** | CBO_Scaling_Q3 |
| T02 | `12020491824` | $130.00 | 18.1% | 11.2% | 0.95% | $58.00 | 1.4x | **KILL** | - |
| T03 | `12020491825` | $160.00 | 22.4% | 21.0% | 1.60% | $34.00 | 2.6x | **ITERATE** | Re-hook sprint |
```

---

## 6. Common Pitfalls to Avoid

1. **Changing Multiple Variables Simultaneously:** If you test a new hook, new product offer, and new audience at the same time, you cannot determine what drove performance. Keep offer and audience constant while varying creative.
2. **Post ID Duplication Failure:** Never build a fresh ad from scratch in the scaling campaign. Extract the winning ad's Facebook Post ID (`Page Post ID`) and paste it as an existing post to preserve social proof (likes, shares, comments).
