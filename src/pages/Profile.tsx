
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Edit, Settings, Users, Bookmark, Calendar } from "lucide-react";
import PostCard, { Post } from "@/components/PostCard";

const profilePosts: Post[] = [
  {
    id: "p1",
    author: {
      name: "Jane Smith",
      avatar: "#9b87f5",
      role: "UI/UX Designer"
    },
    timeAgo: "3d ago",
    content: "Just finished a redesign project for a mental wellness app. Focus was on creating a calming interface with intuitive navigation. Here's a preview of the dashboard!",
    image: "https://source.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    reactions: [
      { name: "Impressive", count: 48, colorClass: "text-agline-primary", active: true },
      { name: "Inspired", count: 32, colorClass: "text-green-600" },
      { name: "Curious", count: 15, colorClass: "text-agline-oceanBlue" }
    ],
    comments: 24,
    shares: 12
  },
  {
    id: "p2",
    author: {
      name: "Jane Smith",
      avatar: "#9b87f5",
      role: "UI/UX Designer"
    },
    timeAgo: "1w ago",
    content: "Design tip: The right color palette can significantly impact user emotions. For wellness apps, I'm loving soft greens and blues combined with neutral backgrounds.",
    reactions: [
      { name: "Helpful", count: 37, colorClass: "text-agline-softOrange", active: true },
      { name: "Respect", count: 22, colorClass: "text-agline-primary" },
      { name: "Bookmark", count: 8, colorClass: "text-agline-oceanBlue" }
    ],
    comments: 14,
    shares: 9,
    saved: true
  }
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <div>
      {/* Profile Header */}
      <div className="mb-8">
        <div className="h-32 md:h-48 bg-gradient-to-r from-agline-primary to-agline-secondary rounded-xl mb-4">
          {/* Cover image area */}
        </div>
        
        <div className="flex flex-col md:flex-row md:items-end gap-4 px-4 md:px-8 -mt-16">
          <div className="h-24 w-24 rounded-full border-4 border-white dark:border-agline-dark bg-agline-softPurple flex items-center justify-center">
            <span className="font-bold text-xl text-agline-tertiary">JS</span>
          </div>
          
          <div className="flex-1 md:mb-2">
            <h1 className="text-2xl font-bold">Jane Smith</h1>
            <p className="text-muted-foreground">UI/UX Designer | Digital Wellness Advocate</p>
          </div>
          
          <div className="flex gap-2 mt-2 md:mt-0">
            <Button variant="outline" size="sm" className="gap-1">
              <Edit className="h-4 w-4" /> Edit Profile
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Settings className="h-4 w-4" /> Settings
            </Button>
          </div>
        </div>
        
        <div className="flex gap-6 mt-6 px-4 md:px-8 text-sm">
          <div className="flex gap-1 items-center">
            <Users className="h-4 w-4 text-muted-foreground" /> 
            <span><strong>428</strong> connections</span>
          </div>
          <div className="flex gap-1 items-center">
            <Calendar className="h-4 w-4 text-muted-foreground" /> 
            <span>Joined <strong>July 2024</strong></span>
          </div>
        </div>
      </div>
      
      {/* Profile Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="posts">Posts</TabsTrigger>
          <TabsTrigger value="saved">Saved</TabsTrigger>
          <TabsTrigger value="communities">Communities</TabsTrigger>
        </TabsList>
        
        <TabsContent value="posts" className="pt-6">
          <div className="max-w-2xl space-y-4">
            {profilePosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="saved" className="pt-6">
          <div className="max-w-2xl space-y-4">
            {profilePosts
              .filter(post => post.saved)
              .map(post => (
                <PostCard key={post.id} post={post} />
              ))
            }
            {profilePosts.filter(post => post.saved).length === 0 && (
              <div className="text-center py-12">
                <Bookmark className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">No saved posts yet</h3>
                <p className="text-muted-foreground">
                  Posts you save will appear here for easy access.
                </p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="communities" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Community memberships would appear here */}
            <div className="text-center py-12 col-span-full">
              <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">Explore Communities</h3>
              <p className="text-muted-foreground mb-4">
                Join communities to connect with like-minded people.
              </p>
              <Button variant="outline" asChild>
                <a href="/community">Discover Nests</a>
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;
