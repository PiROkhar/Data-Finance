import React from 'react'

const News = () =>{
            return( 
            <div className='h-[200px] text-white flex justify-around mt-[80px]  '>
                <div>
                <h1 className='text-3xl font-bold'>Want tips and trick to optimze your flow?</h1>
                <p className='font-semibold text-gray-400'>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div>
                    <div className='flex items-center mb-4 text-[#000300] sm:flex-row flex-col w-full'>
                    <input type='email' placeholder='Enter Email' className='flex rounded-md p-1'/>
                    <button className="font-bold bg-[#00df9a] w-[120px] h-[33px]  ml-[10px] rounded-md  mx-auto">Notify me</button>
                </div>
                    <p className='text-[13px] text-gray-200'>We care about the protection of your data. Read out</p>
                    <p className='text-[#00df9a] text-[13px]'>Private Policy.</p>


                </div>


            </div>




            )
}
export default News