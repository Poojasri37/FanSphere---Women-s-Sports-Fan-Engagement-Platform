import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PollCard } from "@/components/PollCard";
import { Heart, ThumbsUp, Zap, Star, MessageCircle, Share2 } from "lucide-react";
import heroStadium from "@/assets/hero-stadium.jpg";

const reactionButtons = [
  { icon: ThumbsUp, label: "Cheer", count: 2453 },
  { icon: Heart, label: "Love", count: 1847 },
  { icon: Zap, label: "Exciting", count: 3241 },
  { icon: Star, label: "MVP", count: 892 },
];

const matchEvents = [
  { time: "18.3", event: "FOUR! Smriti Mandhana drives through covers", type: "boundary" },
  { time: "18.1", event: "Dot ball, good length delivery", type: "dot" },
  { time: "17.6", event: "SIX! Harmanpreet launches it over long-on!", type: "six" },
  { time: "17.4", event: "Single taken, quick running between wickets", type: "run" },
  { time: "17.2", event: "WICKET! McGrath gets Perry caught at slip", type: "wicket" },
];

export default function LiveMatchPage() {
  const [selectedReaction, setSelectedReaction] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState(false);

  const pollOptions = [
    { id: "1", text: "Smriti Mandhana", votes: 4521, percentage: 45 },
    { id: "2", text: "Harmanpreet Kaur", votes: 3287, percentage: 33 },
    { id: "3", text: "Deepti Sharma", votes: 1512, percentage: 15 },
    { id: "4", text: "Shafali Verma", votes: 680, percentage: 7 },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto animate-fade-in">
      {/* Live Match Header */}
      <div className="relative rounded-2xl overflow-hidden mb-6">
        <div className="absolute inset-0">
          <img 
            src={heroStadium} 
            alt="Live match"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/60 to-foreground/30" />
        </div>
        
        <div className="relative z-10 p-8">
          {/* Live Badge */}
          <div className="flex items-center gap-2 mb-6">
            <span className="flex items-center gap-2 px-3 py-1 bg-accent rounded-full text-accent-foreground text-sm font-semibold">
              <span className="w-2 h-2 bg-accent-foreground rounded-full animate-pulse" />
              LIVE
            </span>
            <span className="text-primary-foreground/80 text-sm">Women's T20 International</span>
          </div>

          {/* Scoreboard */}
          <div className="flex items-center justify-between max-w-2xl">
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-primary-foreground/10 backdrop-blur flex items-center justify-center mb-2">
                <span className="text-2xl font-bold text-primary-foreground">IND</span>
              </div>
              <p className="text-primary-foreground font-medium">India Women</p>
            </div>
            
            <div className="text-center px-8">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-1">
                167/4
              </div>
              <p className="text-primary-foreground/70 text-sm">Overs: 18.3/20</p>
              <p className="text-accent text-sm font-medium mt-2">Need 26 runs from 9 balls</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-primary-foreground/10 backdrop-blur flex items-center justify-center mb-2">
                <span className="text-2xl font-bold text-primary-foreground">AUS</span>
              </div>
              <p className="text-primary-foreground font-medium">Australia Women</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Match Events */}
        <div className="lg:col-span-2 space-y-6">
          {/* Reactions */}
          <div className="bg-card rounded-xl border border-border p-5">
            <h3 className="font-semibold text-foreground mb-4">Show Your Support</h3>
            <div className="flex flex-wrap gap-3">
              {reactionButtons.map((reaction) => (
                <Button
                  key={reaction.label}
                  variant={selectedReaction === reaction.label ? "default" : "reaction"}
                  size="lg"
                  className="flex-1 min-w-[120px]"
                  onClick={() => setSelectedReaction(reaction.label)}
                >
                  <reaction.icon className="w-5 h-5 mr-2" />
                  <span>{reaction.label}</span>
                  <span className="ml-2 text-xs opacity-70">{reaction.count.toLocaleString()}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Ball-by-Ball */}
          <div className="bg-card rounded-xl border border-border p-5">
            <h3 className="font-semibold text-foreground mb-4">Ball-by-Ball</h3>
            <div className="space-y-3">
              {matchEvents.map((event, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-3 p-3 rounded-lg ${
                    event.type === "six" || event.type === "boundary" 
                      ? "bg-success/5 border border-success/20" 
                      : event.type === "wicket" 
                      ? "bg-destructive/5 border border-destructive/20"
                      : "bg-muted/50"
                  }`}
                >
                  <span className="text-xs font-mono text-muted-foreground w-10">{event.time}</span>
                  <span className={`text-sm ${
                    event.type === "six" || event.type === "boundary" 
                      ? "text-success font-medium" 
                      : event.type === "wicket"
                      ? "text-destructive font-medium"
                      : "text-foreground"
                  }`}>
                    {event.event}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Polls & Predictions */}
        <div className="space-y-6">
          <PollCard
            question="Who will be Player of the Match?"
            options={pollOptions}
            totalVotes={10000}
            hasVoted={hasVoted}
            onVote={() => setHasVoted(true)}
          />

          {/* Prediction Card */}
          <div className="bg-card rounded-xl border border-border p-5">
            <h3 className="font-semibold text-foreground mb-2">Quick Prediction</h3>
            <p className="text-sm text-muted-foreground mb-4">Who will hit the next boundary?</p>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm">Mandhana</Button>
              <Button variant="outline" size="sm">Kaur</Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              <Star className="w-3 h-3 inline mr-1 text-gold" />
              Earn 50 points for correct prediction!
            </p>
          </div>

          {/* Match Chat */}
          <div className="bg-card rounded-xl border border-border p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground">Match Chat</h3>
              <span className="text-xs text-muted-foreground">1.2K fans online</span>
            </div>
            <div className="space-y-3 mb-4 max-h-48 overflow-y-auto">
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium text-primary">R</div>
                <div>
                  <p className="text-xs font-medium text-foreground">Riya</p>
                  <p className="text-sm text-muted-foreground">What a match! 🔥</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-xs font-medium text-accent">M</div>
                <div>
                  <p className="text-xs font-medium text-foreground">Maya</p>
                  <p className="text-sm text-muted-foreground">Mandhana is on fire today!</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Send a message..."
                className="flex-1 px-3 py-2 bg-muted rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="icon" variant="default">
                <MessageCircle className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
