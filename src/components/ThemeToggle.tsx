import React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

interface ThemeToggleProps {
  isDarkMode?: boolean;
  onToggle?: () => void;
}

const ThemeToggle = ({
  isDarkMode = false,
  onToggle = () => {},
}: ThemeToggleProps) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onToggle}
      className={
        isDarkMode
          ? "text-white hover:text-white hover:bg-slate-700"
          : "text-slate-800 hover:bg-slate-200"
      }
    >
      {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
};

export default ThemeToggle;
