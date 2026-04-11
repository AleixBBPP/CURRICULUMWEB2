let currentLang = 'es';

document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initLanguageToggle();
    initSmoothScroll();
    initNavbar();
    initScrollProgress();
    initBackToTop();
    initProjectModal();

    updateStaticTexts();
    rerenderAllContent();

    if (window.AOS) {
        AOS.init({
            duration: 800,
            once: true,
            offset: 50
        });
    }
});

// ====================================
// HELPERS
// ====================================
function t(obj) {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[currentLang] ?? obj.es ?? '';
}

function rerenderAllContent() {
    renderHome();
    renderStats();
    renderAbout();
    renderExperience();
    renderAnalysis();
    renderContact();
    renderFooter();

    if (window.AOS) {
        AOS.refresh();
    }
}

// ====================================
// LANGUAGE TOGGLE
// ====================================
function initLanguageToggle() {
    const langToggle = document.getElementById('lang-toggle');
    if (!langToggle) return;

    try {
        currentLang = localStorage.getItem('lang') || 'es';
    } catch (e) {
        currentLang = 'es';
    }

    updateLangToggleUI();

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';

        try {
            localStorage.setItem('lang', currentLang);
        } catch (e) {}

        updateLangToggleUI();
        updateStaticTexts();
        rerenderAllContent();
    });
}

function updateLangToggleUI() {
    document.querySelectorAll('[data-lang-label]').forEach(el => {
        el.classList.toggle('active', el.dataset.langLabel === currentLang);
    });
}

function updateStaticTexts() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navItems = [
        CONFIG.ui.nav.home,
        CONFIG.ui.nav.about,
        CONFIG.ui.nav.experience,
        CONFIG.ui.nav.analysis,
        CONFIG.ui.nav.contact
    ];

    navLinks.forEach((link, index) => {
        if (navItems[index]) {
            link.textContent = t(navItems[index]);
        }
    });

    const navCta = document.getElementById('nav-cta-text');
    if (navCta) {
        navCta.textContent = t(CONFIG.ui.nav.hire);
    }

    const sectionTitles = document.querySelectorAll('.section-title');
    const titles = [
        CONFIG.ui.sections.about,
        CONFIG.ui.sections.experience,
        CONFIG.ui.sections.analysis,
        CONFIG.ui.sections.contact
    ];

    sectionTitles.forEach((title, index) => {
        if (titles[index]) {
            title.textContent = t(titles[index]);
        }
    });
}

// ====================================
// THEME TOGGLE
// ====================================
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle?.querySelector('.theme-icon');
    if (!themeToggle) return;

    let currentTheme = 'dark';

    try {
        currentTheme = localStorage.getItem('theme') || 'dark';
    } catch (e) {
        currentTheme = 'dark';
    }

    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme, themeIcon);

    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', currentTheme);

        try {
            localStorage.setItem('theme', currentTheme);
        } catch (e) {}

        updateThemeIcon(currentTheme, themeIcon);
    });
}

function updateThemeIcon(theme, iconEl) {
    if (!iconEl) return;
    iconEl.textContent = theme === 'dark' ? '🌙' : '☀️';
}

// ====================================
// SMOOTH SCROLL
// ====================================
function initSmoothScroll() {
    document.addEventListener('click', (e) => {
        const anchor = e.target.closest('a[href^="#"]');
        if (!anchor) return;

        const targetId = anchor.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const targetEl = document.querySelector(targetId);
        if (!targetEl) return;

        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}

// ====================================
// NAVBAR
// ====================================
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    const handleScroll = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
}

// ====================================
// SCROLL PROGRESS
// ====================================
function initScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress');
    if (!progressBar) return;

    const updateProgress = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = `${progress}%`;
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress);
}

