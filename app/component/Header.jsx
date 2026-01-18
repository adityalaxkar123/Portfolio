import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react"
const Header = () => {
  return (
    <section className="relative w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 sm:gap-5 px-4">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/25 via-fuchsia-500/20 to-sky-500/20 blur-3xl" />
        <div className="absolute right-[-60px] bottom-24 h-64 w-64 rounded-full bg-gradient-to-tr from-emerald-500/15 via-cyan-500/15 to-violet-500/15 blur-3xl" />
      </div>
      <motion.div
      initial={{scale: 0}}
      whileInView={{scale:1}}
      transition={{duration:0.8,type:'spring',stiffness:100}}
      >
        <Image
          src="/default-avatar.svg"
          alt="Default avatar"
          width={128}
          height={128}
          className="rounded-full w-24 sm:w-28 md:w-32 mx-auto ring-1 ring-black/10 dark:ring-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
          priority
        />
      </motion.div>
      <motion.h3 
      initial={{y:-20,opacity:0}}
      whileInView={{y:0,opacity: 1}}
      transition={{duration:0.6,delay:0.3}}
      className="flex items-end gap-2 text-lg sm:text-xl md:text-2xl font-Ovo mx-auto">
        Hi I'm Aditya Laxkar
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>
      <motion.h1 
      initial={{y:-30,opacity:0}}
      whileInView={{y:0,opacity: 1}}
      transition={{duration:0.8,delay:0.5}}
      className="text-3xl sm:text-5xl lg:text-6xl font-Ovo leading-tight tracking-tight">
        A passionate <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-sky-600 bg-clip-text text-transparent">Full Stack</span> Web &amp; Software Developer
      </motion.h1>
      <motion.p
      initial={{opacity:0}}
      whileInView={{opacity: 1}}
      transition={{duration:0.6,delay:0.7}}
       className="max-w-2xl mx-auto font-Ovo text-sm sm:text-base text-gray-700 dark:text-gray-300">
        I build clean, scalable applications—from responsive web UIs to robust backend systems.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-4 mx-auto">
        <motion.a
        initial={{y:30,opacity:0}}
      whileInView={{y:0,opacity: 1}}
      transition={{duration:0.6,delay:1}}
          href="#contact"
          className="btn-primary"
        >
          contact me <Image src={assets.right_arrow_white} alt="" className="w-3 sm:w-4" />
        </motion.a>
        <motion.a
        initial={{y:30,opacity:0}}
      whileInView={{y:0,opacity: 1}}
      transition={{duration:0.6,delay:1.2}}
          href="/Aditya_software.pdf"
          download="Aditya_Laxkar_Resume"
          className="btn-secondary"
        >
          my resume <Image src={assets.download_icon} alt="" className="w-3 sm:w-4" />
        </motion.a>
      </div>
    </section>
  );
};

export default Header;
