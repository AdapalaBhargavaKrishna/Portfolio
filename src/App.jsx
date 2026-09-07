import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { Toaster } from 'react-hot-toast'
import Lenis from 'lenis'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Work from "./sections/Work"
import Contact from "./sections/Contact"
import ProjectsPage from "./sections/ProjectsPage"
import PageTransition from "./components/PageTransition"
import CustomCursor from "./components/CustomCursor"
import AmbientBackground from "./components/AmbientBackground"

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <main className="relative z-10 w-full overflow-hidden">
              <Hero />
              <About />
              <Work />
              <Contact />
            </main>
          </PageTransition>
        } />
        <Route path="/projects" element={
          <PageTransition>
            <main className="relative z-10 w-full overflow-hidden">
              <ProjectsPage />
            </main>
          </PageTransition>
        } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-ivory font-sans text-charcoal relative">
        <Toaster
          position="top-right"
          containerStyle={{
            top: 40,
            left: 20,
            bottom: 20,
            right: 20,
            zIndex: 99999, // Ensure it sits fully on top of navbar
          }}
        />
        <AmbientBackground />
        <CustomCursor />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  )
}

export default App
