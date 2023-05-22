import { Route, Routes } from 'react-router-dom'
import './App.scss'
import './scss/global.scss'

import Styleguide from './styleguide/Styleguide'
import MyButton from './components/Btn/Btn'



function App() {

const text="CONTÁCTAME"

  return (
    <>
        <Routes>
          <Route path="/styleguide" element={<Styleguide />} />
        </Routes>

      <header className="header  header-bg">

        <div className="header__container">

            <div className="header__info">
                <p className="h1  font-weight-bold  font-style-italic">Rosa Montero</p>
                <h1 className="font-weight-light  font-style-italic">Frontend</h1>
            </div>

            <div className="header__button">
                <MyButton variant="secondary" text="CONTÁCTAME" isButton="true"></MyButton>
                <MyButton  variant="cta" text="MI TRABAJO" isButton="true"></MyButton>
            </div>

           

            <div className="header__cta">
              <p className="font-weight-light  font-size-24-s">¡Puedes leer más <a className="header__link  link  link--primary  color-fucsia font-weight-light font-style-italic">sobre mí</a>! </p>
            </div>

        </div>

      </header>

      <main>
        
      </main>
    </>
  )
}

export default App
