import { Route, Routes } from 'react-router-dom'
import './App.scss'
import './scss/global.scss'
import Styleguide from './styleguide/Styleguide'
import { CardHeader } from './components/CardHeader/CardHeader'
import { AboutMe } from './components/AboutMe/AboutMe'



function App() {

  return (
    <>
        <Routes>
          <Route path="/styleguide" element={<Styleguide />} />
        </Routes>

        <header className="header  header-bg">
          <CardHeader name='Rosa Montero'  role='Frontend'></CardHeader>
        </header>

        <main>
          <AboutMe></AboutMe>
        </main>

    </>
  )
}

export default App
