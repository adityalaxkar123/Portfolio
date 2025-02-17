'use client'

import About from "./component/About";
import Contact from "./component/Contact";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Services from "./component/Services";
import Work from "./component/Work";
export default function Home() {
  return (
    <>
  <Navbar/>
  <Header/>
  <About/>
  <Services/>
  <Work/>
  <Contact/>
    </>
  );
}
