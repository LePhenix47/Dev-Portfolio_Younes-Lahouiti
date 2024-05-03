// Common icons
import BUG from "@public/svg/bug.svg";

import OPEN_NEW_TAB from "@public/svg/open-in-new-tab-icon.svg";

import UP_ARROW from "@public/svg/arrow.svg";

// Home
import SEND_MAIL from "@public/svg/send.svg";

import BLOB from "@public/svg/blob.svg";

// About
import MEDAL from "@public/svg/medal.svg";

import BRIEFCASE from "@public/svg/briefcase.svg";

import HEADSET from "@public/svg/headset.svg";

import RESUME from "@public/svg/files.svg";

// Skills
import BADGE_CHECK from "@public/svg/badge-check.svg";

import CALENDAR from "@public/svg/calendar.svg";

// Services
import INTEGRATION from "@public/svg/integration.svg";

import SETTINGS from "@public/svg/settings.svg";

import CODE from "@public/svg/code.svg";

import CHECK from "@public/svg/check.svg";

// Portfolio
import SEARCH from "@public/svg/magnifying-glass.svg";

// Contact
import EMAIL from "@public/svg/email.svg";

import SLACK from "@public/svg/slack-logo.svg";

import WHATSAPP from "@public/svg/whatsapp-logo.svg";

// Mobile
import HOME_HEADER from "@public/svg/home-header.svg";

import ABOUT_HEADER from "@public/svg/person-header.svg";

import SKILLS_HEADER from "@public/svg/skills-header.svg";

import SERVICES_HEADER from "@public/svg/briefcase-header.svg";

import PORTFOLIO_HEADER from "@public/svg/image-header.svg";

import CONTACT_HEADER from "@public/svg/contact-header.svg";

// Social icons
import YOUTUBE from "@public/svg/youtube-icon.svg";

import TWITTER from "@public/svg/twitter-icon.svg";

import LINKEDIN from "@public/svg/linkedin-icon.svg";

import GITHUB from "@public/svg/github-icon.svg";

import STACK_OVERFLOW from "@public/svg/stackoverflow-icon.svg";

import NPM from "@public/svg/npm-icon.svg";

import DISCORD from "@public/svg/discord-icon.svg";

import CODE_PEN from "@public/svg/codepen-icon.svg";

const commonIcons = { OPEN_NEW_TAB, BUG, UP_ARROW } as const;

const homeIcons = { SEND_MAIL, BLOB } as const;

const aboutIcons = { RESUME, MEDAL, BRIEFCASE, HEADSET } as const;

const skillsIcons = { BADGE_CHECK, CALENDAR } as const;

const servicesIcons = { INTEGRATION, SETTINGS, CODE, CHECK } as const;

const portfolioIcons = { SEARCH } as const;

const contactIcons = { EMAIL, SLACK, WHATSAPP } as const;

const socialIcons = {
  YOUTUBE,
  TWITTER,
  LINKEDIN,
  GITHUB,
  STACK_OVERFLOW,
  NPM,
  DISCORD,
  CODE_PEN,
} as const;

const mobileHeaderIcons = {
  HOME_HEADER,
  ABOUT_HEADER,
  SKILLS_HEADER,
  SERVICES_HEADER,
  PORTFOLIO_HEADER,
  CONTACT_HEADER,
} as const;

const SVG = {
  commonIcons,
  homeIcons,
  aboutIcons,
  skillsIcons,
  servicesIcons,
  portfolioIcons,
  contactIcons,
  socialIcons,
  mobileHeaderIcons,
} as const;

export default SVG;
