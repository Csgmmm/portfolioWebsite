//homepage
import { sns24, femin, yumyum } from "../pages/homepage/assets/index";

//projects
import {
  portfolio,
  pawmate,
  tinytracker,
  evolve,
  bmw,
  mercedes,
  montepio,
  slotqi,
} from "../pages/projects/assets/index";

//projectsDetails
import videoInstaImg from "../pages/projectsDetail/assets/instaImg.png";

//Portfolio
import {
  FigmaPort1,
  FigmaPort2,
  FigmaPort3,
  FigmaPort4,
  FigmaPort5,
  FigmaPort6,
  CodePort1,
  CodePort2,
  CodePort3,
  CodePort4,
  CodePort5,
  CodePort6,
  CodePort7,
  CodePort8,
  CodePort9,
} from "../pages/projectsDetail/assets/portfolio/index";

//Feminine Dashboard
import {
  codeFem1,
  codeFem2,
  codeFem3,
  codeFem4,
  codeFem5,
  webFem1,
  webFem2,
  webFem3,
  webFem4,
  webFem5,
  webFem6,
  webFem7,
  webFem8,
} from "../pages/projectsDetail/assets/feminine/index";

//yumyum
import {
  IAMobileYumYum,
  IADesktopYumYum,
  wireframeYumyum,
} from "../pages/projectsDetail/assets/yumyum/index";

//tiny
import {
  wireframeTiny, IADesktopTiny, IAMobileTiny
} from "../pages/projectsDetail/assets/tinytracker/index";



import { CheckCircle, Palette, Code, Users, Eye, Ruler } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface IProjectData {
  id: string;
  title: string;
  year?: number | string;
  category?: ("Front-End Development" | "UI/UX Design" | "Homepage")[];
  mainImage: string;
  shortDescription?: string;
  chips: string[];
  githubUrl?: string;
  liveUrl?: string;
  appStoreUrl?: string;
  prototypeUrl?: string;
  behanceUrl?: string;
  fullDescription?: string;
  InformationArchitectureMap?: {
    title: string;
    desktop: string;
    mobile: string;
  };
  wireframe?: { title: string; img: string };
  iconography?: string[];
  images?: string[];
  videoImg?: string;
  videoUrl?: string;
  figmaImg?: { title: string; img: string[] };
  codeImg?: { title: string; img: string[] };
  contributions?: { title: string; icon: LucideIcon; description: string }[];
  disclaimer?: string;
  resume?: string;
  bigNumber?: {
    label: string;
    value: string;
    description: string;
  };
  codeCredentials?: {
    username: string;
    password: string;
  }[];
}

