import { useState } from "react";
import { Page } from "@/App";
import Icon from "@/components/ui/icon";

interface NavbarProps {
  currentPage: Page;
  navigate: (page: Page) => void;
}

const navItems = [
  { id: "home" as Page, label: "Главная", icon: "Home" },
  { id: "cases" as Page, label: "Кейсы", icon: "Package" },
  { id: "leaderboard" as Page, label: "Рейтинг", icon: "Trophy" },
  { id: "profile" as Page, label: "Профиль", icon: "User" },
  { id: "contacts" as Page, label: "Контакты", icon: "Mail" },
];

export default function Navbar({ currentPage, navigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-background/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate("home")}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #00f5ff, #a855f7)", boxShadow: "0 0 20px rgba(0,245,255,0.4)" }}>
              <span className="text-black font-russo text-xs font-bold">VX</span>
            </div>
            <span className="font-russo text-xl tracking-wider neon-text-cyan">VAULT<span className="text-white/80">X</span></span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentPage === item.id
                    ? "text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/30"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon name={item.icon} size={15} />
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neon-gold/10 border border-neon-gold/30">
              <span className="text-neon-gold text-sm">💰</span>
              <span className="text-neon-gold font-bold text-sm">1,250 ₽</span>
            </div>
            <button
              onClick={() => navigate("profile")}
              className="w-9 h-9 rounded-lg bg-neon-purple/20 border border-neon-purple/40 flex items-center justify-center text-lg hover:border-neon-purple transition-all"
            >
              🎮
            </button>
          </div>

          <button
            className="md:hidden text-white/80 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Icon name={mobileOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/5">
          <div className="p-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { navigate(item.id); setMobileOpen(false); }}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  currentPage === item.id
                    ? "text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/30"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon name={item.icon} size={16} />
                {item.label}
              </button>
            ))}
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-gold/10 border border-neon-gold/30 mt-2">
              <span className="text-neon-gold">💰</span>
              <span className="text-neon-gold font-bold">1,250 ₽</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
