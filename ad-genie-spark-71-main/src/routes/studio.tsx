import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Sparkles, Wand2, Mic, Copy, Download, Save, RefreshCw, Share2,
  Check, ChevronLeft, FileText, Zap, MessageSquare, Video, Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Route = createFileRoute("/studio")({
  head: () => ({ meta: [{ title: "Prompt Studio — AdGenius AI" }, { name: "description", content: "Generate viral hooks, UGC scripts, Reels captions and storytelling ads with AI." }] }),
  component: Studio,
});

type Mode = "hooks" | "ugc" | "reel" | "story" | "influencer";

const MODES: { id: Mode; label: string; icon: typeof Wand2; desc: string }[] = [
  { id: "hooks", label: "Viral Hooks", icon: Sparkles, desc: "Scroll-stopping openers" },
  { id: "ugc", label: "UGC Script", icon: Video, desc: "Talking-head ready scripts" },
  { id: "reel", label: "Reel Caption", icon: MessageSquare, desc: "Punchy captions + hashtags" },
  { id: "story", label: "Storytelling Ad", icon: Heart, desc: "Emotional, narrative-driven" },
  { id: "influencer", label: "Influencer Script", icon: Mic, desc: "Authentic creator voice" },
];

function Studio() {
  const [form, setForm] = useState({
    product: "Farmer AI Crop Assistant",
    category: "AgriTech",
    age: "25-45",
    pain: "Unpredictable weather destroying crops and income",
    platform: "Instagram Reels",
    tone: "Emotional",
    goal: "Sign-ups",
    duration: "15s",
    cta: "Try Free for 7 Days",
    angle: "Hope after loss",
  });

  const [mode, setMode] = useState<Mode>("hooks");
  const [outputs, setOutputs] = useState<string[]>([]);
  const [generating, setGenerating] = useState(false);

  function generate(m: Mode) {
    setMode(m);
    setGenerating(true);
    setOutputs([]);
    const samples = SAMPLES[m](form);
    // staggered typing simulation
    samples.forEach((_, i) => setTimeout(() => setOutputs((p) => [...p, samples[i]]), 400 + i * 600));
    setTimeout(() => setGenerating(false), 400 + samples.length * 600);
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="absolute inset-0 aurora-bg opacity-30 pointer-events-none" />
      <div className="relative container mx-auto px-4 py-8 max-w-7xl">
        <header className="flex items-center justify-between mb-8">
          <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
            <ChevronLeft className="w-4 h-4" /> Back to home
          </Link>
          <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-foreground">Open Dashboard →</Link>
        </header>

        <div className="mb-10">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Prompt Studio</span>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold">Design your <span className="gradient-text">next viral ad</span></h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">Describe your product, pick a format, and the AI will write platform-ready ad copy in seconds.</p>
        </div>

        <div className="grid lg:grid-cols-[420px_1fr] gap-6">
          <FormPanel form={form} setForm={setForm} />
          <div className="space-y-6">
            <ModePanel mode={mode} onPick={generate} generating={generating} />
            <OutputPanel mode={mode} outputs={outputs} generating={generating} onRegen={() => generate(mode)} />
          </div>
        </div>
      </div>
    </div>
  );
}

