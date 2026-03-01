import { useState, useRef } from "react";
import { Page } from "@/App";
import { CASES, Item, Rarity } from "@/data/gameData";
import Icon from "@/components/ui/icon";

interface OpenCasePageProps {
  caseId: string | null;
  navigate: (page: Page, caseId?: string) => void;
}

type State = "idle" | "spinning" | "result";

function getRandomItem(items: Item[]): Item {
  const total = items.reduce((sum, i) => sum + i.chance, 0);
  let rand = Math.random() * total;
  for (const item of items) {
    rand -= item.chance;
    if (rand <= 0) return item;
  }
  return items[items.length - 1];
}

function buildReel(items: Item[], winner: Item): Item[] {
  const reel: Item[] = [];
  for (let i = 0; i < 45; i++) {
    reel.push(items[Math.floor(Math.random() * items.length)]);
  }
  reel[36] = winner;
  return reel;
}

const RARITY_COLORS: Record<Rarity, string> = {
  common: "#9ca3af",
  rare: "#3b82f6",
  epic: "#a855f7",
  legendary: "#fbbf24",
};

const RARITY_LABELS: Record<Rarity, string> = {
  common: "Обычный",
  rare: "Редкий",
  epic: "Эпический",
  legendary: "Легендарный",
};

const ITEM_WIDTH = 160;
const ITEM_GAP = 10;

// Fallback image for items without image
const FALLBACK_IMG = "https://cdn.poehali.dev/projects/e8a39a3e-4587-4b68-8cea-bccb710b5f2a/bucket/c1108cc8-00da-49cb-afb5-e9406b12f1ba.png";

function ItemCard({ item, height = 160 }: { item: Item; height?: number }) {
  return (
    <div
      className="flex-shrink-0 flex flex-col items-center justify-between rounded-xl border overflow-hidden"
      style={{
        width: ITEM_WIDTH,
        height,
        borderColor: `${RARITY_COLORS[item.rarity]}60`,
        background: `linear-gradient(160deg, ${RARITY_COLORS[item.rarity]}12, ${RARITY_COLORS[item.rarity]}04)`,
      }}
    >
      <div className="flex-1 w-full flex items-center justify-center p-2">
        {item.image ? (
          <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
        ) : (
          <div className="text-4xl opacity-60">🗡️</div>
        )}
      </div>
      <div className="w-full px-2 pb-2 text-center">
        <p className="text-xs font-medium leading-tight line-clamp-2"
          style={{ color: RARITY_COLORS[item.rarity] }}>
          {item.name}
        </p>
      </div>
    </div>
  );
}

