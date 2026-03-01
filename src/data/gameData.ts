export type Rarity = "common" | "rare" | "epic" | "legendary";

export interface Item {
  id: string;
  name: string;
  fullName: string;
  image: string;
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

// Steam CDN base
const S = "https://steamcommunity-a.akamaihd.net/economy/image/";

export const CASES: Case[] = [
  {
    id: "jabka-case",
    name: "Жабка Кейс",
    price: 249,
    image: "https://cdn.poehali.dev/projects/e8a39a3e-4587-4b68-8cea-bccb710b5f2a/bucket/c1108cc8-00da-49cb-afb5-e9406b12f1ba.png",
    color: "#c8a84b",
    glowColor: "rgba(200, 168, 75, 0.4)",
    category: "Популярные",
    items: [
      {
        id: "j1",
        name: "Butterfly Knife | Slaughter",
        fullName: "★ Butterfly Knife | Slaughter",
        image: `${S}-9a81dlWLwohmlRUTrrjDXe5XU57SAoVu4dz2RqVXZT5r56RT3lM_9y_-gZXgV72sEwFa_gMPRlRPunhFnA-bm4i3ItCcVR_yGABvYG3bfQo3j_bGZDn9xCUvYmPnYqIkr_DQPS0iuyCU67H5YXjhl2y-hA/360fx360f`,
        rarity: "legendary",
        price: 175367,
        chance: 0.05,
      },
      {
        id: "j2",
        name: "M9 Bayonet | Case Hardened",
        fullName: "★ M9 Bayonet | Case Hardened",
        image: `${S}-9a81dlWLwohmlRUTrrjDXe5XU57SAoVu4dz2RqVXZT5r56RT3lM_9y_-gZXgV72sEwFa_gMPRlRPunhFnA-bm4i3ItCcVR_yGABvYG3bfQo3j_bGZDn9xCUvYmPnYqIkr_DQPS0iuyCU67H5YXjhl2y-hA/360fx360f`,
        rarity: "legendary",
        price: 161987,
        chance: 0.06,
      },
      {
        id: "j3",
        name: "Karambit | Lore",
        fullName: "★ Karambit | Lore",
        image: `${S}-9a81dlWLwohmlRUTrrjDXe5XU57SAoVu4dz2RqVXZT5r56RT3lM_9y_-gZXgV72sEwFa_gMPRlRPunhFnA-bm4i3ItCcVR_yGABvYG3bfQo3j_bGZDn9xCUvYmPnYqIkr_DQPS0iuyCU67H5YXjhl2y-hA/360fx360f`,
        rarity: "legendary",
        price: 151416,
        chance: 0.07,
      },
      {
        id: "j4",
        name: "M9 Bayonet | Ultraviolet",
        fullName: "★ M9 Bayonet | Ultraviolet",
        image: `${S}-9a81dlWLwohmlRUTrrjDXe5XU57SAoVu4dz2RqVXZT5r56RT3lM_9y_-gZXgV72sEwFa_gMPRlRPunhFnA-bm4i3ItCcVR_yGABvYG3bfQo3j_bGZDn9xCUvYmPnYqIkr_DQPS0iuyCU67H5YXjhl2y-hA/360fx360f`,
        rarity: "legendary",
        price: 151391,
        chance: 0.07,
      },
      {
        id: "j5",
        name: "Butterfly Knife | Tiger Tooth",
        fullName: "★ Butterfly Knife | Tiger Tooth",
        image: `${S}-9a81dlWLwohmlRUTrrjDXe5XU57SAoVu4dz2RqVXZT5r56RT3lM_9y_-gZXgV72sEwFa_gMPRlRPunhFnA-bm4i3ItCcVR_yGABvYG3bfQo3j_bGZDn9xCUvYmPnYqIkr_DQPS0iuyCU67H5YXjhl2y-hA/360fx360f`,
        rarity: "legendary",
        price: 135104,
        chance: 0.08,
      },
      {
        id: "j6",
        name: "M9 Bayonet | Tiger Tooth",
        fullName: "★ M9 Bayonet | Tiger Tooth",
        image: `${S}-9a81dlWLwohmlRUTrrjDXe5XU57SAoVu4dz2RqVXZT5r56RT3lM_9y_-gZXgV72sEwFa_gMPRlRPunhFnA-bm4i3ItCcVR_yGABvYG3bfQo3j_bGZDn9xCUvYmPnYqIkr_DQPS0iuyCU67H5YXjhl2y-hA/360fx360f`,
        rarity: "legendary",
        price: 105355,
        chance: 0.1,
      },
      {
        id: "j7",
        name: "Sport Gloves | Big Game",
        fullName: "★ Sport Gloves | Big Game",
        image: `${S}-9a81dlWLwohmlRUTrrjDXe5XU57SAoVu4dz2RqVXZT5r56RT3lM_9y_-gZXgV72sEwFa_gMPRlRPunhFnA-bm4i3ItCcVR_yGABvYG3bfQo3j_bGZDn9xCUvYmPnYqIkr_DQPS0iuyCU67H5YXjhl2y-hA/360fx360f`,
        rarity: "legendary",
        price: 98059,
        chance: 0.12,
      },
      {
        id: "j8",
        name: "Specialist Gloves | Fade",
        fullName: "★ Specialist Gloves | Fade",
        image: `${S}-9a81dlWLwohmlRUTrrjDXe5XU57SAoVu4dz2RqVXZT5r56RT3lM_9y_-gZXgV72sEwFa_gMPRlRPunhFnA-bm4i3ItCcVR_yGABvYG3bfQo3j_bGZDn9xCUvYmPnYqIkr_DQPS0iuyCU67H5YXjhl2y-hA/360fx360f`,
        rarity: "epic",
        price: 79496,
        chance: 0.2,
      },
      {
        id: "j9",
        name: "Specialist Gloves | Forest DDPAT",
        fullName: "★ Specialist Gloves | Forest DDPAT",
        image: `${S}-9a81dlWLwohmlRUTrrjDXe5XU57SAoVu4dz2RqVXZT5r56RT3lM_9y_-gZXgV72sEwFa_gMPRlRPunhFnA-bm4i3ItCcVR_yGABvYG3bfQo3j_bGZDn9xCUvYmPnYqIkr_DQPS0iuyCU67H5YXjhl2y-hA/360fx360f`,
        rarity: "epic",
        price: 69519,
        chance: 0.25,
      },
      {
        id: "j10",
        name: "Moto Gloves | Polygon",
        fullName: "★ Moto Gloves | Polygon",
        image: `${S}-9a81dlWLwohmlRUTrrjDXe5XU57SAoVu4dz2RqVXZT5r56RT3lM_9y_-gZXgV72sEwFa_gMPRlRPunhFnA-bm4i3ItCcVR_yGABvYG3bfQo3j_bGZDn9xCUvYmPnYqIkr_DQPS0iuyCU67H5YXjhl2y-hA/360fx360f`,
        rarity: "epic",
        price: 68313,
        chance: 0.3,
      },
      {
        id: "j11",
        name: "Bloodhound Gloves | Bronzed",
        fullName: "★ Bloodhound Gloves | Bronzed",
        image: `${S}-9a81dlWLwohmlRUTrrjDXe5XU57SAoVu4dz2RqVXZT5r56RT3lM_9y_-gZXgV72sEwFa_gMPRlRPunhFnA-bm4i3ItCcVR_yGABvYG3bfQo3j_bGZDn9xCUvYmPnYqIkr_DQPS0iuyCU67H5YXjhl2y-hA/360fx360f`,
        rarity: "epic",
        price: 65253,
        chance: 0.35,
      },
      {
        id: "j12",
        name: "Butterfly Knife | Bright Water",
        fullName: "★ Butterfly Knife | Bright Water",
        image: `${S}-9a81dlWLwohmlRUTrrjDXe5XU57SAoVu4dz2RqVXZT5r56RT3lM_9y_-gZXgV72sEwFa_gMPRlRPunhFnA-bm4i3ItCcVR_yGABvYG3bfQo3j_bGZDn9xCUvYmPnYqIkr_DQPS0iuyCU67H5YXjhl2y-hA/360fx360f`,
        rarity: "epic",
        price: 58053,
        chance: 0.4,
      },
      {
        id: "j13",
        name: "Karambit | Crimson Web",
        fullName: "★ Karambit | Crimson Web",
        image: `${S}-9a81dlWLwohmlRUTrrjDXe5XU57SAoVu4dz2RqVXZT5r56RT3lM_9y_-gZXgV72sEwFa_gMPRlRPunhFnA-bm4i3ItCcVR_yGABvYG3bfQo3j_bGZDn9xCUvYmPnYqIkr_DQPS0iuyCU67H5YXjhl2y-hA/360fx360f`,
        rarity: "epic",
        price: 57302,
        chance: 0.45,
      },
      {
        id: "j14",
        name: "M9 Bayonet | Crimson Web",
        fullName: "★ M9 Bayonet | Crimson Web",
        image: `${S}-9a81dlWLwohmlRUTrrjDXe5XU57SAoVu4dz2RqVXZT5r56RT3lM_9y_-gZXgV72sEwFa_gMPRlRPunhFnA-bm4i3ItCcVR_yGABvYG3bfQo3j_bGZDn9xCUvYmPnYqIkr_DQPS0iuyCU67H5YXjhl2y-hA/360fx360f`,
        rarity: "epic",
        price: 56251,
        chance: 0.5,
      },
      {
        id: "j15",
        name: "Talon Knife | Slaughter",
        fullName: "★ Talon Knife | Slaughter",
        image: `${S}-9a81dlWLwohmlRUTrrjDXe5XU57SAoVu4dz2RqVXZT5r56RT3lM_9y_-gZXgV72sEwFa_gMPRlRPunhFnA-bm4i3ItCcVR_yGABvYG3bfQo3j_bGZDn9xCUvYmPnYqIkr_DQPS0iuyCU67H5YXjhl2y-hA/360fx360f`,
        rarity: "epic",
        price: 53796,
        chance: 0.6,
      },
      {
        id: "j16",
        name: "Bayonet | Urban Masked",
        fullName: "★ Bayonet | Urban Masked",
        image: `${S}-9a81dlWLwohmlRUTrrjDXe5XU57SAoVu4dz2RqVXZT5r56RT3lM_9y_-gZXgV72sEwFa_gMPRlRPunhFnA-bm4i3ItCcVR_yGABvYG3bfQo3j_bGZDn9xCUvYmPnYqIkr_DQPS0iuyCU67H5YXjhl2y-hA/360fx360f`,
        rarity: "rare",
        price: 36290,
        chance: 1.5,
      },
      {
        id: "j17",
        name: "Skeleton Knife | Case Hardened",
        fullName: "★ Skeleton Knife | Case Hardened",
        image: `${S}-9a81dlWLwohmlRUTrrjDXe5XU57SAoVu4dz2RqVXZT5r56RT3lM_9y_-gZXgV72sEwFa_gMPRlRPunhFnA-bm4i3ItCcVR_yGABvYG3bfQo3j_bGZDn9xCUvYmPnYqIkr_DQPS0iuyCU67H5YXjhl2y-hA/360fx360f`,
        rarity: "rare",
        price: 34111,
        chance: 1.7,
      },
      {
        id: "j18",
        name: "Talon Knife | Stained",
        fullName: "★ Talon Knife | Stained",
        image: `${S}-9a81dlWLwohmlRUTrrjDXe5XU57SAoVu4dz2RqVXZT5r56RT3lM_9y_-gZXgV72sEwFa_gMPRlRPunhFnA-bm4i3ItCcVR_yGABvYG3bfQo3j_bGZDn9xCUvYmPnYqIkr_DQPS0iuyCU67H5YXjhl2y-hA/360fx360f`,
        rarity: "rare",
        price: 30444,
        chance: 2.0,
      },
      {
        id: "j19",
        name: "Stiletto Knife | Damascus Steel",
        fullName: "★ Stiletto Knife | Damascus Steel",
        image: `${S}-9a81dlWLwohmlRUTrrjDXe5XU57SAoVu4dz2RqVXZT5r56RT3lM_9y_-gZXgV72sEwFa_gMPRlRPunhFnA-bm4i3ItCcVR_yGABvYG3bfQo3j_bGZDn9xCUvYmPnYqIkr_DQPS0iuyCU67H5YXjhl2y-hA/360fx360f`,
        rarity: "rare",
        price: 22755,
        chance: 2.5,
      },
      {
        id: "j20",
        name: "Nomad Knife | Forest DDPAT",
        fullName: "★ Nomad Knife | Forest DDPAT",
        image: `${S}-9a81dlWLwohmlRUTrrjDXe5XU57SAoVu4dz2RqVXZT5r56RT3lM_9y_-gZXgV72sEwFa_gMPRlRPunhFnA-bm4i3ItCcVR_yGABvYG3bfQo3j_bGZDn9xCUvYmPnYqIkr_DQPS0iuyCU67H5YXjhl2y-hA/360fx360f`,
        rarity: "rare",
        price: 20252,
        chance: 3.0,
      },
      {
        id: "j21",
        name: "Nomad Knife | Crimson Web",
        fullName: "★ Nomad Knife | Crimson Web",
        image: `${S}-9a81dlWLwohmlRUTrrjDXe5XU57SAoVu4dz2RqVXZT5r56RT3lM_9y_-gZXgV72sEwFa_gMPRlRPunhFnA-bm4i3ItCcVR_yGABvYG3bfQo3j_bGZDn9xCUvYmPnYqIkr_DQPS0iuyCU67H5YXjhl2y-hA/360fx360f`,
        rarity: "rare",
        price: 17149,
        chance: 3.5,
      },
      {
        id: "j22",
        name: "Bowie Knife | Night",
        fullName: "★ Bowie Knife | Night",
        image: `${S}-9a81dlWLwohmlRUTrrjDXe5XU57SAoVu4dz2RqVXZT5r56RT3lM_9y_-gZXgV72sEwFa_gMPRlRPunhFnA-bm4i3ItCcVR_yGABvYG3bfQo3j_bGZDn9xCUvYmPnYqIkr_DQPS0iuyCU67H5YXjhl2y-hA/360fx360f`,
        rarity: "rare",
        price: 15950,
        chance: 4.0,
      },
      {
        id: "j23",
        name: "Bowie Knife | Case Hardened",
        fullName: "★ Bowie Knife | Case Hardened",
        image: `${S}-9a81dlWLwohmlRUTrrjDXe5XU57SAoVu4dz2RqVXZT5r56RT3lM_9y_-gZXgV72sEwFa_gMPRlRPunhFnA-bm4i3ItCcVR_yGABvYG3bfQo3j_bGZDn9xCUvYmPnYqIkr_DQPS0iuyCU67H5YXjhl2y-hA/360fx360f`,
        rarity: "rare",
        price: 15349,
        chance: 4.5,
      },
      {
        id: "j24",
        name: "Nomad Knife | Ultraviolet",
        fullName: "★ Nomad Knife | Ultraviolet",
        image: `${S}-9a81dlWLwohmlRUTrrjDXe5XU57SAoVu4dz2RqVXZT5r56RT3lM_9y_-gZXgV72sEwFa_gMPRlRPunhFnA-bm4i3ItCcVR_yGABvYG3bfQo3j_bGZDn9xCUvYmPnYqIkr_DQPS0iuyCU67H5YXjhl2y-hA/360fx360f`,
        rarity: "common",
        price: 15166,
        chance: 5.0,
      },
      {
        id: "j25",
        name: "Navaja Knife | Case Hardened",
        fullName: "★ Navaja Knife | Case Hardened",
        image: `${S}-9a81dlWLwohmlRUTrrjDXe5XU57SAoVu4dz2RqVXZT5r56RT3lM_9y_-gZXgV72sEwFa_gMPRlRPunhFnA-bm4i3ItCcVR_yGABvYG3bfQo3j_bGZDn9xCUvYmPnYqIkr_DQPS0iuyCU67H5YXjhl2y-hA/360fx360f`,
        rarity: "common",
        price: 14623,
        chance: 67.43,
      },
    ],
  },
  {
    id: "cyber-strike",
    name: "Cyber Strike",
    price: 199,
    image: "https://cdn.poehali.dev/projects/e8a39a3e-4587-4b68-8cea-bccb710b5f2a/files/7bebf55d-49e7-4b27-9537-25910c417782.jpg",
    color: "#00f5ff",
    glowColor: "rgba(0, 245, 255, 0.4)",
    category: "Популярные",
    items: [
      { id: "c1", name: "AK-47 | Неоновый", fullName: "AK-47 | Neon Revolution", image: "", rarity: "legendary", price: 8500, chance: 1 },
      { id: "c2", name: "Перчатки Хакера", fullName: "Sport Gloves | Vice", image: "", rarity: "epic", price: 2200, chance: 5 },
      { id: "c3", name: "Desert Eagle | Киберпанк", fullName: "Desert Eagle | Cobalt Disruption", image: "", rarity: "epic", price: 1800, chance: 8 },
      { id: "c4", name: "Нож Байонет", fullName: "Bayonet | Fade", image: "", rarity: "rare", price: 650, chance: 20 },
      { id: "c5", name: "AWP | Лазер", fullName: "AWP | Electric Hive", image: "", rarity: "rare", price: 480, chance: 25 },
      { id: "c6", name: "MP5 | Цифровой", fullName: "MP5-SD | Phosphor", image: "", rarity: "common", price: 120, chance: 41 },
    ],
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
      { id: "g1", name: "Золотой AK", fullName: "AK-47 | Gold Arabesque", image: "", rarity: "legendary", price: 25000, chance: 0.3 },
      { id: "g2", name: "Диамантовые перчатки", fullName: "Sport Gloves | Diamond", image: "", rarity: "legendary", price: 18000, chance: 0.7 },
      { id: "g3", name: "AWP | Дракон", fullName: "AWP | Dragon Lore", image: "", rarity: "epic", price: 5500, chance: 4 },
      { id: "g4", name: "Нож Золото", fullName: "Karambit | Lore", image: "", rarity: "epic", price: 3800, chance: 7 },
      { id: "g5", name: "Gloves | Монарх", fullName: "Hand Wraps | King Snake", image: "", rarity: "rare", price: 980, chance: 18 },
      { id: "g6", name: "USP | Золото", fullName: "USP-S | Gold", image: "", rarity: "common", price: 350, chance: 70 },
    ],
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
      { id: "f1", name: "Пламенный AK", fullName: "AK-47 | Fire Serpent", image: "", rarity: "legendary", price: 6000, chance: 1 },
      { id: "f2", name: "M4 | Огонь", fullName: "M4A4 | Howl", image: "", rarity: "epic", price: 1800, chance: 7 },
      { id: "f3", name: "Glock | Лава", fullName: "Glock-18 | Wasteland Rebel", image: "", rarity: "rare", price: 450, chance: 22 },
      { id: "f4", name: "MP7 | Пламя", fullName: "MP7 | Bloodsport", image: "", rarity: "rare", price: 320, chance: 25 },
      { id: "f5", name: "P250 | Искра", fullName: "P250 | Splash", image: "", rarity: "common", price: 90, chance: 45 },
    ],
  },
];

