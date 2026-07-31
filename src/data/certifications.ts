import rocketbotCertificate from '../assets/certificates/rocketbot.jpg'
import leadershipCertificate from '../assets/certificates/liderazgo.jpg'
import userStoriesCertificate from '../assets/certificates/user-stories.jpg'
import scrumCertificate from '../assets/certificates/scrum.jpg'

export type Certification = {
  id: string
  title: string
  institution: string
  date: string
  year: string
  category: string
  description: string
  credentialUrl: string
}

export const certifications: Certification[] = [
  {
    id: 'rocketbot',
    title: 'Rocketbot Suite Level 1',
    institution: 'Rocketbot',
    date: 'Agosto 2023',
    year: '2023',
    category: 'RPA',
    description:
      'Certificación orientada al uso de Rocketbot para la automatización de procesos, creación de flujos y trabajo con herramientas RPA.',
    credentialUrl: rocketbotCertificate,
  },
  {
    id: 'leadership',
    title: 'Liderazgo',
    institution: 'Santander',
    date: 'Septiembre 2024',
    year: '2024',
    category: 'Habilidades profesionales',
    description:
      'Formación enfocada en liderazgo, comunicación, trabajo colaborativo y desarrollo de habilidades aplicables a entornos profesionales.',
    credentialUrl: leadershipCertificate,
  },
  {
    id: 'user-stories',
    title: 'User Stories Foundations Certificate',
    institution: 'CertiProf',
    date: 'Diciembre 2024',
    year: '2024',
    category: 'Análisis funcional',
    description:
      'Certificación enfocada en la creación, revisión y comprensión de historias de usuario, criterios de aceptación y valor para el negocio.',
    credentialUrl: userStoriesCertificate,
  },
  {
    id: 'scrum',
    title: 'Scrum Master Professional Certificate',
    institution: 'CertiProf',
    date: 'Octubre 2025',
    year: '2025',
    category: 'Metodologías ágiles',
    description:
      'Certificación sobre el marco de trabajo Scrum, sus roles, eventos, artefactos y principios para la gestión ágil de proyectos.',
    credentialUrl: scrumCertificate,
  },
]