import React, { useState } from 'react'
import Footer from './Footer'
import { motion } from 'framer-motion'
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {

  const now = new Date();
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    date: now.toLocaleDateString(),
    time: now.toLocaleTimeString(),
  });

  const sendEmail = (e) => {
    e.preventDefault();

    toast.promise(
      emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY),
      {
        loading: 'Sending message...',
        success: 'Message sent successfully! 🎉',
        error: 'Failed to send message. Please try again.',
      }
    )
      .then(
        (result) => {
          console.log(result.text);
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            date: now.toLocaleDateString(),
            time: now.toLocaleTimeString(),
          })
        }
      );
  };

  const copyText = async (text) => {
    try {
      console.log("copyText called");
      await navigator.clipboard.writeText(text);
      toast.success('Copied to clipboard!');
    } catch (error) {
      toast.error('Failed to copy!');
    }
  };

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            marginTop: '10px',
            marginRight: '20px',
          }
        }}
      />

      <div
        id="contact"
        className="relative min-h-[91vh] flex flex-col justify-center items-center text-white contact px-4 py-16 overflow-hidden"
      >
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-black/90 via-black/10 to-black/90"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto">

          <motion.div
            className="mb-16 text-center"
          >
            <motion.h1
              initial={{ opacity: 0, x: -300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
                Let’s Connect & Create Impact
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="text-base md:text-xl text-gray-300 max-w-4xl mx-auto">Always open to meaningful connections in software engineering, product development, or tech. If you’re a developer, recruiter, or tech enthusiast, feel free to reach out.
            </motion.p>

          </motion.div>

          <div className="flex flex-col md:flex-row md:justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.4 }}
              className="hidden md:block relative w-96"
            >
              <div className="sticky top-24 space-y-8">
                <div className="relative p-8 border border-gray-800/50 rounded-xl bg-black/20 backdrop-blur-sm">
                  <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-purple-500/80"></div>
                  <div className="absolute -bottom-3 -right-3 w-6 h-6 rounded-full bg-blue-500/80"></div>
                  <h3 className="text-2xl font-bold mb-4 text-purple-300">Quick Info</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mt-1 mr-4 text-purple-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Email</p>
                        <div className='flex items-center gap-2'>

                          <a
                            href="mailto:bk.adapala@gmail.com"
                            className="text-gray-200 hover:underline cursor-pointer"
                          >
                            bk.adapala@gmail.com
                          </a>
                          <div
                            className="inline-block mt-1 cursor-pointer"
                            onClick={() => copyText('bk.adapala@gmail.com')}
                            aria-label="Copy email to clipboard"
                            title="Click to copy email"
                          >
                            <lord-icon
                              colors="primary:#ffffff,secondary:#ffffff"
                              style={{ width: '25px', height: '25px', paddingTop: '3px', paddingLeft: '3px' }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            />
                          </div>
                        </div>

                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-4 text-purple-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Phone</p>
                        <p className="text-gray-200">+91 93902 44436</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-4 text-purple-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Location</p>
                        <p className="text-gray-200">Hyderabad, India</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-green-400">💬</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Response Time</p>
                      <p className="text-white">Usually within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.4 }}
              className="md:col-span-2 lg:w-[55%]"
            >
              <div className="bg-black/30 backdrop-blur-md border border-gray-800/50 rounded-2xl p-8 md:p-12 shadow-xl shadow-purple-900/10">
                <h2 className="text-3xl font-bold mb-2">
                  <span className="text-purple-400">Send me</span> a message
                </h2>
                <p className="text-gray-400 mb-8">Fill out the form below and I'll get back to you soon.</p>

                <form onSubmit={sendEmail} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        type="text"
                        className="w-full bg-black/20 border-0 border-b-2 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent peer"
                        placeholder="Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="email"
                        className="w-full bg-black/20 border-0 border-b-2 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent peer"
                        placeholder="Email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      type="tel"
                      className="w-full bg-black/20 border-0 border-b-2 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent peer"
                      placeholder="Phone number (optional)"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="relative">
                    <textarea
                      rows="5"
                      className="w-full bg-black/20 border-0 border-b-2 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent peer resize-none"
                      placeholder="Message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl w-full border border-neutral-800 px-6 font-medium text-neutral-200"
                  >
                    <span>Send Message</span>
                    <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                      <div className="relative h-full w-8 bg-white/20"></div>
                    </div>
                  </button>
                </form>

              </div>
            </motion.div>
          </div>

        </div>
      </div>

      <Footer className="relative z-10 pointer-events-auto" />
    </>
  )
}

export default Contact