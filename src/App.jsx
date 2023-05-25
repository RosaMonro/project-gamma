import { Route, Routes } from 'react-router-dom'
import './App.scss'
import './scss/global.scss'
import Styleguide from './styleguide/Styleguide'
import Home from './views/Home'
import './styleguide/Styleguide'

function App() {

  return (
    <>
        <Routes>
          <Route path='/styleguide' element={<Styleguide />} />
          <Route path='/' element={<Home/>}/>
        </Routes>

      
    </>
  )
}

export default App
