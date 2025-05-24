import { query } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    const projects = await ctx.db.query("projects").withIndex("by_order").order("asc").collect();
    // If no order is specified, or not using by_order index, you can sort by creation time or another field.
    // const projects = await ctx.db.query("projects").order("desc").collect();
    return projects;
  },
});
