
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
   base: "./",
  resolve: {
   
  },
    build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    },
  },
   server: {
    host: true,
  },
});

