import React, { useState } from 'react';
import { Menu, X, Moon, Sun, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import GitActivity from './components/GitActivity';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Protect from './components/Protect';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BlogPost from './pages/BlogPost';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
        <div className="bg-white dark:bg-gray-900 transition-colors duration-200">
          <Navbar 
            darkMode={darkMode} 
            toggleDarkMode={toggleDarkMode}
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Projects />
                <GitActivity />
                <Skills />
                <Protect />
                <Blog />
                <Testimonials />
                <Contact />
              </>
            } />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;