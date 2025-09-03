import React, { useState } from 'react'
import Menu from "./assets/menu.svg"
import X from "./assets/x.svg"
import { Link, Outlet } from 'react-router-dom'

const Navbar = ({setBlur, blur}) => {
    const [nav, setNav] = useState(false)
    function tog() {
        setNav(!nav)
        setBlur(!blur)
    }
    return (
        <>
            {/* Navbar */}
            <div className={`bg-gray-100`} >
                <div className={`bg-white grid grid-cols-[8fr_2fr] md:grid-cols-2 justify-between shadow-md p-4 px-5`} >
                    <div className='text-3xl md:text-4xl font-bold text-gray-600' >
                        Navigation Bar
                    </div>
                    <button className='justify-self-end cursor-pointer md:hidden' >
                        <img src={Menu} alt="" onClick={tog} />
                    </button>

                    {/* Nav-List Computer */}
                    <div className='flex gap-10 justify-self-end' >
                        <Link to="/Routing" className=' hover:text-gray-500 hidden md:inline text-gray-600 text-xl font-bold  self-center justify-self-end' onClick={tog} >Home</Link>
                        <Link to="/Routing/download" className=' hover:text-gray-500 hidden md:inline  text-gray-600 text-xl font-bold self-center justify-self-end ' onClick={tog} >Download</Link>
                        <Link to="/Routing/documentation" className=' hover:text-gray-500 hidden md:inline  text-gray-600 text-xl font-bold  self-center justify-self-end' onClick={tog} >Document</Link>
                        <Link to="/Routing/about" className=' hover:text-gray-500 hidden md:inline   text-gray-600 text-xl font-bold self-center justify-self-end' onClick={tog} >About</Link>
                    </div>


                </div>
            </div>

            {/* Nav-List-Phone */}
            <div className={` md:hidden absolute right-0 p-5 px-5 shadow-2xl rounded-2xl m-2 bg-gray-600 w-[50vw] transition-all duration-100 ease-in-out ${nav ? " scale-100 opacity-100 grid grid-rows-[1fr_2fr_2fr_2fr_2fr] gap-1" : "scale-0 opacity-0"} `}>
                <img src={X} alt="" className='justify-self-end' onClick={tog} />
                <Link to="/Routing/" className='text-gray-200 text-xl font-semibold hover:bg-gray-500 flex justify-center items-center rounded-md' onClick={tog} >Home</Link>
                <Link to="/Routing/download" className='text-gray-200 text-xl font-semibold hover:bg-gray-500 flex justify-center items-center rounded-md' onClick={tog} >Download</Link>
                <Link to="/Routing/documentation" className='text-gray-200 text-xl font-semibold hover:bg-gray-500 flex justify-center items-center rounded-md' onClick={tog} >Document</Link>
                <Link to="/Routing/about" className='text-gray-200 text-xl font-semibold hover:bg-gray-500 flex justify-center items-center rounded-md' onClick={tog} >About</Link>
            </div>



            {/* Outlet */}

            <div>
                <Outlet />
            </div>



        </>
    )
}

export default Navbar
