
export type Language = 'es' | 'en'

export type LocalizedText = {
  es: string
  en: string
}

export type Project = {
  name: LocalizedText
  shortName: string
  description: LocalizedText
  responsibilities: LocalizedText[]
  featured?: boolean
}

export type Experience = {
  company: string
  role: LocalizedText
  period: LocalizedText
  description: LocalizedText
  highlights?: LocalizedText[]
  client?: string
  projects?: Project[]
}

export const experiences: Experience[] = [
  {
    company: 'MetroCapital',

    role: {
      es: 'Práctica profesional - Desarrollador RPA',
      en: 'Professional Internship - RPA Developer',
    },

    period: {
      es: 'Junio 2023 - Agosto 2023',
      en: 'June 2023 - August 2023',
    },

    description: {
      es: 'Participé en proyectos de automatización de procesos utilizando Rocketbot y Python, apoyando la extracción y gestión de información desde páginas web y documentos PDF.',
      en: 'I participated in process automation projects using Rocketbot and Python, supporting data extraction and information management from websites and PDF documents.',
    },

    highlights: [
      {
        es: 'Desarrollo de automatizaciones con Rocketbot y Python.',
        en: 'Development of automation workflows using Rocketbot and Python.',
      },
      {
        es: 'Extracción de información desde páginas web y archivos PDF.',
        en: 'Data extraction from websites and PDF files.',
      },
      {
        es: 'Elaboración de documentación técnica y manuales de usuario.',
        en: 'Preparation of technical documentation and user manuals.',
      },
      {
        es: 'Levantamiento de requerimientos con usuarios.',
        en: 'Gathering requirements from users.',
      },
    ],
  },

  {
    company: 'ACL Tecnología',

    role: {
      es: 'Práctica profesional - Analista QA',
      en: 'Professional Internship - QA Analyst',
    },

    period: {
      es: 'Agosto 2024 - Diciembre 2024',
      en: 'August 2024 - December 2024',
    },

    description: {
      es: 'Realicé mi práctica profesional en el área de QA, adquiriendo conocimientos sobre pruebas de software, metodologías ágiles, gestión de incidencias y ambientes de prueba.',
      en: 'I completed my professional internship in Quality Assurance, gaining knowledge of software testing, Agile methodologies, defect management, and test environments.',
    },

    highlights: [
      {
        es: 'Diseño y ejecución de casos de prueba.',
        en: 'Design and execution of test cases.',
      },
      {
        es: 'Gestión básica de incidencias y ciclo de vida de defectos.',
        en: 'Basic defect management and understanding of the defect lifecycle.',
      },
      {
        es: 'Trabajo con ambientes y datos de prueba.',
        en: 'Working with test environments and test data.',
      },
      {
        es: 'Documentación y apoyo en actividades del área QA.',
        en: 'Documentation and support for QA activities.',
      },
    ],
  },

  {
    company: 'ACL Tecnología',

    role: {
      es: 'Analista QA Funcional',
      en: 'Functional QA Analyst',
    },

    period: {
      es: 'Diciembre 2025 - Enero 2026',
      en: 'December 2025 - January 2026',
    },

    description: {
      es: 'Participé en proyectos web realizando diseño y ejecución de casos de prueba, revisión de historias de usuario, validación de criterios de aceptación, pruebas funcionales y de regresión, además de la gestión y seguimiento de incidencias.',
      en: 'I worked on web projects, designing and executing test cases, reviewing user stories, validating acceptance criteria, performing functional and regression testing, and reporting and tracking defects.',
    },

    highlights: [
      {
        es: 'Diseño, ejecución y documentación de casos de prueba.',
        en: 'Design, execution, and documentation of test cases.',
      },
      {
        es: 'Validación de historias de usuario y criterios de aceptación.',
        en: 'Validation of user stories and acceptance criteria.',
      },
      {
        es: 'Pruebas funcionales, regresión, smoke y end-to-end.',
        en: 'Functional, regression, smoke, and end-to-end testing.',
      },
      {
        es: 'Gestión y seguimiento de incidencias.',
        en: 'Defect reporting and tracking.',
      },
    ],

    client: 'AFC Chile',

    projects: [
      {
        name: {
          es: 'Sucursal Virtual Empleadores',
          en: 'Employer Virtual Branch',
        },

        shortName: 'SVE',
        featured: true,

        description: {
          es: 'Proyecto principal en el que tuve una mayor participación, apoyando la validación de funcionalidades y el proceso de liberación a producción.',
          en: 'My main project, where I was most involved in validating features and supporting the production release process.',
        },

        responsibilities: [
          {
            es: 'Diseño y ejecución de casos de prueba.',
            en: 'Design and execution of test cases.',
          },
          {
            es: 'Gestión y documentación de pruebas en Excel.',
            en: 'Test management and documentation using Excel.',
          },
          {
            es: 'Reporte y seguimiento de incidencias en Jira.',
            en: 'Defect reporting and tracking using Jira.',
          },
          {
            es: 'Pruebas end-to-end integradas con AUE.',
            en: 'End-to-end testing integrated with AUE.',
          },
          {
            es: 'Coordinación con desarrollo, QA y cliente.',
            en: 'Coordination with development, QA, and client teams.',
          },
        ],
      },

      {
        name: {
          es: 'Sucursal Virtual Afiliados',
          en: 'Member Virtual Branch',
        },

        shortName: 'SVA',

        description: {
          es: 'Participación en la validación de funcionalidades orientadas a usuarios afiliados y revisión de cambios en historias de usuario.',
          en: 'Participated in validating features for affiliated users and reviewing changes to user stories.',
        },

        responsibilities: [
          {
            es: 'Diseño y ejecución de casos de prueba funcionales.',
            en: 'Design and execution of functional test cases.',
          },
          {
            es: 'Revisión de historias de usuario y criterios de aceptación.',
            en: 'Review of user stories and acceptance criteria.',
          },
          {
            es: 'Gestión y seguimiento de incidencias en Jira.',
            en: 'Defect reporting and tracking using Jira.',
          },
          {
            es: 'Análisis de impacto y validación de modificaciones.',
            en: 'Impact analysis and validation of changes.',
          },
          {
            es: 'Trabajo colaborativo con desarrollo y QA.',
            en: 'Collaboration with development and QA teams.',
          },
        ],
      },

      {
        name: {
          es: 'Administración de Usuarios Empresa',
          en: 'Company User Administration',
        },

        shortName: 'AUE',

        description: {
          es: 'Participación en la fase final del proyecto, validando flujos de usuarios, roles y empresas.',
          en: 'Participated in the final phase of the project, validating user workflows, roles, and company-related features.',
        },

        responsibilities: [
          {
            es: 'Ejecución de casos de prueba en la fase final del proyecto.',
            en: 'Execution of test cases during the final project phase.',
          },
          {
            es: 'Pruebas end-to-end integradas con SVE.',
            en: 'End-to-end testing integrated with SVE.',
          },
          {
            es: 'Gestión de tokens de autenticación mediante Postman.',
            en: 'Authentication token management using Postman.',
          },
          {
            es: 'Gestión de usuarios de prueba mediante Excel.',
            en: 'Test user management using Excel.',
          },
          {
            es: 'Validación de correcciones con el equipo de desarrollo.',
            en: 'Validation of defect fixes with the development team.',
          },
        ],
      },
    ],
  },
]