export const PLAYERS: Player[] = [
  { rank: 1, name: "NightShadow", avatar: "👾", level: 87, totalWon: 2840000, casesOpened: 4521, bestDrop: "Butterfly Knife | Slaughter", bestDropRarity: "legendary" },
  { rank: 2, name: "CyberWolf", avatar: "🐺", level: 74, totalWon: 1920000, casesOpened: 3102, bestDrop: "Karambit | Lore", bestDropRarity: "legendary" },
  { rank: 3, name: "StarlightX", avatar: "⭐", level: 68, totalWon: 1450000, casesOpened: 2876, bestDrop: "M9 Bayonet | Case Hardened", bestDropRarity: "legendary" },
  { rank: 4, name: "DarkMatter", avatar: "🌑", level: 62, totalWon: 980000, casesOpened: 2234, bestDrop: "Specialist Gloves | Fade", bestDropRarity: "epic" },
  { rank: 5, name: "PhoenixFire", avatar: "🔥", level: 58, totalWon: 750000, casesOpened: 1987, bestDrop: "Butterfly Knife | Tiger Tooth", bestDropRarity: "legendary" },
  { rank: 6, name: "QuantumZ", avatar: "⚡", level: 52, totalWon: 620000, casesOpened: 1654, bestDrop: "Karambit | Crimson Web", bestDropRarity: "epic" },
  { rank: 7, name: "IceKing99", avatar: "❄️", level: 47, totalWon: 480000, casesOpened: 1432, bestDrop: "Sport Gloves | Big Game", bestDropRarity: "legendary" },
  { rank: 8, name: "RedStorm", avatar: "🌪️", level: 43, totalWon: 380000, casesOpened: 1211, bestDrop: "Talon Knife | Slaughter", bestDropRarity: "epic" },
  { rank: 9, name: "SilverBullet", avatar: "🎯", level: 39, totalWon: 290000, casesOpened: 987, bestDrop: "Bayonet | Urban Masked", bestDropRarity: "rare" },
  { rank: 10, name: "VoidWalker", avatar: "🕳️", level: 35, totalWon: 240000, casesOpened: 876, bestDrop: "Nomad Knife | Forest DDPAT", bestDropRarity: "rare" },
];

export const ACHIEVEMENTS: Achievement[] = [
  { id: "first_open", name: "Первый шаг", description: "Открыть первый кейс", emoji: "🎮", unlocked: true },
  { id: "lucky_one", name: "Везунчик", description: "Выбить легендарный предмет", emoji: "🍀", unlocked: true },
  { id: "ten_cases", name: "Коллекционер", description: "Открыть 10 кейсов", emoji: "📦", unlocked: true },
  { id: "hundred_cases", name: "Ветеран", description: "Открыть 100 кейсов", emoji: "🏆", unlocked: false, progress: 43, maxProgress: 100 },
  { id: "big_win", name: "Джекпот", description: "Выбить предмет дороже 100,000₽", emoji: "💎", unlocked: false, progress: 0, maxProgress: 1 },
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
    { name: "Specialist Gloves | Fade", image: "", rarity: "epic" as Rarity, price: 79496 },
    { name: "Talon Knife | Slaughter", image: "", rarity: "epic" as Rarity, price: 53796 },
    { name: "Nomad Knife | Forest DDPAT", image: "", rarity: "rare" as Rarity, price: 20252 },
    { name: "Navaja Knife | Case Hardened", image: "", rarity: "common" as Rarity, price: 14623 },
  ]
};
