// Common icons
import UP_ARROW from "@public/svg/shared/arrow.svg";

// Home
import SEND_MAIL from "@public/svg/home/send.svg";

import BLOB from "@public/svg/home/blob.svg";

// About
import MEDAL from "@public/svg/about/medal.svg";

import BRIEFCASE from "@public/svg/about/briefcase.svg";

import HEADSET from "@public/svg/about/headset.svg";

import RESUME from "@public/svg/about/files.svg";

// Skills
import BADGE_CHECK from "@public/svg/skills/badge-check.svg";

import CALENDAR from "@public/svg/skills/calendar.svg";

// Services
import INTEGRATION from "@public/svg/services/integration.svg";

import SETTINGS from "@public/svg/services/settings.svg";

import CODE from "@public/svg/services/code.svg";

import CHECK from "@public/svg/services/check.svg";

// Portfolio
import SEARCH from "@public/svg/portfolio/magnifying-glass.svg";

// Contact
import EMAIL from "@public/svg/contact/email.svg";

import SLACK from "@public/svg/social-icons/slack-logo.svg";

import WHATSAPP from "@public/svg/social-icons/whatsapp-logo.svg";

// Header
import HOME_HEADER from "@public/svg/layout/header/home-header.svg";

import ABOUT_HEADER from "@public/svg/layout/header/person-header.svg";

import SKILLS_HEADER from "@public/svg/layout/header/skills-header.svg";

import SERVICES_HEADER from "@public/svg/layout/header/briefcase-header.svg";

import PORTFOLIO_HEADER from "@public/svg/layout/header/image-header.svg";

import CONTACT_HEADER from "@public/svg/layout/header/contact-header.svg";

// Footer
import BUG from "@public/svg/layout/footer/bug.svg";

import OPEN_NEW_TAB from "@public/svg/layout/footer/open-in-new-tab-icon.svg";

// Social icons
import YOUTUBE from "@public/svg/social-icons/youtube-icon.svg";

import X_TWITTER from "@public/svg/social-icons/twitter-icon.svg";

import LINKEDIN from "@public/svg/social-icons/linkedin-icon.svg";

import GITHUB from "@public/svg/social-icons/github-icon.svg";

import STACK_OVERFLOW from "@public/svg/social-icons/stackoverflow-icon.svg";

import NPM from "@public/svg/social-icons/npm-icon.svg";

import DISCORD from "@public/svg/social-icons/discord-icon.svg";

import CODE_PEN from "@public/svg/social-icons/codepen-icon.svg";

const commonIcons = { OPEN_NEW_TAB, BUG, UP_ARROW } as const;

const homeIcons = { SEND_MAIL, BLOB } as const;

const aboutIcons = { RESUME, MEDAL, BRIEFCASE, HEADSET } as const;

const skillsIcons = { BADGE_CHECK, CALENDAR } as const;

const servicesIcons = { INTEGRATION, SETTINGS, CODE, CHECK } as const;

const portfolioIcons = { SEARCH } as const;

const contactIcons = { EMAIL, SLACK, WHATSAPP } as const;

const socialIcons = {
  YOUTUBE,
  X_TWITTER,
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

const SVG_ICONS = {
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

export default SVG_ICONS;
