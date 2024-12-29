import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen py-20 px-4 bg-background">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center text-text-primary">Get In Touch</h2>
                <form
                    className="space-y-6"
                    action="https://formspree.io/f/your-form-id"
                    method="POST"
                >
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-text-secondary">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-4 py-2 bg-background-highlight rounded-lg focus:ring-2 focus:ring-primary outline-none text-text-primary"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-text-secondary">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-2 bg-background-highlight rounded-lg focus:ring-2 focus:ring-primary outline-none text-text-primary"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2 text-text-secondary">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="w-full px-4 py-2 bg-background-highlight rounded-lg focus:ring-2 focus:ring-primary outline-none text-text-primary"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-6 py-3 bg-primary rounded-lg hover:bg-primary-hover transition-colors duration-200 text-text-primary"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;