// ====================================
// BACK TO TOP
// ====================================
function initBackToTop() {
    const backToTop = document.querySelector('.back-to-top');
    if (!backToTop) return;

    const toggleVisibility = () => {
        backToTop.classList.toggle('visible', window.scrollY > 400);
    };

    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility);

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ====================================
// HOME
// ====================================
function renderHome() {
    const homeContent = document.getElementById('home-content');
    if (!homeContent) return;

    homeContent.innerHTML = `
        <div class="hero-shell">
            <div class="hero-text" data-aos="fade-right">
                <span class="hero-kicker">${t(CONFIG.personal.title)}</span>
                <h1 class="hero-title">${CONFIG.personal.name}</h1>
                <h2 class="hero-subtitle">
                    <span id="typing-text"></span>
                </h2>
                <p class="hero-description">${t(CONFIG.personal.tagline)}</p>

                <div class="hero-actions">
                    <a href="#contact" class="btn btn-primary">${t(CONFIG.ui.nav.hire)}</a>
                    <a href="${CONFIG.personal.cvUrl}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">CV</a>
                </div>
            </div>

            <div class="hero-visual" data-aos="fade-left">
                <div class="hero-avatar-wrap">
                    <img
                        src="${CONFIG.personal.avatar}"
                        alt="${CONFIG.personal.name}"
                        class="hero-avatar"
                        onerror="this.src='https://placehold.co/300x300'"
                    />
                </div>
            </div>
        </div>
    `;

    initTypingAnimation();
}

function initTypingAnimation() {
    const typingText = document.getElementById('typing-text');
    if (!typingText) return;

    const roles = CONFIG.personal.roles[currentLang];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentRole = roles[roleIndex];
        typingText.textContent = currentRole.substring(0, charIndex);

        if (!isDeleting) {
            charIndex++;
            if (charIndex > currentRole.length) {
                isDeleting = true;
                setTimeout(type, 1200);
                return;
            }
        } else {
            charIndex--;
            if (charIndex < 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                charIndex = 0;
            }
        }

        const speed = isDeleting ? 45 : 85;
        setTimeout(type, speed);
    }

    type();
}

// ====================================
// STATS
// ====================================
function renderStats() {
    const statsContent = document.getElementById('stats-content');
    if (!statsContent) return;

    statsContent.innerHTML = `
        <div class="stats-grid">
            ${CONFIG.stats.map((stat, index) => `
                <div class="stat-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                    <div class="stat-icon">${stat.icon}</div>
                    <div class="stat-number">
                        <span class="counter" data-target="${stat.number}">0</span>${stat.suffix}
                    </div>
                    <p class="stat-label">${t(stat.label)}</p>
                </div>
            `).join('')}
        </div>
    `;

    initCounters();
}

function initCounters() {
    const counters = document.querySelectorAll('.counter');

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const counter = entry.target;
            const target = parseInt(counter.dataset.target, 10);
            let current = 0;
            const increment = Math.max(1, Math.ceil(target / 40));

            const updateCounter = () => {
                current += increment;
                if (current >= target) {
                    counter.textContent = target;
                } else {
                    counter.textContent = current;
                    requestAnimationFrame(updateCounter);
                }
            };

            updateCounter();
            obs.unobserve(counter);
        });
    }, { threshold: 0.4 });

    counters.forEach(counter => observer.observe(counter));
}

