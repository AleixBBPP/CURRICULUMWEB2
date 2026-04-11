// ====================================
// CONFIGURACIÓN PERSONAL DEL PORTFOLIO
// ====================================

const CONFIG = {
    
    // ===== INFORMACIÓN PERSONAL =====
    personal: {
        name: "Aleix Bosch Pérez",
        title: "Economista e Inversor",
        tagline: "Transformando análisis financiero en decisiones rentables con visión estratégica y pensamiento lógico",
        email: "aleixboschperez@gmail.com",
        phone: "+34 682735782",
        location: "Girona, España",
        avatar: "assets/images/avatar.jpg",
        cvUrl: "#",
        
        roles: [
            "Inversor multimercado",
            "Analista de Empresas",
            "Economista",
            "Divulgador económico"
        ]
    },
    // ===== ESTADÍSTICAS CLAVE =====
stats: [
    {
        number: 6,
        suffix: "+",
        label: "Años Invirtiendo",
        icon: "📊"
    },
    {
        number: 200,
        suffix: "+",
        label: "Análisis de Empresas",
        icon: "🔍"
    },
    {
        number: 50,
        suffix: "+",
        label: "Sectores Analizados",
        icon: "🏢"
    },
    
],

    // ===== REDES SOCIALES =====
    social: {
        github: "https://github.com/AleixBBPP",
        linkedin: "https://www.linkedin.com/in/aleix-bosch-pérez-782174262/",
        twitter: "",
        instagram: "",
    },
    
    // ===== SOBRE TI =====
    about: {
        image: "assets/images/about-photo.jpg",
        bio: [
            "Estudiante de Economía con 4 años de experiencia real en inversión en mercados financieros y enfoque analítico avanzado.",
            "Perfil orientado a resultados, con mentalidad empresarial, sólida base en análisis financiero y capacidad para transformar ideas en proyectos digitales rentables.",
            "Destaco por pensamiento lógico, comunicación persuasiva y una fuerte orientación a la creación de valor."
        ],
    },
    
    // ===== EXPERIENCIA PROFESIONAL =====
    experience: [
        {
            id: 1,
            title: "Inversor Independiente",
            company: "Gestión Personal de Capital",
            period: "2019 - Actualidad",
            location: "Remoto",
            description: "Gestión activa de cartera en renta variable con enfoque en análisis fundamental y visión a medio plazo (1-3 años).",
            achievements: [
                "Más de 4 años de experiencia operativa en mercados financieros",
                "Especialización en análisis de estados financieros y valoración empresarial (DCF, múltiplos)",
                "Detección de empresas infravaloradas con potencial de revalorización",
                "Gestión de riesgo y asignación estratégica de capital",
                "Toma de decisiones bajo incertidumbre macroeconómica"
            ],
            technologies: ["Análisis Fundamental", "Excel", "Valoración Financiera", "Gestión de Riesgo"],
            icon: "📊"
        },
        {
            id: 2,
            title: "Desarrollador Web con IA",
            company: "Proyectos Freelance",
            period: "2025 - Actualidad",
            location: "Remoto",
            description: "Creación de páginas web profesionales utilizando inteligencia artificial, enfocadas en soluciones digitales optimizadas y rentables.",
            achievements: [
                "Desarrollo de sitios web a código con IA personalizada",
                "Integración de sistemas de pago (Stripe) y hosting profesional",
                "Optimización SEO y diseño responsive",
                "Proyectos escalables para negocios digitales"
            ],
            technologies: ["HTML", "CSS", "JavaScript", "GitHub", "Hostinger", "IA"],
            icon: "💻"
        },
        {
            id: 3,
            title: "Estudiante de Economía",
            company: "Universidad",
            period: "2020 - Actualidad",
            location: "Girona, España",
            description: "Formación académica en teoría económica, finanzas, econometría y análisis cuantitativo.",
            achievements: [
                "Base sólida en microeconomía, macroeconomía y finanzas corporativas",
                "Capacidad analítica y pensamiento crítico desarrollado",
                "Habilidades en modelización financiera y análisis de datos"
            ],
            technologies: ["Excel", "Econometría", "Estadística", "Modelización"],
            icon: "🎓"
        }
    ],
    
    // ===== HABILIDADES =====
skills: {
    "Análisis Financiero": [
        { name: "Análisis fundamental de empresas", icon: "📊" },
        { name: "Valoración financiera (DCF, múltiplos)", icon: "📈" },
        { name: "Interpretación de estados financieros", icon: "📑" },
        { name: "Excel (modelización financiera)", icon: "💹" }
    ],
    "Inversión y Mercados": [
        { name: "Gestión de cartera", icon: "💼" },
        { name: "Toma de decisiones bajo incertidumbre", icon: "🎯" },
        { name: "Análisis de riesgo", icon: "⚖️" },
        { name: "Visión estratégica a medio plazo", icon: "♟️" }
    ],
    "Negocio y Estrategia": [
        { name: "Mentalidad emprendedora", icon: "🚀" },
        { name: "Detección de oportunidades de negocio", icon: "🔎" },
        { name: "Negociación", icon: "🤝" },
        { name: "Ventas consultivas", icon: "💡" }
    ],
    "Comunicación y Soft Skills": [
        { name: "Oratoria y comunicación persuasiva", icon: "🎤" },
        { name: "Pensamiento lógico-analítico", icon: "🧠" },
        { name: "Capacidad de enseñanza", icon: "📚" },
        { name: "Inglés (C1)", icon: "🌍" }
    ]
},

    
    // ===== PROYECTOS =====
    projects: [
        {
            id: 1,
            title: "Páginas Web con IA",
            shortDescription: "Creación de páginas web a código con IA personalizadas",
            fullDescription: "Proyecto de desarrollo de páginas web creadas con inteligencia artificial, enfocadas en ofrecer soluciones digitales profesionales, optimizadas y rentables para negocios que buscan escalar su presencia online de forma eficiente. Incluye diseño responsive, optimización SEO, integración de pagos y hosting profesional.",
            thumbnail: "assets/images/projects/project1.jpg",
            tags: ["Github", "Hostinger", "Perplexity", "Stripe", "HTML", "CSS"],
            category: "web",
            demoUrl: "https://aleixbbpp.github.io/CURRICULUMWEB2/",
            githubUrl: "https://github.com/AleixBBPP/CURRICULUMWEB2",
            featured: true,
            date: "2025-07"
        },
        {
            id: 2,
            title: "Proyecto de Inversión en Mercados Financieros",
            shortDescription: "Gestión activa de cartera orientada a crecimiento a medio plazo",
            fullDescription: "Proyecto personal de inversión en renta variable con más de 4 años de experiencia, centrado en análisis fundamental, detección de empresas infravaloradas y asignación estratégica de capital con horizonte 1-3 años. Incluye estudio de estados financieros, valoración mediante múltiplos y DCF, gestión del riesgo y toma de decisiones bajo incertidumbre macroeconómica.",
            thumbnail: "assets/images/projects/project2.jpg",
            tags: ["Análisis Fundamental", "Valoración Financiera", "Gestión de Cartera", "Renta Variable"],
            category: "finanzas",
            demoUrl: "",
            githubUrl: "",
            featured: true,
            date: "2019-Actualidad"
        },
        {
            id: 3,
            title: "Dashboard de Análisis de Cartera",
            shortDescription: "Herramienta Excel para seguimiento de inversiones en tiempo real",
            fullDescription: "Dashboard interactivo desarrollado en Excel para el seguimiento y análisis de cartera de inversión. Incluye cálculo automático de rentabilidad por activo y total, análisis de distribución por sectores, seguimiento de dividendos, gestión de riesgo por posición y visualización gráfica de performance histórica.",
            thumbnail: "assets/images/projects/project3.jpg",
            tags: ["Excel", "Análisis Financiero", "Dashboard", "VBA"],
            category: "finanzas",
            demoUrl: "",
            githubUrl: "",
            featured: false,
            date: "2023"
        },
        {
            id: 4,
            title: "Modelo de Valoración DCF",
            shortDescription: "Template Excel para valoración de empresas mediante flujos descontados",
            fullDescription: "Modelo financiero completo en Excel para valoración de empresas mediante el método de Flujos de Caja Descontados (DCF). Incluye proyección de estados financieros, cálculo de WACC, valor terminal, análisis de sensibilidad y escenarios múltiples. Herramienta útil para análisis fundamental profundo.",
            thumbnail: "assets/images/projects/project4.jpg",
            tags: ["Excel", "DCF", "Valoración", "Modelización Financiera"],
            category: "finanzas",
            demoUrl: "",
            githubUrl: "",
            featured: false,
            date: "2024"
        }
    ],
    
    // ===== TEMA DE COLORES =====
    theme: {
    primaryColor: "#17c7b5",
    secondaryColor: "#c8a96b",
    accentColor: "#10b3a3",
    }
};

// Hacer CONFIG disponible globalmente
window.CONFIG = CONFIG;
