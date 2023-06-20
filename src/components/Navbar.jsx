import React from 'react';
import '../assets/css/Navbar.css'
import { useState } from 'react';
import Scrollspy from 'react-scrollspy'

const Navbar = () => {


  
  
    return ( 
      <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="navbar">
        <div className="flex-1">Navbar Title</div>
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
        
      }}>
      <li ><a className='link-underline link-underline-black text-black' href='#about'>About me</a></li>
      <li ><a className='link-underline link-underline-black text-black' href='#project'>Project</a></li>
      <li ><a className='link-underline link-underline-black text-black' href='#exprience'>Experiences</a></li>
      <li ><a className='link-underline link-underline-black text-black' href='#skills'>Skills</a></li>
      <li ><a className='link-underline link-underline-black text-black' href='#contacts'>Contacts</a></li>
    </Scrollspy>
    
        </ul>
      </div>
        </div>
                {/* Page content here */}
  </div> 
  <div className="drawer-side z-10 h-full">
    <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200">
     <Scrollspy items={ ['about', 'project', 'exprience', 'skills', 'contacts' ] } currentClassName="active">
      <li  ><a className='link-underline link-underline-black text-black' href='#about'>About me</a></li>
      <li  ><a className='link-underline link-underline-black text-black' href='#project'>Project</a></li>
      <li  ><a className='link-underline link-underline-black text-black' href='#exprience'>Experiences</a></li>
      <li  ><a className='link-underline link-underline-black text-black' href='#skills'>Skills</a></li>
      <li  ><a className='link-underline link-underline-black text-black' href='#contacts'>Contacts</a></li>
    </Scrollspy>
      
    </ul>
    
  </div>
      </div>

    );
};

export default Navbar;