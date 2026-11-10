---
name: offline-to-online
description: Bridges physical retail store visits, call center phone leads, showroom consultations, and brick-and-mortar POS transactions back to digital ad campaigns. Sets up Dynamic Number Insertion (DNI), Google Store Visit conversions, Meta Offline Conversions API (CAPI), customer data SHA-256 hashing standards, promo code incrementality, and geo-matched market testing. Use when attributing digital spend to offline sales, tracking multi-location retail foot traffic, analyzing call tracking conversions, or when asked to "offline attribution", "store visits tracking", "call tracking DNI", "offline CAPI", "measure retail impact of digital ads".
metadata:
  version: 1.0.0
  author: shahankhushi
  category: agency-attribution
---

# Offline-to-Online Attribution & Omnichannel Measurement

Over 70% of high-ticket commerce, automotive sales, healthcare visits, and retail purchases happen offline—in a physical store, over a phone call, or inside a showroom. Single-product SaaS playbooks fail completely here because they assume a 100% digital click-to-Stripe funnel.

This skill provides the data architecture and attribution models required to connect digital ad spend (Meta, Google, TikTok) to offline cash register rings, phone orders, and physical foot traffic.

---

## 1. Trigger Conditions

Activate when the user requests:
- `"Track offline store sales driven by Meta and Google Ads"`
- `"Set up call tracking with Dynamic Number Insertion (DNI)"`
- `"Configure Meta Offline Conversions API (CAPI) upload schema"`
- `"Measure foot traffic and physical store visits from ad campaigns"`
- `"Design a geo-matched market test for offline retail lift"`

---

## 2. The 4 Offline-to-Online Measurement Pillars

```
+-------------------------------------------------------------------------------+
|                       OFFLINE ATTRIBUTION ARCHITECTURE                        |
+-------------------------------------------------------------------------------+
|  PILLAR 1: CALL TRACKING & DNI (Dynamic Number Insertion)                     |
|  - Swaps phone numbers dynamically based on UTM source/campaign               |
|  - Pushes qualified call events into Google Ads & Meta CAPI                   |
|                                                                               |
|  PILLAR 2: OFFLINE CONVERSIONS API / POS MATCHBACK (Meta & Google)            |
|  - Daily/weekly ingestion of offline POS receipts / CRM transactions         |
|  - Hashes PII (SHA-256 email, phone) to match against user ad impressions     |
|                                                                               |
|  PILLAR 3: GEO-LIFT & MATCHED-MARKET EXPERIMENTS                             |
|  - Market A (Digital Ads ON) vs Market B (Digital Ads OFF - Synthetic Control)|
|  - Measures true incremental retail revenue without direct cookie tracking    |
|                                                                               |
|  PILLAR 4: EXCLUSIVE PROMO CODES & RECEIPT SCANNING                           |
|  - Channel-specific checkout barcodes or QR scan promotions                   |
+-------------------------------------------------------------------------------+
```

---

## 3. Implementation Protocols

### Protocol A: Dynamic Number Insertion (DNI)
For lead-gen, healthcare, legal, and automotive clients where phone calls represent 50%+ of pipeline:
1. **Pool Sizing Formula:**
   $$\text{Phone Pool Size} = \left(\frac{\text{Peak Hourly Concurrent Website Visitors}}{10}\right) + 2$$
   *Example: 50 concurrent visitors requires a pool of 7 dynamic numbers to avoid session collision.*
2. **Integration:** Pass `gclid`, `fbclid`, and UTM parameters from URL to CallRail / CallTrackingMetrics session, pushing "Call > 180 seconds" as an offline conversion back to Google Ads.

### Protocol B: Meta Offline Conversions API Schema (SHA-256)
Format offline POS customer transaction files using Meta's strict normalization standards:
- **Email:** Lowercase, strip whitespace, hash with SHA-256 (`fn_hash`).
- **Phone:** E.164 standard (e.g., `+15551234567`), hash with SHA-256.
- **Event Name:** `Purchase`
- **Currency & Value:** ISO standard (e.g., `USD`, `249.50`)
- **Event Time:** Unix timestamp (Must be uploaded within 62 days of transaction).

### Protocol C: Matched-Market Geo Testing (Gold Standard)
When cookies and phone numbers fail (e.g., consumer goods sold in Walmart or Target):
1. Select 10 matched pairs of DMAs (Designated Market Areas) with identical historical baseline sales velocity (e.g., Dallas vs Houston, Columbus vs Indianapolis).
2. Turn on heavy digital media in Test DMAs; keep Control DMAs dark.
3. Calculate **Incremental Lift %**:
   $$\text{Incremental Lift} = \frac{\Delta \text{Sales}_{\text{Test}} - \Delta \text{Sales}_{\text{Control}}}{\text{Baseline Sales}_{\text{Control}}} \times 100\%$$

---

## 4. Standard Output Schema: Offline Attribution Blueprint

```markdown
# Offline-to-Online Attribution Blueprint: [Client Name]
**Business Model:** [e.g., Multi-Location MedSpa / D2C Brand with Retail Wholesale]
**Locations:** [X Locations / Nationwide Retail] | **Primary Attribution Challenge:** [Phone Leads + Store POS]

---

## 1. Omnichannel Attribution Architecture

| Customer Touchpoint | Capture Technology | Match Key | Conversion Destination | Attribution Window |
| :--- | :--- | :--- | :--- | :--- |
| Website Inbound Call | DNI (Dynamic Number Insertion) | `gclid` / Session ID | Google Ads Offline Conversion | 30-Day Click |
| In-Store POS Checkout | Shopify POS / Square CSV Export | SHA-256 Email & Phone | Meta Offline CAPI | 7-Day Click / 1-Day View |
| Retail Shelf (Wholesale) | Geo-Matched Market DMA Test | Aggregate Store Scan Data | Incrementality Model | Quarterly Lift |

---

## 2. Meta & Google Offline Data Upload Pipeline

### Formatting & Hashing Spec
```json
{
  "data": [
    {
      "match_keys": {
        "em": ["f660ab912ec121d1b1e928a0bb4bc61b15f5ad44d5efdc4e1c92a25e99b8e44a"],
        "ph": ["99c922a61e77f0a8276f5713c7340b616462615469e8b8c25732fd5a86d26732"],
        "fn": ["4f796245137cd7e510807b5e4063da59f77e685f02ab4546875bc093a8d9a42e"],
        "country": ["4b42240974483a99e7284f23b7e411b714b1922c2a07d66624a919cb49d32b35"]
      },
      "event_name": "Purchase",
      "event_time": 1731153600,
      "value": 185.00,
      "currency": "USD",
      "custom_data": {
        "store_location_id": "STORE_042_DALLAS",
        "fulfillment_type": "in_store_pickup"
      }
    }
  ]
}
```

---

## 3. Matchback Reconciliation & Reporting Cadence
- **Weekly Automated Sync:** Run script every Monday at 02:00 AM ingesting previous week's POS transaction log.
- **Expected Match Rate Benchmarks:**
  - High-intent local leads (Email + Phone match): **55% - 70%**
  - Retail POS walk-ins (Email only): **30% - 45%**
- **Channel ROAS Adjustment:** Reconcile platform-reported ROAS with offline matchback incrementality multipliers.
```

---

## 5. Verification Checklist

Before deploying offline attribution:
- [ ] DNI script fires correctly across desktop and mobile browsers.
- [ ] Phone numbers swap dynamically based on `utm_medium=paid_search` vs `paid_social`.
- [ ] Customer emails and phone numbers are hashed with SHA-256 before transit.
- [ ] In-store POS records capture email or mobile number on at least 40% of transactions.
