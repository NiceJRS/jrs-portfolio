import {
  Lightbulb,
  Layers,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export const profile = {
  name: "Jaroensak Jantaranimi",
  role: "Product-Minded Software Engineer",
  headline: "Bridging the gap between business strategy and scalable engineering.",
  subtext:
    "5 years of experience building, modernizing, and scaling enterprise systems for banking, CRM, and digital platforms.",
  location: "Bangkok, Thailand",
  email: "jaroensak.nice@gmail.com",
  phone: "098-449-9858",
  linkedin: "https://www.linkedin.com/in/jaroensak-jantaranimi-301a57262",
  github: "https://github.com/NiceJRS",
};

export type CoreValue = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const coreValues: CoreValue[] = [
  {
    icon: Lightbulb,
    title: "Business Analysis & Strategy",
    description:
      "Gathering requirements and translating business needs into clear, actionable system designs. As-Is / To-Be gap analysis that aligns engineering work with real business outcomes.",
  },
  {
    icon: Layers,
    title: "Technical Architecture",
    description:
      "Designing scalable system integrations, API specifications, and establishing best practices for backend structures. Modernize legacy banking platforms with modern .NET, microservices, and cloud.",
  },
  {
    icon: Rocket,
    title: "End-to-End Delivery",
    description:
      "Owning the full software lifecycle from As-Is / To-Be analysis to UAT and production rollout. Bridge stakeholders, product, and engineering in high-availability environments.",
  },
];

export type RoleEntry = { title: string; period: string };

export type KeyProject = { name: string; detail: string };

export type Experience = {
  company: string;
  period: string;
  roles: RoleEntry[];
  location?: string;
  details: string;
  responsibilities?: string[];
  keyProjects?: KeyProject[];
};

export const experiences: Experience[] = [
  {
    company: "Ayudhya Capital Services (Krungsri Project)",
    period: "Mar 2024 – Present",
    location: "Bangkok, Thailand",
    roles: [
      { title: "System Analyst / Software Engineer", period: "Mar 2024 – Present" },
    ],
    details:
      "Led requirement analysis and collaborated with business stakeholders to modernize a merchant banking platform. Supported UAT planning, validation, and system rollout in a high-availability environment.",
    responsibilities: [
      "Developed and maintained enterprise-scale systems for banking and internal platforms.",
      "Worked across backend and frontend development with strong involvement in system analysis and solution design.",
      "Designed and maintained API specifications, system flow diagrams, and technical documentation to support development and cross-team alignment.",
      "Analyzed legacy systems and translated business requirements into modern, maintainable architectures.",
      "Revamped system architecture to align with business goals and project objectives.",
      "Collaborated closely with business stakeholders, QA, and cross-functional teams to deliver production-ready solutions.",
      "Supported system migration, deployment, and post-release issue resolution in live environments.",
    ],
    keyProjects: [
      {
        name: "Krungsri WeMerchant Platform",
        detail:
          "Rebuilt a legacy system by analyzing existing business logic and re-implementing the platform from scratch using modern .NET technologies.",
      },
      {
        name: "Kentico CMS – Multi-Project Development & Migration",
        detail:
          "Developed, customized, and maintained multiple Kentico CMS-based systems, including code-level enhancements and CMS migrations driven by End-of-Life requirements.",
      },
      {
        name: "E-Stamp Duty System",
        detail:
          "Developed a banking system integrating with Thailand Revenue Department (RD) APIs for tax payment processing, reporting, and automated email notifications using Java.",
      },
      {
        name: "Sherry Project (Internal System)",
        detail:
          "Reverse-engineered a legacy VB.NET system and rebuilt it as a modern Windows Forms application based on observed system behavior and business workflows.",
      },
    ],
  },
  {
    company: "Choco Card Enterprise Co., Ltd.",
    period: "Jan 2021 – Mar 2024",
    location: "Bangkok, Thailand",
    roles: [
      { title: "Senior Web Developer / Team Lead", period: "Jan 2023 – Mar 2024" },
      { title: "Analyst Web Developer", period: "Oct 2021 – Jan 2023" },
      { title: "Junior Web Developer", period: "Jan 2021 – Oct 2021" },
    ],
    details:
      "Led a team of 5–11 developers. Delivered end-to-end features from requirement definition to production deployment for POS, CRM, and merchant operations platforms.",
    responsibilities: [
      "Led and managed a team of 5–6 developers, providing mentorship, code reviews, and guiding scalable backend and frontend solutions.",
      "Steered robust POS and CRM applications, collaborating with Flutter teams and architecting sales functionalities, CRM modules, and back-office configurations.",
      "Spearheaded core engine conceptualization and implementation for seamless application integration.",
      "Ensured exemplary code quality and focused primarily on backend API development.",
      "Collaborated closely with Product Owners, UX/UI, and Business teams to align development with business objectives.",
      "Built best practices for backend project structures to ensure efficiency and maintainability.",
      "Oversaw .NET projects for user interfaces, admin apps, and web-based portals.",
      "Managed Brand CRM, optimizing corporate projects focusing on privileges, customer relations, permissions, and inventory.",
      "Researched and implemented new technologies to meet current industry standards.",
      "Planned and assigned tasks to squad members.",
      "Developed POS/CRM Platform and back-office to help businesses manage customer interactions and analyze customer data.",
    ],
    keyProjects: [
      {
        name: "ChocoPOS & ChocoBCRM Platform",
        detail:
          "Architected and delivered end-to-end POS and CRM applications with Flutter team integration, supporting store management, merchant administration, and inventory operations.",
      },
    ],
  },
  {
    company: "Cube SoftTech Co., Ltd.",
    period: "Aug 2019 – May 2020",
    location: "Bangkok, Thailand",
    roles: [
      { title: "Developer (Intern → Full-time)", period: "Aug 2019 – May 2020" },
    ],
    details:
      "Developed web and backend systems using Java, Struts, Hibernate, and MySQL.",
  },
];

export type WorkProject = {
  name: string;
  description: string;
  image: string; // placeholder path under /public
  tech: string[];
};

export type ProjectGroup = {
  category: string;
  items: WorkProject[];
};

export const projectGroups: ProjectGroup[] = [
  {
    category: "Banking & Enterprise",
    items: [
      {
        name: "Krungsri WeMerchant Platform",
        description:
          "Modernized a legacy merchant platform supporting onboarding and installment services. Rebuilt using modern .NET technologies.",
        image: "/projects/placeholder-wemerchant-arch.png",
        tech: [".NET", "C#", "REST APIs"],
      },
      {
        name: "E-Stamp Duty System",
        description:
          "High-reliability financial system integrating with Thailand Revenue Department APIs for tax processing using Java. Automated reporting and email notifications.",
        image: "/projects/placeholder-estamp-flow.png",
        tech: ["Java", "RD API", "Reporting"],
      },
      {
        name: "Sherry Project & Kentico CMS",
        description:
          "Reverse-engineered a legacy VB.NET system into a modern Windows Forms application. Managed multiple Kentico CMS end-of-life migrations.",
        image: "/projects/placeholder-sherry-migration.png",
        tech: ["VB.NET → WinForms", "Kentico CMS", ".NET"],
      },
    ],
  },
  {
    category: "High-Volume Commerce",
    items: [
      {
        name: "ChocoPOS & ChocoBCRM",
        description:
          "Architected comprehensive POS and CRM applications, integrating seamlessly with Flutter frontend teams. Built a merchant administration platform supporting store management and inventory.",
        image: "/projects/placeholder-chocopos-dash.png",
        tech: ["C#", ".NET", "SQL Server", "Flutter integration"],
      },
    ],
  },
];

export type Credential = { role: string; username: string; password: string };

export type FeaturedLink = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export type FeaturedProject = {
  name: string;
  category: string;
  status: "live" | "demo" | "desktop";
  summary: string;
  features: string[];
  tech: string[];
  images: string[]; // paths under /public; first is the cover
  links: FeaturedLink[];
  credentials?: Credential[];
  note?: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    name: "Smart Parcel Management System",
    category: "Logistics Platform",
    status: "live",
    summary:
      "End-to-end parcel intake and pickup platform for residential buildings. Designed, built, and deployed on Azure App Service with Azure SQL — covering staff intake, resident self-service pickup via QR, and full user management.",
    features: [
      "Parcel intake: staff scan barcode, photograph the item, and assign the recipient.",
      "Resident flow: in-app delivery notification → system-generated QR code for pickup.",
      "Staff scans the resident's QR, reviews parcel details, then dispenses with photo proof.",
      "Role-based user management (admin, super admin, resident).",
    ],
    tech: ["C#", ".NET Core", "SQL Server", "Azure App Service", "Azure SQL"],
    images: ["/projects/parcel-main.jpg", "/projects/parcel-dashboard.jpg"],
    links: [
      {
        label: "Live Demo",
        href: "https://app-package-management-b4dzacd3edb7b2ed.southeastasia-01.azurewebsites.net/",
        variant: "primary",
      },
    ],
    credentials: [
      { role: "Admin", username: "admin", password: "1234" },
      { role: "Super Admin", username: "superadmin", password: "1234" },
      { role: "Resident", username: "user", password: "1234" },
    ],
    note: "Deployed end-to-end by me on Microsoft Azure (App Service + SQL Database).",
  },
  {
    name: "Herb Garden CMS & Live Site",
    category: "CMS + Booking Platform",
    status: "demo",
    summary:
      "A modern content platform for the Princess Maha Chakri Sirindhorn Herb Garden. Replaces a slow, outsourced workflow with a self-service back office connected to the public site through APIs — plus an integrated visit-booking system.",
    features: [
      "Self-service content management — staff update herbs, articles, news, and brochures without a developer.",
      "Back office connected to the live site via REST APIs.",
      "Visit / queue booking system with a monthly reservations dashboard.",
      "Modern, maintainable stack replacing the legacy outsourced site.",
    ],
    tech: ["C#", ".NET Core", "REST APIs", "SQL Server", "CMS"],
    images: [
      "/projects/herb-dashboard.png",
      "/projects/herb-cms.png",
      "/projects/herb-livesite.png",
    ],
    links: [
      {
        label: "Current Live Site",
        href: "http://ptt-herb.softbearit.com/",
        variant: "primary",
      },
    ],
    note: "Built for สวนสมุนไพรสมเด็จพระเทพรัตนราชสุดาฯ สยามบรมราชกุมารี. Back office + API-connected public site.",
  },
  {
    name: "AI Risk & Test Recommendation",
    category: "AI / Desktop Tool",
    status: "desktop",
    summary:
      "A Python desktop tool that estimates regression-testing risk when a change request lands. Scores risk, recommends a manual-vs-automation ratio, and surfaces the highest-risk scenarios — a foundation model designed to learn CR impact on modules/features over time as data grows.",
    features: [
      "AI risk score from change type, requirement type, country, and impacted areas.",
      "Recommended manual vs automation testing ratio.",
      "Top high-risk scenarios surfaced automatically.",
      "Test case list with priority, security, and platform coverage; export to Excel.",
    ],
    tech: ["Python", "PySide6 (Qt)", "pandas", "Risk model"],
    images: [
      "/projects/ai-risk-home.png",
      "/projects/ai-risk-calculation.png",
      "/projects/ai-risk-data-test.png",
    ],
    links: [
      {
        label: "Download EXE",
        href: "https://drive.google.com/file/d/1GtmEVjzsybMMxex6trnQ-b6gD5jN26Uq/view?usp=drive_link",
        variant: "primary",
      },
    ],
    note: "Windows desktop application (.exe). Foundation model intended to grow with more historical CR data.",
  },
];

export const businessSkills: string[] = [
  "Requirements Gathering",
  "BRD Creation",
  "User Stories",
  "As-Is / To-Be Analysis",
  "Gap Analysis",
  "UAT Planning & Execution",
  "Stakeholder Management",
  "Agile / Scrum",
];

export const techSkills: string[] = [
  "C#",
  "Java",
  "Python",
  ".NET Core",
  "Entity Framework Core",
  "Spring",
  "Hibernate",
  "React / TypeScript",
  "SQL Server",
  "MySQL",
  "Redis",
  "REST APIs",
  "Microservices",
  "Cloud (Azure, AWS)",
  "Kentico CMS",
];

export const education = {
  degree: "Bachelor of Business Administration (Computer Information Systems)",
  school: "Rangsit University",
  honors: "First-Class Honors — GPA 3.95",
};
