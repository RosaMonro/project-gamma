import { Route, Routes, useLocation } from 'react-router-dom'
import './styleguide/Styleguide'
import './App.scss'
import './scss/global.scss'
import Styleguide from './styleguide/Styleguide'
import Home from './views/Home'
import Projects from './views/Projects'
import Error404 from './views/Error404'
import Footer from '../src/components/Footer/Footer'


function App() {
  const location = useLocation();
  const is404Route = location.pathname === '/Error404';

  return (
    <>
      <Routes>
        <Route path="/Styleguide" element={<Styleguide />} />
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

      {!is404Route && <Footer />}
    </>
  );
}

export default App;
