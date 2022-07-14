import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import eslintPlugin from "vite-plugin-eslint";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin(),
    checker({
      eslint: {
        lintCommand: 'eslint "./src/**/*.{vue,js,sass}"',
      },
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), //設定縮寫路徑為@ ,原本 webpack 幫你搞定
    },
  },

  build: {
    target: "modules",
    outDir: "./dist", // 指定輸出路徑
    assetsDir: "assets", // 輸出靜態資源路徑
    minify: "terser", // tree shaking?!
    cssCodeSplit: false, //拆分 CSS 預設是 true
  },
});
