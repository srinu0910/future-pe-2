import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Sparkles, Wand2, FolderOpen, History, BarChart3, Settings,
  Search, Plus, TrendingUp, Eye, Heart, Share2, MoreHorizontal,
  Video, FileText, Mic, Image as ImageIcon, Zap, Bell, ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — AdGenius AI" }, { name: "description", content: "Your AI ad generation workspace, campaigns, prompts and analytics." }] }),
  component: Dashboard,
});

function Dashboard() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="absolute top-0 left-0 right-0 h-[400px] aurora-bg opacity-40 pointer-events-none" />
      <div className="grid lg:grid-cols-[260px_1fr] min-h-screen relative">
        <Sidebar />
        <main className="p-6 md:p-10 max-w-[1400px] w-full mx-auto">
          <TopBar />
          <Stats />
          <RecentGenerations />
          <BottomGrid />
        </main>
      </div>
    </div>
  );
}

function Sidebar() {
  const nav = [
    { icon: Wand2, label: "Prompt Studio", to: "/studio" },
    { icon: FolderOpen, label: "Saved Prompts", active: true },
    { icon: FileText, label: "Templates" },
    { icon: History, label: "Campaign History" },
    { icon: BarChart3, label: "Analytics" },
    { icon: TrendingUp, label: "Trending" },
  ];
  return (
    <aside className="hidden lg:flex flex-col border-r border-border/60 bg-sidebar/60 backdrop-blur-xl p-5 sticky top-0 h-screen">
      <Link to="/" className="flex items-center gap-2 mb-8">
        <div className="w-9 h-9 rounded-lg gradient-primary grid place-items-center">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <span className="font-display font-bold">AdGenius AI</span>
      </Link>

      <Button asChild className="gradient-primary text-white border-0 shadow-glow mb-6">
        <Link to="/studio"><Plus className="w-4 h-4 mr-2" /> New Generation</Link>
      </Button>

      <nav className="space-y-1 flex-1">
        {nav.map((n) => {
          const Icon = n.icon;
          const content = (
            <div className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition cursor-pointer ${n.active ? "gradient-primary text-white shadow-glow" : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"}`}>
              <Icon className="w-4 h-4" />
              <span>{n.label}</span>
            </div>
          );
          return n.to ? <Link key={n.label} to={n.to}>{content}</Link> : <div key={n.label}>{content}</div>;
        })}
      </nav>

      <div className="glass rounded-xl p-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full gradient-primary grid place-items-center text-white text-sm font-semibold">F</div>
          <div className="text-xs">
            <div className="font-medium">Future Intern</div>
            <div className="text-muted-foreground">Pro plan</div>
          </div>
          <Settings className="w-4 h-4 ml-auto text-muted-foreground" />
        </div>
      </div>
    </aside>
  );
}

function TopBar() {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-10">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold">Welcome back, <span className="gradient-text">Future Intern</span></h1>
        <p className="text-sm text-muted-foreground mt-1">Here's what your AI shipped this week.</p>
      </div>
      <div className="md:ml-auto flex gap-2">
        <div className="relative flex-1 md:w-64">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search campaigns…" className="pl-9 glass border-border/60" />
        </div>
        <Button variant="outline" size="icon" className="glass border-border/60"><Bell className="w-4 h-4" /></Button>
      </div>
    </div>
  );
}

function Stats() {
  const stats = [
    { label: "Generations", value: "248", delta: "+32%", icon: Zap },
    { label: "Active Campaigns", value: "12", delta: "+4", icon: TrendingUp },
    { label: "Avg. Hook Score", value: "91", delta: "+7", icon: Sparkles },
    { label: "Est. CTR Lift", value: "3.4x", delta: "+0.6x", icon: Eye },
  ];
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
      {stats.map((s, i) => (
        <motion.div key={s.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
          className="glass rounded-2xl p-5 glow-on-hover">
          <div className="flex items-center justify-between mb-3">
            <div className="w-9 h-9 rounded-lg gradient-primary grid place-items-center">
              <s.icon className="w-4 h-4 text-white" />
            </div>
            <span className="text-xs px-2 py-1 rounded-md bg-neon/10 text-neon">{s.delta}</span>
          </div>
          <div className="text-3xl font-bold">{s.value}</div>
          <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
        </motion.div>
      ))}
    </div>
  );
}

