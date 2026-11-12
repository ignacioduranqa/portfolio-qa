
import { useTranslation } from 'react-i18next'

import './Hero.css'

function Hero() {
  const { t } = useTranslation()

  const cvUrl =
    `${import.meta.env.BASE_URL}CV_Ignacio_Duran_Sanhueza.pdf`

  return (
    <section
      className="hero"
      id="inicio"
    >
      <div
        className="hero__background hero__background--one"
        aria-hidden="true"
      />

      <div
        className="hero__background hero__background--two"
        aria-hidden="true"
      />

      <div className="hero__content">
        <p className="hero__eyebrow">
          <span aria-hidden="true" />
          {t('hero.greeting')}
        </p>

        <h1 className="hero__title">
          Ignacio
          <span>Durán</span>
        </h1>

        <h2 className="hero__role">
          {t('hero.role')}
        </h2>

        <p className="hero__description">
          {t('hero.description')}
        </p>

        <div className="hero__actions">
          <a
            className="hero__button hero__button--primary"
            href="#proyectos"
          >
            {t('hero.viewProjects')}
          </a>

          <a
            className="hero__button hero__button--secondary"
            href={cvUrl}
            download="CV_Ignacio_Duran_Sanhueza.pdf"
            aria-label={t('hero.downloadCvLabel')}
          >
            {t('hero.downloadCv')}
          </a>
        </div>
      </div>

      <div
        className="hero__visual"
        aria-hidden="true"
      >
        <div className="hero__glow" />

        <div className="hero__orbit hero__orbit--one" />
        <div className="hero__orbit hero__orbit--two" />

        <div className="hero__card">
          <div className="hero__card-grid" />

          <div className="hero__card-header">
            <span className="hero__card-dot" />
            <span className="hero__card-dot" />
            <span className="hero__card-dot" />
          </div>

          <div className="hero__card-content">
            <span className="hero__card-label">
              QA
            </span>

            <p>Quality Assurance</p>

            <div className="hero__card-line" />

            <div className="hero__card-status">
              <span />
              {t('hero.qualityStatus')}
            </div>
          </div>
        </div>

        <div className="hero__badge hero__badge--testing">
          <span />
          {t('hero.testingBadge')}
        </div>

        <div className="hero__badge hero__badge--quality">
          <span />
          {t('hero.qualityBadge')}
        </div>
      </div>
    </section>
  )
}

export default Hero
