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

        <CardHeader name='Rosa Montero'  role='Frontend'></CardHeader>

    </>
  )
}

export default App
