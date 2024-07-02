import React from 'react';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Profiles from './components/Profiles';
import Achievements from './components/Achievements';
import Education from './components/Education';
// import NavBar from './components/NavBar';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App(){ 

  useEffect(()=> {
    Aos.init({
      duration:2000
    })
  },[]);
  return (

  <div className="font-sans">
    {/* <NavBar /> */}
    <Introduction />
    <Skills />
    <Projects />
    <Achievements />
    <Profiles />
    <Education />
    <ContactForm />
    <p className="text-gray-400 text-center p-6"><h1>© 2024 Your Name. All rights reserved.</h1></p>
  </div>
)};

export default App;
