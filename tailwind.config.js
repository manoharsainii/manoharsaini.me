// tailwind.config.js
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#3B82F6',
                    hover: '#60A5FA',
                },
                secondary: '#6366F1',
                background: {
                    DEFAULT: '#000000',
                    gradientStart: '#1a1a2e',
                    gradientEnd: '#16213e',
                    highlight: '#111827',
                },
                text: {
                    primary: '#FFFFFF',
                    secondary: '#D1D5DB',
                    muted: '#6B7280',
                },
                border: '#1F2937',
            },
        },
    },
    plugins: [],
};