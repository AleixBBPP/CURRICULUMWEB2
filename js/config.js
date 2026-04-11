// ====================================
// CONFIG.JS - PORTFOLIO DATA
// ====================================

window.CONFIG = {
    personal: {
        name: "Aleix Bosch Pérez",
        title: "Economista e Inversor",
        tagline: "Estudiante de economía e inversor enfocado en análisis financiero, valoración de empresas y comprensión profunda de los mercados. Me interesa unir pensamiento analítico, criterio empresarial y comunicación clara.",
        roles: [
            "Economista en formación",
            "Inversor amateur",
            "Analista financiero",
            "Apasionado por los mercados"
        ],
        email: "aleixboschperez@gmail.com",
        phone: "+34 600 000 000",
        location: "España",
        avatar: "assets/images/avatar.jpg",
        cvUrl: "#"
    },

    stats: [
        {
            icon: "📚",
            number: 2,
            suffix: "º",
            label: "Curso de Economía"
        },
        {
            icon: "📈",
            number: 7,
            suffix: "+",
            label: "Años invirtiendo"
        },
        {
            icon: "🧠",
            number: 4,
            suffix: "",
            label: "Áreas clave de análisis"
        }
    ],

    about: {
        image: "assets/images/about-photo.jpg",
        bio: [
            "Soy estudiante de economía y llevo varios años desarrollando una visión muy personal sobre inversión, análisis empresarial y mercados financieros.",
            "Me interesa entender cómo se crea valor en una compañía, cómo se reflejan las expectativas en el precio y cómo separar ruido de señal en la toma de decisiones.",
            "Disfruto trabajando con ideas complejas, estructurándolas bien y comunicándolas de forma simple. Mi objetivo es seguir construyendo criterio, profundidad analítica y una trayectoria profesional sólida dentro del mundo financiero."
        ]
    },

    skills: {
        "Análisis financiero": [
            { icon: "📊", name: "Análisis fundamental" },
            { icon: "📉", name: "Lectura de estados financieros" },
            { icon: "🏢", name: "Valoración de empresas" },
            { icon: "💹", name: "Seguimiento de mercados" }
        ],
        "Economía y negocio": [
            { icon: "🌍", name: "Macroeconomía" },
            { icon: "🏦", name: "Entorno monetario y tipos" },
            { icon: "📦", name: "Modelos de negocio" },
            { icon: "🧾", name: "Pensamiento económico" }
        ],
        "Herramientas": [
            { icon: "🧮", name: "Excel / hojas de cálculo" },
            { icon: "📝", name: "Documentación y síntesis" },
            { icon: "💻", name: "HTML, CSS y JavaScript básico" },
            { icon: "🔎", name: "Investigación digital" }
        ],
        "Fortalezas": [
            { icon: "🎯", name: "Pensamiento crítico" },
            { icon: "🧠", name: "Capacidad analítica" },
            { icon: "📚", name: "Aprendizaje autodidacta" },
            { icon: "🗣️", name: "Comunicación clara" }
        ]
    },
    analysis: [
    {
        id: "microsoft",
        title: "Microsoft: calidad, escala y disciplina en capital",
        category: "Empresa",
        status: "En seguimiento",
        type: "Compounder de calidad",
        horizon: "Largo plazo",
        conviction: "Alta",
        primaryRisk: "Valoración exigente",
        excerpt: "Negocio de altísima calidad, con ventaja competitiva clara en software empresarial, cloud y ecosistema.",
        thesis: "La tesis se apoya en recurrencia, pricing power, diversificación y una asignación de capital históricamente sólida.",
        tags: ["Moat", "Cloud", "Calidad", "Asignación de capital"],
        catalysts: [
            "Expansión sostenida de Azure",
            "Monetización de IA en productividad y software",
            "Mantenimiento de márgenes elevados"
        ],
        detailTitle: "Microsoft como compuesto de calidad a largo plazo",
        detailText: [
            "Microsoft me parece una de las compañías más completas del mercado por la combinación de escala, recurrencia, ecosistema y disciplina operativa.",
            "Su fortaleza no depende de un único producto, sino de una base empresarial muy integrada: Office, Azure, Windows, seguridad, herramientas de productividad y software corporativo.",
            "Lo que más valor aporta en el análisis no es solo el crecimiento, sino la calidad del crecimiento: márgenes fuertes, clientes recurrentes y una posición difícil de replicar.",
            "También me interesa cómo asigna capital y cómo consigue reforzar su moat sin perder foco estratégico."
        ],
        risks: [
            "Valoración exigente en determinados momentos del ciclo",
            "Dependencia parcial de expectativas altas en cloud e IA",
            "Riesgo regulatorio por tamaño y posición competitiva"
        ],
        conclusion: "La vería como una compañía excelente, aunque el punto de entrada sigue siendo clave para separar gran negocio de gran inversión."
    },
    {
        id: "luxury-sector",
        title: "Lujo europeo: marca, pricing power y resiliencia",
        category: "Sector",
        status: "Estudiando",
        type: "Sector con activos intangibles",
        horizon: "Medio/Largo plazo",
        conviction: "Media",
        primaryRisk: "Dependencia de demanda global",
        excerpt: "El lujo me interesa como categoría por su capacidad de mantener márgenes altos y proteger marca en ciclos complejos.",
        thesis: "Las mejores compañías del sector suelen combinar intangibles fuertes, control de distribución y una demanda menos sensible al precio.",
        tags: ["Lujo", "Marca", "Pricing power", "Margen"],
        catalysts: [
            "Recuperación de demanda internacional",
            "Fortaleza sostenida de marcas top",
            "Capacidad de subida de precios sin deterioro de demanda"
        ],
        detailTitle: "Por qué el lujo sigue siendo un sector tan interesante",
        detailText: [
            "El sector lujo me parece especialmente atractivo porque refleja muy bien el valor de los activos intangibles.",
            "Las mejores empresas no compiten solo por producto, sino por marca, identidad, percepción y control de oferta.",
            "Eso les permite sostener pricing power, proteger márgenes y mantener una relación distinta con el consumidor.",
            "Aun así, no todas las empresas del sector son iguales: hay que separar marcas excepcionales de negocios simplemente aspiracionales."
        ],
        risks: [
            "Dependencia de demanda internacional y ciclos de consumo",
            "Sensibilidad a China y al turismo global",
            "Valoraciones que a veces descuentan demasiada perfección"
        ],
        conclusion: "Es un sector donde la calidad del activo importa muchísimo, pero también donde el precio pagado cambia por completo la rentabilidad futura."
    },
    {
        id: "rates-market",
        title: "Tipos, liquidez y compresión de múltiplos",
        category: "Macro",
        status: "Activo",
        type: "Marco de interpretación de mercado",
        horizon: "Cíclico",
        conviction: "Alta",
        primaryRisk: "Sobreinterpretar la macro",
        excerpt: "Cuando cambia el precio del dinero, cambian también las valoraciones, el apetito por riesgo y la narrativa del mercado.",
        thesis: "Entender tipos y liquidez ayuda a interpretar por qué algunos activos se expanden o comprimen incluso sin grandes cambios operativos.",
        tags: ["Macro", "Tipos", "Liquidez", "Valoración"],
        catalysts: [
            "Cambios en expectativas de tipos",
            "Movimientos en el bono libre de riesgo",
            "Repricing de activos de duración larga"
        ],
        detailTitle: "La importancia del precio del dinero en los mercados",
        detailText: [
            "Uno de los marcos que más me interesa seguir es la relación entre tipos de interés, liquidez y valoración.",
            "Muchas veces el mercado parece moverse solo por resultados empresariales, pero el entorno monetario condiciona mucho más de lo que parece.",
            "Cuando el tipo libre de riesgo sube, los múltiplos tienden a comprimirse, especialmente en activos donde gran parte del valor depende del futuro lejano.",
            "Por eso me gusta analizar empresas no solo por fundamentales internos, sino también dentro del régimen macro en el que cotizan."
        ],
        risks: [
            "Sobreinterpretar el corto plazo macro",
            "Confundir narrativa de mercado con cambio estructural",
            "Usar el marco macro para justificar cualquier movimiento del precio"
        ],
        conclusion: "La macro no sustituye al análisis empresarial, pero sí ayuda a entender el contexto en el que se forma el precio."
    }
],
    experience: [
        {
            icon: "🎓",
            title: "Estudiante de Economía",
            company: "Universidad",
            location: "España",
            period: "Actualidad",
            description: "Formación universitaria centrada en economía, empresa, finanzas y análisis cuantitativo, con interés especial por la valoración y la toma de decisiones en mercados.",
            achievements: [
                "Desarrollo progresivo de base teórica en economía y finanzas.",
                "Aplicación práctica del razonamiento económico a empresas y mercados.",
                "Consolidación de disciplina analítica y método de estudio."
            ],
            technologies: ["Economía", "Finanzas", "Valoración", "Mercados"]
        },
        {
            icon: "📈",
            title: "Inversor amateur",
            company: "Gestión personal",
            location: "Mercados financieros",
            period: "Hace 7+ años - Actualidad",
            description: "Seguimiento constante de compañías, sectores y ciclos de mercado, con foco en comprender negocios, riesgos, expectativas y asignación de capital.",
            achievements: [
                "Análisis continuado de empresas cotizadas y tesis de inversión.",
                "Aprendizaje práctico sobre volatilidad, sesgos y gestión emocional.",
                "Construcción de criterio propio a través de experiencia real."
            ],
            technologies: ["Análisis fundamental", "Mercados", "Empresas", "Inversión"]
        },
        {
            icon: "💻",
            title: "Desarrollo de portfolio web",
            company: "Proyecto personal",
            location: "GitHub",
            period: "2026",
            description: "Diseño y construcción de una web personal para presentar perfil, experiencia, habilidades e identidad profesional en formato moderno y accesible.",
            achievements: [
                "Estructuración del contenido en arquitectura config-driven.",
                "Mejora del diseño visual, experiencia de usuario y presencia online.",
                "Publicación y mantenimiento del proyecto en GitHub Pages."
            ],
            technologies: ["HTML", "CSS", "JavaScript", "GitHub Pages"]
        }
    ],

    social: {
        github: "https://github.com/AleixBBPP",
        linkedin: "https://www.linkedin.com/",
        twitter: "",
        instagram: ""
    }
};
