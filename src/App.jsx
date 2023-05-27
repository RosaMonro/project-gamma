import { Route, Routes } from 'react-router-dom'
import './styleguide/Styleguide'
import './App.scss'
import './scss/global.scss'
import Styleguide from './styleguide/Styleguide'
import Home from './views/Home'
import Projects from './views/Projects'
import Footer from '../src/components/Footer/Footer'


function App() {

  return (
    <>
        <Routes>
          <Route path='/styleguide' element={<Styleguide />} />
          <Route path='/' element={<Home/>}/> 
          <Route path='/Projects' element={<Projects/>}/>
        </Routes>

        <Footer></Footer>
    </>
  )
}

export default App
