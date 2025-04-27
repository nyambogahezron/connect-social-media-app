
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-agline-dark border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-r from-agline-primary to-agline-secondary rounded-lg h-8 w-8 flex items-center justify-center text-white font-bold">
                A
              </div>
              <span className="text-xl font-bold gradient-text">agline</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Connect. Engage. Inspire.
              <br />
              A next-gen social media platform designed for authentic connections.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/feed" className="text-muted-foreground hover:text-foreground">Smart Feed</Link></li>
              <li><Link to="/community" className="text-muted-foreground hover:text-foreground">Community Hubs</Link></li>
              <li><Link to="/creator" className="text-muted-foreground hover:text-foreground">Creator Studio</Link></li>
              <li><Link to="/wellness" className="text-muted-foreground hover:text-foreground">Wellness Center</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-foreground">Careers</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-foreground">Blog</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
              <li><Link to="/guidelines" className="text-muted-foreground hover:text-foreground">Community Guidelines</Link></li>
              <li><Link to="/cookies" className="text-muted-foreground hover:text-foreground">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} agline. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground">Twitter</a>
            <a href="#" className="text-muted-foreground hover:text-foreground">Instagram</a>
            <a href="#" className="text-muted-foreground hover:text-foreground">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
