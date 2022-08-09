import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import packageInfo from "./package.json";

export default ({ mode }) => {
  return defineConfig({
    plugins: [vue()],
    base:
      mode === "production"
        ? `https://bolawen.github.io/MicroFrontEnd/Single-Spa-BySystem/${packageInfo.name}/`
        : "/",
    server: {
      port: 8081,
    },
    build: {
      assetsDir: "",
      outDir: "output",
      cssCodeSplit: false,
      rollupOptions: {
        input: "src/single-spa-config.ts",
        preserveEntrySignatures: "exports-only",
        external: ["axios", "lodash", "single-spa", "single-spa-vue", "moment"],
        output: {
          format: "system",
          entryFileNames: `${packageInfo.name}.[format].[hash].js`,
        },
      },
      manifest: true,
    },
  });
};
