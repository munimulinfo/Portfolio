import React from 'react';
import call from '../assets/Universe.json'
import Lottie, { useLottie } from "lottie-react"

const ImageArea = () => {
    return (
         <div className="imgarea ">
                <Lottie animationData={call} loop={true} className='' />;
            </div>
    );
};

export default ImageArea;