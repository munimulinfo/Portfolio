import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import ImageArea from './ImageArea';



const AboutMe = () => {
    return (
        <div id='about'>
             <div className='flex items-center'>
            <div className="content-area w-4/6 gap-6">
                <h3 className='text-[#5F86D6] text-base mb-2 font-bold'>Hello!</h3>
                
                <div className='flex items-center text-5xl'>
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