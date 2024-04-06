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
  ShareWhite,
  ArrowGray,
  Person,
  CircuitSage,
  NovaKnight,
  SilverSurfer,
  AceRunner,
  GalacticGuide,
  PixelPioneer,
  DigitalDruid,
  CodeMaster,
  StarGazer,
  QuantumLeap,
  MysteryMind,
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

export const BUTTONS_AMOUNT = 3;

export const REFERRAL_LINK_STEPS_LIST = [
  {
    id: 1,
    image: X,
    title: "Follow us on X",
    buttonText: "Follow",
    buttonIcon: <Arrow />,
    buttonDisabledIcon: <ArrowGray />,
    isDisabled: false,
  },
  {
    id: 2,
    image: Discord,
    title: "Join our Discord",
    buttonText: "Join",
    buttonIcon: <Arrow />,
    buttonDisabledIcon: <ArrowGray />,
    isDisabled: true,
  },
  {
    id: 3,
    image: Link,
    title: "Share your link",
    buttonText: "Share",
    buttonIcon: <ShareWhite />,
    buttonDisabledIcon: <Share />,
    isDisabled: true,
  },
];

export const AFTER_STEPS_COPY_LINK = 'https:/concent.ai/invite/nc0q9r48y4';

export const AFTER_STEPS_COPY_BUTTON_TEXT = "Copy";

export const AFTER_STEPS_UPPER = [
  {
    id: 1,
    icon: <Person />,
    title: "Earn 100 points per referral",
    text: "You will earn 25% of everything they earn, and a portion of the points their referrals earn",
  },
  {
    id: 2,
    icon: <Logo fill="rgba(255, 255, 255, 1)" />,
    title: "9 990",
    text: "Available Points",
  },
];

export const AFTER_STEPS_TITLEBLOCK_TEXT = "Invite friends to earn points and 25% of their points"

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
  { id: 4, text: "No Points" },
  { id: 5, text: "No Referrals" },
];

export const LEADERBOARD_HEADER_TITLES = [
  { id: 1, text: "Rank" },
  { id: 2, text: "Name" },
  { id: 3, text: "Invited by" },
  { id: 4, text: "Points" },
];

export const MY_POINTS_HEADER_TITLES = [
  { id: 1, text: "Timestamp" },
  { id: 2, text: "Source" },
  { id: 3, text: "Points" },
];

export const MY_REFERRALS_HEADER_TITLES = [
  { id: 1, text: "Joined" },
  { id: 2, text: "Name" },
  { id: 3, text: "Wallet" },
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
    points: "9 999 000",
  },
  {
    id: 2,
    rank: 2,
    name: "PixelPioneer",
    avatar: PixelPioneer,
    invitedBy: "",
    invitedByAvatar: "",
    points: "8 999 000",
  },
  {
    id: 3,
    rank: 3,
    name: "CodeMaster",
    avatar: CodeMaster,
    invitedBy: "AceRunner",
    invitedByAvatar: AceRunner,
    points: "909 000",
  },
  {
    id: 4,
    rank: 4,
    name: "StarGazer",
    avatar: StarGazer,
    invitedBy: "QuantumLeap",
    invitedByAvatar: QuantumLeap,
    points: "90 000",
  },
  {
    id: 5,
    rank: 5,
    name: "QuantumLeap",
    avatar: QuantumLeap,
    invitedBy: "",
    invitedByAvatar: "",
    points: "89 000",
  },
  {
    id: 6,
    rank: 6,
    name: "SilverSurfer",
    avatar: SilverSurfer,
    invitedBy: "",
    invitedByAvatar: "",
    points: "84 000",
  },
  {
    id: 7,
    rank: 7,
    name: "MysteryMind",
    avatar: MysteryMind,
    invitedBy: "SilverSurfer",
    invitedByAvatar: SilverSurfer,
    points: "80 000",
  },
  {
    id: 8,
    rank: 8,
    name: "DigitalDruid",
    avatar: DigitalDruid,
    invitedBy: "",
    invitedByAvatar: "",
    points: "72 000",
  },
  {
    id: 9,
    rank: 9,
    name: "NovaKnight",
    avatar: NovaKnight,
    invitedBy: "DigitalDruid",
    invitedByAvatar: DigitalDruid,
    points: "71 000",
  },
  {
    id: 10,
    rank: 10,
    name: "CircuitSage",
    avatar: CircuitSage,
    invitedBy: "NovaKnight",
    invitedByAvatar: NovaKnight,
    points: "0",
  },
];

export const MY_POINTS_ITEMS = [
  {
    id: 1,
    timestamp: "1 min. ago",
    source: "Referral @CircuitSage",
    sourceIcon: CircuitSage,
    points: "100",
  },
  {
    id: 2,
    timestamp: "Yesterday",
    source: "Joining Discord",
    sourceIcon: Discord,
    points: "100",
  },
  {
    id: 3,
    timestamp: "Jan 23",
    source: "Following X",
    sourceIcon: X,
    points: "100",
  },
];

export const MY_REFERRALS_ITEMS = [
  {
    id: 1,
    joined: "1 min. ago",
    name: "CircuitSage",
    avatar: CircuitSage,
    wallet: "0x000...000",
    points: "100",
  },
  {
    id: 2,
    joined: "Yesterday",
    name: "NovaKnight",
    avatar: NovaKnight,
    wallet: "0x000...000",
    points: "100",
  },
  {
    id: 3,
    joined: "Jan 23",
    name: "SilverSurfer",
    avatar: SilverSurfer,
    wallet: "0x000...000",
    points: "100",
  },
];

export const NO_POINTS_EMPTY = {
  icon: <Logo fill="rgba(255, 255, 255, 1)" />,
  title: "No points yet!",
  text: "Complete 3 easy steps and start earning points for referrals. Join to Discord and X to earn 200 point",
};

export const NO_REFERRALS_EMPTY = {
  icon: <Person />,
  title: "No referrals yet!",
  text: "Complete 3 easy steps and start earning points for referrals. Join Discord and follow us on  X to unlock referral link",
};

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
