import React from 'react';
import Social from './Social';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div className='mx-auto lg:mt-10 py-2' id='contacts'>
            <h3 className='text-[#5F86D6] font-bold text-base mb-2 tracking-[.45em] text-center mb-5'>Contact Me</h3>
            <ContactForm></ContactForm>
            <Social></Social>
        </div>
    );
};

export default Contact;