
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  es: {
    translation: {
      // ========================================
      // NAVBAR
      // ========================================

      navbar: {
        home: 'Ir al inicio',
        about: 'Sobre mí',
        experience: 'Experiencia',
        skills: 'Habilidades',
        certifications: 'Certificaciones',
        projects: 'Proyectos',
        contact: 'Contacto',
        navigation: 'Navegación principal',
        openMenu: 'Abrir menú',
        closeMenu: 'Cerrar menú',
        closeNavigation: 'Cerrar menú de navegación',
        language: 'Idioma',
      },

      // ========================================
      // HERO
      // ========================================

      hero: {
        greeting: 'Hola, soy',
        role: 'Analista QA Funcional',

        description:
          'Cuento con experiencia en pruebas funcionales, revisión de historias de usuario, validación de criterios de aceptación y gestión de incidencias.',

        viewProjects: 'Ver proyectos',
        downloadCv: 'Descargar CV',
        downloadCvLabel:
          'Descargar currículum de Ignacio Durán',

        qualityStatus: 'Calidad en cada entrega',
        testingBadge: 'Functional Testing',
        qualityBadge: 'Quality First',
      },

      // ========================================
      // SOBRE MÍ
      // ========================================

      about: {
        eyebrow: 'Conóceme',
        title: 'Sobre mí',
        role: 'Analista QA Funcional',

        imageAlt:
          'Ignacio Durán, Analista QA Funcional',

        paragraph1:
          'Soy Analista QA Funcional con experiencia en proyectos web. He participado en el diseño y ejecución de casos de prueba, revisión de historias de usuario, validación de criterios de aceptación y ejecución de pruebas funcionales y de regresión. También he gestionado y realizado seguimiento de incidencias mediante Jira.',

        paragraph2:
          'Participé en proyectos para AFC Chile bajo metodología Scrum, colaborando con equipos de desarrollo, QA y negocio para asegurar la calidad de las funcionalidades antes de su liberación.',

        paragraph3:
          'Me interesa seguir creciendo en el área de Calidad de Software, aportando mediante pruebas funcionales, comunicación efectiva y mejora continua de los procesos de calidad.',

        highlights: {
          webProjects: {
            title: 'Experiencia en proyectos web',
            description:
              'Validación de funcionalidades y flujos de negocio.',
          },

          scrum: {
            title: 'Trabajo bajo Scrum',
            description:
              'Participación en ceremonias y coordinación con el equipo.',
          },

          collaboration: {
            title: 'Trabajo colaborativo',
            description:
              'Comunicación con desarrollo, QA y áreas de negocio.',
          },

          quality: {
            title: 'Enfoque en calidad',
            description:
              'Seguimiento de incidencias y mejora continua.',
          },
        },

        contactQuestion: '¿Buscas un Analista QA?',
        contactButton: 'Hablemos',
      },

      // ========================================
      // EXPERIENCIA
      // ========================================

      experience: {
        eyebrow: 'Mi trayectoria',
        title: 'Experiencia',
        client: 'Cliente',
        projectsTitle: 'Proyectos en los que participé',
        featured: 'Proyecto principal',

        recommendation: {
          eyebrow: 'Respaldo profesional',
          title: 'Recomendación profesional',

          description:
            'Carta que respalda mi experiencia y desempeño como Analista QA Funcional.',

          button: 'Ver recomendación',
        },
      },

      // ========================================
      // HABILIDADES
      // ========================================

      skills: {
        eyebrow: 'Mi caja de herramientas',
        title: 'Herramientas y conocimientos',

        description:
          'Herramientas, metodologías y tipos de pruebas que he utilizado durante mi experiencia y formación en calidad de software.',

        toolsTitle: 'Herramientas',
        professionalUse: 'Uso profesional',
        methodologiesTitle: 'Metodologías y análisis',
        testingTypesTitle: 'Tipos de prueba',

        methodologies: {
          scrum: 'Scrum',
          userStories: 'Historias de usuario',
          acceptanceCriteria: 'Criterios de aceptación',
          defectManagement: 'Gestión de incidencias',
          impactAnalysis: 'Análisis de impacto',
        },

        testingTypes: {
          functional: 'Pruebas funcionales',
          regression: 'Regresión',
          smoke: 'Smoke',
          endToEnd: 'End-to-End',
          blackBox: 'Caja negra',
          mobile: 'Pruebas móviles',
        },
      },

      // ========================================
      // CERTIFICACIONES
      // ========================================

      certifications: {
        eyebrow: 'Aprendizaje continuo',
        title: 'Formación y certificaciones',

        description:
          'Certificaciones que complementan mi experiencia profesional y fortalecen mis conocimientos en QA, metodologías ágiles, automatización y trabajo colaborativo.',

        viewCredential: 'Ver credencial',
        viewCredentialLabel:
          'Ver credencial de {{title}}',
      },

      // ========================================
      // PROYECTOS
      // ========================================

      projects: {
        eyebrow: 'Mi trabajo',
        title: 'Proyectos',

        description:
          'Proyectos personales en los que aplico conocimientos de desarrollo, calidad de software y nuevas herramientas.',

        viewProject: 'Ver proyecto',
        viewRepository: 'Ver repositorio',

        projectImageAlt:
          'Vista de {{title}}',

        reportImageAlt:
          'Reporte Playwright, captura {{current}} de {{total}}',

        galleryControls:
          'Controles de capturas Playwright',

        previousImage: 'Ver captura anterior',
        nextImage: 'Ver siguiente captura',
        viewImage: 'Ver captura {{number}}',
      },

      // ========================================
      // CONTACTO
      // ========================================

      contact: {
        eyebrow: 'Contacto directo',
        title: 'Hablemos',

        description:
          'Estoy disponible para nuevas oportunidades como Analista QA Funcional. Puedes contactarme por correo o LinkedIn para conversar.',

        email: 'Correo',

        emailLabel:
          'Enviar correo a Ignacio Durán',

        linkedinLabel:
          'Visitar LinkedIn de Ignacio Durán',

        githubLabel:
          'Visitar GitHub de Ignacio Durán',
      },

      // ========================================
      // FOOTER
      // ========================================

      footer: {
        role: 'Analista QA Funcional',
        backToTop: 'Volver arriba',
      },
    },
  },

  en: {
    translation: {
      // ========================================
      // NAVBAR
      // ========================================

      navbar: {
        home: 'Go to home',
        about: 'About me',
        experience: 'Experience',
        skills: 'Skills',
        certifications: 'Certifications',
        projects: 'Projects',
        contact: 'Contact',
        navigation: 'Main navigation',
        openMenu: 'Open menu',
        closeMenu: 'Close menu',
        closeNavigation: 'Close navigation menu',
        language: 'Language',
      },

      // ========================================
      // HERO
      // ========================================

      hero: {
        greeting: "Hi, I'm",
        role: 'Functional QA Analyst',

        description:
          'I have experience in functional testing, reviewing user stories, validating acceptance criteria, and tracking and managing defects.',

        viewProjects: 'View projects',
        downloadCv: 'Download CV',

        downloadCvLabel:
          "Download Ignacio Durán's résumé",

        qualityStatus: 'Quality in every delivery',
        testingBadge: 'Functional Testing',
        qualityBadge: 'Quality First',
      },

      // ========================================
      // ABOUT ME
      // ========================================

      about: {
        eyebrow: 'Get to know me',
        title: 'About me',
        role: 'Functional QA Analyst',

        imageAlt:
          'Ignacio Durán, Functional QA Analyst',

        paragraph1:
          'I am a Functional QA Analyst with experience in web projects. I have worked on designing and executing test cases, reviewing user stories, validating acceptance criteria, and performing functional and regression testing. I have also reported and tracked defects using Jira.',

        paragraph2:
          'I worked on projects for AFC Chile using Scrum, collaborating with development, QA, and business teams to ensure the quality of features before release.',

        paragraph3:
          'I am interested in continuing to grow in Software Quality Assurance, contributing through functional testing, effective communication, and continuous improvement of quality processes.',

        highlights: {
          webProjects: {
            title: 'Web project experience',
            description:
              'Validation of features and business workflows.',
          },

          scrum: {
            title: 'Experience with Scrum',
            description:
              'Participation in Scrum ceremonies and team coordination.',
          },

          collaboration: {
            title: 'Team collaboration',
            description:
              'Communication with development, QA, and business teams.',
          },

          quality: {
            title: 'Quality-focused approach',
            description:
              'Defect tracking and continuous improvement.',
          },
        },

        contactQuestion:
          'Looking for a QA Analyst?',

        contactButton: "Let's talk",
      },

      // ========================================
      // EXPERIENCE
      // ========================================

      experience: {
        eyebrow: 'My career journey',
        title: 'Experience',
        client: 'Client',

        projectsTitle:
          'Projects I worked on',

        featured: 'Main project',

        recommendation: {
          eyebrow: 'Professional endorsement',
          title: 'Professional recommendation',

          description:
            'A recommendation letter highlighting my experience and performance as a Functional QA Analyst.',

          button: 'View recommendation',
        },
      },

      // ========================================
      // SKILLS
      // ========================================

      skills: {
        eyebrow: 'My toolkit',
        title: 'Tools and Skills',

        description:
          'Tools, methodologies, and testing techniques I have used throughout my professional experience and software quality assurance training.',

        toolsTitle: 'Tools',
        professionalUse: 'Professional experience',
        methodologiesTitle: 'Methodologies and Analysis',
        testingTypesTitle: 'Testing Types',

        methodologies: {
          scrum: 'Scrum',
          userStories: 'User Stories',
          acceptanceCriteria: 'Acceptance Criteria',
          defectManagement: 'Defect Management',
          impactAnalysis: 'Impact Analysis',
        },

        testingTypes: {
          functional: 'Functional Testing',
          regression: 'Regression Testing',
          smoke: 'Smoke Testing',
          endToEnd: 'End-to-End Testing',
          blackBox: 'Black-Box Testing',
          mobile: 'Mobile Testing',
        },
      },

      // ========================================
      // CERTIFICATIONS
      // ========================================

      certifications: {
        eyebrow: 'Continuous Learning',
        title: 'Education and Certifications',

        description:
          'Certifications that complement my professional experience and strengthen my knowledge of software quality assurance, Agile methodologies, automation, and teamwork.',

        viewCredential: 'View Credential',
        viewCredentialLabel:
          'View credential for {{title}}',
      },

      // ========================================
      // PROJECTS
      // ========================================

      projects: {
        eyebrow: 'My Work',
        title: 'Projects',

        description:
          'Personal projects where I apply my knowledge of software development, quality assurance, and new technologies.',

        viewProject: 'View Project',
        viewRepository: 'View Repository',

        projectImageAlt:
          'Preview of {{title}}',

        reportImageAlt:
          'Playwright report, screenshot {{current}} of {{total}}',

        galleryControls:
          'Playwright screenshot controls',

        previousImage:
          'View previous screenshot',

        nextImage:
          'View next screenshot',

        viewImage:
          'View screenshot {{number}}',
      },

      // ========================================
      // CONTACT
      // ========================================

      contact: {
        eyebrow: 'Get in Touch',
        title: "Let's Talk",

        description:
          'I am open to new opportunities as a Functional QA Analyst. Feel free to contact me by email or LinkedIn to connect and discuss potential opportunities.',

        email: 'Email',

        emailLabel:
          'Send an email to Ignacio Durán',

        linkedinLabel:
          "Visit Ignacio Durán's LinkedIn profile",

        githubLabel:
          "Visit Ignacio Durán's GitHub profile",
      },

      // ========================================
      // FOOTER
      // ========================================

      footer: {
        role: 'Functional QA Analyst',
        backToTop: 'Back to Top',
      },
    },
  },
}

// ========================================
// IDIOMA INICIAL
// ========================================

const getInitialLanguage = (): 'es' | 'en' => {
  try {
    const savedLanguage =
      localStorage.getItem('portfolio-language')

    if (
      savedLanguage === 'es' ||
      savedLanguage === 'en'
    ) {
      return savedLanguage
    }
  } catch {
    // Utilizar español si localStorage no está disponible.
  }

  return 'es'
}

// ========================================
// CONFIGURACIÓN I18NEXT
// ========================================

void i18n.use(initReactI18next).init({
  resources,

  lng: getInitialLanguage(),

  fallbackLng: 'es',

  supportedLngs: ['es', 'en'],

  interpolation: {
    escapeValue: false,
  },

  react: {
    useSuspense: false,
  },
})

export default i18n
