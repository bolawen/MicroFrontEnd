import { defineConfig } from "vite";
import packageInfo from "./package.json";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default ({ mode }) => {
  return defineConfig({
    plugins: [reactRefresh()],
    base:
      mode === "production"
        ? `https://bolawen.github.io/MicroFrontEnd/System/${packageInfo.name}/output/`
        : "/",
    server: {
      port: 3001,
    },
    build: {
      assetsDir: "",
      outDir: "output",
      cssCodeSplit: false,
      rollupOptions: {
        input: "src/main.tsx",
        preserveEntrySignatures: "exports-only",
        external: [
          "axios",
          "react",
          "react-dom",
        ],
        output: {
          format: "system",
          entryFileNames: `${packageInfo.name}.[hash].js`,
        },
      },
    },
  });
};
