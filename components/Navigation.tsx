"use client"
import { hover, motion } from "motion/react";
import { useState } from "react";

const Navigation = () => {
  return (
    <section className="absolute right-10 top-64 flex flex-col gap-6">
        <NavigationButton title="Intro"/>
        <NavigationButton title="About"/>
        <NavigationButton title="What I Do"/>
        <NavigationButton title="Skills"/>
        <NavigationButton title="Experience"/>
        <NavigationButton title="Portfolio"/>
        <NavigationButton title="Contact"/>
    </section>
  )
}

export default Navigation

const NavigationButton = ({title}: {title: string}) => {
    const [hovered, setHovered] = useState(false);
    return(
        <div 
            className="relative flex justify-center items-center"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        > 
            <motion.button 
                whileHover={{
                    scale: 1.3, 
                    background: "red", 
                    transition: { duration: 0.1}
                }}
                className="h-3 w-3 bg-zinc-300 rounded-full cursor-pointer"
            >
            </motion.button>
            <motion.span 
                initial={{opacity: 0, x: 20}}
                animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 20}}
                transition={{ duration: 0.3 }}
                className="absolute -top-1 right-8 uppercase text-white text-sm tracking-widest"
            >
                {title}
            </motion.span>
        </div>
    )
}