import React, {useState} from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar =() => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return(
        <div className='text-white flex justify-between items-center h-20 px-6 max-w-[1340px] mx-auto'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React.</h1>
            <ul className='hidden md:flex '>
                <li className='p-4 '>Home</li>
                <li className='p-4 '>Company</li>
                <li className='p-4 '>Resouces</li>
                <li className='p-4 '>About</li>
                <li className='p-4 '>Contact</li>
            </ul>
            <div onClick={handleNav } className='block md:hidden'>
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                
            </div >

            <div className={!nav ? ' hidden fixed left-0 top-0 w-[20%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%] hidden '}>
            <h1 className='w-full text-3xl pl-5 font-bold text-[#00df9a] pt-10'>React</h1>
            <ul  className='p-5 uppercase'>
                <li className='p-5 border-b border-gray-800'>Home</li>
                <li className='p-5 border-b border-gray-800'>Company</li>
                <li className='p-5 border-b border-gray-800'>Resouces</li>
                <li className='p-5 border-b border-gray-800'>About</li>
                <li className='p-5 border-b border-gray-800'>Contact</li>
            </ul>
            </div>
            
        </div>
    )
}
export default Navbar