import { Link, Route, Routes } from 'react-router-dom'
import './App.scss'
import './scss/global.scss'
import Home from './views/Home'
import Contact from './views/Contact'
import Topbar from './components/Topbar/Topbar'
import Styleguide from './styleguide/Styleguide'



function App() {

  return (
    <>
      <header>
        <h1 className="h1">Proyecto Gamma</h1>
        <div className="header__nav">
          <Link to="/Contact" className="header__nav__link">Contacto</Link>
          <Link to="/" className="header__nav__link">Home</Link>
          <Link to="/styleguide" className="header__nav__link">Styleguide</Link>
        </div>
      </header>
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/styleguide" element={<Styleguide />} />
        </Routes>
      </main>
      <Topbar />
    </>
  )
}

export default App
