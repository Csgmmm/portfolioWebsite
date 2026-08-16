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
  finances,
} from "../pages/projects/assets/index";

//projectsDetails
import videoInstaImg from "../pages/projectsDetail/assets/sns24/instaImg.png";

//Portfolio
import {
  cardProjects,
  emptyState,
  homepageHeader,
  linkedinCards,
  textStyles,
  variables,
} from "../pages/projectsDetail/assets/portfolio/index";

//Feminine Dashboard
import { mockupMyCycle } from "../pages/projectsDetail/assets/feminine/index";

//yumyum
import {
  IAMobileYumYum,
  IADesktopYumYum,
  wireframeYumYum,
  interfaceYumYum,
  mockupYumYum,
  prototypeYumYum,
  account_balance_wallet,
  apartment,
  call1,
  call,
  chevron_left1,
  chevron_left2,
  chevron_left3,
  chevron_left4,
  chevron_left5,
  chevron_left,
  clock,
  close,
  confirmation_number,
  favorite,
  fluent_mdl2_calories,
  Frame26088399,
  Frame26088400,
  Frame26088402,
  Frame26088403,
  Frame26088404,
  Frame26088405,
  Frame26088406,
  Frame26088407,
  Frame26088408,
  Frame26088409,
  Frame26088410,
  help,
  history,
  home,
  hugeicons_eggs,
  logout,
  map_pin,
  moped,
  mynaui_pizza,
  near_me,
  person1,
  person,
  receipt_long,
  search,
  sell,
  settings,
  skillet1,
  skillet,
  storefront,
  support_agent,
  componentsYumYum,
  modalsYumYum,
  variables_stylesYumYum,
} from "../pages/projectsDetail/assets/yumyum/index";

//evolve
import {
  evolveFigma3,
  evolveFigma4,
  evolveFigma5,
  evolveFigma6,
  evolveFigma9,
  evolveprototype1,
  evolveprototype2,
  smartwatchEvolve,
  evolvepersonWithPhoneOnHands,
  interfaceEvolveScreens,
  interfaceEvolveScreensProfile,
  Frame1000002812,
  account_circle,
  add_circle1,
  add_circle,
  alternate_email,
  article,
  backspace,
  colors,
  computer,
  contactless,
  copy_all,
  cottage,
  credit_card_clock,
  credit_card,
  edit,
  encrypted,
  exercise,
  finance_mode,
  Frame1000002813,
  Frame1000002814,
  Frame1000002815,
  grocery,
  group,
  id_card,
  info,
  ios_share,
  key_vertical,
  keyboard_arrow_down1,
  keyboard_arrow_down2,
  keyboard_arrow_down3,
  keyboard_arrow_down,
  local_mall,
  location_on,
  money_bag,
  move_down,
  password,
  payments,
  photo_camera,
  recent_actors,
  school,
  send,
  sync_alt,
  translate,
  update,
  visibility_off,
  widgets,
} from "../pages/projectsDetail/assets/evolve/index";

//tiny
import {
  wireframeTiny,
  IADesktopTiny,
  IAMobileTiny,
  prototypeTinyTracker1,
  tinyTrackerEmptyState,
  tinyTrackerFigma1,
  tinyTrackerFigma2,
  tinyTrackerFigma3,
  tinyTrackerFigma5,
  mockupTinyTrackeriPhone,
  tinyMockup1,
  ad_units,
  ar_on_you,
  arrow_left_alt,
  baby_changing_station,
  badge,
  bedtime,
  calendar_month,
  chevron_right,
  contact_mail,
  contract_edit,
  dark_mode,
  share,
  more,
  graphic_eq,
  headphones,
  music_note,
  nature,
  nest_remote_comfort_sensor,
  next,
  notification_add,
  notifications_unread,
  notifications,
  pace,
  pause,
  pediatrics,
  piano,
  power_settings_new,
  previous,
  relax,
  syringe1,
  eye,
  stethoscope,
} from "../pages/projectsDetail/assets/tinytracker/index";

//slotqi
import {
  modal,
  modal2,
  modal3,
  mockup1,
  loginCredentials,
  slotQIPrototype,
  mockupScreens,
  SlotQIScreens,
} from "../pages/projectsDetail/assets/slotiq/index";

//pawmate
import {
  pawmateWireframe,
  PawMateInformationArchitectureMap,
  pawMate_PrototypeFigma,
  mockupPawMateApp,
  PawMateResponsiveScreens,
  PawMateScreensApp,
} from "../pages/projectsDetail/assets/pawmate/index";

