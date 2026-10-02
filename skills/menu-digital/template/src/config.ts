// Los marcadores de posición los reemplaza scripts/scaffold.sh
export const BUSINESS_NAME = "__BUSINESS_NAME__";
export const WORKER_NAME = "__WORKER_NAME__";
export const LANGS = "__LANGS__".split(",").map((s) => s.trim()).filter(Boolean); // ej: "es,en"
export const CURRENCY = "USD"; // cámbialo según el negocio
export const CONVEX_URL = import.meta.env.VITE_CONVEX_URL as string | undefined;
