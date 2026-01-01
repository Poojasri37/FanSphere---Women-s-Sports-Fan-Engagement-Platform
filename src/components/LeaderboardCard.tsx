import { cn } from "@/lib/utils";
import { Trophy, Medal, Award } from "lucide-react";

interface LeaderboardEntry {
  rank: number;
  name: string;
  points: number;
  avatar?: string;
  badge?: string;
}

interface LeaderboardCardProps {
  title: string;
  entries: LeaderboardEntry[];
  currentUserId?: number;
  className?: string;
}

export function LeaderboardCard({ title, entries, currentUserId, className }: LeaderboardCardProps) {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-4 h-4 text-gold" />;
      case 2:
        return <Medal className="w-4 h-4 text-muted-foreground" />;
      case 3:
        return <Award className="w-4 h-4 text-accent" />;
      default:
        return <span className="text-sm font-medium text-muted-foreground w-4 text-center">{rank}</span>;
    }
  };

  return (
    <div className={cn("bg-card rounded-xl border border-border p-5", className)}>
      <h3 className="font-semibold text-foreground mb-4">{title}</h3>
      
      <div className="space-y-3">
        {entries.map((entry) => (
          <div 
            key={entry.rank}
            className={cn(
              "flex items-center gap-3 p-3 rounded-lg transition-colors",
              currentUserId === entry.rank ? "bg-primary/5 border border-primary/20" : "hover:bg-muted"
            )}
          >
            <div className="w-6 flex justify-center">
              {getRankIcon(entry.rank)}
            </div>
            
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-medium text-muted-foreground">
              {entry.name.charAt(0)}
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{entry.name}</p>
              {entry.badge && (
                <span className="text-xs text-muted-foreground">{entry.badge}</span>
              )}
            </div>
            
            <div className="text-right">
              <p className="text-sm font-semibold text-primary">{entry.points.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">pts</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
