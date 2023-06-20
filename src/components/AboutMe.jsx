import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import ImageArea from './ImageArea';
import Goo from 'gooey-react'
import { Slide } from "react-awesome-reveal";



const AboutMe = () => {
    return (
        <div id='about'>
            
             <div className='lg:flex lg:items-center text-center lg:text-left'>
            <div className="content-area lg:w-4/6 lg:gap-6 text-center lg:text-left w-5/6 mx-auto">
                <h3 className='text-[#5F86D6] text-base mb-2 font-bold '>Hello!</h3>
                
                    <Slide delay={0.5}>
                        <div className='flex items-center lg:text-5xl text-3xl '>
                    <h2 className=''>I'm {' '}</h2>
                     <span className='ml-3 font-bold text-[#5F86D6]'>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[' Habibur Rahman.', ' React Developer.']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
                </div>
                </Slide >
               <p className='mt-10'>Hi, I'm Habib, a passionate React Developer with experience in building user-friendly and visually appealing web applications. I thrive on creating seamless user experiences and transforming design concepts into functional websites.
                        My skill set includes expertise in modern frontend technologies such as HTML5, CSS3, JavaScript, and frameworks like React and Node. </p> <br />
                    
                <p>I'm also proficient in build API/RestFul API, creating API with Express and Use MongoDB as Database. I also have experience with version control systems like Git and package managers such as npm.</p>
               
            </div>
            <div className="image-area">
                <ImageArea></ImageArea>
            </div>
            </div>
       </div>
    );
};

export default AboutMe;