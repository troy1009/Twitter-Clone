import { Authenticated, Unauthenticated, useMutation, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { SignInForm } from "./SignInForm";
import { SignOutButton } from "./SignOutButton";
import { Toaster } from "sonner";
import React, { useState } from "react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm h-16 flex justify-between items-center border-b shadow-sm px-4">
        <h2 className="text-xl font-semibold text-primary">Chirp (Twitter Clone)</h2>
        <SignOutButton />
      </header>
      <main className="flex-1 flex flex-col items-center justify-start p-8">
        <div className="w-full max-w-2xl mx-auto">
          <Content />
        </div>
      </main>
      <Toaster />
    </div>
  );
}

function Content() {
  const loggedInUser = useQuery(api.auth.loggedInUser);

  if (loggedInUser === undefined) {
    return (
      <div className="flex justify-center items-center mt-10">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <Authenticated>
        <div className="text-center mb-4">
          <p className="text-xl text-secondary">
            Welcome back, {loggedInUser?.name ?? loggedInUser?.email ?? "friend"}!
          </p>
        </div>
        <TweetForm />
        <TweetList />
      </Authenticated>
      <Unauthenticated>
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-primary mb-4">Welcome to Chirp</h1>
          <p className="text-xl text-secondary">Sign in to share your thoughts.</p>
        </div>
        <SignInForm />
      </Unauthenticated>
    </div>
  );
}

function TweetForm() {
  const [tweetText, setTweetText] = useState("");
  const createTweet = useMutation(api.tweets.createTweet);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (tweetText.trim() === "") return;
    try {
      await createTweet({ text: tweetText });
      setTweetText("");
    } catch (error) {
      console.error("Failed to create tweet:", error);
      // You could show a toast notification here
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 p-4 bg-white rounded-lg shadow">
      <textarea
        value={tweetText}
        onChange={(e) => setTweetText(e.target.value)}
        placeholder="What's happening?"
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary resize-none"
        rows={3}
      />
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-primary text-white font-semibold rounded-md hover:bg-primary-hover disabled:opacity-50"
        disabled={!tweetText.trim()}
      >
        Chirp
      </button>
    </form>
  );
}

function TweetList() {
  const tweets = useQuery(api.tweets.listTweets) || [];

  if (tweets.length === 0) {
    return <p className="text-center text-gray-500">No chirps yet. Be the first!</p>;
  }

  return (
    <div className="space-y-4">
      {tweets.map((tweet) => (
        <TweetCard key={tweet._id} tweet={tweet} />
      ))}
    </div>
  );
}

type Tweet = NonNullable<ReturnType<typeof useQuery<typeof api.tweets.listTweets>>>[number];

function TweetCard({ tweet }: { tweet: Tweet }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex items-center mb-2">
        {/* Placeholder for user avatar */}
        {/* <img src={tweet.authorAvatarUrl} alt={tweet.authorName} className="w-10 h-10 rounded-full mr-3" /> */}
        <div>
          <p className="font-semibold text-gray-800">{tweet.authorName}</p>
          <p className="text-sm text-gray-500">@{tweet.authorEmail.split('@')[0]}</p>
        </div>
      </div>
      <p className="text-gray-700 mb-2">{tweet.text}</p>
      <p className="text-xs text-gray-400">
        {new Date(tweet._creationTime).toLocaleString()}
      </p>
    </div>
  );
}
