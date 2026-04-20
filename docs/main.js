// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
}

// Copy code to clipboard
function copyCode(button) {
    const codeBlock = button.parentElement;
    const code = codeBlock.querySelector('code').textContent;

    navigator.clipboard.writeText(code).then(() => {
        // Show feedback
        const originalHTML = button.innerHTML;
        button.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>';
        button.style.color = '#10B981';

        setTimeout(() => {
            button.innerHTML = originalHTML;
            button.style.color = '';
        }, 2000);
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.style.background = 'rgba(15, 15, 26, 0.95)';
    } else {
        navbar.style.background = 'rgba(15, 15, 26, 0.8)';
    }

    lastScroll = currentScroll;
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate elements on scroll
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .skill-category, .install-card, .credit-item');

    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
        observer.observe(el);
    });
});

// Console Easter egg
console.log('%c🚀 Antigravity Marketing Kit', 'font-size: 24px; font-weight: bold; color: #8B5CF6;');
console.log('%cBuilt with love for marketers', 'font-size: 14px; color: #94A3B8;');
console.log('%chttps://github.com/nguyenphp/antigravity-marketing', 'font-size: 12px; color: #64748B;');

// Skill Data for Modal (non-tech friendly descriptions)
// Skill data will be managed in i18n.js for full translation support
const skillIcons = {
    'content-marketing': '✍️',
    'branding-expert': '🎨',
    'video-marketing': '🎬',
    'video-automation': '🎞️',
    'content-repurposing': '♻️',
    'growth-hacking': '🚀',
    'ppc-advertising': '💰',
    'influencer-marketing': '👥',
    'affiliate-marketing': '🤝',
    'lead-gen-scraper': '🎯',
    'social-media-expert': '📱',
    'email-marketing': '📧',
    'seo-fundamentals': '🔍',
    'keyword-research-deep': '🔑',
    'analytics-marketing': '📊',
    'conversion-optimization': '🎯',
    'marketing-automation': '⚙️',
    'ab-test-dashboard': '🧪',
    'ad-creative-variations': '🎨',
    'competitor-teardown': '🔎',
    'competitor-monitor': '👁️',
    'ui-ux-pro-max': '✨',
    'frontend-design': '🖥️',
    'tailwind-patterns': '🎨',
    'documentation-templates': '📝',
    'marketing-report-expert': '🏆',
    'minimax-pdf': '📄',
    'minimax-docx': '📝',
    'minimax-xlsx': '📊',
    'pptx-generator': '🎭',
    'tutorial-video-expert': '🎓',
    'vision-analysis': '👁️',
    'banner-design': '🖼️',
    'remotion-best-practices': '🎬'
};

// Show Skill Modal
function showSkillModal(skillId) {
    const skill = translations[currentLang].skillsData[skillId];
    if (!skill) return;

    const modal = document.getElementById('skillModal');
    document.getElementById('modalIcon').textContent = skillIcons[skillId] || '✨';
    document.getElementById('modalTitle').textContent = skill.title;
    document.getElementById('modalDescription').textContent = skill.description;

    const capList = document.getElementById('modalCapabilities');
    capList.innerHTML = skill.capabilities.map(cap => `<li>${cap}</li>`).join('');

    const exList = document.getElementById('modalExamples');
    exList.innerHTML = skill.examples.map(ex => `<li>${ex}</li>`).join('');

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Skill Modal
function closeSkillModal(event) {
    if (event && event.target !== event.currentTarget) return;

    const modal = document.getElementById('skillModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeSkillModal();
    }
});
