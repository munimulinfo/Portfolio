import React from 'react';

const Header = ({subtitle, title}) => {
    return (
        <div>
            <h3 className='text-[#5F86D6] text-base mb-2 tracking-[.45em]'>{subtitle }</h3>
            <h2 className='text-3xl font-bold'>{title }</h2>
        </div>
    );
};

export default Header;