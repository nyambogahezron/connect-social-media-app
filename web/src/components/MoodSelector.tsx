
import { SlidersHorizontal, Sparkles, Coffee, Zap, Lightbulb, BadgeInfo } from "lucide-react";
import { cn } from "@/lib/utils";

export interface MoodOption {
  id: string;
  name: string;
  icon: React.ReactNode;
  colorClass: string;
  bgColorClass: string;
}

interface MoodSelectorProps {
  moods: MoodOption[];
  activeMood: string;
  onChangeMood: (id: string) => void;
  className?: string;
}

const MoodSelector = ({ moods, activeMood, onChangeMood, className }: MoodSelectorProps) => {
  return (
    <div className={cn("overflow-x-auto scrollbar-hide", className)}>
      <div className="flex items-center gap-2 py-1 min-w-max">
        <button 
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-sm font-medium transition",
            activeMood === "default" 
              ? "bg-accent border-transparent" 
              : "bg-transparent hover:bg-accent/50"
          )}
          onClick={() => onChangeMood("default")}
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span>All Posts</span>
        </button>
        
        {moods.map((mood) => (
          <button 
            key={mood.id}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-sm font-medium transition",
              activeMood === mood.id 
                ? `${mood.bgColorClass} border-transparent ${mood.colorClass}` 
                : "bg-transparent hover:bg-accent/50"
            )}
            onClick={() => onChangeMood(mood.id)}
          >
            {mood.icon}
            <span>{mood.name} Mode</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export const defaultMoods: MoodOption[] = [
  {
    id: "discover",
    name: "Discover",
    icon: <Sparkles className="w-4 h-4" />,
    colorClass: "text-purple-700",
    bgColorClass: "bg-agline-softPurple"
  },
  {
    id: "chill",
    name: "Chill",
    icon: <Coffee className="w-4 h-4" />,
    colorClass: "text-blue-700",
    bgColorClass: "bg-agline-softBlue"
  },
  {
    id: "hype",
    name: "Hype",
    icon: <Zap className="w-4 h-4" />,
    colorClass: "text-orange-700",
    bgColorClass: "bg-agline-softOrange"
  },
  {
    id: "learn",
    name: "Learn",
    icon: <Lightbulb className="w-4 h-4" />,
    colorClass: "text-green-700",
    bgColorClass: "bg-agline-softGreen"
  },
  {
    id: "news",
    name: "News",
    icon: <BadgeInfo className="w-4 h-4" />,
    colorClass: "text-red-700",
    bgColorClass: "bg-agline-softPink"
  }
];

export default MoodSelector;
