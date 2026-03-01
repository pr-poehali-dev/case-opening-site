import { useState } from "react";
import { Page } from "@/App";
import { CASES } from "@/data/gameData";
import Icon from "@/components/ui/icon";

interface CasesPageProps {
  navigate: (page: Page, caseId?: string) => void;
}

const CATEGORIES = ["Все", "Популярные", "Премиум", "Бюджетные"];

export default function CasesPage({ navigate }: CasesPageProps) {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [sortBy, setSortBy] = useState<"price_asc" | "price_desc">("price_asc");

  const filtered = CASES
    .filter((c) => activeCategory === "Все" || c.category === activeCategory)
    .sort((a, b) => sortBy === "price_asc" ? a.price - b.price : b.price - a.price);

  return (
    <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
      <div className="mb-10">
        <h1 className="font-russo text-4xl md:text-5xl text-white mb-2">
          📦 Все кейсы
        </h1>
        <p className="text-white/40 text-lg">Выбери кейс и открой редкие предметы</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8 items-start sm:items-center justify-between">
        <div className="flex gap-2 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-neon-cyan/15 border border-neon-cyan/50 text-neon-cyan"
                  : "border border-white/10 text-white/50 hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-white/30 text-sm">Сортировка:</span>
          <button
            onClick={() => setSortBy(sortBy === "price_asc" ? "price_desc" : "price_asc")}
            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 text-white/60 hover:text-white text-sm transition-all"
          >
            <Icon name={sortBy === "price_asc" ? "ArrowUp" : "ArrowDown"} size={14} />
            Цена
          </button>
        </div>
      </div>

      {/* Cases Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((c, i) => (
          <div
            key={c.id}
            className="game-card rounded-2xl overflow-hidden group cursor-pointer"
            style={{ animationDelay: `${i * 0.05}s` }}
            onClick={() => navigate("open", c.id)}
          >
            <div className="relative">
              <img
                src={c.image}
                alt={c.name}
                className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(to top, ${c.color}30, transparent)` }} />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm"
                style={{ background: `${c.color}25`, border: `1px solid ${c.color}50`, color: c.color }}>
                {c.category}
              </div>
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-white font-russo text-sm">
                {c.price} ₽
              </div>
            </div>

            <div className="p-5">
              <h3 className="font-russo text-xl text-white mb-3">{c.name}</h3>

              {/* Items Preview */}
              <div className="space-y-1 mb-4">
                {c.items.slice(0, 3).map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-1.5 px-3 rounded-lg bg-white/3">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{item.emoji}</span>
                      <span className={`text-xs font-medium rarity-${item.rarity}`}>{item.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white/30 text-xs">{item.chance}%</span>
                      <span className="text-white/60 text-xs font-bold">{item.price}₽</span>
                    </div>
                  </div>
                ))}
                {c.items.length > 3 && (
                  <div className="text-white/30 text-xs text-center py-1">
                    +{c.items.length - 3} ещё предметов
                  </div>
                )}
              </div>

              <button
                className="w-full py-3 rounded-xl font-russo text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2"
                style={{
                  background: `linear-gradient(135deg, ${c.color}20, ${c.color}05)`,
                  border: `1px solid ${c.color}50`,
                  color: c.color,
                  boxShadow: `0 0 20px ${c.glowColor}`
                }}
              >
                <Icon name="Zap" size={15} />
                ОТКРЫТЬ — {c.price} ₽
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
