import { FaArrowUp } from 'react-icons/fa6'

import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyright">
          © {currentYear} Ignacio Durán · Analista QA Funcional
        </p>

        <button
          className="footer__button"
          type="button"
          onClick={scrollToTop}
          aria-label="Volver arriba"
        >
          <span>Volver arriba</span>

          <FaArrowUp aria-hidden="true" />
        </button>
      </div>
    </footer>
  )
}

export default Footer