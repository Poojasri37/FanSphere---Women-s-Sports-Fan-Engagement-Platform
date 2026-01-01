import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-8 text-center animate-fade-in">
      <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
        <span className="text-5xl font-bold text-primary">404</span>
      </div>
      <h1 className="text-3xl font-bold text-foreground mb-2">Page Not Found</h1>
      <p className="text-muted-foreground mb-8 max-w-md">
        Oops! Looks like this page went out for a boundary. Let's get you back to the action.
      </p>
      <Button asChild>
        <Link to="/">
          <Home className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </Button>
    </div>
  );
};

export default NotFound;
