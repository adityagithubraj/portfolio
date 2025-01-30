import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 lg:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Backend Developer
              <span className="block text-blue-600 dark:text-blue-400">Problem Solver & Tech Enthusiast</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Passionate about creating elegant solutions to complex problems. 
              Specializing in modern web technologies and scalable architecture.
            </p>
            <div className="flex space-x-4">
              <a href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Get in Touch
              </a>
              <a href="#projects" className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-600 dark:hover:border-blue-400 transition-colors">
                View Projects
              </a>
            </div>
            <div className="flex space-x-6 mt-8">
              <a href="https://github.com/adityagithubraj" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/aditya-raj-ba4a74236/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Linkedin size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Twitter size={24} />
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <img
              src="https://avatars.githubusercontent.com/u/112710746?s=400&u=dad522b272966e689d1d868075606277eea122b4&v=4"
              alt="Professional headshot"
              className="rounded-full w-64 h-64 object-cover mx-auto shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;