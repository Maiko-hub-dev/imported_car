import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "./",

  resolve: {
    alias: {
      "@sass": path.resolve(__dirname, "src/sass"),
      "@images": path.resolve(__dirname, "src/images"),
    },
  },

  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),

        // About
        about: path.resolve(__dirname, "about/index.html"),

        // Service
        service: path.resolve(__dirname, "service/index.html"),

        // Works
        works: path.resolve(__dirname, "works/index.html"),
        worksDetail: path.resolve(__dirname, "works/works_detail.html"),

        // News
        news: path.resolve(__dirname, "news/index.html"),
        newsDetail: path.resolve(__dirname, "news/news_detail.html"),

        // Contact
        contact: path.resolve(__dirname, "contact/index.html"),
        contactConfirm: path.resolve(
          __dirname,
          "contact/contact_confirm.html"
        ),
        contactThanks: path.resolve(
          __dirname,
          "contact/contact_thanks.html"
        ),

        // 404
        notFound: path.resolve(__dirname, "404.html"),
      },
    },
  },

  server: {
    host: true,
  },
});


