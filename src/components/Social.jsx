import React from 'react';
import github from '../assets/logos/github.svg'
import facebook from '../assets/social/facebook.svg'
import gmail from '../assets/social/gmail.svg'
import linkedin from '../assets/social/linkedin.svg'
import whatsapp from '../assets/social/whatsapp.svg'
import { FiArrowRight } from 'react-icons/Fi';
import { useState } from 'react';

const Social = () => {

  const [hoveredItems, setHoveredItems] = useState({});

  const handleMouseEnter = (itemId) => {
    setHoveredItems((prevHoveredItems) => ({
      ...prevHoveredItems,
      [itemId]: true,
    }));
  };

  const handleMouseLeave = (itemId) => {
    setHoveredItems((prevHoveredItems) => ({
      ...prevHoveredItems,
      [itemId]: false,
    }));
  };
    
    

    return (
        <div className='py-2'>
             <div className="lg:justify-center flex lg:flex-row flex-col gap-5 ">
                <div className="flex items-center gap-2 border border-1 px-5 py-1 rounded-xl shadow-md bg-slate-50 transition-colors duration-300 hover:bg-[#76D4EA] hover:text-slate-50"
                    onMouseEnter={() => handleMouseEnter('item1')}
                    onMouseLeave={() => handleMouseLeave('item1')}>
                    <img className='h-4 w-4' src={github} alt="" /> <button  >
                       
                        <a className='flex items-center gap-1' target="_blank" href="https://github.com/byomkesh2580">Github 
                         {
                            hoveredItems['item1'] ? <FiArrowRight className='transition duration-300' /> : <></>
                        }
                        </a>
                        
                    
                    </button>
                       </div>
                <div className="flex items-center gap-2 border border-1 px-5 py-1 rounded-xl shadow-md bg-slate-50 transition-colors duration-300 hover:bg-[#76D4EA] hover:text-slate-50"
                    onMouseEnter={() => handleMouseEnter('item2')}
                    onMouseLeave={() => handleMouseLeave('item2')}
                >
                    <img className='h-4 w-4' src={facebook} alt="" /> <button >
                        <a className='flex items-center gap-1' target="_blank" href="https://www.facebook.com/habibrahman2580/">Facebook
                        {
                            hoveredItems['item2'] ? <FiArrowRight className='' /> : <></>
                            }
                            </a>
                    </button>
                </div>
                <div className="flex items-center gap-2 border border-1 px-5 py-1  rounded-xl shadow-md bg-slate-50 transition-colors duration-300 hover:bg-[#76D4EA] hover:text-slate-50"
                onMouseEnter={() => handleMouseEnter('item3')}
                    onMouseLeave={() => handleMouseLeave('item3')}
                >
                    <img className='h-4 w-4' src={gmail} alt="" /> <button>
                        <a className='flex items-center gap-1' target="_blank" href="mailto:habibrahman2580@gmail.com">Email
                        {
                            hoveredItems['item3'] ? <FiArrowRight className='' /> : <></>
                            }
                            </a>
                    </button>
                </div>
                <div className="flex items-center gap-2 border border-1 px-5 py-1  rounded-xl shadow-md bg-slate-50 transition-colors duration-300 hover:bg-[#76D4EA] hover:text-slate-50"
                    onMouseEnter={() => handleMouseEnter('item4')}
                    onMouseLeave={() => handleMouseLeave('item4')}
                >
                    <img className='h-4 w-4' src={linkedin} alt="" /> <button>
                        <a className='flex items-center gap-1' target="_blank" href="https://www.linkedin.com/in/habib1028/">Linkedin
                        {
                            hoveredItems['item4'] ? <FiArrowRight className='' /> : <></>
                            }
                            </a>
                    </button>
                </div>
                <div className="flex items-center gap-2 border border-1 px-5 py-1  rounded-xl shadow-md bg-slate-50 transition-colors duration-300 hover:bg-[#76D4EA] hover:text-slate-50"
                onMouseEnter={() => handleMouseEnter('item5')}
                    onMouseLeave={() => handleMouseLeave('item5')}
                >
                    <img className='h-4 w-4' src={whatsapp} alt="" /> <button>
                        <a className='flex items-center gap-1' target="_blank" href="https://api.whatsapp.com/send?phone=01635034289">Whatsapp
                        {
                            hoveredItems['item5'] ? <FiArrowRight className='' /> : <></>
                            }
                            </a>
                    </button>
                </div>
    </div>
        </div>
    );
};

export default Social;