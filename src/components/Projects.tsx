import React, { useState } from 'react';
import { ExternalLink, Github, Hotel, CreditCard, Receipt, FolderKanban, MessageCircle, Code, Layout, Database } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('professional');

  const professionalProjects = [
    {
      title: 'Hotel Booking System',
      description: 'A comprehensive hotel management system with real-time booking, inventory management, and payment processing. Features include room availability tracking, dynamic pricing, and automated confirmation systems.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
      category: 'backend',
      tech: ['Node.js', 'PostgreSQL', 'Redis', 'RabbitMQ'],
      demo: 'https://hotel-booking-presentation.example.com',
      icon: Hotel,
      highlights: [
        'Real-time inventory management',
        'Payment gateway integration',
        'Automated email notifications',
        'Analytics dashboard'
      ]
    },
    {
      title: 'Recharge & Bill Payment Platform',
      description: 'A scalable platform handling mobile recharges and utility bill payments. Integrated with multiple service providers and payment gateways with real-time transaction processing.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3',
      category: 'backend',
      tech: ['Node.js', 'MongoDB', 'Redis', 'Payment APIs'],
      demo: 'https://recharge-platform-presentation.example.com',
      icon: CreditCard,
      highlights: [
        'Multi-provider integration',
        'Transaction reconciliation',
        'Automated refund handling',
        'Real-time status updates'
      ]
    },
    {
      title: 'Law Firm Document Management',
      description: 'Digital document management system for law firms with advanced search, categorization, and access control. Features include document versioning and audit trails.',
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d',
      category: 'fullstack',
      tech: ['Express.js', 'PostgreSQL', 'AWS S3', 'ElasticSearch'],
      demo: 'https://legal-dms-presentation.example.com',
      icon: FolderKanban,
      highlights: [
        'Advanced document search',
        'Role-based access control',
        'Version control system',
        'Audit logging'
      ]
    },
    {
      title: 'Bulk Communication System',
      description: 'Enterprise-grade communication platform for sending bulk SMS, WhatsApp messages, and emails. Includes campaign management, analytics, and delivery tracking.',
      image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa',
      category: 'backend',
      tech: ['Node.js', 'Redis', 'MongoDB', 'Message Queue'],
      demo: 'https://bulk-messaging-presentation.example.com',
      icon: MessageCircle,
      highlights: [
        'Multi-channel messaging',
        'Campaign scheduling',
        'Delivery analytics',
        'Template management'
      ]
    },
    {
      title: 'Bill Payment Gateway',
      description: 'Secure payment processing system for utility bills with support for multiple payment methods and real-time transaction validation.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f',
      category: 'backend',
      tech: ['Node.js', 'PostgreSQL', 'Redis', 'Payment APIs'],
      demo: 'https://bill-payment-presentation.example.com',
      icon: Receipt,
      highlights: [
        'Multi-provider integration',
        'Real-time validation',
        'Transaction history',
        'Payment reconciliation'
      ]
    }
  ];

  const personalProjects = [
    {
      title: 'Personal Blog Platform',
      description: 'A modern blog platform built with React and Node.js, featuring a rich text editor and dynamic content management.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643',
      category: 'fullstack',
      tech: ['React', 'Node.js', 'MongoDB', 'AWS'],
      demo: 'https://demo.com',
      github: 'https://github.com',
      icon: Code,
      highlights: [
        'Rich text editing',
        'Image optimization',
        'SEO optimization',
        'Comment system'
      ]
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills, built with modern web technologies.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      category: 'frontend',
      tech: ['React', 'TypeScript', 'TailwindCSS'],
      demo: 'https://demo.com',
      github: 'https://github.com',
      icon: Layout,
      highlights: [
        'Responsive design',
        'Dark mode',
        'Smooth animations',
        'Performance optimized'
      ]
    },
    {
      title: 'Task Management API',
      description: 'RESTful API for task management with authentication, authorization, and real-time updates.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b',
      category: 'backend',
      tech: ['Node.js', 'Express', 'PostgreSQL', 'Socket.io'],
      demo: 'https://demo.com',
      github: 'https://github.com',
      icon: Database,
      highlights: [
        'JWT authentication',
        'Real-time updates',
        'Rate limiting',
        'API documentation'
      ]
    }
  ];

  const getProjects = () => {
    if (filter === 'professional') {
      return professionalProjects;
    }
    if (filter === 'personal') {
      return personalProjects;
    }
    const allProjects = [...professionalProjects, ...personalProjects];
    return filter === 'all' ? allProjects : allProjects.filter(project => project.category === filter);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Projects</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex space-x-2 bg-white dark:bg-gray-700 p-1 rounded-lg">
            <button
              onClick={() => setFilter('professional')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'professional'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              Professional
            </button>
            <button
              onClick={() => setFilter('personal')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'personal'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              Personal
            </button>
          </div>

          <div className="flex space-x-2 bg-white dark:bg-gray-700 p-1 rounded-lg">
            {['all', 'frontend', 'backend', 'fullstack'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  filter === category
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getProjects().map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 p-2 rounded-full text-white">
                  <project.icon size={24} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    <ExternalLink size={20} className="mr-1" />
                    {filter === 'professional' ? 'View Presentation' : 'Live Demo'}
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200"
                    >
                      <Github size={20} className="mr-1" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;