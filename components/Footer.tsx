import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { SiGeeksforgeeks } from "react-icons/si";
import Link from "next/link";
import { TbBrandLeetcode } from "react-icons/tb";
import { motion } from "motion/react";
const Footer = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-50 bg-gradient-to-tr from-sky-400 via-blue-700 to-blue-800 text-white px-8 md:px-32">
      <div className="flex gap-6">
        <Link href="https://leetcode.com/u/rishirajkrmr789/">
          <motion.div
            whileHover={{ scale: 1.4 }}
            className="hover:text-yelwhite transition-colors duration-300"
          >
            <TbBrandLeetcode size={30} />
          </motion.div>
        </Link>

        <Link href="https://www.naukri.com/code360/profile/901876d9-3b09-4052-9b12-889fc5279455">
          <motion.div
            whileHover={{ scale: 1.4 }}
            className="hover:text-grwhite transition-colors duration-300"
          >
            <SiGeeksforgeeks size={30} />
          </motion.div>
        </Link>

        <Link href="https://www.linkedin.com/in/rishi-raj-84a6261a0/">
          <motion.div
            whileHover={{ scale: 1.4 }}
            className="hover:text-bwhite transition-colors duration-300"
          >
            <FaLinkedin size={30} />
          </motion.div>
        </Link>

        <Link href="https://github.com/Rishi15987">
          <motion.div
            whileHover={{ scale: 1.4 }}
            className="hover:text-gwhite transition-colors duration-300"
          >
            <FaGithub size={30} />
          </motion.div>
        </Link>

        <Link href="https://mail.google.com/mail/u/0/">
          <motion.div
            whileHover={{ scale: 1.4 }}
            className="hover:text-white transition-colors duration-300"
          >
            <IoMdMail size={30} />
          </motion.div>
        </Link>
      </div>

      <div className="flex justify-center items-center text-lg w-full mt-6">
        <p>© Rishi Raj 2025</p>
      </div>
    </div>
  );
};

export default Footer;
