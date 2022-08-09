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
        input: "src/single-spa-config.tsx",
        preserveEntrySignatures: "exports-only",
        external: [
          "axios",
          "lodash",
          "react",
          "react-dom",
          "single-spa",
          "single-spa-react",
        ],
        output: {
          format: "system",
          entryFileNames: `${packageInfo.name}.[hash].js`,
        },
      },
    },
  });
};
