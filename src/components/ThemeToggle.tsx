
import React from 'react';
import { useTheme } from './ThemeProvider';
import { Button } from "@/components/ui/button";
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button 
      variant="outline" 
      size="icon" 
      onClick={toggleTheme}
      className="rounded-md w-9 h-9 transition-all duration-300 
        bg-white dark:bg-gray-800 
        text-yatrik-dark dark:text-white 
        border-gray-200 dark:border-gray-700 
        hover:bg-gray-100 dark:hover:bg-gray-700
        shadow-sm"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  );
};

export default ThemeToggle;