function FormPanel({ form, setForm }: { form: any; setForm: (f: any) => void }) {
  const set = (k: string) => (v: string) => setForm({ ...form, [k]: v });
  return (
    <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
      className="glass rounded-2xl p-6 h-fit sticky top-6">
      <div className="flex items-center gap-2 mb-5">
        <Wand2 className="w-4 h-4 text-primary" />
        <h2 className="font-display font-semibold">Brief</h2>
      </div>
      <div className="space-y-4">
        <Field label="Product name">
          <Input value={form.product} onChange={(e) => set("product")(e.target.value)} className="bg-background/40" />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Category"><Input value={form.category} onChange={(e) => set("category")(e.target.value)} className="bg-background/40" /></Field>
          <Field label="Audience age"><Input value={form.age} onChange={(e) => set("age")(e.target.value)} className="bg-background/40" /></Field>
        </div>
        <Field label="Pain points">
          <Textarea rows={3} value={form.pain} onChange={(e) => set("pain")(e.target.value)} className="bg-background/40 resize-none" />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Platform">
            <Select value={form.platform} onValueChange={set("platform")}>
              <SelectTrigger className="bg-background/40"><SelectValue /></SelectTrigger>
              <SelectContent>{["Instagram Reels","TikTok","YouTube Shorts","Meta Ads","LinkedIn"].map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
            </Select>
          </Field>
          <Field label="Tone">
            <Select value={form.tone} onValueChange={set("tone")}>
              <SelectTrigger className="bg-background/40"><SelectValue /></SelectTrigger>
              <SelectContent>{["Emotional","Witty","Bold","Friendly","Provocative"].map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
            </Select>
          </Field>
          <Field label="Goal">
            <Select value={form.goal} onValueChange={set("goal")}>
              <SelectTrigger className="bg-background/40"><SelectValue /></SelectTrigger>
              <SelectContent>{["Sign-ups","Sales","App Install","Awareness","Lead-gen"].map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
            </Select>
          </Field>
          <Field label="Duration">
            <Select value={form.duration} onValueChange={set("duration")}>
              <SelectTrigger className="bg-background/40"><SelectValue /></SelectTrigger>
              <SelectContent>{["7s","15s","30s","60s"].map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
            </Select>
          </Field>
        </div>
        <Field label="CTA"><Input value={form.cta} onChange={(e) => set("cta")(e.target.value)} className="bg-background/40" /></Field>
        <Field label="Emotional angle"><Input value={form.angle} onChange={(e) => set("angle")(e.target.value)} className="bg-background/40" /></Field>

        <Button variant="outline" className="w-full glass border-border/60">
          <Mic className="w-4 h-4 mr-2" /> Voice input
        </Button>
      </div>
    </motion.div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</Label>
      {children}
    </div>
  );
}

function ModePanel({ mode, onPick, generating }: { mode: Mode; onPick: (m: Mode) => void; generating: boolean }) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
      className="glass rounded-2xl p-5">
      <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Generate</div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">
        {MODES.map((m) => {
          const Icon = m.icon;
          const active = mode === m.id;
          return (
            <button key={m.id} onClick={() => onPick(m.id)} disabled={generating}
              className={`group relative text-left rounded-xl p-3 border transition-all ${active ? "border-primary/60 bg-primary/10 shadow-glow" : "border-border/60 hover:border-primary/40 hover:bg-secondary/50"}`}>
              <Icon className={`w-4 h-4 mb-2 ${active ? "text-primary" : "text-muted-foreground"}`} />
              <div className="text-xs font-medium">{m.label}</div>
              <div className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{m.desc}</div>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}

function OutputPanel({ mode, outputs, generating, onRegen }: { mode: Mode; outputs: string[]; generating: boolean; onRegen: () => void }) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
      className="glass rounded-2xl p-6 min-h-[480px]">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-primary" />
          <h3 className="font-display font-semibold">{MODES.find(m => m.id === mode)?.label} — AI Output</h3>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="glass" onClick={onRegen} disabled={generating}>
            <RefreshCw className={`w-3.5 h-3.5 mr-1.5 ${generating ? "animate-spin" : ""}`} /> Regenerate
          </Button>
          <Button variant="outline" size="sm" className="glass"><Save className="w-3.5 h-3.5 mr-1.5" /> Save</Button>
          <Button size="sm" className="gradient-primary text-white border-0"><Download className="w-3.5 h-3.5 mr-1.5" /> Export PDF</Button>
        </div>
      </div>

      {outputs.length === 0 && !generating && (
        <div className="text-center py-16 text-muted-foreground">
          <div className="w-14 h-14 rounded-2xl gradient-primary opacity-30 grid place-items-center mx-auto mb-4">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <p className="text-sm">Pick a format above to generate ad copy.</p>
        </div>
      )}

      <div className="space-y-3">
        <AnimatePresence>
          {outputs.map((text, i) => (
            <OutputCard key={`${mode}-${i}-${text.slice(0,20)}`} text={text} index={i} />
          ))}
        </AnimatePresence>
        {generating && <SkeletonCard />}
      </div>
    </motion.div>
  );
}

function OutputCard({ text, index }: { text: string; index: number }) {
  const [typed, setTyped] = useState("");
  const [copied, setCopied] = useState(false);
  const [edit, setEdit] = useState(false);
  const [val, setVal] = useState(text);
  const indexRef = useRef(0);

  useEffect(() => {
    indexRef.current = 0;
    setTyped("");
    const id = setInterval(() => {
      indexRef.current += 2;
      setTyped(text.slice(0, indexRef.current));
      if (indexRef.current >= text.length) clearInterval(id);
    }, 15);
    return () => clearInterval(id);
  }, [text]);

  const copy = () => { navigator.clipboard.writeText(val); setCopied(true); setTimeout(() => setCopied(false), 1500); };

  return (
    <motion.div layout initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
      className="rounded-xl border border-border/60 bg-card/60 p-5 group">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-md gradient-primary text-white">
          Variant {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition">
          <Button variant="ghost" size="icon" onClick={() => setEdit(!edit)}><FileText className="w-3.5 h-3.5" /></Button>
          <Button variant="ghost" size="icon"><Share2 className="w-3.5 h-3.5" /></Button>
          <Button variant="ghost" size="icon" onClick={copy}>
            {copied ? <Check className="w-3.5 h-3.5 text-neon" /> : <Copy className="w-3.5 h-3.5" />}
          </Button>
        </div>
      </div>
      {edit ? (
        <Textarea rows={3} value={val} onChange={(e) => setVal(e.target.value)} className="bg-background/40 resize-none" />
      ) : (
        <p className="text-sm leading-relaxed">
          {typed}{typed.length < text.length && <span className="caret" />}
        </p>
      )}
      <div className="mt-4 pt-3 border-t border-border/40 flex items-center gap-4 text-[10px] text-muted-foreground">
        <span className="text-primary">Hook score {88 + index}</span>
        <span className="text-neon">CTR +{180 + index * 22}%</span>
        <span className="ml-auto">Optimized for Reels • 15s</span>
      </div>
    </motion.div>
  );
}

function SkeletonCard() {
  return (
    <div className="rounded-xl border border-border/60 bg-card/60 p-5">
      <div className="h-3 w-20 rounded animate-shimmer mb-3" style={{ background: "var(--muted)" }} />
      <div className="space-y-2">
        <div className="h-3 w-full rounded animate-shimmer" style={{ background: "var(--muted)" }} />
        <div className="h-3 w-4/5 rounded animate-shimmer" style={{ background: "var(--muted)" }} />
        <div className="h-3 w-3/5 rounded animate-shimmer" style={{ background: "var(--muted)" }} />
      </div>
    </div>
  );
}

// ---------- Demo content generator ----------
const SAMPLES: Record<Mode, (f: any) => string[]> = {
  hooks: (f) => [
    `POV: ${f.product} just predicted next week's rainfall and your ${f.category.toLowerCase()} workflow will never be the same.`,
    `My grandfather lost his entire crop to one bad storm. Today, AI told me 6 days in advance — and I saved everything.`,
    `Stop scrolling if you're tired of guessing the weather. ${f.product} does the math so you don't lose another season.`,
    `What if ${f.age}-year-olds in villages had the same AI tools as Wall Street? Spoiler: now they do.`,
  ],
  ugc: (f) => [
    `[Camera on, face close, soft morning light]\n"Three months ago I was about to sell this farm. My father bought it in 1992. I downloaded ${f.product} on a Tuesday — I'm telling you, by Friday everything changed. Watch."\n[Cut: phone screen showing forecast]\n"${f.cta}. Link in bio. This isn't a sponsored video. This is my life."`,
    `[B-roll: hands in soil]\n"They told me AI was for cities. For coders. For other people."\n[Cut to phone]\n"Then I tried this. ${f.product}. Free. Works in my language."\n[Show yield numbers]\n"This is what 30 days looks like. ${f.cta}."`,
  ],
  reel: (f) => [
    `📍 saving every farmer i know\n${f.product} predicted the storm. we moved the harvest 48 hours early. zero loss.\n${f.cta} 🌾\n#farmtok #agritech #ai #${f.platform.replace(/\s+/g, "").toLowerCase()}`,
    `bro really used AI for his crops 😭\nand now he's outperforming the whole district\nlink in bio • ${f.cta}\n#fyp #farmer #aiforgood #futureoffarming`,
  ],
  story: (f) => [
    `In 2019, my father walked into a field he could no longer afford. The rain didn't come. The bank did.\n\nFor years, I tried to find a way back to that land.\n\nLast season, I tried ${f.product}. It was free. It spoke my language. It told me when to plant, when to wait, when the storm was coming.\n\nThis season, my father walked back into that same field. The rain came on time. The harvest doubled.\n\nFor every farmer reading this: ${f.cta}. The next season is yours.`,
  ],
  influencer: (f) => [
    `Okay you guys, day 28 of trying ${f.product} on my family's farm and I genuinely cannot believe what's happening.\n\nMy uncle — who doesn't trust apps — actually used it. Twice. Without me showing him.\n\nThe AI told us a heatwave was coming 5 days early. We shifted irrigation. Our tomato yield is up 38% compared to last year. Same soil. Same seeds.\n\nNot sponsored. Just real. ${f.cta} — and tag me when you try it. I want to see your before/after.`,
  ],
};
