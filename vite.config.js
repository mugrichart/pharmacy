import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist' // Ensure this is set to 'dist' or your desired output directory
    },
    server: {
        port: 3000
    }
});
