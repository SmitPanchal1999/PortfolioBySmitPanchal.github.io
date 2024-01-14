import About from './components/About/about';
import Contact from './components/Contact/contact';
import Experience from './components/Experience/experience';
import Footer from './components/Footer/footer';
import Home from './components/Home/home';
import Navbar from './components/Navbar/navbar';
import Projects from './components/Projects/projects';
import Resume from './components/Resume/resume';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
