import React from 'react';
import Marquee from "react-fast-marquee";
import reactLogo from '../assets/react-logo.svg'
import api from '../assets/logos/api.svg'
import tailwind from '../assets/logos/tailwind.svg'
import express from '../assets/logos/express.svg'
import firebase from '../assets/logos/firebase.svg'
import mongoDB from '../assets/logos/mongoDB.svg'
import javascript from '../assets/logos/javascript.svg'
import github from '../assets/logos/github.svg'
import demo from '../assets/logos/demo.svg'
import wordpress from '../assets/logos/wordpress.svg'

const AllExprience = () => {
    return (
            <Marquee className='py-10'>
                <img className='h-36 w-36 ml-10' src={javascript} alt="" />
                <img className='h-36 w-36 ml-10' src={reactLogo} alt="" />
            <img className='h-36 w-36 ml-10' src={tailwind} alt="" />
            <img className='h-36 w-36 ml-10' src={express} alt="" />
            <img className='h-36 w-36 ml-10' src={api} alt="" />
            <img className='h-36 w-36 ml-10' src={mongoDB} alt="" />
            <img className='h-36 w-36 ml-10' src={firebase} alt="" />
            <img className='h-36 w-36 ml-10' src={wordpress} alt="" />
            </Marquee>

    );
};

export default AllExprience;