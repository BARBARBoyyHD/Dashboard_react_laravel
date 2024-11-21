import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react'; // Include the react plugin

export default defineConfig({
    plugins: [
        react(), // Add the react plugin here
        laravel({
            input: 'resources/js/app.jsx', // Your React entry point
            refresh: true, // Enable hot refresh for development
        }),
    ],
});
