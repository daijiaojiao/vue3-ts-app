import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// 模块自动引入
import AutoImport from "unplugin-auto-import/vite";
// import { fileURLToPath, URL } from "node:url";

// import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
      dts: "src/auto-import.d.ts",
      eslintrc: {
        enabled: true,
        filepath: "./.eslintrc-auto-import.json",
      },
    }),
  ],
  resolve: {
    alias: {
      // "@": path.resolve(__dirname, "./src"),
      "@": "/src",
    },
  },
});
