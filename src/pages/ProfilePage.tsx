import { BadgeDisplay } from "@/components/BadgeDisplay";
import { Button } from "@/components/ui/button";
import { 
  User, Settings, Trophy, Star, Target, Flame, Crown, Heart, 
  Award, Calendar, MapPin, Languages, Bell, Eye, LogOut 
} from "lucide-react";
import athlete1 from "@/assets/athlete-portrait-1.jpg";

const activityStats = [
  { label: "Matches Watched", value: "47" },
  { label: "Predictions Made", value: "156" },
  { label: "Correct Predictions", value: "89" },
  { label: "Community Posts", value: "23" },
  { label: "Total Points", value: "8,650" },
  { label: "Current Streak", value: "12 days" },
];

const badges = [
  { name: "First Prediction", description: "Made your first prediction", icon: <Target className="w-6 h-6" />, isEarned: true, earnedDate: "Dec 15" },
  { name: "Super Fan", description: "Engaged with 100 matches", icon: <Flame className="w-6 h-6" />, isEarned: true, earnedDate: "Dec 20" },
  { name: "Community Star", description: "Got 500 likes", icon: <Star className="w-6 h-6" />, isEarned: true, earnedDate: "Dec 28" },
  { name: "Prediction Master", description: "80% accuracy rate", icon: <Trophy className="w-6 h-6" />, isEarned: true, earnedDate: "Jan 1" },
];

const recentActivity = [
  { action: "Predicted India to win", result: "Correct! +50 pts", time: "2 hours ago", positive: true },
  { action: "Watched India vs Australia", result: "+20 pts", time: "3 hours ago", positive: true },
  { action: "Posted in Community", result: "15 likes", time: "5 hours ago", positive: true },
  { action: "Completed 'Fan Engagement' challenge", result: "+200 pts", time: "Yesterday", positive: true },
];

export default function ProfilePage() {
  return (
    <div className="p-8 max-w-5xl mx-auto animate-fade-in">
      {/* Profile Header */}
      <div className="bg-card rounded-2xl border border-border overflow-hidden mb-8">
        <div className="h-32 bg-gradient-to-r from-primary to-primary/70" />
        <div className="px-8 pb-8">
          <div className="flex flex-col md:flex-row md:items-end gap-6 -mt-12">
            <div className="w-24 h-24 rounded-2xl border-4 border-card bg-muted overflow-hidden">
              <img 
                src={athlete1} 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Sarah Chen</h1>
                  <p className="text-muted-foreground">Cricket Enthusiast • Joined December 2024</p>
                </div>
                <Button variant="outline">
                  <Settings className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Activity Stats */}
          <div className="bg-card rounded-xl border border-border p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">Fan Activity Summary</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {activityStats.map((stat, index) => (
                <div key={index} className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-xl font-bold text-foreground">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Badges */}
          <div className="bg-card rounded-xl border border-border p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">Achievements</h2>
              <span className="text-sm text-muted-foreground">{badges.filter(b => b.isEarned).length}/{badges.length} earned</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {badges.map((badge, index) => (
                <BadgeDisplay key={index} {...badge} />
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-card rounded-xl border border-border p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div>
                    <p className="font-medium text-foreground">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                  <span className={`text-sm font-medium ${activity.positive ? 'text-success' : 'text-destructive'}`}>
                    {activity.result}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Settings */}
        <div className="space-y-6">
          {/* Quick Info */}
          <div className="bg-card rounded-xl border border-border p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">Profile Info</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Mumbai, India</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>Joined December 2024</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Heart className="w-4 h-4" />
                <span>India Women, Australia Women</span>
              </div>
            </div>
          </div>

          {/* Settings */}
          <div className="bg-card rounded-xl border border-border p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">Settings</h2>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors text-left">
                <Languages className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground">Language</span>
                <span className="ml-auto text-muted-foreground text-sm">English</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors text-left">
                <Bell className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground">Notifications</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors text-left">
                <Eye className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground">Accessibility</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors text-left text-destructive">
                <LogOut className="w-4 h-4" />
                <span>Log Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