export const projects: IProjectData[] = [
  {
    category: ["Front-End Development"],
    id: "portfolio",
    title: "Portfolio",
    year: 2026,
    mainImage: portfolio,
    githubUrl: "https://github.com/Csgmmm/portfolioWebsite",
    chips: ["FIGMA", "REACT", "TYPESCRIPT", "JAVASCRIPT", "CSS", "HTML"],
    fullDescription: `Built this portfolio to act as a handshake between my two worlds UI/UX Design and Front-End Engineering. 

      **Accessibility & Readability** 
      • Font sizes are readable and line lengths are kept within 60-80 characters; 
      • Made sure the color contrast is ensuring the high visibility;
      • Every chip, button and links have clear indication, using colors, underlines, and icon arrows to make it obvious what's clickable. 

      **Engineering & Scalability**
      • Used experience across different tech stacks to make the designs functional and accurate to the idea 
      • From the theme switching to the smallest card, everything was built to be scalable and responsive.`,
    figmaImg: {
      title: "Interface",
      img: [
        FigmaPort1,
        FigmaPort2,
        FigmaPort3,
        FigmaPort4,
        FigmaPort5,
        FigmaPort6,
      ],
    },
    codeImg: {
      title: "Development",
      img: [
        CodePort1,
        CodePort2,
        CodePort3,
        CodePort4,
        CodePort5,
        CodePort6,
        CodePort7,
        CodePort8,
        CodePort9,
      ],
    },
    resume: `A portfolio bridging UI/UX Design and Front-End Engineering, built with accessibility, readability, and scalable code in mind.`,
  },
  //SNS 24
  {
    category: ["UI/UX Design", "Homepage"],
    id: "sns24",
    title: "Portuguese National Healthcare",
    year: "2023 - Current",
    mainImage: sns24,
    appStoreUrl: "https://apps.apple.com/us/app/sns-24/id1192353854",
    liveUrl: "https://www.sns24.gov.pt/pt/inicio",
    shortDescription:
      "An ongoing collaborative product design project developed for SNS 24, Portugal's national healthcare platform.",
    chips: ["FIGMA", "MIRO", "AGILE", "PHOTOSHOP", "ILLUSTRATOR"],
    fullDescription: `**User Experience Engineering & Interface Optimization Designing and engineering end-to-end UX/UI solutions for the SNS 24 platform, from Figma concepts to production-ready front-end code.**
      
• Prototyping, UI Development & Design Handoff Creating high-fidelity Figma prototypes and translating them into maintainable front-end code, bridging the gap between design and engineering.
• Human-Centered & Accessible Design Systems Building inclusive, accessible interfaces grounded in user research and WCAG standards.
• Cross-Functional Research & Design Strategy Partnering with functional analysts, product managers, and engineers to translate user requirements into validated design decisions.
• Interaction Design & User Journey Mapping Defining user journeys, task flows, and information architecture through storyboards, and Figma prototypes.
• Design Systems & Visual Consistency Maintaining and evolving a scalable design system across Figma and codebase, enforcing typography, colour, spacing, and component standards to ensure brand and UX coherence across every touchpoint.`,
    contributions: [
      {
        title: "Design System Evolution",
        icon: CheckCircle,
        description:
          "Contributed to the evolution and maintenance of the SNS 24 Design System (DSM), creating over 50+ new reusable components for the library.",
      },
      {
        title: "User Experience Design",
        icon: Palette,
        description:
          "Designed user flows, interface structures, and mobile-first experiences for iOS and Android platforms",
      },
      {
        title: "UI Development",
        icon: Code,
        description:
          "Created high-fidelity UI mockups, interactive prototypes, and empty and error states for implemented features",
      },
      {
        title: "Collaboration",
        icon: Users,
        description:
          "Collaborated with functional analysts and cross-functional teams to translate requirements into intuitive user experiences",
      },
      {
        title: "Accessibility",
        icon: Eye,
        description:
          "Helped ensure accessibility, consistency, and usability across the SNS 24 application ecosystem",
      },
      {
        title: "Visual Standards",
        icon: Ruler,
        description:
          "Participated in the definition of visual standards including typography, spacing, components, and interaction patterns",
      },
    ],
    disclaimer: `The work presented in this project was developed collaboratively as part of a multidisciplinary product team. My contributions focused on UX/UI design, interface exploration, design system implementation, and user experience improvements alongside other designers, analysts, and developers.`,
    videoImg: videoInstaImg,
    videoUrl: "https://www.instagram.com/p/DW3Xl2LtNE5/",
    resume: `End-to-end UX/UI design and front-end engineering for Portugal's national healthcare platform.`,
    bigNumber: {
      label: "Reach",
      value: "+10M",
      description: "Portuguese citizens served nationwide.",
    },
  },

  //feminine
  {
    category: ["Front-End Development", "Homepage"],
    id: "femininedashboard",
    title: "Feminine Dashboard",
    year: 2026,
    mainImage: femin,
    shortDescription:
      "This project was part of a Front-End Engineering course.",
    liveUrl: "https://feminine-dashboard.vercel.app/",
    githubUrl: "https://github.com/Csgmmm/feminine-dashboard.git",
    chips: ["FIGMA", "REACT", "TYPESCRIPT", "JAVASCRIPT", "CSS", "HTML"],
    fullDescription: `Based on my own experience with apps like Clue, I believe these tools are essential for women's health, and I wanted to explore how mobile-first experience could be translated into a desktop dashboard.
    
    • To simulate a real-world application, I implemented a login system that fetches data from a user API, showcasing history logs for each specific user;
    • Made sure the data is easy to read across all devices by creating  table structures for both desktop and mobile;
    • Built a modal system for symptom registration, allowing users to quickly update their daily health logs without leaving their current view.`,
    codeImg: {
      title: "Development",
      img: [codeFem1, codeFem2, codeFem3, codeFem4, codeFem5],
    },
    figmaImg: {
      title: "Interface",
      img: [
        webFem1,
        webFem2,
        webFem3,
        webFem4,
        webFem5,
        webFem6,
        webFem7,
        webFem8,
      ],
    },
    resume: `A desktop dashboard exploring women's health tracking, with real user authentication, responsive data tables, and a symptom registration modal.`,
    codeCredentials: [
      { username: "luisa@email.com", password: "luisa" },
      { username: "maria@email.com", password: "maria" },
      { username: "joana@email.com", password: "joana" },
    ],
  },
  //yumyum
  {
    category: ["UI/UX Design", "Homepage"],
    id: "yumyum",
    title: "Asian Food Delivery App",
    year: 2024,
    mainImage: yumyum,
    shortDescription: "For portfolio purposes only.",
    prototypeUrl:
      "https://www.figma.com/proto/bc78eK6Kvi0658WAZmmFoI/yumyum?node-id=4-333&p=f&viewport=3%2C294%2C0.13&t=1TKBUC7W5dZf2h1W-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4%3A333&page-id=1%3A2",
    behanceUrl:
      "https://www.behance.net/gallery/223774571/Asian-Food-Delivery-App-Yumyum?share=1",
    chips: ["FIGMA", "photoshop", "illustrator", "miro"],
    fullDescription: `**Designed this app from the user's perspective.** 
      • Implemented cultural food tags paired with flag icons to help users identify cuisines; 
      • Mapped out the entire user flow through wireframes to make sure the journey is understandable; 
      • Used Material Symbols icons between 24px, 32px, and 40px; 
      • Built modals for common actions, like canceling orders or applying promo codes 
      • Developed a full library of components, including buttons, cards, badges, and input fields 
      • Used variables for spacing to guarantee the design is scalable and organized`,
    InformationArchitectureMap: {
      title: "Information Architecture Map",
      desktop: IADesktopYumYum,
      mobile: IAMobileYumYum,
    },
    wireframe: { title: "Wireframes", img: wireframeYumyum },
    iconography: [
      "/assets/code1.png",
      "/assets/code2.png",
      "/assets/code3.png",
    ],
    images: ["/assets/code1.png", "/assets/code2.png", "/assets/code3.png"],
    resume: `A user-centered food delivery app with cultural cuisine tags, full component library, modals, and a scalable design system.`,
  },
  //evolve
  {
    category: ["UI/UX Design"],
    id: "evolve",
    title: "Banking App",
    year: 2024,
    mainImage: evolve,
    shortDescription: "For portfolio purposes only.",
    prototypeUrl:
      "https://www.figma.com/proto/WhMciosdrNjbvBnhvod9Zj/Evolve?node-id=4-333&page-id=1%3A2&starting-point-node-id=4%3A333&t=dqQaayh0SxPhd0HP-1",
    behanceUrl: "https://www.behance.net/gallery/211557841/Banking-App-Evolve",
    chips: ["FIGMA", "photoshop", "illustrator"],
    fullDescription: `**I decided to create this project to explore the complexities of financial interfaces.**
      I wanted to design a banking app that feels both secure and effortless to use, balancing sensitive information like balances and transfers with a clean aesthetic. 

      • Integrated clear visual flows for secure entry, including biometric prompts (FaceID/Fingerprint) and numeric pin pads that prioritize user privacy. 
      • Used Material Symbols icons between 24px, 32px, and 40px; 
      • Built modals for common actions, like canceling orders or applying promo codes 
      • Developed a full library of components, including buttons, cards, badges, and input fields 
      • Used variables for spacing to guarantee the design is scalable and organized`,
    iconography: [
      "/assets/code1.png",
      "/assets/code2.png",
      "/assets/code3.png",
    ],
    images: ["/assets/code1.png", "/assets/code2.png", "/assets/code3.png"],
    resume: `A banking app balancing security and simplicity, with biometric authentication, clean financial flows, and a scalable component library.`,
  },
  //tinytracker
  {
    category: ["UI/UX Design"],
    id: "tinytracker",
    title: "Baby Tracker App",
    year: 2024,
    mainImage: tinytracker,
    shortDescription: "For portfolio purposes only.",
    prototypeUrl:
      "https://www.figma.com/proto/WWQG1zJ0Hl0bcocvW0S3GR/Baby-app?node-id=66-1059&p=f&viewport=430%2C258%2C0.19&t=2lWgQEFbnqYfN6BA-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=66%3A1059&page-id=0%3A1",
    behanceUrl:
      "https://www.behance.net/gallery/220910113/Baby-Development-Tracker-App",
    chips: ["FIGMA", "photoshop", "illustrator", "miro"],
    fullDescription: `**I decided to create TinyTracker because I noticed a gap in the market for a truly all-in-one parenting tool.** Most apps focus on just one area, but I wanted to build a single platform that combines medical appointments, developmental tracking, and daily routines with practical features like reminders and a dedicated screen with sleep sounds to help babies rest. 

      • Wireframes to establish the early structure and layout decisions of the app; 
      • Mapped out the entire user flow through wireframes 
      • Used Material Symbols icons scaled between 24px, 32px, and 40px to maintain a consistent visual hierarchy. 
      • Designed modals to handle key interactions, including showing all medical appointments, editing user profiles, and adding daily logs`,
    InformationArchitectureMap: {
      title: "Information Architecture Map",
      desktop: IADesktopTiny,
      mobile: IAMobileTiny,
    },
    iconography: [
      "/assets/code1.png",
      "/assets/code2.png",
      "/assets/code3.png",
    ],
    wireframe: { title: "Wireframes", img: wireframeTiny },
    images: ["/assets/code1.png", "/assets/code2.png", "/assets/code3.png"],
    resume: `An all-in-one parenting app combining medical appointments, developmental tracking, daily routines, and sleep sounds in a single platform.`,
  },
  //slotQi
  {
    category: ["UI/UX Design"],
    id: "slotqi",
    title: "Talent Management Software",
    year: 2024,
    mainImage: slotqi,
    shortDescription: "For portfolio purposes only.",
    prototypeUrl:
      "https://www.figma.com/proto/jplBol1DRptoJeCjmqgIqB/SlotQi?node-id=52-9409&viewport=422%2C-427%2C0.39&t=WWLNs1sYFta5vvHh-1&scaling=contain&content-scaling=fixed&page-id=0%3A1",
    behanceUrl:
      "https://www.behance.net/gallery/208892093/Talent-Management-Software-Dashboard",
    chips: ["FIGMA", "photoshop", "illustrator"],
    fullDescription: `**Developed SlotQi to address the complex needs of HR teams and department leads.** 
      This platform acts as a central hub for recruitment, employee statistics, and team scheduling. My goal was to create a high-performance interface that makes managing a large workforce feel organized and data-driven rather than overwhelming. 

      **Information Architecture:** I designed a comprehensive dashboard that prioritizes high-level recruitment statistics and upcoming events, allowing managers to see the health of their department at a glance; 
      **Functional Modals:** Built modals for common actions, like adding new log events, editing employee profiles, or managing interview schedules, to keep users in their current workflow without full page reloads;
      **Design System:** Developed a full library of components, including data cards, interactive calendars, status badges, and input fields, all tailored for a professional enterprise environment.`,

    images: ["/assets/code1.png", "/assets/code2.png", "/assets/code3.png"],
    resume: `An HR platform centralizing recruitment, employee stats, and team scheduling with a data-driven dashboard and enterprise-grade design system.`,
  },
  //pawmate
  {
    category: ["Front-End Development"],
    id: "pawmate",
    title: " UI/UX App & website",
    year: 2024,
    mainImage: pawmate,
    shortDescription:
      "This project was conceived during a Web Development Bootcamp.",
    prototypeUrl:
      "https://www.figma.com/proto/QmCuNbxDTVTjkdeGeb9oan/Pawmate?node-id=17-102&viewport=296%2C291%2C0.23&t=KMADnMnXHBVrn12Z-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=68%3A3924&page-id=0%3A1",
    behanceUrl:
      "https://www.behance.net/gallery/197923083/Front-End-Development-UIUX-PawMate",
    chips: ["FIGMA", "photoshop", "illustrator", "CSS", "HTML"],
    fullDescription: `This project was conceived during a **Web Development Bootcamp by Dr. Angela Yu**, that created Tindog, an app inspired by the popular dating platform Tinder. 

      This project focuses on developing a website utilizing Bootstrap, Flexbox, special attention was given to ensuring responsiveness across devices, CSS, and HTML. In addition to that, through intuitive UI/UX, I've brought the concept to life, fortifying the potential app, rebranding the project with a new name and logo PawMate. 
      With **PawMate**, dogs can have profiles, and swipe right to express interest in making new canine friends, setting up playdates, arranging walks, or finding a compatible mate for breeding purposes, PawMate ensures that every pup and their owner find exactly what they're looking for.`,
    wireframe: { title: "Wireframes", img: wireframeYumyum },
    images: ["/assets/code1.png", "/assets/code2.png", "/assets/code3.png"],
    videoUrl: "943623829",
    resume: `A Tinder-inspired dog social app built with Bootstrap and Flexbox, rebranded as PawMate with custom UI/UX and full responsiveness.`,
  },
  //bmw
  {
    category: ["UI/UX Design"],
    id: "bmw",
    title: "App & iDrive Redesign",
    year: 2023,
    mainImage: bmw,
    shortDescription: "For portfolio purposes only.",
    behanceUrl:
      "https://www.behance.net/gallery/174481013/My-BMW-app-iDrive-System-Redesign",
    chips: ["FIGMA", "photoshop", "illustrator"],
    fullDescription: `**I created this concept to demonstrate my ability to redesign a complex existing ecosystem.** 
      My focus was on elevating the My BMW app and iDrive System through a more cohesive, premium, and seamless user experience between the mobile device and the vehicle dashboard. 
      
       **High-Density Data Management:** Designed the iDrive Dashboard Display to balance critical driving information, like speed and ePower levels, with secondary content like GPS navigation and music playback without cluttering the view; 
       **Design System:** Developed a full library of components, including cards for vehicle status, high-contrast input fields, and badges; 
       **Scalable Layouts:** Used variables for spacing to guarantee the design is organized and adapts perfectly to different screen aspect ratios;
       **Data Clarity:** Reimagined the iDrive Dashboard to balance critical driving data with music and navigation without cluttering the driver's view.`,
    images: ["/assets/code1.png", "/assets/code2.png", "/assets/code3.png"],
    resume: `A premium BMW ecosystem redesign connecting the My BMW app and iDrive dashboard through cohesive UI, high-density data management, and a scalable design system.`,
  },
  //mercedes
  {
    category: ["UI/UX Design"],
    id: "mercedes",
    title: "HMI: UI Concept",
    year: 2023,
    mainImage: mercedes,
    shortDescription: "For portfolio purposes only.",
    behanceUrl:
      "https://www.behance.net/gallery/145724997/Mercedes-Benz-UI-Concept",
    chips: ["FIGMA", "photoshop", "illustrator"],
    fullDescription: `**I designed this concept to explore the future of Automotive HMI (Human Machine Interface), specifically focusing on the Mercedes A-Class.**

       This UI Project highlights safety-critical environment and modernize it with a user-centric interface that prioritizes driver focus and personalization.
       
        **Dynamic Visual Identity:** Reimagined the classic dashboard with a futuristic, high-contrast aesthetic. Including a personalized 'Display Color Change' feature to match the driver's preference or ambient lighting.
        **Intuitive Media & Connectivity:** Designed a streamlined music and profile interface that balances rich album art with clear, accessible playback controls.`,
    images: ["/assets/code1.png", "/assets/code2.png", "/assets/code3.png"],
    resume: `A futuristic Mercedes A-Class HMI concept with a personalized high-contrast dashboard, dynamic color themes, and streamlined media controls.`,
  },
  //montepio
  {
    category: ["UI/UX Design"],
    id: "montepio",
    title: "Mobile App Redesign",
    year: 2022,
    mainImage: montepio,
    shortDescription: "For portfolio purposes only.",
    behanceUrl:
      "https://www.behance.net/gallery/146683469/Banking-App-Montepio",
    chips: ["FIGMA", "photoshop", "illustrator"],
    fullDescription: `**This project is a UI/UX redesign of the mobile application for Banco Montepio, one of Portugal's financial institutions.**

       The challenge was to transform a traditional banking identity into a vibrant, mobile-first experience that appeals to a younger demographic without alienating long-time users. 
       
       **Human-Centric Onboarding:** The login screens move away from sterile forms, using lifestyle imagery and intuitive biometric triggers (FaceID/TouchID);
        **Intuitive Account Management:** Users can swipe through different account types (Current vs. Savings) using a familiar carousel pattern;
        **Visual Spending Insights:** A dedicated expenses hub featuring interactive bar charts and color-coded categories like Food and public transports;
        **Digital Piggy Bank:**  Integrated features to encourage micro-savings and goal-oriented financial planning.`,
    images: ["/assets/code1.png", "/assets/code2.png", "/assets/code3.png"],
    resume: `A mobile-first redesign of Banco Montepio targeting younger users, with biometric onboarding, account carousels, spending insights, and savings goals.`,
  },
];
