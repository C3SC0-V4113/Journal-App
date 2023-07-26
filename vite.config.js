/* eslint-disable no-undef */
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    define: {
      VITE_APIKEY: JSON.stringify(env.VITE_APIKEY),
      VITE_AUTHDOMAIN: JSON.stringify(env.VITE_AUTHDOMAIN),
      VITE_PROJECTID: JSON.stringify(env.VITE_PROJECTID),
      VITE_STORAGEBUCKET: JSON.stringify(env.VITE_STORAGEBUCKET),
      VITE_MESSAGINGSENDERID: JSON.stringify(env.VITE_MESSAGINGSENDERID),
      VITE_APPID: JSON.stringify(env.VITE_APPID),
    },
  };
});
