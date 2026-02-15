// ====================================
// MAIN.JS - LANDING PAGE
// ====================================

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', () => {
    // Ocultar loader
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 500);
    
    // Inicializar AOS (animaciones)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }
    
    // Inicializar componentes
    initSmoothScroll();
    initNavbar();
    initThemeToggle();
    
    // Renderizar contenido
    renderHome();
    renderAbout();
    renderExperience();
    renderContact();
    renderFooter();
});

// ====================================
// SMOOTH SCROLL Y NAVEGACIÓN
// ====================================
function initSmoothScroll() {
    // Manejar clicks en nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                // Cerrar menú móvil si está abierto
                document.getElementById('menu-toggle').classList.remove('active');
                document.getElementById('nav-menu').classList.remove('active');
            }
        });
    });
    
    // Actualizar link activo al hacer scroll
    window.addEventListener('scroll', updateActiveNavOnScroll);
}

function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('.section');
    const scrollPos = window.scrollY + 150;
    
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        
        if (scrollPos >= top && scrollPos < top + height) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ====================================
// NAVBAR
// ====================================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// ====================================
// THEME TOGGLE
// ====================================
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');
    
    // Cargar tema guardado
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    
    // Toggle theme
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });
}

// ====================================
// HOME SECTION
// ====================================
function renderHome() {
    const heroContent = document.getElementById('hero-content');
    
    heroContent.innerHTML = `
        <div class="hero-avatar">
            <img src="${CONFIG.personal.avatar}" alt="${CONFIG.personal.name}" onerror="this.src='https://via.placeholder.com/150'">
        </div>
        <h1 class="hero-greeting">
            Hola, soy <span class="highlight">${CONFIG.personal.name}</span>
        </h1>
        <h2 class="hero-title">
            <span class="typing-text"></span>
            <span class="cursor">|</span>
        </h2>
        <p class="hero-tagline">${CONFIG.personal.tagline}</p>
        <div class="hero-cta">
            <a href="${CONFIG.personal.cvUrl}" class="btn btn-secondary" ${CONFIG.personal.cvUrl !== '#' ? 'download' : ''}>Descargar CV</a>
        </div>
    `;
    
    // Iniciar animación de typing
    initTypingAnimation();
}

function initTypingAnimation() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;
    
    const roles = CONFIG.personal.roles;
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentRole = roles[roleIndex];
        
        if (!isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === currentRole.length) {
                isDeleting = true;
                setTimeout(type, 2000);
                return;
            }
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            
            if (charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                setTimeout(type, 500);
                return;
            }
        }
        
        setTimeout(type, isDeleting ? 50 : 100);
    }
    
    type();
}

// ====================================
// ABOUT SECTION
// ====================================
function renderAbout() {
    const aboutContent = document.getElementById('about-content');
    
    const bioHTML = CONFIG.about.bio.map(paragraph => 
        `<p>${paragraph}</p>`
    ).join('');
    
    aboutContent.innerHTML = `
        <div class="about-grid" data-aos="fade-up">
            <div class="about-image">
                <img src="${CONFIG.about.image}" alt="${CONFIG.personal.name}" onerror="this.src='https://via.placeholder.com/400x500'">
            </div>
            <div class="about-text">
                <h3>Conoce más sobre mí</h3>
                ${bioHTML}
            </div>
        </div>
        
        <div class="skills-section">
            <h3 class="section-title" data-aos="fade-up">Habilidades y Competencias</h3>
            ${renderSkillsCategories()}
        </div>
    `;
}

