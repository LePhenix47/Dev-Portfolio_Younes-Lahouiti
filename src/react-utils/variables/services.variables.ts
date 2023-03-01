//Utils
import { serviceType } from "../types/services.types";

//Images
import integrationIcon from "../../../public/svg/integration.svg";
import debuggingIcon from "../../../public/svg/settings.svg";
import apiIcon from "../../../public/svg/code.svg";

export const offeredServices: serviceType = [
  {
    icon: integrationIcon,
    title: "Integration",
    description: "",
    qualities: ["", ""],
  },
  {
    icon: debuggingIcon,
    title: "Debugging and dynamization",
    description: "",
    qualities: ["", ""],
  },
  {
    icon: apiIcon,
    title: "API creation",
    description: "",
    qualities: ["", ""],
  },
];
