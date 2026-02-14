// ====================================
// CONFIGURACIÓN PERSONAL DEL PORTFOLIO
// ====================================
// INSTRUCCIONES: Cambia TODOS los datos aquí con tu información personal
// Este es el ÚNICO archivo que necesitas editar para personalizar tu web

const CONFIG = {
    
    // ===== INFORMACIÓN PERSONAL =====
    personal: {
        name: "Aleix Bosch Pérez",                    // 👈 CAMBIA ESTO
        title: "Economista e Inversor",         // 👈 Tu profesión/título
        tagline: "Creando experiencias digitales increíbles con código limpio y diseño moderno",  // 👈 Tu frase personal
        email: "aleixboschperez@gmail.com",                  // 👈 Tu email
        phone: "+34 682735782",                      // 👈 Tu teléfono
        location: "Girona, España",                    // 👈 Tu ubicación
        avatar: "assets/images/avatar.jpg",            // 👈 Ruta a tu foto (crearemos esta carpeta después)
        cvUrl: "#",                                    // 👈 Link a tu CV (por ahora déjalo así)
        
        // Roles que se mostrarán con animación typing en el home
        roles: [
            "Inversor multimercado",                  // 👈 Puedes cambiar o añadir más roles
            "Analista de Empresas",
            "Economista",
            "Divulgador económico político y filosófico"
        ]
    },
    
    // ===== REDES SOCIALES =====
    social: {
        github: "https://github.com/AleixBBPP",        // 👈 CAMBIA con tu usuario de GitHub
        linkedin: "https://www.linkedin.com/in/aleix-bosch-pérez-782174262/", // 👈 CAMBIA con tu LinkedIn
        twitter: "",      // 👈 O déjalo vacío: ""
        instagram: "",                                 // 👈 Opcional
    },
    
    // ===== SOBRE TI (ABOUT SECTION) =====
    about: {
        image: "assets/images/about-photo.jpg",        // 👈 Foto tuya para la sección "Sobre mí"
        bio: [
            "Estudiante de Economía con 4 años de experiencia real en inversión en mercados financieros y enfoque analítico avanzado.",
            
            "Perfil orientado a resultados, con mentalidad empresarial, sólida base en análisis financiero y capacidad para transformar ideas en proyectos digitales rentables.",
            
            "Destaco por pensamiento lógico, comunicación persuasiva y una fuerte orientación a la creación de valor."
        ],
        // 👆 CAMBIA estos párrafos con tu historia personal
    },
    
    // ===== TUS HABILIDADES =====
    skills: [
        // Análisis y Finanzas
        { name: "Análisis fundamental de empresas", level: 85, category: "Análisis y Finanzas", icon: "📊" },
        { name: "Valoración financiera (DCF, ratios, múltiplos)", level: 80, category: "Análisis y Finanzas", icon: "📈" },
        { name: "Interpretación de estados financieros", level: 85, category: "Análisis y Finanzas", icon: "📑" },
        { name: "Toma de decisiones bajo incertidumbre", level: 80, category: "Análisis y Finanzas", icon: "🎯" },
        { name: "Pensamiento lógico-analítico", level: 90, category: "Análisis y Finanzas", icon: "🧠" },
        
        // Negocio y Estrategia
        { name: "Mentalidad emprendedora", level: 90, category: "Negocio y Estrategia", icon: "🚀" },
        { name: "Detección de oportunidades de negocio", level: 80, category: "Negocio y Estrategia", icon: "🔎" },
        { name: "Negociación", level: 70, category: "Negocio y Estrategia", icon: "🤝" },
        { name: "Ventas consultivas", level: 75, category: "Negocio y Estrategia", icon: "💼" },
        { name: "Visión estratégica a medio plazo", level: 85, category: "Negocio y Estrategia", icon: "♟️" },
        
        // Comunicación y Herramientas
        { name: "Oratoria y comunicación persuasiva", level: 85, category: "Comunicación y Herramientas", icon: "🎤" },
        { name: "Capacidad de enseñanza y explicación", level: 85, category: "Comunicación y Herramientas", icon: "📚" },
        { name: "Excel (modelización básica-intermedia)", level: 75, category: "Comunicación y Herramientas", icon: "📊" },
        { name: "Diseño web básico", level: 70, category: "Comunicación y Herramientas", icon: "💻" },
        { name: "Inglés (C1)", level: 85, category: "Comunicación y Herramientas", icon: "🌍" },
    ],
    // 👆 EDITA: Cambia las skills por las tuyas, ajusta los niveles (0-100)
    // Puedes agregar o quitar habilidades según necesites
    
    // ===== TUS PROYECTOS =====
    projects: [
        {
            id: 1,
            title: "Paginas Web con IA",                                    // 👈 Nombre del proyecto
            shortDescription: "Creación de paginas web a codigo con IA personalizadas", // 👈 Descripción corta
            fullDescription: "Proyecto de desarrollo de páginas web creadas con inteligencia artificial, enfocadas en ofrecer soluciones digitales profesionales, optimizadas y rentables para negocios que buscan escalar su presencia online de forma eficiente.",
            thumbnail: "assets/images/projects/project1.jpg",               // 👈 Imagen del proyecto
            tags: ["Github", "Hostinger", "Perplexity", "Stripe"],                // 👈 Tecnologías usadas
            category: "web",                                                 // web, mobile, design, api
            demoUrl: "https://demo-proyecto.com",                           // 👈 Link a demo (o "" si no tienes)
            githubUrl: "",            // 👈 Link a GitHub
            featured: true,                                                  // true = aparece destacado
            date: "2025-07"
        },
        {
            id: 2,
            title: "Proyecto de Inversión en Mercados Financieros",
            shortDescription: "Gestión activa de cartera orientada a crecimiento a medio plazo",
            fullDescription: "Proyecto personal de inversión en renta variable con más de 4 años de experiencia, centrado en análisis fundamental, detección de empresas infravaloradas y asignación estratégica de capital con horizonte 1-3 años. Incluye estudio de estados financieros, valoración mediante múltiplos y DCF, gestión del riesgo y toma de decisiones bajo incertidumbre macroeconómica.",
            thumbnail: "assets/images/projects/project2.jpg",
            tags: ["Análisis Fundamental", "Valoración Financiera", "Gestión de Cartera", "Renta Variable"],
            category: "Finanzas",
            demoUrl: "",
            githubUrl: "",
            featured: true,
            date: "2019-Actualidad"
        },
    ],
    // 👆 IMPORTANTE: EDITA estos proyectos con los tuyos
    // Puedes agregar más proyectos copiando y pegando un bloque { ... }
    // Las categorías pueden ser: "web", "mobile", "design", "api"
    
    // ===== TEMA DE COLORES =====
    theme: {
        // Puedes cambiar estos colores si quieres personalizar más
        primaryColor: "#3b82f6",      // Azul principal
        secondaryColor: "#8b5cf6",    // Púrpura
        accentColor: "#10b981",       // Verde
    }
};

// ====================================
// NO TOQUES NADA DEBAJO DE ESTA LÍNEA
// ====================================

// Hacer CONFIG disponible globalmente
window.CONFIG = CONFIG;
