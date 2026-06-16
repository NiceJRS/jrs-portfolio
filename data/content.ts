import {
  Lightbulb,
  Layers,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export const profile = {
  name: "Jaroensak Jantaranimi",
  headline: "Translating Business Strategy into Scalable Technology Solutions.",
  subtext:
    "Software Engineer & Tech Business Analyst specializing in Banking Transformation.",
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
    title: "Strategic Thinking",
    description:
      "Gather and translate business requirements into clear system designs. As-Is / To-Be gap analysis that aligns engineering work with real business outcomes.",
  },
  {
    icon: Layers,
    title: "Technical Architecture",
    description:
      "Design scalable system integrations, API specifications, and data flows. Modernize legacy banking platforms with modern .NET, microservices, and cloud.",
  },
  {
    icon: Rocket,
    title: "End-to-End Delivery",
    description:
      "Own features from requirement definition through UAT to production rollout. Bridge stakeholders, product, and engineering in high-availability environments.",
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  context: string;
  highlights: string[];
  metrics: { value: string; label: string }[];
};

export const experiences: Experience[] = [
  {
    role: "System Analyst / Software Engineer",
    company: "Ayudhya Capital Services (Krungsri Project)",
    period: "Mar 2024 – Present",
    context:
      "Modernizing the Krungsri WeMerchant legacy merchant banking platform — onboarding and installment services.",
    highlights: [
      "Led requirement analysis with business stakeholders to modernize the merchant banking platform.",
      "Translated business needs into functional requirements, system flows, and API specifications.",
      "Conducted As-Is vs To-Be analysis to identify gaps and drive digital transformation.",
      "Designed system integrations and data flows for financial services and merchant onboarding.",
      "Supported UAT planning, validation, and system rollout in a high-availability environment.",
    ],
    metrics: [
      { value: "Legacy → .NET", label: "Platform modernization" },
      { value: "End-to-end", label: "API spec to rollout" },
    ],
  },
  {
    role: "Senior Web Developer / Tech Analyst / Team Lead",
    company: "Choco Card Enterprise Co., Ltd.",
    period: "Jan 2021 – Mar 2024",
    context:
      "Led delivery across ChocoCRM, ChocoPOS, and ChocoBCRM — POS, CRM, and merchant operations platforms.",
    highlights: [
      "Collaborated with Product Owners, CTO, and business teams to define scope and delivery roadmap.",
      "Led and mentored a development team of 5–11 members, aligning business and engineering.",
      "Designed and implemented system architecture and integrations to improve performance and scalability.",
      "Delivered end-to-end features from requirement definition to production deployment.",
      "Ensured code quality and best practices through code reviews and technical leadership.",
    ],
    metrics: [
      { value: "5–11", label: "Developers led" },
      { value: "High-volume", label: "Transaction platforms" },
    ],
  },
  {
    role: "Developer (Intern → Full-time)",
    company: "Cube SoftTech Co., Ltd.",
    period: "Aug 2019 – May 2020",
    context:
      "Built and maintained web and backend systems for business operations.",
    highlights: [
      "Developed and maintained web and backend systems using Java, Struts, Hibernate, and MySQL.",
      "Delivered stable, scalable system features supporting business operations.",
      "Built the company website using PHP and Bootstrap.",
    ],
    metrics: [
      { value: "Java / Spring", label: "Backend stack" },
      { value: "Full-stack", label: "Web delivery" },
    ],
  },
];

export type Project = {
  name: string;
  category: string;
  description: string;
};

export const projects: Project[] = [
  {
    name: "Krungsri WeMerchant Platform",
    category: "Banking",
    description:
      "Modernized a legacy merchant platform supporting onboarding and installment services. Translated business processes into scalable system workflows and APIs.",
  },
  {
    name: "E-Stamp Duty System",
    category: "Banking Integration",
    description:
      "High-reliability financial system integrating with Thailand Revenue Department APIs. Ensured data accuracy, compliance, and secure transaction processing.",
  },
  {
    name: "ChocoPOS",
    category: "Payment & Transactions",
    description:
      "POS system used by merchants. Translated business needs into system design and backend services; integrated Flutter frontend with backend APIs for transactions.",
  },
  {
    name: "ChocoBCRM Platform",
    category: "Merchant Operations",
    description:
      "Merchant administration platform supporting store management, inventory, and operations. Improved operational efficiency and business workflows.",
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
  image: string; // path under /public
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
    image: "/projects/parcel-dashboard.jpg",
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
    image: "/projects/herb-dashboard.png",
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
    image: "/projects/ai-risk-home.png",
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
