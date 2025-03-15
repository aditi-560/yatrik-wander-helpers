
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex items-center justify-center bg-background dark:bg-yatrik-darkBg">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-yatrik-dark dark:text-white">404</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">Oops! Page not found</p>
          <Link to="/" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline">
            Return to Home
          </Link>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default NotFound;
