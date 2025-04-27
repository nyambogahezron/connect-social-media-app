
import { useState } from "react";
import MoodSelector, { defaultMoods } from "@/components/MoodSelector";
import PostCard, { Post } from "@/components/PostCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Image,
  Mic, 
  Smile,
  PlusCircle
} from "lucide-react";

const samplePosts: Post[] = [
  {
    id: "1",
    author: {
      name: "Emma Johnson",
      avatar: "#9b87f5",
      role: "Digital Nomad"
    },
    timeAgo: "2h ago",
    content: "Just discovered the most amazing co-working space in Bali! The views are incredible and the community is so welcoming. Anyone else working remotely from Southeast Asia right now?",
    image: "https://source.unsplash.com/photo-1586219480017-12bbc0ebc02b",
    reactions: [
      { name: "Respect", count: 24, colorClass: "text-agline-primary", active: true },
      { name: "Curious", count: 18, colorClass: "text-agline-oceanBlue" },
      { name: "Support", count: 7, colorClass: "text-agline-softOrange" }
    ],
    comments: 12,
    shares: 5,
    moodLabel: "Discover Mode",
    moodColor: "bg-agline-softPurple"
  },
  {
    id: "2",
    author: {
      name: "Alex Rivera",
      avatar: "#0EA5E9",
      role: "Climate Activist"
    },
    timeAgo: "4h ago",
    content: "Our community beach cleanup removed over 500 pounds of plastic this weekend! Small actions add up to big changes. Join us next month - the more hands we have, the bigger impact we make!",
    reactions: [
      { name: "Support", count: 87, colorClass: "text-agline-softOrange", active: true },
      { name: "Respect", count: 45, colorClass: "text-agline-primary" },
      { name: "Inspired", count: 32, colorClass: "text-green-600" }
    ],
    comments: 21,
    shares: 18,
    moodLabel: "Learn Mode",
    moodColor: "bg-agline-softGreen"
  },
  {
    id: "3",
    author: {
      name: "Sophia Chen",
      avatar: "#FEC6A1",
      role: "Indie Musician"
    },
    timeAgo: "1d ago",
    content: "Just dropped my new acoustic cover! Created this one during a power outage with just my guitar and phone recording. Sometimes limitations spark the best creativity!",
    image: "https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    reactions: [
      { name: "Fire", count: 103, colorClass: "text-orange-500" },
      { name: "Respect", count: 78, colorClass: "text-agline-primary", active: true },
      { name: "Inspired", count: 41, colorClass: "text-green-600" }
    ],
    comments: 32,
    shares: 26,
    saved: true,
    moodLabel: "Chill Mode",
    moodColor: "bg-agline-softBlue"
  }
];

const Feed = () => {
  const [activeMood, setActiveMood] = useState("default");
  const [posts, setPosts] = useState<Post[]>(samplePosts);

  const handleMoodChange = (moodId: string) => {
    setActiveMood(moodId);
    // In a real application, this would filter posts based on mood
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6 sticky top-[72px] z-40 pt-2 pb-4 bg-agline-background">
        <MoodSelector 
          moods={defaultMoods}
          activeMood={activeMood}
          onChangeMood={handleMoodChange}
        />

        <div className="mt-4 bg-white dark:bg-agline-dark/80 rounded-xl shadow-sm border p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-full bg-agline-softPurple flex items-center justify-center">
              <span className="font-medium text-sm text-agline-tertiary">JS</span>
            </div>
            <Input 
              placeholder="Share what's on your mind..." 
              className="bg-muted/50 border-none" 
            />
          </div>
          
          <div className="flex justify-between pt-2 border-t">
            <Button variant="ghost" size="sm" className="text-xs gap-1">
              <Image className="h-4 w-4" /> Photo
            </Button>
            <Button variant="ghost" size="sm" className="text-xs gap-1">
              <Mic className="h-4 w-4" /> Voice
            </Button>
            <Button variant="ghost" size="sm" className="text-xs gap-1">
              <Smile className="h-4 w-4" /> Feeling
            </Button>
            <Button variant="ghost" size="sm" className="text-xs gap-1">
              <PlusCircle className="h-4 w-4" /> More
            </Button>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
