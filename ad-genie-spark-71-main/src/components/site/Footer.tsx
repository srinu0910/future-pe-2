import { Link } from "@tanstack/react-router";
import { Sparkles, Twitter, Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/60">
      <div className="absolute inset-0 aurora-bg opacity-30 pointer-events-none" />
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg gradient-primary grid place-items-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-lg">AdGenius AI</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              The AI co-pilot for viral marketing. Built with advanced prompt engineering.
            </p>
            <div className="flex gap-3">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 grid place-items-center rounded-lg glass hover:shadow-glow transition">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          {[
            { title: "Product", items: [["Dashboard","/dashboard"],["Prompt Studio","/studio"],["Templates","/studio"],["Pricing","/#pricing"]] },
            { title: "Resources", items: [["About","/about"],["Docs","#"],["Changelog","#"],["Blog","#"]] },
            { title: "Company", items: [["Careers","#"],["Privacy","#"],["Terms","#"],["Contact","#"]] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold mb-4 text-sm">{col.title}</h4>
              <ul className="space-y-2">
                {col.items.map(([label, to]) => (
                  <li key={label}>
                    <Link to={to} className="text-sm text-muted-foreground hover:text-foreground transition">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-6 border-t border-border/60 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} AdGenius AI. Crafted for viral growth.</p>
          <p>Future Interns • Task 2 • Prompt Engineering</p>
        </div>
      </div>
    </footer>
  );
}