// ====================================
// ABOUT
// ====================================
function renderAbout() {
    const aboutContent = document.getElementById('about-content');
    if (!aboutContent) return;

    const bioHTML = CONFIG.about.bio[currentLang]
        .map(paragraph => `<p>${paragraph}</p>`)
        .join('');

    aboutContent.innerHTML = `
        <div class="about-grid">
            <div class="about-image" data-aos="fade-right">
                <img
                    src="${CONFIG.about.image}"
                    alt="${CONFIG.personal.name}"
                    onerror="this.src='https://placehold.co/500x600'"
                />
            </div>

            <div class="about-text" data-aos="fade-left">
                <div class="about-bio">
                    ${bioHTML}
                </div>

                <div class="skills-categories-grid">
                    ${CONFIG.about.skills.map(skill => `
                        <div class="skill-category-card">
                            <h3>${t(skill.category)}</h3>
                            <ul>
                                ${skill.items[currentLang].map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// ====================================
// EXPERIENCE
// ====================================
function renderExperience() {
    const experienceContent = document.getElementById('experience-content');
    if (!experienceContent) return;

    experienceContent.innerHTML = `
        <div class="experience-timeline">
            ${CONFIG.experience.map((item, index) => `
                <article class="experience-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                    <div class="experience-top">
                        <div>
                            <h3 class="experience-role">${t(item.role)}</h3>
                            <p class="experience-company">${t(item.company)}</p>
                        </div>
                        <span class="experience-period">${t(item.period)}</span>
                    </div>
                    <p class="experience-description">${t(item.description)}</p>
                </article>
            `).join('')}
        </div>
    `;
}

// ====================================
// ANALYSIS
// ====================================
function renderAnalysis() {
    const analysisContent = document.getElementById('analysis-content');
    if (!analysisContent || !CONFIG.analysis?.length) return;

    analysisContent.innerHTML = `
        <div class="analysis-intro" data-aos="fade-up">
            <p>${t(CONFIG.ui.analysis.intro)}</p>
        </div>

        <div class="analysis-grid">
            ${CONFIG.analysis.map((item, index) => `
                <article
                    class="analysis-card"
                    data-id="${item.id}"
                    data-aos="fade-up"
                    data-aos-delay="${index * 100}"
                    tabindex="0"
                    role="button"
                    aria-label="${t(CONFIG.ui.analysis.openButton)}: ${t(item.title)}"
                >
                    <div class="analysis-card-top">
                        <span class="analysis-category">${t(item.category)}</span>
                        <span class="analysis-status">${t(item.status)}</span>
                    </div>

                    <h3 class="analysis-title">${t(item.title)}</h3>
                    <p class="analysis-excerpt">${t(item.excerpt)}</p>

                    <div class="analysis-metrics">
                        <div class="analysis-metric">
                            <span class="analysis-metric-label">${t(CONFIG.ui.analysis.labels.type)}</span>
                            <span class="analysis-metric-value">${t(item.type)}</span>
                        </div>
                        <div class="analysis-metric">
                            <span class="analysis-metric-label">${t(CONFIG.ui.analysis.labels.horizon)}</span>
                            <span class="analysis-metric-value">${t(item.horizon)}</span>
                        </div>
                        <div class="analysis-metric">
                            <span class="analysis-metric-label">${t(CONFIG.ui.analysis.labels.conviction)}</span>
                            <span class="analysis-metric-value">${t(item.conviction)}</span>
                        </div>
                    </div>

                    <p class="analysis-thesis">${t(item.thesis)}</p>

                    <div class="analysis-tags">
                        ${item.tags[currentLang].map(tag => `
                            <span class="analysis-tag">${tag}</span>
                        `).join('')}
                    </div>

                    <button class="analysis-open-btn" type="button">
                        ${t(CONFIG.ui.analysis.openButton)}
                    </button>
                </article>
            `).join('')}
        </div>
    `;

    bindAnalysisCards();
}

function bindAnalysisCards() {
    const cards = document.querySelectorAll('.analysis-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            openAnalysisModal(card.dataset.id);
        });

        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openAnalysisModal(card.dataset.id);
            }
        });
    });
}

