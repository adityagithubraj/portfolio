import React from 'react';
import { Github, Linkedin, Twitter, Mail, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <h3 className="text-xl font-bold mb-4">Portfolio</h3>
            <p className="text-gray-400 mb-4">
              Crafting innovative web solutions with passion and expertise in modern technologies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">About</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white">Projects</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Delhi India</li>
              <li className="text-gray-400">adityaraj9843@gmail.com</li>
              <li className="text-gray-400">+91 6295750823</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Podcast & YouTube</h3>
            <a
              href="https://www.youtube.com/@Adityaraj-vz7qo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white block mb-4 flex items-center"
            >
              <Youtube size={20} className="mr-2" />
              Subscribe to My Channel
            </a>
            <div className="aspect-w-16 aspect-h-9 w-full bg-gray-800 rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="215"
                src="https://www.youtube.com/embed?listType=user_uploads&list=Adityaraj-vz7qo"
                title="Latest YouTube Videos"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; Made with ❤️ by Aditya {new Date().getFullYear()} </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;