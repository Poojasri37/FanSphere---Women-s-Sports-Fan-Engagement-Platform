import { cn } from "@/lib/utils";

interface AthleteCardProps {
  name: string;
  role: string;
  team: string;
  image: string;
  stats?: {
    label: string;
    value: string;
  }[];
  isFeatured?: boolean;
  className?: string;
}

export function AthleteCard({ name, role, team, image, stats, isFeatured, className }: AthleteCardProps) {
  return (
    <div className={cn(
      "bg-card rounded-xl border border-border overflow-hidden transition-all duration-200 hover:shadow-card-hover group",
      isFeatured && "border-primary/30",
      className
    )}>
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {isFeatured && (
          <div className="absolute top-3 left-3 px-2 py-1 bg-gold text-gold-foreground text-xs font-semibold rounded-md">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-foreground">{name}</h3>
        <p className="text-sm text-muted-foreground">{role} • {team}</p>
        
        {stats && stats.length > 0 && (
          <div className="flex gap-4 mt-3 pt-3 border-t border-border">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
                <p className="font-semibold text-foreground">{stat.value}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
