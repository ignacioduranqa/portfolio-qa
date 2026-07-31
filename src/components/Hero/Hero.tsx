import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__background hero__background--one"></div>
      <div className="hero__background hero__background--two"></div>

      <div className="hero__content">
        <p className="hero__eyebrow">
          <span></span>
          Hola, soy
        </p>

        <h1 className="hero__title">
          Ignacio
          <span>Durán</span>
        </h1>

        <h2 className="hero__role">Analista QA Funcional</h2>

        <p className="hero__description">
          Experiencia en pruebas funcionales, revisión de historias de usuario,
          validación de criterios de aceptación y gestión de incidencias.
        </p>

        <div className="hero__actions">
          <a
            className="hero__button hero__button--primary"
            href="#proyectos"
          >
            Ver proyectos
          </a>

          <a
            className="hero__button hero__button--secondary"
            href="CV_Ignacio_Duran_Sanhueza.pdf"
            download
          >
            Descargar CV
          </a>
        </div>
      </div>

      <div className="hero__visual">
        <div className="hero__glow"></div>

        <div className="hero__orbit hero__orbit--one"></div>
        <div className="hero__orbit hero__orbit--two"></div>

        <div className="hero__card">
          <div className="hero__card-grid"></div>

          <div className="hero__card-header">
            <span className="hero__card-dot"></span>
            <span className="hero__card-dot"></span>
            <span className="hero__card-dot"></span>
          </div>

          <div className="hero__card-content">
            <span className="hero__card-label">QA</span>

            <p>Quality Assurance</p>

            <div className="hero__card-line"></div>

            <div className="hero__card-status">
              <span></span>
              Calidad en cada entrega
            </div>
          </div>
        </div>

        <div className="hero__badge hero__badge--testing">
          <span></span>
          Functional Testing
        </div>

        <div className="hero__badge hero__badge--quality">
          <span></span>
          Quality First
        </div>
      </div>
    </section>
  )
}

export default Hero