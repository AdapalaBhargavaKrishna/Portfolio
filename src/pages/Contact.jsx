import React from 'react'
import Footer from './Footer'
import { motion, useScroll, useTransform } from 'framer-motion'

const Contact = () => {

  return (
    <>
      <div id="contact" className="relative h-[90vh] flex justify-center items-center text-white contact">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 z-0"></div>

        {/* Animated Heading */}
        <div
         className="z-10 text-center p-5">
          <motion.h1
            initial={{ opacity: 0, x: -500 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false }}
            className="text-5xl font-bold"
          >
            Contact
          </motion.h1>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Contact
