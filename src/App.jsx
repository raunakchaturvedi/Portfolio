import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Background from "./components/Background";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
// import TechMarquee from "./components/TechMarquee";

function App() {
  return (
    <div className="bg-[#050816] text-white min-h-screen">
      <Background />

      <Navbar />

      <Hero />

      <About />
      
      {/* <TechMarquee/> */}

      <Stats/>

      <Skills/>

      <Projects />

      <Contact />

      <Footer/>
    </div>
  );
}

export default App;