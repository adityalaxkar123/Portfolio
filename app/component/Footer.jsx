import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
    <h3  className='w-36 mx-auto mb-2'>Aditya &copy;</h3>
        <div className='w-max flex items-center gap-2 mx-auto'>
        <Image src={isDarkMode?assets.mail_icon_dark :assets.mail_icon} alt='' className='w-6'/>
        laxkaraditya@gmail.com

        </div>
      </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p className=''>&copy; 2025 Aditya Laxkar. All rights reserved. </p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li className=''><a href="https://github.com/adityalaxkar123" target='_blank'>Github</a></li>
                <li className=''><a href="https://github.com/adityalaxkar123" target='_blank'>LinkedIn</a></li>
                <li className=''><a href="https://github.com/adityalaxkar123" target='_blank'>Instagram</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
