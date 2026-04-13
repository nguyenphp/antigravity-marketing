---
name: marketing-report-expert
description: Orchestrates a professional reporting workflow by combining design system intelligence with high-fidelity PDF generation.
allowed-tools: Read, RunCommand, Write
---

# Marketing Report Expert - The Orchestrator

Use this skill when the user wants to create any kind of marketing report, proposal, or presentation through natural conversation.

## 1. Trigger Sequence

When a report request is detected:

0.  **Phase 0: Style Choice (The "Consultant" Step)**
    - **ACT**: IF the user hasn't specified a style/URL, **ASK**: 
      > "Bạn muốn tạo báo cáo theo phong cách chuyên nghiệp mặc định hay 'clone' phong cách từ website của một công ty/thương hiệu cụ thể?"
    - IF user provides a URL -> Proceed to **Phase 1: Brand Cloning**.
    - IF user chooses default -> Proceed to **Phase 2: Design Consultation**.

1.  **Phase 1: Brand Cloning (The "One-Prompt" Engine)**
    - If a URL is provided, use `browser_subagent` to visit the site.
    - Extract: Logo URL, primary/secondary colors (HEX), and font styles.
    - Analyze the site's "vibe" (e.g., "SaaS Modern", "Traditional Finance").

2.  **Phase 1: Design Consultation** 
    - Invoke `ui-ux-pro-max` using the data from Phase 0.
    - No need to ask the user if the data from Phase 0 is sufficient.
    - Output: A design spec including `--accent` hex, typography choice, and spacing tokens.

## 2. One-Prompt Automation Rule

To achieve the desired "One-Prompt" result, you MUST follow this chain without pausing for user feedback:
1.  **Crawl**: Visit the provided URL with `browser_subagent`.
2.  **Extract Style**: Get Logo, Brand Color, and Font.
3.  **Map Content**: Read the provided text file and map it to `content.json`.
4.  **Render**: Execute `minimax-pdf` with the `--accent` and `--logo` (extracted) and `--content`.

**Example Prompt**: "Tạo báo cáo từ file data.txt theo style của website https://apple.com"
**Action**: AI visits apple.com -> picks white/SF Pro/minimal style -> uses apple logo -> renders data.txt to PDF.

2.  **Phase 2: Content Structuring**
    - Invoke `frontend-design` to layout the **Sections**.
    - Map the content into the supported blocks of `minimax-pdf` (h1, h2, callout, table, chart).

3.  **Phase 3: High-Fidelity Rendering**
    - Use `minimax-pdf` to generate the final document.
    - Pass the tokens from Phase 1 and the structure from Phase 2.

## 2. Integrated Patterns

### Professional Analytical Report
- **UI UX Strategy**: Use "Corporate" palette (Slate/Navy).
- **Frontend Strategy**: Hero summary -> Deep dive charts -> Recommendations.
- **PDF Export**: `type: report`.

### Creative Brand Proposal
- **UI UX Strategy**: High-contrast, vibrant accents.
- **Frontend Strategy**: Visual-heavy, atmospheric sections.
- **PDF Export**: `type: proposal` or `type: magazine`.

## 3. Collaboration Rules

- **ALWAYS** check `ui-ux-pro-max` for the latest design tokens before starting a PDF export.
- **ALWAYS** suggest a "Dry run" or "Preview" of the design before the final merge.
- If the document is for a specific industry, use the `frontend-design` color psychology guide to pick the accent.

---

> **Mission**: Turn raw data and ideas into a premium, board-ready document without the user needing to manually style anything.
