import {
  dark,
  darksBlue,
  light,
  lightsBlue,
  system,
  systemsBlue,
} from "../utils";

export const themeOptions = [
  { img: light, text: "Light", imgBlue: lightsBlue },
  { img: dark, text: "Dark", imgBlue: darksBlue },
  { img: system, text: "System", imgBlue: systemsBlue },
];

export const searchMenu = ["Navbar float", "Navbar fixed", "Navbar sticky"];

export const menuComponents = [
  {
    title: "Get Started",
    content: [
      { text: "What is this?", link: "/" },
      { text: "Installation", link: "/installation" },
    ],
  },
];
