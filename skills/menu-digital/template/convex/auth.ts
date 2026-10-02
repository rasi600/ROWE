import { mutation } from "./_generated/server";
import { v } from "convex/values";

// La contraseña vive en la variable de entorno de Convex ADMIN_PASSWORD
// (npx convex env set ADMIN_PASSWORD ...). Nunca llega al navegador.
export function assertAdmin(password: string) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) throw new Error("ADMIN_PASSWORD no está configurada");
  let diff = expected.length ^ password.length; // comparación en tiempo constante
  for (let i = 0; i < expected.length; i++) {
    diff |= expected.charCodeAt(i) ^ (password.charCodeAt(i) || 0);
  }
  if (diff !== 0) throw new Error("Contraseña incorrecta");
}

export const verify = mutation({
  args: { password: v.string() },
  handler: async (_ctx, { password }) => {
    assertAdmin(password);
    return true;
  },
});
