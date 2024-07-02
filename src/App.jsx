import React from 'react';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Profiles from './components/Profiles';
import Achievements from './components/Achievements';
import Education from './components/Education';
// import NavBar from './components/NavBar';

const App = () => (
  <div className="font-sans">
    {/* <NavBar /> */}
    <Introduction />
    <Skills />
    <Projects />
    <Achievements />
    <Profiles />
    <Education />
    <ContactForm />
  </div>
);

export default App;
