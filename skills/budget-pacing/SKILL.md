---
name: budget-pacing
description: Mid-flight ad spend pacing monitor, under/overspend detection, run-rate burn analysis, and algorithmic budget reallocation logic across Meta, Google Ads, TikTok, and multi-client agency accounts. Use when checking mid-month ad spend pacing, detecting budget waste or runaway spend, calculating projected end-of-month (EOM) spend, reallocating funds between winning and losing campaigns without triggering algorithmic learning resets, or when asked to "check pacing", "budget pacing report", "are we underspending", "reallocate budget", "burn rate analysis".
metadata:
  version: 1.0.0
  author: darimamhaider
  category: agency-media
---

# Mid-Flight Budget Pacing & Algorithmic Reallocation

Nothing damages an agency's client relationship faster than an accidental 40% budget overspend or ending the month with 30% unspent budget that leaves revenue on the table.

This skill monitors live spend velocity, calculates projected end-of-month (EOM) burn, and executes algorithmic reallocation rules that move dollars from fatigue-decayed campaigns to winning assets without resetting Meta/Google algorithmic learning phases.

---

## 1. Trigger Conditions

Activate when the user requests:
- `"Check budget pacing for [Client]"`
- `"Are we on track to hit our $80k spend this month?"`
- `"Analyze mid-month ad spend burn rate"`
- `"How should we reallocate $15,000 from underperforming campaigns?"`
- `"Calculate EOM spend projection from this export"`

---

## 2. Core Pacing Formulas & Metrics

Let:
- $B_{\text{total}} = \text{Total Monthly Approved Budget}$
- $D_{\text{total}} = \text{Total Days in Month (e.g., 30 or 31)}$
- $D_{\text{elapsed}} = \text{Days Elapsed So Far}$
- $D_{\text{remaining}} = D_{\text{total}} - D_{\text{elapsed}}$
- $S_{\text{actual}} = \text{Cumulative Actual Spend to Date}$

### Key Mathematical Formulas:
1. **Target Daily Spend (Baseline):**
   $$\text{Daily Target} = \frac{B_{\text{total}}}{D_{\text{total}}}$$

2. **Expected Spend to Date:**
   $$S_{\text{expected}} = \text{Daily Target} \times D_{\text{elapsed}}$$

3. **Spend Pacing Index (SPI):**
   $$\text{SPI} = \frac{S_{\text{actual}}}{S_{\text{expected}}}$$
   - $\text{SPI} = 1.00$: Perfect Pacing
   - $\text{SPI} > 1.05$: Overpacing (+5%)
   - $\text{SPI} < 0.95$: Underpacing (-5%)

4. **Projected End-of-Month (EOM) Spend:**
   $$\text{Projected EOM} = S_{\text{actual}} + \left(\text{Avg Daily Spend (Last 7 Days)} \times D_{\text{remaining}}\right)$$

5. **Required Daily Spend to Hit Budget:**
   $$\text{Required Daily Spend} = \frac{B_{\text{total}} - S_{\text{actual}}}{D_{\text{remaining}}}$$

6. **Variance Dollar & Percentage:**
   $$\text{Variance (\%)} = \frac{\text{Projected EOM} - B_{\text{total}}}{B_{\text{total}}} \times 100\%$$

---

## 3. Pacing Tolerance Bands & Action Triggers

```
+-------------------------------------------------------------------------------+
|                       BUDGET PACING TOLERANCE SPECTRUM                        |
+-------------------------------------------------------------------------------+
|  SPI Range   | Status    | Severity | Automated Action Trigger               |
+-------------------------------------------------------------------------------+
| 0.96 - 1.04  | ON TRACK  | None     | Maintain existing daily budgets        |
| 1.05 - 1.15  | OVERPACING| Yellow   | Trim lowest-ROAS ad set budgets by 10% |
| > 1.15       | CRITICAL  | Red      | Cap campaign budgets; flag emergency   |
| 0.85 - 0.95  | UNDERPACING| Yellow  | Raise bids or uncap top-scaling winner |
| < 0.85       | CRITICAL  | Red      | Audit audience saturation or ad bans   |
+-------------------------------------------------------------------------------+
```

---

## 4. Algorithmic Budget Reallocation Rules (The 20% Rule)

When shifting budget between campaigns, follow these media buying safety guardrails:

### Rule 1: The Meta / Google Learning Phase Guardrail
- **Never adjust an active campaign's daily budget by more than 20% within a 24-hour window.**
- *Reason:* Increasing budget by >20% causes the Meta/Google ad auction algorithm to reset the learning phase (`Learning Limited`), causing CPM spikes of 30-50% and erratic CPA fluctuations.
- *Execution:* If shifting $1,000 to a winning campaign spending $2,000/day, step it up over 3 days ($2,400 -> $2,880 -> $3,000).

