import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const applicationTables = {
  tweets: defineTable({
    userId: v.id("users"),
    text: v.string(),
  }).index("by_userId", ["userId"]),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
