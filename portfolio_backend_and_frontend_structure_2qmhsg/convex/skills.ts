import { query } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    const skills = await ctx.db.query("skills").withIndex("by_category_and_name").collect();
    // const skills = await ctx.db.query("skills").collect();
    return skills;
  },
});
