import { FaArrowRight } from "react-icons/fa"
import { IoIosArrowDown } from "react-icons/io"
import { motion } from "motion/react"
import Link from "next/link"
const Intro = () => {
    const handleClick = () => {
        const aboutElement = document.getElementById("about");
        if(aboutElement){
            aboutElement.scrollIntoView({ behavior: "smooth"});
        }
    }
  return (
    <section className="h-screen relative w-full bg-slate-950 overflow-clip">
        <div className="absolute bottom-0 z-[0] left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="text-white h-full flex flex-col justify-center items-center gap-6">
            <div>
                <h1 className="text-6xl py-4 text-center tracking-widest">Rishi Raj</h1>
                <p className="text-3xl uppercase">Backend Software Engineer</p>
            </div>
            <div className="flex gap-4">
                <Link href={'https://github.com/Rishi15987'} target="_blank" className="z-10">
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="border rounded-xl p-3 flex items-center gap-2 bg-white text-black cursor-pointer"
                    >
                            Go to Github <FaArrowRight size={10}/>
                    
                    </motion.button>
                </Link>
                <Link href={'https://drive.google.com/file/d/1o6uBMpLdRKWMTGKU0OPDKmyTvv4Q05fS/view'} target="_blank" className="z-10">
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="border rounded-xl p-3 flex items-center gap-2 bg-white text-black cursor-pointer"
                    >
                            Download CV <FaArrowRight size={10}/>
                    
                    </motion.button>
            </Link>
            </div>
        </div>
        <div className="text-white absolute bottom-10 w-full flex justify-center">
            <motion.button 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                onClick={handleClick}
                className="flex flex-col justify-center items-center gap-2 cursor-pointer"
            >
                <IoIosArrowDown size={30}/>
            </motion.button>
        </div>
    </section>
  )
}

export default Intro