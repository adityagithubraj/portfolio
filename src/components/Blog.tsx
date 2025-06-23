import React, { useRef, useEffect } from 'react';
import { Calendar, Clock, ArrowRight, Brain, Shield, Database, Code, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);

  const blogPosts = [
    {
      id: 'rag-retrieval-augmented-generation',
      title: 'Understanding RAG: Retrieval-Augmented Generation',
      excerpt: 'Explore how RAG combines information retrieval with text generation to create more accurate and contextually relevant AI responses.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
      category: 'AI/ML',
      readTime: '8 min read',
      publishDate: '2024-01-15',
      icon: Brain,
      tags: ['RAG', 'AI', 'NLP', 'Machine Learning']
    },
    {
      id: 'ai-ml-roadmap-2024',
      title: 'Complete AI/ML Roadmap for 2024',
      excerpt: 'A comprehensive guide to learning AI and Machine Learning from beginner to advanced levels with practical projects and resources.',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=400&fit=crop',
      category: 'AI/ML',
      readTime: '12 min read',
      publishDate: '2024-01-10',
      icon: Zap,
      tags: ['AI Roadmap', 'Machine Learning', 'Career Guide', '2024']
    },
    {
      id: 'jwt-authentication-guide',
      title: 'JWT Authentication: Complete Implementation Guide',
      excerpt: 'Learn how to implement secure JWT authentication in your applications with best practices and security considerations.',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=400&fit=crop',
      category: 'Backend',
      readTime: '10 min read',
      publishDate: '2024-01-08',
      icon: Shield,
      tags: ['JWT', 'Authentication', 'Security', 'Backend']
    },
    {
      id: 'sql-mastery-guide',
      title: 'SQL Mastery: From Basics to Advanced Queries',
      excerpt: 'Master SQL with comprehensive examples, optimization techniques, and real-world scenarios for database management.',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=400&fit=crop',
      category: 'Database',
      readTime: '15 min read',
      publishDate: '2024-01-05',
      icon: Database,
      tags: ['SQL', 'Database', 'Queries', 'Optimization']
    },
    {
      id: 'nodejs-best-practices',
      title: 'Node.js Best Practices for Production Applications',
      excerpt: 'Discover essential Node.js patterns, performance optimization, and architectural best practices for scalable applications.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
      category: 'Backend',
      readTime: '11 min read',
      publishDate: '2024-01-03',
      icon: Code,
      tags: ['Node.js', 'Best Practices', 'Performance', 'Architecture']
    }
  ];

  const scrollAmount = 400;

  const handleScroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const startAutoScroll = () => {
    stopAutoScroll();
    intervalRef.current = window.setInterval(() => {
      handleScroll('right');
    }, 4000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">Blog Posts</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Insights, tutorials, and guides on modern web development, AI/ML, and software engineering
          </p>
        </div>

        {/* Blog Carousel */}
        <div 
          className="relative"
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
        >
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto scrollbar-hide scroll-smooth gap-6 pb-4"
          >
            {blogPosts.map((post) => (
              <article key={post.id} className="min-w-[350px] max-w-[350px] bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                      <post.icon size={14} className="mr-1" />
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <Calendar size={14} className="mr-1" />
                    {formatDate(post.publishDate)}
                    <span className="mx-2">•</span>
                    <Clock size={14} className="mr-1" />
                    {post.readTime}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => handleScroll('left')}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 p-3 rounded-full shadow-lg z-10 transition-all duration-200 hover:scale-110"
            aria-label="Previous Blog Post"
          >
            <ChevronLeft size={24} className="text-gray-600 dark:text-gray-300" />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 p-3 rounded-full shadow-lg z-10 transition-all duration-200 hover:scale-110"
            aria-label="Next Blog Post"
          >
            <ChevronRight size={24} className="text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            View All Posts
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;