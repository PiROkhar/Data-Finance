import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'


const Plans =() =>{
    return( 
    <div className='w-full bg-white'>
        <div className='flex justify-around max-w-[1100px] mx-auto gap-8 grid md:grid-cols-3 pt-[50px] '>

    <div className='text-black shadow-xl p-20 my-10 h-[400px] w-full flex flex-col rounded-lg items-center space-y-3 hover:scale-105 duration-300 hover:bg-gray-100'>
        <img src={Single} alt='Single User' className='w-24 h-16 mt-[-100px] mb-10'/>
        <h1 className='font-semibold'>Single User</h1>
        <h2 className='font-bold'>$149</h2>
        <p>500GB Storage</p>
        <p>1 User Allowed</p>
        <p>Send up to 2GB</p>
        <button className="font-bold bg-[#00df9a] w-[120px] h-[35px] rounded-md  mx-auto">Notify me</button>
    </div>
    <div className='text-black shadow-xl p-20 my-10 h-[400px] w-full flex flex-col rounded-lg items-center space-y-3 hover:scale-105  duration-300 hover:bg-gray-100'>
        <img src={Double} alt='Partnership' className='w-24 h-16 mt-[-100px] mb-10'/>
        <h1 className='font-semibold'>Partnership</h1>
        <h2 className='font-bold'>$199</h2>
        <p>1TB Storage</p>
        <p>3 Users Allowed</p>
        <p>Send up to 10GB</p>
        <button className="font-bold bg-black text-[#00df9a] w-[120px] h-[35px] rounded-md  mx-auto">Notify me</button>
    </div>
            <div className='text-black shadow-xl p-20 my-10 h-[400px] w-full flex flex-col rounded-lg items-center space-y-3 hover:scale-105 duration-300 hover:bg-gray-100'>
                <img src={Triple} alt='/'className='w-[90px] h-[70px] mt-[-100px] mb-10'/>
                <h1 className='font-semibold'>Group Account</h1>
                <h2 className='font-bold'>$350</h2>
                <p className=''>5TB Storage</p>
                <p className=''>10 User Allowed</p>
                <p className=''>Send upto 40GB</p>
                <button className="font-bold bg-[#00df9a] w-[120px] h-[35px] rounded-md  mx-auto">Notify me</button>
            </div>
            </div>
            

    </div>
        )






}
export default Plans