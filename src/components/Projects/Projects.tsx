
import {
  FaCalendarAlt,
  FaCheck,
  FaExternalLinkAlt,
  FaGithub,
  FaReact,
  FaJava,
  FaCode,
} from 'react-icons/fa'

import {
  SiSupabase,
  SiTypescript,
  SiVite,
  SiSelenium,
  SiApachemaven,
} from 'react-icons/si'

import Reveal from '../Reveal/Reveal'

import dinacPlannerImage from '../../assets/images/dinac-planner.png'
import qaAutomationImage from '../../assets/images/qa-automation.png'

import './Projects.css'

const projects = [
  {
    id: 'dinac-planner',
    type: 'Proyecto personal',
    title: 'Dinac Planner',
    description:
      'Aplicación web de agenda desarrollada para organizar eventos de forma sencilla mediante un calendario mensual, categorías, búsqueda, recordatorios y notificaciones.',
    secondaryDescription:
      'El proyecto incorpora operaciones CRUD conectadas a Supabase y una interfaz responsive adaptada para escritorio, tablet y dispositivos móviles.',
    image: dinacPlannerImage,
    imageLabel: 'dinac-planner.vercel.app',
    status: 'Proyecto publicado',
    liveUrl: 'https://dinac-planner.vercel.app/',
    githubUrl:
      'https://github.com/ignacioduranqa/dinac-planner',
    technologies: [
      { name: 'React', icon: FaReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Vite', icon: SiVite },
      { name: 'Supabase', icon: SiSupabase },
    ],
    features: [
      'Creación, edición y eliminación de eventos.',
      'Calendario mensual interactivo.',
      'Búsqueda y clasificación por categorías.',
      'Recordatorios y notificaciones.',
      'Persistencia de datos mediante Supabase.',
      'Diseño responsive para diferentes dispositivos.',
    ],
  },
  {
    id: 'qa-automation',
    type: 'Proyecto QA Automation',
    title: 'QA Automation',
    description:
      'Proyecto de automatización de pruebas funcionales sobre Automation Exercise, utilizando Java, Selenium WebDriver, JUnit 5 y Maven, con arquitectura Page Object Model (POM).',
    secondaryDescription:
      'Suite de 15 pruebas automatizadas que cubren flujos de registro, autenticación, catálogo, carrito y compra end-to-end, ejecutadas exitosamente sin fallos ni errores.',
    image: qaAutomationImage,
    imageLabel: 'github.com/ignacioduranqa',
    status: '15 pruebas ejecutadas',
    liveUrl: null,
    githubUrl:
      'https://github.com/ignacioduranqa/automation-exercise-java',
    technologies: [
      { name: 'Java', icon: FaJava },
      { name: 'Selenium', icon: SiSelenium },
      { name: 'JUnit 5', icon: FaCode },
      { name: 'Maven', icon: SiApachemaven },
    ],
    features: [
      '15 pruebas ejecutadas exitosamente.',
      'Arquitectura Page Object Model (POM).',
      'Pruebas funcionales y end-to-end.',
      'Selección dinámica de productos.',
      'Validación de precios y totales.',
      'Ejecución con Maven y JUnit 5.',
    ],
  },
]

function Projects() {
  return (
    <section className="projects" id="proyectos">
      <Reveal
        direction="up"
        duration={700}
        distance={24}
      >
        <div className="projects__heading">
          <span className="projects__eyebrow">
            Mi trabajo
          </span>

          <h2 className="projects__title">
            Proyectos
          </h2>

          <p className="projects__description">
            Proyectos personales en los que aplico
            conocimientos de desarrollo, calidad de software
            y nuevas herramientas.
          </p>

          <div
            className="projects__line"
            aria-hidden="true"
          />
        </div>
      </Reveal>

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
              <Reveal
                direction={
                  isReverse ? 'right' : 'left'
                }
                duration={750}
                distance={34}
                className="projects__content-reveal"
              >
                <div className="projects__content">
                  <span className="projects__project-type">
                    {project.type}
                  </span>

                  <h3>{project.title}</h3>

                  <div
                    className="projects__title-line"
                    aria-hidden="true"
                  />

                  <p>{project.description}</p>

                  <p>{project.secondaryDescription}</p>

                  <div className="projects__technologies">
                    {project.technologies.map(
                      (technology) => {
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
                      },
                    )}
                  </div>

                  <div className="projects__features">
                    {project.features.map(
                      (feature) => (
                        <div
                          className="projects__feature"
                          key={feature}
                        >
                          <FaCheck aria-hidden="true" />
                          <span>{feature}</span>
                        </div>
                      ),
                    )}
                  </div>

                  <div className="projects__actions">
                    {project.liveUrl && (
                      <a
                        className="projects__button projects__button--primary"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaCalendarAlt aria-hidden="true" />
                        <span>Ver proyecto</span>
                        <FaExternalLinkAlt
                          className="projects__button-external"
                          aria-hidden="true"
                        />
                      </a>
                    )}

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
                      <span>Ver repositorio</span>
                      <FaExternalLinkAlt
                        className="projects__button-external"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal
                direction={
                  isReverse ? 'left' : 'right'
                }
                delay={100}
                duration={850}
                distance={40}
                className="projects__visual-reveal"
              >
                <div
                  className={`projects__visual ${
                    project.id === 'qa-automation'
                      ? 'projects__visual--qa'
                      : ''
                  }`}
                >
                  <div className="projects__visual-glow" />

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
                          src={project.image}
                          alt={`Vista de ${project.title}`}
                        />
                      </div>
                    </div>

                    <div className="projects__laptop-bottom">
                      <div className="projects__laptop-notch" />
                    </div>

                    <div className="projects__laptop-shadow" />
                  </div>

                  <div className="projects__floating-label">
                    <span />
                    {project.status}
                  </div>
                </div>
              </Reveal>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
