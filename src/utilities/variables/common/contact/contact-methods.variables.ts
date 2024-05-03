//Types
import { contactMethodType } from "@utilities/types/contact/contact-methods.types";

//Images
import { SVG_ICONS } from "@assets/index.assets";

/**
 * Methods of contact to create the contact cards
 */
export const contactMethods: contactMethodType = [
  {
    icon: SVG_ICONS.contactIcons.EMAIL,
    platform: "Email",
    user: "youneslahouiti@duck.com",
    link: "mailto:youneslahouiti@duck.com",
  },
  {
    icon: SVG_ICONS.contactIcons.SLACK,
    platform: "Slack",
    user: "Younes Lahouiti",
    link: "https://join.slack.com/t/youneslahouiti/shared_invite/zt-1qfe0v2hi-LDy07LItG~zZ5KNtbjyl_w",
  },
  {
    icon: SVG_ICONS.contactIcons.WHATSAPP,
    platform: "WhatsApp",
    user: "Younes Lahouiti",
    link: "https://chat.whatsapp.com/Ihdu1DXUtDZ1Bn8jZ9NLdB",
  },
];
