import React from 'react';
import { Code2, FileJson, Palette, Layout, Server, Database, Cpu, Box, Container, Cloud, GitBranch, Github as Git, Terminal, Send, Figma as FigmaIcon, TestTube } from 'lucide-react';
// Import skill icons
import { Github as GitIcon } from '@primer/octicons-react';
import reactIcon from '../assets/skills/react.png';
import typescriptIcon from '../assets/skills/typescript.png';
import tailwindIcon from '../assets/skills/tailwind.png';
import htmlcssIcon from '../assets/skills/htmlcss.png';
import nodeIcon from '../assets/skills/nodejs.png';
import expressIcon from '../assets/skills/express.png';
import postgresqlIcon from '../assets/skills/postgresql.png';
import redisIcon from '../assets/skills/redis.png';
import dockerIcon from '../assets/skills/docker.png';
import awsIcon from '../assets/skills/aws.png';
import cicdIcon from '../assets/skills/cicd.png';
import gitIcon from '../assets/skills/git.png';
import vscodeIcon from '../assets/skills/vscode.png';
import postmanIcon from '../assets/skills/postman.png';
import figmaIcon from '../assets/skills/figma.png';
import jestIcon from '../assets/skills/jest.png';

const Skills = () => {
  const skills = [
    {
      category: 'Frontend',
      items: [
        { name: 'React', icon: Code2 },
        { name: 'TypeScript', icon: FileJson },
      
        { name: 'HTML/CSS', icon: Layout }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', icon: Server },
        { name: 'Express.js', icon: Box },
        {name: 'Nest.js', icon: Server},
        {name: 'MongoDB', icon: Server},
        {name: 'Mongoose', icon: Server},
        {name: 'GraphQL', icon: Server},
        {name: 'Hasura', icon: Server},
        {name: 'Socket.io', icon: Server},
        {name: 'WebRTC', icon: Server},
        {name: 'Microservices', icon: Server},
        { name: 'PostgreSQL', icon: Database },
        { name: 'Redis', icon: Cpu }
      ]
    },
    {
      category: 'DevOps',
      items: [
        { name: 'Docker', icon: Container },
        { name: 'AWS', icon: Cloud },
        { name: 'CI/CD', icon: GitBranch },
        { name: 'Git', icon: Git }
      ]
    },
    {
      category: 'Tools',
      items: [
        { name: 'VS Code', icon: Terminal },
        { name: 'Postman', icon: Send },
    
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {skillGroup.category}
              </h3>
              <ul className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <skill.icon className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;