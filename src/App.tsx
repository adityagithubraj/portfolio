import React, { useState } from 'react';
import { Menu, X, Moon, Sun, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import GitActivity from './components/GitActivity';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Protect from './components/Protect';
//import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
// import Achievements from './components/Achievements';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navbar 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        <main>
          <Hero />
          <About />
          <Projects />
          <GitActivity />
          <Skills />
          <Protect />
          {/* //<Blog /> */}
          <Testimonials />
          {/* <Achievements /> */}
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;