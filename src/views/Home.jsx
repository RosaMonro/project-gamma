import '../scss/global.scss'
import { CardHeader } from '../components/CardHeader/CardHeader'


export default function Home() {
    return (
        <>
        <header className="header  header-bg">
          <CardHeader name='Rosa Montero'  role='Frontend'></CardHeader>
        </header>

        <main className='color-bg-white-darken'>

          <section  className="main  contain-photo-bg  max-width">

              <h3 className="font-style-italic  font-weight-semibold">Quién soy y qué hago</h3>

              <hr className="horizontal-line horizontal-line--center"></hr>

              <div className="main__text">

                  <div className="text-about  color-bg-white">
                      <h4 className="h6  font-weight-light  color-fucsia-darken">Soy frontend-UI</h4>
                      <p className="font-size-16-xxs  font-weight-light">Realicé un posgrado en UX/UI, 
                      desarrollo frontend y marketing digital. Aprendí HTML y CSS también con el uso de 
                      herramientas como Sass y de la metodología BEM. Además me inicié en el desarrollo 
                      con JavaScript y el manejo de React y tengo experiencia en el uso de Github, 
                      Visual Studio Code, Figma y WordPress.</p>

                      <h4 className="h6  font-weight-light  color-fucsia-darken">También soy psicóloga</h4>
                      <p className="font-size-16-xxs  font-weight-light">Licenciada en psicología y especializada 
                      en neuropsicología, poseo una amplia experiencia en entrevistas y administración e interpretación de 
                      pruebas neuropsicológicas, analísis de conducta, diseño de intervención basada en la evidencia y elaboración 
                      de objetivos SMART así como en el trabajo en equipo interdisciplinar y en comunicación 
                      y asesoramiento familiar. </p>
                  </div>

                  <div className="text-about  color-bg-white">
                      <h4 className="h6  font-weight-light  color-fucsia-darken">Aportando valor...</h4>
                      <p className="font-size-16-xxs  font-weight-light">Tanto la psicología como
                      el diseño y desarrollo de interfaces requieren de habilidades técnicas y analíticas. 
                      Saber percibir e interpretar patrones de conducta del usuario te permite 
                      poder implementarlos en el desarrollo de las mismas. Asimismo, es importante 
                      una meticulosa atención al detalle, entrenamiento en la resolución de 
                      problemas y una sólida capacidad de comunicación efectiva para trabajar en equipo.
                      </p>
                      
                      
                      <h4 className="h6  font-weight-light  color-fucsia-darken">...y algo más.</h4>
                      <p className="font-size-16-xxs  font-weight-light">Soy una persona sociable y sensible 
                      con mucho sentido del humor. Me gusta la fotografía y me apasiona el baile. Tengo 
                      por objetivos seguir aprendiendo a expresarme a través de la danza, explorando el 
                      mundo que me rodea y creciendo como persona y como profesional en el ámbito del 
                      diseño, la experiencia de usuario y el desarrollo web.</p>
                  </div>

              </div>
            
          </section>

        </main>

        </>
    )
}