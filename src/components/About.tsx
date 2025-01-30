import React from 'react';
import { Download } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: 'Sep 2024 - Present - Present',
      title: 'Software Engineer',
      company: 'Vista Neotech Private Limited',
      description: 'Working on full-stack development projects and building scalable applications',
    },
    {
      year: 'Feb 2024 - Sep 2024 - 8 mos',
      title: 'Back End Developer',
      company: 'OCPL Tech (Opulentia Cresco Private Limited)',
      description: 'Developed backend services and APIs for web applications using Node.js and Express',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Hi, I'm Aditya Raj <span className="text-blue-600 dark:text-blue-400"></span>. With expertise in Node.js, AWS, MongoDB, Express, React.js, and SQL, I have a strong foundation in both frontend and backend development. Currently, I am a Software Engineer at Vista Neotech Private Limited. I have completed my Full Stack Web Development Program at Masai and hold a BSC in Computer Science from Lalit Narayan Mithila University, Darbhanga. Based in Delhi, India, I am passionate about building scalable applications and continuously learning new technologies.
            </p>
         
            <div className="mt-8">
              <a
                href="/resume.pdf"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download size={20} className="mr-2" />
                Download CV
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Professional Journey</h3>
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-8 pb-8 border-l-2 border-blue-600 dark:border-blue-400">
              <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-[9px] top-0" />
              <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-1">{item.year}</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</div>
              <div className="text-gray-600 dark:text-gray-300">{item.company}</div>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;