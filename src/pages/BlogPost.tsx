import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Brain, Shield, Database, Code, Zap, Tag } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  const blogPosts = {
    'rag-retrieval-augmented-generation': {
      title: 'Understanding RAG: Retrieval-Augmented Generation',
      excerpt: 'Explore how RAG combines information retrieval with text generation to create more accurate and contextually relevant AI responses.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
      category: 'AI/ML',
      readTime: '8 min read',
      publishDate: '2024-01-15',
      author: 'Aditya Raj',
      icon: Brain,
      tags: ['RAG', 'AI', 'NLP', 'Machine Learning'],
      content: `
        <h2>What is RAG?</h2>
        <p>Retrieval-Augmented Generation (RAG) is a powerful AI technique that combines the strengths of information retrieval and text generation. Unlike traditional language models that rely solely on their pre-trained knowledge, RAG systems can access and incorporate external information sources to provide more accurate and up-to-date responses.</p>
        
        <h3>How RAG Works</h3>
        <p>The RAG process typically involves three main steps:</p>
        <ol>
          <li><strong>Query Processing:</strong> The user's question is analyzed and converted into a search query.</li>
          <li><strong>Information Retrieval:</strong> Relevant documents or passages are retrieved from a knowledge base.</li>
          <li><strong>Response Generation:</strong> The retrieved information is combined with the original query to generate a comprehensive response.</li>
        </ol>
        
        <h3>Benefits of RAG</h3>
        <ul>
          <li>More accurate and factual responses</li>
          <li>Ability to access current information</li>
          <li>Reduced hallucination in AI responses</li>
          <li>Better source attribution</li>
        </ul>
        
        <h3>Implementation Example</h3>
        <p>Here's a basic example of how you might implement RAG using Python:</p>
        <pre><code>import openai
from langchain import OpenAI, VectorDBQA
from langchain.vectorstores import Chroma

# Initialize components
llm = OpenAI(temperature=0)
vectorstore = Chroma.from_documents(documents, embeddings)
qa_chain = VectorDBQA.from_chain_type(llm=llm, vectorstore=vectorstore)

# Query the system
response = qa_chain.run("What is the latest information about AI?")</code></pre>
        
        <h3>Best Practices</h3>
        <p>When implementing RAG systems, consider these best practices:</p>
        <ul>
          <li>Use high-quality, relevant knowledge bases</li>
          <li>Implement proper chunking strategies for documents</li>
          <li>Optimize retrieval algorithms for your use case</li>
          <li>Monitor and evaluate system performance regularly</li>
        </ul>
      `
    },
    'ai-ml-roadmap-2024': {
      title: 'Complete AI/ML Roadmap for 2024',
      excerpt: 'A comprehensive guide to learning AI and Machine Learning from beginner to advanced levels with practical projects and resources.',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&h=600&fit=crop',
      category: 'AI/ML',
      readTime: '12 min read',
      publishDate: '2024-01-10',
      author: 'Aditya Raj',
      icon: Zap,
      tags: ['AI Roadmap', 'Machine Learning', 'Career Guide', '2024'],
      content: `
        <h2>Your Journey to AI/ML Mastery</h2>
        <p>Embarking on a career in AI and Machine Learning can seem overwhelming, but with the right roadmap, you can systematically build your skills and knowledge.</p>
        
        <h3>Phase 1: Foundations (Months 1-3)</h3>
        <h4>Mathematics & Statistics</h4>
        <ul>
          <li>Linear Algebra: Vectors, matrices, eigenvalues</li>
          <li>Calculus: Derivatives, gradients, optimization</li>
          <li>Statistics: Probability, distributions, hypothesis testing</li>
        </ul>
        
        <h3>Phase 2: Core ML Concepts (Months 4-6)</h3>
        <h4>Machine Learning Fundamentals</h4>
        <ul>
          <li>Supervised vs Unsupervised Learning</li>
          <li>Classification and Regression</li>
          <li>Model evaluation metrics</li>
        </ul>
      `
    },
    'jwt-authentication-guide': {
      title: 'JWT Authentication: Complete Implementation Guide',
      excerpt: 'Learn how to implement secure JWT authentication in your applications with best practices and security considerations.',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&h=600&fit=crop',
      category: 'Backend',
      readTime: '10 min read',
      publishDate: '2024-01-08',
      author: 'Aditya Raj',
      icon: Shield,
      tags: ['JWT', 'Authentication', 'Security', 'Backend'],
      content: `
        <h2>Understanding JWT Authentication</h2>
        <p>JSON Web Tokens (JWT) have become the standard for implementing stateless authentication in modern web applications.</p>
        
        <h3>What is JWT?</h3>
        <p>A JWT consists of three parts separated by dots:</p>
        <ul>
          <li><strong>Header:</strong> Contains the token type and signing algorithm</li>
          <li><strong>Payload:</strong> Contains the claims (user data)</li>
          <li><strong>Signature:</strong> Verifies the token hasn't been tampered with</li>
        </ul>
        
        <h3>Implementation Example</h3>
        <pre><code>const jwt = require('jsonwebtoken');

// Generate token
const token = jwt.sign(
  { userId: user.id, email: user.email },
  process.env.JWT_SECRET,
  { expiresIn: '24h' }
);

// Verify token
jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
  if (err) {
    return res.status(403).json({ error: 'Invalid token' });
  }
  req.user = decoded;
  next();
});</code></pre>
      `
    },
    'sql-mastery-guide': {
      title: 'SQL Mastery: From Basics to Advanced Queries',
      excerpt: 'Master SQL with comprehensive examples, optimization techniques, and real-world scenarios for database management.',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1200&h=600&fit=crop',
      category: 'Database',
      readTime: '15 min read',
      publishDate: '2024-01-05',
      author: 'Aditya Raj',
      icon: Database,
      tags: ['SQL', 'Database', 'Queries', 'Optimization'],
      content: `
        <h2>Mastering SQL: A Comprehensive Guide</h2>
        <p>SQL (Structured Query Language) is the foundation of database management and data analysis.</p>
        
        <h3>Basic SELECT Queries</h3>
        <pre><code>-- Select all columns
SELECT * FROM users;

-- Select specific columns
SELECT id, name, email FROM users;

-- Filter with WHERE
SELECT * FROM users WHERE age > 18;</code></pre>
        
        <h3>Joins and Relationships</h3>
        <pre><code>-- INNER JOIN
SELECT u.name, p.title 
FROM users u
INNER JOIN posts p ON u.id = p.user_id;

-- LEFT JOIN
SELECT u.name, COUNT(p.id) as post_count
FROM users u
LEFT JOIN posts p ON u.id = p.user_id
GROUP BY u.id, u.name;</code></pre>
      `
    },
    'nodejs-best-practices': {
      title: 'Node.js Best Practices for Production Applications',
      excerpt: 'Discover essential Node.js patterns, performance optimization, and architectural best practices for scalable applications.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop',
      category: 'Backend',
      readTime: '11 min read',
      publishDate: '2024-01-03',
      author: 'Aditya Raj',
      icon: Code,
      tags: ['Node.js', 'Best Practices', 'Performance', 'Architecture'],
      content: `
        <h2>Node.js Production Best Practices</h2>
        <p>Building production-ready Node.js applications requires careful consideration of architecture, performance, security, and maintainability.</p>
        
        <h3>Project Structure</h3>
        <pre><code>project/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── services/
├── tests/
└── package.json</code></pre>
        
        <h3>Error Handling</h3>
        <pre><code>// Global error handler
app.use((error, req, res, next) => {
  console.error(error.stack);
  
  res.status(error.status || 500).json({
    error: {
      message: error.message || 'Internal Server Error'
    }
  });
});</code></pre>
        
        <h3>Security Best Practices</h3>
        <ul>
          <li>Use helmet for security headers</li>
          <li>Implement rate limiting</li>
          <li>Validate all inputs</li>
          <li>Use HTTPS in production</li>
        </ul>
      `
    }
  };

  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
              <post.icon size={16} className="mr-2" />
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            {post.excerpt}
          </p>
          
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
            <Calendar size={16} className="mr-1" />
            {formatDate(post.publishDate)}
            <span className="mx-2">•</span>
            <Clock size={16} className="mr-1" />
            {post.readTime}
            <span className="mx-2">•</span>
            <span>By {post.author}</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
              >
                <Tag size={14} className="mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
};

export default BlogPost; 