### Rule 2: The ROAS / CPA Floor Rule
- Do **not** reallocate unspent budget into a campaign simply because it has high spend capacity.
- Only reallocate capital into campaigns where:
  $$\text{Rolling 7-Day CPA} \le 0.95 \times \text{Target CPA} \quad \text{AND} \quad \text{Frequency} < 3.2$$

### Rule 3: Kill & Shift Criteria for Underperformers
Reallocate capital away from campaigns/ad sets that meet any of:
- Spend $\ge 3\times \text{Target CPA}$ with **0 conversions**.
- Rolling 7-day CPA is $> 1.4\times \text{Target CPA}$ for 3 consecutive days.
- Creative fatigue: CTR dropped $> 35\%$ week-over-week while frequency reached $> 4.5$.

---

## 5. Standard Output Schema: Budget Pacing Audit

```markdown
# Ad Budget Pacing & Health Audit: [Client Name]
**Audit Date:** YYYY-MM-DD | **Days Elapsed:** [X] / [30] ([X]% of Month)
**Approved Monthly Budget:** $[Total Budget] | **Cumulative Spend to Date:** $[Spend to Date]

---

## 1. High-Level Pacing Dashboard
- **Spend Pacing Index (SPI):** [X.XX] ([On Track / Overpacing / Underpacing])
- **Current Run Rate (Last 7 Days):** $[X,XXX] / day
- **Required Run Rate for Remaining Days:** $[X,XXX] / day
- **Projected EOM Spend:** $[Projected] (**Variance:** +$XX,XXX / +X.X%)
- **Status Assessment:** [Actionable one-paragraph summary of risk and remedy]

---

## 2. Channel-by-Channel Pacing Breakdown

| Channel | Monthly Allocation | Spend to Date | Target to Date | SPI | 7-Day Avg Daily | Projected EOM | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Meta Ads | $XX,XXX | $XX,XXX | $XX,XXX | X.XX | $X,XXX | $XX,XXX | [Status] |
| Google Search | $XX,XXX | $XX,XXX | $XX,XXX | X.XX | $X,XXX | $XX,XXX | [Status] |
| TikTok Ads | $XX,XXX | $XX,XXX | $XX,XXX | X.XX | $X,XXX | $XX,XXX | [Status] |
| **Total** | **$XX,XXX** | **$XX,XXX** | **$XX,XXX** | **X.XX** | **$X,XXX** | **$XX,XXX** | **[Status]** |

---

## 3. Top Reallocation Opportunities & Waste Flags

### Waste Flag #1: [Campaign Name] (Channel)
- **Problem:** Spent $[X,XXX] over the last 7 days with CPA of $[XX.XX] (Target: $[XX.XX]).
- **Root Cause:** Creative fatigue (Frequency reached 4.8, CTR dropped from 1.4% to 0.6%).
- **Recommended Action:** Reduce daily budget from $[X] to $[Y] (-20%), pause ad IDs `[ID_1]`, `[ID_2]`.

### Scale Opportunity #1: [Campaign Name] (Channel)
- **Opportunity:** Generating $[XX.XX] CPA (35% below target) at 3.8x ROAS.
- **Recommended Action:** Increase daily budget from $[X] to $[Y] (+20% today, schedule +15% in 48 hours).

---

## 4. Execution Step-by-Step Checklist
- [ ] Shift $[Amount] from [Campaign A] to [Campaign B] in Ad Manager.
- [ ] Confirm no single adjustment exceeds the 20% learning threshold.
- [ ] Set automated rule: Pause Ad Set if Spend > $150 with 0 Purchases in next 24 hours.
- [ ] Re-check pacing in 48 hours at `YYYY-MM-DD 10:00 AM`.
```

---

## 6. Edge Cases & Special Scenarios

1. **Weekend vs Weekday Seasonality:** E-commerce typically experiences higher conversion rates on weekends or Sunday evenings; B2B drops significantly on weekends. Adjust target daily pacing using day-of-week weight coefficients ($W_{\text{weekday}} = 1.15, W_{\text{weekend}} = 0.65$ for B2B).
2. **End-of-Month Spike Prevention:** Never attempt to spend 25% of the total monthly budget in the final 3 days of the month to "hit the number." This dumps money into low-tier auction inventory, inflating CPA by 40-70%. Escalate pacing deviations by Day 15.
