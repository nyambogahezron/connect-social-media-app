
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-agline-softPurple/50 to-white dark:from-agline-dark dark:to-agline-dark/80 pt-32 pb-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Connect. Engage. Inspire.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A next-gen social media platform designed to foster authentic connections, 
            creativity, and meaningful engagement while combating misinformation, 
            toxicity, and algorithmic fatigue.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link to="/signup">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-agline-primary to-agline-secondary hover:from-agline-secondary hover:to-agline-primary bg-gradient-size animate-gradient-shift transition-all gap-2"
              >
                Join agline <ArrowRightIcon className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/feed">
              <Button variant="outline" size="lg">
                Explore Features
              </Button>
            </Link>
          </div>
          
          <div className="flex justify-center mt-8">
            <div className="relative w-full max-w-4xl">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-agline-softPink rounded-full blur-2xl opacity-60 animate-float"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-agline-softBlue rounded-full blur-2xl opacity-60 animate-float" style={{ animationDelay: "2s" }}></div>
              
              <div className="bg-white dark:bg-agline-dark/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-agline-softPurple/20 relative z-10">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-agline-softOrange flex items-center justify-center">
                        <span className="font-medium text-agline-tertiary">A</span>
                      </div>
                      <div>
                        <p className="font-medium">Alex Morgan</p>
                        <p className="text-xs text-muted-foreground">Digital Nomad • 2h ago</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-agline-softGreen text-xs rounded-full">Learn Mode</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm mb-3">Just discovered the most amazing co-working space in Bali! Anyone else working remotely from Southeast Asia right now?</p>
                    <div className="rounded-lg overflow-hidden bg-agline-background aspect-video flex items-center justify-center">
                      <div className="text-sm text-muted-foreground">Beautiful workspace image</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1 gap-1 text-xs">
                      <span className="text-agline-primary">12</span> Respect
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 gap-1 text-xs">
                      <span className="text-agline-oceanBlue">8</span> Curious
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 gap-1 text-xs">
                      <span className="text-agline-softOrange">5</span> Support
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
