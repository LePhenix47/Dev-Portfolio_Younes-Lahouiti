//Types
import { contactMethodType } from "../../../types/contact/contact-methods.types";

//Images
import EMAIL from "@public/svg/email.svg";
import SLACK from "@public/svg/slack-logo.svg";
import WHATSAPP from "@public/svg/whatsapp-logo.svg";

/**
 * Methods of contact to create the contact cards
 */
export const contactMethods: contactMethodType = [
  {
    icon: EMAIL,
    platform: "Email",
    user: "youneslahouiti@duck.com",
    link: "mailto:youneslahouiti@duck.com",
  },
  {
    icon: SLACK,
    platform: "Slack",
    user: "Younes Lahouiti",
    link: "https://join.slack.com/t/youneslahouiti/shared_invite/zt-1qfe0v2hi-LDy07LItG~zZ5KNtbjyl_w",
  },
  {
    icon: WHATSAPP,
    platform: "WhatsApp",
    user: "Younes Lahouiti",
    link: "https://chat.whatsapp.com/Ihdu1DXUtDZ1Bn8jZ9NLdB",
  },
];
