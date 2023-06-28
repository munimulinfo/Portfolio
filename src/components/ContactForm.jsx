import React, { useRef } from 'react';
import Lottie, { useLottie } from "lottie-react"
import contact from '../assets/contact/call.json'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const ContactForm = () => {

  const sendEmail = (e) => {
      e.preventDefault();
    //    const name = event.target.user_name.value
    // const email = event.target.user_email.value
    // const message = event.target.user_msg.value
    

    emailjs.sendForm('service_a6hz61k', "template_31aamag", e.target, 'ZLR0Aoyby7He3AUkK')
        .then((result) => {
        Swal.fire({
            title: 'Sending Message...!',
            text: 'Send Message Successful',
            icon: 'success',
            confirmButtonText: 'Cool'
            })
          
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
    return (
        <div className='lg:py-8 lg:px-5'>
            <div className="content flex justify-between mx-auto items-center flex flex-col lg:flex lg:flex-row">
<div className="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12 p-12">
        <div className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
            relative z-10">
                        <p className="w-full lg:text-3xl text-2xl font-medium text-center leading-snug font-serif">Any Queries</p>
                        <p className="w-full text-sm text-center text-gray-500 mt-1 font-serif">Feel Free to Contact Me</p>
          <form onSubmit={sendEmail} className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
            <div className="relative">
              <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute">Your Name</p>
              <input placeholder="Enter Your Name" name="name" required type="text" className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"/>
                  
                    <input placeholder="Enter Your Email" name="email" required  type="text" className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"/>
            </div>
            <div className="relative">
              <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute">Your Message</p>
              <textarea placeholder="Enter Message" name="message" required type="text" className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md" />
            </div>
            <div className="relative">
              <button type="submit" className="w-full inline-block lg:pt-4 lg:pr-5 lg:pb-4 lg:pl-5 py-2 px-2 lg:text-xl text-lg font-medium text-center text-white bg-[#5F86D6]
                  rounded-lg transition duration-200 hover:bg-indigo-600 ease cursor-pointer" >Send Message</button>
            </div>
          </form>
        </div>
            </div>
            <div className="imgarea ">
                <Lottie animationData={contact} loop={true} className='' />;
            </div>
           </div>
        </div>
    );
};

export default ContactForm;