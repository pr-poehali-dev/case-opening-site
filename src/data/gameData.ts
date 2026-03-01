export type Rarity = "common" | "rare" | "epic" | "legendary";

export interface Item {
  id: string;
  name: string;
  emoji: string;
  rarity: Rarity;
  price: number;
  chance: number;
}

export interface Case {
  id: string;
  name: string;
  price: number;
  image: string;
  color: string;
  glowColor: string;
  items: Item[];
  category: string;
}

export interface Player {
  rank: number;
  name: string;
  avatar: string;
  level: number;
  totalWon: number;
  casesOpened: number;
  bestDrop: string;
  bestDropRarity: Rarity;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  emoji: string;
  unlocked: boolean;
  progress?: number;
  maxProgress?: number;
}

export const CASES: Case[] = [
  {
    id: "cyber-strike",
    name: "Cyber Strike",
    price: 199,
    image: "https://cdn.poehali.dev/projects/e8a39a3e-4587-4b68-8cea-bccb710b5f2a/files/7bebf55d-49e7-4b27-9537-25910c417782.jpg",
    color: "#00f5ff",
    glowColor: "rgba(0, 245, 255, 0.4)",
    category: "Популярные",
    items: [
      { id: "c1", name: "AK-47 Неоновый", emoji: "🔫", rarity: "legendary", price: 8500, chance: 1 },
      { id: "c2", name: "Перчатки Хакера", emoji: "🧤", rarity: "epic", price: 2200, chance: 5 },
      { id: "c3", name: "Desert Eagle Киберпанк", emoji: "🔫", rarity: "epic", price: 1800, chance: 8 },
      { id: "c4", name: "Нож Байонет", emoji: "🗡️", rarity: "rare", price: 650, chance: 20 },
      { id: "c5", name: "AWP Лазер", emoji: "🎯", rarity: "rare", price: 480, chance: 25 },
      { id: "c6", name: "MP5 Цифровой", emoji: "🔧", rarity: "common", price: 120, chance: 41 },
    ]
  },
  {
    id: "shadow-vault",
    name: "Shadow Vault",
    price: 399,
    image: "https://cdn.poehali.dev/projects/e8a39a3e-4587-4b68-8cea-bccb710b5f2a/files/7bebf55d-49e7-4b27-9537-25910c417782.jpg",
    color: "#a855f7",
    glowColor: "rgba(168, 85, 247, 0.4)",
    category: "Популярные",
    items: [
      { id: "s1", name: "Катана Тени", emoji: "⚔️", rarity: "legendary", price: 15000, chance: 0.5 },
      { id: "s2", name: "M4A4 Призрак", emoji: "🔫", rarity: "legendary", price: 9800, chance: 1.5 },
      { id: "s3", name: "Маска Ниндзя", emoji: "🎭", rarity: "epic", price: 3200, chance: 6 },
      { id: "s4", name: "Gloves Ночь", emoji: "🧤", rarity: "epic", price: 2600, chance: 8 },
      { id: "s5", name: "USP-S Тьма", emoji: "🌑", rarity: "rare", price: 750, chance: 22 },
      { id: "s6", name: "Тактический нож", emoji: "🗡️", rarity: "common", price: 200, chance: 62 },
    ]
  },
  {
    id: "golden-rush",
    name: "Golden Rush",
    price: 599,
    image: "https://cdn.poehali.dev/projects/e8a39a3e-4587-4b68-8cea-bccb710b5f2a/files/7bebf55d-49e7-4b27-9537-25910c417782.jpg",
    color: "#fbbf24",
    glowColor: "rgba(251, 191, 36, 0.4)",
    category: "Премиум",
    items: [
      { id: "g1", name: "Золотой AK", emoji: "🏆", rarity: "legendary", price: 25000, chance: 0.3 },
      { id: "g2", name: "Диамантовые перчатки", emoji: "💎", rarity: "legendary", price: 18000, chance: 0.7 },
      { id: "g3", name: "AWP Дракон", emoji: "🐉", rarity: "epic", price: 5500, chance: 4 },
      { id: "g4", name: "Нож Золото", emoji: "🔱", rarity: "epic", price: 3800, chance: 7 },
      { id: "g5", name: "Gloves Монарх", emoji: "👑", rarity: "rare", price: 980, chance: 18 },
      { id: "g6", name: "USP Золото", emoji: "✨", rarity: "common", price: 350, chance: 70 },
    ]
  },
  {
    id: "fire-storm",
    name: "Fire Storm",
    price: 149,
    image: "https://cdn.poehali.dev/projects/e8a39a3e-4587-4b68-8cea-bccb710b5f2a/files/7bebf55d-49e7-4b27-9537-25910c417782.jpg",
    color: "#ef4444",
    glowColor: "rgba(239, 68, 68, 0.4)",
    category: "Бюджетные",
    items: [
      { id: "f1", name: "Пламенный AK", emoji: "🔥", rarity: "legendary", price: 6000, chance: 1 },
      { id: "f2", name: "M4 Огонь", emoji: "💥", rarity: "epic", price: 1800, chance: 7 },
      { id: "f3", name: "Glock Лава", emoji: "🌋", rarity: "rare", price: 450, chance: 22 },
      { id: "f4", name: "MP7 Пламя", emoji: "⚡", rarity: "rare", price: 320, chance: 25 },
      { id: "f5", name: "P250 Искра", emoji: "✨", rarity: "common", price: 90, chance: 45 },
    ]
  },
  {
    id: "neon-dreams",
    name: "Neon Dreams",
    price: 249,
    image: "https://cdn.poehali.dev/projects/e8a39a3e-4587-4b68-8cea-bccb710b5f2a/files/7bebf55d-49e7-4b27-9537-25910c417782.jpg",
    color: "#ec4899",
    glowColor: "rgba(236, 72, 153, 0.4)",
    category: "Популярные",
    items: [
      { id: "n1", name: "Neon Knife", emoji: "🌈", rarity: "legendary", price: 12000, chance: 0.8 },
      { id: "n2", name: "RGB Перчатки", emoji: "🎆", rarity: "epic", price: 2800, chance: 5 },
      { id: "n3", name: "Neon Glock", emoji: "💡", rarity: "rare", price: 560, chance: 24.2 },
      { id: "n4", name: "Flash USP", emoji: "⚡", rarity: "common", price: 180, chance: 70 },
    ]
  },
  {
    id: "starter-pack",
    name: "Starter Pack",
    price: 49,
    image: "https://cdn.poehali.dev/projects/e8a39a3e-4587-4b68-8cea-bccb710b5f2a/files/7bebf55d-49e7-4b27-9537-25910c417782.jpg",
    color: "#22c55e",
    glowColor: "rgba(34, 197, 94, 0.4)",
    category: "Бюджетные",
    items: [
      { id: "sp1", name: "Зелёный AK", emoji: "🌿", rarity: "epic", price: 800, chance: 3 },
      { id: "sp2", name: "Camo M4", emoji: "🎄", rarity: "rare", price: 280, chance: 17 },
      { id: "sp3", name: "Forest Knife", emoji: "🍃", rarity: "common", price: 120, chance: 80 },
    ]
  }
];

