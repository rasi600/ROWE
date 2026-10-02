import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

// Multi-page: "/" (landing + menú) y "/admin"
export default defineConfig({
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL("./index.html", import.meta.url)),
        admin: fileURLToPath(new URL("./admin/index.html", import.meta.url)),
      },
    },
  },
});
