import React from 'react';
import bannerbg from '../../../Assets/img/banner-bg.jpg'
import bannerbg2 from '../../../Assets/img/banner-bg2.png'
import bannerbg3 from '../../../Assets/img/banner-bg3.jpg'
import Parts from '../../../Parts/Parts';
import BusinessSummary from '../../BusinessSummary/BusinessSummary';
import GetInTouch from './GetInTouch';
import Partners from './Partners';
import Reviews from './Reviews';
import { VscArrowRight } from "react-icons/vsc";


const Home = () => {
    return (
        <div className=''>
            <div
                id="carouselDarkVariant"
                className="carousel mt-5 lg:w-4/5 w-[91%] rounded-xl mx-auto slide carousel-fade carousel-dark relative"
                data-bs-ride="carousel"
            >
                <div class="carousel-indicators absolute right-0 bottom-0 left-0  justify-center p-0 mb-4 hidden lg:flex">
                    <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="1"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="2"
                        aria-label="Slide 1"
                    ></button>
                </div>

                <div class="carousel-inner relative w-full overflow-hidden">

                    <div class="carousel-item active relative float-left w-full">
                        <img
                            src={bannerbg}
                            class="block w-full"
                            alt="Motorbike Smoke"
                        />
                        <div class="carousel-caption hidden md:block top-[20%] text-left left-0 pl-24 absolute">
                            <h5 class="text-6xl uppercase text-white font-semibold">Exclusive <br /> Offers</h5>
                            <p className='text-white text-2xl py-5'>We ensure <br /> the first Comes in!</p>
                            <a href='\blogs' className='w-44 bg-primary flex items-center text-white py-3 px-3 justify-center rounded-md text-md'><span>Learn more </span><span className='ml-5'><VscArrowRight></VscArrowRight></span></a>
                        </div>
                    </div>
                    <div class="carousel-item relative float-left w-full">
                        <img
                            src={bannerbg2}
                            class="block w-full"
                            alt="Mountaintop"
                        />
                        <div class="carousel-caption hidden md:block top-[20%] text-left left-0 ml-24 absolute">
                            <h5 class="text-6xl uppercase font-semibold text-white">Latest <br /> technology</h5>
                            <p className='text-white text-2xl py-5'>Build with bear <br /> hand to explore</p>
                            <a href='\blogs' className='w-44 bg-primary flex items-center text-white py-3 px-3 justify-center rounded-md text-md'><span>Learn more </span><span className='ml-5'><VscArrowRight></VscArrowRight></span></a>
                        </div>
                    </div>

                    <div class="carousel-item relative float-left w-full">
                        <img
                            src={bannerbg3}
                            class="block w-full"
                            alt="Woman Reading a Book"
                        />
                        <div class="carousel-caption hidden md:block top-[20%] text-left left-0 ml-24 absolute">
                            <h5 class="text-6xl uppercase text-white font-semibold">Hardware <br />Compatibility </h5>
                            <p className='text-white text-2xl py-5'>We make sure <br /> that it fits!</p>
                            <a href='\blogs' className='w-44 bg-primary flex items-center text-white py-3 px-3 justify-center rounded-md text-md'><span>Learn more </span><span className='ml-5'><VscArrowRight></VscArrowRight></span></a>
                        </div>
                    </div>
                </div>

                <div className='lg:hidden'>
                    <button
                        class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                        type="button"
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide="prev"
                    >
                        <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                        class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-left border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                        type="button"
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide="next"
                    >
                        <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <Partners></Partners>
            <Reviews></Reviews>
            <GetInTouch></GetInTouch>
        </div>
    );
};

export default Home;