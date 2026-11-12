
import { useTranslation } from 'react-i18next'

import { FaArrowUp } from 'react-icons/fa6'

import './Footer.css'

function Footer() {
  const { t } = useTranslation()

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
          © {currentYear} Ignacio Durán · {t('footer.role')}
        </p>

        <button
          className="footer__button"
          type="button"
          onClick={scrollToTop}
          aria-label={t('footer.backToTop')}
        >
          <span>
            {t('footer.backToTop')}
          </span>

          <FaArrowUp aria-hidden="true" />
        </button>
      </div>
    </footer>
  )
}

export default Footer
