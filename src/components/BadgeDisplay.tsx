import { cn } from "@/lib/utils";

interface BadgeDisplayProps {
  name: string;
  description: string;
  icon: React.ReactNode;
  isEarned: boolean;
  earnedDate?: string;
  className?: string;
}

export function BadgeDisplay({ name, description, icon, isEarned, earnedDate, className }: BadgeDisplayProps) {
  return (
    <div className={cn(
      "flex flex-col items-center text-center p-4 rounded-xl transition-all duration-200",
      isEarned ? "bg-card border border-border" : "bg-muted/50 opacity-50",
      className
    )}>
      <div className={cn(
        "w-14 h-14 rounded-full flex items-center justify-center mb-3",
        isEarned 
          ? "bg-gradient-to-br from-gold to-accent text-gold-foreground shadow-md" 
          : "bg-muted text-muted-foreground"
      )}>
        {icon}
      </div>
      <h4 className="font-semibold text-foreground text-sm">{name}</h4>
      <p className="text-xs text-muted-foreground mt-1">{description}</p>
      {isEarned && earnedDate && (
        <p className="text-xs text-primary mt-2">Earned {earnedDate}</p>
      )}
    </div>
  );
}
