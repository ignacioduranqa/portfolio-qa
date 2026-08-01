import Reveal from '../Reveal/Reveal'

import './About.css'
import profileImage from '../../assets/images/perfil-ignacio.jpg'

const highlights = [
  {
    title: 'Experiencia en proyectos web',
    description:
      'Validación de funcionalidades y flujos de negocio.',
  },
  {
    title: 'Trabajo bajo Scrum',
    description:
      'Participación en ceremonias y coordinación con el equipo.',
  },
  {
    title: 'Trabajo colaborativo',
    description:
      'Comunicación con desarrollo, QA y áreas de negocio.',
  },
  {
    title: 'Enfoque en calidad',
    description:
      'Seguimiento de incidencias y mejora continua.',
  },
]

function About() {
  return (
    <section className="about" id="sobre-mi">
      <Reveal
        direction="up"
        duration={700}
        distance={24}
      >
        <div className="about__heading">
          <span className="about__eyebrow">
            Conóceme
          </span>

          <h2 className="about__title">
            Sobre mí
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
                alt="Ignacio Durán, Analista QA Funcional"
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
            <h3>Analista QA Funcional</h3>

            <p>
              Soy Analista QA Funcional con experiencia en proyectos web. He participado en el diseño y ejecución de casos de prueba, revisión de historias de usuario, validación de criterios de aceptación y ejecución de pruebas funcionales y de regresión. También he gestionado y realizado seguimiento de incidencias mediante Jira.
            </p>

            <p>
              Participé en proyectos para AFC Chile bajo metodología Scrum, colaborando con equipos de desarrollo, QA y negocio para asegurar la calidad de las funcionalidades antes de su liberación.
            </p>

            <p>
              Me interesa seguir creciendo en el área de Calidad de Software, aportando mediante pruebas funcionales, comunicación efectiva y mejora continua de los procesos de calidad.
            </p>

            <div className="about__highlights">
              {highlights.map((highlight, index) => (
                <Reveal
                  key={highlight.title}
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
                      <h4>{highlight.title}</h4>

                      <p>{highlight.description}</p>
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
                <p>¿Buscas un Analista QA?</p>

                <a href="#contacto">
                  Hablemos
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