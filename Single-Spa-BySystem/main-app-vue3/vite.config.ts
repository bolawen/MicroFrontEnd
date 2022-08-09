import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import packageInfo from "./package.json";

export default ({ mode }) => {
  return defineConfig({
    plugins: [vue()],
    base:
      mode === "production"
        ? `https://s3-gz01.didistatic.com/mapp/${packageInfo.name}/`
        : "/",
    server: {
      port: 3000,
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
