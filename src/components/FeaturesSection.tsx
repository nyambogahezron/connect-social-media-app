
import { 
  Brain, 
  MessageSquareMore, 
  Palette, 
  Users, 
  Shield 
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  colorClass: string;
}

const FeatureCard = ({ icon, title, description, colorClass }: FeatureCardProps) => (
  <div className="bg-white dark:bg-agline-dark/60 rounded-xl shadow-sm border p-6 hover:shadow-md transition-all">
    <div className={`w-12 h-12 rounded-lg ${colorClass} flex items-center justify-center mb-4`}>
      {icon}
    </div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm">{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-agline-primary" />,
      title: "Smart Feed (Pulse)",
      description: "Adaptive algorithm that prioritizes meaningful interactions with mood-based filtering and collaborative threads.",
      colorClass: "bg-agline-softPurple"
    },
    {
      icon: <MessageSquareMore className="w-6 h-6 text-agline-oceanBlue" />,
      title: "Expressive Engagement",
      description: "Go beyond likes with a reaction spectrum including 'Respect,' 'Curious,' 'Support' and voice replies.",
      colorClass: "bg-agline-softBlue"
    },
    {
      icon: <Palette className="w-6 h-6 text-agline-softOrange" />,
      title: "Creator Studio",
      description: "Create multi-format posts mixing text, video, and audio with AI co-creation tools and monetization options.",
      colorClass: "bg-agline-softPeach"
    },
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      title: "Community Hubs (Nests)",
      description: "Join interest-based groups with moderator rewards and options for local meetups.",
      colorClass: "bg-agline-softGreen"
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: "Wellness & Safety",
      description: "AI toxicity scanner, digital detox mode, and anonymous support circles create a healthier environment.",
      colorClass: "bg-agline-softPink"
    }
  ];
  
  return (
    <section className="py-16 bg-agline-background dark:bg-agline-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Key Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform redefines social media with these groundbreaking features designed 
            for authentic connection and meaningful engagement.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              colorClass={feature.colorClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