function RecentGenerations() {
  const items = [
    { type: "UGC Script", title: "Farmer storytelling — Monsoon edition", platform: "Instagram", score: 94, time: "2h ago", icon: Video },
    { type: "Viral Hook", title: "POV: AI predicted my entire harvest", platform: "TikTok", score: 91, time: "5h ago", icon: Sparkles },
    { type: "Reel Caption", title: "Before vs After — Smart farming 🚜", platform: "Reels", score: 88, time: "yesterday", icon: ImageIcon },
    { type: "Influencer Script", title: "30 days of Farmer AI Crop Assistant", platform: "YouTube", score: 86, time: "2d ago", icon: Mic },
  ];
  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display font-semibold text-xl">Recent generations</h2>
        <Button variant="ghost" size="sm" className="text-muted-foreground">View all <ChevronRight className="w-4 h-4 ml-1" /></Button>
      </div>
      <div className="glass rounded-2xl divide-y divide-border/40 overflow-hidden">
        {items.map((it, i) => (
          <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.04 }}
            className="flex items-center gap-4 p-4 hover:bg-secondary/30 transition group">
            <div className="w-10 h-10 rounded-lg gradient-primary grid place-items-center shrink-0">
              <it.icon className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md bg-secondary text-muted-foreground">{it.type}</span>
                <span className="text-[10px] text-muted-foreground">{it.platform}</span>
              </div>
              <div className="font-medium text-sm truncate mt-1">{it.title}</div>
            </div>
            <div className="hidden md:flex items-center gap-6 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Heart className="w-3 h-3" /> {it.score}</span>
              <span className="flex items-center gap-1"><Share2 className="w-3 h-3" /> 12</span>
              <span>{it.time}</span>
            </div>
            <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition"><MoreHorizontal className="w-4 h-4" /></Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function BottomGrid() {
  return (
    <div className="grid lg:grid-cols-3 gap-5">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
        className="glass rounded-2xl p-6 lg:col-span-2">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display font-semibold">Performance this month</h3>
          <span className="text-xs text-muted-foreground">Last 30 days</span>
        </div>
        <Chart />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="glass rounded-2xl p-6">
        <h3 className="font-display font-semibold mb-4">Trending templates</h3>
        <ul className="space-y-3">
          {["Hindi-English Reel Hook", "TikTok POV Opener", "Before/After Story", "Emotional Founder Story", "30-Day Challenge"].map((t, i) => (
            <li key={t} className="flex items-center gap-3 py-2 border-b border-border/40 last:border-0">
              <div className="w-7 h-7 rounded-md gradient-primary grid place-items-center text-[10px] text-white font-bold">{i+1}</div>
              <span className="text-sm flex-1">{t}</span>
              <span className="text-[10px] text-neon">↑ hot</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

function Chart() {
  // Hand-drawn SVG chart — billion-dollar SaaS feel
  const data = [22, 28, 24, 35, 31, 42, 38, 48, 55, 51, 62, 70, 66, 78];
  const max = Math.max(...data);
  const points = data.map((v, i) => `${(i / (data.length - 1)) * 100},${100 - (v / max) * 90}`).join(" ");
  const area = `0,100 ${points} 100,100`;
  return (
    <div className="relative h-48">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
        <defs>
          <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.65 0.28 295)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="oklch(0.65 0.28 295)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="g2" x1="0" x2="1">
            <stop offset="0%" stopColor="oklch(0.65 0.28 295)" />
            <stop offset="100%" stopColor="oklch(0.7 0.22 240)" />
          </linearGradient>
        </defs>
        <polygon points={area} fill="url(#g1)" />
        <polyline points={points} fill="none" stroke="url(#g2)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="absolute bottom-0 inset-x-0 flex justify-between text-[10px] text-muted-foreground px-1">
        {["W1","W2","W3","W4"].map(w => <span key={w}>{w}</span>)}
      </div>
    </div>
  );
}
