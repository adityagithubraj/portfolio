import React, { useRef } from 'react';
import { ExternalLink, Github, Hotel, CreditCard, Receipt, FolderKanban, MessageCircle, Code, Layout, Database, MessageSquare as ChatBubble, Bot as AI, Calendar, Globe, Brain, Cpu, BarChart3, Eye, Zap, Target, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const fullstackCarouselRef = useRef<HTMLDivElement>(null);
  const aiMlCarouselRef = useRef<HTMLDivElement>(null);

  const scrollAmount = 330;

  const handleScroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const fullstackProjects = [
    {
      title: 'Hotel Booking System',
      description: 'A comprehensive hotel management system with real-time booking, inventory management, and payment processing.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
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
      description: 'A scalable platform handling mobile recharges and utility bill payments with multiple service providers.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3',
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
      title: 'Mini-WhatsApp',
      description: 'A real-time messaging app with group chats, private messaging, and online presence indication.',
      image: 'https://adityagithubraj.github.io/images/chatapp.jpg',
      tech: ['ExpressJS', 'NodeJS', 'HTML', 'CSS', 'Socket.io'],
      demo: 'https://mini-wathsapp.onrender.com/',
      github: 'https://github.com/adityagithubraj/mini_Whatsapp',
      icon: ChatBubble,
      highlights: [
        'Real-time messaging',
        'Group & private chats',
        'Online presence indication'
      ]
    },
    {
      title: 'SALONLEX',
      description: 'Salon booking system with user registration, appointment booking, and admin management.',
      image: 'https://adityagithubraj.github.io/images/home.png',
      tech: ['MongoDB', 'ExpressJS', 'NodeJS', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'NPM', 'JWT'],
      demo: 'https://salonlex.netlify.app/',
      github: 'https://github.com/amar0705/nice-flesh-360',
      icon: Calendar,
      highlights: [
        'User registration & login',
        'JWT authentication',
        'Admin appointment management',
        'Online booking system'
      ]
    },
    {
      title: 'QR Code Chimp',
      description: 'A QR code website with authentication via Google & Facebook, JWT, and QR code scanning capabilities.',
      image: 'https://adityagithubraj.github.io/images/qrchim.png',
      tech: ['MongoDB', 'ExpressJS', 'NodeJS', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      demo: 'https://qr-code-chimp.netlify.app/index.html',
      github: 'https://github.com/adityagithubraj/-direful-order-8525',
      icon: Code,
      highlights: [
        'Google & Facebook authentication',
        'JWT-based authentication',
        'QR code scanning and generation',
        'Secure login & signup'
      ]
    },
    {
      title: 'Expedia.com Clone',
      description: 'A travel booking website with login, signup, customer support, and search for flights, hotels, and rental cars.',
      image: 'https://adityagithubraj.github.io/images/expediya.jpg',
      tech: ['HTML', 'CSS', 'JavaScript'],
      demo: 'https://shimmering-stroopwafel-bf250f.netlify.app/index.html',
      github: 'https://github.com/Kuldeepsingh921/Expedia-Clone',
      icon: Globe,
      highlights: [
        'User authentication',
        'Customer support system',
        'Travel search & booking',
        'Responsive design'
      ]
    }
  ];

  const aiMlProjects = [
    {
      title: 'ProChat - AI Chatbot',
      description: 'An AI-powered chat application using OpenAI API for seamless and intelligent conversations.',
      image: 'https://adityagithubraj.github.io/images/pro.png',
      tech: ['OpenAI API', 'NodeJS', 'ExpressJS', 'JavaScript', 'HTML', 'CSS'],
      demo: 'https://prochat-with-openai.netlify.app/',
      github: 'https://github.com/adityagithubraj/prochat_Integrated_openai',
      icon: AI,
      highlights: [
        'OpenAI-powered chatbot',
        'Conversational AI',
        'Real-time responses',
        'User-friendly interface'
      ]
    },
    {
      title: 'Sentiment Analysis Engine',
      description: 'A machine learning model that analyzes text sentiment for social media monitoring and customer feedback.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      tech: ['Python', 'TensorFlow', 'NLTK', 'Flask', 'React'],
      demo: 'https://sentiment-analysis-demo.example.com',
      github: 'https://github.com/example/sentiment-analysis',
      icon: Brain,
      highlights: [
        'Real-time sentiment analysis',
        'Multi-language support',
        'API integration',
        'Dashboard visualization'
      ]
    },
    {
      title: 'Image Recognition System',
      description: 'Deep learning model for object detection and image classification with high accuracy.',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb',
      tech: ['Python', 'PyTorch', 'OpenCV', 'FastAPI', 'Docker'],
      demo: 'https://image-recognition-demo.example.com',
      github: 'https://github.com/example/image-recognition',
      icon: Eye,
      highlights: [
        'Object detection',
        'Image classification',
        'Real-time processing',
        'RESTful API'
      ]
    },
    {
      title: 'Predictive Analytics Dashboard',
      description: 'Business intelligence tool using machine learning for sales forecasting and trend analysis.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Plotly', 'Streamlit'],
      demo: 'https://predictive-analytics-demo.example.com',
      github: 'https://github.com/example/predictive-analytics',
      icon: BarChart3,
      highlights: [
        'Sales forecasting',
        'Trend analysis',
        'Interactive dashboards',
        'Data visualization'
      ]
    },
    {
      title: 'Recommendation Engine',
      description: 'Collaborative filtering system for personalized product recommendations and content suggestions.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
      tech: ['Python', 'Surprise', 'Pandas', 'Flask', 'Redis'],
      demo: 'https://recommendation-engine-demo.example.com',
      github: 'https://github.com/example/recommendation-engine',
      icon: Target,
      highlights: [
        'Collaborative filtering',
        'Personalized recommendations',
        'Real-time updates',
        'Scalable architecture'
      ]
    },
    {
      title: 'Natural Language Processor',
      description: 'Advanced NLP system for text processing, entity recognition, and language understanding.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
      tech: ['Python', 'SpaCy', 'Transformers', 'FastAPI', 'PostgreSQL'],
      demo: 'https://nlp-processor-demo.example.com',
      github: 'https://github.com/example/nlp-processor',
      icon: Cpu,
      highlights: [
        'Named entity recognition',
        'Text classification',
        'Language detection',
        'API endpoints'
      ]
    }
  ];

  const ProjectCard = ({ project, index }: { project: any, index: number }) => (
    <div className="min-w-[320px] max-w-[320px] bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 mx-3">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
          className="w-full h-40 object-cover"
                />
        <div className="absolute top-3 right-3 bg-blue-600 p-1.5 rounded-full text-white">
          <project.icon size={20} />
                </div>
              </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm leading-relaxed">
                  {project.description}
                </p>
        <div className="mb-3">
          <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-1">Key Features:</h4>
          <ul className="list-disc list-inside space-y-0.5 text-gray-600 dark:text-gray-300 text-xs">
            {project.highlights.map((highlight: string, idx: number) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
        <div className="flex flex-wrap gap-1 mb-3">
          {project.tech.map((tech: string, techIndex: number) => (
                    <span
                      key={techIndex}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
        <div className="flex space-x-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
            className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm"
                  >
            <ExternalLink size={16} className="mr-1" />
            Live Demo
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 text-sm"
                    >
              <Github size={16} className="mr-1" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
  );

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-16 text-center">Projects</h2>
        
        {/* Full Stack Projects Section */}
        <div id="full-stack-projects" className="mb-20">
          <div className="flex items-center justify-center mb-8">
            <Layout className="text-blue-600 dark:text-blue-400 mr-3" size={32} />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Full Stack Development Projects
            </h3>
          </div>
          <div 
            className="relative"
          >
            <div 
              ref={fullstackCarouselRef}
              className="flex overflow-x-auto scrollbar-hide scroll-smooth"
            >
              {fullstackProjects.map((project, index) => (
                <ProjectCard key={`${project.title}-${index}`} project={project} index={index} />
              ))}
            </div>
            <button
              onClick={() => handleScroll(fullstackCarouselRef, 'left')}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 p-2 rounded-full shadow-md z-10"
              aria-label="Previous Project"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => handleScroll(fullstackCarouselRef, 'right')}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 p-2 rounded-full shadow-md z-10"
              aria-label="Next Project"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* AI/ML Projects Section */}
        <div id="ai-ml-projects" className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <Brain className="text-blue-600 dark:text-blue-400 mr-3" size={32} />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Artificial Intelligence & Machine Learning Projects
            </h3>
          </div>
          <div 
            className="relative"
          >
            <div 
              ref={aiMlCarouselRef}
              className="flex overflow-x-auto scrollbar-hide scroll-smooth"
            >
              {aiMlProjects.map((project, index) => (
                <ProjectCard key={`${project.title}-${index}`} project={project} index={index} />
              ))}
            </div>
            <button
              onClick={() => handleScroll(aiMlCarouselRef, 'left')}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 p-2 rounded-full shadow-md z-10"
              aria-label="Previous Project"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => handleScroll(aiMlCarouselRef, 'right')}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 p-2 rounded-full shadow-md z-10"
              aria-label="Next Project"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;