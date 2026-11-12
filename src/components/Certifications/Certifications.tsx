
import { useTranslation } from 'react-i18next'

import {
  FaAward,
  FaExternalLinkAlt,
  FaGraduationCap,
} from 'react-icons/fa'

import Reveal from '../Reveal/Reveal'

import './Certifications.css'

import {
  certifications,
  type Language,
} from '../../data/certifications'

function Certifications() {
  const { t, i18n } = useTranslation()

  const language: Language =
    i18n.resolvedLanguage === 'en'
      ? 'en'
      : 'es'

  return (
    <section
      className="certifications"
      id="certificaciones"
    >
      {/* ENCABEZADO */}

      <Reveal
        direction="up"
        duration={700}
        distance={26}
      >
        <div className="certifications__heading">
          <span className="certifications__eyebrow">
            {t('certifications.eyebrow')}
          </span>

          <h2 className="certifications__title">
            {t('certifications.title')}
          </h2>

          <p className="certifications__description">
            {t('certifications.description')}
          </p>

          <div
            className="certifications__line"
            aria-hidden="true"
          />
        </div>
      </Reveal>

      {/* LÍNEA DE TIEMPO */}

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
                {/* MARCADOR */}

                <div
                  className="certifications__marker"
                  aria-hidden="true"
                >
                  <FaAward />
                </div>

                {/* TARJETA */}

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

                        <h3>
                          {certification.title[language]}
                        </h3>
                      </div>
                    </div>

                    <span className="certifications__category">
                      {certification.category[language]}
                    </span>
                  </div>

                  {/* INSTITUCIÓN Y FECHA */}

                  <div className="certifications__metadata">
                    <span>
                      {certification.institution}
                    </span>

                    <span
                      className="certifications__metadata-separator"
                      aria-hidden="true"
                    >
                      •
                    </span>

                    <span>
                      {certification.date[language]}
                    </span>
                  </div>

                  {/* DESCRIPCIÓN */}

                  <p className="certifications__card-description">
                    {certification.description[language]}
                  </p>

                  {/* CREDENCIAL */}

                  {certification.credentialUrl && (
                    <a
                      className="certifications__credential-button"
                      href={certification.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t(
                        'certifications.viewCredentialLabel',
                        {
                          title:
                            certification.title[language],
                        },
                      )}
                    >
                      <span>
                        {t('certifications.viewCredential')}
                      </span>

                      <FaExternalLinkAlt
                        aria-hidden="true"
                      />
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
