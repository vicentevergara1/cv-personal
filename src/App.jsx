import { useState, useEffect } from 'react';
import './App.css';
import avatarImg from './assets/images/avatar_developer_portrait_1790264704771.jpg';
import project1Img from './assets/images/project_ecommerce_platform_1790264674933.jpg';
import project2Img from './assets/images/project_saas_workflow_1790264685562.jpg';
import project3Img from './assets/images/project_analytics_app_1790264695249.jpg';

import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Sun,
  Moon,
  Check,
  Copy,
  Code2,
  Briefcase,
  GraduationCap,
  Award,
  Terminal,
  X,
  Send,
  Globe,
  Layers,
  Sparkles
} from 'lucide-react';

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

function App() {
  // Theme state
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  // Selected project for modal
  const [activeProject, setActiveProject] = useState(null);

  // Filter for projects
  const [projectFilter, setProjectFilter] = useState('all');

  // Toast feedback
  const [toastMessage, setToastMessage] = useState(null);

  // Contact form state
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Handle ESC to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const showToast = (text) => {
    setToastMessage(text);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('vicente.vergara@email.com');
    showToast('¡Correo electrónico copiado al portapapeles!');
  };

  const handlePrintCV = () => {
    window.print();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setFormSubmitted(true);
      showToast('¡Mensaje enviado con éxito a Vicente!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  const personalInfo = {
    name: "Vicente Vergara",
    title: "Desarrollador Frontend React & TypeScript",
    email: "vicente.vergara@email.com",
    phone: "+56 9 1234 5678",
    location: "Santiago, Chile",
    availability: "Disponible para contratación (Remoto / Híbrido)",
    github: "https://github.com/vicentevergara1",
    linkedin: "https://linkedin.com",
    portfolio: "https://vicentevergara.dev"
  };

  const metrics = [
    { value: "5+", label: "Años de experiencia profesional" },
    { value: "20+", label: "Proyectos entregados a producción" },
    { value: "30%", label: "Optimización promedio en tiempos de carga" },
    { value: "98/100", label: "Puntaje Lighthouse promedio en performance" }
  ];

  const experience = [
    {
      id: 1,
      role: "Desarrollador Frontend Senior & Tech Lead UI",
      company: "Tech Solutions",
      date: "Enero 2022 - Presente",
      location: "Santiago, Chile (Híbrido)",
      description: [
        "Liderazgo de la arquitectura frontend para plataforma SaaS empresarial utilizando React 19, TypeScript y Vite, reduciendo el tamaño del bundle inicial en un 38%.",
        "Diseño e implementación de un Design System transversal basado en componentes atómicos accesibles (WCAG 2.1 AA), acelerando los tiempos de desarrollo de 4 squads.",
        "Implementación de flujos de testing automatizados con Vitest y React Testing Library, elevando la cobertura de código crítico al 88%.",
        "Optimización exhaustiva de Core Web Vitals (LCP, FID/INP, CLS) logrando una experiencia de navegación fluida a 60fps."
      ],
      tech: ["React 19", "TypeScript", "Vite", "Zustand", "Tailwind CSS", "Vitest", "REST APIs", "CI/CD"]
    },
    {
      id: 2,
      role: "Desarrollador Frontend",
      company: "Agencia Creativa Digital",
      date: "Marzo 2019 - Diciembre 2021",
      location: "Santiago, Chile",
      description: [
        "Desarrollo e integración de interfaces web interactivas para más de 12 clientes en retail, banca y telecomunicaciones.",
        "Integración de pasarelas de pago (Webpay Plus, Stripe) y APIs RESTful complejas con manejo resiliente de errores y estado offline.",
        "Colaboración continua con diseñadores UX/UI en Figma para trasladar especificaciones a código limpio y responsive para móviles y desktop.",
        "Mantenimiento y refactorización de código legacy hacia React funcional con Hooks y Context API."
      ],
      tech: ["React", "JavaScript (ES6+)", "Redux", "CSS3 / Sass", "REST APIs", "Webpack", "Git"]
    },
    {
      id: 3,
      role: "Desarrollador Web Junior & Freelance",
      company: "Proyectos Independientes",
      date: "Enero 2018 - Febrero 2019",
      location: "Santiago, Chile",
      description: [
        "Creación de sitios web corporativos y landing pages optimizadas para conversión y posicionamiento SEO.",
        "Maquetación modular con HTML5 semántico, CSS Flexbox/Grid y JavaScript vanilla.",
        "Configuración de hosting, dominios, certificados SSL y despliegues continuos."
      ],
      tech: ["JavaScript", "HTML5 Semántico", "CSS3", "Git", "SEO Técnico"]
    }
  ];

  const projects = [
    {
      id: "omnicommerce",
      category: "react",
      title: "OmniCommerce Platform",
      tagline: "E-Commerce SPA de alto rendimiento con checkout reactivo",
      description: "Plataforma de comercio electrónico moderna que ofrece una experiencia de compra instantánea. Incluye filtrado facetado multidimensional, gestión de carrito persistente y panel administrativo de métricas en tiempo real.",
      image: project1Img,
      highlights: [
        "Carga inicial inferior a 0.8s mediante optimizaciones de bundles en Vite y lazy loading de rutas.",
        "Sincronización de carrito en tiempo real con LocalStorage y recuperación de sesión.",
        "Flujo completo de checkout con validación de formularios y simulación de procesamiento de pagos."
      ],
      tech: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Context API", "Stripe API"],
      demoUrl: "https://example.com/demo",
      repoUrl: "https://github.com/vicentevergara1"
    },
    {
      id: "taskflow",
      category: "fullstack",
      title: "TaskFlow SaaS",
      tagline: "Tablero colaborativo de tareas y gestión de sprints ágiles",
      description: "Herramienta de productividad inspirada en Kanban diseñada para equipos de ingeniería. Ofrece manipulación mediante drag & drop accesible, filtros de búsqueda instantáneos, historial de actividad y soporte offline-first.",
      image: project2Img,
      highlights: [
        "Drag and drop optimizado a 60fps con cálculo geométrico de colisiones.",
        "Modo offline automático con persistencia local mediante IndexedDB y sincronización de fondo.",
        "Métricas integradas de velocidad de sprint y cálculo dinámico de tiempos de entrega."
      ],
      tech: ["React", "Zustand", "TypeScript", "Tailwind CSS", "IndexedDB", "Vitest"],
      demoUrl: "https://example.com/demo",
      repoUrl: "https://github.com/vicentevergara1"
    },
    {
      id: "finpulse",
      category: "fullstack",
      title: "FinPulse Analytics",
      tagline: "Dashboard financiero con visualización de datos en tiempo real",
      description: "Suite de métricas e inteligencia de negocio para startups financieras. Procesa y representa miles de transacciones con gráficos dinámicos interactivos, análisis por cohortes y exportación de reportes a PDF y CSV.",
      image: project3Img,
      highlights: [
        "Renderizado de gráficos temporales de alta densidad sin bloqueo del hilo principal.",
        "Filtros personalizados por rangos de fechas, categorías y métodos de pago.",
        "Módulo de exportación automatizada de balances contables a formato PDF."
      ],
      tech: ["React", "Chart.js", "TypeScript", "Tailwind CSS", "REST API"],
      demoUrl: "https://example.com/demo",
      repoUrl: "https://github.com/vicentevergara1"
    },
    {
      id: "auraui",
      category: "design",
      title: "Aura Design System",
      tagline: "Librería de componentes UI accesibles y tokens de diseño para React",
      description: "Sistema de diseño modular creado desde cero enfocado en accesibilidad (WCAG 2.1 AA), consistencia visual y ergonomía de desarrollo. Incluye más de 35 componentes documentados y soporte exhaustivo para temas claro y oscuro.",
      image: project1Img,
      highlights: [
        "Total conformidad con estándares de accesibilidad para lectores de pantalla y navegación por teclado.",
        "Tokens de diseño tipográficos, espaciales y cromáticos configurables.",
        "Suite completa de tests unitarios y de accesibilidad con 100% de aprobación."
      ],
      tech: ["React", "TypeScript", "Vitest", "Storybook", "WCAG 2.1 AA"],
      demoUrl: "https://example.com/demo",
      repoUrl: "https://github.com/vicentevergara1"
    }
  ];

  const filteredProjects = projectFilter === 'all'
    ? projects
    : projects.filter(p => p.category === projectFilter);

  const skillsCategories = [
    {
      title: "Frontend & Core",
      icon: <Code2 size={18} className="text-primary" />,
      skills: [
        { name: "React 19 / 18", level: "Avanzado · 5 años" },
        { name: "TypeScript", level: "Avanzado · 4 años" },
        { name: "JavaScript (ES6+)", level: "Experto · 5+ años" },
        { name: "HTML5 Semántico & a11y", level: "Avanzado" },
        { name: "Next.js", level: "Intermedio · 2 años" },
        { name: "CSS3 / Flexbox / Grid", level: "Experto" }
      ]
    },
    {
      title: "Arquitectura & Estado",
      icon: <Layers size={18} className="text-primary" />,
      skills: [
        { name: "Zustand / Redux Toolkit", level: "Avanzado" },
        { name: "React Context & Custom Hooks", level: "Experto" },
        { name: "REST APIs & TanStack Query", level: "Avanzado" },
        { name: "Design Systems Modulares", level: "Avanzado" },
        { name: "Web Vitals & Performance", level: "Avanzado" },
        { name: "Responsive & Mobile-First", level: "Experto" }
      ]
    },
    {
      title: "Herramientas & Testing",
      icon: <Terminal size={18} className="text-primary" />,
      skills: [
        { name: "Vite / Webpack", level: "Avanzado" },
        { name: "Vitest / Jest / RTL", level: "Avanzado" },
        { name: "Git / GitHub Flow", level: "Avanzado" },
        { name: "CI / CD (GitHub Actions)", level: "Intermedio" },
        { name: "Docker (Entornos dev)", level: "Intermedio" },
        { name: "Figma to Code", level: "Avanzado" }
      ]
    },
    {
      title: "Backend & Datos (Complementario)",
      icon: <Globe size={18} className="text-primary" />,
      skills: [
        { name: "Node.js & Express (BFF)", level: "Intermedio" },
        { name: "PostgreSQL & SQLite (Básico)", level: "Intermedio" },
        { name: "Firebase (Auth / Firestore)", level: "Intermedio" },
        { name: "JWT & OAuth Flujos", level: "Intermedio" },
        { name: "Metodologías Ágiles (Scrum)", level: "Avanzado" }
      ]
    }
  ];

  const education = [
    {
      degree: "Ingeniería en Informática",
      institution: "Universidad Tecnológica",
      date: "2014 - 2018",
      description: "Graduado con distinción académica. Especialización en Ingeniería de Software, Estructuras de Datos y Arquitecturas Web."
    }
  ];

  const certifications = [
    {
      title: "Meta Certified Frontend Developer",
      issuer: "Meta / Coursera",
      date: "2023",
      credentialId: "META-FE-98314",
      description: "Profundización en React avanzado, patrones de arquitectura frontend, testing automatizado y accesibilidad web."
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2022",
      credentialId: "AWS-CCP-72019",
      description: "Fundamentos de infraestructura cloud, seguridad, alta disponibilidad y despliegue de aplicaciones modernas."
    },
    {
      title: "Scrum Foundation Professional Certificate (SFPC)",
      issuer: "CertiProf",
      date: "2021",
      credentialId: "SFPC-45129",
      description: "Marcos de trabajo ágiles, ceremonias Scrum y gestión iterativa de productos digitales."
    }
  ];

  const testimonials = [
    {
      quote: "Vicente posee una combinación excepcional de rigor técnico y criterio estético. Rediseñó la arquitectura de nuestra plataforma React, reduciendo las incidencias de rendimiento en más del 30% y acelerando la entrega de features en todo el equipo.",
      author: "Daniel Morales",
      role: "Lead Software Architect en Tech Solutions"
    },
    {
      quote: "Un desarrollador sumamente metódico y confiable. Transforma especificaciones de producto complejas en interfaces accesibles e intuitivas con una comunicación transparente de principio a fin.",
      author: "Carolina Soto",
      role: "Senior Product Manager"
    }
  ];

  return (
    <div className="app-container">
      {/* 1. TOP BAR (Strict 3-Zone Top Bar Contract) */}
      <header className="topbar">
        <div className="topbar-inner">
          {/* Zone 1: Single text element wordmark */}
          <a href="#" className="brand-zone">
            <span className="brand-dot" aria-hidden="true"></span>
            <span>Vicente Vergara</span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="nav-zone">
            <a href="#sobre-mi" className="nav-link">Sobre mí</a>
            <a href="#experiencia" className="nav-link">Experiencia</a>
            <a href="#proyectos" className="nav-link">Proyectos</a>
            <a href="#habilidades" className="nav-link">Habilidades</a>
            <a href="#educacion" className="nav-link">Educación</a>
            <a href="#contacto" className="nav-link">Contacto</a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="action-zone">
            <button
              onClick={toggleTheme}
              className="btn-icon"
              aria-label={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
              title={theme === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <button
              onClick={handlePrintCV}
              className="btn btn-outline"
              title="Descargar versión para imprimir / PDF"
            >
              <Download size={16} />
              <span>Descargar PDF</span>
            </button>

            <a href="#contacto" className="btn btn-primary">
              <Mail size={16} />
              <span>Contactar</span>
            </a>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="main-content">
        {/* 2. HERO SECTION */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-status-tag">
              <span className="brand-dot" aria-hidden="true"></span>
              <span>{personalInfo.availability}</span>
            </div>

            <h1 className="hero-title">{personalInfo.name}</h1>
            <h2 className="hero-subtitle">{personalInfo.title}</h2>

            <p className="hero-bio">
              Desarrollador frontend con más de 5 años de experiencia diseñando e implementando aplicaciones web escalables con React, TypeScript y arquitecturas centradas en el usuario. Apasionado por el rendimiento, la accesibilidad y el código limpio.
            </p>

            <div className="hero-meta">
              <span className="hero-meta-item">
                <MapPin size={16} className="text-primary" />
                <span>{personalInfo.location}</span>
              </span>
              <span className="tech-separator">·</span>
              <button onClick={handleCopyEmail} className="hero-meta-item hover:text-primary transition-colors cursor-pointer" title="Copiar correo">
                <Mail size={16} className="text-primary" />
                <span>{personalInfo.email}</span>
                <Copy size={13} className="text-muted ml-1" />
              </button>
              <span className="tech-separator">·</span>
              <span className="hero-meta-item">
                <Phone size={16} className="text-primary" />
                <span>{personalInfo.phone}</span>
              </span>
            </div>

            <div className="hero-actions">
              <a href="#contacto" className="btn btn-primary">
                <span>Conversar sobre un proyecto</span>
              </a>
              <button onClick={handlePrintCV} className="btn btn-outline">
                <Download size={16} />
                <span>Imprimir CV</span>
              </button>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="btn-icon"
                aria-label="Perfil de GitHub"
                title="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-icon"
                aria-label="Perfil de LinkedIn"
                title="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </div>

          <div className="hero-avatar-wrapper">
            <img
              src={avatarImg}
              alt="Foto de perfil profesional de Vicente Vergara"
              className="hero-avatar"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* 3. METRICS STRIP */}
        <div className="metrics-strip">
          {metrics.map((metric, idx) => (
            <div key={idx} className="metric-item">
              <span className="metric-value tabular-nums">{metric.value}</span>
              <span className="metric-label">{metric.label}</span>
            </div>
          ))}
        </div>

        {/* 4. SOBRE MÍ SECTION */}
        <section id="sobre-mi" className="section">
          <div className="section-header">
            <h3 className="section-title">
              <span className="section-num">01.</span>
              <span>Perfil y Filosofía de Desarrollo</span>
            </h3>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                Cuento con más de un lustro de trayectoria en el ecosistema de JavaScript y React, construyendo productos digitales que van desde herramientas internas de gestión hasta plataformas masivas de comercio electrónico.
              </p>
              <p>
                Mi filosofía de trabajo prioriza la experiencia del usuario, la accesibilidad (a11y) y la mantenibilidad a largo plazo. Creo firmemente que un frontend excelente no solo debe verse impecable, sino también responder de inmediato, ser tolerante a fallos de red y contar con una sólida suite de pruebas.
              </p>
              <p>
                Me desenvuelvo cómodamente en equipos ágiles multidisciplinarios, colaborando estrechamente con diseñadores en Figma, líderes técnicos y equipos de backend para definir contratos de API claros y arquitecturas desacopladas.
              </p>
            </div>

            <div className="about-card">
              <h4 className="about-card-title">
                <Sparkles size={18} className="text-primary" />
                <span>Principios de Trabajo</span>
              </h4>
              <ul className="about-checklist">
                <li>
                  <Check size={16} className="check-icon" />
                  <span><strong>Rendimiento Medible:</strong> Optimización de Core Web Vitals, code-splitting y renderizado eficiente.</span>
                </li>
                <li>
                  <Check size={16} className="check-icon" />
                  <span><strong>Tipado Estricto:</strong> TypeScript de extremo a extremo para evitar errores en producción.</span>
                </li>
                <li>
                  <Check size={16} className="check-icon" />
                  <span><strong>Accesibilidad Universal:</strong> HTML5 semántico, navegación por teclado y contraste WCAG AA.</span>
                </li>
                <li>
                  <Check size={16} className="check-icon" />
                  <span><strong>Calidad Asegurada:</strong> Pruebas unitarias e integración continua previas al despliegue.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. EXPERIENCIA LABORAL */}
        <section id="experiencia" className="section">
          <div className="section-header">
            <h3 className="section-title">
              <span className="section-num">02.</span>
              <span>Experiencia Laboral</span>
            </h3>
          </div>
          <p className="section-description">
            Historial cronológico de roles de ingeniería, responsabilidades técnicas e impacto tangible en organizaciones.
          </p>

          <div className="timeline">
            {experience.map(job => (
              <div key={job.id} className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h4 className="timeline-role">{job.role}</h4>
                    <span className="timeline-company">{job.company}</span>
                    <span className="tech-separator"> · </span>
                    <span className="text-xs text-muted">{job.location}</span>
                  </div>
                  <span className="timeline-date tabular-nums">{job.date}</span>
                </div>

                <ul className="timeline-points">
                  {job.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>

                <div className="timeline-tech">
                  <span className="font-semibold text-xs text-heading mr-1">Stack:</span>
                  {job.tech.map((t, idx) => (
                    <span key={idx}>
                      {t}
                      {idx < job.tech.length - 1 && <span className="tech-separator ml-2">/</span>}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. PROYECTOS DESTACADOS */}
        <section id="proyectos" className="section">
          <div className="section-header">
            <h3 className="section-title">
              <span className="section-num">03.</span>
              <span>Proyectos Destacados</span>
            </h3>

            {/* Interactive category filter tabs (Functional buttons) */}
            <div className="filter-tabs" role="tablist">
              <button
                onClick={() => setProjectFilter('all')}
                className={`filter-btn ${projectFilter === 'all' ? 'active' : ''}`}
              >
                Todos ({projects.length})
              </button>
              <button
                onClick={() => setProjectFilter('react')}
                className={`filter-btn ${projectFilter === 'react' ? 'active' : ''}`}
              >
                React SPA
              </button>
              <button
                onClick={() => setProjectFilter('fullstack')}
                className={`filter-btn ${projectFilter === 'fullstack' ? 'active' : ''}`}
              >
                Herramientas & APIs
              </button>
              <button
                onClick={() => setProjectFilter('design')}
                className={`filter-btn ${projectFilter === 'design' ? 'active' : ''}`}
              >
                Design Systems
              </button>
            </div>
          </div>

          <div className="projects-grid">
            {filteredProjects.map(proj => (
              <div
                key={proj.id}
                className="project-card"
                onClick={() => setActiveProject(proj)}
              >
                <img
                  src={proj.image}
                  alt={`Mockup de ${proj.title}`}
                  className="project-thumbnail"
                  referrerPolicy="no-referrer"
                />
                <div className="project-body">
                  <h4 className="project-title">{proj.title}</h4>
                  <p className="project-desc">{proj.tagline}</p>

                  <div className="project-meta">
                    {proj.tech.slice(0, 4).map((tech, idx) => (
                      <span key={idx}>
                        {tech}
                        {idx < 3 && <span className="tech-separator ml-1">·</span>}
                      </span>
                    ))}
                  </div>

                  <div className="project-footer">
                    <span className="project-link-btn">
                      Ver detalles y arquitectura
                      <ExternalLink size={14} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. HABILIDADES TÉCNICAS */}
        <section id="habilidades" className="section">
          <div className="section-header">
            <h3 className="section-title">
              <span className="section-num">04.</span>
              <span>Habilidades Técnicas</span>
            </h3>
          </div>
          <p className="section-description">
            Conjunto de competencias organizadas por área de especialización con años de práctica y grado de dominio comprobable.
          </p>

          <div className="skills-container">
            {skillsCategories.map((category, idx) => (
              <div key={idx} className="skill-category-card">
                <h4 className="skill-category-title">
                  {category.icon}
                  <span>{category.title}</span>
                </h4>
                <div className="skill-items-list">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-row">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 8. EDUCACIÓN, CERTIFICACIONES E IDIOMAS */}
        <section id="educacion" className="section">
          <div className="section-header">
            <h3 className="section-title">
              <span className="section-num">05.</span>
              <span>Educación, Certificaciones e Idiomas</span>
            </h3>
          </div>

          <div className="dual-columns">
            {/* Column 1: Educación y Certificaciones */}
            <div>
              <h4 className="flex items-center gap-2 text-base font-semibold mb-3">
                <GraduationCap size={18} className="text-primary" />
                <span>Formación Académica</span>
              </h4>

              {education.map((item, idx) => (
                <div key={idx} className="edu-cert-card">
                  <h5 className="edu-title">{item.degree}</h5>
                  <div className="edu-institution">{item.institution}</div>
                  <div className="edu-date tabular-nums">{item.date}</div>
                  <p className="edu-desc">{item.description}</p>
                </div>
              ))}

              <h4 className="flex items-center gap-2 text-base font-semibold mb-3 mt-5">
                <Award size={18} className="text-primary" />
                <span>Certificaciones Oficiales</span>
              </h4>

              {certifications.map((cert, idx) => (
                <div key={idx} className="edu-cert-card">
                  <h5 className="edu-title">{cert.title}</h5>
                  <div className="edu-institution">{cert.issuer}</div>
                  <div className="edu-date tabular-nums">
                    <span>{cert.date}</span>
                    <span className="tech-separator"> · </span>
                    <span>Credencial: {cert.credentialId}</span>
                  </div>
                  <p className="edu-desc">{cert.description}</p>
                </div>
              ))}
            </div>

            {/* Column 2: Idiomas & Reconocimientos */}
            <div>
              <h4 className="flex items-center gap-2 text-base font-semibold mb-3">
                <Globe size={18} className="text-primary" />
                <span>Idiomas</span>
              </h4>

              <div className="languages-grid">
                <div className="language-item">
                  <span className="language-name">Español</span>
                  <span className="language-level">Nativo / Lengua materna</span>
                </div>
                <div className="language-item">
                  <span className="language-name">Inglés</span>
                  <span className="language-level">Profesional C1 (Fluido técnico y conversacional)</span>
                </div>
              </div>

              <h4 className="flex items-center gap-2 text-base font-semibold mb-3 mt-6">
                <Briefcase size={18} className="text-primary" />
                <span>Referencias Profesionales</span>
              </h4>

              <div className="testimonials-grid" style={{ gridTemplateColumns: '1fr' }}>
                {testimonials.map((t, idx) => (
                  <div key={idx} className="testimonial-card">
                    <p className="testimonial-quote">“{t.quote}”</p>
                    <div className="testimonial-author">
                      <span className="author-name">{t.author}</span>
                      <span className="author-role">{t.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 9. CONTACTO SECTION */}
        <section id="contacto" className="section">
          <div className="section-header">
            <h3 className="section-title">
              <span className="section-num">06.</span>
              <span>Contacto Directo</span>
            </h3>
          </div>
          <p className="section-description">
            ¿Tienes un proyecto en mente o buscas incorporar un desarrollador frontend a tu equipo? Escríbeme directamente.
          </p>

          <div className="contact-container">
            <div className="contact-info-block">
              <div className="contact-card-item">
                <div className="contact-icon-box">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="contact-label">Correo Electrónico</div>
                  <div className="contact-value">{personalInfo.email}</div>
                  <button
                    onClick={handleCopyEmail}
                    className="text-xs text-primary font-medium hover:underline mt-1 inline-flex items-center gap-1 cursor-pointer"
                  >
                    <Copy size={12} /> Copiar dirección
                  </button>
                </div>
              </div>

              <div className="contact-card-item">
                <div className="contact-icon-box">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="contact-label">Teléfono / WhatsApp</div>
                  <div className="contact-value">{personalInfo.phone}</div>
                </div>
              </div>

              <div className="contact-card-item">
                <div className="contact-icon-box">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="contact-label">Ubicación Actual</div>
                  <div className="contact-value">{personalInfo.location}</div>
                  <div className="text-xs text-muted">Disponible para trabajo remoto en cualquier zona horaria</div>
                </div>
              </div>
            </div>

            {/* Formulario Interactivo */}
            <div>
              {formSubmitted ? (
                <div className="form-success-banner">
                  <Check size={20} />
                  <div>
                    <strong>¡Mensaje enviado con éxito!</strong>
                    <p className="text-xs mt-1 mb-0">Gracias por contactarme. Te responderé en menos de 24 horas.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="contact-form">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-name">Nombre completo</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Ej: Laura González"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-email">Correo electrónico de contacto</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="laura@empresa.com"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-subject">Asunto</label>
                    <input
                      id="contact-subject"
                      type="text"
                      placeholder="Propuesta de proyecto / Oportunidad laboral"
                      className="form-input"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-message">Mensaje</label>
                    <textarea
                      id="contact-message"
                      required
                      placeholder="Hola Vicente, nos gustaría conversar contigo acerca de..."
                      className="form-textarea"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="btn btn-primary mt-2"
                  >
                    {isSending ? (
                      <span>Enviando mensaje...</span>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Enviar mensaje</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div>
            © {new Date().getFullYear()} Vicente Vergara · Desarrollador Frontend React & TypeScript
          </div>
          <div className="footer-links">
            <a href="#sobre-mi" className="hover:text-heading transition-colors">Sobre mí</a>
            <a href="#experiencia" className="hover:text-heading transition-colors">Experiencia</a>
            <a href="#proyectos" className="hover:text-heading transition-colors">Proyectos</a>
            <a href="#contacto" className="hover:text-heading transition-colors">Contacto</a>
          </div>
        </div>
      </footer>

      {/* PROJECT DETAIL MODAL / LIGHTBOX */}
      {activeProject && (
        <div className="modal-backdrop" onClick={() => setActiveProject(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h3 className="text-lg font-bold text-heading m-0">{activeProject.title}</h3>
                <p className="text-xs text-muted m-0">{activeProject.tagline}</p>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="modal-close-btn"
                aria-label="Cerrar modal"
              >
                <X size={18} />
              </button>
            </div>

            <div className="modal-body">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="modal-image"
                referrerPolicy="no-referrer"
              />

              <p className="text-sm text-heading leading-relaxed mb-3">
                {activeProject.description}
              </p>

              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                Hitos de Arquitectura y Rendimiento:
              </h4>
              <ul className="modal-highlights">
                {activeProject.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>

              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                Tecnologías Implementadas:
              </h4>
              <div className="flex flex-wrap gap-2 mb-4 text-xs">
                {activeProject.tech.map((t, i) => (
                  <span key={i} className="px-2.5 py-1 bg-surface-subtle border border-border rounded text-heading">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-border">
                <a
                  href={activeProject.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline text-xs"
                >
                  <GithubIcon size={14} />
                  <span>Ver repositorio</span>
                </a>
                <button
                  onClick={() => {
                    showToast('Abriendo demostración interactiva...');
                  }}
                  className="btn btn-primary text-xs"
                >
                  <ExternalLink size={14} />
                  <span>Probar demostración</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FLOATING TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="toast-notice" role="status">
          <Check size={16} />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

export default App;