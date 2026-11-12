
export type Language = 'es' | 'en'

export type LocalizedText = {
  es: string
  en: string
}

export type Tool = {
  id: string
  name: string
  description: LocalizedText
  details: LocalizedText[]
}

export type LearningSkill = {
  id: string
  name: string
  status: LocalizedText
}

// ========================================
// HERRAMIENTAS
// ========================================

export const tools: Tool[] = [
  {
    id: 'jira',
    name: 'Jira',

    description: {
      es: 'Gestión y seguimiento de incidencias.',
      en: 'Defect management and tracking.',
    },

    details: [
      {
        es: 'Reporte y documentación de defectos.',
        en: 'Reporting and documenting defects.',
      },
      {
        es: 'Seguimiento del ciclo de vida de las incidencias.',
        en: 'Tracking defects throughout their lifecycle.',
      },
      {
        es: 'Administración de ejecuciones y planes de prueba.',
        en: 'Managing test executions and test plans.',
      },
      {
        es: 'Validación de correcciones implementadas.',
        en: 'Validating implemented defect fixes.',
      },
    ],
  },

  {
    id: 'postman',
    name: 'Postman',

    description: {
      es: 'Validación básica de APIs y autenticación.',
      en: 'Basic API and authentication validation.',
    },

    details: [
      {
        es: 'Creación y administración de tokens de autenticación.',
        en: 'Creating and managing authentication tokens.',
      },
      {
        es: 'Ejecución de solicitudes para apoyar pruebas funcionales.',
        en: 'Executing API requests to support functional testing.',
      },
      {
        es: 'Validaciones básicas de respuestas y estados HTTP.',
        en: 'Performing basic response and HTTP status code validations.',
      },
    ],
  },

  {
    id: 'mysql',
    name: 'SQL / MySQL',

    description: {
      es: 'Consultas y validaciones básicas de datos.',
      en: 'Basic database queries and data validation.',
    },

    details: [
      {
        es: 'Consultas utilizando SELECT y filtros con WHERE.',
        en: 'Writing queries using SELECT and WHERE filters.',
      },
      {
        es: 'Uso básico de JOIN para relacionar información.',
        en: 'Basic use of JOIN to combine related data.',
      },
      {
        es: 'Validación de datos como apoyo a las pruebas.',
        en: 'Validating data to support software testing.',
      },
    ],
  },

  {
    id: 'excel',
    name: 'Excel',

    description: {
      es: 'Matrices, evidencias y control de pruebas.',
      en: 'Test matrices, evidence, and test execution tracking.',
    },

    details: [
      {
        es: 'Diseño y documentación de casos de prueba.',
        en: 'Designing and documenting test cases.',
      },
      {
        es: 'Registro de resultados y evidencias.',
        en: 'Recording test results and evidence.',
      },
      {
        es: 'Control de ejecuciones y seguimiento del avance.',
        en: 'Tracking test executions and progress.',
      },
      {
        es: 'Administración de datos y usuarios de prueba.',
        en: 'Managing test data and test users.',
      },
    ],
  },

  {
    id: 'rocketbot',
    name: 'Rocketbot',

    description: {
      es: 'Automatización de procesos RPA.',
      en: 'Robotic Process Automation (RPA).',
    },

    details: [
      {
        es: 'Desarrollo de automatizaciones durante mi práctica profesional.',
        en: 'Developing automation workflows during my professional internship.',
      },
      {
        es: 'Extracción de información desde páginas web y archivos PDF.',
        en: 'Extracting information from websites and PDF files.',
      },
      {
        es: 'Apoyo en procesos desarrollados junto con Python.',
        en: 'Supporting automation processes developed with Python.',
      },
      {
        es: 'Elaboración de documentación técnica y manuales.',
        en: 'Preparing technical documentation and user manuals.',
      },
    ],
  },

  {
    id: 'python',
    name: 'Python',

    description: {
      es: 'Uso básico aplicado a automatización.',
      en: 'Basic Python skills applied to automation.',
    },

    details: [
      {
        es: 'Uso básico durante proyectos de automatización RPA.',
        en: 'Basic use of Python in RPA automation projects.',
      },
      {
        es: 'Procesamiento y extracción de información.',
        en: 'Processing and extracting information.',
      },
      {
        es: 'Trabajo con arreglos y librerías para documentos PDF.',
        en: 'Working with arrays and libraries for PDF document processing.',
      },
    ],
  },
]

// ========================================
// HERRAMIENTAS EN APRENDIZAJE
// ========================================

export const learningSkills: LearningSkill[] = [
  {
    id: 'selenium',
    name: 'Selenium WebDriver',
    status: {
      es: 'En aprendizaje',
      en: 'Currently learning',
    },
  },
  {
    id: 'playwright',
    name: 'Playwright',
    status: {
      es: 'En aprendizaje',
      en: 'Currently learning',
    },
  },
  {
    id: 'cypress',
    name: 'Cypress',
    status: {
      es: 'En aprendizaje',
      en: 'Currently learning',
    },
  },
  {
    id: 'katalon-web',
    name: 'Katalon Web',
    status: {
      es: 'En aprendizaje',
      en: 'Currently learning',
    },
  },
  {
    id: 'katalon-mobile',
    name: 'Katalon Mobile',
    status: {
      es: 'En aprendizaje',
      en: 'Currently learning',
    },
  },
]

// ========================================
// METODOLOGÍAS
// ========================================

export const methodologies = [
  'Scrum',
  'Historias de usuario',
  'Criterios de aceptación',
  'Gestión de incidencias',
  'Análisis de impacto',
]

// ========================================
// TIPOS DE PRUEBA
// ========================================

export const testingTypes = [
  'Pruebas funcionales',
  'Regresión',
  'Smoke',
  'End-to-End',
  'Caja negra',
  'Pruebas móviles',
]
