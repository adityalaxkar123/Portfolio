"use client"
import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORM_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-4 sm:px-6 lg:px-[12%] py-12 sm:py-16 scroll-mt-20 bg-gradient-to-br from-gray-900 to-blue-900 dark:from-gray-800 dark:to-blue-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-4 sm:left-10 w-32 h-32 sm:w-64 sm:h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-12 sm:mb-16"
      >
        <h4 className="mb-2 text-base sm:text-lg font-Ovo text-blue-400">
          Connect with me
        </h4>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-Ovo text-white">
          Get in touch
        </h2>
        <p className="text-center max-w-3xl mx-auto mt-3 sm:mt-5 mb-6 sm:mb-8 font-Ovo text-gray-300 text-sm sm:text-base px-4">
          I'd love to hear from you! If you have any questions, comments, or
          feedback, please use the form below. Let's start a conversation about your next project.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="space-y-6 sm:space-y-8"
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Let's start a conversation</h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              I'm always excited to hear about new projects and opportunities. 
              Whether you have a specific project in mind or just want to chat about 
              web development, I'd love to connect with you.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-white">Email</p>
                <p>adityalaxkar9876@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-white">Location</p>
                <p>Rajasthan, India</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-white">Response Time</p>
                <p>Within 24 hours</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          onSubmit={onSubmit}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <motion.input
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              type="text"
              className="w-full h-10 sm:h-12 px-3 sm:px-4 outline-none border border-gray-300 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm sm:text-base"
              placeholder="Your name"
              required
              name="name"
            />

            <motion.input
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              type="email"
              placeholder="Your email"
              className="w-full h-10 sm:h-12 px-3 sm:px-4 outline-none border border-gray-300 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm sm:text-base"
              required
              name="email"
            />
          </div>

          <motion.textarea
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            name="message"
            rows={4}
            placeholder="Tell me about your project..."
            required
            className="w-full p-3 sm:p-4 outline-none border border-gray-300 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all mb-4 sm:mb-6 resize-none text-sm sm:text-base"
          ></motion.textarea>

          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.3 }}
            className="w-full py-4 px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
            type="submit"
          >
            Send Message
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </motion.button>

          {result && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 text-center p-3 rounded-lg ${
                result.includes('Successfully') 
                  ? 'bg-green-100 text-green-800 border border-green-200' 
                  : 'bg-blue-100 text-blue-800 border border-blue-200'
              }`}
            >
              {result}
            </motion.p>
          )}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
