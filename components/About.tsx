import Image from "next/image";
import rishiImage from "@/public/rishi-image.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="flex items-center bg-zinc-900 py-12 md:py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row items-center px-6 md:px-16 lg:px-20 xl:px-32 gap-10 lg:gap-16 w-full">
        {/* Text Content */}
        <div className="lg:w-1/2 flex flex-col gap-6 md:gap-10 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl lg:text-6xl text-white font-semibold"
          >
            Hey, I'm Rishi.
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-md md:text-xl lg:text-2xl text-white leading-relaxed"
          >
            I'm a detail-oriented Java backend developer passionate about building scalable, high-performance applications.
          </motion.h3>

          <div className="w-16 md:w-24 bg-[#28D08A] h-1 mx-auto lg:mx-0"></div>

          {/* Mobile Image (Visible on Small Screens) */}
          <div className="lg:hidden flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative w-48 md:w-72 lg:w-80 aspect-square overflow-hidden rounded-full border border-[#28D08A]"
            >
              <Image
                src={rishiImage}
                fill
                className="object-cover"
                alt="Rishi Raj"
              />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-white text-sm md:text-lg lg:text-xl leading-relaxed"
          >
            <b>I have experience designing and developing robust backend systems,</b> optimizing application performance, and working with cloud-based architectures. With expertise in <b>Spring Boot, REST APIs, Python, FastAPI, microservices, and AWS,</b> I ensure that the software I build is not only efficient but also reliable and scalable.
            <br /><br />
            I love solving complex problems and continuously improving systems through clean, well-structured code. Development is an ongoing learning process, and I thrive in collaborative environments that push me to grow.
            <br /><br />
            My goal is to create impactful software that enhances user experiences while maintaining efficiency under the hood.
            <br /><br />
            <b>When I'm not coding,</b> you'll probably find me solving coding challenges, exploring new tech, or working on exciting side projects.
          </motion.p>
        </div>

        {/* Desktop Image (Hidden on Small Screens) */}
        <div className="lg:w-1/2 hidden lg:flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative w-64 md:w-80 lg:w-96 xl:w-[450px] aspect-square overflow-hidden rounded-full border border-[#28D08A]"
          >
            <Image
              src={rishiImage}
              fill
              className="object-cover"
              alt="Rishi Raj"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
