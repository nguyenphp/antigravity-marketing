# Changelog

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
