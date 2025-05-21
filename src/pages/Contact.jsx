import React from 'react'
import Footer from './Footer'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className="relative h-[91vh] flex flex-col justify-center items-center text-white contact px-4 text-center">
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-black/90 via-black/10 to-black/90"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="z-10 space-y-6 flex flex-col w-full h-full mt-20"
        >
          <div>
            <div className="space-y-6  flex flex-col items-center">
              <h1 className="text-4xl font-bold sm:text-5xl leading-tight">
                Let’s build something <span className="text-purple-400">amazing</span> together
              </h1>
              <p className="text-lg text-gray-300 max-w-80 md:max-w-xl">
                I'm open to full-time opportunities, freelance work, and collaboration on exciting products.
                Drop a message, and I’ll get back to you soon.
              </p>
            </div>
          </div>

          <div className='flex justify-around'>

            <div className='w-full md:w-[40%]'>
              <form className="flex flex-col space-y-5 p-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-black/30  border-0 border-b-2 border-green-200 rounded-xl p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2  transition"
                />
                <div className='flex md:flex-row flex-col gap-2'>
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-black/30 md:w-1/2 border-0 border-b-2 border-green-200 rounded-xl p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2  transition"
                  />
                <input
                  type="Phno"
                  placeholder="Phone Number (optional)"
                  className="bg-black/30 md:w-1/2 border-0 border-b-2 border-green-200 rounded-xl p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2  transition"
                  />
                  </div>
                <textarea
                  rows="5"
                  placeholder="Message"
                  className="bg-black/30 border-0 border-b-2 border-green-200 rounded-xl p-3 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 transition"
                ></textarea>

                <button className="mt-4 border border-neutral-700 group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md px-6 font-medium text-neutral-200"><span>Send Message</span><div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]"><div className="relative h-full w-8 bg-white/20"></div></div></button>
              </form>
            </div>
          </div>
        </motion.div>

      </div>

      <Footer className="relative z-10 pointer-events-auto" />
    </>
  )
}

export default Contact
