import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='container lg:w-3/4 mx-auto'>
            <h1 className='text-center mt-5 font-bold'>Md Muradujjaman</h1>
            <p className='text-center font-bold'> Email: muradmd107@gmail.com</p>
            <p className='text-center font-bold'> Phone: 01789181646</p>

            <div>

                <div class="divider"></div>
                <h1 className='text-2xl font-bold mb-3'>Education Background:</h1>
                <p > <b>Higher Secondary School certificate (HSC) </b><span>: 2018, GPA: 4.08 Out of 5</span> </p>

                Govt. Tongi College

                Gazipur
                <div class="divider"></div>
                <h1 className='text-2xl font-bold'>List of technologies:</h1>
                <ul className='list-disc list-inside '>
                    <li>JavaScript</li>
                    <li>ES6</li>
                    <li>REST API</li>
                    <li>React.js</li>
                    <li>SPA</li>
                    <li>React Hooks</li>
                    <li>React Router</li>
                    <li>HTML5</li>
                    <li>CSS3 </li>
                    <li>Bootstrap5 </li>
                    <li>Tailwind Css </li>
                </ul>

            </div>
            <div class="divider"></div>
            <div className='mb-4'>
                <h1 className='text-2xl font-bold'>Project:</h1>
                <ul className='list-disc list-inside '>
                    <a href="">
                        Germen Client 					: <br></br>  https://shootingclub-zerbst.de/
                        https://mhv-international.de/ <br />
                        https://fleisch-company.de/ <br />
                        https://jl-immobilien-management.de/ <br />

                        Uk Client						: <br />  https://camillakennedy.com/ <br />

                        Bangladeshi Client				: <br /> https://smartmadedeals.com/ <br />
                        https://wellnmart.com/ <br />
                        https://eooly.com/ <br />
                        https://seamartbd.com/ <br />


                        Profile & Social:

                        Fiverr.com						: <br /> https://www.fiverr.com/muradwp99/ <br />
                        Facebook						: <br /> https://www.facebook.com/dg.ranaa/ <br />
                        Instagram						: <br /> https://www.instagram.com/_murad2_/ <br />

                    </a>
                </ul>
            </div>
        </div>
    );
};

export default MyPortfolio;