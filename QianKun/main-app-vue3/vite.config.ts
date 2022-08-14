import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "^/singleSpaTransformQiankun.*": {
        target: "http://localhost:3002/",
        changeOrigin: true,
      },
      "^/qiankunMicroApp.*": {
        target: "http://localhost:3002/",
        changeOrigin: true,
      },
    },
  },
});
