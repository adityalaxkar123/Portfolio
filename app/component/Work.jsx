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
      className="section-shell"
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
          Explore projects showcasing full-stack development, UI/UX, and modern web technologies.
        </p>
      </motion.div>

      {/* Project Cards */}
      <motion.div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8'>
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            key={index}
            className='rounded-2xl bg-white/80 backdrop-blur border border-black/5 shadow-sm overflow-hidden 
                       hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col
                       dark:bg-white/5 dark:border-white/10'
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
                  className="px-3 py-1.5 bg-black/5 text-xs sm:text-sm rounded-lg hover:bg-black/10 transition
                             dark:bg-white/10 dark:hover:bg-white/15"
                >
                  GitHub
                </a>

                {project.preview && (
                  <a
                    href={project.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs sm:text-sm 
                               rounded-lg hover:opacity-90 transition"
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
