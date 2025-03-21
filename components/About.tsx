import Image from "next/image";
import rishiImage from "@/public/rishi-image.jpg";
import { motion } from "motion/react";
const About = () => {
  return (
    <section className="lg:h-screen flex items-center bg-zinc-900">
        <div className="flex flex-col lg:flex-row px-8 md:px-32">
            <div className="lg:w-2/3 flex flex-col gap-10">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-6xl text-white font-semibold">Hey, I'm Rishi.</motion.h1>
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 , delay: 0.2}}
                  className="text-md md:text-2xl text-white">
                  I'm a detail-oriented Java backend developer passionate about building scalable, high-performance applications.</motion.h3>
                <div className="w-24 bg-[#28D08A] h-1"></div>
                <div className="w-full flex justify-center">
                  <div className="lg:hidden relative flex justify-center w-64 md:w-96 aspect-square overflow-hidden rounded-full border-1 border-[#28D08A]">
                    <Image
                      src={rishiImage}
                      fill
                      className="object-cover object-center"
                      alt="Rishi Raj"
                    />
                  </div>
                </div>
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 , delay: 0.4}}
                  className="text-white flex flex-col gap-3">
                  <span>
                    <b>I have experience designing and developing robust backend systems,</b> optimizing application performance, and working with cloud-based architectures. With expertise in <b>Spring Boot, REST APIs, Python, FastApi, microservices, and AWS,</b> I ensure that the software I build is not only efficient but also reliable and scalable.
                  </span>
                  <span>
                    I love solving complex problems and continuously improving systems through clean, well-structured code. I see development as an ongoing learning process and always look for opportunities to collaborate with like-minded professionals who push me to grow.
                  </span>
                  <span>
                    At the end of the day, my goal is to create impactful software that improves user experiences while maintaining efficiency under the hood.
                  </span>
                  <span>
                    <b>When I'm not coding,</b> you'll probably find me solving coding challenges, exploring new tech, or working on exciting side projects.
                  </span>
                </motion.p>
            </div>
            <div className="lg:w-1/3 items-center justify-center hidden lg:flex">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 , delay: 0.6}}
                className="relative aspect-square w-96 overflow-hidden rounded-full border-1 border-[#28D08A]">
                <Image
                  src={rishiImage}
                  fill
                  className="object-cover object-center"
                  alt="Rishi Raj"
                />
              </motion.div>
            </div>
        </div>
    </section>
  )
}

export default About