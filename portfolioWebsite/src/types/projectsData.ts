export interface Project {
  id: string;
  title: string;
  category?: "Front-End Development" | "UI/UX Design";
  mainImage: string;
  shortDescription?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  prototypeUrl?: string;
  fullDescription?: string;
  userFlow?: string;
  wireframe?: string;
  iconography?: string[];
  images?: string[];
}

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Portfolio",
    mainImage: "/assets/portfolioImg.png",
    githubUrl: "https://github.com...",
    tags: ["FIGMA", "REACT", "TYPESCRIPT", "JAVASCRIPT", "CSS", "HTML"],
    fullDescription:
      "Built this portfolio to act as a handshake between my two worlds UI/UX Design and Front-End Engineering. Accessibility & Readability - Font sizes are readable and line lengths are kept within 60-80 characters; - Made sure the color contrast is ensuring the high visibility;- Every chip, button and links have clear indication, using colors, underlines, and icon arrows to make it obvious what's clickable. Engineering & Scalability - Used experience across different tech stacks to make the designs functional and accurate to the idea - From the theme switching to the smallest card, everything was built to be scalable and responsive.",
    images: ["/assets/code1.png", "/assets/code2.png", "/assets/code3.png"],
  },
  {
    id: "feminineDashboard",
    title: "Feminine Dashboard",
    mainImage: "/assets/feminDashboard.png",
    shortDescription:
      "This project was part of a Front-End Engineering course.",
    liveUrl: "https://feminine-dashboard.vercel.app/",
    githubUrl: "https://github.com/Csgmmm/feminine-dashboard.git",
    tags: ["FIGMA", "REACT", "TYPESCRIPT", "JAVASCRIPT", "CSS", "HTML"],
    fullDescription:
      "Based on my own experience with apps like Clue, I believe these tools are essential for women’s health, and I wanted to explore how mobile-first experience could be translated into a desktop dashboard. - To simulate a real-world application, I implemented a login system that fetches data from a user API, showcasing history logs for each specific user; - Made sure the data is easy to read across all devices by creating  table structures for both desktop and mobile; - Built a modal system for symptom registration, allowing users to quickly update their daily health logs without leaving their current view.",
    images: ["/assets/code1.png", "/assets/code2.png", "/assets/code3.png"],
  },
  {
    id: "yumyum",
    title: "Yumyum - Asian Food Delivery App",
    mainImage: "/assets/yumyum.png",
    shortDescription: "For portfolio purposes only.",
    prototypeUrl:
      "https://www.figma.com/proto/bc78eK6Kvi0658WAZmmFoI/yumyum?node-id=4-333&p=f&viewport=3%2C294%2C0.13&t=1TKBUC7W5dZf2h1W-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4%3A333&page-id=1%3A2",
    tags: ["FIGMA", "photoshop", "illustrator", "miro"],
    fullDescription:
      "Designed this app from the user's perspective. - I implemented cultural food tags paired with flag icons to help users identify cuisines; - I mapped out the entire user flow through wireframes to make sure the journey is understandable; - Used Material Symbols icons between 24px, 32px, and 40px; - Built modals for common actions, like canceling orders or applying promo codes - Developed a full library of components, including buttons, cards, badges, and input fields - Used variables for spacing to guarantee the design is scalable and organized",
    userFlow: "/assets/code1.png",
    wireframe: "/assets/code1.png",
    iconography: [
      "/assets/code1.png",
      "/assets/code2.png",
      "/assets/code3.png",
    ],
    images: ["/assets/code1.png", "/assets/code2.png", "/assets/code3.png"],
  },
  {
    id: "tinytracker",
    title: "TinyTracker - Baby Tracker App",
    mainImage: "/assets/babyTracker.png",
    shortDescription: "For portfolio purposes only.",
    prototypeUrl:
      "https://www.figma.com/proto/WWQG1zJ0Hl0bcocvW0S3GR/Baby-app?node-id=66-1059&p=f&viewport=430%2C258%2C0.19&t=2lWgQEFbnqYfN6BA-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=66%3A1059&page-id=0%3A1",
    tags: ["FIGMA", "photoshop", "illustrator", "miro"],
    fullDescription:
      "I decided to create TinyTracker because I noticed a gap in the market for a truly all-in-one parenting tool. Most apps focus on just one area, but I wanted to build a single platform that combines medical appointments, developmental tracking, and daily routines with practical features like reminders and a dedicated screen with sleep sounds to help babies rest. - Wireframes to establish the early structure and layout decisions of the app; - Mapped out the entire user flow through wireframes - Used Material Symbols icons scaled between 24px, 32px, and 40px to maintain a consistent visual hierarchy. - Designed modals to handle key interactions, including showing all medical appointments, editing user profiles, and adding daily logs",
    userFlow: "/assets/code1.png",
    iconography: [
      "/assets/code1.png",
      "/assets/code2.png",
      "/assets/code3.png",
    ],
    wireframe: "/assets/code1.png",
    images: ["/assets/code1.png", "/assets/code2.png", "/assets/code3.png"],
  },
  {
    id: "slotqi",
    title: "SlotQi - Talent Management Software",
    mainImage: "/assets/slotqi.png",
    shortDescription: "For portfolio purposes only.",
    prototypeUrl:
      "https://www.figma.com/proto/jplBol1DRptoJeCjmqgIqB/SlotQi?node-id=52-9409&viewport=422%2C-427%2C0.39&t=WWLNs1sYFta5vvHh-1&scaling=contain&content-scaling=fixed&page-id=0%3A1",
    tags: ["FIGMA", "photoshop", "illustrator"],
    fullDescription:
      "developed SlotQi to address the complex needs of HR teams and department leads. This platform acts as a central hub for recruitment, employee statistics, and team scheduling. My goal was to create a high-performance interface that makes managing a large workforce feel organized and data-driven rather than overwhelming. The details I focused on: Information Architecture: I designed a comprehensive dashboard that prioritizes high-level recruitment statistics and upcoming events, allowing managers to see the health of their department at a glance. Functional Modals: Built modals for common actions, like adding new log events, editing employee profiles, or managing interview schedules, to keep users in their current workflow without full page reloads. Design System: Developed a full library of components, including data cards, interactive calendars, status badges, and input fields, all tailored for a professional enterprise environment.",

    images: ["/assets/code1.png", "/assets/code2.png", "/assets/code3.png"],
  },
];
