import React from 'react';

const Blog = () => {
  const posts = [
    {
      title: 'Building Scalable React Applications',
      excerpt: 'Learn best practices for building large-scale React applications with proper architecture and state management.',
      date: '2024-03-15',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
    },
    {
      title: 'Modern Backend Development with Node.js',
      excerpt: 'Explore advanced patterns and practices for building robust backend services using Node.js and Express.',
      date: '2024-03-10',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479',
    },
    {
      title: 'DevOps Best Practices',
      excerpt: 'A comprehensive guide to implementing DevOps practices in your development workflow.',
      date: '2024-03-05',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <time>{post.date}</time>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;