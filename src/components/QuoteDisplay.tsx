import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RefreshCw } from "lucide-react";
import { Button } from "./ui/button";
import { getRandomQuote, Quote } from "@/lib/quotes";

interface QuoteDisplayProps {
  initialQuote?: Quote;
  onNewQuote?: (quote: Quote) => void;
}

const QuoteDisplay = ({
  initialQuote = {
    id: 1,
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  onNewQuote,
}: QuoteDisplayProps) => {
  const [quote, setQuote] = useState<Quote>(initialQuote);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchNewQuote = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const newQuote = await getRandomQuote();
      setQuote(newQuote);
      if (onNewQuote) onNewQuote(newQuote);
    } catch (err) {
      setError("Failed to fetch a new quote. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={quote.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <motion.blockquote className="text-3xl md:text-4xl font-serif text-slate-800 mb-4">
            "{quote.text}"
          </motion.blockquote>
          <motion.cite className="text-lg text-slate-600 block">
            — {quote.author}
          </motion.cite>
        </motion.div>
      </AnimatePresence>

      {error && <div className="mt-4 text-red-500 text-sm">{error}</div>}

      <div className="mt-6 flex justify-center">
        <Button
          variant="outline"
          size="sm"
          onClick={fetchNewQuote}
          disabled={isLoading}
          className="flex items-center gap-2 hover:bg-slate-100"
        >
          <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
          {isLoading ? "Loading..." : "New Quote"}
        </Button>
      </div>
    </div>
  );
};

export default QuoteDisplay;
