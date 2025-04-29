
import { Link, useLocation } from "react-router-dom";
import { Bell, Home, Users, User, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

const navItems = [
  { name: "Feed", path: "/feed", icon: <Home className="w-5 h-5" /> },
  { name: "Community", path: "/community", icon: <Users className="w-5 h-5" /> },
  { name: "Profile", path: "/profile", icon: <User className="w-5 h-5" /> },
];

const AppNavbar = () => {
  const location = useLocation();

  return (
    <header className="bg-white dark:bg-agline-dark border-b sticky top-0 z-50">
      <div className="container mx-auto p-3 flex items-center justify-between">
        <Link to="/feed" className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-agline-primary to-agline-secondary rounded-lg h-8 w-8 flex items-center justify-center text-white font-bold">
            A
          </div>
          <span className="text-xl font-bold gradient-text">agline</span>
        </Link>
        
        <div className="hidden md:flex relative max-w-xs w-full mx-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input 
            placeholder="Search agline..." 
            className="pl-10 bg-muted/50 border-none focus-visible:ring-1 focus-visible:ring-agline-primary" 
          />
        </div>
        
        <nav className="flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "flex flex-col items-center p-2 rounded-md text-sm",
                location.pathname === item.path
                  ? "text-agline-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              )}
            >
              {item.icon}
              <span className="text-xs mt-1">{item.name}</span>
            </Link>
          ))}
          
          <button className="flex flex-col items-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent">
            <Bell className="w-5 h-5" />
            <span className="text-xs mt-1">Alerts</span>
          </button>
          
          <div className="ml-2 h-8 w-8 rounded-full bg-agline-softPurple flex items-center justify-center">
            <span className="font-medium text-sm text-agline-tertiary">JS</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default AppNavbar;
