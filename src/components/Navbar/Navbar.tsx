import { useEffect, useState } from 'react'

import {
  FaBars,
  FaXmark,
} from 'react-icons/fa6'

import './Navbar.css'

const navigationItems = [
  {
    id: 'sobre-mi',
    label: 'Sobre mí',
  },
  {
    id: 'experiencia',
    label: 'Experiencia',
  },
  {
    id: 'habilidades',
    label: 'Habilidades',
  },
  {
    id: 'certificaciones',
    label: 'Certificaciones',
  },
  {
    id: 'proyectos',
    label: 'Proyectos',
  },
  {
    id: 'contacto',
    label: 'Contacto',
  },
]

const sectionIds = [
  'inicio',
  ...navigationItems.map((item) => item.id),
]

function Navbar() {
  const [activeSection, setActiveSection] =
    useState('inicio')

  const [isMenuOpen, setIsMenuOpen] =
    useState(false)

  /*
   * Detecta qué sección está visible para
   * marcar el enlace correspondiente.
   */
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

  /*
   * Bloquea el desplazamiento de la página
   * cuando el menú móvil está abierto.
   */
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

  /*
   * Permite cerrar el menú con Escape.
   */
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

  /*
   * Cierra el menú si la ventana vuelve
   * al tamaño de escritorio.
   */
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

  function handleNavigation(
    sectionId: string,
  ) {
    setActiveSection(sectionId)
    setIsMenuOpen(false)
  }

  function toggleMenu() {
    setIsMenuOpen((currentState) =>
      !currentState
    )
  }

  return (
    <>
      <nav
        className="navbar"
        aria-label="Navegación principal"
      >
        <a
          className={`navbar__logo ${
            activeSection === 'inicio'
              ? 'navbar__logo--active'
              : ''
          }`}
          href="#inicio"
          aria-label="Ir al inicio"
          aria-current={
            activeSection === 'inicio'
              ? 'page'
              : undefined
          }
          onClick={() =>
            handleNavigation('inicio')
          }
        >
          <span className="navbar__logo-text">
            IS
          </span>
        </a>

        <button
          className={`navbar__menu-button ${
            isMenuOpen
              ? 'navbar__menu-button--open'
              : ''
          }`}
          type="button"
          aria-label={
            isMenuOpen
              ? 'Cerrar menú'
              : 'Abrir menú'
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
                    isActive
                      ? 'page'
                      : undefined
                  }
                  onClick={() =>
                    handleNavigation(item.id)
                  }
                >
                  <span>{item.label}</span>

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
      </nav>

      <button
        className={`navbar__overlay ${
          isMenuOpen
            ? 'navbar__overlay--visible'
            : ''
        }`}
        type="button"
        aria-label="Cerrar menú de navegación"
        tabIndex={isMenuOpen ? 0 : -1}
        onClick={() => setIsMenuOpen(false)}
      />
    </>
  )
}

export default Navbar