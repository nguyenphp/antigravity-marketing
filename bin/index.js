#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import ora from 'ora';
import { downloadTemplate } from 'giget';
import path from 'path';
import fs from 'fs';
import readline from 'readline';

// ============================================================================
// CONSTANTS
// ============================================================================

const REPO = 'github:nguyenphp/antigravity-marketing';
const TEMPLATES_FOLDER = 'templates';
const AGENT_FOLDER = '.agent';
const TEMP_FOLDER = '.temp_ag_marketing_kit';

// Skill counts for synchronization
const SKILL_COUNT = '41+';
const AGENT_COUNT = '4';
const WORKFLOW_COUNT = '4';

// ============================================================================
// UTILITIES
// ============================================================================

/**
 * Display ASCII banner
 */
const showBanner = () => {
    console.log(chalk.magentaBright(`
    ╔══════════════════════════════════════════╗
    ║   🚀 ANTIGRAVITY MARKETING KIT CLI 🚀    ║
    ║        Marketing Skills for AI           ║
    ║           Created by nguyenphp           ║
    ╚══════════════════════════════════════════╝
    `));
};

/**
 * Ask user for confirmation
 * @param {string} question - Question to ask
 * @returns {Promise<boolean>}
 */
const confirm = (question) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => {
        rl.question(chalk.yellow(`${question} (y/N): `), (answer) => {
            rl.close();
            resolve(answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes');
        });
    });
};

/**
 * Clean up temporary directory
 * @param {string} tempDir - Temp directory path
 */
const cleanup = (tempDir) => {
    if (fs.existsSync(tempDir)) {
        fs.rmSync(tempDir, { recursive: true, force: true });
    }
};

/**
 * Copy .agent folder from temp to destination
 * @param {string} tempDir - Temp directory
 * @param {string} destDir - Destination directory
 */
const copyAgentFolder = (tempDir, destDir) => {
    const sourceAgent = path.join(tempDir, TEMPLATES_FOLDER, AGENT_FOLDER);

    if (!fs.existsSync(sourceAgent)) {
        throw new Error(`Could not find ${TEMPLATES_FOLDER}/${AGENT_FOLDER} folder in source repository!`);
    }

    fs.cpSync(sourceAgent, destDir, { recursive: true });
};

/**
 * Update .gitignore to include .agent folder
 * @param {string} targetDir - Target project directory
 * @returns {boolean} - True if .gitignore was updated
 */
const updateGitignore = (targetDir) => {
    const gitignorePath = path.join(targetDir, '.gitignore');
    const entryToAdd = AGENT_FOLDER;

    // Check if .gitignore exists
    if (fs.existsSync(gitignorePath)) {
        const content = fs.readFileSync(gitignorePath, 'utf-8');
        const lines = content.split(/\r?\n/);

        // Check if .agent is already in .gitignore
        const hasEntry = lines.some(line =>
            line.trim() === entryToAdd ||
            line.trim() === `${entryToAdd}/` ||
            line.trim() === `/${entryToAdd}` ||
            line.trim() === `/${entryToAdd}/`
        );

        if (!hasEntry) {
            // Add .agent to .gitignore
            const newContent = content.endsWith('\n')
                ? `${content}${entryToAdd}\n`
                : `${content}\n${entryToAdd}\n`;
            fs.writeFileSync(gitignorePath, newContent);
            return true;
        }
    } else {
        // Create new .gitignore with .agent
        fs.writeFileSync(gitignorePath, `${entryToAdd}\n`);
        return true;
    }

    return false;
};

// ============================================================================
// COMMANDS
// ============================================================================

/**
 * Initialize .agent folder in project
 */
