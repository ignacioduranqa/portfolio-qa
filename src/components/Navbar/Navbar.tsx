import {
  useEffect,
  useRef,
  useState,
} from 'react'

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

  const linkRefs = useRef<
    Record<string, HTMLAnchorElement | null>
  >({})

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
      const navbarHeight = 80
      const referencePoint =
        window.scrollY + navbarHeight + window.innerHeight * 0.3

      let currentSection = 'inicio'

      sections.forEach((section) => {
        if (section.offsetTop <= referencePoint) {
          currentSection = section.id
        }
      })

      const isAtPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4

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
    const activeLink = linkRefs.current[activeSection]

    activeLink?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    })
  }, [activeSection])

  function handleNavigation(sectionId: string) {
    setActiveSection(sectionId)
  }

  return (
    <nav
      className="navbar"
      aria-label="Navegación principal"
    >
      <a
        ref={(element) => {
          linkRefs.current.inicio = element
        }}
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
        onClick={() => handleNavigation('inicio')}
      >
        <span className="navbar__logo-text">
          IS
        </span>
      </a>

      <ul className="navbar__links">
        {navigationItems.map((item) => {
          const isActive =
            activeSection === item.id

          return (
            <li key={item.id}>
              <a
                ref={(element) => {
                  linkRefs.current[item.id] =
                    element
                }}
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
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar