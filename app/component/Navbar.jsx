import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
const Navbar = ({isDarkMode,setIsDarkMode}) => {
  const [isScroll,setIsScroll] = useState(false)
  const sideMenuRef = useRef();

    const openMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>50){
                setIsScroll(true)
            }else{
                setIsScroll(false)
            }
        })
    },[])
    return (

    <>
    {/* Decorative background removed (was fixed and distracting) */}
        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4
         flex items-center justify-between z-50 transition-all
          ${isScroll ? "bg-white/70 backdrop-blur-lg shadow-sm border-b border-black/5 dark:bg-white/5 dark:border-white/10": "" }`}>
            <a href="#top">
                    <h3 className='w-28 cursor-pointer mr-14'>Aditya &copy;</h3>
            </a>
            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-10 py-2.5
            ${isScroll ? "":"bg-white/70 backdrop-blur shadow-sm border border-black/5 dark:bg-white/5 dark:border-white/10"} `}>
                <li><a className='font-Ovo' href="#top">Home</a></li>
                <li><a className='font-Ovo' href="#about">About me</a></li>
                <li><a className='font-Ovo' href="#experience">Experience</a></li>
                <li><a className='font-Ovo' href="#work">My Work</a></li>
                <li><a className='font-Ovo' href="#achievements">Achievements</a></li>
                <li><a className='font-Ovo' href="#contact">Contact me</a></li>
            </ul>

            <div className='flex items-center gap-4'>
                <button onClick={()=> setIsDarkMode(prev => !prev)}>
                    <Image src={isDarkMode ?assets.sun_icon : assets.moon_icon} alt='' className='w-6'/>
                </button>
                <a href="#contact" className='h-12 font-Ovo hidden lg:flex items-center
                 gap-3 px-10 rounded-full ml-4 border border-black/10 bg-white/60 backdrop-blur
                 hover:bg-white transition dark:bg-white/5 dark:border-white/15 '>
                Contact <Image src={isDarkMode ?assets.arrow_icon_dark: assets.arrow_icon} alt='contact image' className='w-3'/></a>
                <button className='block md:hidden ml-3'>
                <Image src={isDarkMode ?assets.menu_white : assets.menu_black} alt='' className='w-6' onClick={openMenu}/>
                </button>
            </div>
            {/*mobile menu*/}

            <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64
             z-50 h-screen bg-rose-50 transition duration-500
             dark:bg-darkHover dark:text-white'>
             <div className='absolute right-6 top-6'>
                <Image src={isDarkMode ?assets.close_white: assets.close_black} alt='' className='w-5 cursor-pointer ' onClick={closeMenu}/>
             </div>
            <li><a className='font-Ovo' href="#top">Home</a></li>
                <li><a onClick={closeMenu} className='font-Ovo' href="#about">About me</a></li>
                <li><a onClick={closeMenu} className='font-Ovo' href="#experience">Experience</a></li>
                <li><a onClick={closeMenu} className='font-Ovo' href="#work">My Work</a></li>
                <li><a onClick={closeMenu} className='font-Ovo' href="#achievements">Achievements</a></li>
                <li><a onClick={closeMenu} className='font-Ovo' href="#contact">Contact me</a></li>
            </ul>

        </nav>
    </>
  )
}

export default Navbar
