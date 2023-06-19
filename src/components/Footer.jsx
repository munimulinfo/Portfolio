import React from 'react';
import { FaCopyright } from 'react-icons/Fa';

const Footer = () => {
    return (
        <div className="text-center mx-auto">
            <div className='py-4 mt-10 text-center mx-auto flex items-center gap-2 justify-center'>
             <span><FaCopyright className='text-center mx-auto'/></span> 
              <h2 className='text-base text-gray-400'>Developed by Byomkesh </h2>
        </div>
        </div>
    );
};

export default Footer;