import React from 'react';
import blog1 from '../../Assets/img/gamingMotherboard.jpg'
import blog2 from '../../Assets/img/banner-bg2.png'
import blog3 from '../../Assets/img/gamingPcCase.png'
import blog4 from '../../Assets/img/graphicCard.png'
import blog5 from '../../Assets/img/banner-bg3.jpg'

const Blogs = () => {
    return (
        <div className='container lg:w-11/12 sm:container my-5 w-[90%] mx-auto'>

            <div className='card lg:card-side bg-base-100 shadow-xl p-5'>
                <img className='w-96 mr-5' src={blog1} alt="" />
                <div className='card-body'>
                    <h1 className='text-2xl font-bold'>
                        How will you improve the performance of a React Application?
                    </h1>
                    <ul className='list-disc list-inside '>
                        <li>
                            Keeping component state local where necessary.
                        </li>
                        <li>
                            Memoizing React components to prevent unnecessary re-renders.
                        </li>
                        <li>
                            Code-splitting in React using dynamic import()
                        </li>
                        <li>
                            Windowing or list virtualization in React.
                        </li>
                        <li>
                            Lazy loading images in React.
                        </li>
                    </ul>
                </div>
            </div>
            <div className='card lg:card-side bg-base-100 shadow-xl mt-5 p-5'>
                <img className='w-96 mr-5' src={blog2} alt="" />
                <div className='card-body'>
                    <h1 className='text-2xl font-bold'>
                        How does prototypical inheritance work?
                    </h1>
                    <p className=''> <b>Ans:</b> Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
                </div>

            </div>
            <div className='card lg:card-side bg-base-100  lg:w-full shadow-xl mt-5 p-5'>
                <img className='w-96 mr-5' src={blog3} alt="" />
                <div className='card-body'>
                    <h1 className='text-2xl font-bold'>
                        What is a unit test? Why should write unit tests?
                    </h1>
                    <p className=''> <b>Ans:</b>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.</p>
                </div>

            </div>
            <div className='card lg:card-side bg-base-100  lg:w-full shadow-xl mt-5 p-5'>
                <img className='w-96 mr-5' src={blog4} alt="" />
                <div className='card-body'>
                    <h1 className='text-2xl font-bold'>
                        You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                    </h1>
                    <p className=''> <b>Ans:</b>I will use javascript includes() mathodsThe includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.includes() method is intentionally generic. It does not require this value to be an Array object, so it can be applied to other kinds of objects (e.g. array-like objects).</p>
                </div>

            </div>
            <div className='card lg:card-side bg-base-100  lg:w-full shadow-xl mt-5 p-5'>
                <img className='w-96 mr-5' src={blog5} alt="" />
                <div className='card-body'>
                    <h1 className='text-2xl font-bold'>
                        What are the different ways to manage a state in a React application?
                    </h1>
                    <p className='font-semibold text-xl'>There are four main types of state you need to properly manage in your React apps:</p>
                    <ul className='list-disc list-inside '>
                        <li>
                            Local state.
                        </li>
                        <li>
                            Global state.
                        </li>
                        <li>
                            Server state.
                        </li>
                        <li>
                            URL state.
                        </li>

                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Blogs;