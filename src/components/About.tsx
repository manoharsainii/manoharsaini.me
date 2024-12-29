import React from 'react';
import { GitHub, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="min-h-screen py-20 px-4 bg-background">
            <div className="max-w-3xl mx-auto text-center">
                <motion.h2
                    className="text-4xl font-bold mb-8 text-text-primary"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    About Me
                </motion.h2>
                <motion.p
                    className="text-text-secondary mb-8"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    I'm a passionate full-stack developer with expertise in modern web technologies.
                    I love building innovative digital experiences and solving complex problems
                    through clean, efficient code.
                </motion.p>
                <motion.div
                    className="flex justify-center space-x-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <a href="#" className="text-text-secondary hover:text-text-primary">
                        <GitHub size={24} />
                    </a>
                    <a href="#" className="text-text-secondary hover:text-text-primary">
                        <Twitter size={24} />
                    </a>
                    <a href="#" className="text-text-secondary hover:text-text-primary">
                        <Linkedin size={24} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default About;