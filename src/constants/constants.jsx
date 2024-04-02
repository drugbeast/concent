import AIModels from "../assets/images/header-icons/AIModels.svg?react";
import Docs from "../assets/images/header-icons/docs.svg?react";
import Infrastructure from "../assets/images/header-icons/infrastructure.svg?react";
import Web3 from "../assets/images/header-icons/web3.svg?react";
import Logo from "../assets/images/logo.svg?react";

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
