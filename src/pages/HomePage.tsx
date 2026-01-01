import { Button } from "@/components/ui/button";
import { MatchCard } from "@/components/MatchCard";
import { AthleteCard } from "@/components/AthleteCard";
import { StatCard } from "@/components/StatCard";
import { ArrowRight, Play, Users, Trophy, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import heroStadium from "@/assets/hero-stadium.jpg";
import athlete1 from "@/assets/athlete-portrait-1.jpg";
import athlete2 from "@/assets/athlete-portrait-2.jpg";

const upcomingMatches = [
  {
    team1: { name: "India Women", score: "167/4" },
    team2: { name: "Australia Women", score: "142/8" },
    status: "live" as const,
    time: "2nd Innings • Over 18.3",
    venue: "Wankhede Stadium, Mumbai",
  },
  {
    team1: { name: "England Women" },
    team2: { name: "South Africa Women" },
    status: "upcoming" as const,
    time: "Tomorrow, 2:30 PM",
    venue: "Lord's Cricket Ground, London",
  },
  {
    team1: { name: "New Zealand Women", score: "189/6" },
    team2: { name: "West Indies Women", score: "145/10" },
    status: "completed" as const,
    time: "NZ won by 44 runs",
    venue: "Basin Reserve, Wellington",
  },
];

const featuredAthletes = [
  {
    name: "Smriti Mandhana",
    role: "Opener",
    team: "India",
    image: athlete1,
    isFeatured: true,
    stats: [
      { label: "Runs", value: "3,421" },
      { label: "Avg", value: "41.2" },
    ],
  },
  {
    name: "Ellyse Perry",
    role: "All-rounder",
    team: "Australia",
    image: athlete2,
    stats: [
      { label: "Runs", value: "2,987" },
      { label: "Wickets", value: "156" },
    ],
  },
];

export default function HomePage() {
  return (
    <div className="p-8 max-w-7xl mx-auto animate-fade-in">
      {/* Hero Section */}
      <section className="relative rounded-2xl overflow-hidden mb-8">
        <div className="absolute inset-0">
          <img 
            src={heroStadium} 
            alt="Women's cricket match in stadium"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
        </div>
        
        <div className="relative z-10 p-10 md:p-16 max-w-2xl">
          <p className="text-primary-foreground/80 text-sm font-medium uppercase tracking-wider mb-2">
            Welcome back, Sarah
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
            Experience Women's Sports Like Never Before
          </h1>
          <p className="text-primary-foreground/80 text-lg mb-6">
            Join the movement. Connect with fans. Celebrate champions.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link to="/live-match">
                <Play className="w-4 h-4 mr-2" />
                Watch Live Match
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20" asChild>
              <Link to="/fan-arena">
                Explore Fan Arena
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <StatCard 
          label="Active Fans" 
          value="24.5K" 
          trend={{ value: 12, isPositive: true }}
          icon={<Users className="w-5 h-5" />}
        />
        <StatCard 
          label="Live Matches" 
          value="3" 
          icon={<Play className="w-5 h-5" />}
        />
        <StatCard 
          label="Your Points" 
          value="1,250" 
          trend={{ value: 8, isPositive: true }}
          icon={<Trophy className="w-5 h-5" />}
        />
        <StatCard 
          label="Leaderboard Rank" 
          value="#42" 
          trend={{ value: 5, isPositive: true }}
          icon={<TrendingUp className="w-5 h-5" />}
        />
      </section>

      {/* Matches Section */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-semibold text-foreground">Matches</h2>
          <Button variant="ghost" size="sm" className="text-primary" asChild>
            <Link to="/live-match">
              View All
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {upcomingMatches.map((match, index) => (
            <MatchCard key={index} {...match} />
          ))}
        </div>
      </section>

      {/* Featured Athletes */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-semibold text-foreground">Featured Athletes</h2>
          <Button variant="ghost" size="sm" className="text-primary">
            View All
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredAthletes.map((athlete, index) => (
            <AthleteCard key={index} {...athlete} />
          ))}
        </div>
      </section>
    </div>
  );
}
