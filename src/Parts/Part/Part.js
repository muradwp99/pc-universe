import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Part = () => {
    const [parts, setParts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/parts')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    const navigate = useNavigate()
    const sliceParts = parts.slice(0, 3)


    return (
        <div className=' grid lg:grid-cols-3 grid-cols-1 mt-10 gap-5'>
            {
                sliceParts.map(product => <div key={product._id} className="lg:max-w-full bg-base-100 shadow-xl bg-[#ebffe3]">
                    <div class="transition duration-300 ease-in-out relative overflow-hidden bg-no-repeat bg-cover max-w-sm bg-white">
                        <img src={product?.img} className="w-full " alt="Shoes" />
                        <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-20 transition duration-300 ease-in-out bg-black"></div>
                    </div>
                    <div className='border-t-4 border-b-4 border-secondary'>
                        <div className="p-5">
                            <h2 className="text-lg font-semibold mb-3">{product.name}</h2>
                            <div className="">
                                <p>{product.des.slice(0, 80)}...</p>
                            </div>
                        </div>
                        <div className="ml-4 flex pb-3 justify-between items-center">
                            <p className='text-xl'>Price: {product.price}</p>
                            <button onClick={() => navigate(`/purchase/${product._id}`)} className="bg-secondary py-2 px-3 text-white">Order Now</button>
                        </div>
                    </div>
                    <div className='bg-[#4f4f4f] px-4 py-2 flex justify-between text-white'>
                        <p className='text-sm'>Minimum Quantity: {product.minimunOrder}</p>
                        <p className='text-sm'>Available Quantity: {product.available}</p>

                    </div>
                </div>)
            }
        </div>
    );
};

export default Part;