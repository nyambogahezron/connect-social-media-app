
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

export interface Community {
  id: string;
  name: string;
  description: string;
  image?: string;
  backgroundColor: string;
  members: number;
  joined?: boolean;
}

interface CommunityCardProps {
  community: Community;
  onJoin?: (id: string) => void;
}

const CommunityCard = ({ community, onJoin }: CommunityCardProps) => {
  const handleJoin = () => {
    if (onJoin) {
      onJoin(community.id);
    }
  };

  return (
    <div className="bg-white dark:bg-agline-dark/80 rounded-xl shadow-sm overflow-hidden border">
      <div 
        className="h-24 flex items-center justify-center" 
        style={{ backgroundColor: community.backgroundColor }}
      >
        {community.image ? (
          <img 
            src={community.image} 
            alt={community.name} 
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-white text-2xl font-bold">
            {community.name.substring(0, 2).toUpperCase()}
          </span>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{community.name}</h3>
        
        <div className="flex items-center text-xs text-muted-foreground mb-3">
          <Users className="w-3 h-3 mr-1" /> 
          {community.members.toLocaleString()} members
        </div>
        
        <p className="text-sm text-muted-foreground mb-4">
          {community.description}
        </p>
        
        <Button 
          variant={community.joined ? "outline" : "default"}
          className={
            community.joined
              ? "w-full border-agline-primary text-agline-primary"
              : "w-full bg-gradient-to-r from-agline-primary to-agline-secondary"
          }
          onClick={handleJoin}
        >
          {community.joined ? "Joined" : "Join Nest"}
        </Button>
      </div>
    </div>
  );
};

export default CommunityCard;
