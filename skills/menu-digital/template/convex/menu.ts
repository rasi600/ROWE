import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { assertAdmin } from "./auth";

const byOrder = <T extends { order: number }>(a: T[]) => a.sort((x, y) => x.order - y.order);

const fields = {
  name: v.string(),
  description: v.optional(v.string()),
  category: v.string(),
  price: v.number(),
  available: v.boolean(),
};

// Público: solo ítems disponibles
export const list = query({
  args: {},
  handler: async (ctx) => byOrder((await ctx.db.query("items").collect()).filter((i) => i.available)),
});

// Admin: todos los ítems
export const listAll = query({
  args: { password: v.string() },
  handler: async (ctx, { password }) => {
    assertAdmin(password);
    return byOrder(await ctx.db.query("items").collect());
  },
});

export const create = mutation({
  args: { password: v.string(), ...fields },
  handler: async (ctx, { password, ...data }) => {
    assertAdmin(password);
    const all = await ctx.db.query("items").collect();
    const order = all.reduce((m, i) => Math.max(m, i.order), 0) + 1;
    return ctx.db.insert("items", { ...data, order });
  },
});

export const update = mutation({
  args: { password: v.string(), id: v.id("items"), ...fields },
  handler: async (ctx, { password, id, ...data }) => {
    assertAdmin(password);
    await ctx.db.patch(id, data);
  },
});

export const remove = mutation({
  args: { password: v.string(), id: v.id("items") },
  handler: async (ctx, { password, id }) => {
    assertAdmin(password);
    await ctx.db.delete(id);
  },
});
