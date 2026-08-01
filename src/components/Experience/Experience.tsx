import { useState } from 'react'

import Reveal from '../Reveal/Reveal'

import './Experience.css'
import { experiences } from '../../data/experience'

function Experience() {
  const [openProject, setOpenProject] =
    useState<string | null>(null)

  function toggleProject(projectName: string) {
    setOpenProject((currentProject) =>
      currentProject === projectName
        ? null
        : projectName,
    )
  }

  return (
    <section
      className="experience"
      id="experiencia"
    >
      <Reveal
        direction="up"
        duration={700}
        distance={24}
      >
        <div className="experience__heading">
          <span className="experience__eyebrow">
            Mi trayectoria
          </span>

          <h2 className="experience__title">
            Experiencia
          </h2>

          <div
            className="experience__line"
            aria-hidden="true"
          />
        </div>
      </Reveal>

      <div className="experience__timeline">
        {experiences.map((experience, index) => (
          <Reveal
            key={`${experience.company}-${experience.role}-${experience.period}`}
            direction="up"
            delay={Math.min(index * 90, 180)}
            duration={700}
            distance={26}
            className="experience__card-reveal"
          >
            <article className="experience__card">
              <div
                className="experience__marker"
                aria-hidden="true"
              />

              <div className="experience__card-content">
                <span className="experience__period">
                  {experience.period}
                </span>

                <h3>{experience.company}</h3>

                <h4>{experience.role}</h4>

                <p>{experience.description}</p>

                {experience.highlights && (
                  <ul className="experience__highlights">
                    {experience.highlights.map(
                      (highlight) => (
                        <li key={highlight}>
                          {highlight}
                        </li>
                      ),
                    )}
                  </ul>
                )}

                {experience.client && (
                  <div className="experience__client">
                    <span>Cliente</span>

                    <strong>
                      {experience.client}
                    </strong>
                  </div>
                )}

                {experience.projects && (
                  <div className="experience__projects">
                    <h5>
                      Proyectos en los que participé
                    </h5>

                    <div className="experience__project-list">
                      {experience.projects.map(
                        (project) => {
                          const isOpen =
                            openProject ===
                            project.shortName

                          const detailsId =
                            `project-${project.shortName}-details`

                          return (
                            <article
                              className={`experience__project ${
                                project.featured
                                  ? 'experience__project--featured'
                                  : ''
                              } ${
                                isOpen
                                  ? 'experience__project--open'
                                  : ''
                              }`}
                              key={project.shortName}
                            >
                              <button
                                type="button"
                                className="experience__project-button"
                                onClick={() =>
                                  toggleProject(
                                    project.shortName,
                                  )
                                }
                                aria-expanded={isOpen}
                                aria-controls={detailsId}
                              >
                                <div className="experience__project-main">
                                  <div className="experience__project-labels">
                                    <span className="experience__project-code">
                                      {project.shortName}
                                    </span>

                                    {project.featured && (
                                      <span className="experience__project-featured">
                                        Proyecto principal
                                      </span>
                                    )}
                                  </div>

                                  <h6>{project.name}</h6>
                                </div>

                                <span
                                  className={`experience__project-arrow ${
                                    isOpen
                                      ? 'experience__project-arrow--open'
                                      : ''
                                  }`}
                                  aria-hidden="true"
                                >
                                  ▼
                                </span>
                              </button>

                              <div
                                className={`experience__project-details-wrapper ${
                                  isOpen
                                    ? 'experience__project-details-wrapper--open'
                                    : ''
                                }`}
                                id={detailsId}
                                aria-hidden={!isOpen}
                              >
                                <div className="experience__project-details">
                                  <p>
                                    {project.description}
                                  </p>

                                  <ul className="experience__project-responsibilities">
                                    {project.responsibilities.map(
                                      (
                                        responsibility,
                                      ) => (
                                        <li
                                          key={
                                            responsibility
                                          }
                                        >
                                          {
                                            responsibility
                                          }
                                        </li>
                                      ),
                                    )}
                                  </ul>
                                </div>
                              </div>
                            </article>
                          )
                        },
                      )}
                    </div>
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Experience