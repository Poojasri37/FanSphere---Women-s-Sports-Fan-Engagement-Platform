import { cn } from "@/lib/utils";
import { MessageCircle, Heart, Share2 } from "lucide-react";

interface CommunityPostProps {
  author: {
    name: string;
    avatar?: string;
    badge?: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  isLiked?: boolean;
  className?: string;
}

export function CommunityPost({ author, content, timestamp, likes, comments, isLiked, className }: CommunityPostProps) {
  return (
    <div className={cn("bg-card rounded-xl border border-border p-5", className)}>
      {/* Author */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-medium text-muted-foreground">
          {author.avatar ? (
            <img src={author.avatar} alt={author.name} className="w-full h-full rounded-full object-cover" />
          ) : (
            author.name.charAt(0)
          )}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-foreground">{author.name}</span>
            {author.badge && (
              <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                {author.badge}
              </span>
            )}
          </div>
          <span className="text-xs text-muted-foreground">{timestamp}</span>
        </div>
      </div>

      {/* Content */}
      <p className="text-foreground leading-relaxed mb-4">{content}</p>

      {/* Actions */}
      <div className="flex items-center gap-6 pt-4 border-t border-border">
        <button className={cn(
          "flex items-center gap-2 text-sm transition-colors",
          isLiked ? "text-accent" : "text-muted-foreground hover:text-foreground"
        )}>
          <Heart className={cn("w-4 h-4", isLiked && "fill-accent")} />
          <span>{likes}</span>
        </button>
        <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <MessageCircle className="w-4 h-4" />
          <span>{comments}</span>
        </button>
        <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors ml-auto">
          <Share2 className="w-4 h-4" />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
}
