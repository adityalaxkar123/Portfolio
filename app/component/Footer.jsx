import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
const Footer = ({isDarkMode}) => {
  return (
    <footer className=' bg-gradient-to-r from-gray-900 to-blue-900 dark:from-gray-800 dark:to-blue-800 text-white'>
      <div className='px-4 sm:px-6 lg:px-[12%] py-12 sm:py-16'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 sm:mb-12'>
          {/* Brand Section */}
          <div className='text-center md:text-left'>
            <h3 className='text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
              Aditya Laxkar
            </h3>
            <p className='text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base'>
              A passionate frontend developer creating beautiful and functional web experiences.
            </p>
            <div className='flex items-center justify-center md:justify-start gap-2 sm:gap-3'>
              <Image src={isDarkMode?assets.mail_icon_dark :assets.mail_icon} alt='Email' className='w-4 sm:w-5'/>
              <span className='text-gray-300 text-sm sm:text-base'>laxkaraditya@gmail.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className='text-center md:text-left'>
            <h4 className='text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-blue-400'>Quick Links</h4>
            <ul className='space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base'>
              <li><a href="#about" className='hover:text-blue-400 transition-colors'>About</a></li>
              <li><a href="#experience" className='hover:text-blue-400 transition-colors'>Experience</a></li>
              <li><a href="#work" className='hover:text-blue-400 transition-colors'>Portfolio</a></li>
              <li><a href="#achievements" className='hover:text-blue-400 transition-colors'>Achievements</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className='text-center md:text-left'>
            <h4 className='text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-blue-400'>Connect</h4>
            <div className='flex items-center justify-center md:justify-start gap-3 sm:gap-4'>
              <a href="https://github.com/adityalaxkar123" target='_blank' rel="noopener noreferrer" className='w-8 h-8 sm:w-10 sm:h-10 bg-gray-700/20 hover:bg-gray-600/40 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1' title="GitHub Profile">
                <svg className='w-4 h-4 sm:w-5 sm:h-5' fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/adityalaxkar123" target='_blank' rel="noopener noreferrer" className='w-8 h-8 sm:w-10 sm:h-10 bg-blue-600/20 hover:bg-blue-600/40 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1' title="LinkedIn Profile">
                <svg className='w-4 h-4 sm:w-5 sm:h-5' fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://leetcode.com/u/adityalaxkar_123/" target='_blank' rel="noopener noreferrer" className='w-8 h-8 sm:w-10 sm:h-10 bg-orange-600/20 hover:bg-orange-600/40 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1' title="LeetCode Profile">
                <svg className='w-4 h-4 sm:w-5 sm:h-5' fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a1.64 1.64 0 0 0-.049 2.229l4.129 4.127a1.664 1.664 0 0 0 2.23.049l6.275-6.336a1.64 1.64 0 0 0 .049-2.229L14.743.439A1.374 1.374 0 0 0 13.483 0zM9.283 15.273a1.241 1.241 0 0 0-1.96-.51l-.83.829.828.828a1.25 1.25 0 0 0 1.962.51l.83-.829-.828-.828z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='text-center border-t border-gray-700 pt-8'>
          <p className='text-gray-400'>&copy; 2025 Aditya Laxkar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
