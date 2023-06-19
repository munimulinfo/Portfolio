import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Project from './components/Project';
import Exprience from './components/Exprience';
import Learning from './components/Learning';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className=''>
      <Navbar></Navbar>
      <AboutMe></AboutMe>
      <Project></Project>
      <Exprience></Exprience>
      <Learning></Learning>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default App;