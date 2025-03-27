"use client";
import { motion } from "motion/react";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaJava } from "react-icons/fa";
import { SiHibernate } from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";
import { RiReactjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { SiJira } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { SiApachemaven } from "react-icons/si";
import { FaJenkins } from "react-icons/fa";
import { SiAwslambda } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
const Skills = () => {
  return (
    <div className="lg:h-screen flex flex-col items-center justify-center bg-zinc-900 text-white">
    <div className="px-8 md:px-32 flex flex-col gap-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5}}  
        className="flex flex-col"
      >
        <h1 className="text-4xl md:text-6xl text-white font-semibold mb-4">Skills</h1>
        <div className="w-24 bg-[#28D08A] h-1"></div>
      </motion.div>
      <div className="md:p-4 flex flex-col lg:flex-row gap-6 w-full">
        <div className="flex flex-col justify-between lg:flex-col lg:w-1/3">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2}}
            
          >
            <h1 className=" text-3xl font-semibold tracking-wide text-[#28D08A]">Development</h1>
            <div className="lg:-translate-x-10 grid grid-cols-3 gap-8 mt-8 py-4">
              <div className="flex flex-col items-start lg:items-center gap-1">
                <FaJava size={40}/>
                <p className="lg:text-center text-left">Java</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <TbFileTypeSql size={40}/>
                <p className="text-center">SQL</p>
              </div>
              <div className="flex flex-col items-end lg:items-center gap-1">
                <IoLogoJavascript size={40}/>
                <p className="text-center">JavaScript</p>
              </div>
              <div className="flex flex-col items-start lg:items-center gap-1">
                <FaPython size={40}/>
                <p className="text-center">Python</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <BiLogoSpringBoot size={40}/>
                <p className="text-center">Spring Boot</p>
              </div>
              <div className="flex flex-col items-end lg:items-center gap-1">
                <SiHibernate size={40}/>
                <p className="text-center">Hibernate</p>
              </div>
              <div className="flex flex-col items-start lg:items-center gap-1">
                <RiReactjsFill size={40}/>
                <p className="text-center">React</p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col lg:w-2/3 gap-10">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2}}
            className="flex flex-col md:flex-row justify-between"
          >
            <div >
              <h1 className="text-3xl font-semibold tracking-wide text-[#28D08A]">DevOps</h1>
              <div className="flex flex-wrap gap-10 mt-10">
                <div className="flex flex-col items-center gap-1">
                  <FaGitAlt size={40}/>
                  <p className="text-center">React</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <SiJira size={40}/>
                  <p className="text-center">Jira</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <SiPostman size={40}/>
                  <p className="text-center">Postman</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <SiApachemaven size={40}/>
                  <p className="text-center">Maven</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <FaAws size={40}/>
                  <p className="text-center">AWS</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <FaJenkins size={40}/>
                  <p className="text-center">Jenkins</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <SiAwslambda size={40}/>
                  <p className="text-center">Lambda</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <FaDocker size={40}/>
                  <p className="text-center">Docker</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5}}
            className="flex flex-col md:flex-row justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-wide text-[#28D08A]">Knowledge</h1>
              <div className="flex flex-col md:flex-row lg:flex-wrap  gap-10 mt-10">
                <p>RESTful APIs</p>
                <p>GraphQL</p>
                <p className="lg:w-24">Microservices Architecture</p>
                <p className="lg:w-40">Event-Driven Architecture (Kafka)</p>
                <p className="lg:w-20">Authentication & Security</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Skills