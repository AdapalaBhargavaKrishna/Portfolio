import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Footer from "../components/Footer"

const Contact = () => {


  return (
    <motion.div
      id='contact'
      className='contact min-h-screen p-4 mx-auto transition-all duration-300 flex items-center justify-center'
    >
      <div className='bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 w-full max-w-2xl shadow-lg text-white'>
        <h2 className='text-3xl font-semibold mb-6 text-center'>Get in Touch</h2>
        <form className='space-y-4'>
          <div className='flex flex-col md:flex-row gap-4'>
            <div className='flex-1'>
              <label className='block mb-1 text-sm'>Full Name</label>
              <input
                type='text'
                placeholder='John Doe'
                className='w-full p-2 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white'
              />
            </div>
            <div className='flex-1'>
              <label className='block mb-1 text-sm'>Phone Number</label>
              <input
                type='tel'
                placeholder='+91 98765 43210'
                className='w-full p-2 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white'
              />
            </div>
          </div>
          <div>
            <label className='block mb-1 text-sm'>Email</label>
            <input
              type='email'
              placeholder='you@example.com'
              className='w-full p-2 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white'
            />
          </div>
          <div>
            <label className='block mb-1 text-sm'>Subject</label>
            <input
              type='text'
              placeholder='Subject'
              className='w-full p-2 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white'
            />
          </div>
          <div>
            <label className='block mb-1 text-sm'>Message</label>
            <textarea
              rows='4'
              placeholder='Write your message here...'
              className='w-full p-2 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white resize-none'
            ></textarea>
          </div>
          <div className='text-center pt-4'>
            <button
              type='submit'
              className='bg-white text-blue-600 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300'
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <Footer />
      
    </motion.div>
  );
};

export default Contact;
