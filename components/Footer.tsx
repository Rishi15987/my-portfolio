import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';
import { TbBrandLeetcode } from 'react-icons/tb';
const Footer = () => {
  return (
    <div className='flex flex-col gap-5 justify-center items-center h-20 bg-zinc-900 text-white px-8 md:px-32'>
        <div className='flex gap-6'>
            <Link href={'https://leetcode.com/u/rishirajkrmr789/'}><TbBrandLeetcode size={20}/></Link>
            <Link href={'https://www.linkedin.com/in/rishi-raj-84a6261a0/'}><FaLinkedin size={20}/></Link>
            <Link href={'https://github.com/Rishi15987'}><FaGithub size={20}/></Link>
        </div>
        <div className='flex justify-center items-center text-sm border-t border-zinc-500 w-full py-2'>
            <p>© 2025 Rishi Raj</p>
        </div>
    </div>
  )
}

export default Footer