import { NavItem } from "./NavItem";
import {
  Home,
  Radio,
  Trophy,
  Sparkles,
  BarChart3,
  Users,
  User,
} from "lucide-react";

const navItems = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/live-match", icon: Radio, label: "Live Match", badge: "LIVE" },
  { to: "/fan-arena", icon: Trophy, label: "Fan Arena" },
  { to: "/personalize", icon: Sparkles, label: "Personalize" },
  { to: "/insights", icon: BarChart3, label: "Insights" },
  { to: "/community", icon: Users, label: "Community" },
  { to: "/profile", icon: User, label: "Profile" },
];

export function Sidebar() {
  return (
    <aside className="w-64 bg-card border-r border-border h-screen sticky top-0 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-glow">
            <span className="text-primary-foreground font-bold text-lg">F</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">FanSphere</h1>
            <p className="text-xs text-muted-foreground">Women's Sports</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <NavItem key={item.to} {...item} />
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
            <User className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">Sarah Chen</p>
            <p className="text-xs text-muted-foreground">Cricket Fan</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
