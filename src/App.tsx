import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className="min-h-screen bg-background text-white">
            <Navbar />
            <Hero />
            <Projects />
            <About />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;