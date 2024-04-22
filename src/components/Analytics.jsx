import React from 'react'
import laptop from '../assets/laptop.jpg'
const Analytics = () =>{

        return(
                <div className='w-full bg-white px-4 py-16 flex'>
                <div className='max-w-[1440px] mx-auto grid md:grid-cols-2'>
                        <img src={laptop} alt='/' className='w-[500px] h-[400px] ml-[-50px]'/>
                        <div className='flex flex-col justify-center'>
                        <h1 className='uppercase text-[#00df9a] font-bold'>Data analytics dashboard</h1>
                        <h2 className='text-[30px] font-bold'>Manage Data Analytics Centrally</h2>
                        <p className=' font-medium text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Similique fugit eligendi omnis landitiis, ut nulla placeat nobis.<br></br> Praesentium nam, recusandae sed ea amet.</p>
                        <button className="text-[#00df9a] font-lightbold bg-[#000300] w-[120px] h-[40px] rounded-md mt-3 mt-5 md:mx-0">Get started</button>
                        </div>
                </div>
           
                </div>



        )

}
export default Analytics