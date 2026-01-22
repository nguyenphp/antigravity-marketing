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
const skillData = {
    'content-marketing': {
        icon: '✍️',
        title: 'Content Marketing',
        description: 'Giúp bạn viết content chuyên nghiệp, từ blog posts, landing pages đến email marketing. AI sẽ đề xuất cấu trúc bài viết, copywriting frameworks như AIDA, PAS và các kỹ thuật storytelling.',
        capabilities: [
            'Viết blog posts thu hút traffic',
            'Tạo landing page copy chuyển đổi cao',
            'Xây dựng content calendar hàng tháng',
            'Tối ưu SEO cho mọi bài viết'
        ]
    },
    'branding-expert': {
        icon: '🎨',
        title: 'Branding Expert',
        description: 'Xây dựng thương hiệu mạnh mẽ với brand voice, visual identity và brand guidelines chuyên nghiệp. Phù hợp cho startup và doanh nghiệp muốn định vị thương hiệu rõ ràng.',
        capabilities: [
            'Định vị thương hiệu và brand positioning',
            'Tạo brand voice & tone guidelines',
            'Thiết kế visual identity system',
            'Xây dựng brand story hấp dẫn'
        ]
    },
    'video-marketing': {
        icon: '🎬',
        title: 'Video Marketing',
        description: 'Tạo video content cho YouTube, TikTok, Reels. Từ script writing, storyboard đến optimization cho từng platform. Bao gồm cả short-form và long-form video strategies.',
        capabilities: [
            'Viết script video chuyên nghiệp',
            'Tối ưu YouTube SEO và thumbnails',
            'Chiến lược TikTok & Reels',
            'Video funnel cho conversion'
        ]
    },
    icon: '♻️',
    title: 'Content Repurposing',
    description: 'Biến 1 bài blog thành 15-20 content pieces cho nhiều platforms. Tiết kiệm 80% thời gian sản xuất content với quy trình repurposing tự động.',
    capabilities: [
        'Blog → Twitter thread → LinkedIn post',
        'Video → Shorts/Reels → Audiogram',
        'Podcast → Blog → Social clips',
        'Tối đa hóa ROI từ mỗi content piece'
    ]
},
'growth-hacking': {
    icon: '🚀',
        title: 'Growth Hacking',
            description: 'Tăng trưởng nhanh với các chiến thuật growth hacking đã được chứng minh. Từ viral loops, referral programs đến product-led growth strategies.',
                capabilities: [
                    'Thiết kế viral loops và referral programs',
                    'AARRR funnel optimization',
                    'Product-led growth strategies',
                    'Growth experiments & A/B testing'
                ]
},
'ppc-advertising': {
    icon: '💰',
        title: 'PPC Advertising',
            description: 'Chạy quảng cáo Google Ads, Meta Ads, TikTok Ads hiệu quả. Từ cấu trúc campaign, bidding strategies đến optimization để giảm CPA và tăng ROAS.',
                capabilities: [
                    'Thiết kế campaign structure tối ưu',
                    'Keyword research & ad copy writing',
                    'Bidding strategies & budget allocation',
                    'Landing page optimization cho ads'
                ]
},
'influencer-marketing': {
    icon: '👥',
        title: 'Influencer Marketing',
            description: 'Tìm và hợp tác với influencers phù hợp. Từ micro-influencers đến KOLs, xây dựng campaign brief và đo lường ROI hiệu quả.',
                capabilities: [
                    'Tìm influencers phù hợp với brand',
                    'Tạo campaign brief và contracts',
                    'Đo lường ROI và engagement',
                    'Xây dựng long-term partnerships'
                ]
},
'affiliate-marketing': {
    icon: '🤝',
        title: 'Affiliate Marketing',
            description: 'Xây dựng chương trình affiliate với commission structures, partner recruitment và tracking systems. Tăng revenue với đội ngũ affiliates.',
                capabilities: [
                    'Thiết kế commission structures',
                    'Tạo affiliate recruitment strategies',
                    'Tracking và attribution setup',
                    'Partner relationship management'
                ]
},
'lead-gen-scraper': {
    icon: '🎯',
        title: 'Lead Gen Scraper',
            description: 'Thu thập và làm giàu dữ liệu leads từ LinkedIn, company websites. Tìm email patterns, validate contacts và build targeted prospect lists cho outreach.',
                capabilities: [
                    'Tìm leads từ LinkedIn & directories',
                    'Đoán email patterns chính xác',
                    'Enrich data với company info',
                    'Validate và clean email lists'
                ]
},
'social-media-expert': {
    icon: '📱',
        title: 'Social Media Expert',
            description: 'Quản lý và phát triển social media trên Facebook, Instagram, TikTok, LinkedIn. Từ content strategy, posting schedule đến engagement tactics.',
                capabilities: [
                    'Content strategy cho từng platform',
                    'Optimal posting times & frequency',
                    'Engagement và community building',
                    'Hashtag và trend strategies'
                ]
},
'email-marketing': {
    icon: '📧',
        title: 'Email Marketing',
            description: 'Xây dựng email campaigns chuyển đổi cao. Từ welcome sequences, abandoned cart đến re-engagement flows. Tối ưu deliverability và open rates.',
                capabilities: [
                    'Automation sequences (welcome, nurture)',
                    'Subject line A/B testing',
                    'Segmentation strategies',
                    'Deliverability best practices'
                ]
},
'seo-fundamentals': {
    icon: '🔍',
        title: 'SEO Fundamentals',
            description: 'Tối ưu website cho Google Search. Từ on-page SEO, technical SEO đến link building strategies. Tăng organic traffic bền vững.',
                capabilities: [
                    'On-page SEO optimization',
                    'Technical SEO audits',
                    'Link building strategies',
                    'Local SEO cho businesses'
                ]
},
'keyword-research-deep': {
    icon: '🔑',
        title: 'Deep Keyword Research',
            description: 'Nghiên cứu keyword nâng cao với clustering, intent analysis và content gaps. Tìm long-tail opportunities mà đối thủ bỏ lỡ.',
                capabilities: [
                    'Keyword clustering theo topics',
                    'Search intent analysis',
                    'Content gap discovery',
                    'Long-tail keyword mining'
                ]
},
'analytics-marketing': {
    icon: '📊',
        title: 'Marketing Analytics',
            description: 'Đo lường và phân tích marketing performance. Từ GA4 setup, attribution modeling đến dashboard design. Ra quyết định dựa trên data.',
                capabilities: [
                    'GA4 setup và configuration',
                    'Attribution model selection',
                    'Dashboard design cho stakeholders',
                    'Cohort và funnel analysis'
                ]
},
'conversion-optimization': {
    icon: '🎯',
        title: 'Conversion Optimization',
            description: 'Tăng conversion rate cho website và landing pages. Từ A/B testing, UX improvements đến psychological triggers cho conversions.',
                capabilities: [
                    'A/B testing strategy',
                    'Landing page optimization',
                    'Form và checkout improvements',
                    'Psychological conversion triggers'
                ]
},
'marketing-automation': {
    icon: '⚙️',
        title: 'Marketing Automation',
            description: 'Tự động hóa marketing workflows với lead nurturing, scoring và lifecycle campaigns. Tiết kiệm thời gian và tăng efficiency.',
                capabilities: [
                    'Lead nurturing sequences',
                    'Lead scoring systems',
                    'Lifecycle marketing automation',
                    'Multi-channel workflow design'
                ]
},
'ab-test-dashboard': {
    icon: '🧪',
        title: 'A/B Test Dashboard',
            description: 'Thiết kế và track A/B tests một cách khoa học. Tính toán sample size, statistical significance và visualize results cho team.',
                capabilities: [
                    'Thiết kế experiments đúng cách',
                    'Sample size calculation',
                    'Statistical significance check',
                    'Dashboard cho reporting'
                ]
},
'ad-creative-variations': {
    icon: '🎨',
        title: 'Ad Creative Variations',
            description: 'Tạo hàng chục biến thể ad copy và creative trong vài phút. Headlines, descriptions, CTAs cho Meta, Google, TikTok Ads.',
                capabilities: [
                    'Mass headline generation',
                    'Ad copy với PAS, AIDA frameworks',
                    'CTA variations testing',
                    'Visual concept prompts cho designers'
                ]
},
'competitor-teardown': {
    icon: '🔎',
        title: 'Competitor Teardown',
            description: 'Phân tích đối thủ toàn diện: website, social, ads, SEO. Tìm gaps và opportunities để vượt qua competitors.',
                capabilities: [
                    'Website và UX analysis',
                    'Social media audit',
                    'Ad intelligence (Meta/Google)',
                    'SWOT competitor mapping'
                ]
},
'competitor-monitor': {
    icon: '👁️',
        title: 'Competitor Monitor',
            description: 'Theo dõi đối thủ 24/7 với alerts cho price changes, new campaigns, website updates. Phản ứng nhanh với mọi động thái.',
                capabilities: [
                    'Website change detection',
                    'Price monitoring alerts',
                    'New ad campaign notifications',
                    'Competitive dashboard setup'
                ]
},
'ui-ux-pro-max': {
    icon: '✨',
        title: 'UI/UX Pro Max',
            description: 'Thiết kế UI/UX chuyên nghiệp cho marketing websites và landing pages. Design systems, components và best practices.',
                capabilities: [
                    'Landing page design systems',
                    'Conversion-focused UI patterns',
                    'Mobile-first responsive design',
                    'Accessibility best practices'
                ]
},
'frontend-design': {
    icon: '🖥️',
        title: 'Frontend Design',
            description: 'Xây dựng marketing websites và landing pages đẹp mắt. HTML, CSS, responsive design cho non-developers.',
                capabilities: [
                    'Landing page templates',
                    'Responsive design patterns',
                    'Animation và micro-interactions',
                    'Performance optimization'
                ]
},
'tailwind-patterns': {
    icon: '🎨',
        title: 'Tailwind Patterns',
            description: 'Component library với Tailwind CSS cho marketing pages. Hero sections, CTAs, testimonials, pricing tables sẵn sàng sử dụng.',
                capabilities: [
                    'Marketing component library',
                    'Hero sections & CTAs',
                    'Testimonials & social proof',
                    'Pricing tables & features'
                ]
},
'documentation-templates': {
    icon: '📝',
        title: 'Documentation Templates',
            description: 'Templates cho marketing documentation: PRDs, campaign briefs, reports. Chuẩn hóa quy trình làm việc của team.',
                capabilities: [
                    'Campaign brief templates',
                    'Marketing report formats',
                    'SOPs và process docs',
                    'Knowledge base structures'
                ]
}
};

// Show Skill Modal
function showSkillModal(skillId) {
    const skill = skillData[skillId];
    if (!skill) return;

    const modal = document.getElementById('skillModal');
    document.getElementById('modalIcon').textContent = skill.icon;
    document.getElementById('modalTitle').textContent = skill.title;
    document.getElementById('modalDescription').textContent = skill.description;

    const capList = document.getElementById('modalCapabilities');
    capList.innerHTML = skill.capabilities.map(cap => `<li>${cap}</li>`).join('');

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
