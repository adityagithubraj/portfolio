import React from 'react';
import { Award, AlignCenterVertical as Certificate, Trophy } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Certificate,
      title: 'AWS Certified Solutions Architect',
      organization: 'Amazon Web Services',
      date: '2024',
      description: 'Professional certification for designing distributed systems on AWS',
    },

  ];

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <achievement.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {achievement.title}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2">
                {achievement.organization}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {achievement.date}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;