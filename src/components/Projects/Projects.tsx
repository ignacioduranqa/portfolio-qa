import {
  FaCalendarAlt,
  FaCheck,
  FaExternalLinkAlt,
  FaGithub,
  FaReact,
} from 'react-icons/fa'

import {
  SiSupabase,
  SiTypescript,
  SiVite,
} from 'react-icons/si'

import Reveal from '../Reveal/Reveal'

import dinacPlannerImage from '../../assets/images/dinac-planner.png'

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
    liveUrl: 'https://dinac-planner.vercel.app/',
    githubUrl:
      'https://github.com/ignacioduranqa/dinac-planner',
    technologies: [
      {
        name: 'React',
        icon: FaReact,
      },
      {
        name: 'TypeScript',
        icon: SiTypescript,
      },
      {
        name: 'Vite',
        icon: SiVite,
      },
      {
        name: 'Supabase',
        icon: SiSupabase,
      },
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
]

function Projects() {
  return (
    <section
      className="projects"
      id="proyectos"
    >
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

                  <div className="projects__title-line" />

                  <p>
                    {project.description}
                  </p>

                  <p>
                    {project.secondaryDescription}
                  </p>

                  <div className="projects__technologies">
                    {project.technologies.map(
                      (technology) => {
                        const Icon =
                          technology.icon

                        return (
                          <span
                            className="projects__technology"
                            key={technology.name}
                          >
                            <Icon
                              aria-hidden="true"
                            />

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
                          <FaCheck
                            aria-hidden="true"
                          />

                          <span>{feature}</span>
                        </div>
                      ),
                    )}
                  </div>

                  <div className="projects__actions">
                    <a
                      className="projects__button projects__button--primary"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaCalendarAlt
                        aria-hidden="true"
                      />

                      <span>
                        Ver proyecto
                      </span>

                      <FaExternalLinkAlt
                        className="projects__button-external"
                        aria-hidden="true"
                      />
                    </a>

                    <a
                      className="projects__button projects__button--secondary"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub
                        aria-hidden="true"
                      />

                      <span>
                        Ver repositorio
                      </span>

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
                <div className="projects__visual">
                  <div className="projects__visual-glow" />

                  <div className="projects__laptop">
                    <div className="projects__screen">
                      <div className="projects__screen-top">
                        <span />
                        <span />
                        <span />

                        <div className="projects__screen-url">
                          dinac-planner.vercel.app
                        </div>
                      </div>

                      <div className="projects__screen-content">
                        <img
                          src={project.image}
                          alt={`Vista principal de ${project.title}`}
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

                    Proyecto publicado
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