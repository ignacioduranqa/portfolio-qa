
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
  FaBars,
  FaXmark,
  FaGlobe,
} from 'react-icons/fa6'

import './Navbar.css'

const navigationItems = [
  { id: 'sobre-mi', key: 'about' },
  { id: 'experiencia', key: 'experience' },
  { id: 'habilidades', key: 'skills' },
  { id: 'certificaciones', key: 'certifications' },
  { id: 'proyectos', key: 'projects' },
  { id: 'contacto', key: 'contact' },
]

const sectionIds = [
  'inicio',
  ...navigationItems.map((item) => item.id),
]

function Navbar() {
  const { t, i18n } = useTranslation()

  const [activeSection, setActiveSection] =
    useState('inicio')

  const [isMenuOpen, setIsMenuOpen] =
    useState(false)

  const currentLanguage =
    i18n.resolvedLanguage === 'en' ? 'en' : 'es'

  function changeLanguage(language: 'es' | 'en') {
    void i18n.changeLanguage(language)

    try {
      localStorage.setItem('portfolio-language', language)
    } catch {
      // El selector funciona aunque no se pueda guardar.
    }

    document.documentElement.lang = language
  }

  useEffect(() => {
    document.documentElement.lang = currentLanguage
  }, [currentLanguage])

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(
        (section): section is HTMLElement =>
          section !== null,
      )

    if (sections.length === 0) {
      return
    }

    function updateActiveSection() {
      const navbarHeight =
        window.innerWidth <= 760 ? 70 : 82

      const referencePoint =
        window.scrollY +
        navbarHeight +
        window.innerHeight * 0.28

      let currentSection = 'inicio'

      sections.forEach((section) => {
        if (section.offsetTop <= referencePoint) {
          currentSection = section.id
        }
      })

      const isAtPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5

      if (isAtPageBottom) {
        currentSection = 'contacto'
      }

      setActiveSection(currentSection)
    }

    updateActiveSection()

    window.addEventListener(
      'scroll',
      updateActiveSection,
      { passive: true },
    )

    window.addEventListener(
      'resize',
      updateActiveSection,
    )

    return () => {
      window.removeEventListener(
        'scroll',
        updateActiveSection,
      )

      window.removeEventListener(
        'resize',
        updateActiveSection,
      )
    }
  }, [])

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = ''
      return
    }

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener(
      'keydown',
      handleEscape,
    )

    return () => {
      window.removeEventListener(
        'keydown',
        handleEscape,
      )
    }
  }, [])

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 760) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener(
      'resize',
      handleResize,
    )

    return () => {
      window.removeEventListener(
        'resize',
        handleResize,
      )
    }
  }, [])

  function handleNavigation(sectionId: string) {
    setActiveSection(sectionId)
    setIsMenuOpen(false)
  }

  function toggleMenu() {
    setIsMenuOpen((currentState) => !currentState)
  }

  return (
    <>
      <nav
        className="navbar"
        aria-label={t('navbar.navigation')}
      >
        <a
          className={`navbar__logo ${
            activeSection === 'inicio'
              ? 'navbar__logo--active'
              : ''
          }`}
          href="#inicio"
          aria-label={t('navbar.home')}
          aria-current={
            activeSection === 'inicio'
              ? 'page'
              : undefined
          }
          onClick={() => handleNavigation('inicio')}
        >
          <span className="navbar__logo-text">
            IS
          </span>
        </a>

        <div className="navbar__right">
          <ul
            className={`navbar__links ${
              isMenuOpen
                ? 'navbar__links--open'
                : ''
            }`}
            id="navbar-navigation"
          >
            {navigationItems.map((item) => {
              const isActive =
                activeSection === item.id

              return (
                <li key={item.id}>
                  <a
                    className={
                      isActive
                        ? 'navbar__link navbar__link--active'
                        : 'navbar__link'
                    }
                    href={`#${item.id}`}
                    aria-current={
                      isActive ? 'page' : undefined
                    }
                    onClick={() =>
                      handleNavigation(item.id)
                    }
                  >
                    <span>
                      {t(`navbar.${item.key}`)}
                    </span>

                    <span
                      className="navbar__link-arrow"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>

          <div
            className="navbar__language"
            role="group"
            aria-label={t('navbar.language')}
          >
            <FaGlobe
              className="navbar__language-icon"
              aria-hidden="true"
            />

            <button
              type="button"
              className={`navbar__language-button ${
                currentLanguage === 'es'
                  ? 'navbar__language-button--active'
                  : ''
              }`}
              aria-label="Español"
              aria-pressed={currentLanguage === 'es'}
              onClick={() => changeLanguage('es')}
            >
              ES
            </button>

            <span
              className="navbar__language-separator"
              aria-hidden="true"
            >
              /
            </span>

            <button
              type="button"
              className={`navbar__language-button ${
                currentLanguage === 'en'
                  ? 'navbar__language-button--active'
                  : ''
              }`}
              aria-label="English"
              aria-pressed={currentLanguage === 'en'}
              onClick={() => changeLanguage('en')}
            >
              EN
            </button>
          </div>

          <button
            className={`navbar__menu-button ${
              isMenuOpen
                ? 'navbar__menu-button--open'
                : ''
            }`}
            type="button"
            aria-label={
              isMenuOpen
                ? t('navbar.closeMenu')
                : t('navbar.openMenu')
            }
            aria-expanded={isMenuOpen}
            aria-controls="navbar-navigation"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <FaXmark aria-hidden="true" />
            ) : (
              <FaBars aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      <button
        className={`navbar__overlay ${
          isMenuOpen
            ? 'navbar__overlay--visible'
            : ''
        }`}
        type="button"
        aria-label={t('navbar.closeNavigation')}
        tabIndex={isMenuOpen ? 0 : -1}
        onClick={() => setIsMenuOpen(false)}
      />
    </>
  )
}

export default Navbar
