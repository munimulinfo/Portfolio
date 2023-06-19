import React from 'react';
import '../assets/css/Navbar.css'

const Navbar = () => {

    const navContent = <>
      <li className=''><a className='link-underline link-underline-black text-black' to="/">About me</a></li>
      <li  className=''><a className='link-underline link-underline-black text-black' to="/">Project</a></li>
        <li  className=''><a className='link-underline link-underline-black text-black' to="/">Experiences</a></li>
        <li  className=''><a className='link-underline link-underline-black text-black' to="/">Skills</a></li>
        <li  className=''><a className='link-underline link-underline-black text-black' to="/">Works</a></li>
        <li className=''> <a className='link-underline link-underline-black text-black' to="/">Contacts</a></li>
    </>
    
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
          {navContent}
        </ul>
      </div>
        </div>
                {/* Page content here */}
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200">
     {navContent}
      
    </ul>
    
  </div>
</div>
    );
};

export default Navbar;