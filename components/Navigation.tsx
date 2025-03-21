"use client"
import { hover, motion } from "motion/react";
import { useEffect, useState } from "react";

const Navigation = () => {
    const [activeSection, setActiveSection] = useState("intro");

    // Add scroll event listener to update active section based on scroll position
    useEffect(() => {
      const handleScroll = () => {
        const sections = ["intro", "about", "work", "skills", "experience", "contact"];
        
        // Find the section currently in view
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            // Consider a section in view when its top is near the viewport's center
            if (rect.top <= 300 && rect.bottom >= 300) {
              setActiveSection(section);
              break;
            }
          }
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      // Initial check
      handleScroll();
      
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
  return (
    <motion.section 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        className="fixed right-10 top-64 flex flex-col gap-6 z-50"
    >
        <NavigationButton title="Intro" targetId="intro" isActive={activeSection === "intro"}/>
        <NavigationButton title="About" targetId="about" isActive={activeSection === "about"}/>
        <NavigationButton title="What I Do" targetId="work" isActive={activeSection === "work"}/>
        <NavigationButton title="Skills" targetId="skills" isActive={activeSection === "skills"}/>
        <NavigationButton title="Experience" targetId="experience" isActive={activeSection === "experience"}/>
        <NavigationButton title="Contact" targetId="contact" isActive={activeSection === "contact"}/>
    </motion.section>
  )
}

export default Navigation

const NavigationButton = ({title, targetId, isActive}: {title: string, targetId: string, isActive: boolean}) => {
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
                animate={{ backgroundColor: isActive ? "#28D08A" : "gray",
                    transition: { duration: 0.3 },
                    opacity: isActive ? 1 : 0.5
                }}
                whileHover={{
                    scale: 1.3, 
                    transition: { duration: 0.1}
                }}
                onClick={handleClick}
                className={`h-3 w-3  rounded-full cursor-pointer`}
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