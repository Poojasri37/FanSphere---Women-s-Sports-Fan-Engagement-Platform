import { cn } from "@/lib/utils";

interface MatchCardProps {
  team1: {
    name: string;
    logo?: string;
    score?: string;
  };
  team2: {
    name: string;
    logo?: string;
    score?: string;
  };
  status: "live" | "upcoming" | "completed";
  time: string;
  venue: string;
  className?: string;
}

export function MatchCard({ team1, team2, status, time, venue, className }: MatchCardProps) {
  return (
    <div className={cn(
      "bg-card rounded-xl border border-border p-5 transition-all duration-200 hover:shadow-card hover:border-primary/30",
      className
    )}>
      {/* Status Badge */}
      <div className="flex items-center justify-between mb-4">
        <span className={cn(
          "px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide",
          status === "live" && "bg-accent/10 text-accent",
          status === "upcoming" && "bg-primary/10 text-primary",
          status === "completed" && "bg-muted text-muted-foreground"
        )}>
          {status === "live" && (
            <span className="inline-block w-2 h-2 bg-accent rounded-full mr-2 animate-pulse" />
          )}
          {status}
        </span>
        <span className="text-xs text-muted-foreground">{time}</span>
      </div>

      {/* Teams */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-lg font-bold text-primary">
              {team1.name.charAt(0)}
            </div>
            <span className="font-semibold text-foreground">{team1.name}</span>
          </div>
          {team1.score && (
            <span className="font-bold text-lg text-foreground">{team1.score}</span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-lg font-bold text-muted-foreground">
              {team2.name.charAt(0)}
            </div>
            <span className="font-semibold text-foreground">{team2.name}</span>
          </div>
          {team2.score && (
            <span className="font-bold text-lg text-foreground">{team2.score}</span>
          )}
        </div>
      </div>

      {/* Venue */}
      <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border">{venue}</p>
    </div>
  );
}
