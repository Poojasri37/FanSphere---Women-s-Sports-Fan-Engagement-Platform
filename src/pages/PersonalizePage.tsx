import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const sports = [
  { id: "cricket", name: "Cricket", selected: true },
  { id: "football", name: "Football", selected: false },
  { id: "basketball", name: "Basketball", selected: false },
  { id: "tennis", name: "Tennis", selected: true },
  { id: "hockey", name: "Hockey", selected: false },
  { id: "badminton", name: "Badminton", selected: false },
];

const teams = [
  { id: "india", name: "India Women", sport: "Cricket", selected: true },
  { id: "australia", name: "Australia Women", sport: "Cricket", selected: true },
  { id: "england", name: "England Women", sport: "Cricket", selected: false },
  { id: "southafrica", name: "South Africa Women", sport: "Cricket", selected: false },
  { id: "newzealand", name: "New Zealand Women", sport: "Cricket", selected: false },
  { id: "westindies", name: "West Indies Women", sport: "Cricket", selected: false },
];

const players = [
  { id: "smriti", name: "Smriti Mandhana", team: "India", selected: true },
  { id: "ellyse", name: "Ellyse Perry", team: "Australia", selected: true },
  { id: "harmanpreet", name: "Harmanpreet Kaur", team: "India", selected: true },
  { id: "meg", name: "Meg Lanning", team: "Australia", selected: false },
  { id: "heather", name: "Heather Knight", team: "England", selected: false },
  { id: "suzie", name: "Suzie Bates", team: "New Zealand", selected: false },
];

const notificationPrefs = [
  { id: "live", label: "Live match updates", description: "Get notified when your favorite teams are playing", enabled: true },
  { id: "scores", label: "Score alerts", description: "Instant notifications for wickets and milestones", enabled: true },
  { id: "challenges", label: "Challenge reminders", description: "Don't miss out on earning points", enabled: true },
  { id: "community", label: "Community mentions", description: "When someone replies to your posts", enabled: false },
  { id: "weekly", label: "Weekly digest", description: "Summary of top moments and stats", enabled: true },
];

export default function PersonalizePage() {
  const [selectedSports, setSelectedSports] = useState(sports.filter(s => s.selected).map(s => s.id));
  const [selectedTeams, setSelectedTeams] = useState(teams.filter(t => t.selected).map(t => t.id));
  const [selectedPlayers, setSelectedPlayers] = useState(players.filter(p => p.selected).map(p => p.id));
  const [notifications, setNotifications] = useState(
    notificationPrefs.reduce((acc, pref) => ({ ...acc, [pref.id]: pref.enabled }), {} as Record<string, boolean>)
  );

  const toggleSelection = (id: string, list: string[], setList: (v: string[]) => void) => {
    setList(list.includes(id) ? list.filter(i => i !== id) : [...list, id]);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Personalize</h1>
        <p className="text-muted-foreground">Customize your FanSphere experience to see content you love</p>
      </div>

      {/* Sports */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-foreground mb-4">Favorite Sports</h2>
        <div className="flex flex-wrap gap-3">
          {sports.map((sport) => (
            <button
              key={sport.id}
              onClick={() => toggleSelection(sport.id, selectedSports, setSelectedSports)}
              className={cn(
                "px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200",
                selectedSports.includes(sport.id)
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-foreground border-border hover:border-primary/50"
              )}
            >
              {selectedSports.includes(sport.id) && <Check className="w-4 h-4 inline mr-2" />}
              {sport.name}
            </button>
          ))}
        </div>
      </section>

      {/* Teams */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-foreground mb-4">Favorite Teams</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {teams.map((team) => (
            <button
              key={team.id}
              onClick={() => toggleSelection(team.id, selectedTeams, setSelectedTeams)}
              className={cn(
                "p-4 rounded-xl border text-left transition-all duration-200",
                selectedTeams.includes(team.id)
                  ? "bg-primary/5 border-primary"
                  : "bg-card border-border hover:border-primary/30"
              )}
            >
              <div className="flex items-center gap-3">
                <div className={cn(
                  "w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold",
                  selectedTeams.includes(team.id) ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                )}>
                  {team.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-foreground">{team.name}</p>
                  <p className="text-xs text-muted-foreground">{team.sport}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Players */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-foreground mb-4">Favorite Players</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {players.map((player) => (
            <button
              key={player.id}
              onClick={() => toggleSelection(player.id, selectedPlayers, setSelectedPlayers)}
              className={cn(
                "p-4 rounded-xl border text-left transition-all duration-200 flex items-center gap-3",
                selectedPlayers.includes(player.id)
                  ? "bg-primary/5 border-primary"
                  : "bg-card border-border hover:border-primary/30"
              )}
            >
              {selectedPlayers.includes(player.id) && (
                <Star className="w-4 h-4 text-gold fill-gold" />
              )}
              <div>
                <p className="font-medium text-foreground">{player.name}</p>
                <p className="text-xs text-muted-foreground">{player.team}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Notifications */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-foreground mb-4">Notification Preferences</h2>
        <div className="bg-card rounded-xl border border-border divide-y divide-border">
          {notificationPrefs.map((pref) => (
            <div key={pref.id} className="flex items-center justify-between p-4">
              <div>
                <p className="font-medium text-foreground">{pref.label}</p>
                <p className="text-sm text-muted-foreground">{pref.description}</p>
              </div>
              <button
                onClick={() => setNotifications(prev => ({ ...prev, [pref.id]: !prev[pref.id] }))}
                className={cn(
                  "w-12 h-7 rounded-full transition-all duration-200 relative",
                  notifications[pref.id] ? "bg-primary" : "bg-muted"
                )}
              >
                <span className={cn(
                  "absolute top-1 w-5 h-5 rounded-full bg-primary-foreground shadow transition-all duration-200",
                  notifications[pref.id] ? "left-6" : "left-1"
                )} />
              </button>
            </div>
          ))}
        </div>
      </section>

      <Button size="lg" className="w-full">Save Preferences</Button>
    </div>
  );
}
