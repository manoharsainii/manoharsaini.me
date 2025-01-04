import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        About Me
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300">
            I'm a passionate Full Stack Developer with expertise in modern web technologies.
            I love creating elegant solutions to complex problems and am constantly learning
            new technologies to stay at the forefront of web development.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            When I'm not coding, you can find me exploring new technologies, contributing
            to open-source projects, or sharing my knowledge through technical writing.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Skills</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-gray-700 dark:text-gray-200">Frontend</h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>React</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Next.js</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 dark:text-gray-200">Backend</h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;