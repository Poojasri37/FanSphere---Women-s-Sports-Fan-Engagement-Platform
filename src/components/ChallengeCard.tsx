import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Check, Heart, Star, Zap } from "lucide-react";

interface ChallengeCardProps {
  title: string;
  description: string;
  points: number;
  progress?: {
    current: number;
    total: number;
  };
  isCompleted?: boolean;
  difficulty: "easy" | "medium" | "hard";
  onStart?: () => void;
  className?: string;
}

export function ChallengeCard({ 
  title, 
  description, 
  points, 
  progress, 
  isCompleted, 
  difficulty,
  onStart,
  className 
}: ChallengeCardProps) {
  const difficultyColors = {
    easy: "bg-success/10 text-success",
    medium: "bg-warning/10 text-warning",
    hard: "bg-accent/10 text-accent",
  };

  const progressPercentage = progress 
    ? (progress.current / progress.total) * 100 
    : 0;

  return (
    <div className={cn(
      "bg-card rounded-xl border border-border p-5 transition-all duration-200",
      isCompleted ? "bg-success/5 border-success/20" : "hover:shadow-card",
      className
    )}>
      <div className="flex items-start justify-between mb-3">
        <span className={cn(
          "px-2 py-1 rounded text-xs font-medium capitalize",
          difficultyColors[difficulty]
        )}>
          {difficulty}
        </span>
        <div className="flex items-center gap-1 text-gold">
          <Star className="w-4 h-4 fill-gold" />
          <span className="text-sm font-semibold">{points}</span>
        </div>
      </div>

      <h3 className="font-semibold text-foreground mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>

      {progress && !isCompleted && (
        <div className="mb-4">
          <div className="flex justify-between text-xs text-muted-foreground mb-1">
            <span>Progress</span>
            <span>{progress.current}/{progress.total}</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      )}

      {isCompleted ? (
        <div className="flex items-center gap-2 text-success">
          <Check className="w-4 h-4" />
          <span className="text-sm font-medium">Completed</span>
        </div>
      ) : (
        <Button 
          variant={progress ? "outline" : "default"} 
          size="sm" 
          className="w-full"
          onClick={onStart}
        >
          {progress ? "Continue" : "Start Challenge"}
        </Button>
      )}
    </div>
  );
}
