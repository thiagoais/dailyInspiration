import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import QuoteDisplay from "./QuoteDisplay";
import SubscriptionForm from "./SubscriptionForm";
import SocialShare from "./SocialShare";
import StatusMessage from "./StatusMessage";
import SEOContent from "./SEOContent";
import {
  getRandomQuote,
  subscribeEmail,
  Quote,
  fallbackQuotes,
} from "@/lib/quotes";
import ThemeToggle from "./ThemeToggle";

const Home = () => {
  // Get a random quote from the fallback quotes for initial state
  const randomIndex = Math.floor(Math.random() * fallbackQuotes.length);
  const randomInitialQuote = fallbackQuotes[randomIndex];

  const [quote, setQuote] = useState<Quote>(randomInitialQuote);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | "info";
    message: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    // Fetch initial quote
    fetchInitialQuote();
  }, []);

  const fetchInitialQuote = async () => {
    try {
      const initialQuote = await getRandomQuote();
      setQuote(initialQuote);
    } catch (error) {
      console.error("Failed to fetch initial quote:", error);
      // Using default quote from state if fetch fails
    }
  };

  const handleQuoteChange = (newQuote: Quote) => {
    setQuote(newQuote);
  };

  const handleSubscribe = async (email: string) => {
    setIsLoading(true);
    try {
      const result = await subscribeEmail(email);
      setStatusMessage({
        type: result.success ? "success" : "error",
        message: result.message,
      });
    } catch (error) {
      setStatusMessage({
        type: "error",
        message: "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-gradient-to-b from-slate-900 to-slate-800 text-white" : "bg-gradient-to-b from-slate-50 to-slate-100"}`}
    >
      <div className="absolute top-4 right-4">
        <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
      </div>

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-4xl flex flex-col items-center gap-12 px-4 py-12"
      >
        {/* Hero Section with Quote */}
        <section className="w-full text-center">
          <QuoteDisplay initialQuote={quote} onNewQuote={handleQuoteChange} />
          <div className="mt-6 flex justify-center">
            <SocialShare quote={quote.text} author={quote.author} />
          </div>
        </section>

        {/* Subscription Section */}
        <section className="w-full max-w-2xl px-4">
          {statusMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <StatusMessage
                type={statusMessage.type}
                message={statusMessage.message}
              />
            </motion.div>
          )}
          <SubscriptionForm onSubmit={handleSubscribe} isLoading={isLoading} />
        </section>

        {/* Add SEO Content Section at the Bottom */}
        <SEOContent />
      </motion.main>
    </div>
  );
};

export default Home;