//bmw
import {
  BMWApp,
  BMWAppMockup,
  BMWDsmComponentHomepage,
  BMWDsmComponentProfile,
  BMWiDriveScreens,
  BMWiDriveMockup,
} from "../pages/projectsDetail/assets/bmw/index";

//mercedes
import {
  MercedesDashboardScreens,
  MercedesDashboardChangedColorMockup,
  MercedesDashboardChangedColorMusicPlay,
  MercedesDashboardMockup,
  MercedesComponentsFigma_1,
  MercedesComponentsFigma_2,
} from "../pages/projectsDetail/assets/mercedes/index";

//montepio
import {
  Montepio_Prototype,
  Montepio_Screens,
  Montepio_ScreensMockup,
} from "../pages/projectsDetail/assets/montepio/index";

//finance
import { finance } from "../pages/projectsDetail/assets/finances/index";

import { CheckCircle, Palette, Code, Users, Eye, Ruler } from "lucide-react";
import type { LucideIcon } from "lucide-react";
export interface ICodeItem {
  filename: string;
  code: string;
} //aqui faço export da interface do code que vou usar noutro componente, para que nao tenha de repetir codigo no outro componente. Assim, não tenho de escrever 2 vezes "code?: { filename: string; code: string }[];", importo logo daqui para o componente externo

export interface IProjectData {
  id: string;
  title: string;
  projectTitle?: string;
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
    mobile?: string;
  };
  wireframe?: { title: string; img: string };
  iconography?: { title: string; img: string[] };
  figma?: {
    img: {
      id?: string;
      title: string;
      img: string;
    }[];
  };
  interface?: { title: string; img: string[] };
  videoImg?: string;
  videoUrl?: string;
  code?: { filename: string; code: string }[];
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
  prototype?: { title?: string; img: string[] };
  mockup?: { title?: string; img: string[] };
}

