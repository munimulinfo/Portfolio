import React, { useEffect } from 'react';
import '../assets/css/Navbar.css'
import { useState } from 'react';
import Scrollspy from 'react-scrollspy'
import { RiSunLine, RiMoonLine } from 'react-icons/Ri';
import { Slide } from "react-awesome-reveal";
import logo from '../assets/logo.png'

const Navbar = ({toggleDarkMode, darkMode}) => {

  const [scrolled, setScrolled] = useState(false);
  const Icon = darkMode ? RiSunLine : RiMoonLine;

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
    return ( 
      <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className={`navbar px-6 ${scrolled ? 'transition ease-in-out delay-150 lg:z-10 lg:bg-opacity-30 lg:bg-[#5F86D6] lg:text-white lg:fixed lg:max-w-screen-xl px-6 rounded-xl' : ''}`}>
        <div className="flex-1 gap-2 text-[#5E81E5] font-bold"><h3>Habib </h3> <p> Jr. React Developer</p></div>
        <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-none hidden lg:block ">
        <ul className="flex gap-8 cursor-pointer menu-horizontal ">
    <Scrollspy items={ ['about', 'project', 'exprience', 'skills', 'contacts' ] } currentClassName="active" style={{
                  display: 'flex',
                  gap: '37px',
        
      }}  offset={ 20 }>
      <li><a  className='link-underline link-underline-black text-black' href='#about'>About me</a></li>
      <li><a  className='link-underline link-underline-black text-black' href='#project'>Project</a></li>
      <li ><a  className='link-underline link-underline-black text-black' href='#exprience'>Experiences</a></li>
      <li><a  className='link-underline link-underline-black text-black' href='#skills'>Skills</a></li>
      <li><a  className='link-underline link-underline-black text-black' href='#contacts'>Contacts</a></li>
    </Scrollspy>
    <li> <button className="py-1"
            onClick={toggleDarkMode}>
                <Icon size={22} />
          </button></li>
        </ul>
      </div>
        </div>
                {/* Page content here */}
        </div> 
        
  <div className="drawer-side z-10 h-full">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
                 <Slide cascade damping={0.5}>      
          <ul className="menu p-4 w-80 h-full bg-base-200">
      
      <li> <a className='link-underline link-underline-black text-black' href='#about'>About me</a></li>
      <li  ><a className='link-underline link-underline-black text-black' href='#project'>Project</a></li>
      <li  ><a className='link-underline link-underline-black text-black' href='#exprience'>Experiences</a></li>
      <li  ><a className='link-underline link-underline-black text-black' href='#skills'>Skills</a></li>
      <li  ><a className='link-underline link-underline-black text-black' href='#contacts'>Contacts</a></li>
       <li> <button className="px-4 mt-5"
            onClick={toggleDarkMode}>
                <Icon size={22} />
          </button></li>
  
      
            </ul>
          </Slide> 
          </div>
          
      </div>
           

    );
};

export default Navbar;