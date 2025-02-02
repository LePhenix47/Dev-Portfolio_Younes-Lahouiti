//Types

import { PNG_IMAGES } from "@assets/index.assets";
import { ProjectsMadeType } from "@utilities/types/portfolio/projects.types";

/**
 * Constant containing projects from my OpenClassrooms traineeships
 */
export const openClassroomsProjects: ProjectsMadeType = [
  {
    title: "[DW] P3: ohmyfood",
    image: PNG_IMAGES.P3_DW,
    link: "https://github.com/LePhenix47/LahouitiYounes_3_26012022-Fix",
    type: "oc",
    date: new Date("01/26/2022"),
  },
  {
    title: "[DW] P2: Reservia",
    image: PNG_IMAGES.P2_DW,
    link: "https://github.com/LePhenix47/LahouitiYounes_2_09012022",
    type: "oc",
    date: new Date("01/09/2022"),
  },

  {
    title: "[DW] P4: Agence la Panthère",
    image: PNG_IMAGES.P4_DW,
    link: "https://github.com/LePhenix47/LahouitiYounes_4_25022022--After",
    type: "oc",
    date: new Date("02/25/2022"),
  },
  {
    title: "[DW] P5: Kanap",
    image: PNG_IMAGES.P5_DW,
    link: "https://github.com/LePhenix47/LahouitiYounes_5_30032022",
    type: "oc",
    date: new Date("03/30/2022"),
  },
  {
    title: "[DW] P6: HotTakes",
    image: PNG_IMAGES.P6_DW,
    link: "https://github.com/LePhenix47/LahouitiYounes_6_28042022",
    type: "oc",
    date: new Date("04/28/2022"),
  },
  {
    title: "[DW] P7: Groupomania",
    image: PNG_IMAGES.P7_DW,
    link: "https://github.com/LePhenix47/LahouitiYounes_7_11052022",
    type: "oc",
    date: new Date("05/11/2022"),
  },
  {
    title: "[JS-React] P4: GameOn",
    image: PNG_IMAGES.P4_JSReact,
    link: "https://github.com/LePhenix47/Lahouiti_Younes_4_25092022",
    type: "oc",
    date: new Date("09/25/2022"),
  },
  {
    title: "[JS-React] P6: FishEye",
    image: PNG_IMAGES.P6_JSReact,
    link: "https://github.com/LePhenix47/Lahouiti_Younes_6_28092022",
    type: "oc",
    date: new Date("09/28/2022"),
  },
  {
    title: "[JS-React] P7: Les petits plats",
    image: PNG_IMAGES.P7_JSReact,
    link: "https://github.com/LePhenix47/Lahouiti_Younes_7_16102022",
    type: "oc",
    date: new Date("10/16/2022"),
  },
  {
    title: "[JS-React] P9: Billed",
    image: PNG_IMAGES.P9_JSReact,
    link: "https://github.com/LePhenix47/Lahouiti_Younes_9_06112022--Fix",
    type: "oc",
    date: new Date("11/06/2022"),
  },
  {
    title: "[JS-React] P11: Kasa",
    image: PNG_IMAGES.P11_JSReact,
    link: "https://github.com/LePhenix47/Lahouiti_Younes_11_20122022",
    type: "oc",
    date: new Date("12/20/2022"),
  },
  {
    title: "[JS-React] P12: SportSee",
    image: PNG_IMAGES.P12_JSReact,
    link: "https://github.com/LePhenix47/Lahouiti_Younes_12_01012023",
    type: "oc",
    date: new Date("01/01/2023"),
  },
  {
    title: "[JS-React] P13: ArgentBank",
    image: PNG_IMAGES.P13_JSReact,
    link: "https://github.com/LePhenix47/Lahouiti_Younes_13_26012023",
    type: "oc",
    date: new Date("01/26/2023"),
  },
  {
    title: "[JS-React] P14: HRnet",
    image: PNG_IMAGES.P14_JSReact,
    link: "https://github.com/LePhenix47/Lahouiti_Younes_14_06022023",
    type: "oc",
    date: new Date("02/06/2023"),
  },
  {
    title: "[Java-Angular] P2: Télésport",
    image: PNG_IMAGES.P2_FSJAngular,
    link: "https://github.com/LePhenix47/Lahouiti_Younes_2_05102023",
    type: "oc",
    date: new Date("10/05/2023"),
  },
  {
    title: "[Java-Angular] P3: Châtop",
    image: PNG_IMAGES.P3_FSJAngular,
    link: "https://github.com/LePhenix47/Lahouiti_Younes_P3_05112023",
    type: "oc",
    date: new Date("11/05/2023"),
  },
  {
    title: "[Java-Angular] P5: Numdev",
    image: PNG_IMAGES.P5_FSJAngular,
    link: "https://github.com/LePhenix47/Lahouiti_Younes_P5_30122023",
    type: "oc",
    date: new Date("12/30/2023"),
  },
  {
    title: "[Java-Angular] P6: Monde de Dév",
    image: PNG_IMAGES.P6_FSJAngular,
    link: "https://github.com/LePhenix47/Lahouiti_Younes_P6_09022024",
    type: "oc",
    date: new Date("02/09/2024"),
  },
  {
    title: "[Java-Angular] P10: BobApp",
    image: PNG_IMAGES.P10_FSJAngular,
    link: "https://github.com/LePhenix47/Lahouiti_Younes_P10_20042024",
    type: "oc",
    date: new Date("04/20/2024"),
  },
  {
    title: "[Java-Angular] P13: Your Car Your Way PoC (WebSockets & WebRTC)",
    image: PNG_IMAGES.P13_FSJAngular,
    link: "https://github.com/LePhenix47/Lahouiti_Younes_P13_21062024",
    type: "oc",
    date: new Date("06/21/2024"),
  },
];

