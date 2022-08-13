import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import packageInfo from "./package.json";

export default ({ mode }: { mode: string }) => {
  return defineConfig({
    base:
      mode === "production"
        ? `https://bolawen.github.io/MicroFrontEnd/QianKun/${packageInfo.name}/`
        : "/",
    plugins: [react()],
    server: {
      port: "8082",
    },
    build: {
      assetsDir: "",
      outDir: "output",
      cssCodeSplit: false,
      target: "es2015",
      rollupOptions: {
        input: "src/main.tsx",
        preserveEntrySignatures: "strict",
        output: {
          name: `${packageInfo.name}`,
          format: "umd",
          entryFileNames: `${packageInfo.name}.[format].[hash].js`,
        },
      },
    },
  });
};
