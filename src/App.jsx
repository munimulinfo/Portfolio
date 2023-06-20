import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Project from './components/Project';
import Exprience from './components/Exprience';
import Learning from './components/Learning';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useState } from 'react';
import { ThemeContext } from './providers/ThemeContext';


const App = () => {

  const { darkMode, toggleDarkMode } = useContext(ThemeContext)
  const themeClass = darkMode ? 'dark' : 'light';

  return (
    <div className={`bg-${themeClass}-background text-${themeClass}-text`}>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode}></Navbar>
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