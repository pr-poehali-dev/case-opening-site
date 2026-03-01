import { useEffect, useState } from "react";
import { Page } from "@/App";
import { CASES, PLAYERS } from "@/data/gameData";
import Icon from "@/components/ui/icon";

interface HomePageProps {
  navigate: (page: Page, caseId?: string) => void;
}

const TICKER_ITEMS = [
  { name: "NightShadow", item: "Катана Тени", emoji: "⚔️", price: 15000 },
  { name: "CyberWolf", item: "Золотой AK", emoji: "🏆", price: 25000 },
  { name: "PhoenixFire", item: "AWP Дракон", emoji: "🐉", price: 5500 },
  { name: "StarlightX", item: "AK-47 Неоновый", emoji: "🔫", price: 8500 },
  { name: "DarkMatter", item: "Neon Knife", emoji: "🌈", price: 12000 },
  { name: "QuantumZ", item: "Диамантовые перчатки", emoji: "💎", price: 18000 },
];

export default function HomePage({ navigate }: HomePageProps) {
  const [tickerPos, setTickerPos] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerPos((p) => (p + 1) % TICKER_ITEMS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const featuredCases = CASES.slice(0, 3);

  return (
    <div className="pt-16">
      {/* Live Drop Ticker */}
      <div className="bg-black/40 border-b border-white/5 overflow-hidden">
        <div className="flex items-center h-10">
          <div className="flex-shrink-0 px-4 flex items-center gap-2 border-r border-white/10 h-full bg-neon-cyan/10">
            <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
            <span className="text-neon-cyan text-xs font-bold tracking-widest uppercase">Live</span>
          </div>
          <div className="flex items-center gap-8 px-6 overflow-hidden">
            {TICKER_ITEMS.map((item, i) => (
              <div key={i} className="flex items-center gap-2 whitespace-nowrap text-xs">
                <span className="text-white/40">{item.name}</span>
                <span className="text-white/60">получил</span>
                <span>{item.emoji}</span>
                <span className="text-neon-gold font-bold">{item.item}</span>
                <span className="text-neon-cyan font-bold">+{item.price.toLocaleString()}₽</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-grid">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
            style={{ background: "radial-gradient(circle, #00f5ff, transparent)" }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl"
            style={{ background: "radial-gradient(circle, #a855f7, transparent)" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl"
            style={{ background: "radial-gradient(circle, #fbbf24, transparent)" }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border border-neon-cyan/30 bg-neon-cyan/5 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            <span className="text-neon-cyan text-sm font-medium">2,847 игроков онлайн</span>
          </div>

          <h1 className="font-russo text-5xl md:text-8xl mb-6 leading-none tracking-tight animate-fade-in"
            style={{ animationDelay: "0.1s" }}>
            <span className="neon-text-cyan">ОТКРЫВАЙ</span>
            <br />
            <span className="text-white">ЛЕГЕНДАРНЫЕ</span>
            <br />
            <span style={{
              background: "linear-gradient(90deg, #a855f7, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>КЕЙСЫ</span>
          </h1>

          <p className="text-white/50 text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.2s" }}>
            Открывай кейсы, выбивай редкие предметы и зарабатывай реальные деньги.
            Тысячи игроков уже получили свой джекпот.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
            style={{ animationDelay: "0.3s" }}>
            <button
              onClick={() => navigate("cases")}
              className="glow-btn-cyan px-8 py-4 rounded-xl font-russo text-lg tracking-wide cursor-pointer"
            >
              🎁 ОТКРЫТЬ КЕЙС
            </button>
            <button
              onClick={() => navigate("leaderboard")}
              className="glow-btn-purple px-8 py-4 rounded-xl font-russo text-lg tracking-wide cursor-pointer"
            >
              🏆 РЕЙТИНГ
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "125,480", label: "Кейсов открыто", icon: "📦" },
              { value: "₽ 48M+", label: "Выиграно всего", icon: "💰" },
              { value: "15,240", label: "Игроков", icon: "👥" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="font-russo text-2xl md:text-3xl neon-text-cyan">{stat.value}</div>
                <div className="text-white/40 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating case image */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block animate-float opacity-60">
          <img
            src="https://cdn.poehali.dev/projects/e8a39a3e-4587-4b68-8cea-bccb710b5f2a/files/7bebf55d-49e7-4b27-9537-25910c417782.jpg"
            alt="Case"
            className="w-64 h-64 object-cover rounded-2xl"
            style={{ boxShadow: "0 0 60px rgba(0,245,255,0.4), 0 0 120px rgba(168,85,247,0.2)" }}
          />
        </div>
      </section>

      {/* Featured Cases */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="font-russo text-3xl md:text-4xl text-white mb-2">
              🔥 Популярные кейсы
            </h2>
            <p className="text-white/40">Самые горячие кейсы этой недели</p>
          </div>
          <button
            onClick={() => navigate("cases")}
            className="hidden md:flex items-center gap-2 text-neon-cyan hover:text-white transition-colors text-sm font-medium"
          >
            Все кейсы <Icon name="ArrowRight" size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCases.map((c, i) => (
            <button
              key={c.id}
              onClick={() => navigate("open", c.id)}
              className="game-card rounded-2xl p-6 text-left group cursor-pointer"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative mb-4">
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-full h-48 object-cover rounded-xl"
                  style={{ boxShadow: `0 0 40px ${c.glowColor}` }}
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold"
                  style={{ background: `${c.color}20`, border: `1px solid ${c.color}50`, color: c.color }}>
                  {c.category}
                </div>
              </div>
              <h3 className="font-russo text-xl text-white mb-1">{c.name}</h3>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-1">
                  {c.items.slice(0, 5).map((item) => (
                    <span key={item.id} className="text-lg">{item.emoji}</span>
                  ))}
                </div>
                <div className="font-russo text-lg" style={{ color: c.color }}>
                  {c.price} ₽
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center gap-2 py-3 rounded-xl transition-all duration-300 font-medium text-sm"
                style={{
                  background: `${c.color}15`,
                  border: `1px solid ${c.color}40`,
                  color: c.color,
                }}>
                <Icon name="Package" size={16} />
                Открыть кейс
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Top Players */}
      <section className="py-16 px-4" style={{ background: "linear-gradient(180deg, transparent, rgba(168,85,247,0.03), transparent)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-russo text-3xl text-center mb-10 text-white">
            ⚡ Топ игроков
          </h2>
          <div className="space-y-3">
            {PLAYERS.slice(0, 5).map((player, i) => (
              <div key={player.rank}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/2 hover:border-white/10 transition-all"
                style={i === 0 ? { borderColor: "rgba(251,191,36,0.3)", background: "rgba(251,191,36,0.03)" } : {}}>
                <div className="w-8 text-center font-russo text-lg"
                  style={{ color: i === 0 ? "#fbbf24" : i === 1 ? "#9ca3af" : i === 2 ? "#cd7c2f" : "rgba(255,255,255,0.3)" }}>
                  {i === 0 ? "👑" : player.rank}
                </div>
                <div className="text-2xl">{player.avatar}</div>
                <div className="flex-1">
                  <div className="font-bold text-white">{player.name}</div>
                  <div className="text-white/40 text-xs">Уровень {player.level} · {player.casesOpened} кейсов</div>
                </div>
                <div className="text-right">
                  <div className="font-russo text-neon-gold text-sm">+{(player.totalWon / 1000).toFixed(0)}K ₽</div>
                  <div className="text-white/30 text-xs">{player.bestDrop}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <button onClick={() => navigate("leaderboard")}
              className="glow-btn-purple px-6 py-3 rounded-xl font-medium text-sm cursor-pointer">
              Полный рейтинг →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 px-4 mt-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="font-russo text-2xl neon-text-cyan mb-2">VAULTX</div>
          <p className="text-white/30 text-sm">© 2025 VaultX. Играй ответственно. 18+</p>
          <div className="flex justify-center gap-6 mt-4">
            {["Правила", "Политика", "Поддержка"].map((link) => (
              <button key={link} onClick={() => navigate("contacts")}
                className="text-white/30 hover:text-white/60 text-sm transition-colors">{link}</button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
