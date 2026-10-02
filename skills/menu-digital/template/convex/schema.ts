import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  items: defineTable({
    name: v.string(),
    description: v.optional(v.string()),
    category: v.string(),
    price: v.number(),
    available: v.boolean(),
    order: v.number(),
  }),
});
