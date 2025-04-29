
import MainNavbar from "@/components/MainNavbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavbar transparent />
      
      <HeroSection />
      
      <FeaturesSection />
      
      <section className="py-20 bg-gradient-to-r from-agline-primary/10 to-agline-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Social Experience?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join agline today and discover a new way to connect, engage, and inspire
            in a healthier digital environment.
          </p>
          <Link to="/signup">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-agline-primary to-agline-secondary bg-gradient-size animate-gradient-shift transition-all"
            >
              Join the Community
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
