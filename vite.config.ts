import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from "vite-plugin-pages";
import AutoImport from "unplugin-auto-import";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages({
      dirs: ["./src/pages"],
    }),
    AutoImport({
      imports: ["vue", "vue-router"],
      dts: "./src/vite-env.d.ts",
    }),
  ],
});
