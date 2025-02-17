import React,{useState} from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fd082eb0-0985-4df3-bdb3-d4004f212270");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
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
    <div id='contact' className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]">
        <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
        <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-1 font-Ovo'>
        I'd love to hear from you! if you have any questions, comments, or feedback,
        please use the form below.
        </p>

      <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className=' grid grid-cols-auto gap-6 mt-10 mb-8'>
          <input type="text"
          className='flex-1 outline-none border-[0.5px] border-gray-400 rounded-md bg-white '
           placeholder='Enter your name' required
           name='name' />
          
          <input type="email" placeholder='Enter your email' 
          className='flex-1 outline-none border-[0.5px] border-gray-400 rounded-md bg-white '
           required name='email'/>
        </div>
        <textarea name='message'  rows={6} placeholder='Enter your message' required
         className='w-full p-4 outline-none border-[0.5px] border-gray-400 
         rounded-md bg-white mb-6'></textarea>

        <button 
        className='py-3 px-8 flex w-max items-center justify-between
        gap-3 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'
        type='submit'>Submit now  <Image src={assets.right_arrow_white} alt='' className='w-4'/></button>
      </form>
      <p className='mt-4'>{result}</p>
    </div>
  )
}

export default Contact
