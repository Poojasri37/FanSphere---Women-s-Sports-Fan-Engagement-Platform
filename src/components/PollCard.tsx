import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface PollCardProps {
  question: string;
  options: {
    id: string;
    text: string;
    votes: number;
    percentage: number;
  }[];
  totalVotes: number;
  hasVoted?: boolean;
  onVote?: (optionId: string) => void;
  className?: string;
}

export function PollCard({ question, options, totalVotes, hasVoted, onVote, className }: PollCardProps) {
  return (
    <div className={cn("bg-card rounded-xl border border-border p-5", className)}>
      <h3 className="font-semibold text-foreground mb-4">{question}</h3>
      
      <div className="space-y-3">
        {options.map((option) => (
          <div key={option.id} className="relative">
            {hasVoted ? (
              <div className="relative overflow-hidden rounded-lg bg-muted p-3">
                <div 
                  className="absolute inset-y-0 left-0 bg-primary/15 transition-all duration-500"
                  style={{ width: `${option.percentage}%` }}
                />
                <div className="relative flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">{option.text}</span>
                  <span className="text-sm font-semibold text-primary">{option.percentage}%</span>
                </div>
              </div>
            ) : (
              <Button
                variant="outline"
                className="w-full justify-start text-left h-auto py-3 px-4"
                onClick={() => onVote?.(option.id)}
              >
                {option.text}
              </Button>
            )}
          </div>
        ))}
      </div>
      
      <p className="text-xs text-muted-foreground mt-4">{totalVotes.toLocaleString()} votes</p>
    </div>
  );
}
