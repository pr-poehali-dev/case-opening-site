import { Page } from "@/App";
import { USER_PROFILE, ACHIEVEMENTS, Rarity } from "@/data/gameData";
import Icon from "@/components/ui/icon";

interface ProfilePageProps {
  navigate: (page: Page, caseId?: string) => void;
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

export default function ProfilePage({ navigate }: ProfilePageProps) {
  const user = USER_PROFILE;
  const xpPercent = (user.xp / user.xpToNext) * 100;
  const unlockedCount = ACHIEVEMENTS.filter(a => a.unlocked).length;

  return (
    <div className="pt-24 pb-16 px-4 max-w-5xl mx-auto">
      {/* Profile Header */}
      <div className="game-card rounded-2xl p-8 mb-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-2xl flex items-center justify-center text-5xl"
              style={{ background: "linear-gradient(135deg, rgba(0,245,255,0.2), rgba(168,85,247,0.2))", border: "2px solid rgba(0,245,255,0.3)" }}>
              {user.avatar}
            </div>
            <div className="absolute -bottom-2 -right-2 bg-neon-cyan text-black text-xs font-russo px-2 py-0.5 rounded-full">
              {user.level}
            </div>
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h1 className="font-russo text-3xl text-white mb-1">{user.name}</h1>
            <p className="text-white/40 text-sm mb-4">
              <Icon name="Calendar" size={13} className="inline mr-1" />
              С нами с {user.joinDate} · #{user.rank} в рейтинге
            </p>

            {/* XP Bar */}
            <div className="max-w-sm">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-white/50 text-xs">Уровень {user.level}</span>
                <span className="text-neon-cyan text-xs font-bold">{user.xp} / {user.xpToNext} XP</span>
              </div>
              <div className="h-2.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${xpPercent}%`,
                    background: "linear-gradient(90deg, #00f5ff, #a855f7)",
                    boxShadow: "0 0 10px rgba(0,245,255,0.5)",
                  }}
                />
              </div>
              <p className="text-white/30 text-xs mt-1">
                Ещё {user.xpToNext - user.xp} XP до уровня {user.level + 1}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-neon-gold/10 border border-neon-gold/30">
            <span className="text-2xl">💰</span>
            <div>
              <div className="font-russo text-2xl text-neon-gold">{user.balance.toLocaleString()} ₽</div>
              <div className="text-white/40 text-xs">Баланс</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Кейсов открыто", value: user.casesOpened, icon: "📦", color: "#00f5ff" },
          { label: "Всего выиграно", value: `${(user.totalWon / 1000).toFixed(1)}K ₽`, icon: "💰", color: "#fbbf24" },
          { label: "Потрачено", value: `${(user.totalSpent / 1000).toFixed(1)}K ₽`, icon: "💸", color: "#9ca3af" },
          { label: "Достижений", value: `${unlockedCount}/${ACHIEVEMENTS.length}`, icon: "🏆", color: "#a855f7" },
        ].map((stat) => (
          <div key={stat.label} className="game-card rounded-xl p-5 text-center">
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className="font-russo text-xl text-white">{stat.value}</div>
            <div className="text-white/40 text-xs mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Recent Drops */}
        <div className="game-card rounded-2xl p-6">
          <h2 className="font-russo text-lg text-white mb-4 flex items-center gap-2">
            <span>🎁</span> Последние дропы
          </h2>
          <div className="space-y-3">
            {user.recentDrops.map((drop, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl"
                style={{
                  background: `${RARITY_COLORS[drop.rarity]}06`,
                  border: `1px solid ${RARITY_COLORS[drop.rarity]}25`,
                }}>
                <span className="text-2xl">{drop.emoji}</span>
                <div className="flex-1">
                  <div className="font-medium text-white text-sm">{drop.name}</div>
                  <div className="text-xs font-bold" style={{ color: RARITY_COLORS[drop.rarity] }}>
                    {RARITY_LABELS[drop.rarity]}
                  </div>
                </div>
                <div className="font-russo text-sm" style={{ color: RARITY_COLORS[drop.rarity] }}>
                  +{drop.price.toLocaleString()}₽
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => navigate("cases")}
            className="w-full mt-4 glow-btn-cyan py-3 rounded-xl text-sm font-russo cursor-pointer"
          >
            🎰 Открыть кейс
          </button>
        </div>

        {/* Achievements */}
        <div className="game-card rounded-2xl p-6">
          <h2 className="font-russo text-lg text-white mb-4 flex items-center gap-2">
            <span>🏆</span> Достижения
            <span className="ml-auto text-white/30 text-sm font-rubik">{unlockedCount}/{ACHIEVEMENTS.length}</span>
          </h2>
          <div className="space-y-3">
            {ACHIEVEMENTS.map((ach) => (
              <div key={ach.id} className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                ach.unlocked ? "" : "opacity-50"
              }`}
                style={{
                  background: ach.unlocked ? "rgba(0,245,255,0.05)" : "rgba(255,255,255,0.02)",
                  border: ach.unlocked ? "1px solid rgba(0,245,255,0.2)" : "1px solid rgba(255,255,255,0.05)",
                }}>
                <span className={`text-2xl ${!ach.unlocked ? "grayscale" : ""}`}>{ach.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-white text-sm flex items-center gap-2">
                    {ach.name}
                    {ach.unlocked && <Icon name="CheckCircle" size={13} className="text-neon-cyan flex-shrink-0" />}
                  </div>
                  <div className="text-white/40 text-xs">{ach.description}</div>
                  {!ach.unlocked && ach.progress !== undefined && ach.maxProgress && (
                    <div className="mt-1.5">
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-neon-purple"
                          style={{ width: `${(ach.progress / ach.maxProgress) * 100}%` }}
                        />
                      </div>
                      <span className="text-white/25 text-xs">{ach.progress}/{ach.maxProgress}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
