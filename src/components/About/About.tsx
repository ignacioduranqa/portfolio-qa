
import { useTranslation } from 'react-i18next'

import Reveal from '../Reveal/Reveal'

import './About.css'
import profileImage from '../../assets/images/perfil-ignacio.jpg'

const highlights = [
  {
    id: 'webProjects',
  },
  {
    id: 'scrum',
  },
  {
    id: 'collaboration',
  },
  {
    id: 'quality',
  },
]

function About() {
  const { t } = useTranslation()

  return (
    <section className="about" id="sobre-mi">
      <Reveal
        direction="up"
        duration={700}
        distance={24}
      >
        <div className="about__heading">
          <span className="about__eyebrow">
            {t('about.eyebrow')}
          </span>

          <h2 className="about__title">
            {t('about.title')}
          </h2>

          <div
            className="about__line"
            aria-hidden="true"
          />
        </div>
      </Reveal>

      <div className="about__content">
        <Reveal
          direction="left"
          duration={850}
          distance={45}
          className="about__image-reveal"
        >
          <div className="about__image">
            <div className="about__image-container">
              <img
                src={profileImage}
                alt={t('about.imageAlt')}
              />
            </div>
          </div>
        </Reveal>

        <Reveal
          direction="right"
          delay={100}
          duration={800}
          distance={38}
          className="about__info-reveal"
        >
          <div className="about__info">
            <h3>{t('about.role')}</h3>

            <p>{t('about.paragraph1')}</p>

            <p>{t('about.paragraph2')}</p>

            <p>{t('about.paragraph3')}</p>

            <div className="about__highlights">
              {highlights.map((highlight, index) => (
                <Reveal
                  key={highlight.id}
                  direction="up"
                  delay={Math.min(index * 80, 240)}
                  duration={600}
                  distance={18}
                  className="about__highlight-reveal"
                >
                  <article className="about__highlight">
                    <span
                      className="about__highlight-icon"
                      aria-hidden="true"
                    >
                      ✓
                    </span>

                    <div>
                      <h4>
                        {t(`about.highlights.${highlight.id}.title`)}
                      </h4>

                      <p>
                        {t(`about.highlights.${highlight.id}.description`)}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal
              direction="up"
              delay={160}
              duration={650}
              distance={18}
            >
              <div className="about__contact">
                <p>{t('about.contactQuestion')}</p>

                <a href="#contacto">
                  {t('about.contactButton')}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default About
