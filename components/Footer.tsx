import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='flex flex-col gap-5 justify-center items-center h-20 bg-zinc-900 text-white px-32'>
        <div className='flex gap-6'>
            <FaXTwitter size={20}/>
            <FaLinkedin size={20}/>
            <FaGithub size={20}/>
        </div>
        <div className='flex justify-center items-center text-sm border-t border-zinc-500 w-full py-2'>
            <p>© 2025 Rishi Raj</p>
        </div>
    </div>
  )
}

export default Footer