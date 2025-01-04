import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
        Hi, I'm Your Name
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
        Full Stack Developer | Designer | Creator
      </p>
      <div className="flex space-x-4">
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300"
        >
          Get in Touch
        </a>
        <a
          href="#projects"
          className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-6 py-3 rounded-lg transition duration-300"
        >
          View Projects
        </a>
      </div>
    </div>
  );
};

export default Home; 