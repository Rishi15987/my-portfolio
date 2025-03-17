import { MdWork } from "react-icons/md";
import { motion } from "motion/react";
const Experience = () => {
  return (
    <div className="h-screen flex flex-col items-center bg-slate-950 text-white">
      <div className="px-32 flex flex-col items-center gap-10 w-full text-center">
        <h1 className="text-6xl text-white font-semibold">Experience</h1>
        <div className="w-24 bg-amber-50 h-1"></div>
        <div className="relative grid grid-cols-2 gap-30 p-4 mt-20">
        <div className="absolute w-0.5 h-full bg-amber-100 top-0  left-1/2 "></div>
        <div className="relative flex flex-col gap-1 border rounded-sm p-4 bg-white text-black text-left">
            <motion.div 
              initial={{ rotate: 90 }}
              className="absolute border-l-[20px] -right-[30px] top-7 border-r-[20px] border-b-[20px] border-b-white border"></motion.div>
            <div className="absolute -right-[85px] rounded-full bg-zinc-800 text-white p-3">
              <MdWork size={20}/>
            </div>
            <h1 className="text-xl font-semibold uppercase">System Engineer</h1>
            <p className="text-lg font-semibold">Infosys - Bangalore, India</p>
            <p  className="text-md">RiteAid Client – Backend System Development</p>
            <p  className="text-sm">Designed and implemented backend solutions for the FIV-RiteAid project, handling 100,000+ records daily. Delivered 30+ change requests with a 95% defect-free rate, significantly optimizing system efficiency. Refactored backend queries, reducing data loading time from 60 seconds to 2 seconds, improving performance and user experience. Managed 20+ high-severity production incidents, ensuring seamless operations.
            </p>
        </div>
        <div className="p-4 pt-6 text-left">Dec 2022 – Present</div>
        <div className="p-4 pt-6 text-right">Dec 2022 – Present</div>
        <div className="relative border rounded-sm p-4 bg-white text-black text-left">
            <motion.div 
              initial={{ rotate: 270 }}
              className="absolute border-l-[20px] -left-[30px] top-7 border-r-[20px] border-b-[20px] border-b-white border"></motion.div>
            <div className="absolute -left-[82px] rounded-full bg-zinc-800 text-white p-3">
              <MdWork size={20}/>
            </div>
            <h1 className="text-xl font-semibold uppercase">System Engineer</h1>
            <p className="text-lg font-semibold">Infosys - Bangalore, India</p>
            <p>RiteAid Client – Backend System Development</p>
            <p>Designed and implemented backend solutions for the FIV-RiteAid project, handling 100,000+ records daily. Delivered 30+ change requests with a 95% defect-free rate, significantly optimizing system efficiency. Refactored backend queries, reducing data loading time from 60 seconds to 2 seconds, improving performance and user experience. Managed 20+ high-severity production incidents, ensuring seamless operations.
            </p>
        </div>
        <div className="relative border rounded-sm p-4 bg-white text-black text-left">
        <motion.div 
              initial={{ rotate: 90 }}
              className="absolute border-l-[20px] -right-[30px] top-7 border-r-[20px] border-b-[20px] border-b-white border"></motion.div>
            <div className="absolute -right-[85px] rounded-full bg-zinc-800 text-white p-3">
              <MdWork size={20}/>
            </div>
            <h1 className="text-xl font-semibold uppercase">Software Engineer Intern</h1>
            <p className="text-lg font-semibold">Suven Consultants & Technology Pvt. Ltd.</p>
            <p>Worked on frontend web development, building responsive and interactive interfaces using HTML, CSS, and JavaScript. Developed multiple projects, including 365 Entertainment, CSS3 Animations, NVSP Replica, and a Blogging Site, focusing on enhancing user experience and design.
            </p>
        </div>
        <div className="p-4 pt-6 text-left">July 2021 – Aug 2021</div>  
      </div>
      </div>
    </div>
  )
}

export default Experience