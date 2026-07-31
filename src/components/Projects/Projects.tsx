import {
  FaArrowRight,
  FaCode,
  FaFlask,
  FaRocket,
} from 'react-icons/fa'

import './Projects.css'

function Projects() {
  return (
    <section
      className="projects"
      id="proyectos"
    >
      <div className="projects__heading">
        <span className="projects__eyebrow">
          Mi trabajo
        </span>

        <h2 className="projects__title">
          Proyectos
        </h2>

        <p className="projects__description">
          Aquí encontrarás tanto los proyectos profesionales en los que
          he participado como los proyectos personales que desarrollo
          para seguir aprendiendo y fortaleciendo mis habilidades como
          Analista QA.
        </p>

        <div
          className="projects__line"
          aria-hidden="true"
        />
      </div>

      <div className="projects__coming">
        <div
          className="projects__coming-glow"
          aria-hidden="true"
        />

        <FaRocket
          className="projects__rocket"
          aria-hidden="true"
        />

        <span className="projects__status">
          Sección en desarrollo
        </span>

        <h3>Próximamente nuevos proyectos</h3>

        <p className="projects__coming-description">
          Actualmente estoy preparando proyectos personales orientados
          a pruebas funcionales y automatización, los cuales serán
          incorporados próximamente a mi portafolio.
        </p>

        <div className="projects__preview">
          <div className="projects__preview-item">
            <FaFlask aria-hidden="true" />

            <div>
              <span>Pruebas funcionales</span>

              <small>
                Casos de prueba, validaciones y documentación.
              </small>
            </div>
          </div>

          <div className="projects__preview-item">
            <FaCode aria-hidden="true" />

            <div>
              <span>Automatización</span>

              <small>
                Prácticas con Selenium, Python y nuevas herramientas.
              </small>
            </div>
          </div>
        </div>

        <div
          className="projects__progress"
          aria-hidden="true"
        >
          <span className="projects__progress-line" />
        </div>

        <span className="projects__progress-label">
          Preparando contenido
          <FaArrowRight aria-hidden="true" />
        </span>
      </div>
    </section>
  )
}

export default Projects