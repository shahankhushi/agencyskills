# Contributing to `agencyskills`

Thank you for your interest in contributing! `agencyskills` is an open-source library of specialized agent skills for performance marketers, media directors, and agency operators.

## The Quality Standard

To maintain our position as the standard for multi-client agency marketing, every proposed skill must satisfy these criteria:

1. **Non-Duplication:** Do not submit skills that duplicate general single-product SaaS marketing tools (e.g., generic copywriting, blog SEO, basic keyword research). Those already exist in Corey Haines' `marketingskills`. Focus exclusively on multi-client, team, budget, attribution, compliance, and agency operations problems.
2. **Deterministic & Mathematical:** Ground skills in real equations (Effective Frequency, Blended MER, Burn Rate Index, TCO, Sample Sizing), not vague prompts.
3. **Committed Example Run:** Every new skill or workflow must include an entry in `/examples` with synthetic inputs, the exact execution command, and the real markdown output.
4. **Agent Skills Specification Compliance:** All skills must include valid YAML frontmatter with `name`, `description`, and `metadata`.

## Submitting a Pull Request

1. Fork the repository.
2. Create your branch: `git checkout -b skill/your-skill-name`
3. Add your skill folder in `skills/<skill-name>/SKILL.md`.
4. Include committed synthetic examples in `examples/<skill-name>/`.
5. Update `package.json` and `.claude-plugin/plugin.json`.
6. Open a PR with a description of the real-world agency problem solved.
