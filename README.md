# Antigravity Marketing Kit

🚀 Marketing-focused AI agent skills kit for Gemini CLI.

## 📋 Table of Contents

- [Introduction](#-introduction)
- [Skills](#-skills)
- [Agents](#-agents)
- [Workflows](#-workflows)
- [Installation](#-installation)
- [Usage](#-usage)
- [Contributing](#-contributing)
- [License](#-license)

## 🎯 Introduction

Antigravity Marketing Kit is a comprehensive collection of marketing-focused skills, agents, and workflows designed to supercharge your AI-assisted marketing efforts.

> **Based on [Antigravity Kit](https://github.com/vudovn/antigravity-kit)** - the original CLI toolkit for AI agent skills.

This toolkit includes:
- **Skills** - Marketing domain expertise (Content, SEO, Social Media, Growth...)
- **Agents** - Specialized AI agents for marketing tasks
- **Workflows** - Step-by-step procedures for common marketing tasks

## 🙏 Credits

This project is built upon and includes skills from:

- 🚀 **[Antigravity Kit](https://github.com/vudovn/antigravity-kit)** - Base CLI structure and core skills
- 🎨 **[UI UX Pro Max](https://ui-ux-pro-max-skill.nextlevelbuilder.io/)** - Design intelligence skills (`ui-ux-pro-max`, `frontend-design`, `tailwind-patterns`)
- 🛠️ **[ClaudeKit](https://claudekit.cc/)** - Production-ready skills (`seo-fundamentals`, `documentation-templates`)

## 🧠 Skills (17)

### Content & Creative
| Skill | Description |
|-------|-------------|
| `content-marketing` | Content strategy, copywriting, storytelling |
| `branding-expert` | Brand identity, voice & tone, style guides |
| `video-marketing` | Video strategy, YouTube SEO, short-form content |

### Growth & Acquisition
| Skill | Description |
|-------|-------------|
| `growth-hacking` | Viral loops, referral programs, AARRR framework |
| `ppc-advertising` | Google Ads, Meta Ads, campaign optimization |
| `influencer-marketing` | Influencer outreach, KOL partnerships |
| `affiliate-marketing` | Affiliate programs, partner networks |

### Channels
| Skill | Description |
|-------|-------------|
| `social-media-expert` | Platform strategies (FB, IG, TikTok, LinkedIn) |
| `email-marketing` | Campaigns, sequences, automation, newsletters |

### Optimization & Analytics
| Skill | Description |
|-------|-------------|
| `seo-fundamentals` | SEO best practices, E-E-A-T, Core Web Vitals |
| `analytics-marketing` | KPIs, attribution, GA4, dashboards |
| `conversion-optimization` | CRO, A/B testing, landing pages |
| `marketing-automation` | Lead nurturing, workflows, segmentation |

### Design & Development
| Skill | Description |
|-------|-------------|
| `ui-ux-pro-max` | Design intelligence for marketing |
| `frontend-design` | Landing page & web design |
| `tailwind-patterns` | Utility-first CSS patterns |
| `documentation-templates` | Marketing documentation templates |

## 🤖 Agents (4)

| Agent | Description |
|-------|-------------|
| `marketing-strategist` | Overall marketing strategy orchestrator |
| `content-creator` | Content creation specialist |
| `growth-specialist` | Growth hacking specialist |
| `analytics-specialist` | Data analysis and insights |

## 🔄 Workflows (4)

| Command | Description |
|---------|-------------|
| `/campaign` | Create marketing campaign |
| `/content` | Content creation workflow |
| `/analyze` | Marketing analytics workflow |
| `/optimize` | Conversion optimization workflow |

## 📦 Installation

### Install Global (Recommended)

```bash
# Install globally
npm install -g @nguyenphp/antigravity-marketing

# Navigate to your project
cd your-project

# Install .agent folder
ag-marketing-kit init

# Update to latest version
ag-marketing-kit update

# Check status
ag-marketing-kit status

# List all skills
ag-marketing-kit list
```

### Using npx (No Install)

```bash
# Navigate to your project
cd your-project

# Install .agent folder
npx @nguyenphp/antigravity-marketing init
```

### CLI Commands

| Command | Description |
|---------|-------------|
| `ag-marketing-kit init` | Install .agent folder |
| `ag-marketing-kit update` | Update to latest version |
| `ag-marketing-kit status` | Check installation status |
| `ag-marketing-kit list` | List all available skills |

#### Command Options

```bash
# init options
ag-marketing-kit init [options]
  -f, --force          # Overwrite if folder exists
  -p, --path <dir>     # Path to project directory
  -b, --branch <name>  # Select repository branch

# update options
ag-marketing-kit update [options]
  -f, --force          # Skip confirmation
  -p, --path <dir>     # Path to project directory
  -b, --branch <name>  # Select repository branch
```

## 🚀 Usage

### Skills

Skills are automatically detected and used by Gemini CLI based on context.

### Workflows

Invoke workflows with slash commands:

```
/campaign - Start a marketing campaign workflow
/content - Create content with guidance
/analyze - Analyze marketing metrics
/optimize - Run conversion optimization
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Adding a New Skill

1. Create folder in `templates/.agent/skills/your-skill/`
2. Add `SKILL.md` with YAML frontmatter and content
3. Submit PR

### Adding a New Workflow

1. Create file in `templates/.agent/workflows/your-workflow.md`
2. Add description frontmatter and steps
3. Submit PR

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.
