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
        // "process.env.NODE_ENV": JSON.stringify(
        //     process.env.NODE_ENV || "development"
        // ),
        // "process.env.BABEL_ENV": JSON.stringify(
        //     process.env.BABEL_ENV || "development"
        // ),
        "process.versions.node": JSON.stringify("22.16.0"),
        "process.versions": JSON.stringify("test"),
        "process.platform": JSON.stringify(process.platform),
    },
    build: {
        chunkSizeWarningLimit: 5000,
    },
});
