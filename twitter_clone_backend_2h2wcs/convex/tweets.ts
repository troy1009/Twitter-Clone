import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { getAuthUserId } from "@convex-dev/auth/server";

export const createTweet = mutation({
  args: {
    text: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("User not authenticated");
    }
    await ctx.db.insert("tweets", {
      userId,
      text: args.text,
    });
  },
});

export const listTweets = query({
  args: {},
  handler: async (ctx) => {
    const tweets = await ctx.db.query("tweets").order("desc").collect();
    const tweetsWithUsers = await Promise.all(
      tweets.map(async (tweet) => {
        const user = await ctx.db.get(tweet.userId);
        return {
          ...tweet,
          authorName: user?.name ?? "Unknown User",
          authorEmail: user?.email ?? "No email",
        };
      })
    );
    return tweetsWithUsers;
  },
});
