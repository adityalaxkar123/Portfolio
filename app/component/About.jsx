import React,{useState} from "react";
import Image from "next/image";
import { assets, infoList, toolsData } from "@/assets/assets";
import { motion } from "motion/react"
const About = ({isDarkMode}) => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  
  return (
    <motion.div id="about" 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    className="section-shell">
      <motion.h4
      initial={{opacity:0,y:-20}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.5,delay:0.3}} 
      className="text-center mb-2 text-base sm:text-lg font-Ovo">Introduction</motion.h4>
      <motion.h2 
      initial={{opacity:0,y:-20}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.5,delay:0.5}}
      className="text-center text-3xl sm:text-4xl lg:text-5xl font-Ovo">About me</motion.h2>

      <motion.div
        initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:0.8}}      
       className="flex w-full flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20 my-12 sm:my-16 lg:my-20">
        <motion.div
        initial={{opacity:0,scale:0.9}}
    whileInView={{opacity:1,scale:1}}
    transition={{duration:0.6}}
         className="w-full max-w-xs sm:w-80 rounded-3xl">
          <Image
            src="/default-avatar.svg"
            alt="Default avatar"
            width={320}
            height={320}
            className="w-full rounded-3xl"
          />
        </motion.div>
        <motion.div
        initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:0.6,delay:0.8}}
         className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo text-gray-600 dark:text-gray-300 leading-relaxed">
            I am a passionate Full Stack Web & Software Developer with expertise in modern web technologies.
            I enjoy building end-to-end products—from clean, responsive UIs to robust backend logic and integrations.
            I focus on creating fast, reliable, and user-friendly applications that deliver great experiences.
          </p>
          <motion.ul
          initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:0.8,delay:1}}
           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
    whileHover={{scale:1.05}}
                key={index}
                className="rounded-2xl p-4 sm:p-6 cursor-pointer transition-all duration-300
                 bg-white/70 backdrop-blur border border-black/5 shadow-sm hover:shadow-md hover:-translate-y-0.5
                 dark:bg-white/5 dark:border-white/10"
              >
                <Image src={isDarkMode ? iconDark :icon} alt={title} className="w-6 sm:w-7 mt-3" />
                <h3 className="my-3 sm:my-4 font-semibold text-sm sm:text-base
                 text-gray-700 dark:text-white">{title}</h3>
                <p className="text-gray-600 dark:text-white/80 text-xs sm:text-sm">{description}</p>
              </motion.li>
            ))}
          </motion.ul>
          <motion.h4 
          initial={{opacity:0,y:20}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:1.3,delay:0.5}}
          className="my-6 text-gray-700 
          font-Ovo dark:text-white/80 text-xl font-semibold">Technologies & Tools</motion.h4>

          <motion.ul
          initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5,delay:0.6}}
           className="flex items-center gap-3 sm:gap-5 mb-8">
            {toolsData.map((tool, index) => (
              <motion.li
              whileHover={{scale:1.1, y: -5}}
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 bg-white dark:bg-gray-800 hover:shadow-lg hover:border-blue-400 dark:hover:border-blue-500 transition-all"
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>

          {/* Skills Section */}
          <motion.div
            initial={{opacity:0, y: 20}}
            whileInView={{opacity:1, y: 0}}
            transition={{duration:1.5, delay: 0.8}}
            className="mt-8"
          >
            <h5 className="text-lg font-semibold text-gray-700 dark:text-white mb-4">Technical Skills</h5>
            
            {/* Core Skills (Always Visible) */}
            <div className="mb-6">
              <h6 className="text-md font-semibold text-gray-600 dark:text-gray-400 mb-3">Core Skills</h6>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { skill: "Java", level: 95 },
                  { skill: "Python", level: 85 },
                  { skill: "React.js", level: 88 },
                  { skill: "Git & GitHub", level: 90 }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-300 font-medium">{item.skill}</span>
                      <span className="text-gray-500 dark:text-gray-400">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{width: 0}}
                        whileInView={{width: `${item.level}%`}}
                        transition={{duration: 1, delay: index * 0.1}}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Show More Button */}
            <div className="text-center mb-6">
              <motion.button
                onClick={() => setShowAllSkills(!showAllSkills)}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {showAllSkills ? 'Show Less' : 'Show More Skills'}
              </motion.button>
            </div>

            {/* All Skills (Conditionally Visible) */}
            {showAllSkills && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Client-Side Development */}
                <div>
                  <h6 className="text-md font-semibold text-gray-600 dark:text-gray-400 mb-3">Client-Side Development</h6>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { skill: "HTML", level: 95 },
                      { skill: "CSS", level: 90 },
                      { skill: "JavaScript", level: 88 },
                      { skill: "Next.js", level: 80 },
                      { skill: "Responsive Design", level: 92 }
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-300 font-medium">{item.skill}</span>
                          <span className="text-gray-500 dark:text-gray-400">{item.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{width: 0}}
                            whileInView={{width: `${item.level}%`}}
                            transition={{duration: 1, delay: index * 0.1}}
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Backend Development */}
                <div>
                  <h6 className="text-md font-semibold text-gray-600 dark:text-gray-400 mb-3">Backend Development</h6>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { skill: "Node.js", level: 82 },
                      { skill: "Express.js", level: 80 },
                      { skill: "MongoDB", level: 78 }
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-300 font-medium">{item.skill}</span>
                          <span className="text-gray-500 dark:text-gray-400">{item.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{width: 0}}
                            whileInView={{width: `${item.level}%`}}
                            transition={{duration: 1, delay: (index + 5) * 0.1}}
                            className="bg-gradient-to-r from-green-500 to-teal-600 h-2 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI & Machine Learning */}
                <div>
                  <h6 className="text-md font-semibold text-gray-600 dark:text-gray-400 mb-3">AI & Machine Learning</h6>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { skill: "TensorFlow", level: 75 },
                      { skill: "OpenCV", level: 80 },
                      { skill: "Scikit-learn", level: 78 },
                      { skill: "NumPy", level: 82 },
                      { skill: "Matplotlib", level: 80 },
                      { skill: "EfficientNetV2B2", level: 70 }
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-300 font-medium">{item.skill}</span>
                          <span className="text-gray-500 dark:text-gray-400">{item.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{width: 0}}
                            whileInView={{width: `${item.level}%`}}
                            transition={{duration: 1, delay: (index + 8) * 0.1}}
                            className="bg-gradient-to-r from-orange-500 to-red-600 h-2 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools & Platforms */}
                <div>
                  <h6 className="text-md font-semibold text-gray-600 dark:text-gray-400 mb-3">Tools & Platforms</h6>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { skill: "Cloudinary", level: 75 }
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-300 font-medium">{item.skill}</span>
                          <span className="text-gray-500 dark:text-gray-400">{item.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{width: 0}}
                            whileInView={{width: `${item.level}%`}}
                            transition={{duration: 1, delay: (index + 14) * 0.1}}
                            className="bg-gradient-to-r from-purple-500 to-pink-600 h-2 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
          
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
