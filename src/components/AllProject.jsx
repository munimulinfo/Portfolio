import React from 'react';
import sportShala from '../assets/projects/Screenshot_2.png'
import powerToys from '../assets/projects/powertoys.jpg'
import chefai from '../assets/projects/chefai.jpg'
import chakrihub from '../assets/projects/chakrihub.jpg'
import todo from '../assets/projects/todo.jpg'

import reactLogo from '../assets/react-logo.svg'
import api from '../assets/logos/api.svg'
import tailwind from '../assets/logos/tailwind.svg'
import express from '../assets/logos/express.svg'
import firebase from '../assets/logos/firebase.svg'
import mongoDB from '../assets/logos/mongoDB.svg'
import javascript from '../assets/logos/javascript.svg'
import github from '../assets/logos/github.svg'
import demo from '../assets/logos/demo.svg'

const AllProject = () => {
    return (
        <div className='lg:grid lg:grid-cols-3 grid-cols-1 w-full '>

            {/* Sports Shala */}
            <div className="card-area mt-10">
                 <div className="card w-96 bg-base-100 shadow-xl hover:scale-110  ease-in duration-100  mx-auto">
  <figure><img src={sportShala} alt="sportShala" className='h-32' /></figure>
  <div className="card-body ">
    <h2 className="card-title">
    Melody Music Academy - Music Instruments Learning Platform 
                    </h2>
    <p className='text-sm text-gray-500'>Melody Music Academy is a Application Based on Music Instrument Learning Where you can Be a instructor, Add your own course and as a student you can buy it.</p>
                        <div className="card-actions justify-start mt-3">
                              <div className="flex items-center gap-1 border border-2 p-1 px-2 rounded-xl bg-[#F7DF1E] bg-opacity-30">
                                <div className="logo-area">
                                    <img className='h-4 w-4' src={javascript} alt="" />
            </div>
                                <div className="text-area">
                                     <span className='text-sm'>Javascript</span></div> 
            </div>

            <div className="flex items-center gap-1 border border-2 p-1 px-2 rounded-xl bg-[#00D8FF] bg-opacity-30">
                                <div className="logo-area">
                                    <img className='h-4 w-4' src={reactLogo} alt="" />
            </div>
                                <div className="text-area">
                                     <span className='text-sm'>React</span></div> 
            </div>

                            

        <div className="flex items-center gap-1 border border-2 p-1 px-2 rounded-xl bg-[#ff6464] bg-opacity-30">
                                <div className="logo-area">
                                    <img className='h-4 w-4' src={api} alt="" />
            </div>
                                <div className="text-area">
                                     <span className='text-sm'>API</span></div> 
                            </div>

                              <div className="flex items-center gap-1 border border-2 p-1 px-2 rounded-xl bg-[#8CC84B] bg-opacity-30">
                                <div className="logo-area">
                                    <img className='h-4 w-4' src={express} alt="" />
            </div>
                                <div className="text-area">
                                     <span className='text-sm'>Express JS</span></div> 
                            </div>
                            <div className="flex items-center gap-1 border border-2 p-1 px-2 rounded-xl bg-[#FFA712] bg-opacity-30">
                                <div className="logo-area">
                                    <img className='h-4 w-4' src={firebase} alt="" />
            </div>
                                <div className="text-area">
                                     <span className='text-sm'>Firebase</span></div> 
                            </div>
                            
                            <div className="flex items-center gap-1 border border-2 p-1 px-2 rounded-xl bg-[#499D4A] bg-opacity-30">
                                <div className="logo-area">
                                    <img className='h-4 w-4' src={mongoDB} alt="" />
            </div>
                                <div className="text-area">
                                     <span className='text-sm'>MongoDB</span></div> 
                               </div>
                            
                              <div className="flex items-center gap-1 border border-2 p-1 px-2 rounded-xl bg-[#2298BD] bg-opacity-30">
                                <div className="logo-area">
                                    <img className='h-4 w-4' src={tailwind} alt="" />
            </div>
                                <div className="text-area">
                                     <span className='text-sm'>Tailwind CSS</span></div> 
                               </div>
                            

                        </div>
                        
                        <div className="divider mb-[-15px] mt-[-5px]"></div>

                    <div className="card-actions justify-center mt-4 flex gap-8 ">
                            <div className="flex items-center gap-2 border border-1 px-5 py-1  rounded-md bg-base-200">
                                <img className='h-4 w-4' src={github} alt="" /> <button><a target="_blank" href="https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-munimulinfo">Github</a>  </button>
                       </div>
                            <div className="flex items-center gap-2 border border-1 px-5 py-1  rounded-md bg-blue-200">
                                <img className='h-4 w-4' src={demo} alt="" /> <button><a target="_blank" href="https://music-insutruments-scholl.web.app/">View Demo</a>  </button>
                       </div>
    </div>
  </div>
</div>
            </div>

            {/* Power Toys Shala */}
            <div className="card-area mt-10">
                 <div className="card w-96 bg-base-100 shadow-xl hover:scale-110  ease-in duration-100 mx-auto">
  <figure><img src={powerToys} className='h-48' alt="powerToys" /></figure>
  <div className="card-body ">
    <h2 className="card-title">
      Power Toys - Toys Market Place
                    </h2>
    <p className='text-sm text-gray-500'>PowerToys is the website where you find your Super Heroes Toys and On Future You will buy it from here</p>
                        <div className="card-actions justify-start mt-3">
                              <div className="flex items-center gap-1 border border-2 p-1 px-2 rounded-xl bg-[#F7DF1E] bg-opacity-30">
                                <div className="logo-area">
                                    <img className='h-4 w-4' src={javascript} alt="" />
            </div>
                                <div className="text-area">
                                     <span className='text-sm'>Javascript</span></div> 
            </div>

            <div className="flex items-center gap-1 border border-2 p-1 px-2 rounded-xl bg-[#00D8FF] bg-opacity-30">
                                <div className="logo-area">
                                    <img className='h-4 w-4' src={reactLogo} alt="" />
            </div>
                                <div className="text-area">
                                     <span className='text-sm'>React</span></div> 
            </div>

                            

        <div className="flex items-center gap-1 border border-2 p-1 px-2 rounded-xl bg-[#ff6464] bg-opacity-30">
                                <div className="logo-area">
                                    <img className='h-4 w-4' src={api} alt="" />
            </div>
                                <div className="text-area">
                                     <span className='text-sm'>API</span></div> 
                            </div>

                              <div className="flex items-center gap-1 border border-2 p-1 px-2 rounded-xl bg-[#8CC84B] bg-opacity-30">
                                <div className="logo-area">
                                    <img className='h-4 w-4' src={express} alt="" />
            </div>
                                <div className="text-area">
                                     <span className='text-sm'>Express</span></div> 
                            </div>
                            <div className="flex items-center gap-1 border border-2 p-1 px-2 rounded-xl bg-[#FFA712] bg-opacity-30">
                                <div className="logo-area">
                                    <img className='h-4 w-4' src={firebase} alt="" />
            </div>
                                <div className="text-area">
                                     <span className='text-sm'>Firebase</span></div> 
                            </div>
                            
                            
                              <div className="flex items-center gap-1 border border-2 p-1 px-2 rounded-xl bg-[#2298BD] bg-opacity-30">
                                <div className="logo-area">
                                    <img className='h-4 w-4' src={tailwind} alt="" />
            </div>
                                <div className="text-area">
                                     <span className='text-sm'>Tailwind CSS</span></div> 
                               </div>
                            

                        </div>
                        
                        <div className="divider mb-[-15px] mt-[-5px]"></div>

                    <div className="card-actions justify-center mt-4 flex gap-8 ">
                            <div className="flex items-center gap-2 border border-1 px-5 py-1  rounded-md bg-base-200">
                                <img className='h-4 w-4' src={github} alt="" /> <button><a target="_blank" href="https://github.com/munimulinfo/Power-Toys">Github</a>  </button>
                       </div>
                            <div className="flex items-center gap-2 border border-1 px-5 py-1  rounded-md bg-blue-200">
                                <img className='h-4 w-4' src={demo} alt="" /> <button><a target="_blank" href="https://powertoys-c6150.web.app/">View Demo</a>  </button>
                       </div>
    </div>
  </div>
</div>
            </div>


             {/* Chefai */}
            <div className="card-area mt-10">
                 <div className="card w-96 bg-base-100 shadow-xl hover:scale-110  ease-in duration-100 mx-auto">
  <figure><img src={chefai} className='h-48' alt="chefai" /></figure>
  <div className="card-body ">
    <h2 className="card-title">
      Chefai - Chef Directory
                    </h2>
    <p className='text-sm text-gray-500'>Chafai is mainly a website where you can find Best Chef with your needs, there are also option for Check Out Chef's Recipies and Details</p>
                        <div className="card-actions justify-start mt-3">
                              <div className="flex items-center gap-1 border border-2 p-1 px-2 rounded-xl bg-[#F7DF1E] bg-opacity-30">
                                <div className="logo-area">
                                    <img className='h-4 w-4' src={javascript} alt="" />
            </div>
                                <div className="text-area">
                                     <span className='text-sm'>Javascript</span></div> 
            </div>

            <div className="flex items-center gap-1 border border-2 p-1 px-2 rounded-xl bg-[#00D8FF] bg-opacity-30">
                                <div className="logo-area">
                                    <img className='h-4 w-4' src={reactLogo} alt="" />
            </div>
                                <div className="text-area">
                                     <span className='text-sm'>React</span></div> 
            </div>

                            

                            <div className="flex items-center gap-1 border border-2 p-1 px-2 rounded-xl bg-[#FFA712] bg-opacity-30">
                                <div className="logo-area">
                                    <img className='h-4 w-4' src={firebase} alt="" />
            </div>
                                <div className="text-area">
                                     <span className='text-sm'>Firebase</span></div> 
                            </div>
                            
                            
                              <div className="flex items-center gap-1 border border-2 p-1 px-2 rounded-xl bg-[#2298BD] bg-opacity-30">
                                <div className="logo-area">
                                    <img className='h-4 w-4' src={tailwind} alt="" />
            </div>
                                <div className="text-area">
                                     <span className='text-sm'>Tailwind CSS</span></div> 
                               </div>
                            

                        </div>
                        
                        <div className="divider mb-[-15px] mt-[-5px]"></div>

                    <div className="card-actions justify-center mt-4 flex gap-8 ">
                            <div className="flex items-center gap-2 border border-1 px-5 py-1  rounded-md bg-base-200">
                                <img className='h-4 w-4' src={github} alt="" /> <button><a target="_blank" href="https://github.com/munimulinfo/Chefai">Github</a>  </button>
                       </div>
                            <div className="flex items-center gap-2 border border-1 px-5 py-1  rounded-md bg-blue-200">
                                <img className='h-4 w-4' src={demo} alt="" /> <button><a target="_blank" href="http://precious-crack.surge.sh/">View Demo</a>  </button>
                       </div>
    </div>
  </div>
</div>
            </div>



             {/* ChakriHub */}
            <div className="card-area mt-10">
                 <div className="card w-96 bg-base-100 shadow-xl hover:scale-110  ease-in duration-100 mx-auto">
  <figure><img src={chakrihub} className='h-48' alt="chakrihub" /></figure>
  <div className="card-body ">
    <h2 className="card-title">
      Chakri Hub - Jobs Hunter Market
                    </h2>
    <p className='text-sm text-gray-500'>On Chakri Hub you can find various kind of jobs that meets your skills and category. The Jobs you add to the Apply list are saved on localStorage.</p>
                        <div className="card-actions justify-start mt-3">
                              <div className="flex items-center gap-1 border border-2 p-1 px-2 rounded-xl bg-[#F7DF1E] bg-opacity-30">
                                <div className="logo-area">
                                    <img className='h-4 w-4' src={javascript} alt="" />
            </div>
                                <div className="text-area">
                                     <span className='text-sm'>Javascript</span></div> 
            </div>

            <div className="flex items-center gap-1 border border-2 p-1 px-2 rounded-xl bg-[#00D8FF] bg-opacity-30">
                                <div className="logo-area">
                                    <img className='h-4 w-4' src={reactLogo} alt="" />
            </div>
                                <div className="text-area">
                                     <span className='text-sm'>React</span></div> 
            </div>

                            
                            
                            
                              <div className="flex items-center gap-1 border border-2 p-1 px-2 rounded-xl bg-[#2298BD] bg-opacity-30">
                                <div className="logo-area">
                                    <img className='h-4 w-4' src={tailwind} alt="" />
            </div>
                                <div className="text-area">
                                     <span className='text-sm'>Tailwind CSS</span></div> 
                               </div>
                            

                        </div>
                        
                        <div className="divider mb-[-15px] mt-[-5px]"></div>

                    <div className="card-actions justify-center mt-4 flex gap-8 ">
                            <div className="flex items-center gap-2 border border-1 px-5 py-1  rounded-md bg-base-200">
                                <img className='h-4 w-4' src={github} alt="" /> <button><a target="_blank" href="https://github.com/munimulinfo/Job-Hunter">Github</a>  </button>
                       </div>
                            <div className="flex items-center gap-2 border border-1 px-5 py-1  rounded-md bg-blue-200">
                                <img className='h-4 w-4' src={demo} alt="" /> <button><a target="_blank" href="https://glittery-gecko-c1499b.netlify.app/">View Demo</a>  </button>
                       </div>
    </div>
  </div>
</div>
            </div>



            {/* To Do List */}
            <div className="card-area mt-10">
                 <div className="card w-96 bg-base-100 shadow-xl hover:scale-110  ease-in duration-100 mx-auto">
  <figure><img src={todo} className='h-48' alt="todo" /></figure>
  <div className="card-body ">
    <h2 className="card-title">
      To do List- With React
                    </h2>
    <p className='text-sm text-gray-500'>I’ve developed a to-do list app using React Context and Hooks. The tasks you add to the to-do list are saved on localStorage.</p>
                        <div className="card-actions justify-start mt-3">
                              <div className="flex items-center gap-1 border border-2 p-1 px-2 rounded-xl bg-[#F7DF1E] bg-opacity-30">
                                <div className="logo-area">
                                    <img className='h-4 w-4' src={javascript} alt="" />
            </div>
                                <div className="text-area">
                                     <span className='text-sm'>Javascript</span></div> 
            </div>

            <div className="flex items-center gap-1 border border-2 p-1 px-2 rounded-xl bg-[#00D8FF] bg-opacity-30">
                                <div className="logo-area">
                                    <img className='h-4 w-4' src={reactLogo} alt="" />
            </div>
                                <div className="text-area">
                                     <span className='text-sm'>React</span></div> 
            </div>

                            
                            
                            
                              <div className="flex items-center gap-1 border border-2 p-1 px-2 rounded-xl bg-[#2298BD] bg-opacity-30">
                                <div className="logo-area">
                                    <img className='h-4 w-4' src={tailwind} alt="" />
            </div>
                                <div className="text-area">
                                     <span className='text-sm'>Tailwind CSS</span></div> 
                               </div>
                            

                        </div>
                        
                        <div className="divider mb-[-15px] mt-[-5px]"></div>

                    <div className="card-actions justify-center mt-4 flex gap-8 ">
                            <div className="flex items-center gap-2 border border-1 px-5 py-1  rounded-md bg-base-200">
                                <img className='h-4 w-4' src={github} alt="" /> <button><a target="_blank" href="https://github.com/munimulinfo/TODO-LIST">Github</a>  </button>
                       </div>
                            <div className="flex items-center gap-2 border border-1 px-5 py-1  rounded-md bg-blue-200">
                                <img className='h-4 w-4' src={demo} alt="" /> <button><a target="_blank" href="https://glistening-lamington-46b1d3.netlify.app/">View Demo</a>  </button>
                       </div>
    </div>
  </div>
</div>
            </div>

        </div>
    );
};

export default AllProject;