import { defineConfig } from "vite";
import viteSvgr from "vite-plugin-svgr";
import { fileURLToPath } from "url";
import https from "https";
import react from "@vitejs/plugin-react";

import path from "path";
import { dirname } from "path";

console.log({ VITE_ENV_TEST_IN_CONFIG: process.env.VITE_ENV_TEST });
console.log({ VITE_FOR_SHOPIFY_IN_CONFIG: process.env.VITE_FOR_SHOPIFY });

if (
  process.env.npm_lifecycle_event === "build" &&
  !process.env.CI &&
  !process.env.SHOPIFY_API_KEY
) {
  console.warn(
    "\nBuilding the frontend app without an API key. The frontend build will not run without an API key. Set the SHOPIFY_API_KEY environment variable when running the build command.\n"
  );
}

const proxyOptions = {
  target: `http://127.0.0.1:${process.env.BACKEND_PORT}`,
  changeOrigin: false,
  secure: true,
  ws: false,
};

const host = process.env.HOST
  ? process.env.HOST.replace(/https?:\/\//, "")
  : "localhost";

let hmrConfig;
if (host === "localhost") {
  hmrConfig = {
    protocol: "ws",
    host: "localhost",
    port: 64999,
    clientPort: 64999,
  };
} else {
  hmrConfig = {
    protocol: "wss",
    host: host,
    port: process.env.FRONTEND_PORT,
    clientPort: 443,
  };
}

export default defineConfig({
  root: dirname(fileURLToPath(import.meta.url)),
  plugins: [viteSvgr(), react()],
  define: {
    "process.env.SHOPIFY_API_KEY": JSON.stringify(process.env.SHOPIFY_API_KEY),
    "process.env.VITE_FOR_SHOPIFY": JSON.stringify(
      process.env.VITE_FOR_SHOPIFY
    ),
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    preserveSymlinks: true,
  },
  server: process?.env?.VITE_FOR_SHOPIFY && {
    host: "localhost",
    port: process.env.FRONTEND_PORT,
    hmr: hmrConfig,
    proxy: {
      "^/(\\?.*)?$": proxyOptions,
      "^/api(/|(\\?.*)?$)": proxyOptions,
    },
  },
});
