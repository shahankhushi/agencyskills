# Agent Workflow: Monthly Client Wrap & Reporting Protocol (`monthly-client-report.md`)

An orchestrated agent workflow that automates the monthly client reporting cycle: ingesting raw platform CSV exports, identifying spend anomalies, reconciling multi-touch attribution against cash collected, dissecting creative winners and losers, and generating next-month strategic allocations.

```
+---------------------------------------------------------------------------------------------------+
|                                MONTHLY CLIENT WRAP PIPELINE                                       |
+---------------------------------------------------------------------------------------------------+
|  [01. Export Ingestion]                                                                           |
|       Ingest raw CSV exports from Meta Ads Manager, Google Ads, TikTok, Shopify/Stripe            |
|                                                                                                   |
|  [02. Data Cleansing & Anomaly Detection] -> via adaudit                                          |
|       Detect spend anomalies, zero-conversion ad waste, naming breaks, audience overlap          |
|                                                                                                   |
|  [03. Attribution Reconciliation]                                                                 |
|       De-duplicate platform claims against Shopify net revenue and GA4 Data-Driven Attribution   |
|       Calculate true Blended MER and First-Order CAC                                              |
|                                                                                                   |
|  [04. Wrap Deliverable Generation] -> @post-campaign-report                                       |
|       C-Suite Executive Scorecard, Channel Decomposition, Top 5 vs Bottom 5 Creative Post-Mortem  |
|                                                                                                   |
|  [05. Next-Month Reallocation Modeling] -> @budget-pacing                                         |
|       Adjust forward month run rates, reallocate capital from fatigued assets to proven winners   |
+---------------------------------------------------------------------------------------------------+
```

---

## How to Run This Workflow

In Claude Code, Antigravity CLI, Cursor, or your AI Agent terminal:

```bash
# Full monthly reporting workflow execution
claude "Run workflows/monthly-client-report.md using context/client-context-template.md and exports/october-meta-google.csv"
```

---

## Step-by-Step Execution Sequence

### Phase 1: Data Ingestion & Sanitation
1. Load raw CSV exports from client ad accounts and store platforms.
2. Normalize column headers:
   - `Spend`, `Impressions`, `Clicks`, `Purchases`, `Conversion Value / Revenue`.
3. Validate date range (e.g., Oct 1 - Oct 31) to prevent partial month distortion.

### Phase 2: Anomaly Detection & Waste Identification (via adaudit)
1. Scan for the 4 core ad account leaks:
   - **Dead Spend:** Ad sets that spent $>2.5\times \text{Target CPA}$ with 0 conversions.
   - **Creative Fatigue Decay:** Ads where Frequency $> 4.0$ and weekly CTR dropped $> 30\%$.
   - **Naming Convention Breaks:** Ads missing standard tracking UTMs.
   - **Audience Cannibalization:** Multiple ad sets bidding on identical broad audiences.
2. Quantify total dollars wasted during the month.

### Phase 3: Attribution Reconciliation (Three Tiers of Truth)
1. Calculate **Blended MER**:
   $$\text{Blended MER} = \frac{\text{Total Net Sales (Shopify)}}{\text{Total Ad Spend (Meta + Google + TikTok)}}$$
2. Reconcile platform-reported purchases vs actual first-party purchases to establish the **Attribution Inflation Index**:
   $$\text{Inflation Index} = \frac{\text{Meta Purchases} + \text{Google Purchases}}{\text{Shopify Net Orders}}$$
3. If Inflation Index $> 1.35$, explain to client that ad platforms are claiming duplicate credit for identical customer journeys.

### Phase 4: Executive Wrap Generation
1. Execute `@post-campaign-report`:
   - Generate C-Suite Scorecard (Topline revenue, net spend, blended MER, blended CAC).
   - Planned vs Actual budget variance table.
   - Creative League Table: Top 3 winning video/image assets with exact psychological teardowns explaining why they converted.
   - Creative Graveyard: Bottom 2 losing assets with post-mortems explaining why they failed.

### Phase 5: Forward Month Strategy & Budget Allocation
1. Execute `@budget-pacing`:
   - Calculate required daily spend run rate for the upcoming month.
   - Reallocate recovered wasted spend (identified in Phase 2) toward the top-performing creative winners.
   - Schedule upcoming creative sprint concepts targeting customer objections uncovered during the month.
