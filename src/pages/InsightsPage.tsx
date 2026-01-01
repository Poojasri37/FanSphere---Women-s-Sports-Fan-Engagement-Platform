import { StatCard } from "@/components/StatCard";
import { BarChart3, TrendingUp, Target, Award, Users, Zap } from "lucide-react";

const playerStats = [
  { name: "Smriti Mandhana", team: "India", runs: 892, avg: 48.2, sr: 134.5, matches: 18 },
  { name: "Ellyse Perry", team: "Australia", runs: 756, avg: 42.0, sr: 118.7, matches: 16 },
  { name: "Harmanpreet Kaur", team: "India", runs: 684, avg: 38.0, sr: 142.1, matches: 18 },
  { name: "Meg Lanning", team: "Australia", runs: 621, avg: 44.4, sr: 125.3, matches: 14 },
];

const teamStats = [
  { team: "India", wins: 14, losses: 4, nrr: "+1.24", form: ["W", "W", "L", "W", "W"] },
  { team: "Australia", wins: 13, losses: 5, nrr: "+0.98", form: ["W", "L", "W", "W", "W"] },
  { team: "England", wins: 11, losses: 7, nrr: "+0.45", form: ["L", "W", "W", "L", "W"] },
  { team: "South Africa", wins: 9, losses: 9, nrr: "-0.12", form: ["W", "L", "L", "W", "L"] },
];

const insights = [
  {
    title: "Mandhana's Power Surge",
    description: "Smriti Mandhana has scored 340 runs in powerplay overs this season, the most by any player.",
    icon: <Zap className="w-5 h-5" />,
    color: "primary",
  },
  {
    title: "India's Home Dominance",
    description: "India Women have won 8 consecutive T20Is at home venues, their longest winning streak.",
    icon: <Award className="w-5 h-5" />,
    color: "gold",
  },
  {
    title: "Rising Star Alert",
    description: "Shafali Verma's strike rate of 156.4 is the highest among openers with 300+ runs.",
    icon: <TrendingUp className="w-5 h-5" />,
    color: "success",
  },
];

export default function InsightsPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Insights</h1>
        <p className="text-muted-foreground">AI-powered match insights and player performance highlights</p>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <StatCard label="Matches Analyzed" value="156" icon={<BarChart3 className="w-5 h-5" />} />
        <StatCard label="Players Tracked" value="248" icon={<Users className="w-5 h-5" />} />
        <StatCard label="Predictions Made" value="12.4K" icon={<Target className="w-5 h-5" />} />
        <StatCard label="Accuracy Rate" value="78%" trend={{ value: 3, isPositive: true }} icon={<TrendingUp className="w-5 h-5" />} />
      </div>

      {/* AI Insights */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-4">AI Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {insights.map((insight, index) => (
            <div key={index} className="bg-card rounded-xl border border-border p-5 hover:shadow-card transition-all duration-200">
              <div className={`w-10 h-10 rounded-lg bg-${insight.color}/10 flex items-center justify-center text-${insight.color} mb-4`}>
                {insight.icon}
              </div>
              <h3 className="font-semibold text-foreground mb-2">{insight.title}</h3>
              <p className="text-sm text-muted-foreground">{insight.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Player Leaderboard */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-4">Top Performers - T20I 2025</h2>
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Player</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Team</th>
                  <th className="text-right px-6 py-4 text-sm font-medium text-muted-foreground">Matches</th>
                  <th className="text-right px-6 py-4 text-sm font-medium text-muted-foreground">Runs</th>
                  <th className="text-right px-6 py-4 text-sm font-medium text-muted-foreground">Average</th>
                  <th className="text-right px-6 py-4 text-sm font-medium text-muted-foreground">Strike Rate</th>
                </tr>
              </thead>
              <tbody>
                {playerStats.map((player, index) => (
                  <tr key={index} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                          {index + 1}
                        </div>
                        <span className="font-medium text-foreground">{player.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{player.team}</td>
                    <td className="px-6 py-4 text-right text-foreground">{player.matches}</td>
                    <td className="px-6 py-4 text-right font-semibold text-foreground">{player.runs}</td>
                    <td className="px-6 py-4 text-right text-foreground">{player.avg}</td>
                    <td className="px-6 py-4 text-right text-primary font-medium">{player.sr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Team Standings */}
      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">Team Standings</h2>
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Team</th>
                  <th className="text-right px-6 py-4 text-sm font-medium text-muted-foreground">Wins</th>
                  <th className="text-right px-6 py-4 text-sm font-medium text-muted-foreground">Losses</th>
                  <th className="text-right px-6 py-4 text-sm font-medium text-muted-foreground">NRR</th>
                  <th className="text-center px-6 py-4 text-sm font-medium text-muted-foreground">Recent Form</th>
                </tr>
              </thead>
              <tbody>
                {teamStats.map((team, index) => (
                  <tr key={index} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-lg font-bold text-muted-foreground">
                          {team.team.charAt(0)}
                        </div>
                        <span className="font-medium text-foreground">{team.team} Women</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right text-success font-medium">{team.wins}</td>
                    <td className="px-6 py-4 text-right text-destructive">{team.losses}</td>
                    <td className="px-6 py-4 text-right text-foreground">{team.nrr}</td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-1">
                        {team.form.map((result, i) => (
                          <span 
                            key={i}
                            className={`w-6 h-6 rounded text-xs font-semibold flex items-center justify-center ${
                              result === "W" ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"
                            }`}
                          >
                            {result}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
