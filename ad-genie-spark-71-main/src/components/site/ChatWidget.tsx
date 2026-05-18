import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Msg = { role: "user" | "ai"; text: string };

const REPLIES = [
  "Try the Prompt Studio — pick 'Viral Hooks' and describe your product.",
  "For Reels, use the Emotional tone with a 15-second duration for highest hook scores.",
  "Brand voice memory is included on Pro — paste 3 sample ads and the engine learns your style.",
  "Hindi-English mixed copies work great for AgriTech and FMCG audiences.",
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "ai", text: "Hi — I'm your AdGenius co-pilot. Ask me anything about generating viral ads." },
  ]);

  const send = () => {
    if (!input.trim()) return;
    const user = input.trim();
    setMsgs((m) => [...m, { role: "user", text: user }]);
    setInput("");
    setTimeout(() => setMsgs((m) => [...m, { role: "ai", text: REPLIES[Math.floor(Math.random() * REPLIES.length)] }]), 700);
  };

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl gradient-primary shadow-glow grid place-items-center text-white hover:scale-105 transition"
        aria-label="Open assistant"
      >
        {open ? <X className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] glass rounded-2xl shadow-elegant overflow-hidden flex flex-col"
          >
            <div className="p-4 border-b border-border/60 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-primary grid place-items-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div className="text-sm">
                <div className="font-semibold">AI Assistant</div>
                <div className="text-xs text-muted-foreground">Online · replies instantly</div>
              </div>
            </div>
            <div className="p-4 space-y-3 max-h-80 overflow-y-auto">
              {msgs.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${m.role === "user" ? "gradient-primary text-white" : "bg-secondary/70"}`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 border-t border-border/60 flex gap-2">
              <Input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()} placeholder="Ask anything…" className="bg-background/40" />
              <Button size="icon" onClick={send} className="gradient-primary text-white border-0"><Send className="w-4 h-4" /></Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}