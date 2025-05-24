import React from 'react'
import githublogo from '../assets/svg/github.svg';
import linkedinlogo from '../assets/svg/linkedin.svg';
import xlogo from '../assets/svg/x.svg';
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <div className='min-h-max md:min-h-[25vh] bg-black md:pb-0 pb-16 relative z-50'>
      <div className='mx-auto w-full md:w-[70%] px-4 md:px-0'>
        <div className='flex md:flex-row flex-col md:justify-between'>

<div className='md:w-1/2'>
          <div className='mb-2'>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white shadow-lg mb-2 md:mb-4">
              <span className="text-xl font-extrabold tracking-wider">BK</span>
            </div>
            <p className='w-60 text-sm text-neutral-300'>I'm Bhargava Krishna - a Computer Science student & problem solver. Thanks for checking out my site!</p>
          </div>
          
        <div className='md:w-[91%] flex justify-between mb-5'>
          <p className=' text-neutral-400 text-sm my-5'>© 2025 Bhargava Krishna</p>
          <a href="mailto:bk.adapala@gmail.com" className="text-neutral-400 text-sm my-5 hover:underline">bk.adapala@gmail.com</a>  
          </div>
        </div>

          <div className='flex md:mx-0 gap-[50%] md:gap-40'>

            <div>
              <h1 className='font-semibold text-white text-lg mb-2'>General</h1>
              <ul className='text-neutral-300 space-y-2'>
                <li><a href="#home" className="cursor-pointer hover:underline">Home</a></li>
                <li><a href="#about" className="cursor-pointer hover:underline">About</a></li>
                <li><a href="#projects" className="cursor-pointer hover:underline">Projects</a></li>
                <li><a href="#contact" className="cursor-pointer hover:underline">Contact</a></li>
              </ul>
            </div>

            <div className='flex flex-col items-center gap-4'>
              <h1 className='font-semibold text-white text-lg mb-1'>Links</h1>
              <ul className='text-neutral-300 flex gap-4 mb-4'>
                <li><a href="https://github.com/AdapalaBhargavaKrishna" target='_blank'><img src={githublogo} alt="" className="invert" /></a></li>
                <li><a href="https://www.linkedin.com/in/bhargavakrishnaadapala/ " target='_blank'><img src={linkedinlogo} alt="" className="invert" /></a></li>
                <li><a href="https://x.com/Bhargava1028" target='_blank'><img src={xlogo} alt="" className="invert" /></a></li>
              </ul>
              <a  href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-2 h-12 bg-blue-50/95 border border-blue-100 px-6 font-medium text-blue-600 rounded-xl hover:bg-blue-50 shadow-2xl"
                >
                  <span>Resume</span>
                </motion.button>
              </a>
            </div>

          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Footer