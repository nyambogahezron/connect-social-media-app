
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MainNavbarProps {
  className?: string;
  transparent?: boolean;
}

const MainNavbar = ({ className, transparent = false }: MainNavbarProps) => {
  return (
    <header 
      className={cn(
        "w-full z-50 py-4 px-4 md:px-6",
        transparent ? "absolute top-0 left-0" : "bg-background border-b",
        className
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-agline-primary to-agline-secondary bg-gradient-size animate-gradient-shift rounded-lg h-8 w-8 flex items-center justify-center text-white font-bold">
            A
          </div>
          <span className="text-xl font-bold gradient-text">agline</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium hover:text-agline-primary transition">
            Home
          </Link>
          <Link to="/feed" className="text-sm font-medium hover:text-agline-primary transition">
            Feed
          </Link>
          <Link to="/community" className="text-sm font-medium hover:text-agline-primary transition">
            Community
          </Link>
        </nav>
        
        <div className="flex items-center gap-3">
          <Link to="/signin">
            <Button variant="outline" size="sm">Sign in</Button>
          </Link>
          <Link to="/signup">
            <Button 
              className="bg-gradient-to-r from-agline-primary to-agline-secondary hover:from-agline-secondary hover:to-agline-primary bg-gradient-size animate-gradient-shift transition-all"
              size="sm"
            >
              Join agline
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default MainNavbar;
