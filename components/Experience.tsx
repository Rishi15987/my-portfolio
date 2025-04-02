import { MdWork } from "react-icons/md";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="h-auto pt-2 pb-20 flex flex-col items-center bg-[url('/mountains.jpg')] bg-cover bg-center text-white">
      <div className="pl-8 pr-8 md:px-32 flex flex-col items-center w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <h1 className="text-4xl md:text-6xl font-semibold tracking-wide mb-4 mt-6 text-white">
            Experience
          </h1>
          <div className="w-24 bg-[#28D08A] h-1"></div>
        </motion.div>

        <div className="relative grid lg:grid-cols-2 gap-20 lg:gap-30 pl-14 md:p-14 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute w-0.5 h-full bg-[#28D08A] top-0 lg:left-1/2 "
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.1, delay: 0.2 }}
            className="group relative flex flex-col gap-1 rounded-sm p-4 bg-zinc-800 text-white text-left transition-all duration-300 hover:shadow-lg hover:shadow-zinc-800/20 border border-zinc-900"
          >
            <motion.div
              initial={{ rotate: -90 }}
              className="lg:hidden absolute z-10 border-l-[20px] border-r-[20px] border-b-[20px] 
             border-b-zinc-800 border-l-transparent border-r-transparent -left-[30px] top-7"
            />

            <motion.div
              initial={{ rotate: 90 }}
              className="hidden lg:block absolute z-10 border-l-[20px] border-r-[20px] border-b-[20px] 
             border-b-zinc-800 border-l-transparent border-r-transparent -right-[30px] top-7"
            />

            <div className="block lg:hidden absolute -left-[78px] rounded-full bg-zinc-800 text-white p-3 group-hover:bg-[#28D08A] transition-colors duration-300">
              <MdWork
                size={20}
                className="group-hover:text-white transition-colors duration-300"
              />
            </div>
            <div className="hidden lg:block absolute -right-[85px] rounded-full bg-zinc-800 text-white p-3 group-hover:bg-[#28D08A] transition-colors duration-300">
              <MdWork
                size={20}
                className="group-hover:text-white transition-colors duration-300"
              />
            </div>
            <h1 className="text-xl font-semibold uppercase">System Engineer</h1>
            <p className="text-lg font-semibold text-[#28D08A]">
              Infosys - Bangalore, India
            </p>
            <p className="text-md">
              RiteAid Client – Backend System Development
            </p>
            <p className="text-sm">
              Designed and implemented backend solutions for the FIV-RiteAid
              project, handling 100,000+ records daily. Delivered 30+ change
              requests with a 95% defect-free rate, significantly optimizing
              system efficiency. Refactored backend queries, reducing data
              loading time from 60 seconds to 2 seconds, improving performance
              and user experience. Managed 20+ high-severity production
              incidents, ensuring seamless operations.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="hidden lg:block p-4 pt-6 text-left"
          >
            Nov 2024 – Present
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="hidden lg:block p-4 pt-6 text-right"
          >
            Jan 2023 – Oct 2024
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="group relative rounded-sm p-4 bg-zinc-800 text-white text-left"
          >
            <motion.div
              initial={{ rotate: -90 }}
              className="lg:hidden absolute z-10 border-l-[20px] -left-[30px] top-7 border-r-[20px] 
             border-b-[20px] border-b-zinc-800 border-transparent"
            ></motion.div>

            <motion.div
              initial={{ rotate: 270 }}
              className="hidden lg:block absolute border-l-[20px] -left-[30px] top-7 border-r-[20px] 
             border-b-[20px] border-b-zinc-800 border-transparent"
            ></motion.div>

            <div className="block lg:hidden absolute -left-[78px] rounded-full bg-zinc-800 text-white p-3 group-hover:bg-[#28D08A] transition-colors duration-300">
              <MdWork
                size={20}
                className="group-hover:text-white transition-colors duration-300"
              />
            </div>
            <div className="hidden lg:block absolute -left-[82px] rounded-full bg-zinc-800 text-white p-3 group-hover:bg-[#28D08A] transition-colors duration-300">
              <MdWork
                size={20}
                className="group-hover:text-white transition-colors duration-300"
              />
            </div>
            <h1 className="text-xl font-semibold uppercase">System Engineer</h1>
            <p className="text-lg font-semibold text-[#28D08A]">
              Infosys - Bangalore, India
            </p>
            <p>RiteAid Client – Backend System Development</p>
            <p>
              Designed and implemented backend solutions for the FIV-RiteAid
              project, handling 100,000+ records daily. Delivered 30+ change
              requests with a 95% defect-free rate, significantly optimizing
              system efficiency. Refactored backend queries, reducing data
              loading time from 60 seconds to 2 seconds, improving performance
              and user experience. Managed 20+ high-severity production
              incidents, ensuring seamless operations.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="group relative rounded-sm p-4 bg-zinc-800 text-white text-left"
          >
            <motion.div
              initial={{ rotate: -90 }}
              className="lg:hidden absolute z-10 border-l-[20px] -left-[30px] top-7 
             border-r-[20px] border-b-[20px] border-b-zinc-800 border-transparent"
            ></motion.div>

            <motion.div
              initial={{ rotate: 90 }}
              className="hidden lg:block absolute -right-[30px] top-7 
             border-l-[20px] border-r-[20px] border-b-[20px] border-b-zinc-800 border-transparent"
            ></motion.div>

            <div className="block lg:hidden absolute -left-[78px] rounded-full bg-zinc-800 text-white p-3 group-hover:bg-[#28D08A] transition-colors duration-300">
              <MdWork
                size={20}
                className="group-hover:text-white transition-colors duration-300"
              />
            </div>
            <div className=" hidden lg:block absolute -right-[85px] rounded-full bg-zinc-800 text-white p-3 group-hover:bg-[#28D08A] transition-colors duration-300">
              <MdWork
                size={20}
                className="group-hover:text-white transition-colors duration-300"
              />
            </div>
            <h1 className="text-xl font-semibold uppercase">
              Software Engineer Intern
            </h1>
            <p className="text-lg font-semibold text-[#28D08A]">
              Suven Consultants & Technology Pvt. Ltd.
            </p>
            <p>
              Worked on frontend web development, building responsive and
              interactive interfaces using HTML, CSS, and JavaScript. Developed
              multiple projects, including 365 Entertainment, CSS3 Animations,
              NVSP Replica, and a Blogging Site, focusing on enhancing user
              experience and design.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="hidden rounded-sm p-4 bg-zinc-800 text-white text-left pb-10 md:pb-0"
          >
            July 2021 – Aug 2021
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
