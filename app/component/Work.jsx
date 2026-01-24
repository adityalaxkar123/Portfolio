"use client";
import { workData } from '@/assets/assets'
import React from 'react'
import { motion } from 'framer-motion'

const Work = ({ isDarkMode: _isDarkMode }) => {
  return (
    <motion.section
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
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mb-10 sm:mb-14"
      >
        <p className="mb-2 text-sm sm:text-base md:text-lg font-Ovo text-blue-600 dark:text-blue-400">
          Portfolio
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Ovo text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        <p className='max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-300 font-Ovo text-xs sm:text-sm md:text-base'>
          Full-stack applications I've built end-to-end.
        </p>
      </motion.div>

      {/* Project List */}
      <div className='space-y-4 sm:space-y-5'>
        {workData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            viewport={{ once: true, amount: 0.25 }}
            className='group rounded-2xl bg-gradient-to-r from-blue-500/60 via-purple-500/60 to-fuchsia-500/60 p-[1px]'
          >
            <div className='rounded-2xl bg-white dark:bg-gray-900 border border-black/5 dark:border-white/10 p-5 sm:p-6'>
              <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4'>
                {/* Left: Title + Description */}
                <div className='flex-1 min-w-0'>
                  <div className='flex items-center gap-3'>
                    <span className='flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-gradient-to-br from-blue-600 via-purple-600 to-fuchsia-600 text-white font-bold text-sm'>
                      {index + 1}
                    </span>
                    <h3 className='text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white'>
                      {project.title}
                    </h3>
                  </div>
                  <p className='mt-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed'>
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className='mt-4 flex flex-wrap gap-2'>
                    {(project.techStack || []).slice(0, 5).map((tech, i) => (
                      <span
                        key={i}
                        className='px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-medium bg-gray-100 text-gray-700
                                   dark:bg-white/10 dark:text-gray-200 border border-black/5 dark:border-white/10'
                      >
                        {tech}
                      </span>
                    ))}
                    {(project.techStack?.length || 0) > 5 && (
                      <span className='px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-medium bg-gray-100 text-gray-500
                                       dark:bg-white/10 dark:text-gray-400 border border-black/5 dark:border-white/10'>
                        +{project.techStack.length - 5} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Right: Links */}
                <div className='flex flex-wrap sm:flex-col gap-2 sm:gap-3 sm:items-end shrink-0'>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-medium rounded-lg border border-black/10 hover:border-black/20 transition
                               dark:border-white/10 dark:hover:border-white/20 text-gray-800 dark:text-gray-200"
                  >
                    GitHub <span aria-hidden="true">↗</span>
                  </a>

                  {project.preview && (
                    <a
                      href={project.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs sm:text-sm font-medium
                                 rounded-lg hover:opacity-90 transition"
                    >
                      Live Demo <span aria-hidden="true">↗</span>
                    </a>
                  )}

                  {project.bgImage?.src && (
                    <a
                      href={project.bgImage.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-medium rounded-lg bg-gray-100 hover:bg-gray-200 transition
                                 dark:bg-white/10 dark:hover:bg-white/15 text-gray-700 dark:text-gray-200"
                    >
                      Screenshot <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Work;
