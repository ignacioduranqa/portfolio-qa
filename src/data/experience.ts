export type Project = {
  name: string
  shortName: string
  description: string
  responsibilities: string[]
  featured?: boolean
}

export type Experience = {
  company: string
  role: string
  period: string
  description: string
  highlights?: string[]
  client?: string
  projects?: Project[]
}

export const experiences: Experience[] = [
  {
    company: 'MetroCapital',
    role: 'Práctica profesional - Desarrollador RPA',
    period: 'Junio 2023 - Agosto 2023',
    description:
      'Participé en proyectos de automatización de procesos utilizando Rocketbot y Python, apoyando la extracción y gestión de información desde páginas web y documentos PDF.',
    highlights: [
      'Desarrollo de automatizaciones con Rocketbot y Python.',
      'Extracción de información desde páginas web y archivos PDF.',
      'Elaboración de documentación técnica y manuales de usuario.',
      'Levantamiento de requerimientos con usuarios.',
    ],
  },
  {
    company: 'ACL Tecnología',
    role: 'Práctica profesional - Analista QA',
    period: 'Agosto 2024 - Diciembre 2024',
    description:
      'Realicé mi práctica profesional en el área de QA, adquiriendo conocimientos sobre pruebas de software, metodologías ágiles, gestión de incidencias y ambientes de prueba.',
    highlights: [
      'Diseño y ejecución de casos de prueba.',
      'Gestión básica de incidencias y ciclo de vida de defectos.',
      'Trabajo con ambientes y datos de prueba.',
      'Documentación y apoyo en actividades del área QA.',
    ],
  },
  {
    company: 'ACL Tecnología',
    role: 'Analista QA Funcional',
    period: '2025 - 2026',
    description:
      'Participé en proyectos web realizando diseño y ejecución de casos de prueba, revisión de historias de usuario, validación de criterios de aceptación, pruebas funcionales y de regresión, además de la gestión y seguimiento de incidencias.',
    highlights: [
      'Diseño, ejecución y documentación de casos de prueba.',
      'Validación de historias de usuario y criterios de aceptación.',
      'Pruebas funcionales, regresión, smoke y end-to-end.',
      'Gestión y seguimiento de incidencias.',
    ],
    client: 'AFC Chile',
    projects: [
      {
        name: 'Sucursal Virtual Empleadores',
        shortName: 'SVE',
        featured: true,
        description:
          'Proyecto principal en el que tuve una mayor participación, apoyando la validación de funcionalidades y el proceso de liberación a producción.',
        responsibilities: [
          'Diseño y ejecución de casos de prueba.',
          'Gestión y documentación de pruebas en Excel.',
          'Reporte y seguimiento de incidencias en Jira.',
          'Pruebas end-to-end integradas con AUE.',
          'Coordinación con desarrollo, QA y cliente.',
        ],
      },
      {
        name: 'Sucursal Virtual Afiliados',
        shortName: 'SVA',
        description:
          'Participación en la validación de funcionalidades orientadas a usuarios afiliados y revisión de cambios en historias de usuario.',
        responsibilities: [
          'Diseño y ejecución de casos de prueba funcionales.',
          'Revisión de historias de usuario y criterios de aceptación.',
          'Gestión y seguimiento de incidencias en Jira.',
          'Análisis de impacto y validación de modificaciones.',
          'Trabajo colaborativo con desarrollo y QA.',
        ],
      },
      {
        name: 'Administración de Usuarios Empresa',
        shortName: 'AUE',
        description:
          'Participación en la fase final del proyecto, validando flujos de usuarios, roles y empresas.',
        responsibilities: [
          'Ejecución de casos de prueba en la fase final del proyecto.',
          'Pruebas end-to-end integradas con SVE.',
          'Gestión de tokens de autenticación mediante Postman.',
          'Gestión de usuarios de prueba mediante Excel.',
          'Validación de correcciones con el equipo de desarrollo.',
        ],
      },
    ],
  },
]