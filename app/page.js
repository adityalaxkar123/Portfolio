'use client'

import { useEffect, useState } from "react";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Services from "./component/Services";
import Work from "./component/Work";
export default function Home() {
  
  const [isDarkMode,setIsDarkMode] = useState(false)
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Mark the component as mounted to avoid SSR mismatch
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    if(localStorage.theme == 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
setIsDarkMode(true)
    }else{
setIsDarkMode(false)
    }
  }, [isMounted])
  
  
  useEffect(()=>{
    if (!isMounted) return;
    if(isDarkMode){
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark';
    }
    else{
      document.documentElement.classList.remove('dark')
      localStorage.theme = '';
    }
  },[isDarkMode,isMounted])

  return (
    <>
  <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
  <Header isDarkMode={isDarkMode}/>
  <About isDarkMode={isDarkMode}/>
  <Services isDarkMode={isDarkMode}/>
  <Work isDarkMode={isDarkMode}/>
  <Contact isDarkMode={isDarkMode}/>
  <Footer isDarkMode={isDarkMode}/>
    </>
  );
}
