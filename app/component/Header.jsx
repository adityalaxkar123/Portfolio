import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react"
const Header = () => {
  return (
    <div className="w-11/12 max-w-2xl text-center mx-auto h-screen flex flex-col item-center justify-center gap-3 sm:gap-4 px-4">
      <motion.div
      initial={{scale: 0}}
      whileInView={{scale:1}}
      transition={{duration:0.8,type:'spring',stiffness:100}}
      >
        <Image src={assets.profile_img} alt="" className="rounded-full w-24 sm:w-28 md:w-32 mx-auto" priority />
      </motion.div>
      <motion.h3 
      initial={{y:-20,opacity:0}}
      whileInView={{y:0,opacity: 1}}
      transition={{duration:0.6,delay:0.3}}
      className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo mx-auto">
        Hi I'm Aditya Laxkar
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>
      <motion.h1 
      initial={{y:-30,opacity:0}}
      whileInView={{y:0,opacity: 1}}
      transition={{duration:0.8,delay:0.5}}
      className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        A passionate frontend web developer
      </motion.h1>
      <motion.p
      initial={{opacity:0}}
      whileInView={{opacity: 1}}
      transition={{duration:0.6,delay:0.7}}
       className="max-w-2xl mx-auto font-Ovo">
        I am a frontend developer from rajasthan , india with 2 months of
        experience in GirlScript summer of code.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 mx-auto">
        <motion.a
        initial={{y:30,opacity:0}}
      whileInView={{y:0,opacity: 1}}
      transition={{duration:0.6,delay:1}}
          href="#contact"
          className="px-6 sm:px-8 lg:px-10 py-2 sm:py-3 border border-white
           rounded-full bg-black text-white text-sm sm:text-base
           flex items-center gap-2 dark:bg-transparent"
        >
          contact me <Image src={assets.right_arrow_white} alt="" className="w-3 sm:w-4" />
        </motion.a>
        <motion.a
        initial={{y:30,opacity:0}}
      whileInView={{y:0,opacity: 1}}
      transition={{duration:0.6,delay:1.2}}
          href="/resume.pdf"
          download="Aditya"
          className="px-6 sm:px-8 lg:px-10 py-2 sm:py-3 border rounded-full
           dark:text-black dark:bg-white border-gray-500 text-sm sm:text-base
            flex items-center gap-2"
        >
          my resume <Image src={assets.download_icon} alt="" className="w-3 sm:w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