const initCommand = async (options) => {
    showBanner();

    const targetDir = path.resolve(options.path || process.cwd());
    const tempDir = path.join(targetDir, TEMP_FOLDER);
    const agentDir = path.join(targetDir, AGENT_FOLDER);

    // Check if .agent already exists
    if (fs.existsSync(agentDir)) {
        if (!options.force) {
            console.log(chalk.yellow(`⚠️  Folder ${AGENT_FOLDER} already exists at: ${agentDir}`));
            const shouldOverwrite = await confirm('Do you want to overwrite it?');

            if (!shouldOverwrite) {
                console.log(chalk.gray('Operation cancelled.'));
                process.exit(0);
            }
        }
        console.log(chalk.gray(`Overwriting ${AGENT_FOLDER} folder...`));
    }

    const spinner = ora({
        text: 'Downloading marketing skills...',
        color: 'magenta',
    }).start();

    try {
        // Download repository using giget
        const repoSource = options.branch ? `${REPO}#${options.branch}` : REPO;
        await downloadTemplate(repoSource, {
            dir: tempDir,
            force: true,
        });

        spinner.text = 'Installing marketing skills...';

        // Copy .agent folder
        copyAgentFolder(tempDir, agentDir);

        // Update .gitignore
        const gitignoreUpdated = updateGitignore(targetDir);

        // Cleanup
        cleanup(tempDir);

        spinner.succeed(chalk.green('Marketing Kit installed successfully!'));

        // Success message
        console.log(chalk.gray('\n────────────────────────────────────────'));
        console.log(chalk.white('📁 Result:'));
        console.log(`   ${chalk.cyan(AGENT_FOLDER)} → ${chalk.gray(agentDir)}`);
        if (gitignoreUpdated) {
            console.log(`   ${chalk.cyan('.gitignore')} → Added ${chalk.yellow(AGENT_FOLDER)}`);
        }
        console.log(chalk.gray('────────────────────────────────────────'));

        // Show skills summary
        console.log(chalk.white('\n📦 Included:'));
        console.log(chalk.magenta(`   • ${SKILL_COUNT} Marketing Skills`));
        console.log(chalk.magenta(`   • ${AGENT_COUNT} Specialized Agents`));
        console.log(chalk.magenta(`   • ${WORKFLOW_COUNT} Workflow Commands`));
        console.log(chalk.gray('────────────────────────────────────────'));

        console.log(chalk.yellow('\n ⭐ Support the project:'));
        console.log(`    Repo:   ${chalk.cyan('https://github.com/nguyenphp/antigravity-marketing')}`);
        console.log(`    Coffee: ${chalk.cyan('https://www.buymeacoffee.com/nguyenphp')}`);

        console.log(chalk.green('\n🎉 Happy marketing!\n'));
    } catch (error) {
        spinner.fail(chalk.red(`❌ Error: ${error.message}`));
        cleanup(tempDir);
        process.exit(1);
    }
};

/**
 * Update existing .agent folder
 */
const updateCommand = async (options) => {
    showBanner();

    const targetDir = path.resolve(options.path || process.cwd());
    const agentDir = path.join(targetDir, AGENT_FOLDER);

    // Check if .agent exists
    if (!fs.existsSync(agentDir)) {
        console.log(chalk.red(`❌ Could not find ${AGENT_FOLDER} folder at: ${targetDir}`));
        console.log(chalk.yellow(`💡 Tip: Run ${chalk.cyan('ag-marketing-kit init')} to install first.`));
        process.exit(1);
    }

    if (!options.force) {
        console.log(chalk.yellow(`⚠️  Update will overwrite the entire ${AGENT_FOLDER} folder`));
        const shouldUpdate = await confirm('Are you sure you want to continue?');

        if (!shouldUpdate) {
            console.log(chalk.gray('Operation cancelled.'));
            process.exit(0);
        }
    }

    // Call init with force option
    await initCommand({ ...options, force: true });
};

/**
 * Show status of .agent folder
 */
