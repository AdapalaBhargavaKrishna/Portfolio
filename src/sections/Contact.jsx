import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import SplitText from '../components/SplitText';
import Magnetic from '../components/Magnetic';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const now = new Date();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    date: now.toLocaleDateString(),
    time: now.toLocaleTimeString(),
  });

  const [localTime, setLocalTime] = useState('');

  // Ticking local time clock in Hyderabad, IN (IST)
  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setLocalTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const currentTime = new Date();
    const templateParams = {
      ...formData,
      date: currentTime.toLocaleDateString(),
      time: currentTime.toLocaleTimeString(),
    };

    console.log('Attempting EmailJS Send with Config:', {
      SERVICE_ID,
      TEMPLATE_ID,
      PUBLIC_KEY: PUBLIC_KEY ? 'Present' : 'Missing',
    });

    toast.promise(
      emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
        .then((res) => {
          console.log('EmailJS Send Success:', res);
          return res;
        })
        .catch((err) => {
          console.error('EmailJS Send Failure Root Cause:', err);
          throw err;
        }),
      {
        loading: 'Sending message...',
        success: () => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
          });
          return 'Message sent successfully!';
        },
        error: (err) => {
          return `Failed to send: ${err?.text || err?.message || 'Unknown error'}`;
        },
      }
    );
  };

  const labelClasses = 'font-sans text-[10px] uppercase tracking-widest text-accent font-bold block mb-2';
  const inputClasses =
    'w-full bg-transparent border-b border-white/20 py-3 text-sm font-sans text-ivory placeholder:text-white/20 focus:outline-none focus:border-accent transition-colors duration-300';

  return (
    <section id="contact" className="py-24 md:py-32 section-padding bg-ivory relative z-10 overflow-hidden select-none">
      <div className="max-w-6xl mx-auto w-full">
        {/* Large visual card container */}
        <div className="bg-charcoal text-ivory rounded-[3rem] p-8 md:p-16 border border-white/5 relative overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Rotating typography badge in the corner */}
          <div className="absolute right-8 top-8 w-28 h-28 pointer-events-none opacity-20 hidden md:block">
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, ease: 'linear', duration: 15 }}
              viewBox="0 0 100 100"
              className="w-full h-full text-ivory"
            >
              <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
              <text fill="currentColor" className="text-[6.5px] font-sans uppercase tracking-[2.5px] font-bold">
                <textPath href="#circlePath">
                  • collaborate • get in touch • create
                </textPath>
              </text>
            </motion.svg>
          </div>

          {/* Left Column: Direct channels and Ticking clock */}
          <div className="lg:col-span-5 space-y-10 lg:pr-6">
            <div className="space-y-4">
              <span className="text-[10px] font-sans font-bold tracking-widest text-accent uppercase">
                04 / Start a Conversation
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ivory leading-tight">
                Let&apos;s build <br />
                something <br />
                uncommon.
              </h2>
            </div>

            <div className="h-[1px] bg-white/10 w-full" />

            {/* Direct Connect details */}
            <div className="space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold block mb-2">
                  Direct Line
                </span>
                <Magnetic>
                  <a href="mailto:bk.adapala@gmail.com" className="font-sans text-base text-ivory hover:text-accent font-semibold transition duration-200 block py-1 cursor-pointer">
                    bk.adapala@gmail.com
                  </a>
                </Magnetic>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold block mb-2">
                  Current Local Time (Hyderabad)
                </span>
                <p className="font-serif text-2xl text-accent font-medium">
                  {localTime || '00:00:00 AM'} <span className="text-xs font-sans text-white/30 ml-2">IST (UTC+5:30)</span>
                </p>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold block mb-2">
                  Social Channels
                </span>
                <div className="flex items-center gap-3 text-xs font-sans text-white/60 flex-wrap">
                  <Magnetic>
                    <a href="https://github.com/AdapalaBhargavaKrishna" target="_blank" rel="noopener noreferrer" className="hover:text-accent font-semibold transition py-1 cursor-pointer">
                      GitHub
                    </a>
                  </Magnetic>
                  <span>·</span>
                  <Magnetic>
                    <a href="https://www.linkedin.com/in/bhargavakrishnaadapala/" target="_blank" rel="noopener noreferrer" className="hover:text-accent font-semibold transition py-1 cursor-pointer">
                      LinkedIn
                    </a>
                  </Magnetic>
                  <span>·</span>
                  <Magnetic>
                    <a href="https://x.com/Bhargava1028" target="_blank" rel="noopener noreferrer" className="hover:text-accent font-semibold transition py-1 cursor-pointer">
                      X
                    </a>
                  </Magnetic>
                  <span>·</span>
                  <Magnetic>
                    <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-accent font-semibold transition text-accent py-1 cursor-pointer">
                      Resume
                    </a>
                  </Magnetic>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sleek visual Form */}
          <form onSubmit={sendEmail} className="lg:col-span-7 w-full space-y-8 bg-white/[0.02] border border-white/[0.03] backdrop-blur-sm rounded-[2rem] p-6 md:p-10 shadow-inner">
            <div className="space-y-6">
              {/* Name + Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label className={labelClasses}>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Bhargava Krishna"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
                <div className="flex flex-col">
                  <label className={labelClasses}>Your Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex flex-col">
                <label className={labelClasses}>Phone Number (Optional)</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label className={labelClasses}>Your Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project, idea, or role..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClasses} resize-none`}
                />
              </div>
            </div>

            {/* Submission triggers */}
            <div className="pt-4">
              <Magnetic>
                <button
                  type="submit"
                  className="font-sans text-xs font-semibold uppercase tracking-widest bg-accent text-ivory px-12 py-4 rounded-full hover:bg-ivory hover:text-charcoal transition-colors duration-300 cursor-pointer border-none shadow-md flex items-center gap-2"
                >
                  Send Message
                  <span>→</span>
                </button>
              </Magnetic>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
