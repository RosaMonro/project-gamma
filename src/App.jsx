import { Route, Routes, useLocation } from 'react-router-dom'
import './styleguide/Styleguide'
import './scss/global.scss'
import Styleguide from './styleguide/Styleguide'
import Home from './views/Home'
import Projects from './views/Projects'
import Error404 from './views/Error404'
import Footer from '../src/components/Footer/Footer'
import { motion, useScroll, useSpring } from "framer-motion";


function App() {
  const location = useLocation();
  const is404Route = location.pathname === '/Error404';

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />

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
