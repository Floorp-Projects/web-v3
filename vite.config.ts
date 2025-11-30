import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    // 静的サイト向けの設定
    outDir: "dist",
    assetsDir: "assets",
    // チャンクサイズの警告閾値
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        // コード分割の最適化
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          i18n: ["i18next", "react-i18next", "i18next-http-backend", "i18next-browser-languagedetector"],
          icons: ["lucide-react"],
        },
      },
    },
  },
});
