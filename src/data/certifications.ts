
import rocketbotCertificate from '../assets/certificates/rocketbot.jpg'
import leadershipCertificate from '../assets/certificates/liderazgo.jpg'
import userStoriesCertificate from '../assets/certificates/user-stories.jpg'
import scrumCertificate from '../assets/certificates/scrum.jpg'

export type Language = 'es' | 'en'

export type LocalizedText = {
  es: string
  en: string
}

export type Certification = {
  id: string
  title: LocalizedText
  institution: string
  date: LocalizedText
  year: string
  category: LocalizedText
  description: LocalizedText
  credentialUrl: string
}

export const certifications: Certification[] = [
  {
    id: 'rocketbot',

    title: {
      es: 'Rocketbot Suite Level 1',
      en: 'Rocketbot Suite Level 1',
    },

    institution: 'Rocketbot',

    date: {
      es: 'Agosto 2023',
      en: 'August 2023',
    },

    year: '2023',

    category: {
      es: 'RPA',
      en: 'RPA',
    },

    description: {
      es: 'Certificación orientada al uso de Rocketbot para la automatización de procesos, creación de flujos y trabajo con herramientas RPA.',
      en: 'Certification focused on using Rocketbot for process automation, workflow creation, and working with Robotic Process Automation (RPA) tools.',
    },

    credentialUrl: rocketbotCertificate,
  },

  {
    id: 'leadership',

    title: {
      es: 'Liderazgo',
      en: 'Leadership',
    },

    institution: 'Santander',

    date: {
      es: 'Septiembre 2024',
      en: 'September 2024',
    },

    year: '2024',

    category: {
      es: 'Habilidades profesionales',
      en: 'Professional Skills',
    },

    description: {
      es: 'Formación enfocada en liderazgo, comunicación, trabajo colaborativo y desarrollo de habilidades aplicables a entornos profesionales.',
      en: 'Training focused on leadership, communication, teamwork, and developing skills applicable to professional environments.',
    },

    credentialUrl: leadershipCertificate,
  },

  {
    id: 'user-stories',

    title: {
      es: 'User Stories Foundations Certificate',
      en: 'User Stories Foundations Certificate',
    },

    institution: 'CertiProf',

    date: {
      es: 'Diciembre 2024',
      en: 'December 2024',
    },

    year: '2024',

    category: {
      es: 'Análisis funcional',
      en: 'Functional Analysis',
    },

    description: {
      es: 'Certificación enfocada en la creación, revisión y comprensión de historias de usuario, criterios de aceptación y valor para el negocio.',
      en: 'Certification focused on creating, reviewing, and understanding user stories, acceptance criteria, and business value.',
    },

    credentialUrl: userStoriesCertificate,
  },

  {
    id: 'scrum',

    title: {
      es: 'Scrum Master Professional Certificate',
      en: 'Scrum Master Professional Certificate',
    },

    institution: 'CertiProf',

    date: {
      es: 'Octubre 2025',
      en: 'October 2025',
    },

    year: '2025',

    category: {
      es: 'Metodologías ágiles',
      en: 'Agile Methodologies',
    },

    description: {
      es: 'Certificación sobre el marco de trabajo Scrum, sus roles, eventos, artefactos y principios para la gestión ágil de proyectos.',
      en: 'Certification covering the Scrum framework, its roles, events, artifacts, and principles for Agile project management.',
    },

    credentialUrl: scrumCertificate,
  },

  {
    id: 'qa-automation',

    title: {
      es: 'Carrera QA Automation',
      en: 'QA Automation Program',
    },

    institution: 'Academia QA',

    date: {
      es: '2026',
      en: '2026',
    },

    year: '2026',

    category: {
      es: 'Automatización',
      en: 'Test Automation',
    },

    description: {
      es: 'Formación de 70 horas de teoría y práctica sobre conceptos generales de automatización de pruebas de software y uso de herramientas de automatización.',
      en: 'A 70-hour training program combining theory and hands-on practice in software test automation concepts and the use of automation tools.',
    },

    credentialUrl:
      `${import.meta.env.BASE_URL}certificado-qa-automation.png`,
  },
]
