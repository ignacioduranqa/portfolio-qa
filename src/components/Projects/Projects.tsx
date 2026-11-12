
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
  FaCalendarAlt,
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaGithub,
  FaReact,
  FaJava,
  FaCode,
  FaTheaterMasks,
} from 'react-icons/fa'

import {
  SiSupabase,
  SiTypescript,
  SiVite,
  SiSelenium,
  SiApachemaven,
  SiNodedotjs,
} from 'react-icons/si'

import Reveal from '../Reveal/Reveal'

import dinacPlannerImage from '../../assets/images/dinac-planner.png'
import qaAutomationImage from '../../assets/images/qa-automation.png'
import playwrightReport1 from '../../assets/images/playwright-report-1.png'
import playwrightReport2 from '../../assets/images/playwright-report-2.png'

import './Projects.css'

// ========================================
// TIPOS
// ========================================

type Language = 'es' | 'en'

type LocalizedText = {
  es: string
  en: string
}

// ========================================
// PROYECTOS
// ========================================

const projects = [
  {
    id: 'dinac-planner',

    type: {
      es: 'Proyecto personal',
      en: 'Personal Project',
    },

    title: 'Dinac Planner',

    description: {
      es: 'Aplicación web de agenda desarrollada para organizar eventos de forma sencilla mediante un calendario mensual, categorías, búsqueda, recordatorios y notificaciones.',
      en: 'A web-based planner designed to organize events through a monthly calendar, categories, search functionality, reminders, and notifications.',
    },

    secondaryDescription: {
      es: 'El proyecto incorpora operaciones CRUD conectadas a Supabase y una interfaz responsive adaptada para escritorio, tablet y dispositivos móviles.',
      en: 'The project includes CRUD operations connected to Supabase and a responsive interface optimized for desktop, tablet, and mobile devices.',
    },

    images: [dinacPlannerImage],
    imageLabel: 'dinac-planner.vercel.app',

    status: {
      es: 'Proyecto publicado',
      en: 'Live Project',
    },

    liveUrl: 'https://dinac-planner.vercel.app/',

    githubUrl:
      'https://github.com/ignacioduranqa/dinac-planner',

    device: 'laptop',

    technologies: [
      { name: 'React', icon: FaReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Vite', icon: SiVite },
      { name: 'Supabase', icon: SiSupabase },
    ],

    features: [
      {
        es: 'Creación, edición y eliminación de eventos.',
        en: 'Creating, editing, and deleting events.',
      },
      {
        es: 'Calendario mensual interactivo.',
        en: 'Interactive monthly calendar.',
      },
      {
        es: 'Búsqueda y clasificación por categorías.',
        en: 'Search and category-based organization.',
      },
      {
        es: 'Recordatorios y notificaciones.',
        en: 'Reminders and notifications.',
      },
      {
        es: 'Persistencia de datos mediante Supabase.',
        en: 'Data persistence using Supabase.',
      },
      {
        es: 'Diseño responsive para diferentes dispositivos.',
        en: 'Responsive design for different devices.',
      },
    ],
  },

  {
    id: 'qa-automation',

    type: {
      es: 'Proyecto QA Automation',
      en: 'QA Automation Project',
    },

    title: 'QA Automation',

    description: {
      es: 'Proyecto de automatización de pruebas funcionales sobre Automation Exercise, utilizando Java, Selenium WebDriver, JUnit 5 y Maven, con arquitectura Page Object Model (POM).',
      en: 'A functional test automation project for Automation Exercise, developed using Java, Selenium WebDriver, JUnit 5, and Maven, following the Page Object Model (POM) architecture.',
    },

    secondaryDescription: {
      es: 'Suite de 15 pruebas automatizadas que cubren flujos de registro, autenticación, catálogo, carrito y compra end-to-end, ejecutadas exitosamente sin fallos ni errores.',
      en: 'A suite of 15 automated tests covering registration, authentication, product catalog, shopping cart, and end-to-end checkout workflows, successfully executed without failures or errors.',
    },

    images: [qaAutomationImage],
    imageLabel: 'github.com/ignacioduranqa',

    status: {
      es: '15 pruebas ejecutadas',
      en: '15 Tests Executed',
    },

    liveUrl: null,

    githubUrl:
      'https://github.com/ignacioduranqa/automation-exercise-java',

    device: 'laptop',

    technologies: [
      { name: 'Java', icon: FaJava },
      { name: 'Selenium', icon: SiSelenium },
      { name: 'JUnit 5', icon: FaCode },
      { name: 'Maven', icon: SiApachemaven },
    ],

    features: [
      {
        es: '15 pruebas ejecutadas exitosamente.',
        en: '15 tests successfully executed.',
      },
      {
        es: 'Arquitectura Page Object Model (POM).',
        en: 'Page Object Model (POM) architecture.',
      },
      {
        es: 'Pruebas funcionales y end-to-end.',
        en: 'Functional and end-to-end testing.',
      },
      {
        es: 'Selección dinámica de productos.',
        en: 'Dynamic product selection.',
      },
      {
        es: 'Validación de precios y totales.',
        en: 'Price and total amount validation.',
      },
      {
        es: 'Ejecución con Maven y JUnit 5.',
        en: 'Test execution using Maven and JUnit 5.',
      },
    ],
  },

  {
    id: 'playwright-automation',

    type: {
      es: 'Proyecto QA Automation',
      en: 'QA Automation Project',
    },

    title: 'QA Automation | Playwright',

    description: {
      es: 'Proyecto de automatización de pruebas funcionales sobre SoloTodo, desarrollado con Playwright y TypeScript para validar diferentes funcionalidades de una plataforma web de comparación de productos.',
      en: 'A functional test automation project for SoloTodo, developed with Playwright and TypeScript to validate features of a product comparison website.',
    },

    secondaryDescription: {
      es: 'Incluye escenarios de navegación, búsqueda, filtros, ordenamiento, detalle de productos, favoritos, cambio de tema y autenticación, utilizando validaciones dinámicas y reportes de ejecución de Playwright.',
      en: 'Includes test scenarios for navigation, search, filtering, sorting, product details, favorites, theme switching, and authentication, using dynamic validations and Playwright test reports.',
    },

    images: [
      playwrightReport1,
      playwrightReport2,
    ],

    imageLabel: 'Playwright Test Report',

    status: {
      es: 'Reportes de ejecución',
      en: 'Test Execution Reports',
    },

    liveUrl: null,

    githubUrl:
      'https://github.com/ignacioduranqa/solotodo-playwright-qa',

    device: 'tablet',

    technologies: [
      { name: 'Playwright', icon: FaTheaterMasks },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Node.js', icon: SiNodedotjs },
    ],

    features: [
      {
        es: 'Pruebas funcionales automatizadas.',
        en: 'Automated functional testing.',
      },
      {
        es: 'Validación dinámica de productos.',
        en: 'Dynamic product validation.',
      },
      {
        es: 'Búsqueda, filtros y ordenamiento.',
        en: 'Search, filtering, and sorting.',
      },
      {
        es: 'Gestión de favoritos y autenticación.',
        en: 'Favorites management and authentication.',
      },
      {
        es: 'Reportes HTML y trazas de ejecución.',
        en: 'HTML reports and execution traces.',
      },
      {
        es: 'Validaciones de carga y visualización.',
        en: 'Image loading and display validation.',
      },
    ],
  },
] satisfies Array<{
  id: string
  type: LocalizedText
  title: string
  description: LocalizedText
  secondaryDescription: LocalizedText
  images: string[]
  imageLabel: string
  status: LocalizedText
  liveUrl: string | null
  githubUrl: string | null
  device: 'laptop' | 'tablet'
  technologies: Array<{
    name: string
    icon: React.ComponentType<{
      'aria-hidden'?: boolean | 'true' | 'false'
    }>
  }>
  features: LocalizedText[]
}>

type Project = (typeof projects)[number]

// ========================================
// VISUALIZACIÓN DEL PROYECTO
// ========================================

function ProjectVisual({
  project,
  language,
}: {
  project: Project
  language: Language
}) {
  const { t } = useTranslation()

  const [activeImage, setActiveImage] = useState(0)

  const isTablet = project.device === 'tablet'
  const hasMultipleImages = project.images.length > 1

  const changeImage = (direction: number) => {
    setActiveImage((current) =>
      (current + direction + project.images.length) %
      project.images.length,
    )
  }

  return (
    <div
      className={`projects__visual ${
        project.id === 'qa-automation'
          ? 'projects__visual--qa'
          : ''
      } ${
        isTablet ? 'projects__visual--tablet' : ''
      }`}
    >
      <div className="projects__visual-glow" />

      {isTablet ? (
        <div className="projects__tablet-gallery">
          <div className="projects__tablet">
            <div className="projects__tablet-camera" />

            <div className="projects__tablet-screen">
              <img
                src={project.images[activeImage]}
                alt={t('projects.reportImageAlt', {
                  current: activeImage + 1,
                  total: project.images.length,
                })}
                loading="lazy"
              />
            </div>
          </div>

          {/* CONTROLES DEL CARRUSEL */}

          {hasMultipleImages && (
            <div
              className="projects__gallery-controls"
              aria-label={t('projects.galleryControls')}
            >
              <button
                type="button"
                className="projects__gallery-arrow"
                onClick={() => changeImage(-1)}
                aria-label={t('projects.previousImage')}
              >
                <FaChevronLeft aria-hidden="true" />
              </button>

              <div className="projects__gallery-dots">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`projects__gallery-dot ${
                      activeImage === index
                        ? 'projects__gallery-dot--active'
                        : ''
                    }`}
                    onClick={() => setActiveImage(index)}
                    aria-label={t('projects.viewImage', {
                      number: index + 1,
                    })}
                    aria-current={
                      activeImage === index
                        ? 'true'
                        : undefined
                    }
                  />
                ))}
              </div>

              <button
                type="button"
                className="projects__gallery-arrow"
                onClick={() => changeImage(1)}
                aria-label={t('projects.nextImage')}
              >
                <FaChevronRight aria-hidden="true" />
              </button>
            </div>
          )}

          <span className="projects__gallery-counter">
            {activeImage + 1} / {project.images.length}
          </span>
        </div>
      ) : (
        <div className="projects__laptop">
          <div className="projects__screen">
            <div className="projects__screen-top">
              <span />
              <span />
              <span />

              <div className="projects__screen-url">
                {project.imageLabel}
              </div>
            </div>

            <div className="projects__screen-content">
              <img
                src={project.images[0]}
                alt={t('projects.projectImageAlt', {
                  title: project.title,
                })}
                loading="lazy"
              />
            </div>
          </div>

          <div className="projects__laptop-bottom">
            <div className="projects__laptop-notch" />
          </div>

          <div className="projects__laptop-shadow" />
        </div>
      )}

      <div className="projects__floating-label">
        <span />
        {project.status[language]}
      </div>
    </div>
  )
}