/**
 * Constant containing my personal projects
 */
export const personalProjects: ProjectsMadeType = [
  {
    title: "Password generator",
    image: PNG_IMAGES.PASSWORD_GENERATOR,
    link: "https://github.com/LePhenix47/Password-generator_Younes-Lahouiti",
    type: "personal",
    date: new Date("08/19/2022"),
  },
  {
    title: "Customizable linear gradient",
    image: PNG_IMAGES.CUSTOM_GRADIENT,
    link: "https://github.com/LePhenix47/Customizable-linear-gradiant_Younes-Lahouiti",
    type: "personal",
    date: new Date("08/01/2022"),
  },
  {
    title: "Custom video player",
    image: PNG_IMAGES.CUSTOM_VIDEO,
    link: "https://github.com/LePhenix47/Custom-video-player_Younes-Lahouiti---Fix",
    type: "personal",
    date: new Date("06/29/2022"),
  },
  {
    title: "Custom audio player",
    image: PNG_IMAGES.CUSTOM_AUDIO,
    link: "https://github.com/LePhenix47/Custom-audio-player_Younes-Lahouiti",
    type: "personal",
    date: new Date("08/04/2022"),
  },
  {
    title: "Weather app",
    image: PNG_IMAGES.WEATHER_APP,
    link: "https://github.com/LePhenix47/Weather-app_Younes-Lahouiti",
    type: "personal",
    date: new Date("08/08/2022"),
  },
  {
    title: "Random quiz",
    image: PNG_IMAGES.RANDOM_QUIZ,
    link: "https://github.com/LePhenix47/Random-quiz_Younes-Lahouiti",
    type: "personal",
    date: new Date("09/17/2022"),
  },
  {
    title: "Unit converter",
    image: PNG_IMAGES.UNIT_CONVERTER,
    link: "https://github.com/LePhenix47/Unit-converter_Younes-Lahouiti",
    type: "personal",
    date: new Date("09/20/2022"),
  },
  {
    title: "Slider carousel",
    image: PNG_IMAGES.SLIDER_CAROUSEL,
    link: "https://github.com/LePhenix47/Slider-carousel_Younes-Lahouiti",
    type: "personal",
    date: new Date("09/16/2022"),
  },
  {
    title: "Filterable list",
    image: PNG_IMAGES.FILTERABLE_LIST,
    link: "https://github.com/LePhenix47/Filterable-list_Younes-Lahouiti",
    type: "personal",
    date: new Date("09/14/2022"),
  },
  {
    title: "Validation form",
    image: PNG_IMAGES.VALIDATION_FORM,
    link: "https://github.com/LePhenix47/Validation-form_Younes-Lahouiti",
    type: "personal",
    date: new Date("09/10/2022"),
  },
  {
    title: "Memory card game",
    image: PNG_IMAGES.MEMORY_CARD_GAME,
    link: "https://github.com/LePhenix47/Memory-card-game_Younes-Lahouiti",
    type: "personal",
    date: new Date("09/05/2022"),
  },
  {
    title: "Cookie creator",
    image: PNG_IMAGES.COOKIE_CREATOR,
    link: "https://github.com/LePhenix47/Cookie-creator_Younes-Lahouiti",
    type: "personal",
    date: new Date("09/08/2022"),
  },
  {
    title: "Pomodoro app",
    image: PNG_IMAGES.POMODORO_APP,
    link: "https://github.com/LePhenix47/Pomodoro-app_Younes-Lahouiti",
    type: "personal",
    date: new Date("09/02/2022"),
  },
  {
    title: "Infinite scroll",
    image: PNG_IMAGES.INFINITE_SCROLL,
    link: "https://github.com/LePhenix47/Infinite-scroll__Younes-Lahouiti",
    type: "personal",
    date: new Date("08/24/2022"),
  },
  {
    title: "Calculator app",
    image: PNG_IMAGES.CALCULATOR_APP,
    link: "https://github.com/LePhenix47/Calculator-app_Younes-Lahouiti",
    type: "personal",
    date: new Date("08/15/2022"),
  },
  {
    title: "Animated page",
    image: PNG_IMAGES.ANIMATED_PAGE,
    link: "https://github.com/LePhenix47/Animated-page_Younes-Lahouiti",
    type: "personal",
    date: new Date("08/05/2022"),
  },
  {
    title: "Tic-tac-toe game",
    image: PNG_IMAGES.TICTACTOE_GAME,
    link: "https://github.com/LePhenix47/Tic-tac-toe-game_Younes-Lahouiti",
    type: "personal",
    date: new Date("08/02/2022"),
  },
  {
    title: "Timer and Chronometer",
    image: PNG_IMAGES.TIMER_CHRONO,
    link: "https://github.com/LePhenix47/Chronometer-Timer-Alarm__Younes-Lahouiti",
    type: "personal",
    date: new Date("03/11/2023"),
  },
  {
    title: "Audio Visualizer",
    image: PNG_IMAGES.AUDIO_VISUALIZER,
    link: "https://github.com/LePhenix47/Audio-Visualizer_Younes-Lahouiti",
    type: "personal",
    date: new Date("04/21/2023"),
  },
  {
    title: "Image ASCII art",
    image: PNG_IMAGES.ASCII_ART,
    link: "https://github.com/LePhenix47/Image-ASCII-art_Younes-Lahouiti/",
    type: "personal",
    date: new Date("04/29/2023"),
  },
  {
    title: "Background effects",
    image: PNG_IMAGES.BACKGROUND_EFFECTS,
    link: "https://github.com/LePhenix47/Background-effects_Younes-Lahouiti",
    type: "personal",
    date: new Date("05/06/2023"),
  },
  {
    title: "Pixel manipulation test n°1",
    image: PNG_IMAGES.PIXEL_MANIP_1,
    link: "https://github.com/LePhenix47/Pixel-manipulation-test_Younes-Lahouiti",
    type: "personal",
    date: new Date("05/13/2023"),
  },
  {
    title: "Pixel manipulation test n°2",
    image: PNG_IMAGES.PIXEL_MANIP_2,
    link: "https://github.com/LePhenix47/Pixel-manipulation-test-2_Younes-Lahouiti",
    type: "personal",
    date: new Date("05/16/2023"),
  },
  {
    title: "Paintbrush",
    image: PNG_IMAGES.PAINTBRUSH,
    link: "https://github.com/LePhenix47/Paintbrush_Younes-Lahouiti",
    type: "personal",
    date: new Date("05/20/2023"),
  },
  {
    title: "Drag and drop",
    image: PNG_IMAGES.DRAGANDDROP,
    link: "https://github.com/LePhenix47/Drag-n-drop_Younes-Lahouiti",
    type: "personal",
    date: new Date("05/28/2023"),
  },
  {
    title: "Video color replacer test",
    image: PNG_IMAGES.VIDEO_COLOR_TEST_1,
    link: "https://github.com/LePhenix47/Video-canvas-test_Younes-Lahouiti",
    type: "personal",
    date: new Date("06/01/2023"),
  },
  {
    title: "Color model conversion",
    image: PNG_IMAGES.COLOR_MODEL_CONVERSION,
    link: "https://github.com/LePhenix47/Color-model-conversion_Younes-Lahouiti",
    type: "personal",
    date: new Date("06/10/2023"),
  },
  {
    title: "React Native test app",
    image: PNG_IMAGES.REACT_NATIVE_APP,
    link: "https://github.com/LePhenix47/react-native-test",
    type: "personal",
    date: new Date("06/29/2023"),
  },
  {
    title: "Advanced gradient creator",
    image: PNG_IMAGES.ADVANCED_LINEAR_GRADIENT_CREATOR,
    link: "https://github.com/LePhenix47/Advanced-Custom-linear-gradient_Younes-Lahouiti",
    type: "personal",
    date: new Date("09/04/2023"),
  },
  {
    title: "Text to speech",
    image: PNG_IMAGES.TEXT_TO_SPEECH,
    link: "https://github.com/LePhenix47/Text-To-Speech_Younes-Lahouiti",
    type: "personal",
    date: new Date("02/04/2024"),
  },
  {
    title: "Speech to text",
    image: PNG_IMAGES.SPEECH_TO_TEXT,
    link: "https://github.com/LePhenix47/Speech-To-Text_Younes-Lahouiti",
    type: "personal",
    date: new Date("03/04/2024"),
  },
  {
    title: "Animated drag and drop",
    image: PNG_IMAGES.ANIMATED_DND,
    link: "https://github.com/LePhenix47/Animated-drag-and-drop_Younes-Lahouiti",
    type: "personal",
    date: new Date("11/23/2024"),
  },
];

