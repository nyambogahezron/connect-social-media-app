
import { useState } from "react";
import CommunityCard, { Community } from "./CommunityCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface CommunityListProps {
  title: string;
  communities: Community[];
}

const CommunityList = ({ title, communities: initialCommunities }: CommunityListProps) => {
  const [communities, setCommunities] = useState<Community[]>(initialCommunities);

  const handleJoin = (id: string) => {
    setCommunities(prevCommunities => 
      prevCommunities.map(community => 
        community.id === id 
          ? { ...community, joined: !community.joined }
          : community
      )
    );
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="relative w-60">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input 
            placeholder={`Search ${title.toLowerCase()}`}
            className="pl-10 bg-muted/50 border-none" 
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {communities.map(community => (
          <CommunityCard 
            key={community.id} 
            community={community} 
            onJoin={handleJoin}
          />
        ))}
      </div>
    </div>
  );
};

export default CommunityList;