function renderSkillsCategories() {
    return `
        <div class="skills-categories-grid" data-aos="fade-up" data-aos-delay="100">
            ${Object.entries(CONFIG.skills).map(([category, skills]) => `
                <div class="skill-category-card">
                    <h4 class="skill-category-title">${category}</h4>
                    <ul class="skill-list">
                        ${skills.map(skill => `
                            <li class="skill-list-item">
                                <span class="skill-icon">${skill.icon}</span>
                                <span class="skill-name">${skill.name}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `).join('')}
        </div>
    `;
}

// ====================================
// EXPERIENCE SECTION
// ====================================
function renderExperience() {
    const experienceContent = document.getElementById('experience-content');
    
    if (!CONFIG.experience || CONFIG.experience.length === 0) {
        experienceContent.innerHTML = '<p>No hay experiencia disponible.</p>';
        return;
    }
    
    experienceContent.innerHTML = `
        <div class="experience-timeline">
            ${CONFIG.experience.map((exp, index) => `
                <div class="experience-item" data-aos="fade-up" data-aos-delay="${index * 100}">
                    <div class="experience-icon">${exp.icon}</div>
                    <div class="experience-content">
                        <div class="experience-header">
                            <h3 class="experience-title">${exp.title}</h3>
                            <span class="experience-period">${exp.period}</span>
                        </div>
                        <p class="experience-company">
                            ${exp.company}${exp.location ? ` • ${exp.location}` : ''}
                        </p>
                        <p class="experience-description">${exp.description}</p>
                        
                        ${exp.achievements && exp.achievements.length > 0 ? `
                            <ul class="experience-achievements">
                                ${exp.achievements.map(achievement => `
                                    <li>${achievement}</li>
                                `).join('')}
                            </ul>
                        ` : ''}
                        
                        ${exp.technologies && exp.technologies.length > 0 ? `
                            <div class="experience-tags">
                                ${exp.technologies.map(tech => `
                                    <span class="experience-tag">${tech}</span>
                                `).join('')}
                            </div>
                        ` : ''}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// ====================================
// CONTACT SECTION
// ====================================
function renderContact() {
    const contactContent = document.getElementById('contact-content');
    
    contactContent.innerHTML = `
        <div class="contact-grid">
            <form class="contact-form" id="contact-form" action="https://formsubmit.co/${CONFIG.personal.email}" method="POST" data-aos="fade-right">
                <input type="hidden" name="_subject" value="Nuevo mensaje desde Portfolio">
                <input type="hidden" name="_captcha" value="false">
                <input type="hidden" name="_next" value="${window.location.href}#contact">
                
                <div class="form-group">
                    <label for="name">Nombre *</label>
                    <input type="text" id="name" name="name" required>
                </div>
                
                <div class="form-group">
                    <label for="email">Email *</label>
                    <input type="email" id="email" name="email" required>
                </div>
                
                <div class="form-group">
                    <label for="subject">Asunto</label>
                    <input type="text" id="subject" name="subject">
                </div>
                
                <div class="form-group">
                    <label for="message">Mensaje *</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                
                <button type="submit" class="btn btn-submit">Enviar Mensaje</button>
            </form>
            
            <div class="contact-info" data-aos="fade-left">
                <div class="contact-info-item">
                    <span class="contact-icon">📧</span>
                    <div class="contact-details">
                        <h4>Email</h4>
                        <a href="mailto:${CONFIG.personal.email}">${CONFIG.personal.email}</a>
                    </div>
                </div>
                
                <div class="contact-info-item">
                    <span class="contact-icon">📱</span>
                    <div class="contact-details">
                        <h4>Teléfono</h4>
                        <a href="tel:${CONFIG.personal.phone}">${CONFIG.personal.phone}</a>
                    </div>
                </div>
                
                <div class="contact-info-item">
                    <span class="contact-icon">📍</span>
                    <div class="contact-details">
                        <h4>Ubicación</h4>
                        <p>${CONFIG.personal.location}</p>
                    </div>
                </div>
                
                <div class="contact-social">
                    <h4>Sígueme</h4>
                    <div class="social-links">
                        ${Object.entries(CONFIG.social).filter(([k, v]) => v).map(([platform, url]) => `
                            <a href="${url}" target="_blank" class="social-link" title="${platform}">
                                ${getSocialIcon(platform)}
                            </a>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getSocialIcon(platform) {
    const icons = {
        github: '⚡',
        linkedin: '💼',
        twitter: '🐦',
        instagram: '📷'
    };
    return icons[platform] || '🔗';
}

// ====================================
// FOOTER
// ====================================
function renderFooter() {
    const footer = document.getElementById('footer');
    const currentYear = new Date().getFullYear();
    
    footer.innerHTML = `
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>${CONFIG.personal.name}</h4>
                    <p>${CONFIG.personal.title}</p>
                    <p style="margin-top: var(--space-sm); color: var(--color-text-secondary); font-size: 0.9rem;">
                        ${CONFIG.personal.location}
                    </p>
                </div>
                
                <div class="footer-section">
                    <h4>Navegación</h4>
                    <ul class="footer-links">
                        <li><a href="#home">Inicio</a></li>
                        <li><a href="#about">Sobre Mí</a></li>
                        <li><a href="#experience">Experiencia</a></li>
                        <li><a href="#contact">Contacto</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h4>Contacto Rápido</h4>
                    <ul class="footer-links">
                        <li><a href="mailto:${CONFIG.personal.email}">${CONFIG.personal.email}</a></li>
                        <li><a href="tel:${CONFIG.personal.phone}">${CONFIG.personal.phone}</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h4>Sígueme</h4>
                    <div class="social-links">
                        ${Object.entries(CONFIG.social).filter(([k, v]) => v).map(([platform, url]) => `
                            <a href="${url}" target="_blank" rel="noopener noreferrer" class="social-link" title="${platform}">
                                ${getSocialIcon(platform)}
                            </a>
                        `).join('')}
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; ${currentYear} ${CONFIG.personal.name}. Todos los derechos reservados.</p>
                <p>Diseñado y desarrollado con ❤️</p>
            </div>
        </div>
    `;
}
// ====================================
// SCROLL PROGRESS BAR
// ====================================
function initScrollProgress() {
    const progressBar = document.getElementById('scroll-progress');
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Añadir al DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // ... código existente ...
    initScrollProgress(); // ← AÑADE ESTA LÍNEA
});
// ====================================
// STATS SECTION
// ====================================
function renderStats() {
    const statsContent = document.getElementById('stats-content');
    
    statsContent.innerHTML = CONFIG.stats.map((stat, index) => `
        <div class="stat-card" data-aos="fade-up" data-aos-delay="${index * 100}">
            <span class="stat-icon">${stat.icon}</span>
            <h3 class="stat-number" data-target="${stat.number}">${stat.number}</h3>
            <p class="stat-label">${stat.label}</p>
        </div>
    `).join('');
}

// Añadir en DOMContentLoaded:
renderStats();
// ====================================
// BACK TO TOP BUTTON
// ====================================
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Añadir al DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // ... código existente ...
    initBackToTop(); // ← AÑADIR
});
