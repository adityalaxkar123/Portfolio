import React from "react";
import { motion } from "motion/react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Experience = ({ isDarkMode }) => {
  const experienceData = [
    {
      company: "Edunet X shell",
      position: "Computer Vision Intern",
      duration: "2 months",
      description:
        "I worked on a project that involved computer vision to detect and classify garbage type and differentiate between recyclable and non-recyclable waste.",
      technologies: ["Python", "OpenCV", "TensorFlow", "Keras", "EfficientNetV2B2"],
      achievements: [
        "Classified 6+ classes of garbage",
        "Successfully deployed the project on Gradio",
      ],
    },
    {
      company: "GirlScript Summer of Code",
      position: "Open Source Contributor",
      duration: "2 months",
      description:
        "Contributed to 10+ open source projects in the web development domain.",
      technologies: [
        "React",
        "JavaScript",
        "Tailwind",
        "REST APIs",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Git",
        "GitHub",
      ],
      achievements: ["Delivered 10+ client projects", "Achieved 95% client satisfaction"],
    },
  ];

  return (
    <motion.div
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-4 sm:px-6 lg:px-[12%] py-8 sm:py-12 md:py-16 scroll-mt-20 
                 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-12 sm:mb-16 px-2"
      >
        <h4 className="mb-2 text-sm sm:text-base md:text-lg font-Ovo text-blue-600 dark:text-blue-400">
          My Journey
        </h4>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Ovo text-gray-800 dark:text-white">
          Work Experience
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-300 font-Ovo 
                       text-xs sm:text-sm md:text-base">
          A timeline of my professional growth and contributions to various organizations
        </p>
      </motion.div>

      <div className="relative min-h-[400px] sm:min-h-[500px]">
        {/* Timeline line - responsive positioning */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
        <div className="block md:hidden absolute left-6 sm:left-8 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>

        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`relative flex flex-col md:flex-row items-start md:items-center mb-12 md:mb-16 
                        ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
          >
            {/* Timeline dot - responsive positioning */}
            <div
              className={`absolute md:left-1/2 md:transform md:-translate-x-1/2 
                         left-6 sm:left-8 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-white border-3 sm:border-4 border-blue-500 rounded-full z-10 shadow-md
                         transform -translate-x-1/2`}
            ></div>

            {/* Content card */}
            <div
              className={`mt-8 md:mt-0 w-full md:w-5/12 ml-8 sm:ml-12 md:ml-0 ${
                index % 2 === 0 ? "md:pr-8" : "md:pl-8"
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl 
                           p-4 sm:p-6 md:p-8 shadow-lg border border-gray-200 dark:border-gray-700 
                           hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 dark:text-white">
                    {exp.position}
                  </h3>
                  <span className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-900 
                                   text-blue-800 dark:text-blue-200 rounded-full 
                                   text-xs sm:text-sm font-medium">
                    {exp.duration}
                  </span>
                </div>

                <h4 className="text-sm sm:text-base md:text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                  {exp.company}
                </h4>

                <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mb-4">
                  <h5 className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Technologies Used:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-700 
                                   text-gray-700 dark:text-gray-300 rounded-full 
                                   text-[10px] sm:text-xs md:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Key Achievements:
                  </h5>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="flex items-center text-xs sm:text-sm text-gray-600 dark:text-gray-400"
                      >
                        <Image
                          src={assets.right_arrow}
                          alt=""
                          className="w-3 h-3 sm:w-4 sm:h-4 mr-2"
                        />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
