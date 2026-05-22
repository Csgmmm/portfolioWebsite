import sns24 from "../pages/homepage/assets/sns24.png";
import femin from "../pages/homepage/assets/feminDashboard.png";
import yumyum from "../pages/homepage/assets/yumyum.png";
import portfolio from "../pages/projects/assets/portfolioImg.png";
import pawmate from "../pages/projects/assets/pawmate.png";
import tinytracker from "../pages/projects/assets/babyTracker.png";
import evolve from "../pages/projects/assets/evolve.png";
import bmw from "../pages/projects/assets/bmw.png";
import mercedes from "../pages/projects/assets/mercedes.png";
import montepio from "../pages/projects/assets/montepio.png";
import slotqi from "../pages/projects/assets/slotqi.png";
import portImg1 from "../pages/projectsDetail/assets/portImg1.png"

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
  userFlow?: string;
  wireframe?: string;
  iconography?: string[];
  images?: string[];
  video?: string;
}

export const projects: IProjectData[] = [
  {
    category: ["Front-End Development"],
    id: "portfolio",
    title: "Portfolio",
    mainImage: portfolio,
    githubUrl: "https://github.com...",
    chips: ["FIGMA", "REACT", "TYPESCRIPT", "JAVASCRIPT", "CSS", "HTML"],
    fullDescription: `Built this portfolio to act as a handshake between my two worlds UI/UX Design and Front-End Engineering. 

      **Accessibility & Readability** 
      • Font sizes are readable and line lengths are kept within 60-80 characters; 
      • Made sure the color contrast is ensuring the high visibility;
      • Every chip, button and links have clear indication, using colors, underlines, and icon arrows to make it obvious what's clickable. 

      **Engineering & Scalability**
      • Used experience across different tech stacks to make the designs functional and accurate to the idea 
      • From the theme switching to the smallest card, everything was built to be scalable and responsive.`,
    images: [portImg1, portImg1, portImg1, portImg1],
  },
  //SNS 24
  {
    category: ["UI/UX Design", "Homepage"],
    id: "sns24",
    title: "Portuguese National Healthcare",
    year: "2023-present",
    mainImage: sns24,
    appStoreUrl: "https://apps.apple.com/us/app/sns-24/id1192353854",
    liveUrl: "https://www.sns24.gov.pt/pt/inicio",
    shortDescription:
      "An ongoing collaborative product design project developed for SNS 24, Portugal's national healthcare platform.",
    chips: ["FIGMA", "MIRO", "AGILE", "PHOTOSHOP", "ILLUSTRATOR"],
    fullDescription: `User Experience Engineering & Interface Optimization Designing and engineering end-to-end UX/UI solutions for the SNS 24 platform, from Figma concepts to production-ready front-end code.
      
• Prototyping, UI Development & Design Handoff Creating high-fidelity Figma prototypes and translating them into maintainable front-end code, bridging the gap between design and engineering.
• Human-Centered & Accessible Design Systems Building inclusive, accessible interfaces grounded in user research and WCAG standards.
• Cross-Functional Research & Design Strategy Partnering with functional analysts, product managers, and engineers to translate user requirements into validated design decisions.
• Interaction Design & User Journey Mapping Defining user journeys, task flows, and information architecture through storyboards, and Figma prototypes.
• Design Systems & Visual Consistency Maintaining and evolving a scalable design system across Figma and codebase, enforcing typography, colour, spacing, and component standards to ensure brand and UX coherence across every touchpoint.`,
    video: "https://www.instagram.com/p/DW3Xl2LtNE5/",
    images: ["/assets/code1.png", "/assets/code2.png", "/assets/code3.png"],
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
    images: [
      "/assets/code1.png",
      "/assets/code2.png",
      "/assets/code3.png",
      "/assets/code3.png",
      "/assets/code3.png",
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

      • I implemented cultural food tags paired with flag icons to help users identify cuisines; 
      • I mapped out the entire user flow through wireframes to make sure the journey is understandable; 
      • Used Material Symbols icons between 24px, 32px, and 40px; 
      • Built modals for common actions, like canceling orders or applying promo codes 
      • Developed a full library of components, including buttons, cards, badges, and input fields 
      • Used variables for spacing to guarantee the design is scalable and organized`,
    userFlow: "/assets/code1.png",
    wireframe: "/assets/code1.png",
    iconography: [
      "/assets/code1.png",
      "/assets/code2.png",
      "/assets/code3.png",
    ],
    images: ["/assets/code1.png", "/assets/code2.png", "/assets/code3.png"],
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
    userFlow: "/assets/code1.png",
    iconography: [
      "/assets/code1.png",
      "/assets/code2.png",
      "/assets/code3.png",
    ],
    wireframe: "/assets/code1.png",
    images: ["/assets/code1.png", "/assets/code2.png", "/assets/code3.png"],
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
    wireframe: "/assets/code1.png",
    images: ["/assets/code1.png", "/assets/code2.png", "/assets/code3.png"],
    video: "943623829",
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
  },
  //bmw
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
  },
];
