import PaperPlaneIcon from "./PaperPlaneIcon/PaperPlaneIcon";
import ResumeIcon from "./ResumeIcon/ResumeIcon";
import BlobIcon from "./BlobIcon/BlobIcon";
import OpenLinkIcon from "./OpenLinkIcon/OpenLinkIcon";
import BugIcon from "./BugIcon/BugIcon";
import CalendarIcon from "./CalendarIcon/CalendarIcon";
import UpArrowIcon from "./UpArrowIcon/UpArrowIcon";
import SearchIcon from "./SearchIcon/SearchIcon";
import FlourishedCheckmarkIcon from "./FlourishedCheckmarkIcon/FlourishedCheckmarkIcon";
import HollowCheckIcon from "./HollowCheckIcon/HollowCheckIcon";
import RoundCheckIcon from "./RoundCheckIcon/RoundCheckIcon";
import RoundExclamationIcon from "./RoundExclamationIcon/RoundExclamationIcon";
import WorldIcon from "./WorldIcon/WorldIcon";

//Mobile navigation icons
import HomeMobileIcon from "./HomeMobileIcon/HomeMobileIcon";
import AboutMobileIcon from "./AboutMobileIcon/AboutMobileIcon";
import SkillsMobileIcon from "./SkillsMobileIcon/SkillsMobileIcon";
import ServicesMobileIcon from "./ServicesMobileIcon/ServicesMobileIcon";
import PortfolioMobileIcon from "./PortfolioMobileIcon/PortfolioMobileIcon";
import ContactMobileIcon from "./ContactMobileIcon/ContactMobileIcon";

export type IconProps = {
  width: number;
  height: number;
  fill: string;
};

/**
 * A *compound component* that holds all the available SVG icons (as components) for the application
 *
 * @type {Object} Icon in particular
 */
const Icons = {
  PaperPlane: PaperPlaneIcon,
  Resume: ResumeIcon,
  Blob: BlobIcon,
  OpenLink: OpenLinkIcon,
  Bug: BugIcon,
  Calendar: CalendarIcon,
  UpArrow: UpArrowIcon,
  HollowCheck: HollowCheckIcon,
  Search: SearchIcon,
  RoundCheck: RoundCheckIcon,
  RoundExclamation: RoundExclamationIcon,
  HomeMobile: HomeMobileIcon,
  AboutMobile: AboutMobileIcon,
  SkillsMobile: SkillsMobileIcon,
  ServicesMobile: ServicesMobileIcon,
  PortfolioMobile: PortfolioMobileIcon,
  ContactMobile: ContactMobileIcon,
  FlourishedCheckmark: FlourishedCheckmarkIcon,
  World: WorldIcon,
};

export default Icons;
