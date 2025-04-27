
import { Community } from "@/components/CommunityCard";
import CommunityList from "@/components/CommunityList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const trendingCommunities: Community[] = [
  {
    id: "digital-nomads",
    name: "Digital Nomads",
    description: "Connect with remote workers around the globe. Share tips, workspaces, and destinations for the location-independent lifestyle.",
    backgroundColor: "#9b87f5",
    members: 24568,
    joined: true
  },
  {
    id: "climate-activists",
    name: "Climate Activists",
    description: "Taking action on environmental issues. Organize events, share sustainable living tips, and collaborate on green initiatives.",
    backgroundColor: "#0EA5E9",
    members: 18721,
  },
  {
    id: "indie-musicians",
    name: "Indie Musicians",
    description: "Independent artists sharing their craft. Collaborate, get feedback, and find opportunities in the music industry.",
    backgroundColor: "#FEC6A1",
    members: 12439
  },
  {
    id: "startup-builders",
    name: "Startup Builders",
    description: "Entrepreneurs and innovators building the next big thing. Share resources, ask for advice, and find co-founders.",
    backgroundColor: "#F2FCE2",
    members: 32145
  },
  {
    id: "mental-wellness",
    name: "Mental Wellness",
    description: "A supportive space for discussing mental health and sharing coping strategies in a judgment-free environment.",
    backgroundColor: "#FFDEE2",
    members: 29876
  },
  {
    id: "game-developers",
    name: "Game Developers",
    description: "From indie to AAA, connect with fellow game devs. Share your projects, troubleshoot code, and discuss industry trends.",
    backgroundColor: "#D3E4FD",
    members: 15732
  }
];

const recommendedCommunities: Community[] = [
  {
    id: "book-lovers",
    name: "Book Lovers",
    description: "For passionate readers. Discuss literature, share reviews, and discover your next favorite book across all genres.",
    backgroundColor: "#E5DEFF",
    members: 38921
  },
  {
    id: "hobby-chefs",
    name: "Hobby Chefs",
    description: "Home cooking enthusiasts sharing recipes, techniques, and food photography. From beginners to experienced cooks.",
    backgroundColor: "#FDE1D3",
    members: 42153
  },
  {
    id: "urban-gardeners",
    name: "Urban Gardeners",
    description: "Growing plants in limited city spaces. Exchange tips on balcony gardens, indoor plants, and community gardening.",
    backgroundColor: "#F2FCE2",
    members: 18547
  }
];

const Community = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Community Hubs</h1>
        <p className="text-muted-foreground">
          Find your nests - interest-based groups where you can connect with like-minded people.
        </p>
      </div>
      
      <Tabs defaultValue="trending" className="mb-12">
        <TabsList>
          <TabsTrigger value="trending">Trending Nests</TabsTrigger>
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
          <TabsTrigger value="joined">Joined</TabsTrigger>
        </TabsList>
        <TabsContent value="trending" className="pt-6">
          <CommunityList 
            title="Trending Nests" 
            communities={trendingCommunities} 
          />
        </TabsContent>
        <TabsContent value="recommended" className="pt-6">
          <CommunityList 
            title="Recommended for You" 
            communities={recommendedCommunities} 
          />
        </TabsContent>
        <TabsContent value="joined" className="pt-6">
          <CommunityList 
            title="Your Nests" 
            communities={trendingCommunities.filter(c => c.joined)} 
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Community;
