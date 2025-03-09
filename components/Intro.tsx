import { FaArrowRight } from "react-icons/fa"
import { IoIosArrowDown } from "react-icons/io"

const Intro = () => {
    const handleClick = () => {
        const aboutElement = document.getElementById("about");
        if(aboutElement){
            aboutElement.scrollIntoView({ behavior: "smooth"});
        }
    }
  return (
    <section className="h-screen relative w-full bg-slate-950 overflow-clip">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="text-white h-full flex flex-col justify-center items-center gap-6">
            <div>
                <h1 className="text-6xl py-4 text-center tracking-widest">Rishi Raj</h1>
                <p className="text-3xl uppercase">Backend Software Engineer</p>
            </div>
            <button className="border rounded-xl p-3 flex items-center gap-2 bg-white text-black">Go to Github <FaArrowRight/></button>
        </div>
        <div className="text-white absolute bottom-10 w-full flex justify-center">
            <button 
                onClick={handleClick}
                className="flex flex-col justify-center items-center gap-2 cursor-pointer"
            >
                <p>Learn more</p>
                <IoIosArrowDown size={30}/>
            </button>
        </div>
    </section>
  )
}

export default Intro