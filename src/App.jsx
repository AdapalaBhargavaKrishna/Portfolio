import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./layout/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Project from "./pages/Projects"
import Projects from "./components/Projects"
import Contact from "./pages/Contact"
import Background from "./layout/Background"

function App() {
  return (
    <Router>
      <Background />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <About />
            <Project />
            <Contact />
          </>
        } />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  )
}

export default App