function openAnalysisModal(id) {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    if (!modal || !modalBody) return;

    const item = CONFIG.analysis.find(entry => entry.id === id);
    if (!item) return;

    modalBody.innerHTML = `
        <article class="analysis-modal-content">
            <div class="analysis-modal-hero">
                <div class="analysis-modal-hero-top">
                    <span class="analysis-category">${t(item.category)}</span>
                    <span class="analysis-status">${t(item.status)}</span>
                </div>

                <h2 class="analysis-modal-title">${t(item.detailTitle)}</h2>
                <p class="analysis-modal-thesis">${t(item.thesis)}</p>
            </div>

            <div class="analysis-summary-grid">
                <div class="analysis-summary-card">
                    <span class="analysis-summary-label">${t(CONFIG.ui.analysis.labels.thesisType)}</span>
                    <span class="analysis-summary-value">${t(item.type)}</span>
                </div>
                <div class="analysis-summary-card">
                    <span class="analysis-summary-label">${t(CONFIG.ui.analysis.labels.horizon)}</span>
                    <span class="analysis-summary-value">${t(item.horizon)}</span>
                </div>
                <div class="analysis-summary-card">
                    <span class="analysis-summary-label">${t(CONFIG.ui.analysis.labels.conviction)}</span>
                    <span class="analysis-summary-value">${t(item.conviction)}</span>
                </div>
                <div class="analysis-summary-card">
                    <span class="analysis-summary-label">${t(CONFIG.ui.analysis.labels.primaryRisk)}</span>
                    <span class="analysis-summary-value">${t(item.primaryRisk)}</span>
                </div>
            </div>

            <div class="analysis-modal-block">
                <div class="analysis-modal-section">
                    <h3>${t(CONFIG.ui.analysis.labels.coreIdea)}</h3>
                    ${item.detailText[currentLang].map(paragraph => `<p>${paragraph}</p>`).join('')}
                </div>
            </div>

            <div class="analysis-modal-dual">
                <div class="analysis-modal-block">
                    <div class="analysis-modal-section">
                        <h3>${t(CONFIG.ui.analysis.labels.catalysts)}</h3>
                        <ul class="analysis-risk-list">
                            ${item.catalysts[currentLang].map(point => `<li>${point}</li>`).join('')}
                        </ul>
                    </div>
                </div>

                <div class="analysis-modal-block">
                    <div class="analysis-modal-section">
                        <h3>${t(CONFIG.ui.analysis.labels.risks)}</h3>
                        <ul class="analysis-risk-list">
                            ${item.risks[currentLang].map(risk => `<li>${risk}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>

            <div class="analysis-conclusion-box">
                <span class="analysis-conclusion-label">${t(CONFIG.ui.analysis.labels.conclusion)}</span>
                <p>${t(item.conclusion)}</p>
            </div>

            <div class="analysis-tags analysis-tags-large">
                ${item.tags[currentLang].map(tag => `<span class="analysis-tag">${tag}</span>`).join('')}
            </div>
        </article>
    `;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
}

// ====================================
// CONTACT
// ====================================
function renderContact() {
    const contactContent = document.getElementById('contact-content');
    if (!contactContent) return;

    contactContent.innerHTML = `
        <div class="contact-grid">
            <div class="contact-text" data-aos="fade-right">
                <h3>${t(CONFIG.ui.contact.title)}</h3>
                <p>${t(CONFIG.ui.contact.text)}</p>

                <div class="contact-info">
                    <a href="mailto:${CONFIG.contact.email}" class="contact-item">${CONFIG.contact.email}</a>
                    <a href="tel:${CONFIG.contact.phone}" class="contact-item">${CONFIG.contact.phone}</a>
                </div>

                <a href="mailto:${CONFIG.contact.email}" class="btn btn-primary">
                    ${t(CONFIG.ui.contact.button)}
                </a>
            </div>

            <div class="contact-social" data-aos="fade-left">
                ${CONFIG.social.map(item => `
                    <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="social-card">
                        <span class="social-icon">${item.icon}</span>
                        <span class="social-name">${item.name}</span>
                    </a>
                `).join('')}
            </div>
        </div>
    `;
}

// ====================================
// FOOTER
// ====================================
function renderFooter() {
    const footerContent = document.getElementById('footer-content');
    if (!footerContent) return;

    const year = new Date().getFullYear();

    footerContent.innerHTML = `
        <div class="footer-content">
            <div class="footer-brand">
                <h3>${CONFIG.personal.name}</h3>
                <p>${t(CONFIG.personal.title)}</p>
            </div>

            <ul class="footer-links">
                <li><a href="#home">${t(CONFIG.ui.nav.home)}</a></li>
                <li><a href="#about">${t(CONFIG.ui.nav.about)}</a></li>
                <li><a href="#experience">${t(CONFIG.ui.nav.experience)}</a></li>
                <li><a href="#analysis">${t(CONFIG.ui.nav.analysis)}</a></li>
                <li><a href="#contact">${t(CONFIG.ui.nav.contact)}</a></li>
            </ul>

            <div class="footer-copy">
                <p>© ${year} ${CONFIG.personal.name}. ${t(CONFIG.ui.footer.rights)}</p>
            </div>
        </div>
    `;
}

// ====================================
// MODAL
// ====================================
function initProjectModal() {
    const modal = document.getElementById('project-modal');
    const closeBtn = modal?.querySelector('.modal-close');

    if (!modal) return;

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeModal();
        }
    });
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;

    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
}
