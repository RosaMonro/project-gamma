import { Route, Routes } from 'react-router-dom'
import './App.scss'
import './scss/global.scss'
import Styleguide from './styleguide/Styleguide'
import { CardHeader } from './components/CardHeader/CardHeader'



function App() {

  return (
    <>
        <Routes>
          <Route path="/styleguide" element={<Styleguide />} />
        </Routes>

        <header className="header  header-bg">
          <CardHeader name='Rosa Montero'  role='Frontend'></CardHeader>
        </header>

        <main className='main'>

          <section>

            <h3 className="font-style-italic  font-weight-semibold">Quién soy y qué hago</h3>

            <hr class="main__horizontal-line"></hr>

            <div className="main__text">

                <div className="text-about">
                    <h4 className="h6  font-weight-light  color-fucsia">Soy frontend-UI</h4>
                    <p className="font-size-16-xxs  font-weight-light">Realicé un posgrado en UX/UI, 
                    desarrollo frontend y marketing digital donde aprendí HTML y CSS con el uso de 
                    herramientas como sass y metodología BEM. También me inicié en el desarrollo 
                    con JavaScript y el manejo de React. Asimismo, tengo experiencia en el uso de 
                    Github, Visual Studio Code, Figma y WordPress.</p>

                    <h4 className="h6  font-weight-light  color-fucsia">También soy psicóloga</h4>
                    <p className="font-size-16-xxs  font-weight-light">Licenciada en psicología y especializada 
                    en neuropsicología. Tengo una amplia experiencia en administración e interpretación de 
                    pruebas neuropsicológicas, diseño de intervención basada en la evidencia y elaboración 
                    de objetivos SMART así como en el trabajo en equipo interdisciplinar y en comunicación 
                    y asesoramiento familiar. </p>
                </div>

                <div className="text-about">
                    <h4 className="h6  font-weight-light  color-fucsia">Aportando valor...</h4>
                    <p className="font-size-16-xxs  font-weight-light">Aunque la psicología y el desarrollo 
                    frontend parecen dos áreas muy diferentes, ambas requieren habilidades técnicas y 
                    analíticas, una meticulosa atención al detalle, entrenamiento en la resolución de 
                    problemas y una sólida capacidad de comunicación efectiva para trabajar en equipo.</p>
                    
                    <h4 className="h6  font-weight-light  color-fucsia">...y algo más.</h4>
                    <p className="font-size-16-xxs  font-weight-light">Soy una persona sociable y sensible 
                    con mucho sentido del humor. Me gusta la fotografía y me apasiona el baile. Tengo 
                    por objetivos seguir aprendiendo a expresarme a través de la danza, explorando el 
                    mundo que me rodea y creciendo como persona y como profesional en el ámbito del 
                    diseño, la experiencia de usuario y desarrollo web.</p>
                </div>

            </div>

              
          </section>

        </main>

    </>
  )
}

export default App
