import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import {
  SiC,
  SiCloudinary,
  SiCss3,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiKeras,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTensorflow,
  SiVercel,
  SiWebrtc,
} from "react-icons/si";
import {
  FaCubes,
  FaDatabase,
  FaDiagramProject,
  FaJava,
  FaListCheck,
  FaSitemap,
} from "react-icons/fa6";
import { VscCode } from "react-icons/vsc";
import { motion } from "motion/react"
const About = ({isDarkMode}) => {
  const skills = useMemo(
    () => [
      { name: "Java", Icon: FaJava, color: "text-red-600" },
      { name: "Python", Icon: SiPython, color: "text-blue-500" },
      { name: "JavaScript", Icon: SiJavascript, color: "text-yellow-400" },
      { name: "C", Icon: SiC, color: "text-blue-700" },
      { name: "HTML", Icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS", Icon: SiCss3, color: "text-blue-500" },

      { name: "React.js", Icon: SiReact, color: "text-sky-500" },
      { name: "Next.js", Icon: SiNextdotjs, color: "text-gray-900 dark:text-white" },
      { name: "Node.js", Icon: SiNodedotjs, color: "text-green-600" },
      { name: "Express.js", Icon: SiExpress, color: "text-gray-800 dark:text-gray-200" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-cyan-500" },

      { name: "MongoDB", Icon: SiMongodb, color: "text-green-600" },
      { name: "MySQL", Icon: SiMysql, color: "text-blue-600" },
      { name: "Cloudinary", Icon: SiCloudinary, color: "text-blue-500" },
      { name: "Vercel", Icon: SiVercel, color: "text-gray-900 dark:text-white" },

      { name: "Git", Icon: SiGit, color: "text-orange-600" },
      { name: "GitHub", Icon: SiGithub, color: "text-gray-900 dark:text-white" },
      { name: "Docker", Icon: SiDocker, color: "text-sky-600" },
      { name: "VS Code", Icon: VscCode, color: "text-sky-600" },
      { name: "WebRTC", Icon: SiWebrtc, color: "text-emerald-500" },

      { name: "Data Structures & Algorithms", Icon: FaSitemap, color: "text-indigo-600" },
      { name: "OOP", Icon: FaCubes, color: "text-purple-600" },
      { name: "System Design", Icon: FaDiagramProject, color: "text-blue-600" },
      { name: "Operating Systems", Icon: FaCubes, color: "text-gray-600 dark:text-gray-300" },
      { name: "SDLC", Icon: FaListCheck, color: "text-teal-600" },
      { name: "DBMS", Icon: FaDatabase, color: "text-amber-600" },
      { name: "Agile", Icon: FaListCheck, color: "text-emerald-600" },

      { name: "TensorFlow", Icon: SiTensorflow, color: "text-orange-500" },
      { name: "Keras", Icon: SiKeras, color: "text-red-600" },
      { name: "OpenCV", Icon: SiOpencv, color: "text-sky-600" },
      { name: "Pandas", Icon: SiPandas, color: "text-indigo-700" },
      { name: "NumPy", Icon: SiNumpy, color: "text-blue-600" },
    ],
    []
  );

  const [skillIndex, setSkillIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setSkillIndex((prev) => (prev + 1) % skills.length);
    }, 2400);
    return () => clearInterval(id);
  }, [isPaused, skills.length]);

  const visibleSkills = [0, 1, 2].map(
    (offset) => skills[(skillIndex + offset) % skills.length]
  );
  
  return (
    <motion.section id="about" 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    className="section-shell">
      <motion.div
        initial={{opacity:0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.2}}
        className="text-center mb-10 sm:mb-14"
      >
        <p className="mb-2 text-sm sm:text-base md:text-lg font-Ovo text-blue-600 dark:text-blue-400">
          About
        </p>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-Ovo text-gray-900 dark:text-white">
          Education & Skills
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-300 font-Ovo text-xs sm:text-sm md:text-base">
          A quick snapshot of my academic background and the tools I use to build products.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left: Profile + short bio */}
        <motion.div
          initial={{opacity:0, y: 14}}
          whileInView={{opacity:1, y: 0}}
          transition={{duration:0.6}}
          className="lg:col-span-4"
        >
          <div className="rounded-3xl bg-white/70 backdrop-blur border border-black/5 shadow-sm p-5 sm:p-6 dark:bg-white/5 dark:border-white/10">
            <div className="flex items-center gap-4">
              <Image
                src="/default-avatar.svg"
                alt="Profile"
                width={96}
                height={96}
                className="rounded-2xl w-16 h-16 sm:w-20 sm:h-20 ring-1 ring-black/10 dark:ring-white/15"
              />
              <div className="min-w-0">
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">B.Tech CSE Student</p>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white truncate">
                  Aditya Laxkar
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 truncate">
                  Full Stack &amp; Software Developer
                </p>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              I build clean, scalable applications—responsive UIs, robust backends, and production-ready APIs.
            </p>
          </div>
        </motion.div>

        {/* Right: Education + Skills */}
        <div className="lg:col-span-8 space-y-6">
          {/* Education */}
          <motion.div
            initial={{opacity:0, y: 14}}
            whileInView={{opacity:1, y: 0}}
            transition={{duration:0.6, delay: 0.1}}
            className="rounded-3xl bg-gradient-to-r from-blue-500/70 via-purple-500/70 to-fuchsia-500/70 p-[1px]"
          >
            <div className="rounded-3xl bg-white dark:bg-gray-900 border border-black/5 dark:border-white/10 p-5 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Education</h4>
                <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-200 border border-blue-100/70 dark:border-blue-900/60">
                  CGPA 9.1
                </span>
              </div>

              <div className="mt-4 grid gap-3">
                <div className="rounded-2xl bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 p-4 sm:p-5">
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">2023–2027</p>
                  <p className="mt-1 text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                    B.Tech in Computer Science & Engineering
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    National Institute of Technology Manipur, Imphal
                  </p>
                </div>

                <div className="rounded-2xl bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 p-4 sm:p-5">
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Senior Secondary (12th)</p>
                  <p className="mt-1 text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                    Swami Vivekanand Govt. Model School, Rashmi
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    Chittorgarh, Rajasthan
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    Percentage: <span className="font-semibold">85.2%</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{opacity:0, y: 14}}
            whileInView={{opacity:1, y: 0}}
            transition={{duration:0.6, delay: 0.2}}
            className="rounded-3xl bg-white/70 backdrop-blur border border-black/5 shadow-sm p-5 sm:p-6 dark:bg-white/5 dark:border-white/10"
          >
            <div className="flex items-end justify-between gap-4">
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Skills</h4>
                <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  Tap next/prev (auto plays). Hover to pause.
                </p>
              </div>
            </div>

            <div
              className="mt-5 rounded-3xl bg-gradient-to-r from-blue-500/70 via-purple-500/70 to-fuchsia-500/70 p-[1px]"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="rounded-3xl bg-white dark:bg-gray-900 border border-black/5 dark:border-white/10 p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSkillIndex((prev) => (prev - 1 + skills.length) % skills.length)}
                    className="h-10 w-10 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 hover:bg-white transition"
                    aria-label="Previous skill"
                  >
                    <span className="text-lg text-gray-800 dark:text-gray-200">‹</span>
                  </button>

                  <div className="flex-1">
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                      {visibleSkills.map((skill, idx) => (
                        <motion.div
                          key={skill?.name}
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: 0.25 }}
                          className={`flex flex-col items-center text-center ${
                            idx === 2 ? "hidden lg:flex" : ""
                          }`}
                        >
                          <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-gray-100 dark:bg-white/10 border border-black/5 dark:border-white/10 flex items-center justify-center">
                            {skill?.Icon && (
                              <skill.Icon className={`text-4xl sm:text-5xl ${skill.color}`} />
                            )}
                          </div>
                          <p className="mt-3 text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                            {skill?.name}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    <p className="mt-4 text-xs sm:text-sm text-center text-gray-600 dark:text-gray-400">
                      {skillIndex + 1} / {skills.length}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSkillIndex((prev) => (prev + 1) % skills.length)}
                    className="h-10 w-10 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 hover:bg-white transition"
                    aria-label="Next skill"
                  >
                    <span className="text-lg text-gray-800 dark:text-gray-200">›</span>
                  </button>
                </div>

                <div className="mt-5 flex items-center justify-center gap-1.5 flex-wrap">
                  {skills.map((s, i) => (
                    <button
                      key={s.name}
                      type="button"
                      onClick={() => setSkillIndex(i)}
                      className={`h-2.5 rounded-full transition-all ${
                        i === skillIndex
                          ? "w-8 bg-blue-600 dark:bg-blue-400"
                          : "w-2.5 bg-gray-300 dark:bg-white/20"
                      }`}
                      aria-label={`Go to ${s.name}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
