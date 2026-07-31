export type Tool = {
  id: string
  name: string
  description: string
  details: string[]
}

export type LearningSkill = {
  id: string
  name: string
  status: 'En aprendizaje'
}

export const tools: Tool[] = [
  {
    id: 'jira',
    name: 'Jira',
    description: 'Gestión y seguimiento de incidencias.',
    details: [
      'Reporte y documentación de defectos.',
      'Seguimiento del ciclo de vida de las incidencias.',
      'Administración de ejecuciones y planes de prueba.',
      'Validación de correcciones implementadas.',
    ],
  },
  {
    id: 'postman',
    name: 'Postman',
    description: 'Validación básica de APIs y autenticación.',
    details: [
      'Creación y administración de tokens de autenticación.',
      'Ejecución de solicitudes para apoyar pruebas funcionales.',
      'Validaciones básicas de respuestas y estados HTTP.',
    ],
  },
  {
    id: 'mysql',
    name: 'SQL / MySQL',
    description: 'Consultas y validaciones básicas de datos.',
    details: [
      'Consultas utilizando SELECT y filtros con WHERE.',
      'Uso básico de JOIN para relacionar información.',
      'Validación de datos como apoyo a las pruebas.',
    ],
  },
  {
    id: 'excel',
    name: 'Excel',
    description: 'Matrices, evidencias y control de pruebas.',
    details: [
      'Diseño y documentación de casos de prueba.',
      'Registro de resultados y evidencias.',
      'Control de ejecuciones y seguimiento del avance.',
      'Administración de datos y usuarios de prueba.',
    ],
  },
  {
    id: 'rocketbot',
    name: 'Rocketbot',
    description: 'Automatización de procesos RPA.',
    details: [
      'Desarrollo de automatizaciones durante mi práctica profesional.',
      'Extracción de información desde páginas web y archivos PDF.',
      'Apoyo en procesos desarrollados junto con Python.',
      'Elaboración de documentación técnica y manuales.',
    ],
  },
  {
    id: 'python',
    name: 'Python',
    description: 'Uso básico aplicado a automatización.',
    details: [
      'Uso básico durante proyectos de automatización RPA.',
      'Procesamiento y extracción de información.',
      'Trabajo con arreglos y librerías para documentos PDF.',
    ],
  },
]

export const learningSkills: LearningSkill[] = [
  {
    id: 'selenium',
    name: 'Selenium WebDriver',
    status: 'En aprendizaje',
  },
  {
    id: 'playwright',
    name: 'Playwright',
    status: 'En aprendizaje',
  },
  {
    id: 'cypress',
    name: 'Cypress',
    status: 'En aprendizaje',
  },
  {
    id: 'katalon-web',
    name: 'Katalon Web',
    status: 'En aprendizaje',
  },
  {
    id: 'katalon-mobile',
    name: 'Katalon Mobile',
    status: 'En aprendizaje',
  },
]

export const methodologies = [
  'Scrum',
  'Historias de usuario',
  'Criterios de aceptación',
  'Gestión de incidencias',
  'Análisis de impacto',
]

export const testingTypes = [
  'Pruebas funcionales',
  'Regresión',
  'Smoke',
  'End-to-End',
  'Caja negra',
  'Pruebas móviles',
]