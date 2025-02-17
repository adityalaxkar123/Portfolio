import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
const Header = () => {
  return (
    <div className="w-11/12 max-w-2xl text-center mx-auto h-screen flex flex-col item-center justify-center gap-4">
      <div>
        <Image src={assets.profile_img} alt="" className="rounded-full w-32 mx-auto" />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo mx-auto">
        Hi I'm Aditya Laxkar
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        A passionate frontend web developer
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        I am a frontend developer from rajasthan , india with 2 months of
        experience in GirlScript summer of code.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 mx-auto">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          contact me <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>
        <a
          href="/portfolio/public/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          my resume <Image src={assets.download_icon} alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
