import {Outfit,Ovo } from "next/font/google";
import "./globals.css";

const OutfitFont = Outfit({
  subsets: ["latin"],
  weight:["400","500","600","700"],
  variable: "--font-outfit",
});

const OvoFont = Ovo({
  subsets: ["latin"],
  weight:["400"],
  variable: "--font-ovo",
});


export const metadata = {
  title: "Portfolio - Aditya",
  description: "know me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${OutfitFont.variable} ${OvoFont.variable} font-Outfit antialiased leading-8 overflow-x-hidden text-slate-900 dark:text-slate-100 bg-gradient-to-b from-white via-slate-50 to-white dark:from-[#07000e] dark:via-darkTheme dark:to-[#07000e]`}
      >
        {children}
      </body>
    </html>
  );
}
