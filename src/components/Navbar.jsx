import React from 'react'
import { IoHomeOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:pg-24'>
        <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div href="#home" className='hover:bg-gray-500 cursor-pointer'><IoHomeOutline size={30}/></div>
            <div className='space-x-6'>
                <a href="#services" className='hover:text-gray-400'>Services</a>
                <a href="#projects" className='hover:text-gray-400'>Projects</a>
                <a href="#contact" className='hover:text-gray-400'>Contact</a>
            </div>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline 
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect me</button>
        </div>
    </nav>
  )
}

export default Navbar