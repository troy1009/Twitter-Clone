import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const applicationTables = {
  heroInfo: defineTable({
    name: v.string(),
    title: v.string(),
    bio: v.string(),
    profileImageUrl: v.optional(v.string()), // URL for now, can be Id<"_storage"> later
  }), // Removed .withoutValidator()

  projects: defineTable({
    title: v.string(),
    description: v.string(),
    technologies: v.array(v.string()),
    projectUrl: v.optional(v.string()),
    repoUrl: v.optional(v.string()),
    imageUrl: v.optional(v.string()), // URL for now
    order: v.optional(v.number()),
  }).index("by_order", ["order"]),

  skills: defineTable({
    name: v.string(),
    level: v.optional(v.number()), // e.g., 0-100 for a progress bar
    category: v.optional(v.string()), // e.g., Frontend, Backend, Tools
  }).index("by_category_and_name", ["category", "name"]),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
