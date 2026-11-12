
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
  FaExternalLinkAlt,
  FaFileSignature,
} from 'react-icons/fa'

import Reveal from '../Reveal/Reveal'

import './Experience.css'

import {
  experiences,
  type Language,
} from '../../data/experience'

function Experience() {
  const { t, i18n } = useTranslation()

  const language: Language =
    i18n.resolvedLanguage === 'en' ? 'en' : 'es'

  const [openProject, setOpenProject] =
    useState<string | null>(null)

  const recommendationUrl =
    `${import.meta.env.BASE_URL}Carta_Recomendacion_Publica.pdf`

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
            {t('experience.eyebrow')}
          </span>

          <h2 className="experience__title">
            {t('experience.title')}
          </h2>

          <div
            className="experience__line"
            aria-hidden="true"
          />
        </div>
      </Reveal>

      <div className="experience__timeline">
        {experiences.map((experience, index) => {
          const hasRecommendation =
            experience.client === 'AFC Chile'

          return (
            <Reveal
              key={`${experience.company}-${index}`}
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
                    {experience.period[language]}
                  </span>

                  <h3>
                    {experience.company}
                  </h3>

                  <h4>
                    {experience.role[language]}
                  </h4>

                  <p>
                    {experience.description[language]}
                  </p>

                  {experience.highlights && (
                    <ul className="experience__highlights">
                      {experience.highlights.map(
                        (highlight, highlightIndex) => (
                          <li key={highlightIndex}>
                            {highlight[language]}
                          </li>
                        ),
                      )}
                    </ul>
                  )}

                  {experience.client && (
                    <div className="experience__client">
                      <span>
                        {t('experience.client')}
                      </span>

                      <strong>
                        {experience.client}
                      </strong>
                    </div>
                  )}

                  {experience.projects && (
                    <div className="experience__projects">
                      <h5>
                        {t('experience.projectsTitle')}
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
                                          {t('experience.featured')}
                                        </span>
                                      )}
                                    </div>

                                    <h6>
                                      {project.name[language]}
                                    </h6>
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
                                      {project.description[language]}
                                    </p>

                                    <ul className="experience__project-responsibilities">
                                      {project.responsibilities.map(
                                        (
                                          responsibility,
                                          responsibilityIndex,
                                        ) => (
                                          <li
                                            key={responsibilityIndex}
                                          >
                                            {responsibility[language]}
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

                  {hasRecommendation && (
                    <div className="experience__recommendation">
                      <div className="experience__recommendation-content">
                        <div className="experience__recommendation-icon">
                          <FaFileSignature
                            aria-hidden="true"
                          />
                        </div>

                        <div className="experience__recommendation-text">
                          <span>
                            {t('experience.recommendation.eyebrow')}
                          </span>

                          <h5>
                            {t('experience.recommendation.title')}
                          </h5>

                          <p>
                            {t('experience.recommendation.description')}
                          </p>
                        </div>
                      </div>

                      <a
                        className="experience__recommendation-button"
                        href={recommendationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>
                          {t('experience.recommendation.button')}
                        </span>

                        <FaExternalLinkAlt
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

export default Experience