/**
 * Constant containing my professional projects
 */
export const professionalProjects: ProjectsMadeType = [
  {
    title: "Developer portfolio",
    image: PNG_IMAGES.PORTFOLIO,
    link: "https://younes-portfolio-dev.vercel.app/",
    type: "professional",
    date: new Date("02/25/2023"),
  },
  {
    title: "JENee React Native mobile app",
    image: PNG_IMAGES.JENEE,
    link: "https://www.jenee.fr/",
    type: "professional",
    date: new Date("07/03/2023"),
  },
  {
    title: "Uncove",
    image: PNG_IMAGES.UNCOVE,
    link: "https://uncove.com/",
    type: "professional",
    date: new Date("10/02/2023"),
  },
  {
    title: "Developer portfolio API (Hono + Bun)",
    image: PNG_IMAGES.BUN_HONO,
    link: "https://github.com/LePhenix47/Dev-Portfolio-Back-End_Younes-Lahouiti",
    type: "professional",
    date: new Date("01/26/2025"),
  },
];

/**
 * Constant containing my npm libraries
 */
export const npmProjects: ProjectsMadeType = [
  {
    title: "Timeout utility",
    image: PNG_IMAGES.TIMEOUT_UTILITY,
    link: "https://www.npmjs.com/package/@lephenix47/timers-utility",
    type: "npm",
    date: new Date("02/05/2023"),
  },
  {
    title: "Interval utility",
    image: PNG_IMAGES.INTERVAL_UTILITY,
    link: "https://www.npmjs.com/package/@lephenix47/interval-utility",
    type: "npm",
    date: new Date("02/05/2023"),
  },
  {
    title: "Cookies utility",
    image: PNG_IMAGES.COOKIES_UTILITY,
    link: "https://www.npmjs.com/package/@lephenix47/cookies-utility",
    type: "npm",
    date: new Date("02/05/2023"),
  },
  {
    title: "WebStorage utility",
    image: PNG_IMAGES.WEBSTORAGE_UTILITY,
    link: "https://www.npmjs.com/package/@lephenix47/webstorage-utility",
    type: "npm",
    date: new Date("02/05/2023"),
  },
  {
    title: "React Data table",
    image: PNG_IMAGES.REACT_DATA_TABLE,
    link: "https://www.npmjs.com/package/@lephenix47/react-datatable",
    type: "npm",
    date: new Date("02/06/2023"),
  },
  {
    title: "Color converter",
    image: PNG_IMAGES.COLOR_CONVERSION_PACKAGE,
    link: "https://www.npmjs.com/package/@lephenix47/color-converter",
    type: "npm",
    date: new Date("06/07/2023"),
  },
  {
    title: "Text to speech utility",
    image: PNG_IMAGES.TEXT_TO_SPEECH_UTILITY,
    link: "https://www.npmjs.com/package/@lephenix47/text-to-speech-utility",
    type: "npm",
    date: new Date("03/17/2024"),
  },
  {
    title: "Speech to text utility",
    image: PNG_IMAGES.SPEECH_TO_TEXT_UTILITY,
    link: "https://www.npmjs.com/package/@lephenix47/speech-to-text-utility",
    type: "npm",
    date: new Date("03/23/2024"),
  },
];

/**
 * Constant containing my browser extensions
 */
export const browserExtensionProjects: ProjectsMadeType = [
  {
    title: "Nommage des livrables",
    image: PNG_IMAGES.NDL,
    link: "https://chrome.google.com/webstore/detail/nommages-des-livrables/keameojhjfplflkgoagidmoccfhbcbfb?hl=fr",
    type: "extension",
    date: new Date("12/13/2022"),
  },
];

/**
 * Constant containing all the projects
 */
export const allProjects: ProjectsMadeType = openClassroomsProjects.concat(
  personalProjects,
  professionalProjects,
  npmProjects,
  browserExtensionProjects
);
