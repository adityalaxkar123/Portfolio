import React from 'react';

const Contact = ({ isDarkMode }) => {
  return (
    <section id="contact" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-gray-300">
        I'd love to hear from you! If you have any questions, comments, or feedback, please feel free to reach out.
      </p>
      
      <form className="max-w-2xl mx-auto flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row gap-6">
          <input 
            type="text" 
            placeholder="Enter your name" 
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkTheme/30 dark:border-white/20"
            required 
          />
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkTheme/30 dark:border-white/20"
            required 
          />
        </div>
        <textarea 
          rows="6" 
          placeholder="Enter your message" 
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkTheme/30 dark:border-white/20"
          required
        ></textarea>
        
        <button 
          type="submit" 
          className="btn-primary w-max mx-auto py-3 px-8 rounded-full"
        >
          Submit now
        </button>
      </form>
    </section>
  );
};

export default Contact;
