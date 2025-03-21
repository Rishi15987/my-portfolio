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
    <div className="h-screen flex items-center bg-zinc-900 text-white">
    <div className="px-32 flex flex-col gap-10 w-full">
      <h1 className="text-6xl text-white font-semibold">Skills</h1>
      <div className="w-24 bg-[#28D08A] h-1"></div>
      <div className="p-4 flex flex-col lg:flex-row gap-6 w-full">
        <div className="flex justify-between lg:flex-col lg:w-1/3">
          <div>
            <h1 className="text-3xl font-semibold tracking-wide text-[#28D08A]">Languages</h1>
            <div className="flex gap-10 mt-8">
              <FaJava size={40}/>
              <TbFileTypeSql size={40}/>
              <IoLogoJavascript size={40}/>
              <FaPython size={40}/>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-semibold tracking-wide text-[#28D08A]">Framework</h1>
            <div className="flex gap-10 mt-8">
              <BiLogoSpringBoot size={40}/>
              <SiHibernate size={40}/>
              <RiReactjsFill size={40}/>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:w-2/3 gap-10">
          <div className="flex justify-between">
            <div >
              <h1 className="text-3xl font-semibold tracking-wide text-[#28D08A]">Developer Tools</h1>
              <div className="flex gap-10 mt-10">
                <FaGitAlt size={40}/>
                <SiJira size={40}/>
                <SiPostman size={40}/>
                <SiApachemaven size={40}/>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-semibold tracking-wide text-[#28D08A]">Cloud and CI/CD</h1>
              <div className="flex gap-10 mt-10">
                <FaAws size={40}/>
                <FaJenkins size={40}/>
                <SiAwslambda size={40}/>
                <FaDocker size={50}/>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div >
              <h1 className="text-3xl font-semibold tracking-wide text-[#28D08A]">Developer Tools</h1>
              <div className="flex gap-10 mt-10">
                <FaGitAlt size={40}/>
                <SiJira size={40}/>
                <SiPostman size={40}/>
                <SiApachemaven size={40}/>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-semibold tracking-wide text-[#28D08A]">Cloud and CI/CD</h1>
              <div className="flex gap-10 mt-10">
                <FaAws size={40}/>
                <FaJenkins size={40}/>
                <SiAwslambda size={40}/>
                <FaDocker size={50}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Skills