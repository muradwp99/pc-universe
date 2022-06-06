
import React from 'react';

import Part from './Part/Part';

const Parts = () => {

    return (
        <div className='lg:w-4/5 w-[90%] mx-auto  mt-16 sm:container'>
            <h4 className='text-2xl font-medium text-center'>
                The Collection

            </h4>
            <h2 className='text-4xl uppercase font-bold text-center'>In details</h2>
            <Part></Part>
        </div>
    );
};

export default Parts;