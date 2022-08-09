import { defineConfig } from "vite";
import packageInfo from "./package.json";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default ({ mode }) => {
  return defineConfig({
    plugins: [reactRefresh()],
    base:
      mode === "production"
        ? `https://bolawen.github.io/MicroFrontEnd/Single-Spa-BySystem/${packageInfo.name}/`
        : "/",
    server: {
      port: 8082,
    },
    build: {
      assetsDir: "",
      outDir: "output",
      cssCodeSplit: false,
      rollupOptions: {
        input: "src/single-spa-config.ts",
        preserveEntrySignatures: "exports-only",
        external: [
          "react",
          "react-dom",
          "single-spa",
          "single-spa-react",
          "react-router-dom",
        ],
        output: {
          format: "system",
          entryFileNames: `${packageInfo.name}.[format].[hash].js`,
        },
      },
    },
  });
};
