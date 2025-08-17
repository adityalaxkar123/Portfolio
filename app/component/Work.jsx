"use client";
import { assets, workData } from '@/assets/assets'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Work = ({ isDarkMode }) => {
  const [expandedDesc, setExpandedDesc] = useState(null);
  const [showTechStack, setShowTechStack] = useState(null);

  const toggleDesc = (index) => setExpandedDesc(expandedDesc === index ? null : index);
  const toggleTech = (index) => setShowTechStack(showTechStack === index ? null : index);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='work'
      className="w-full px-3 sm:px-6 lg:px-[10%] py-8 sm:py-12 scroll-mt-20 
                 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-8 sm:mb-12 px-2"
      >
        <h4 className="mb-1 text-xs sm:text-sm md:text-base font-Ovo text-blue-600 dark:text-blue-400">
          My Portfolio
        </h4>
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-Ovo text-gray-800 dark:text-white">
          My Latest Work
        </h2>
        <p className='text-center max-w-2xl mx-auto mt-3 mb-4 sm:mb-6 font-Ovo 
                      text-gray-600 dark:text-gray-300 text-xs sm:text-sm md:text-base px-2'>
          Explore my projects showcasing front-end development, UI/UX design, and modern web technologies.
        </p>
      </motion.div>

      {/* Project Cards */}
      <motion.div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8'>
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            key={index}
            className='rounded-xl shadow-md bg-white dark:bg-gray-800 overflow-hidden 
                       hover:shadow-xl transition-all duration-500 flex flex-col'
          >
            {/* Clickable Image */}
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Image
                src={project.bgImage}
                alt={project.title}
                width={500}
                height={300}
                className='w-full h-40 sm:h-48 md:h-56 object-cover'
              />
            </a>

            {/* Project Info */}
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className='text-sm sm:text-lg md:text-xl font-bold mb-2 text-gray-800 dark:text-white'>
                  {project.title}
                </h3>
                
                {/* Description */}
                <p
                  className={`text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-3 
                              overflow-hidden transition-all duration-300 ${
                    expandedDesc === index ? 'line-clamp-none' : 'line-clamp-3'
                  }`}
                >
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 mb-3">
                  <button
                    onClick={() => toggleDesc(index)}
                    className="text-blue-600 dark:text-blue-400 font-medium text-xs sm:text-sm"
                  >
                    {expandedDesc === index ? 'Show Less' : 'Know More'}
                  </button>

                  <button
                    onClick={() => toggleTech(index)}
                    className="text-purple-600 dark:text-purple-400 font-medium text-xs sm:text-sm"
                  >
                    {showTechStack === index ? 'Hide Tech Stack' : 'Show Tech Stack'}
                  </button>
                </div>

                {/* Tech Stack */}
                {showTechStack === index && (
                  <div className='flex flex-wrap gap-2 mb-3'>
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className='px-2 py-0.5 bg-indigo-600 rounded-full text-[10px] sm:text-xs font-medium text-white'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-gray-200 dark:bg-gray-700 text-xs sm:text-sm 
                             rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                  GitHub
                </a>

                {project.preview && (
                  <a
                    href={project.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-blue-600 text-white text-xs sm:text-sm 
                               rounded-lg hover:bg-blue-700"
                  >
                    Preview
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Work;
