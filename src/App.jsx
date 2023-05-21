import { Route, Routes } from 'react-router-dom'
import './App.scss'
import './scss/global.scss'

import Styleguide from './styleguide/Styleguide'



function App() {

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
                <button className="btn  btn--secondary">CONTÁCTAME</button>
                <button className="btn  btn--cta">MI TRABAJO</button>
            </div>

            <div className="header__cta">
              <p className="font-weight-light  font-size-24-s">¡Puedes leer más <span className="color-fucsia font-weight-light font-style-italic">sobre mí</span> ! </p>
            </div>

        </div>

      </header>

      <main>
        
      </main>
    </>
  )
}

export default App
