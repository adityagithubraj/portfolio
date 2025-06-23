import React from 'react';

// A card for a category of skills
const SkillCategoryCard = ({ title, skills }: { title: string; skills: { name: string; iconUrl: string }[] }) => (
  <div className="bg-white dark:bg-gray-800/50 p-6 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">{title}</h3>
    <div className="flex flex-wrap justify-center gap-6">
      {skills.map(skill => <SkillIcon key={skill.name} {...skill} />)}
    </div>
  </div>
);

// The individual skill icon + name (transparent background)
const SkillIcon = ({ iconUrl, name }: { iconUrl: string, name: string }) => (
  <div className="flex flex-col items-center justify-center text-center p-2 transition-transform duration-300 hover:scale-110">
    <img src={iconUrl} alt={`${name} icon`} className="w-12 h-12 object-contain" />
    <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">{name}</p>
  </div>
);

const Skills = () => {
  const skills = {
    frontend: [
      { name: 'React', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'TypeScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'HTML5', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'TailwindCSS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg' },
    ],
    backend: [
      { name: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Python', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Express.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'Nest.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg' },
      { name: 'MongoDB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'PostgreSQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'SQL', iconUrl: 'https://www.svgrepo.com/show/303229/sql-database-sql-logo.svg' },
      { name: 'Redis', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
      { name: 'Pinecone', iconUrl: 'https://www.vectorlogo.zone/logos/pinecone/pinecone-icon.svg' },
    ],
    devops: [
      { name: 'Docker', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'AWS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
      { name: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    ],
    tools: [
      { name: 'VS Code', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Cursor', iconUrl: 'https://cursor.sh/brand/logo.svg' },
      { name: 'Postman', iconUrl: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
      { name: 'Figma', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    ],
  };

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-16 text-center">
          My Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">Skillset</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SkillCategoryCard title="Frontend Development" skills={skills.frontend} />
            <SkillCategoryCard title="Backend Development" skills={skills.backend} />
            <SkillCategoryCard title="DevOps & Infrastructure" skills={skills.devops} />
            <SkillCategoryCard title="Development Tools" skills={skills.tools} />
        </div>
      </div>
    </section>
  );
};

export default Skills;