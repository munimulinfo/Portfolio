import React from 'react';
import Header from './shared/Header';
import AllExprience from './AllExprience';

const Learning = () => {
    return (
        <div className='mt-10'>
            <Header subtitle={'MY SKILLS'} title={'What am I Learning?'}></Header>
            <div className="all-exp">
                <AllExprience></AllExprience>
            </div>
        </div>
    );
};

export default Learning;