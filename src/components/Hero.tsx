import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative bg-background">
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-background-gradientStart via-background-gradientEnd to-background"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            />
            <div className="z-10 text-center px-4">
                <motion.h1
                    className="text-6xl font-bold tracking-wider mb-4 text-text-primary"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    YOUR NAME
                </motion.h1>
                <motion.p
                    className="text-xl text-text-secondary mb-8"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    Full Stack Developer
                </motion.p>
                <motion.a
                    href="#projects"
                    className="px-6 py-3 bg-primary rounded-lg hover:bg-primary-hover transition-colors duration-200"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    View My Work
                </motion.a>
            </div>
        </section>
    );
};

export default Hero;