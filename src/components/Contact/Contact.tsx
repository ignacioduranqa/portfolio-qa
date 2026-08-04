import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaPaperPlane,
} from 'react-icons/fa'

import Reveal from '../Reveal/Reveal'

import './Contact.css'

function Contact() {
  return (
    <section
      className="contact"
      id="contacto"
    >
      <div className="contact__container">
        <Reveal
          direction="left"
          duration={700}
          distance={30}
          className="contact__card-reveal"
        >
          <div className="contact__card">
            <div
              className="contact__card-decoration"
              aria-hidden="true"
            />

            <div className="contact__content">
              <span className="contact__eyebrow">
                Contacto directo
              </span>

              <h2 className="contact__title">
                Hablemos
              </h2>

              <p className="contact__description">
                Estoy disponible para nuevas
                oportunidades como Analista QA
                Funcional. Puedes contactarme por
                correo o LinkedIn para conversar.
              </p>
            </div>

            <div className="contact__socials">
              <a
                className="contact__social"
                href="mailto:ignaciosanhueza1516@gmail.com"
                aria-label="Enviar correo a Ignacio Durán"
                title="Correo"
              >
                <FaEnvelope aria-hidden="true" />

                <span>Correo</span>
              </a>

              <a
                className="contact__social"
                href="https://www.linkedin.com/in/ignacio-dur%C3%A1n-sanhueza-3b423326b/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visitar LinkedIn de Ignacio Durán"
                title="LinkedIn"
              >
                <FaLinkedinIn aria-hidden="true" />

                <span>LinkedIn</span>
              </a>

              <a
                className="contact__social"
                href="https://github.com/ignacioduranqa"
                target="_blank"
                rel="noreferrer"
                aria-label="Visitar GitHub de Ignacio Durán"
                title="GitHub"
              >
                <FaGithub aria-hidden="true" />

                <span>GitHub</span>
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal
          direction="right"
          duration={850}
          distance={40}
          className="contact__visual-reveal"
        >
          <div
            className="contact__visual"
            aria-hidden="true"
          >
            <div className="contact__visual-glow" />

            <div className="contact__visual-orbit contact__visual-orbit--one" />
            <div className="contact__visual-orbit contact__visual-orbit--two" />

            <div className="contact__envelope">
              <FaEnvelope />
            </div>

            <div className="contact__message">
              <div className="contact__message-line contact__message-line--primary" />
              <div className="contact__message-line" />
              <div className="contact__message-line contact__message-line--short" />

              <span />
            </div>

            <FaPaperPlane className="contact__plane" />

            <span className="contact__particle contact__particle--one" />
            <span className="contact__particle contact__particle--two" />
            <span className="contact__particle contact__particle--three" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact