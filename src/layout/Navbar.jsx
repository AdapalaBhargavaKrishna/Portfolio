import { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom"
import { useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";
import menusvg from '../assets/svg/menu.svg'
import closesvg from '../assets/svg/close.svg'


const NavBar = () => {

  const [Navbutton, setNavbutton] = useState(false)

  const { hash, pathname } = useLocation();
  const navigate = useNavigate();
  const navItems = ["Home", "About", "Projects", "Contact"];

  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [hash])

  useEffect(() => {
    const onHashChange = () => {
      const element = document.querySelector(window.location.hash)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    window.addEventListener("hashchange", onHashChange)

    return () => {
      window.removeEventListener("hashchange", onHashChange)
    }
  }, [])

  const handleNavClick = (e, targetHash) => {
    e.preventDefault();

    if (pathname === "/" && hash === `#${targetHash.toLowerCase()}`) {
      const el = document.getElementById(targetHash.toLowerCase());
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${targetHash.toLowerCase()}`);
    }
  };


  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-2 z-50 h-[4.5rem] border-none transition-all duration-700 sm:inset-x-0"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className={`flex size-full items-center justify-between p-4`}>
          <Link className={`${Navbutton ? "hidden" : "flex"}`} to="/#home">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gray-800 to-gray-900 text-white shadow-lg">
                <span className="font-display text-lg font-bold tracking-wider">BK</span>
              </div>
              <h2 className="text-blue-50 font-bold text-xl">Bhargava Krishna</h2>
            </div>
          </Link>
          <motion.div
            className={`flex gap-10 items-center ${Navbutton ? "flex" : "hidden"}`}>
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`#${item.toLowerCase()}`}
                  className="nav-hover-btn"
                  onClick={(e) => {
                    handleNavClick(e, item);
                    setNavbutton(false);
                  }}
                >
                  {item}
                </Link>
              </motion.div>

            ))}
          </motion.div>

          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={`#${item.toLowerCase()}`}
                  className="nav-hover-btn"
                  onClick={(e) => handleNavClick(e, item)}
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="md:hidden flex text-white">
              <img className={`${Navbutton ? "hidden" : "flex"} cursor-pointer`} onClick={() => setNavbutton(true)} src={menusvg} alt="" />
              <img className={`${Navbutton ? "flex" : "hidden"} cursor-pointer`} onClick={() => setNavbutton(false)} src={closesvg} alt="" />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;