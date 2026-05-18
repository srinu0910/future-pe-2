import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Sparkles, Wand2, Zap, Rocket, Brain, MessageSquare, Play,
  ArrowRight, Check, Star, Quote, ChevronDown, TrendingUp,
  Video, Mic, FileText, Target, Globe, Shield,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AdGenius AI — Create Viral Ads in Seconds" },
      { name: "description", content: "Generate UGC ads, viral hooks, Instagram Reels and TikTok scripts with AI-powered prompt engineering." },
      { property: "og:title", content: "AdGenius AI — Viral Ads in Seconds" },
      { property: "og:description", content: "AI co-pilot for UGC ads, hooks, Reels, and TikTok scripts." },
    ],
  }),
  component: LandingPage,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <Navbar />
      <Hero />
      <Brands />
      <Features />
      <Workflow />
      <DemoShowcase />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative pt-40 pb-32 px-4">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-primary/30 blur-[120px] animate-blob" />
      <div className="absolute top-40 -right-20 w-[500px] h-[500px] rounded-full bg-accent/30 blur-[120px] animate-blob" style={{ animationDelay: "3s" }} />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-violet-glow/20 blur-[120px] animate-blob" style={{ animationDelay: "6s" }} />

      <div className="container mx-auto max-w-6xl relative">
        <motion.div {...fadeUp} className="flex justify-center mb-8">
          <div className="glass px-4 py-1.5 rounded-full flex items-center gap-2 text-xs">
            <span className="w-2 h-2 rounded-full bg-neon animate-pulse-ring" />
            <span className="text-muted-foreground">Now with Prompt Engineering 2.0</span>
            <ArrowRight className="w-3 h-3" />
          </div>
        </motion.div>

        <motion.h1 {...fadeUp} transition={{ duration: 0.7, delay: 0.05 }}
          className="text-center text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]">
          AI That Creates <br />
          <span className="gradient-text">Viral Ads</span> in Seconds
        </motion.h1>

        <motion.p {...fadeUp} transition={{ duration: 0.7, delay: 0.15 }}
          className="text-center mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Generate high-converting UGC ads, hooks, and social media campaigns using
          advanced prompt engineering. Built for marketers who ship.
        </motion.p>

        <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="gradient-primary text-white border-0 shadow-glow text-base h-12 px-6">
            <Link to="/studio">
              <Sparkles className="w-4 h-4 mr-2" /> Start Generating
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 px-6 glass border-border/60">
            <a href="#workflow">
              <Play className="w-4 h-4 mr-2" /> Watch Demo
            </a>
          </Button>
        </motion.div>

        <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 relative max-w-5xl mx-auto">
          <div className="absolute inset-0 gradient-primary blur-3xl opacity-30 rounded-3xl" />
          <div className="relative glass rounded-3xl p-2 shadow-elegant">
            <div className="rounded-2xl bg-background/80 overflow-hidden border border-border/60">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border/60">
                <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-chart-4/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-neon/60" />
                <span className="ml-3 text-xs text-muted-foreground">adgenius.ai / studio</span>
              </div>
              <div className="grid md:grid-cols-[260px_1fr]">
                <div className="hidden md:flex flex-col gap-1 p-4 border-r border-border/60">
                  {[
                    [Wand2, "Prompt Studio", true],
                    [Video, "UGC Scripts"],
                    [Sparkles, "Viral Hooks"],
                    [TrendingUp, "Trending"],
                    [FileText, "Saved Prompts"],
                  ].map(([Icon, label, active], i) => {
                    const I = Icon as typeof Wand2;
                    return (
                      <div key={i} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${active ? "gradient-primary text-white" : "text-muted-foreground"}`}>
                        <I className="w-4 h-4" />
                        <span>{label as string}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="p-6 space-y-4">
                  <div className="text-xs text-muted-foreground">Product</div>
                  <div className="glass rounded-xl px-4 py-3 text-sm">Farmer AI Crop Assistant</div>
                  <div className="flex flex-wrap gap-2">
                    {["Instagram Reels", "Emotional", "Hindi-English", "15s"].map((t) => (
                      <span key={t} className="text-xs px-3 py-1 rounded-full glass">{t}</span>
                    ))}
                  </div>
                  <div className="mt-4 rounded-xl p-4 border border-border/60 bg-card/60">
                    <div className="text-xs text-primary mb-2">Generated Hook</div>
                    <p className="text-sm">
                      "My grandfather lost his entire crop to one bad storm. Today, my AI told me 6 days in advance — and I saved everything."
                      <span className="caret" />
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[10px] px-2 py-1 rounded-md bg-neon/10 text-neon">CTR +312%</span>
                    <span className="text-[10px] px-2 py-1 rounded-md bg-primary/10 text-primary">Hook score 94</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Brands() {
  const brands = ["JASPER", "COPY.AI", "NOTION", "LINEAR", "PERPLEXITY", "VERCEL", "FRAMER"];
  return (
    <section className="py-16 border-y border-border/60">
      <div className="container mx-auto px-4">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
          Trusted by teams shipping at billion-dollar pace
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-60">
          {brands.map((b) => (
            <span key={b} className="font-display font-bold text-xl tracking-widest text-muted-foreground hover:text-foreground transition">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    { icon: Brain, title: "Prompt Engineering Core", desc: "Multi-layer prompts crafted by ad creatives, optimized for each platform's algorithm." },
    { icon: Video, title: "UGC Scripts in 60s", desc: "Talking-head, voice-over, and B-roll ready scripts that feel like real creators." },
    { icon: TrendingUp, title: "Viral Hooks Engine", desc: "Scroll-stopping openers scored against millions of high-performing posts." },
    { icon: Globe, title: "20+ Languages", desc: "Local-tongue ad copies — Hindi-English mix, Spanish, Tagalog, Arabic, and more." },
    { icon: Target, title: "Audience Targeting", desc: "Pain-point aware copy tailored to age, tone, and emotional angle." },
    { icon: Shield, title: "Brand Safety", desc: "Built-in policy checker for Meta, TikTok, and Google Ads compliance." },
  ];
  return (
    <section className="py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Features</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">Everything you need to <span className="gradient-text">go viral</span></h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((f, i) => (
            <motion.div
              key={f.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative glass rounded-2xl p-6 glow-on-hover"
            >
              <div className="w-11 h-11 rounded-xl gradient-primary grid place-items-center mb-4 shadow-glow">
                <f.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Workflow() {
  const steps = [
    { n: "01", icon: FileText, title: "Describe your product", desc: "Drop in product details, audience, tone, and goal." },
    { n: "02", icon: Brain, title: "Prompt engine processes", desc: "Layered prompts run through our advertising LLM stack." },
    { n: "03", icon: Wand2, title: "Choose your format", desc: "Hooks, UGC, Reels, storytelling, influencer scripts." },
    { n: "04", icon: Rocket, title: "Ship & iterate", desc: "Copy, edit, regenerate, A/B and export to your ad tool." },
  ];
  return (
    <section id="workflow" className="py-32 px-4 relative">
      <div className="absolute inset-0 aurora-bg opacity-40" />
      <div className="container mx-auto max-w-6xl relative">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">AI Workflow</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">From idea to viral in <span className="gradient-text">4 steps</span></h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <motion.div key={s.n} {...fadeUp} transition={{ delay: i * 0.08 }}
              className="relative glass rounded-2xl p-6 glow-on-hover">
              <div className="text-5xl font-bold gradient-text/30 opacity-30 absolute top-4 right-4">{s.n}</div>
              <s.icon className="w-7 h-7 text-primary mb-4" />
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DemoShowcase() {
  const examples = [
    { tag: "Emotional Story", text: "My father farmed this land for 40 years. Last season, AI saved his harvest. This is for every farmer who deserves a fighting chance." },
    { tag: "Reel Hook", text: "POV: your phone just predicted next week's rainfall and your tomato yield jumped 38%." },
    { tag: "TikTok Style", text: "Wait — farmers are using AI now?? 🤯 Watch what happened when Kishan uncle tried it for the first time." },
    { tag: "Hindi-English", text: "Bhaisaab, ab fasal ki tension AI sambhalegi. Pure season ka plan, ek tap mein. Kheti smart, profit double." },
    { tag: "Before / After", text: "Before AI: guessing the weather, losing crops. After AI: 6-day forecasts, soil insights, 2x yield. Same field. Different future." },
    { tag: "Influencer Voice", text: "I tried this AI assistant for 30 days on my farm. The results genuinely shocked me. Saving the video for next harvest. 🌾" },
  ];
  return (
    <section className="py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div {...fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Live demo</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold max-w-xl">Real ads for <span className="gradient-text">Farmer AI Crop Assistant</span></h2>
          </div>
          <Button asChild variant="outline" className="glass">
            <Link to="/studio">Open Studio <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {examples.map((e, i) => (
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl p-6 glow-on-hover group">
              <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-md gradient-primary text-white">
                {e.tag}
              </span>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">{e.text}</p>
              <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                <span>Hook score 9{i+1}%</span>
                <span className="text-neon">+{120 + i * 32}% CTR</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { name: "Aanya Sharma", role: "Growth Lead, FreshCart", text: "Cut our creative production cost by 70%. We test 30 hooks a week now — used to be 3." },
    { name: "Marco Bellini", role: "Founder, Lume Co.", text: "The UGC scripts feel like real creators wrote them. Our agency is genuinely worried." },
    { name: "Priya Iyer", role: "Performance Marketer", text: "Hindi-English ad copies that actually convert. This is the unfair advantage I needed." },
    { name: "Daniel Okafor", role: "DTC Brand Owner", text: "From product brief to launch-ready campaign in 12 minutes. It still surprises me." },
  ];
  return (
    <section className="py-32 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Loved by marketers</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">The new <span className="gradient-text">creative stack</span></h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-5">
          {items.map((t, i) => (
            <motion.div key={t.name} {...fadeUp} transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl p-8 glow-on-hover">
              <Quote className="w-8 h-8 text-primary mb-4 opacity-60" />
              <p className="text-lg leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-primary grid place-items-center text-white font-semibold">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-medium text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    { name: "Starter", price: "$0", desc: "For exploring", features: ["20 generations/mo", "Hooks + captions", "Community templates"], cta: "Start free" },
    { name: "Pro", price: "$29", desc: "For solo marketers", featured: true, features: ["Unlimited generations", "UGC + storytelling ads", "Brand voice memory", "Export to PDF / CSV", "Priority models"], cta: "Go Pro" },
    { name: "Studio", price: "$99", desc: "For teams & agencies", features: ["Everything in Pro", "Team workspace", "Client folders", "API access", "Dedicated support"], cta: "Talk to sales" },
  ];
  return (
    <section id="pricing" className="py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Pricing</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">Simple, <span className="gradient-text">scale-ready</span> pricing</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-5">
          {tiers.map((t, i) => (
            <motion.div key={t.name} {...fadeUp} transition={{ delay: i * 0.07 }}
              className={`relative rounded-3xl p-8 ${t.featured ? "gradient-border shadow-glow scale-[1.02]" : "glass"}`}>
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] px-3 py-1 rounded-full gradient-primary text-white uppercase tracking-wider">
                  Most popular
                </span>
              )}
              <h3 className="font-display font-semibold text-xl">{t.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{t.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-bold">{t.price}</span>
                <span className="text-muted-foreground text-sm">/mo</span>
              </div>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-neon mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className={`w-full mt-8 ${t.featured ? "gradient-primary text-white border-0" : ""}`} variant={t.featured ? "default" : "outline"}>
                <Link to="/studio">{t.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "What is prompt engineering and why does it matter?", a: "Prompt engineering is the craft of structuring instructions for an AI model. Our platform uses multi-layer prompts tuned by ad creatives and performance data, so you get copy that actually converts — not generic text." },
    { q: "Which platforms do you support?", a: "Instagram Reels, TikTok, YouTube Shorts, Meta Ads, Google Ads, and LinkedIn. Each format has a dedicated prompt stack." },
    { q: "Can I use my own brand voice?", a: "Yes — Pro plans include brand-voice memory. Paste a few sample ads and the engine learns your tone." },
    { q: "Do you support local languages?", a: "20+ languages including Hindi-English mix, Spanish, Portuguese, Arabic, Tagalog, and Indonesian." },
    { q: "Is there a free trial?", a: "The Starter plan is free forever with 20 generations a month — no credit card required." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-32 px-4">
      <div className="container mx-auto max-w-3xl">
        <motion.div {...fadeUp} className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">FAQ</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">Questions, <span className="gradient-text">answered</span></h2>
        </motion.div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.04 }}
              className="glass rounded-2xl overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left">
                <span className="font-medium">{f.q}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                  className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-32 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div {...fadeUp}
          className="relative rounded-3xl p-12 md:p-20 text-center overflow-hidden gradient-primary shadow-glow">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="relative">
            <Zap className="w-10 h-10 mx-auto text-white mb-4" />
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Ship your next viral ad today.</h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8">Join 12,000+ marketers using AdGenius AI to ship campaigns that actually move the needle.</p>
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 h-12 px-6">
              <Link to="/studio"><Sparkles className="w-4 h-4 mr-2" /> Start free, no credit card</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Suppress unused warnings for icons used inline above
void [MessageSquare, Mic, Rocket];
