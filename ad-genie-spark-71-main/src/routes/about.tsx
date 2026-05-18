import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, Brain, Wand2, Rocket, Code2, Layers, Target, GraduationCap, ChevronLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — AdGenius AI" }, { name: "description", content: "Project overview, prompt engineering approach, tech stack and learning outcomes." }] }),
  component: About,
});

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="relative pt-40 pb-20 px-4">
        <div className="absolute inset-0 aurora-bg opacity-40" />
        <div className="container mx-auto max-w-4xl relative text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
            <ChevronLeft className="w-4 h-4" /> Back home
          </Link>
          <span className="text-xs uppercase tracking-[0.3em] text-primary">About the project</span>
          <h1 className="mt-4 text-5xl md:text-7xl font-bold">Built with <span className="gradient-text">Prompt Engineering</span></h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            AdGenius AI is a portfolio-grade SaaS concept that turns product briefs into platform-ready viral ad copy using carefully layered prompts.
          </p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-6">
          <motion.div {...fadeUp} className="glass rounded-2xl p-8">
            <Target className="w-8 h-8 text-primary mb-4" />
            <h2 className="font-display font-semibold text-2xl mb-3">Project Objective</h2>
            <p className="text-muted-foreground leading-relaxed">
              Design a futuristic AI SaaS product that demonstrates how structured prompts can replace hours of creative work — generating UGC scripts, viral hooks, Reels captions, and storytelling ads for any product in seconds.
            </p>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.08 }} className="glass rounded-2xl p-8">
            <GraduationCap className="w-8 h-8 text-accent mb-4" />
            <h2 className="font-display font-semibold text-2xl mb-3">Future Interns • Task 2</h2>
            <p className="text-muted-foreground leading-relaxed">
              Submission for the Future Interns Prompt Engineering track. Demonstrates platform-aware prompt design, multi-format generation, and a polished product surface ready for LinkedIn showcase.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-accent">How it works</span>
            <h2 className="mt-3 text-4xl font-bold">The <span className="gradient-text">prompt engineering</span> stack</h2>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: Layers, title: "Brief Layer", desc: "Product, audience, pain points, platform, tone." },
              { icon: Brain, title: "Persona Layer", desc: "Creator voice profiles tuned per format." },
              { icon: Wand2, title: "Format Layer", desc: "Platform-specific scaffolds — Reels, TikTok, UGC." },
              { icon: Rocket, title: "Quality Layer", desc: "Hook scoring, brand-safety, length guardrails." },
            ].map((s, i) => (
              <motion.div key={s.title} {...fadeUp} transition={{ delay: i * 0.05 }} className="glass rounded-2xl p-5 text-center glow-on-hover">
                <s.icon className="w-7 h-7 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-1">{s.title}</h3>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="glass rounded-2xl p-8 overflow-hidden">
            <h3 className="font-display font-semibold mb-6 text-center">AI Workflow</h3>
            <div className="flex flex-col md:flex-row items-stretch gap-3">
              {["Input Brief", "Layered Prompt", "LLM Inference", "Format Scaffold", "Ranked Output"].map((step, i) => (
                <div key={step} className="flex-1 flex items-center gap-3">
                  <div className="flex-1 rounded-xl gradient-border p-4 text-center">
                    <div className="text-[10px] text-muted-foreground">Step {i + 1}</div>
                    <div className="font-medium text-sm mt-1">{step}</div>
                  </div>
                  {i < 4 && <ArrowRight className="hidden md:block w-4 h-4 text-primary shrink-0" />}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-10">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Tech stack</span>
            <h2 className="mt-3 text-4xl font-bold">Built with <span className="gradient-text">modern tooling</span></h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {["React", "TypeScript", "TanStack Start", "Tailwind CSS", "Framer Motion", "shadcn/ui"].map((t) => (
              <motion.div key={t} {...fadeUp} className="glass rounded-xl p-4 text-center text-sm font-medium glow-on-hover">
                <Code2 className="w-4 h-4 mx-auto mb-2 text-primary" />{t}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-10">
            <span className="text-xs uppercase tracking-[0.3em] text-accent">Learning outcomes</span>
            <h2 className="mt-3 text-4xl font-bold">What this project <span className="gradient-text">demonstrates</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Designing multi-layer prompts that produce on-brand, platform-specific outputs.",
              "Building a production-grade SaaS UI with glassmorphism, motion, and design tokens.",
              "Component-driven architecture using shadcn/ui and reusable primitives.",
              "State and form patterns for AI-driven creative workflows.",
              "Translating creative briefs into structured AI input — the core skill of prompt engineering.",
              "Crafting a portfolio-ready product narrative suitable for LinkedIn and internship submission.",
            ].map((o, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.04 }} className="glass rounded-xl p-5 flex gap-3">
                <Sparkles className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <p className="text-sm">{o}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="container mx-auto max-w-4xl">
          <motion.div {...fadeUp} className="relative rounded-3xl p-12 text-center overflow-hidden gradient-primary shadow-glow">
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Try the studio yourself</h2>
              <p className="text-white/80 mb-6 max-w-xl mx-auto">See the prompt engine in action — generate UGC scripts and viral hooks for any product.</p>
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                <Link to="/studio"><Sparkles className="w-4 h-4 mr-2" /> Open Prompt Studio</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