const statusCommand = (options) => {
    const targetDir = path.resolve(options.path || process.cwd());
    const agentDir = path.join(targetDir, AGENT_FOLDER);

    console.log(chalk.magentaBright('\n📊 Antigravity Marketing Kit Status\n'));

    if (fs.existsSync(agentDir)) {
        const stats = fs.statSync(agentDir);

        // Count skills, agents, workflows
        const skillsDir = path.join(agentDir, 'skills');
        const agentsDir = path.join(agentDir, 'agents');
        const workflowsDir = path.join(agentDir, 'workflows');

        const skillCount = fs.existsSync(skillsDir) ? fs.readdirSync(skillsDir).length : 0;
        const agentCount = fs.existsSync(agentsDir) ? fs.readdirSync(agentsDir).length : 0;
        const workflowCount = fs.existsSync(workflowsDir) ? fs.readdirSync(workflowsDir).length : 0;

        console.log(chalk.green('✅ Installed'));
        console.log(chalk.gray('────────────────────────────────────────'));
        console.log(`📁 Path:      ${chalk.cyan(agentDir)}`);
        console.log(`📅 Modified:  ${chalk.gray(stats.mtime.toLocaleString('en-US'))}`);
        console.log(`🧠 Skills:    ${chalk.yellow(skillCount)}`);
        console.log(`🤖 Agents:    ${chalk.yellow(agentCount)}`);
        console.log(`🔄 Workflows: ${chalk.yellow(workflowCount)}`);
        console.log(chalk.gray('────────────────────────────────────────\n'));
    } else {
        console.log(chalk.red('❌ Not installed'));
        console.log(chalk.yellow(`💡 Run ${chalk.cyan('ag-marketing-kit init')} to install.\n`));
    }
};

/**
 * List all available skills
 */
const listCommand = (options) => {
    const targetDir = path.resolve(options.path || process.cwd());
    const agentDir = path.join(targetDir, AGENT_FOLDER);

    console.log(chalk.magentaBright('\n📋 Available Marketing Skills\n'));

    if (!fs.existsSync(agentDir)) {
        console.log(chalk.red('❌ Marketing Kit not installed'));
        console.log(chalk.yellow(`💡 Run ${chalk.cyan('ag-marketing-kit init')} first.\n`));
        process.exit(1);
    }

    const skillsDir = path.join(agentDir, 'skills');
    if (fs.existsSync(skillsDir)) {
        const skills = fs.readdirSync(skillsDir).filter(f =>
            fs.statSync(path.join(skillsDir, f)).isDirectory()
        );

        console.log(chalk.gray('────────────────────────────────────────'));
        skills.forEach(skill => {
            console.log(`   ${chalk.magenta('•')} ${chalk.white(skill)}`);
        });
        console.log(chalk.gray('────────────────────────────────────────'));
        console.log(chalk.gray(`\nTotal: ${skills.length} skills\n`));
    }
};

// ============================================================================
// CLI DEFINITION
// ============================================================================

const program = new Command();

program
    .name('ag-marketing-kit')
    .description('CLI tool to install and manage Antigravity Marketing Kit')
    .version('1.0.14', '-v, --version', 'Display version number');

// Command: init
program
    .command('init')
    .description('Install marketing skills into your project')
    .option('-f, --force', 'Overwrite if folder already exists', false)
    .option('-p, --path <dir>', 'Path to the project directory', process.cwd())
    .option('-b, --branch <name>', 'Select repository branch')
    .action(initCommand);

// Command: update
program
    .command('update')
    .description('Update marketing skills to the latest version')
    .option('-f, --force', 'Skip confirmation prompt', false)
    .option('-p, --path <dir>', 'Path to the project directory', process.cwd())
    .option('-b, --branch <name>', 'Select repository branch')
    .action(updateCommand);

// Command: status
program
    .command('status')
    .description('Check installation status')
    .option('-p, --path <dir>', 'Path to the project directory', process.cwd())
    .action(statusCommand);

// Command: list
program
    .command('list')
    .description('List all available skills')
    .option('-p, --path <dir>', 'Path to the project directory', process.cwd())
    .action(listCommand);

// Parse arguments
program.parse(process.argv);

// Show help if no command provided
if (!process.argv.slice(2).length) {
    program.outputHelp();
}
