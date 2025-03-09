"use client"
import { hover, motion } from "motion/react";
import { useState } from "react";

const Navigation = () => {
  return (
    <motion.section 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        className="fixed right-10 top-64 flex flex-col gap-6 z-50"
    >
        <NavigationButton title="Intro" targetId="intro"/>
        <NavigationButton title="About" targetId="about"/>
        <NavigationButton title="What I Do" targetId="work"/>
        <NavigationButton title="Skills" targetId="skills"/>
        <NavigationButton title="Experience" targetId="experience"/>
        <NavigationButton title="Portfolio" targetId="portfolio"/>
        <NavigationButton title="Contact" targetId="contact"/>
    </motion.section>
  )
}

export default Navigation

const NavigationButton = ({title, targetId}: {title: string, targetId: string}) => {
    const [hovered, setHovered] = useState(false);
    const handleClick = () => {
        const targetElement = document.getElementById(targetId);
        if(targetElement){
            targetElement.scrollIntoView({behavior: "smooth"})
        }
    }
    return(
        <div 
            className="relative flex justify-center items-center"
        > 
            <motion.button 
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                whileHover={{
                    scale: 1.3, 
                    background: "gray", 
                    transition: { duration: 0.1}
                }}
                onClick={handleClick}
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