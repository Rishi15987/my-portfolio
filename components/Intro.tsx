import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion"; // Fixed incorrect import
import Link from "next/link";

const Intro = () => {
  const handleClick = () => {
    const aboutElement = document.getElementById("about");
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="h-screen relative w-full bg-zinc-900 overflow-hidden flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat"></div>

        {/* Blue Overlay with Opacity Control */}
        <div className="absolute inset-0 bg-sky-700 opacity-80"></div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-white flex flex-col justify-center items-center gap-4 z-10"
      >
        {/* Name and Job Title */}
        <div className="flex flex-col items-center relative">
          {/* Name Animation (Delayed to Start After Line Animation) */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5, ease: "easeOut" }} // Delay matches line duration
            className="text-4xl md:text-6xl py-2 text-center md:-tracking-tighter"
          >
            Rishi Raj
          </motion.h1>

          {/* Animated Line (No Fade While Shrinking) */}
          <motion.div
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: [0, 1, 1, 0], opacity: [1, 1, 1, 1] }} // Opacity stays 1 until fully shrunk
            transition={{
              duration: 1.0, // Line animation duration
              ease: "easeInOut",
            }}
            className="h-[2px] bg-white mt-4 w-full origin-center"
          />

          {/* Job Title Animation (Delayed to Start After Line Animation) */}
          <motion.p
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5, ease: "easeOut" }} // Same delay as name
            className="text-2xl md:text-3xl uppercase mt-1"
          >
            Backend Software Engineer
          </motion.p>
        </div>

        {/* Buttons with Animation */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="flex gap-4 mt-4"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Link href="https://github.com/Rishi15987" target="_blank">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-xl p-3 flex items-center gap-2 text-white bg-[#28D08A] cursor-pointer"
              >
                Go to Github <FaArrowRight size={10} />
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Link
              href="https://drive.google.com/file/d/1j1NxpWYH--5ik3qlNYj0Acu1847g_GUD/view?usp=drivesdk"
              target="_blank"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-xl p-3 flex items-center gap-2 bg-white text-black cursor-pointer hover:bg-zinc-800 hover:text-white"
              >
                Download CV <FaArrowRight size={10} />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Down Button */}
      <div className="text-white absolute bottom-10">
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          onClick={handleClick}
          className="flex flex-col justify-center items-center gap-2 cursor-pointer"
        >
          <IoIosArrowDown size={30} />
        </motion.button>
      </div>
    </section>
  );
};

export default Intro;
