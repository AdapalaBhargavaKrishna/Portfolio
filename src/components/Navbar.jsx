import { useState, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Magnetic from './Magnetic';

const navItems = [
  { label: 'About', href: 'about' },
  { label: 'Work', href: 'work' },
  { label: 'Skills', href: 'skills' },
  { label: 'Contact', href: 'contact' },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });

  const handleNavClick = useCallback(
    (href) => {
      setMobileMenuOpen(false);

      if (location.pathname === '/') {
        const el = document.getElementById(href);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/#' + href);
      }
    },
    [location.pathname, navigate]
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ease-in-out ${
        isScrolled
          ? 'bg-ivory/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6 md:px-12 lg:px-24">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between w-full">
          <Magnetic>
            <Link
              to="/#home"
              onClick={() => handleNavClick('home')}
              className="font-sans text-sm font-semibold tracking-wide uppercase text-charcoal hover:text-accent transition-colors duration-200 cursor-pointer block py-1"
            >
              Bhargava Krishna
            </Link>
          </Magnetic>

          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Magnetic key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="relative inline-block font-sans text-sm text-charcoal-light hover:text-accent transition-colors duration-200 cursor-pointer bg-transparent border-none p-0 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-accent after:transition-all after:duration-300 py-1"
                >
                  {item.label}
                </button>
              </Magnetic>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden items-center justify-between w-full">
          <Link
            to="/#home"
            className="font-serif text-lg text-charcoal cursor-pointer"
            onClick={() => {
              setMobileMenuOpen(false);
              handleNavClick('home');
            }}
          >
            BK
          </Link>

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="relative w-6 h-5 flex flex-col items-center justify-center gap-1 bg-transparent border-none cursor-pointer z-50"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`block w-5 h-[1.5px] bg-charcoal transition-all duration-300 origin-center ${
                mobileMenuOpen ? 'rotate-45 translate-y-[3.5px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-charcoal transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-charcoal transition-all duration-300 origin-center ${
                mobileMenuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-ivory flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.08,
                    ease: 'easeOut',
                  }}
                  onClick={() => handleNavClick(item.href)}
                  className="font-serif text-4xl text-charcoal bg-transparent border-none cursor-pointer hover:text-accent transition-colors duration-200"
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
