# Changelog

## [1.0.20] - 2026-04-20

### Removed
- **Major Technical Cleanup**: Removed 31 non-marketing skills (Docker, DevOps, NestJS, Security, etc.) to refocus the kit exclusively on Marketing capabilities.
- **Narrowed Agent Base**: Reduced total agent count to **10 specialized marketing experts**.
- **Streamlined Workflows**: Removed 4 technical workflows (`/debug`, `/deploy`, `/test`, `/enhance`).

### Changed
- **New Capability Counts**: Synchronized all documentation to reflect the refined **60 Skills, 10 Agents, 13 Workflows** architecture.
- **UI Refresh**: Renamed "Design & Development" category to "Design & UI/UX" on the website.

## [1.0.19] - 2026-04-18

### Added
- **Massive Skill Expansion**: Restored and updated the full suite to **90 specialized skills** (was 34), reaching full depth across Growth, Strategy, Analytics, and Creative domains.
- **Reporting & Document Engine (MiniMax)**: Strategic focus on high-fidelity document generation (`minimax-pdf`, `minimax-docx`, `minimax-xlsx`, `pptx-generator`).
- **Video & Visual Production**: Integrated robust video automation tools (`video-automation`, `video-marketing`, `tutorial-video-expert`) with Remotion best practices.
- **Expanded Agent Roster**: Doubled the specialized agent count to **20 AI experts** (Strategist, Security Auditor, Database Architect, etc.).
- **Workflow Optimization**: Added 11 new slash workflows (total 17), including `/brandreport`, `/brainstorm`, and `/orchestrate`.

### Changed
- **Documentation Overhaul**: Complete rewrite of README.md to reflect the full 90-skill architecture.
- **Website Sync**: Updated the official homepage (ag-mkt.site) with synchronized counts, icon systems, and multimodal skill details.

## [1.0.13] - 2026-04-13

### Added
- **Brand Cloning System**: Automatically extract logo, colors, and typography from any website URL for automated reporting.
- **Brand Report Workflow**: Added `/brand-report` workflow for one-prompt automated branded reports.
- **Marketing Report Expert**: New high-level orchestrator skill for professional document design.

### Fixed
- **Vietnamese Unicode Support**: Implemented full support for Vietnamese characters in both headings and body text of PDF reports.
- **Python Compatibility**: Fixed Union types for Python 3.9 consistency.
- **Node.js ESM Conflict**: Resolved module naming issues for Puppeteer-based cover rendering.
- **Dependency Management**: Automated playwright/chromium detection during PDF generation.

### Changed
- **Typography Engine**: Prioritizes Vietnamese-compatible system fonts (Arial/Roboto) automatically on Mac/Linux environments.