// ========================================
// COMPONENTE PRINCIPAL
// ========================================

function Projects() {
  const { t, i18n } = useTranslation()

  const language: Language =
    i18n.resolvedLanguage === 'en'
      ? 'en'
      : 'es'

  return (
    <section className="projects" id="proyectos">
      {/* ENCABEZADO */}

      <Reveal
        direction="up"
        duration={700}
        distance={24}
      >
        <div className="projects__heading">
          <span className="projects__eyebrow">
            {t('projects.eyebrow')}
          </span>

          <h2 className="projects__title">
            {t('projects.title')}
          </h2>

          <p className="projects__description">
            {t('projects.description')}
          </p>

          <div
            className="projects__line"
            aria-hidden="true"
          />
        </div>
      </Reveal>

      {/* LISTADO DE PROYECTOS */}

      <div className="projects__container">
        {projects.map((project, index) => {
          const isReverse = index % 2 !== 0

          return (
            <article
              className={`projects__project ${
                isReverse
                  ? 'projects__project--reverse'
                  : ''
              }`}
              key={project.id}
            >
              {/* INFORMACIÓN */}

              <Reveal
                direction={isReverse ? 'right' : 'left'}
                duration={750}
                distance={34}
                className="projects__content-reveal"
              >
                <div className="projects__content">
                  <span className="projects__project-type">
                    {project.type[language]}
                  </span>

                  <h3>{project.title}</h3>

                  <div
                    className="projects__title-line"
                    aria-hidden="true"
                  />

                  <p>
                    {project.description[language]}
                  </p>

                  <p>
                    {project.secondaryDescription[language]}
                  </p>

                  {/* TECNOLOGÍAS */}

                  <div className="projects__technologies">
                    {project.technologies.map((technology) => {
                      const Icon = technology.icon

                      return (
                        <span
                          className="projects__technology"
                          key={technology.name}
                        >
                          <Icon aria-hidden="true" />
                          {technology.name}
                        </span>
                      )
                    })}
                  </div>

                  {/* CARACTERÍSTICAS */}

                  <div className="projects__features">
                    {project.features.map((feature, index) => (
                      <div
                        className="projects__feature"
                        key={`${project.id}-feature-${index}`}
                      >
                        <FaCheck aria-hidden="true" />
                        <span>
                          {feature[language]}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* ENLACES */}

                  <div className="projects__actions">
                    {project.liveUrl && (
                      <a
                        className="projects__button projects__button--primary"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaCalendarAlt aria-hidden="true" />

                        <span>
                          {t('projects.viewProject')}
                        </span>

                        <FaExternalLinkAlt
                          className="projects__button-external"
                          aria-hidden="true"
                        />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        className={`projects__button ${
                          project.liveUrl
                            ? 'projects__button--secondary'
                            : 'projects__button--primary'
                        }`}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub aria-hidden="true" />

                        <span>
                          {t('projects.viewRepository')}
                        </span>

                        <FaExternalLinkAlt
                          className="projects__button-external"
                          aria-hidden="true"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>

              {/* VISUALIZACIÓN */}

              <Reveal
                direction={isReverse ? 'left' : 'right'}
                delay={100}
                duration={850}
                distance={40}
                className="projects__visual-reveal"
              >
                <ProjectVisual
                  project={project}
                  language={language}
                />
              </Reveal>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
