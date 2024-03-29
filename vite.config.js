import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import eslintPlugin from "vite-plugin-eslint";
import checker from "vite-plugin-checker";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
export default defineConfig({
  rollupOptions: {
    output: {
      manualChunks: {
        "group-user": ["./src/views/About"],
      },
    },
  },
  server: {
    port: "5300",
    host: "0.0.0.0",
  },
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasar({ autoImportComponentCase: "pascal" }),
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
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  //   build: {
  //     target: "modules",
  //     outDir: "./dist", // 指定輸出路徑
  //     assetsDir: "assets", // 輸出靜態資源路徑
  //     minify: "terser", // tree shaking?!
  //     cssCodeSplit: true, //拆分 CSS 預設是 true
  //   },
});
