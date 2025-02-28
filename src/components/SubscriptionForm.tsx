import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

interface SubscriptionFormProps {
  onSubmit?: (email: string) => void;
  isLoading?: boolean;
}

const SubscriptionForm = ({
  onSubmit = () => {},
  isLoading = false,
}: SubscriptionFormProps) => {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
  };

  return (
    <Card className="w-full max-w-[600px] p-6 bg-white shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <motion.div
            animate={{
              y: isFocused || email ? -24 : 0,
              scale: isFocused || email ? 0.8 : 1,
            }}
            className="absolute left-3 top-3 pointer-events-none"
          >
            <Label className="text-muted-foreground">
              Enter your email address
            </Label>
          </motion.div>

          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="h-14 px-3 pt-6 w-full bg-background"
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full h-12 text-lg font-medium"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
              <span>Subscribing...</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span>Get Daily Inspiration</span>
              <Send className="h-5 w-5" />
            </div>
          )}
        </Button>
      </form>
    </Card>
  );
};

export default SubscriptionForm;
