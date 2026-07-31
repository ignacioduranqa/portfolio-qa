import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
} from 'react-icons/fa'

import './Contact.css'

function ContactIllustration() {
  return (
    <div
      className="contact__illustration"
      aria-hidden="true"
    >
      <div className="contact__illustration-glow" />

      <svg
        className="contact__illustration-svg"
        viewBox="0 0 520 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="contact__floating-line contact__floating-line--one"
          d="M70 103C109 71 143 72 170 90"
        />

        <path
          className="contact__floating-line contact__floating-line--two"
          d="M357 67C390 69 420 87 439 113"
        />

        <path
          className="contact__paper-plane"
          d="M391 91L463 56L430 130L411 103L391 91Z"
        />

        <path
          className="contact__paper-plane-line"
          d="M411 103L442 76"
        />

        <g className="contact__letter">
          <rect
            className="contact__letter-paper"
            x="164"
            y="82"
            width="192"
            height="190"
            rx="18"
          />

          <path
            className="contact__letter-accent"
            d="M192 121H270"
          />

          <path
            className="contact__letter-line"
            d="M192 155H328"
          />

          <path
            className="contact__letter-line"
            d="M192 183H309"
          />

          <path
            className="contact__letter-line"
            d="M192 211H286"
          />

          <circle
            className="contact__letter-dot"
            cx="316"
            cy="121"
            r="9"
          />
        </g>

        <g className="contact__envelope">
          <path
            className="contact__envelope-body"
            d="M91 208C91 190.327 105.327 176 123 176H397C414.673 176 429 190.327 429 208V335C429 352.673 414.673 367 397 367H123C105.327 367 91 352.673 91 335V208Z"
          />

          <path
            className="contact__envelope-flap"
            d="M102 195L241.46 300.397C252.411 308.672 267.589 308.672 278.54 300.397L418 195"
          />

          <path
            className="contact__envelope-fold"
            d="M102 348L213 263"
          />

          <path
            className="contact__envelope-fold"
            d="M418 348L307 263"
          />

          <path
            className="contact__envelope-highlight"
            d="M121 204H177"
          />
        </g>

        <circle
          className="contact__spark contact__spark--one"
          cx="95"
          cy="134"
          r="6"
        />

        <circle
          className="contact__spark contact__spark--two"
          cx="430"
          cy="170"
          r="5"
        />

        <path
          className="contact__spark contact__spark--three"
          d="M115 72V91M105.5 81.5H124.5"
        />
      </svg>
    </div>
  )
}

function Contact() {
  return (
    <section
      className="contact"
      id="contacto"
    >
      <div className="contact__container">
        <div className="contact__card">
          <span className="contact__eyebrow">
            Contacto directo
          </span>

          <h2 className="contact__title">
            Hablemos
          </h2>

          <p className="contact__description">
            Estoy disponible para nuevas oportunidades como Analista QA
            Funcional.
          </p>

          <p className="contact__description contact__description--secondary">
            Si quieres conversar sobre una vacante o un proyecto, puedes
            escribirme por correo o contactarme a través de LinkedIn.
          </p>

          <div className="contact__socials">
            <a
              className="contact__social-link"
              href="ignaciosanhueza1516@gmail.com"
              aria-label="Enviar correo a Ignacio"
              title="Correo"
            >
              <FaEnvelope aria-hidden="true" />
            </a>

            <a
              className="contact__social-link"
              href="https://www.linkedin.com/in/ignacio-dur%C3%A1n-sanhueza-3b423326b/"
              target="_blank"
              rel="noreferrer"
              aria-label="Visitar perfil de LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedinIn aria-hidden="true" />
            </a>

            <a
              className="contact__social-link"
              href="TU_ENLACE_DE_GITHUB"
              target="_blank"
              rel="noreferrer"
              aria-label="Visitar perfil de GitHub"
              title="GitHub"
            >
              <FaGithub aria-hidden="true" />
            </a>
          </div>
        </div>

        <ContactIllustration />
      </div>
    </section>
  )
}

export default Contact