export default function OpenCasePage({ caseId, navigate }: OpenCasePageProps) {
  const caseData = CASES.find((c) => c.id === caseId) || CASES[0];
  const [state, setState] = useState<State>("idle");
  const [reel, setReel] = useState<Item[]>([]);
  const [winner, setWinner] = useState<Item | null>(null);
  const [offset, setOffset] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [showConfetti, setShowConfetti] = useState(false);
  const reelRef = useRef<HTMLDivElement>(null);

  const spin = () => {
    if (state === "spinning") return;
    const won = getRandomItem(caseData.items);
    const newReel = buildReel(caseData.items, won);
    setReel(newReel);
    setWinner(null);
    setState("spinning");
    setShowConfetti(false);
    setOffset(0);

    const targetIndex = 36;
    const centerOffset = Math.floor(5 / 2) * (ITEM_WIDTH + ITEM_GAP);
    const targetOffset = targetIndex * (ITEM_WIDTH + ITEM_GAP) - centerOffset + Math.random() * 40 - 20;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setOffset(targetOffset);
      });
    });

    setTimeout(() => {
      setState("result");
      setWinner(won);
      if (won.rarity === "legendary" || won.rarity === "epic") {
        setShowConfetti(true);
      }
    }, 5500);
  };

  const reset = () => {
    setState("idle");
    setWinner(null);
    setOffset(0);
    setReel([]);
    setShowConfetti(false);
  };

  const color = caseData.color;
  const previewItems = Array.from({ length: 7 }, (_, i) => caseData.items[i % caseData.items.length]);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-grid">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-6 blur-3xl"
          style={{ background: `radial-gradient(circle, ${color}50, transparent)` }} />
      </div>

      <div className="max-w-5xl mx-auto px-4">
        <button
          onClick={() => navigate("cases")}
          className="flex items-center gap-2 text-white/40 hover:text-white mb-8 transition-colors text-sm"
        >
          <Icon name="ArrowLeft" size={16} /> Назад к кейсам
        </button>

        {/* Case Header */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="relative">
            <img
              src={caseData.image}
              alt={caseData.name}
              className="w-36 h-36 object-cover rounded-2xl"
              style={{ boxShadow: `0 0 50px ${caseData.glowColor}` }}
            />
          </div>
          <div>
            <h1 className="font-russo text-4xl md:text-5xl text-white mb-2">{caseData.name}</h1>
            <p className="text-white/40 mb-1">{caseData.items.length} предметов в кейсе</p>
            <p className="text-white/40">Цена открытия: <span className="font-bold text-lg" style={{ color }}>{(caseData.price * multiplier).toLocaleString()} ₽</span></p>
          </div>
        </div>

        {/* Reel */}
        <div className="relative mb-6">
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] z-20 pointer-events-none"
            style={{ background: `linear-gradient(to bottom, transparent, ${color}, transparent)`, boxShadow: `0 0 12px ${color}, 0 0 24px ${color}` }} />
          <div className="absolute inset-y-0 left-0 w-40 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, hsl(220,20%,6%), transparent)" }} />
          <div className="absolute inset-y-0 right-0 w-40 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, hsl(220,20%,6%), transparent)" }} />

          <div
            className="overflow-hidden rounded-2xl border border-white/5 bg-black/40"
            style={{ height: 190, boxShadow: `0 0 40px ${caseData.glowColor}` }}
          >
            <div
              ref={reelRef}
              className="flex items-center gap-[10px] h-full pl-4"
              style={{
                transform: `translateX(calc(50% - ${offset + ITEM_WIDTH / 2}px))`,
                transition: state === "spinning"
                  ? "transform 5.5s cubic-bezier(0.02, 0.6, 0.08, 1)"
                  : "none",
                willChange: "transform",
              }}
            >
              {(reel.length > 0 ? reel : previewItems).map((item, i) => (
                <ItemCard key={i} item={item} height={170} />
              ))}
            </div>
          </div>
        </div>

        {/* Multiplier */}
        <div className="flex justify-center gap-2 mb-6">
          {[1, 2, 3, 5].map((m) => (
            <button
              key={m}
              onClick={() => setMultiplier(m)}
              disabled={state === "spinning"}
              className="px-5 py-2 rounded-lg text-sm font-bold transition-all disabled:opacity-40"
              style={multiplier === m ? {
                color, borderColor: `${color}60`,
                background: `${color}15`, border: `1px solid ${color}60`,
              } : {
                color: "rgba(255,255,255,0.35)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              x{m}
            </button>
          ))}
        </div>

        {/* Open Button */}
        {state !== "result" && (
          <div className="text-center mb-16">
            <button
              onClick={spin}
              disabled={state === "spinning"}
              className="px-14 py-5 rounded-2xl font-russo text-xl tracking-widest transition-all duration-300 disabled:cursor-not-allowed cursor-pointer"
              style={{
                background: state === "spinning" ? `${color}08` : `linear-gradient(135deg, ${color}25, ${color}08)`,
                border: `2px solid ${state === "spinning" ? `${color}40` : color}`,
                color: state === "idle" ? color : `${color}50`,
                boxShadow: state === "idle" ? `0 0 50px ${caseData.glowColor}` : "none",
              }}
            >
              {state === "spinning" ? "⚡ КРУТИТСЯ..." : `🎰 ОТКРЫТЬ — ${(caseData.price * multiplier).toLocaleString()} ₽`}
            </button>
          </div>
        )}

        {/* Result */}
        {state === "result" && winner && (
          <div className="text-center mb-16 animate-scale-in">
            {showConfetti && (
              <div className="fixed inset-0 pointer-events-none z-50">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div key={i} className="absolute animate-particle text-2xl"
                    style={{
                      left: `${10 + Math.random() * 80}%`,
                      top: `${20 + Math.random() * 50}%`,
                      animationDelay: `${Math.random() * 0.8}s`,
                    }}>
                    {["✨", "💫", "⭐", "🌟", "💥"][Math.floor(Math.random() * 5)]}
                  </div>
                ))}
              </div>
            )}

            <div className="inline-block animate-winner-flash rounded-2xl p-8 mb-6"
              style={{
                background: `${RARITY_COLORS[winner.rarity]}10`,
                border: `2px solid ${RARITY_COLORS[winner.rarity]}`,
              }}>
              {winner.image ? (
                <img src={winner.image} alt={winner.name} className="w-40 h-40 object-contain mx-auto mb-4" />
              ) : (
                <div className="text-8xl mb-4">🗡️</div>
              )}
              <div className="font-russo text-2xl text-white mb-1">{winner.name}</div>
              <div className="font-bold text-sm mb-3 tracking-widest" style={{ color: RARITY_COLORS[winner.rarity] }}>
                {RARITY_LABELS[winner.rarity].toUpperCase()}
              </div>
              <div className="font-russo text-3xl" style={{ color: RARITY_COLORS[winner.rarity] }}>
                +{winner.price.toLocaleString()} ₽
              </div>
            </div>

            <div className="flex gap-3 justify-center">
              <button onClick={reset} className="glow-btn-cyan px-8 py-3 rounded-xl font-russo text-sm cursor-pointer">
                🔄 Открыть ещё
              </button>
              <button onClick={() => navigate("profile")} className="glow-btn-purple px-8 py-3 rounded-xl font-russo text-sm cursor-pointer">
                👤 В профиль
              </button>
            </div>
          </div>
        )}

        {/* Contents */}
        <div>
          <h2 className="font-russo text-2xl text-white mb-6 text-center">Содержимое кейса</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
            {caseData.items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center p-3 rounded-xl border transition-all hover:scale-105 cursor-default group"
                style={{
                  borderColor: `${RARITY_COLORS[item.rarity]}35`,
                  background: `${RARITY_COLORS[item.rarity]}06`,
                }}
              >
                {item.image ? (
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-contain mb-2" />
                ) : (
                  <div className="w-20 h-20 flex items-center justify-center text-4xl mb-2 opacity-50">🗡️</div>
                )}
                <p className="text-xs font-medium text-center leading-tight mb-1"
                  style={{ color: RARITY_COLORS[item.rarity] }}>{item.name}</p>
                <p className="text-white/30 text-xs">{item.chance}%</p>
                <p className="text-white/60 text-xs font-bold">{item.price.toLocaleString()}₽</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
