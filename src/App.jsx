import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import Contact from './views/Contact'


function App() {

  return (
    <>
      <header>
        <h1>Proyecto Gamma</h1>
        <Link to="/Contact">Contacto</Link>
        <Link to="/">Home</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  )
}

export default App
