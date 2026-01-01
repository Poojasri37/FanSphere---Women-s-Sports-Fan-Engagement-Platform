import { ChallengeCard } from "@/components/ChallengeCard";
import { LeaderboardCard } from "@/components/LeaderboardCard";
import { BadgeDisplay } from "@/components/BadgeDisplay";
import { Trophy, Target, Flame, Crown, Star, Zap, Heart, Award } from "lucide-react";

const challenges = [
  {
    title: "Prediction Pro",
    description: "Make 5 correct match predictions this week",
    points: 500,
    progress: { current: 3, total: 5 },
    difficulty: "medium" as const,
  },
  {
    title: "Fan Engagement",
    description: "React to 20 live match moments",
    points: 200,
    progress: { current: 20, total: 20 },
    difficulty: "easy" as const,
    isCompleted: true,
  },
  {
    title: "Community Champion",
    description: "Start 3 discussions and get 50 likes",
    points: 750,
    difficulty: "hard" as const,
  },
  {
    title: "Match Day Hero",
    description: "Watch a full live match from start to finish",
    points: 300,
    difficulty: "easy" as const,
  },
];

const leaderboardEntries = [
  { rank: 1, name: "Priya Sharma", points: 12450, badge: "Super Fan" },
  { rank: 2, name: "Maya Chen", points: 11820, badge: "Cricket Enthusiast" },
  { rank: 3, name: "Anika Patel", points: 10975, badge: "Rising Star" },
  { rank: 4, name: "Sofia Williams", points: 9840 },
  { rank: 5, name: "Sarah Chen", points: 8650 },
  { rank: 6, name: "Emma Thompson", points: 7920 },
];

const badges = [
  { name: "First Prediction", description: "Made your first match prediction", icon: <Target className="w-6 h-6" />, isEarned: true, earnedDate: "Dec 15" },
  { name: "Super Fan", description: "Engaged with 100 matches", icon: <Flame className="w-6 h-6" />, isEarned: true, earnedDate: "Dec 20" },
  { name: "Community Star", description: "Got 500 likes on posts", icon: <Star className="w-6 h-6" />, isEarned: true, earnedDate: "Dec 28" },
  { name: "Champion", description: "Reach #1 on leaderboard", icon: <Crown className="w-6 h-6" />, isEarned: false },
  { name: "Supporter", description: "Support 50 different players", icon: <Heart className="w-6 h-6" />, isEarned: false },
  { name: "Elite Fan", description: "Earn 50,000 lifetime points", icon: <Award className="w-6 h-6" />, isEarned: false },
];

export default function FanArenaPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Fan Arena</h1>
        <p className="text-muted-foreground">Complete challenges, earn points, and climb the leaderboard!</p>
      </div>

      {/* Points Summary */}
      <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-6 mb-8 text-primary-foreground">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-primary-foreground/80 text-sm font-medium mb-1">Your Points</p>
            <p className="text-4xl font-bold">8,650</p>
          </div>
          <div className="flex gap-8">
            <div>
              <p className="text-primary-foreground/80 text-sm">This Week</p>
              <p className="text-xl font-semibold">+450</p>
            </div>
            <div>
              <p className="text-primary-foreground/80 text-sm">Rank</p>
              <p className="text-xl font-semibold">#5</p>
            </div>
            <div>
              <p className="text-primary-foreground/80 text-sm">Challenges</p>
              <p className="text-xl font-semibold">12/20</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Challenges */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold text-foreground mb-4">Active Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {challenges.map((challenge, index) => (
              <ChallengeCard key={index} {...challenge} />
            ))}
          </div>
        </div>

        {/* Leaderboard */}
        <div>
          <LeaderboardCard 
            title="Top Fans This Week" 
            entries={leaderboardEntries}
            currentUserId={5}
          />
        </div>
      </div>

      {/* Badges Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-foreground mb-4">Your Badges</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((badge, index) => (
            <BadgeDisplay key={index} {...badge} />
          ))}
        </div>
      </div>
    </div>
  );
}
