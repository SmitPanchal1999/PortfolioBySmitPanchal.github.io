import React, { useEffect } from 'react';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import Experience from './components/Experience/experience';
import Footer from './components/Footer/footer';
import Home from './components/Home/home';
import Navbar from './components/Navbar/navbar';
import Projects from './components/Projects/projects';
import Resume from './components/Resume/resume';
import { BrowserRouter as Router } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 200,
      delay: 50,
      easing: 'ease-out-cubic',
      anchorPlacement: 'top-bottom'
    });
  }, []);

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar/>
        <Home/>
        <About/>
        <Experience/>
        <Projects/>
        {/* <Resume/> */}
        <Contact/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
