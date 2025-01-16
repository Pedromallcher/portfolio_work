import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-portfolio-template/",
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["mixed-decls"],
      },
    },
  },
  server: {
    host: true, // Permite que o servidor escute na rede local
    port: 5173, // Define a porta (pode mudar se necessário)
    open: true, // (Opcional) Abre automaticamente no navegador
  },
});
