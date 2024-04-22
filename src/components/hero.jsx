import { ReactTyped } from "react-typed";
import React from 'react'
function Hero(){

    return(
        <div className="text-white max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
            <h3 className="text-[#00df9a] font-bold text-[28px]">GROW WITH DATA ANALYTICS</h3>
            <h1 className="text-white text-3xl font-bold md:text-6xl sm:text-5xl   ">Grow with Data.</h1>
            <div className="flex justify-center pt-2">
            <p className="text-white pr-1">fast , flexible financing for </p>
            <ReactTyped className="font-bold" strings={[' SAAS',' BTC',' BTB']} typeSpeed={120} backSpeed={140} loop/>
            </div>
            <p className="text-gray-500">Moniter you data ANALYTICS to increase revenue for BTB ,BTC &<br></br> SAAS platforms.</p>
            <button className="text-[#000300] font-bold bg-[#00df9a] w-[120px] h-[35px] rounded-md mt-3 mx-auto">Get started</button>
        </div>


    );
}
export default Hero