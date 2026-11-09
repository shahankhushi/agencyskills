# Agency Context Hub

This directory holds persistent client and account context files.

In multi-client agencies, AI agents produce generic, hallucinated, or off-brand outputs when they lack structured ground truth. The `client-context-template.md` file serves as the single source of truth for:
- Financial unit economics (AOV, Gross Margin, Break-even ROAS, CPA ceilings)
- Target Ideal Customer Profiles (ICPs)
- Brand voice, tonality, and forbidden compliance words
- Active channel benchmarks and UTM tracking taxonomies

## How Skills Use This Directory
When executing any skill in `agencyskills` (such as `media-plan`, `creative-brief`, `budget-pacing`, `compliance-check`, or `post-campaign-report`), load the active client's context file first:

```bash
# Example in Claude Code / Antigravity CLI:
claude "Run @creative-brief using context/client-context-template.md for the upcoming summer race launch"
```
