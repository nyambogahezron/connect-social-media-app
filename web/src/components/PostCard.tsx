
import { Button } from "@/components/ui/button";
import { 
  MessageCircle, 
  Share2,
  Bookmark
} from "lucide-react";

interface Reaction {
  name: string;
  count: number;
  colorClass: string;
  active?: boolean;
}

export interface Post {
  id: string;
  author: {
    name: string;
    avatar: string;
    role?: string;
  };
  timeAgo: string;
  content: string;
  image?: string;
  reactions: Reaction[];
  comments: number;
  shares: number;
  saved?: boolean;
  moodLabel?: string;
  moodColor?: string;
}

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="bg-white dark:bg-agline-dark/80 rounded-xl shadow-sm border overflow-hidden">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div 
              className="h-10 w-10 rounded-full flex items-center justify-center text-white font-medium"
              style={{ 
                background: post.author.avatar.startsWith('#') 
                  ? post.author.avatar 
                  : `url(${post.author.avatar}) center/cover`
              }}
            >
              {post.author.avatar.startsWith('#') && post.author.name.charAt(0)}
            </div>
            <div>
              <p className="font-medium">{post.author.name}</p>
              <p className="text-xs text-muted-foreground">
                {post.author.role && `${post.author.role} • `}{post.timeAgo}
              </p>
            </div>
          </div>
          
          {post.moodLabel && (
            <div className="flex gap-2">
              <span 
                className={`px-2 py-1 text-xs rounded-full ${post.moodColor || 'bg-agline-softPurple'}`}
              >
                {post.moodLabel}
              </span>
            </div>
          )}
        </div>
        
        <div className="mb-4">
          <p className="text-sm mb-3">{post.content}</p>
          {post.image && (
            <div className="rounded-lg overflow-hidden">
              <img 
                src={post.image} 
                alt="Post content" 
                className="w-full object-cover"
              />
            </div>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2">
          {post.reactions.map((reaction, index) => (
            <Button 
              key={index}
              variant={reaction.active ? "default" : "outline"} 
              size="sm" 
              className={`gap-1 text-xs ${reaction.active ? reaction.colorClass : ''}`}
            >
              <span className={reaction.active ? "" : reaction.colorClass}>
                {reaction.count}
              </span> 
              {reaction.name}
            </Button>
          ))}
        </div>
        
        <div className="flex justify-between mt-4 pt-4 border-t">
          <Button variant="ghost" size="sm" className="text-xs gap-1">
            <MessageCircle className="h-4 w-4" /> {post.comments} Comments
          </Button>
          
          <Button variant="ghost" size="sm" className="text-xs gap-1">
            <Share2 className="h-4 w-4" /> {post.shares} Shares
          </Button>
          
          <Button variant="ghost" size="sm" className="text-xs gap-1">
            <Bookmark className={`h-4 w-4 ${post.saved ? "fill-current" : ""}`} /> 
            {post.saved ? "Saved" : "Save"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
