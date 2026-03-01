import { useState } from "react";
import { Page } from "@/App";
import { PLAYERS, Rarity } from "@/data/gameData";

interface LeaderboardPageProps {
  navigate: (page: Page) => void;
}

const RARITY_COLORS: Record<Rarity, string> = {
  common: "#9ca3af",
  rare: "#3b82f6",
  epic: "#a855f7",
  legendary: "#fbbf24",
};

type SortKey = "totalWon" | "casesOpened" | "level";

const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: "totalWon", label: "По выигрышу" },
  { key: "casesOpened", label: "По кейсам" },
  { key: "level", label: "По уровню" },
];

export default function LeaderboardPage({ navigate }: LeaderboardPageProps) {
  const [sortBy, setSortBy] = useState<SortKey>("totalWon");

  const sorted = [...PLAYERS].sort((a, b) => b[sortBy] - a[sortBy]).map((p, i) => ({ ...p, rank: i + 1 }));

  const top3 = sorted.slice(0, 3);
  const rest = sorted.slice(3);

  const podiumOrder = [top3[1], top3[0], top3[2]];
  const podiumHeights = [120, 160, 100];
  const podiumColors = ["#9ca3af", "#fbbf24", "#cd7c2f"];
  const podiumEmojis = ["🥈", "🥇", "🥉"];
  const podiumRanks = [2, 1, 3];

  return (
    <div className="pt-24 pb-16 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="font-russo text-4xl md:text-5xl text-white mb-3">
          🏆 Рейтинг игроков
        </h1>
        <p className="text-white/40 text-lg">Лучшие охотники за редкими предметами</p>
      </div>

      {/* Sort Tabs */}
      <div className="flex justify-center gap-2 mb-10">
        {SORT_OPTIONS.map((opt) => (
          <button
            key={opt.key}
            onClick={() => setSortBy(opt.key)}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
              sortBy === opt.key
                ? "bg-neon-cyan/15 border border-neon-cyan/50 text-neon-cyan"
                : "border border-white/10 text-white/50 hover:text-white"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Podium */}
      <div className="flex items-end justify-center gap-4 mb-16 px-4">
        {podiumOrder.map((player, idx) => (
          <div key={player.name} className="flex flex-col items-center">
            <div className="text-3xl mb-2">{player.avatar}</div>
            <div className="font-bold text-white text-sm mb-1">{player.name}</div>
            <div className="text-xs mb-3" style={{ color: podiumColors[idx] }}>
              Ур. {player.level}
            </div>
            <div
              className="w-24 flex flex-col items-center justify-center rounded-t-xl relative"
              style={{
                height: podiumHeights[idx],
                background: `linear-gradient(to top, ${podiumColors[idx]}20, ${podiumColors[idx]}05)`,
                border: `1px solid ${podiumColors[idx]}40`,
                borderBottom: "none",
              }}
            >
              <span className="text-2xl">{podiumEmojis[idx]}</span>
              <span className="font-russo text-lg mt-1" style={{ color: podiumColors[idx] }}>
                #{podiumRanks[idx]}
              </span>
              <span className="text-white/50 text-xs mt-1">
                {(player.totalWon / 1000).toFixed(0)}K₽
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Full Table */}
      <div className="rounded-2xl border border-white/5 overflow-hidden">
        <div className="grid grid-cols-12 gap-4 px-4 py-3 bg-white/3 text-white/30 text-xs font-bold uppercase tracking-wider border-b border-white/5">
          <div className="col-span-1">#</div>
          <div className="col-span-4">Игрок</div>
          <div className="col-span-2 text-right">Ур.</div>
          <div className="col-span-2 text-right">Кейсов</div>
          <div className="col-span-3 text-right">Выиграно</div>
        </div>

        {sorted.map((player, i) => (
          <div
            key={player.name}
            className="grid grid-cols-12 gap-4 px-4 py-4 border-b border-white/3 hover:bg-white/2 transition-colors items-center"
            style={i === 0 ? { background: "rgba(251,191,36,0.04)" } : {}}
          >
            <div className="col-span-1">
              <span className="font-russo text-sm" style={{
                color: i === 0 ? "#fbbf24" : i === 1 ? "#9ca3af" : i === 2 ? "#cd7c2f" : "rgba(255,255,255,0.25)"
              }}>
                {i === 0 ? "👑" : i === 1 ? "🥈" : i === 2 ? "🥉" : player.rank}
              </span>
            </div>
            <div className="col-span-4 flex items-center gap-3">
              <div className="text-xl">{player.avatar}</div>
              <div>
                <div className="font-bold text-white text-sm">{player.name}</div>
                <div className="text-white/30 text-xs flex items-center gap-1">
                  <span>{player.bestDrop}</span>
                  <span className="w-1.5 h-1.5 rounded-full inline-block"
                    style={{ background: RARITY_COLORS[player.bestDropRarity] }} />
                </div>
              </div>
            </div>
            <div className="col-span-2 text-right">
              <span className="text-neon-cyan font-bold text-sm">{player.level}</span>
              <div className="text-white/20 text-xs">lvl</div>
            </div>
            <div className="col-span-2 text-right">
              <span className="text-white/70 text-sm font-medium">{player.casesOpened.toLocaleString()}</span>
            </div>
            <div className="col-span-3 text-right">
              <span className="font-russo text-sm text-neon-gold">
                +{(player.totalWon / 1000).toFixed(0)}K ₽
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10 text-white/20 text-sm">
        Рейтинг обновляется каждые 24 часа
      </div>
    </div>
  );
}
