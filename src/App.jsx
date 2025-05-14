import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Background from "./components/Background"
import Footer from "./components/Footer"

function App() {

  return (
    <>
    <main className="relative min-h-screen w-full overflow-x-hidden">
    <Background />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
    </>
  )
}

export default App