import React from 'react';
import { Shield, Lock, Key } from 'lucide-react';

const Protect = () => {
  return (
    <section id="protect" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Data Protection & Security</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <Shield className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Data Privacy
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              All client data is handled with strict confidentiality and in compliance with GDPR and other privacy regulations.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <Lock className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Secure Development
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Following industry best practices for secure coding and regular security audits of all projects.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <Key className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Access Control
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Implementing robust authentication and authorization systems to ensure data access security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Protect;