import { socialAccountType } from "@utilities/types/home/social-accounts.types";

import LINKEDIN from "@public/svg/linkedin-icon.svg";
import X_TWITTER from "@public/svg/twitter-icon.svg";
import YOUTUBE from "@public/svg/youtube-icon.svg";
import GITHUB from "@public/svg/github-icon.svg";
import STACKOVERFLOW from "@public/svg/stackoverflow-icon.svg";
import NPM from "@public/svg/npm-icon.svg";
import DISCORD from "@public/svg/discord-icon.svg";
import CODEPEN from "@public/svg/codepen-icon.svg";

export const socialAccountVariables: socialAccountType = [
  {
    srcIcon: LINKEDIN,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/younes-💻-lahouiti-939a1a224/",
    needsInversionOnDarkMode: false,
  },
  {
    srcIcon: X_TWITTER,
    title: "X (Twitter)",
    link: "https://www.twitter.com/Younes_Lahouiti",
    needsInversionOnDarkMode: true,
  },
  {
    srcIcon: YOUTUBE,
    title: "YouTube",
    link: "https://www.youtube.com/@LePhenixGD",
    needsInversionOnDarkMode: false,
  },
  {
    srcIcon: GITHUB,
    title: "GitHub",
    link: "https://www.github.com/LePhenix47",
    needsInversionOnDarkMode: true,
  },
  {
    srcIcon: STACKOVERFLOW,
    title: "StackOverflow",
    link: "https://www.stackoverflow.com/users/16984856/le-phenix-47",
    needsInversionOnDarkMode: false,
  },
  {
    srcIcon: NPM,
    title: "NPM",
    link: "https://www.npmjs.com/~lephenix47",
    needsInversionOnDarkMode: false,
  },
  {
    srcIcon: DISCORD,
    title: "Discord",
    link: "https://discord.com/users/474540707156066304",
    needsInversionOnDarkMode: false,
  },
  {
    srcIcon: CODEPEN,
    title: "CodePen",
    link: "https://codepen.io/phenix47",
    needsInversionOnDarkMode: true,
  },
];
