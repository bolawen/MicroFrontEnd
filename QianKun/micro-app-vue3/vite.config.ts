import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import packageInfo from "./package.json";
import { visualizer } from "rollup-plugin-visualizer";

export default ({ mode }: { mode: string }) => {
  return defineConfig({
    base:
      mode === "production"
        ? `https://bolawen.github.io/MicroFrontEnd/QianKun/${packageInfo.name}/`
        : "/",
    plugins: [vue()],
    server: {
      port: "8081",
    },
    build: {
      assetsDir: "",
      outDir: "output",
      cssCodeSplit: false,
      target: "es2015",
      rollupOptions: {
        input: "src/main.ts",
        preserveEntrySignatures: "strict",
        plugins: [visualizer({ open: false })],
        output: {
          name: `${packageInfo.name}`,
          format: "umd",
          entryFileNames: `${packageInfo.name}.[format].[hash].js`,
        },
      },
    },
  });
};
