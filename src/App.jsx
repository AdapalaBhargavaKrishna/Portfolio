import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { Toaster } from 'react-hot-toast'
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
            <main className="relative z-10">
              <Hero />
              <About />
              <Work />
              <Contact />
            </main>
          </PageTransition>
        } />
        <Route path="/projects" element={
          <PageTransition>
            <main className="relative z-10">
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
  return (
    <Router>
      <div className="min-h-screen bg-ivory font-sans text-charcoal relative overflow-x-hidden">
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
