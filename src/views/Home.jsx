import CardHeader from "../components/CardHeader/CardHeader";

export default function Home() {
  return (
    <>
      <header className="home-header  home-header-bg">
        <CardHeader name="Rosa Montero" role="Frontend"></CardHeader>
      </header>

      <main className="color-bg-white-darken" id="sobremi-point">
        <section className="home-main  contain-main__photo-bg  max-width">
          <h3 className="font-style-italic  font-weight-semibold">
            Quién soy y qué hago
          </h3>

          <hr className="horizontal-line horizontal-line--center--smalll"></hr>

          <div className="home-main__text">
            <div className="text-about  color-bg-white">
              <h4 className="h6  font-weight-medium  color-fucsia-darken">
                UX/UI
              </h4>
              <p className="font-size-16-xxs  font-weight-light">
                Realicé un posgrado en UX/UI, desarrollo frontend y marketing
                digital en la Escuela Superior de Arte y Tecnología (ESAT).
                Sobre experiencia de usuario aprendí heurística y usabilidad,
                planificación del diseño y prototipado, etc. Ahora sigo
                sumergida en el aprendizaje del proceso de diseño de producto
                digital así como en el manejo de métricas de diseño
                (especialmente cualitativas).
              </p>

              <h4 className="h6  font-weight-medium  color-fucsia-darken">
                Frontend
              </h4>
              <p className="font-size-16-xxs  font-weight-light">
                Gracias al posgrado y cursos posteriores, soy capaz de trabajar
                con HTML y CSS utilizando herramientas como Sass y metodología
                BEM. Además, me he iniciado en desarrollo con JavaScript y soy
                capaz de manejarme con React y trabajar por componentes.
              </p>

              <h4 className="h6  font-weight-medium  color-fucsia-darken">
                Neurociencias
              </h4>
              <p className="font-size-16-xxs  font-weight-light">
                He dedicado años a estudiar y trabajar en el campo de la
                neuropsicología. Tengo amplia experiencia en la administración e
                interpretación de valoraciones cognitivas, análisis de conducta
                y creación de planes de tratamiento y rehabilitación en daño
                cerebral en colaboración con equipos interdisciplinarios.
              </p>
            </div>

            <div className="text-about  color-bg-white">
              <h4 className="h6  font-weight-medium  color-fucsia-darken">
                Aportando valor...
              </h4>
              <p className="font-size-16-xxs  font-weight-light">
                La neurociencia nos proporciona una ventana hacia la comprensión
                de cómo el cerebro reacciona ante diversos estímulos, generando
                emociones y configurando nuestra conducta. Al centrarnos en el
                usuario y reconocer que su comportamiento está impulsado por
                procesos neuronales, podemos apreciar la importancia de las
                neurociencias en el diseño, lo que nos permite crear diseños más
                efectivos. Tanto la psicología como el diseño y desarrollo de
                interfaces requieren habilidades técnicas y analíticas, la
                capacidad de identificar patrones de conducta del usuario y una
                atención meticulosa a los detalles, junto con la resolución de
                problemas y una comunicación efectiva para el trabajo en equipo.
              </p>

              <h4 className="h6  font-weight-medium  color-fucsia-darken">
                ...y algo más.
              </h4>
              <p className="font-size-16-xxs  font-weight-light">
                Soy una persona sociable y sensible con mucho sentido del humor.
                Me gusta la fotografía y me apasiona el baile. Tengo por
                objetivos seguir aprendiendo a expresarme a través de la danza,
                explorando el mundo que me rodea y creciendo como persona y como
                profesional en el ámbito del diseño, la experiencia de usuario y
                el desarrollo web.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
