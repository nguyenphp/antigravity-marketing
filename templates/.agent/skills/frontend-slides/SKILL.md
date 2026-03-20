---
name: frontend-slides
description: Create stunning, animation-rich HTML presentations from scratch or by converting PowerPoint files. Use when the user wants to build a presentation, convert a PPT/PPTX to web, or create slides for a talk/pitch. Helps non-designers discover their aesthetic through visual exploration rather than abstract choices.
---

# Frontend Slides

Create zero-dependency, animation-rich HTML presentations that run entirely in the browser.

## Core Principles

1. **Zero Dependencies** — Single HTML files with inline CSS/JS. No npm, no build tools.
2. **Show, Don't Tell** — Generate visual previews, not abstract choices. People discover what they want by seeing it.
3. **Distinctive Design** — No generic "AI slop." Every presentation must feel custom-crafted.
4. **Viewport Fitting (NON-NEGOTIABLE)** — Every slide MUST fit exactly within 100vh. No scrolling within slides, ever. Content overflows? Split into multiple slides.

## Design Aesthetics

Avoid generic AI-generated aesthetics like overused font families (Inter, Roboto) or cliched color schemes (purple gradients on white). Focus on:
- **Typography**: beautiful, unique fonts (Google Fonts/Fontshare).
- **Color & Theme**: cohesive aesthetic with CSS variables and sharp accents.
- **Motion**: CSS-only animations for staggered reveals and high-impact transitions.
- **Backgrounds**: layered gradients, geometric patterns, or depth effects.

## Viewport Fitting Rules (Mandatory)

- Every `.slide` must have `height: 100vh; height: 100dvh; overflow: hidden;`
- ALL font sizes and spacing must use `clamp(min, preferred, max)`.
- Content containers need `max-height` constraints.
- Images: `max-height: min(50vh, 400px)`.
- Breakpoints required for heights: 700px, 600px, 500px.
- Include `prefers-reduced-motion` support.

**Always read `viewport-base.css` and include its full contents in every presentation.**

### Content Density Limits Per Slide

| Slide Type | Maximum Content |
|------------|-----------------|
| Title slide | 1 heading + 1 subtitle + optional tagline |
| Content slide | 1 heading + 4-6 bullet points OR 1 heading + 2 paragraphs |
| Feature grid | 1 heading + 6 cards maximum (2x3 or 3x2) |
| Code slide | 1 heading + 8-10 lines of code |
| Quote slide | 1 quote (max 3 lines) + attribution |
| Image slide | 1 heading + 1 image (max 60vh height) |

---

## Workflow Guide

### Phase 1: Content Discovery
- Ask the user about the **Purpose**, **Length**, and **Content** of the presentation.
- Inquire if they need **Inline Editing** (LocalStorage persistence).

### Phase 2: Style Selection
- Show 3 distinct style previews based on the desired "mood" (Confident, Energized, Focused, Inspired).
- Read `STYLE_PRESETS.md` for options.
- Save previews to a temporary folder and let the user pick.

### Phase 3: Generation
- Read `html-template.md`, `viewport-base.css`, and `animation-patterns.md`.
- Generate a self-contained HTML file with all CSS/JS inline.
- Include the **full contents** of `viewport-base.css`.

### Phase 4: PPT Conversion (requires python-pptx)
- Run `python3 .agent/skills/frontend-slides/scripts/extract-pptx.py <input.pptx> <output_dir>`.
- Extract text and images, then proceed to style selection.

### Phase 5: PPTX Export (requires python-pptx)
- Run `python3 .agent/skills/frontend-slides/scripts/export-pptx.py <input.html> <output.pptx>`.
- Converts the HTML slides back into a PowerPoint format for offline presentation and editing.

---

## Examples

| Project | Description | Links |
|---------|-------------|-------|
| **JupViec Automation** | Content marketing automation presentation for JupViec.vn. | [HTML](examples/n8n-jupviec-automation.html), [PPTX](examples/n8n-jupviec-automation.pptx) |

---

## Supporting Files

| File | Purpose |
|------|---------|
| [STYLE_PRESETS.md](STYLE_PRESETS.md) | 12 curated visual presets with colors, fonts, and signature elements |
| [viewport-base.css](viewport-base.css) | Mandatory responsive CSS — copy into every presentation |
| [html-template.md](html-template.md) | HTML structure, JS features, code quality standards |
| [animation-patterns.md](animation-patterns.md) | CSS/JS animation snippets and effect-to-feeling guide |
| [scripts/extract-pptx.py](scripts/extract-pptx.py) | Python script for PPT content extraction (to HTML) |
| [scripts/export-pptx.py](scripts/export-pptx.py) | Python script for HTML to PPTX conversion |
