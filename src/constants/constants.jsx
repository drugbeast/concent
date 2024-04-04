import {
  AIModels,
  Docs,
  Infrastructure,
  Web3,
  Logo,
  X,
  Discord,
  Link,
  Share,
  Arrow,
  CircuitSage,
  NovaKnight,
  SilverSurfer,
  AceRunner,
  GalacticGuide,
  AIModelsFooter,
  DocsFooter,
  InfrastructureFooter,
  Web3Footer,
} from "./index";

export const PATHS = {
  home: "/",
};

export const HEADER_NAVS = [
  {
    id: 1,
    text: "AI Models",
    icon: <AIModels />,
  },
  {
    id: 2,
    text: "Web-3",
    icon: <Web3 />,
  },
  { id: 3, text: "", icon: <Logo /> },
  {
    id: 4,
    text: "Infrastructure",
    icon: <Infrastructure />,
  },
  {
    id: 5,
    text: "Docs",
    icon: <Docs />,
  },
];

export const REFERRAL_LINK_TITLEBLOCK_TITLE = "Referral Link";

export const REFERRAL_LINK_TITLEBLOCK_TEXT =
  "Complete 3 easy steps and start earning points for referrals";

export const REFERRAL_LINK_STEPS_LIST = [
  {
    id: 1,
    image: X,
    title: "Follow us on X",
    buttonText: "Follow",
    buttonIcon: <Arrow />,
  },
  {
    id: 2,
    image: Discord,
    title: "Join our Discord",
    buttonText: "Join",
    buttonIcon: <Arrow />,
  },
  {
    id: 3,
    image: Link,
    title: "Share your link",
    buttonText: "Share",
    buttonIcon: <Share />,
  },
];

export const RECENT_JOINS_TITLEBLOCK_TITLE = "Recent Joins";

export const RECENT_JOINS_TITLEBLOCK_TEXT = "Last joined Concent enthusiasts";

export const RECENT_JOINS_USERS_LIST = [
  {
    id: 1,
    avatar: CircuitSage,
    nickname: "CircuitSage",
    joined: "1 min. ago",
  },
  {
    id: 2,
    avatar: NovaKnight,
    nickname: "NovaKnight",
    joined: "Yesterday",
  },
  {
    id: 3,
    avatar: SilverSurfer,
    nickname: "SilverSurfer",
    joined: "Mar 23",
  },
  {
    id: 4,
    avatar: AceRunner,
    nickname: "AceRunner",
    joined: "Dec 2, 2023",
  },
  {
    id: 5,
    avatar: GalacticGuide,
    nickname: "GalacticGuide",
    joined: "Nov 32, 2023",
  },
];

export const POINTS_BOARD_TITLE = "Points Board";

export const POINTS_BOARD_BUTTONS = [
  {
    id: 1,
    text: "Leaderboard",
  },
  {
    id: 2,
    text: "My Points",
  },
  {
    id: 3,
    text: "My Referrals",
  },
];

export const LEADERBOARD_HEADER_TITLES = [
  { id: 1, text: "Rank" },
  { id: 2, text: "Name" },
  { id: 3, text: "Invited by" },
  { id: 4, text: "Points" },
];

export const LEADERBOARD_ITEMS = [
  {
    id: 1,
    rank: 1,
    name: "AceRunner",
    avatar: AceRunner,
    invitedBy: "GalacticGuide",
    invitedByAvatar: GalacticGuide,
    points: 9999000
  }
]

export const FOOTER_NAVIGATION_TITLE = "Navigation";

export const FOOTER_NAVS = [
  {
    id: 1,
    text: "AI Models",
    icon: <AIModelsFooter />,
  },
  {
    id: 2,
    text: "Web-3",
    icon: <Web3Footer />,
  },
  {
    id: 3,
    text: "Infrastructure",
    icon: <InfrastructureFooter />,
  },
  {
    id: 4,
    text: "Docs",
    icon: <DocsFooter />,
  },
];

export const QR_AND_SOCIALS_TITLE =
  "Scan the QR code to join our Discord community";

export const SOCIALS_LIST_TITLE = "Socials";

export const SOCIALS_LIST = [
  { id: 1, text: "X (Twitter)" },
  { id: 2, text: "Telegram" },
  {
    id: 3,
    text: "Discord",
  },
];

export const SIERRAAI_FOOTER_TEXT = "Sierra AI, 2024";

export const PRIVACY_POLICY_LINK = "Privacy Policy";

export const TERMS_OF_USE_LINK = "Terms of Use";
