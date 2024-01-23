import './App.css';
import Navbar from './components/Navbar/Navbar';
import Start from './components/Start/Start';
import AboutMe from './components/AboutMe/About-me';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects'
import YellowElement from './components/YellowElement/YellowElement';

function App() {

  return (
    <div className= "App" >
      <div className="app-container">
        <YellowElement/>
        <Navbar/>
        <Start/>
        <AboutMe/>
        <Projects/>
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
