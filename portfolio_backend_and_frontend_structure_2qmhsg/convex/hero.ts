import { query } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    // Assuming a single document for hero info, or the first one.
    // For a real setup, you might have a specific ID or a way to identify the primary hero document.
    const hero = await ctx.db.query("heroInfo").first();
    return hero;
  },
});
