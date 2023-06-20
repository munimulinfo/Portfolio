import React from 'react';

const Header = ({subtitle, title}) => {
    return (
        <div className='mx-auto text-center lg:m-0 lg:text-left'>
            <h3 className='text-[#5F86D6] text-base mb-2 tracking-[.45em]'>{subtitle }</h3>
            <h2 className='text-3xl font-bold'>{title }</h2>
        </div>
    );
};

export default Header;