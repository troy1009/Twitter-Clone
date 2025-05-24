import { Authenticated, Unauthenticated, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { SignInForm } from "./SignInForm";
import { SignOutButton } from "./SignOutButton";
import { Toaster } from "sonner";
import PortfolioPage from "./components/PortfolioPage";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm h-16 flex justify-between items-center border-b border-gray-200 dark:border-gray-700 shadow-sm px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold text-primary">My Portfolio</h2>
        <SignOutButton />
      </header>
      <main className="flex-1 w-full">
        <Content />
      </main>
      <Toaster />
    </div>
  );
}

function Content() {
  const loggedInUser = useQuery(api.auth.loggedInUser);

  // Spinner while checking auth state
  if (loggedInUser === undefined) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <>
      <Unauthenticated>
        <div className="w-full max-w-md mx-auto p-8 flex flex-col items-center gap-8 mt-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary mb-2">Welcome!</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">Sign in to manage your portfolio (feature coming soon!).</p>
            <p className="text-md text-gray-500 dark:text-gray-500 mt-4">In the meantime, please enjoy the public portfolio view below.</p>
          </div>
          <SignInForm />
        </div>
      </Unauthenticated>
      <Authenticated>
        <div className="text-center py-8 px-4">
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Welcome back, {loggedInUser?.name ?? loggedInUser?.email ?? "friend"}!
          </p>
           <p className="text-md text-gray-500 dark:text-gray-500 mt-2">(Admin/Edit features for the portfolio are planned for the future.)</p>
        </div>
      </Authenticated>
      <PortfolioPage />
    </>
  );
}
