'use client'

import { useEffect, useState } from "react";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
// import Services from "./component/Services";
import Work from "./component/Work";
import Experience from "./component/Experience";
import Achievements from "./component/Achievements";

export default function Home() {
  
  const [isDarkMode,setIsDarkMode] = useState(false)
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Mark the component as mounted to avoid SSR mismatch
    setIsMounted(true);
    
    // Check theme preference after mounting
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode, isMounted]);

  // Don't render until mounted to prevent hydration mismatch
  if (!isMounted) {
    return null;
  }

  return (
    <main id="top" className="relative">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <Header isDarkMode={isDarkMode}/>
      <div className="section-divider" />

      <About isDarkMode={isDarkMode}/>
      <div className="section-divider" />

      <Experience isDarkMode={isDarkMode}/>
      <div className="section-divider" />

      {/* <Services isDarkMode={isDarkMode}/> */}

      <Work isDarkMode={isDarkMode}/>
      <div className="section-divider" />

      <Achievements isDarkMode={isDarkMode}/>
      <div className="section-divider" />

      <Contact isDarkMode={isDarkMode}/>
      <Footer isDarkMode={isDarkMode}/>
    </main>
  );
}
