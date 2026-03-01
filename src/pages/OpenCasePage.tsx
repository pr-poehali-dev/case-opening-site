import { useState, useEffect, useRef } from "react";
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
  for (let i = 0; i < 40; i++) {
    const rand = Math.random();
    if (rand < 0.6) {
      reel.push(items[Math.floor(Math.random() * items.length)]);
    } else {
      reel.push(items.find(it => it.rarity === "common") || items[items.length - 1]);
    }
  }
  reel[32] = winner;
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

const ITEM_WIDTH = 140;
const ITEM_GAP = 12;

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

    const targetIndex = 32;
    const centerOffset = (5 * (ITEM_WIDTH + ITEM_GAP)) / 2 - ITEM_WIDTH / 2;
    const targetOffset = targetIndex * (ITEM_WIDTH + ITEM_GAP) - centerOffset - Math.random() * 60 + 30;

    setOffset(0);
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
    }, 5000);
  };

  const reset = () => {
    setState("idle");
    setWinner(null);
    setOffset(0);
    setReel([]);
    setShowConfetti(false);
  };

  const color = caseData.color;

  return (
    <div className="pt-24 pb-16 min-h-screen bg-grid">
      {/* BG glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5 blur-3xl"
          style={{ background: `radial-gradient(circle, ${color}, transparent)` }} />
      </div>

      <div className="max-w-5xl mx-auto px-4">
        {/* Back */}
        <button
          onClick={() => navigate("cases")}
          className="flex items-center gap-2 text-white/40 hover:text-white mb-8 transition-colors text-sm"
        >
          <Icon name="ArrowLeft" size={16} /> Назад к кейсам
        </button>

        {/* Case Info */}
        <div className="text-center mb-10">
          <h1 className="font-russo text-4xl md:text-6xl text-white mb-3">
            {caseData.name}
          </h1>
          <p className="text-white/40">Стоимость открытия: <span className="font-bold" style={{ color }}>{caseData.price * multiplier} ₽</span></p>
        </div>

        {/* Reel Container */}
        <div className="relative mb-8">
          {/* Selector line */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 z-20 pointer-events-none"
            style={{ background: `linear-gradient(to bottom, transparent, ${color}, transparent)`, boxShadow: `0 0 10px ${color}` }} />
          {/* Top/bottom fade */}
          <div className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, rgba(13,13,20,1), transparent)" }} />
          <div className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, rgba(13,13,20,1), transparent)" }} />

          <div className="overflow-hidden rounded-2xl border border-white/5 bg-black/30"
            style={{ height: 200, boxShadow: `0 0 40px ${caseData.glowColor}` }}>
            <div
              ref={reelRef}
              className="flex items-center gap-3 h-full"
              style={{
                transform: `translateX(calc(50% - ${offset + ITEM_WIDTH / 2}px))`,
                transition: state === "spinning"
                  ? "transform 5s cubic-bezier(0.05, 0.5, 0.1, 1)"
                  : "none",
                willChange: "transform",
                paddingLeft: 16,
              }}
            >
              {reel.length > 0 ? reel.map((item, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 flex flex-col items-center justify-center rounded-xl border"
                  style={{
                    width: ITEM_WIDTH,
                    height: 160,
                    borderColor: `${RARITY_COLORS[item.rarity]}50`,
                    background: `${RARITY_COLORS[item.rarity]}08`,
                  }}
                >
                  <span className="text-5xl mb-2">{item.emoji}</span>
                  <span className="text-xs font-medium text-center px-2 leading-tight"
                    style={{ color: RARITY_COLORS[item.rarity] }}>{item.name}</span>
                </div>
              )) : (
                // Static preview items
                Array.from({ length: 7 }, (_, i) => {
                  const item = caseData.items[i % caseData.items.length];
                  return (
                    <div
                      key={i}
                      className="flex-shrink-0 flex flex-col items-center justify-center rounded-xl border"
                      style={{
                        width: ITEM_WIDTH,
                        height: 160,
                        borderColor: `${RARITY_COLORS[item.rarity]}40`,
                        background: `${RARITY_COLORS[item.rarity]}05`,
                      }}
                    >
                      <span className="text-5xl mb-2">{item.emoji}</span>
                      <span className="text-xs font-medium text-center px-2"
                        style={{ color: RARITY_COLORS[item.rarity] }}>{item.name}</span>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>

        {/* Multiplier */}
        <div className="flex justify-center gap-3 mb-6">
          {[1, 2, 3, 5].map((m) => (
            <button
              key={m}
              onClick={() => setMultiplier(m)}
              disabled={state === "spinning"}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                multiplier === m
                  ? "border font-russo"
                  : "border border-white/10 text-white/40 hover:text-white/70"
              }`}
              style={multiplier === m ? {
                color,
                borderColor: `${color}60`,
                background: `${color}10`,
              } : {}}
            >
              x{m}
            </button>
          ))}
        </div>

        {/* Open Button */}
        {state !== "result" ? (
          <div className="text-center">
            <button
              onClick={spin}
              disabled={state === "spinning"}
              className="px-12 py-5 rounded-2xl font-russo text-xl tracking-widest transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              style={{
                background: state === "spinning"
                  ? `${color}10`
                  : `linear-gradient(135deg, ${color}30, ${color}10)`,
                border: `2px solid ${color}`,
                color: state === "idle" ? color : `${color}80`,
                boxShadow: state === "idle" ? `0 0 40px ${caseData.glowColor}, 0 0 80px ${caseData.glowColor}` : "none",
              }}
            >
              {state === "spinning" ? "⚡ КРУТИТСЯ..." : `🎰 ОТКРЫТЬ — ${caseData.price * multiplier} ₽`}
            </button>
          </div>
        ) : null}

        {/* Result */}
        {state === "result" && winner && (
          <div className="text-center animate-scale-in">
            {showConfetti && (
              <div className="fixed inset-0 pointer-events-none z-50">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute animate-particle"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${30 + Math.random() * 40}%`,
                      animationDelay: `${Math.random() * 1}s`,
                      fontSize: 24,
                    }}
                  >
                    {["✨", "💫", "⭐", "🌟"][Math.floor(Math.random() * 4)]}
                  </div>
                ))}
              </div>
            )}

            <div
              className="inline-block p-8 rounded-2xl mb-6 animate-winner-flash"
              style={{
                background: `${RARITY_COLORS[winner.rarity]}10`,
                border: `2px solid ${RARITY_COLORS[winner.rarity]}`,
              }}
            >
              <div className="text-8xl mb-4">{winner.emoji}</div>
              <div className="font-russo text-2xl text-white mb-1">{winner.name}</div>
              <div className="font-bold text-sm mb-3" style={{ color: RARITY_COLORS[winner.rarity] }}>
                {RARITY_LABELS[winner.rarity].toUpperCase()}
              </div>
              <div className="text-3xl font-russo" style={{ color: RARITY_COLORS[winner.rarity] }}>
                +{winner.price.toLocaleString()} ₽
              </div>
            </div>

            <div className="flex gap-3 justify-center">
              <button
                onClick={reset}
                className="glow-btn-cyan px-8 py-3 rounded-xl font-russo text-sm cursor-pointer"
              >
                🔄 Открыть ещё
              </button>
              <button
                onClick={() => navigate("profile")}
                className="glow-btn-purple px-8 py-3 rounded-xl font-russo text-sm cursor-pointer"
              >
                👤 В профиль
              </button>
            </div>
          </div>
        )}

        {/* Case Contents */}
        <div className="mt-16">
          <h2 className="font-russo text-2xl text-white mb-6 text-center">
            Содержимое кейса
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {caseData.items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center p-4 rounded-xl border transition-all hover:scale-105 cursor-default"
                style={{
                  borderColor: `${RARITY_COLORS[item.rarity]}40`,
                  background: `${RARITY_COLORS[item.rarity]}06`,
                }}
              >
                <span className="text-4xl mb-2">{item.emoji}</span>
                <span className="text-xs font-medium text-center leading-tight mb-1"
                  style={{ color: RARITY_COLORS[item.rarity] }}>{item.name}</span>
                <span className="text-white/40 text-xs">{item.chance}%</span>
                <span className="text-white/60 text-xs font-bold mt-1">{item.price}₽</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
