"use client";
import { motion } from "framer-motion";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaJava, FaGitAlt, FaAws, FaJenkins, FaDocker, FaPython } from "react-icons/fa";
import { SiHibernate, SiJira, SiPostman, SiApachemaven, SiAwslambda } from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";
import { RiReactjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-zinc-900 text-white py-12 md:py-16 lg:py-24">
      <div className="px-6 md:px-16 lg:px-20 xl:px-32 w-full">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-4">Skills</h1>
          <div className="w-16 md:w-24 bg-[#28D08A] h-1 mx-auto lg:mx-0"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 w-full mt-12">
          {/* Development Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/3"
          >
            <h1 className="text-2xl md:text-3xl font-semibold text-[#28D08A]">Development</h1>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-6 md:gap-10 mt-8">
              {[{ Icon: FaJava, name: "Java" }, { Icon: TbFileTypeSql, name: "SQL" }, { Icon: IoLogoJavascript, name: "JavaScript" },
              { Icon: FaPython, name: "Python" }, { Icon: BiLogoSpringBoot, name: "Spring Boot" }, { Icon: SiHibernate, name: "Hibernate" },
              { Icon: RiReactjsFill, name: "React" }].map(({ Icon, name }, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <Icon size={40} />
                  <p className="text-center text-sm md:text-base">{name}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* DevOps Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-2/3"
          >
            <h1 className="text-2xl md:text-3xl font-semibold text-[#28D08A]">DevOps</h1>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-10 mt-8">
              {[{ Icon: FaGitAlt, name: "Git" }, { Icon: SiJira, name: "Jira" }, { Icon: SiPostman, name: "Postman" },
              { Icon: SiApachemaven, name: "Maven" }, { Icon: FaAws, name: "AWS" }, { Icon: FaJenkins, name: "Jenkins" },
              { Icon: SiAwslambda, name: "Lambda" }, { Icon: FaDocker, name: "Docker" }].map(({ Icon, name }, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <Icon size={40} />
                  <p className="text-center text-sm md:text-base">{name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Knowledge Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12"
        >
          <h1 className="text-2xl md:text-3xl font-semibold text-[#28D08A]">Knowledge</h1>
          <div className="flex flex-wrap gap-6 md:gap-10 mt-8 text-sm md:text-lg lg:text-xl">
            <p className="w-full md:w-auto">RESTful APIs</p>
            <p className="w-full md:w-auto">GraphQL</p>
            <p className="w-full md:w-auto">Microservices Architecture</p>
            <p className="w-full md:w-auto">Event-Driven Architecture (Kafka)</p>
            <p className="w-full md:w-auto">Authentication & Security</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