export const PLAYERS: Player[] = [
  { rank: 1, name: "NightShadow", avatar: "👾", level: 87, totalWon: 2840000, casesOpened: 4521, bestDrop: "Катана Тени", bestDropRarity: "legendary" },
  { rank: 2, name: "CyberWolf", avatar: "🐺", level: 74, totalWon: 1920000, casesOpened: 3102, bestDrop: "Золотой AK", bestDropRarity: "legendary" },
  { rank: 3, name: "StarlightX", avatar: "⭐", level: 68, totalWon: 1450000, casesOpened: 2876, bestDrop: "Диамантовые перчатки", bestDropRarity: "legendary" },
  { rank: 4, name: "DarkMatter", avatar: "🌑", level: 62, totalWon: 980000, casesOpened: 2234, bestDrop: "AK-47 Неоновый", bestDropRarity: "legendary" },
  { rank: 5, name: "PhoenixFire", avatar: "🔥", level: 58, totalWon: 750000, casesOpened: 1987, bestDrop: "AWP Дракон", bestDropRarity: "epic" },
  { rank: 6, name: "QuantumZ", avatar: "⚡", level: 52, totalWon: 620000, casesOpened: 1654, bestDrop: "Neon Knife", bestDropRarity: "legendary" },
  { rank: 7, name: "IceKing99", avatar: "❄️", level: 47, totalWon: 480000, casesOpened: 1432, bestDrop: "M4A4 Призрак", bestDropRarity: "legendary" },
  { rank: 8, name: "RedStorm", avatar: "🌪️", level: 43, totalWon: 380000, casesOpened: 1211, bestDrop: "Gloves Монарх", bestDropRarity: "rare" },
  { rank: 9, name: "SilverBullet", avatar: "🎯", level: 39, totalWon: 290000, casesOpened: 987, bestDrop: "Desert Eagle Киберпанк", bestDropRarity: "epic" },
  { rank: 10, name: "VoidWalker", avatar: "🕳️", level: 35, totalWon: 240000, casesOpened: 876, bestDrop: "Перчатки Хакера", bestDropRarity: "epic" },
];

export const ACHIEVEMENTS: Achievement[] = [
  { id: "first_open", name: "Первый шаг", description: "Открыть первый кейс", emoji: "🎮", unlocked: true },
  { id: "lucky_one", name: "Везунчик", description: "Выбить легендарный предмет", emoji: "🍀", unlocked: true },
  { id: "ten_cases", name: "Коллекционер", description: "Открыть 10 кейсов", emoji: "📦", unlocked: true },
  { id: "hundred_cases", name: "Ветеран", description: "Открыть 100 кейсов", emoji: "🏆", unlocked: false, progress: 43, maxProgress: 100 },
  { id: "big_win", name: "Джекпот", description: "Выбить предмет дороже 10,000₽", emoji: "💎", unlocked: false, progress: 0, maxProgress: 1 },
  { id: "level_10", name: "Опытный игрок", description: "Достичь 10 уровня", emoji: "⭐", unlocked: true },
  { id: "level_25", name: "Профессионал", description: "Достичь 25 уровня", emoji: "🌟", unlocked: false, progress: 12, maxProgress: 25 },
  { id: "daily_streak", name: "Постоянство", description: "Заходить 7 дней подряд", emoji: "🔥", unlocked: false, progress: 3, maxProgress: 7 },
];

export const USER_PROFILE = {
  name: "PlayerOne",
  avatar: "🎮",
  level: 12,
  xp: 3200,
  xpToNext: 5000,
  balance: 1250,
  casesOpened: 43,
  totalWon: 18400,
  totalSpent: 12300,
  rank: 142,
  joinDate: "Февраль 2025",
  recentDrops: [
    { name: "Desert Eagle Киберпанк", emoji: "🔫", rarity: "epic" as Rarity, price: 1800 },
    { name: "Нож Байонет", emoji: "🗡️", rarity: "rare" as Rarity, price: 650 },
    { name: "MP5 Цифровой", emoji: "🔧", rarity: "common" as Rarity, price: 120 },
    { name: "AWP Лазер", emoji: "🎯", rarity: "rare" as Rarity, price: 480 },
  ]
};
