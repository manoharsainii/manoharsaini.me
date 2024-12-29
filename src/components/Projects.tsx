import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "Project One",
        description: "A full-stack web application built with React and Node.js",
        tech: ["React", "Node.js", "MongoDB"],
        image: "/api/placeholder/400/300"
    },
    {
        title: "Project Two",
        description: "Real-time chat application using WebSocket",
        tech: ["Socket.io", "Express", "Redis"],
        image: "/api/placeholder/400/300"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen py-20 px-4 bg-background">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center text-text-primary">Projects</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-background-highlight rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-200"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.3 }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-text-primary">{project.title}</h3>
                                <p className="text-text-secondary mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-primary/50 rounded-full text-sm text-text-primary"
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;