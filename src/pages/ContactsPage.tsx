import { useState } from "react";
import { Page } from "@/App";
import Icon from "@/components/ui/icon";

interface ContactsPageProps {
  navigate: (page: Page) => void;
}

const FAQ = [
  { q: "Как пополнить баланс?", a: "Перейдите в профиль и нажмите кнопку «Пополнить». Принимаем карты, СБП и криптовалюту." },
  { q: "Как вывести выигрыш?", a: "Минимальная сумма вывода — 100 ₽. Вывод занимает до 24 часов." },
  { q: "Честны ли розыгрыши?", a: "Да! Используем провайблы алгоритм с открытым seed — вы можете проверить любой результат." },
  { q: "Что такое уровни и достижения?", a: "За каждый открытый кейс вы получаете XP. Достигайте новых уровней и разблокируйте уникальные достижения." },
  { q: "Есть ли реферальная программа?", a: "Да! Пригласите друга и получите 5% от каждого его пополнения навсегда." },
];

export default function ContactsPage({ navigate }: ContactsPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="pt-24 pb-16 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="font-russo text-4xl md:text-5xl text-white mb-3">
          📡 Поддержка
        </h1>
        <p className="text-white/40 text-lg">Мы всегда на связи. Ответим в течение 2 часов.</p>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        {[
          { icon: "MessageCircle", label: "Telegram", value: "@vaultx_support", color: "#00f5ff", emoji: "✈️" },
          { icon: "Mail", label: "Email", value: "support@vaultx.ru", color: "#a855f7", emoji: "📧" },
          { icon: "Clock", label: "Режим работы", value: "24/7", color: "#fbbf24", emoji: "⏰" },
        ].map((contact) => (
          <div key={contact.label} className="game-card rounded-2xl p-6 text-center">
            <span className="text-3xl mb-3 block">{contact.emoji}</span>
            <div className="font-russo text-white mb-1">{contact.label}</div>
            <div className="text-sm font-medium" style={{ color: contact.color }}>
              {contact.value}
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="game-card rounded-2xl p-6">
          <h2 className="font-russo text-xl text-white mb-6 flex items-center gap-2">
            <Icon name="Send" size={20} className="text-neon-cyan" />
            Написать нам
          </h2>

          {!sent ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-white/40 text-xs mb-1.5 block">Ваше имя</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Nickname или имя"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-neon-cyan/50 transition-all text-sm"
                  required
                />
              </div>
              <div>
                <label className="text-white/40 text-xs mb-1.5 block">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-neon-cyan/50 transition-all text-sm"
                  required
                />
              </div>
              <div>
                <label className="text-white/40 text-xs mb-1.5 block">Сообщение</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Опишите вашу проблему или вопрос..."
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-neon-cyan/50 transition-all text-sm resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full glow-btn-cyan py-3.5 rounded-xl font-russo tracking-wide cursor-pointer"
              >
                📤 Отправить
              </button>
            </form>
          ) : (
            <div className="text-center py-8 animate-scale-in">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="font-russo text-xl text-white mb-2">Сообщение отправлено!</h3>
              <p className="text-white/40 text-sm mb-6">Ответим в течение 2 часов в рабочее время</p>
              <button
                onClick={() => setSent(false)}
                className="glow-btn-purple px-6 py-2.5 rounded-xl text-sm font-medium cursor-pointer"
              >
                Написать ещё
              </button>
            </div>
          )}
        </div>

        {/* FAQ */}
        <div>
          <h2 className="font-russo text-xl text-white mb-6 flex items-center gap-2">
            <Icon name="HelpCircle" size={20} className="text-neon-purple" />
            Частые вопросы
          </h2>
          <div className="space-y-3">
            {FAQ.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border transition-all overflow-hidden cursor-pointer"
                style={{
                  borderColor: openFaq === i ? "rgba(0,245,255,0.3)" : "rgba(255,255,255,0.05)",
                  background: openFaq === i ? "rgba(0,245,255,0.03)" : "rgba(255,255,255,0.01)",
                }}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="flex items-center justify-between px-4 py-4">
                  <span className="text-white font-medium text-sm">{item.q}</span>
                  <Icon
                    name={openFaq === i ? "ChevronUp" : "ChevronDown"}
                    size={16}
                    className={`flex-shrink-0 ml-3 transition-transform ${openFaq === i ? "text-neon-cyan" : "text-white/30"}`}
                  />
                </div>
                {openFaq === i && (
                  <div className="px-4 pb-4 text-white/50 text-sm leading-relaxed animate-fade-in border-t border-white/5 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
