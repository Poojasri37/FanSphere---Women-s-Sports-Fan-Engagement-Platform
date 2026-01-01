import { CommunityPost } from "@/components/CommunityPost";
import { Button } from "@/components/ui/button";
import { MessageSquare, TrendingUp, Shield, Users, Plus } from "lucide-react";

const posts = [
  {
    author: { name: "Priya Sharma", badge: "Super Fan" },
    content: "What an incredible performance by Mandhana today! That cover drive in the 15th over was pure class. She's definitely the player to watch in the upcoming World Cup! 🏏",
    timestamp: "2 hours ago",
    likes: 234,
    comments: 45,
    isLiked: true,
  },
  {
    author: { name: "Maya Chen" },
    content: "First time watching women's cricket and I'm absolutely hooked! The energy, the skill, the passion - it's all there. Any recommendations for must-watch classic matches?",
    timestamp: "4 hours ago",
    likes: 189,
    comments: 67,
  },
  {
    author: { name: "Anika Patel", badge: "Cricket Expert" },
    content: "Breaking down the India vs Australia match: Key takeaways - India's spin strategy in the middle overs was exceptional. Deepti Sharma's variations were nearly unplayable. Looking forward to the series decider!",
    timestamp: "6 hours ago",
    likes: 456,
    comments: 89,
  },
];

const chatRooms = [
  { name: "India vs Australia", members: 1245, isLive: true },
  { name: "Women's T20 World Cup", members: 3421 },
  { name: "Rising Stars Discussion", members: 892 },
  { name: "Match Predictions", members: 2156 },
];

const guidelines = [
  "Be respectful and supportive of all fans",
  "No hate speech, harassment, or discrimination",
  "Keep discussions relevant to women's sports",
  "Report inappropriate content to moderators",
  "Celebrate achievements and encourage positivity",
];

export default function CommunityPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Community</h1>
        <p className="text-muted-foreground">Connect with fans, share your thoughts, and celebrate women's sports together</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-6">
          {/* Create Post */}
          <div className="bg-card rounded-xl border border-border p-5">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                S
              </div>
              <div className="flex-1">
                <textarea 
                  placeholder="Share your thoughts with the community..."
                  className="w-full px-4 py-3 bg-muted rounded-lg text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={3}
                />
                <div className="flex justify-end mt-3">
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Post
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Posts */}
          {posts.map((post, index) => (
            <CommunityPost key={index} {...post} />
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Chat Rooms */}
          <div className="bg-card rounded-xl border border-border p-5">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">Match Chat Rooms</h3>
            </div>
            <div className="space-y-3">
              {chatRooms.map((room, index) => (
                <button 
                  key={index}
                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors text-left"
                >
                  <div className="flex items-center gap-3">
                    {room.isLive && (
                      <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    )}
                    <span className="font-medium text-foreground">{room.name}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Users className="w-3 h-3" />
                    <span>{room.members.toLocaleString()}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Trending Topics */}
          <div className="bg-card rounded-xl border border-border p-5">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">Trending</h3>
            </div>
            <div className="space-y-3">
              {["#WomenInSport", "#T20WorldCup", "#SmritiMandhana", "#CricketFans", "#SupportWomensSports"].map((tag, index) => (
                <button 
                  key={index}
                  className="block text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Community Guidelines */}
          <div className="bg-card rounded-xl border border-border p-5">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">Community Guidelines</h3>
            </div>
            <ul className="space-y-2">
              {guidelines.map((guideline, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-success mt-1">•</span>
                  {guideline}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
