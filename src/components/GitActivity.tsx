import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Github } from 'lucide-react';

export default function GitActivity() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">GitHub Activity</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center">
            <Github className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">1.2k+</h3>
            <p className="text-gray-600 dark:text-gray-300">Contributions</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">86</h3>
            <p className="text-gray-600 dark:text-gray-300">Repositories</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">27+</h3>
            <p className="text-gray-600 dark:text-gray-300">Stars</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">77</h3>
            <p className="text-gray-600 dark:text-gray-300">Followers</p>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Contribution Graph</h3>
          <img
            src="https://ghchart.rshah.org/adityagithubraj"
            alt="GitHub Contribution Graph"
            className="w-full"
          />
        </div>

        {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Top Repositories</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Project Name</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Description of the project</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600 dark:text-gray-300">★ 50</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-2 h-2 mt-2 bg-blue-600 rounded-full"></div>
                  <div>
                    <p className="text-gray-900 dark:text-white">Committed to repository-name</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">2 days ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}