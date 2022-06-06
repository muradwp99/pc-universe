
import React from 'react';
import './Business.css'
import { GiProgression } from 'react-icons/gi';
import { VscPreview } from 'react-icons/vsc';
import { BsTools } from 'react-icons/bs';
import { IoIosPeople } from 'react-icons/io';
const BusinessSummary = () => {
    return (
        <div>
            <h1 className="text-5xl text-center text-[#383838] mt-36 font-bold">Business Summary</h1>
            <div className=" container ">
                <div className="lg:w-4/5 w-[90%] mx-auto  grid my-20 grid-cols-1 lg:grid-cols-4 gap-5 justify-center">


                    <div className='flex items-center'>
                        < GiProgression className='text-size text-primary'></GiProgression>
                        <p className="text-xl font-semibold ml-3"> 120M+ <br /><span>Annual revenue</span> </p>

                    </div>
                    <div className='flex items-center'>
                        <VscPreview className='text-size text-primary'></VscPreview>
                        <p className="text-xl font-semibold ml-3"> 33K+ <br /> <span> Reviews</span></p>
                    </div>
                    <div className='flex items-center'>
                        <BsTools className='text-size text-primary'></BsTools>
                        <p className="text-xl font-semibold ml-3">50+ <br /> <span>Tools</span></p>
                    </div>
                    <div className='flex items-center'>
                        <IoIosPeople className='text-size text-primary'></IoIosPeople>
                        <p className="text-xl font-semibold ml-3">100+ <br /> <span>customers Served </span></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BusinessSummary;