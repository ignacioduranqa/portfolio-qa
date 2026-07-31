import {
  FaAward,
  FaExternalLinkAlt,
  FaGraduationCap,
} from 'react-icons/fa'

import Reveal from '../Reveal/Reveal'

import './Certifications.css'
import { certifications } from '../../data/certifications'

function Certifications() {
  return (
    <section
      className="certifications"
      id="certificaciones"
    >
      <Reveal
        direction="up"
        duration={700}
        distance={26}
      >
        <div className="certifications__heading">
          <span className="certifications__eyebrow">
            Aprendizaje continuo
          </span>

          <h2 className="certifications__title">
            Formación y certificaciones
          </h2>

          <p className="certifications__description">
            Certificaciones que complementan mi experiencia profesional
            y fortalecen mis conocimientos en QA, metodologías ágiles,
            automatización y trabajo colaborativo.
          </p>

          <div
            className="certifications__line"
            aria-hidden="true"
          />
        </div>
      </Reveal>

      <div className="certifications__timeline">
        <div
          className="certifications__timeline-center"
          aria-hidden="true"
        />

        {certifications.map((certification, index) => {
          const isLeft = index % 2 === 0

          return (
            <Reveal
              key={certification.id}
              direction={isLeft ? 'left' : 'right'}
              delay={index * 100}
              duration={700}
              distance={36}
              className="certifications__item-reveal"
            >
              <article
                className={`certifications__item ${
                  isLeft
                    ? 'certifications__item--left'
                    : 'certifications__item--right'
                }`}
              >
                <div
                  className="certifications__marker"
                  aria-hidden="true"
                >
                  <FaAward />
                </div>

                <div className="certifications__card">
                  <div className="certifications__card-header">
                    <div className="certifications__card-heading">
                      <FaGraduationCap
                        className="certifications__card-icon"
                        aria-hidden="true"
                      />

                      <div>
                        <span className="certifications__year">
                          {certification.year}
                        </span>

                        <h3>{certification.title}</h3>
                      </div>
                    </div>

                    <span className="certifications__category">
                      {certification.category}
                    </span>
                  </div>

                  <div className="certifications__metadata">
                    <span>{certification.institution}</span>

                    <span
                      className="certifications__metadata-separator"
                      aria-hidden="true"
                    >
                      •
                    </span>

                    <span>{certification.date}</span>
                  </div>

                  <p className="certifications__card-description">
                    {certification.description}
                  </p>

                  {certification.credentialUrl && (
                    <a
                      className="certifications__credential-button"
                      href={certification.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Ver credencial de ${certification.title}`}
                    >
                      <span>Ver credencial</span>

                      <FaExternalLinkAlt aria-hidden="true" />
                    </a>
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

export default Certifications