export const projects: IProjectData[] = [
  //finances
  {
    category: ["UI/UX Design", "Front-End Development", "Homepage"],
    id: "finances",
    title: "Financial Plan",
    projectTitle: "Financial Calculator",
    year: 2026,
    mainImage: finances,
    shortDescription: "For portfolio purposes only.",
    liveUrl: "https://finances-interface.vercel.app/",
    githubUrl: "https://github.com/Csgmmm/financesInterface",
    chips: ["FIGMA", "REACT", "TYPESCRIPT", "JAVASCRIPT", "CSS", "HTML"],
    fullDescription: `**This project started out of a very personal need: the daily struggle to track income, manage expenses, and keep a clear view of the final balance without getting lost in complicated spreadsheets. What began as a tool designed for my own everyday use quickly evolved into a full-fledged application, as I realized many others face the exact same financial organization challenges.**
       
       **Secure Onboarding:** Integrated Google Authentication powered by Firebase, ensuring each user has a private, secure, and personalized space to manage their finances;
        **Effortless Transaction Management:**A dashboard that allows users to record income and expenses, with modals to edit and delete records without losing context;
        **Real-Time Balance Insights:** Clear visual feedback calculating exact total incomes, expenses, and the remaining net balance in real time;
        **Dynamic Adaptive UI**Full support for both Dark Mode and Light Mode, ensuring an accessible, visually comfortable experience tailored to user preference at any time of day.`,
    code: [
      {
        filename: "App.tsx",
        code: `const handleDelete = async () => {
    try {
      const currentUser = auth.currentUser;

      if (currentUser) {
        await deleteDoc(doc(db, "transactions", transaction.id));
      } else {
        const sessionData = sessionStorage.getItem("temp_transactions");
        const currentList: ITransaction[] = sessionData
          ? JSON.parse(sessionData)
          : [];
        const updatedList = currentList.filter(
          (item) => item.id !== transaction.id,
        );

        sessionStorage.setItem(
          "temp_transactions",
          JSON.stringify(updatedList),
        );

        window.dispatchEvent(new Event("local-storage-update"));
      }

      onClose(); 
    } catch (error) {
      console.error("Erro ao apagar:", error);
      alert(error);
    }
  };
`,
      },
      {
        filename: "App.tsx",
        code: `function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", nextTheme);
    setTheme(nextTheme);
  };

  const { transactions, refreshTransactions } = useTransactions();

  return (
    <div className="appContainer">
      <nav>
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
      </nav>
      <section className="generalContainer">
        <TransactionsDataCards transactions={transactions} />
        
        <div className="transationsGrid">
          <Card variant="primary">
            <TransactionRecord />
          </Card>

          <Card variant="primary">
            <RecentTransactions 
              transactions={transactions} 
              theme={theme} 
              onRefresh={refreshTransactions} 
            />
          </Card>
        </div>
      </section>
      <Footer/>
    </div>
  );
}`,
      },
    ],
    mockup: {
      title: "Mockups",
      img: [finance],
    },
    resume: `A personal finance tracker born out of real daily budget struggles, featuring Firebase Google Auth, real-time spending insights, full CRUD modals, and dark/light modes.`,
  },

  //portfolio
  {
    category: ["Front-End Development"],
    id: "portfolio",
    title: "Portfolio",
    year: 2026,
    projectTitle: "Portfolio Website",
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
    figma: {
      img: [
        { title: "Card", img: cardProjects },
        { title: "Empty State", img: emptyState },
        { title: "Homepage Header", img: homepageHeader },
        { title: "LinkedIn Cards", img: linkedinCards },
        { title: "Text Styles", img: textStyles },
        { title: "Variables", img: variables },
      ],
    },
    code: [
      {
        filename: "App.tsx",
        code: `<Routes>
 <Route path="/homepage" 
element={<Homepage theme={theme} onToggleTheme={toggleTheme} />} />
<Route path="/projects" 
element={<Projects theme={theme} onToggleTheme={toggleTheme} />} />
<Route path="/project/:id" 
element={<ProjectsDetail theme={theme} onToggleTheme={toggleTheme} />}  />
<Route path="/aboutme" 
element={<AboutMe theme={theme} onToggleTheme={toggleTheme} />} />
<Route path="*" element={<Emptystate/>} />
</Routes>
<Footer />`,
      },
      {
        filename: "ProjectsDetails.tsx",
        code: `{project.liveUrl && (
<div className={styles.btnLinks}>
<a href={project.liveUrl}
target="_blank"
rel="noreferrer">
<Button variant="primary">Website</Button>
</a></div>)}`,
      },
      {
        filename: "Project.tsx",
        code: `function Projects({ theme, onToggleTheme }: ProjectsProps) {
const [activeFilter, setActiveFilter] = useState<FilterType>("All");

const yearToNumber = (year: number | string | undefined) => {
if (!year) return 0;
if (String(year).toLowerCase().includes("current")) return 9999;
return parseInt(String(year), 10); };

const filteredProjects = projects.filter((project) =>
activeFilter === "All" ? true : project.category?.includes(activeFilter),);
        
const sortedProjects = [...filteredProjects].sort(
(a, b) => yearToNumber(b.year) - yearToNumber(a.year),);`,
      },
    ],
    resume: `A portfolio bridging UI/UX Design and Front-End Engineering, built with accessibility, readability, and scalable code in mind.`,
  },

  //SNS 24
  {
    category: ["UI/UX Design", "Homepage"],
    id: "sns24",
    title: "Portuguese National Healthcare",
    projectTitle: "SNS24",
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
    resume: `End-to-end UX/UI design and front-end engineering for Portugal's national healthcare platform.`,
    bigNumber: {
      label: "Reach",
      value: "+10M",
      description: "Portuguese citizens served nationwide.",
    },
  },

  //feminine
  {
    category: ["Front-End Development", "UI/UX Design"],
    id: "femininedashboard",
    title: "Feminine Dashboard",
    projectTitle: "MyCycle",
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
    code: [
      {
        filename: "Cycle.tsx",
        code: `function Cycle() {
  const { user } = useAuth();
  const [dataPeriod, setDataPeriod] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleDataPeriod = async () => {
    const { data, error: supabaseError } = await supabase
      .from("cycles")
      .select("*")
      .eq("user_id", user!.id)
      .order("endDate", { ascending: false });

    if (supabaseError) {
      setError(supabaseError.message);
      return;
    }

    if (data) {
      setDataPeriod(data);
    }
  };`,
      },
      {
        filename: "Layout.tsx",
        code: `import { useState, type ReactNode } from "react";
import styles from "./layout.module.css";
import Sidebar from "./sidebar/Sidebar";

interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <section id={styles.sidebar}>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className={styles.main}>{children}</main>
    </section>
  );
};

export default Layout; `,
      },
    ],
    mockup: { title: "High-Fidelity Screens", img: [mockupMyCycle] },
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
    projectTitle: "YumYum",
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
    wireframe: { title: "Wireframes", img: wireframeYumYum },
    iconography: {
      title: "Iconography",
      img: [
        account_balance_wallet,
        apartment,
        call1,
        call,
        chevron_left1,
        chevron_left2,
        chevron_left3,
        chevron_left4,
        chevron_left5,
        chevron_left,
        clock,
        close,
        confirmation_number,
        favorite,
        fluent_mdl2_calories,
        Frame26088399,
        Frame26088400,
        Frame26088402,
        Frame26088403,
        Frame26088404,
        Frame26088405,
        Frame26088406,
        Frame26088407,
        Frame26088408,
        Frame26088409,
        Frame26088410,
        help,
        history,
        home,
        hugeicons_eggs,
        logout,
        map_pin,
        moped,
        mynaui_pizza,
        near_me,
        person1,
        person,
        receipt_long,
        search,
        sell,
        settings,
        skillet1,
        skillet,
        storefront,
        support_agent,
      ],
    },
    figma: {
      img: [
        { title: "Components", img: componentsYumYum },
        { title: "Modal", img: modalsYumYum },
        { title: "Variables and Styles", img: variables_stylesYumYum },
      ],
    },
    interface: {
      title: "High-fidelity Screens",
      img: [interfaceYumYum],
    },
    mockup: { title: "Mockup", img: [mockupYumYum] },
    prototype: { title: "Prototype", img: [prototypeYumYum] },
    resume: `A user-centered food delivery app with cultural cuisine tags, full component library, modals, and a scalable design system.`,
  },

  //evolve
  {
    category: ["UI/UX Design"],
    id: "evolve",
    title: "Banking App",
    projectTitle: "Evolve",
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
    iconography: {
      title: "Iconography",
      img: [
        Frame1000002812,
        account_circle,
        add_circle1,
        add_circle,
        alternate_email,
        article,
        backspace,
        colors,
        computer,
        contactless,
        copy_all,
        cottage,
        credit_card_clock,
        credit_card,
        edit,
        encrypted,
        exercise,
        finance_mode,
        Frame1000002813,
        Frame1000002814,
        Frame1000002815,
        grocery,
        group,
        home,
        id_card,
        info,
        ios_share,
        key_vertical,
        keyboard_arrow_down1,
        keyboard_arrow_down2,
        keyboard_arrow_down3,
        keyboard_arrow_down,
        local_mall,
        location_on,
        logout,
        money_bag,
        move_down,
        password,
        payments,
        photo_camera,
        recent_actors,
        school,
        search,
        send,
        settings,
        sync_alt,
        translate,
        update,
        account_balance_wallet,
        visibility_off,
        widgets,
      ],
    },
    figma: {
      img: [
        { title: "Transactions", img: evolveFigma3 },
        { title: "Contacts", img: evolveFigma4 },
        { title: "Text Styles", img: evolveFigma5 },
        { title: "Gaps", img: evolveFigma6 },
        { title: "Variables", img: evolveFigma9 },
      ],
    },
    prototype: {
      title: "Prototype",
      img: [evolveprototype1, evolveprototype2],
    },

    interface: {
      title: "High-fidelity Screens",
      img: [interfaceEvolveScreens, interfaceEvolveScreensProfile],
    },
    mockup: {
      title: "Mockup",
      img: [smartwatchEvolve, evolvepersonWithPhoneOnHands],
    },
    resume: `A banking app balancing security and simplicity, with biometric authentication, clean financial flows, and a scalable component library.`,
  },

  //tinytracker
  {
    category: ["UI/UX Design"],
    id: "tinytracker",
    title: "Baby Tracker App",
    projectTitle: "TinyTracker",
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
    iconography: {
      title: "Iconography",
      img: [
        ad_units,
        ar_on_you,
        arrow_left_alt,
        baby_changing_station,
        badge,
        bedtime,
        calendar_month,
        chevron_right,
        contact_mail,
        contract_edit,
        dark_mode,
        share,
        more,
        graphic_eq,
        headphones,
        music_note,
        nature,
        nest_remote_comfort_sensor,
        next,
        notification_add,
        notifications_unread,
        notifications,
        pace,
        pause,
        pediatrics,
        piano,
        power_settings_new,
        previous,
        relax,
        syringe1,
        eye,
        stethoscope,
      ],
    },
    wireframe: { title: "Wireframes", img: wireframeTiny },
    figma: {
      img: [
        { title: "Input Selection", img: tinyTrackerFigma3 },
        { title: "Variables", img: tinyTrackerFigma5 },
        { title: "Gaps", img: tinyTrackerFigma1 },
        { title: "Margins", img: tinyTrackerFigma2 },
        { title: "Gaps", img: tinyTrackerFigma1 },
        { title: "Empty State", img: tinyTrackerEmptyState },
      ],
    },
    prototype: {
      title: "Prototype",
      img: [prototypeTinyTracker1],
    },
    interface: {
      title: "High-fidelity Screens",
      img: [mockupTinyTrackeriPhone],
    },
    mockup: { title: "Mockup", img: [tinyMockup1] },
    resume: `An all-in-one parenting app combining medical appointments, developmental tracking, daily routines, and sleep sounds in a single platform.`,
  },

  //slotQi
  {
    category: ["UI/UX Design"],
    id: "slotqi",
    title: "Talent Management Software",
    projectTitle: "SlotQI",
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
    figma: {
      img: [
        { title: "Error message", img: loginCredentials },
        { title: "Margins", img: modal },
        { title: "Touch target", img: modal2 },
        { title: "Interface Element", img: modal3 },
      ],
    },
    interface: { title: "High-fidelity Screens", img: [SlotQIScreens] },
    mockup: { title: "Mockup", img: [mockupScreens, mockup1] },
    prototype: { title: "Prototype", img: [slotQIPrototype] },

    resume: `An HR platform centralizing recruitment, employee stats, and team scheduling with a data-driven dashboard and enterprise-grade design system.`,
  },

  //pawmate
  {
    category: ["Front-End Development"],
    id: "pawmate",
    title: " UI/UX App & website",
    projectTitle: "PawMate",
    year: 2024,
    mainImage: pawmate,
    shortDescription:
      "This project was conceived during a Web Development Bootcamp.",
    prototypeUrl:
      "https://www.figma.com/proto/QmCuNbxDTVTjkdeGeb9oan/Pawmate?node-id=17-102&viewport=296%2C291%2C0.23&t=KMADnMnXHBVrn12Z-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=68%3A3924&page-id=0%3A1",
    behanceUrl:
      "https://www.behance.net/gallery/197923083/Front-End-Development-UIUX-PawMate",
    chips: ["FIGMA", "photoshop", "illustrator", "CSS", "HTML", "Bootstrap"],
    fullDescription: `This project was conceived during a **Web Development Bootcamp by Dr. Angela Yu**, that created Tindog, an app inspired by the popular dating platform Tinder. 

      This project focuses on developing a website utilizing Bootstrap, Flexbox, special attention was given to ensuring responsiveness across devices, CSS, and HTML. In addition to that, through intuitive UI/UX, I've brought the concept to life, fortifying the potential app, rebranding the project with a new name and logo PawMate. 
      With **PawMate**, dogs can have profiles, and swipe right to express interest in making new canine friends, setting up playdates, arranging walks, or finding a compatible mate for breeding purposes, PawMate ensures that every pup and their owner find exactly what they're looking for.`,
    wireframe: { title: "Wireframes", img: pawmateWireframe },
    code: [
      {
        filename: "Index.html - Section: Testimonial",
        code: `<section id="testimonial">
  <div class="container my-1">
    <div class="p-5 text-center bg-body-tertiary rounded-5">

      <h1 class="text-body-emphasis pb-3">"I no longer have to sniff other dogs for love. I've found the hottest Corgi on PawMate. Woof!"</h1>

      <img src="./images/dog-img.jpg" width="100" height="100" style="border-radius: 50%;"></img>
      <p class="col-lg-8 mx-auto fs-5 text-muted pb-5">
        Maggie, Lisbon
      </p>

      <div class="row">
        <div class="col-md-3">
          <img src="./images/techcrunch.png" class="img-fluid" width="150px" alt="techcrunch">
        </div>
        <div class="col-md-3">
          <img src="./images/mashable.png" class="img-fluid" width="100px" alt="mashable">
        </div>
        <div class="col-md-3">
          <img src="./images/bizinsider.png" class="img-fluid" width="200px" alt="bizinsider">
        </div>
        <div class="col-md-3">
          <img src="./images/tnw.png" class="img-fluid" width="70px" alt="tnw">
        </div>
      </div>
    </div>
  </div>

</section>`,
      },
      {
        filename: "Index.html - Section: Subscriptions",
        code: `<div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
  <div class="col">
    <div class="card mb-4 rounded-3 shadow-sm">
      <div class="card-header py-3">
        <h4 class="my-0 fw-normal">Brindle</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">€0<small class="text-body-secondary fw-light">/mo</small></h1>
        <ul class="list-unstyled mt-3 mb-4">
          <li>5 Matches Per Day</li>
          <li>10 Messages Per Day</li>
          <li>Unlimited App Usage</li>
        </ul>
        <button type="button" class="w-100 btn btn-lg btn-outline-dark">Sign up for free</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card mb-4 rounded-3 shadow-sm">
      <div class="card-header py-3">
        <h4 class="my-0 fw-normal">Merle</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">€5<small class="text-body-secondary fw-light">/mo</small></h1>
        <ul class="list-unstyled mt-3 mb-4">
          <li>Unlimited Matches</li>
          <li>Unlimited Messages</li>
          <li>Unlimited App Usage</li>
        </ul>
        <button type="button" class="w-100 btn btn-lg btn-dark">Get started</button>
      </div>
    </div>
  </div>
</div>`,
      },
    ],
    prototype: { title: "prototype", img: [pawMate_PrototypeFigma] },
    videoUrl: "Vimeo",
    interface: { title: "High-fidelity Screens", img: [mockupPawMateApp] },
    InformationArchitectureMap: {
      title: "Information Architecture Map",
      desktop: PawMateInformationArchitectureMap,
      mobile: PawMateInformationArchitectureMap,
    },
    mockup: {
      title: "Mockup Desktop Responsive and App",
      img: [PawMateResponsiveScreens, PawMateScreensApp],
    },

    resume: `A Tinder-inspired dog social app built with Bootstrap and Flexbox, rebranded as PawMate with custom UI/UX and full responsiveness.`,
    githubUrl: "https://github.com/Csgmmm/Front-End-Development-UI-UX-PawMate",
  },

  //bmw
  {
    category: ["UI/UX Design"],
    id: "bmw",
    title: "App & iDrive Redesign",
    projectTitle: "BMW",
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
    figma: {
      img: [
        { title: "Clickable Element", img: BMWDsmComponentHomepage },
        { title: "Border Radius", img: BMWDsmComponentProfile },
      ],
    },
    interface: {
      title: "High-Fidelity Screens",
      img: [BMWApp, BMWiDriveScreens],
    },
    mockup: {
      title: "Mockups App and Dashbard iDrive",
      img: [BMWAppMockup, BMWiDriveMockup],
    },
    prototypeUrl:
      "https://www.figma.com/proto/nWXtDjpcJjhhLEm4SFRftY/BMW---App-and-iDrive?node-id=12-2&viewport=183%2C368%2C0.5&t=cJjTcjaWO6kwVDZb-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    resume: `A BMW ecosystem redesign connecting the My BMW app and iDrive dashboard through cohesive UI, high-density data management, and a scalable design system.`,
  },

  //mercedes
  {
    category: ["UI/UX Design"],
    id: "mercedes",
    title: "HMI: UI Concept",
    projectTitle: "Mercedes-Benz",
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
     figma: {
      img: [
        { title: "Interface Element", img: MercedesComponentsFigma_1 },
        { title: "Touch Target", img: MercedesComponentsFigma_2 },
      ],
    },
    interface: {
      title: "High-Fidelity Screens",
      img: [MercedesDashboardScreens],
    },
    mockup: {
      title: "Mockups",
      img: [
        MercedesDashboardMockup,
        MercedesDashboardChangedColorMusicPlay,
        MercedesDashboardChangedColorMockup,
      ],
    },
    resume: `A futuristic Mercedes A-Class HMI concept with a personalized high-contrast dashboard, dynamic color themes, and streamlined media controls.`,
  },

  //montepio
  {
    category: ["UI/UX Design"],
    id: "montepio",
    title: "Mobile App Redesign",
    projectTitle: "Montepio",
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
    prototype: { title: "Prototype", img: [Montepio_Prototype] },
    interface: {
      title: "High-Fidelity Screens",
      img: [Montepio_Screens],
    },
    mockup: {
      title: "Mockups",
      img: [Montepio_ScreensMockup],
    },
    resume: `A mobile-first redesign of Banco Montepio targeting younger users, with biometric onboarding, account carousels, spending insights, and savings goals.`,
  },
];
