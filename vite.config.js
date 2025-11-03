import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
    plugins: [
        laravel({
            input: "resources/js/app.jsx",
            refresh: true,
        }),
        react({
            babel: {
                plugins: [
                    "babel-plugin-macros",
                    [
                        "babel-plugin-twin",
                        {
                            preset: "styled-components",
                        },
                    ],
                ],
            },
        }),
        svgr({
            include: "**/*.svg",
            exclude: ["**/Images/email-illustration.svg"],
            svgrOptions: {
                icon: false,
            },
        }),
    ],
    optimizeDeps: {
        esbuildOptions: {
            loader: {
                ".js": "jsx",
            },
        },
    },
    define: {
        process,
    },
    build: {
        chunkSizeWarningLimit: 5000,
    },
});
