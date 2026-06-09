import { LINKS, ROUTES } from "@/lib/constants";

export type EducationTopic = {
  id: string;
  title: string;
  description: string;
  bullets?: string[];
  learnMoreLabel: string;
};

export type RoutingButton = {
  label: string;
  href: string;
  external?: boolean;
};

export type EducationLibrary = {
  metadata: { title: string; description: string };
  h1: string;
  intro: string;
  topics: EducationTopic[];
  routingButtons: RoutingButton[];
};

export const READINESS_LIBRARY: EducationLibrary = {
  metadata: {
    title: "Readiness Education | Misconi USA Network",
    description:
      "Understand what readiness means, why it matters, and how it prepares your business for SBA pathways, funding, procurement, and future opportunities.",
  },
  h1: "Readiness Education",
  intro:
    "Readiness is the foundation of business growth. These resources help you understand what readiness means, why it matters, and how it prepares your business for SBA pathways, funding, procurement, and future opportunities.",
  topics: [
    {
      id: "what-is-readiness",
      title: "What Is Readiness?",
      description:
        "Readiness is your business's ability to demonstrate structure, documentation, stability, and clarity. It shows partners, lenders, and institutions that your business is prepared to operate, grow, and deliver.",
      learnMoreLabel: "What Is Readiness",
    },
    {
      id: "why-readiness-matters",
      title: "Why Readiness Matters",
      description: "Readiness impacts your ability to:",
      bullets: [
        "Qualify for funding",
        "Work with partners",
        "Pursue opportunities",
        "Meet procurement requirements",
        "Build long-term stability",
      ],
      learnMoreLabel: "Why Readiness Matters",
    },
    {
      id: "readiness-levels",
      title: "Readiness Levels Explained",
      description:
        "Understand the four levels of readiness and what each one means for your business.",
      learnMoreLabel: "Readiness Levels",
    },
    {
      id: "documentation-basics",
      title: "Documentation & Compliance Basics",
      description:
        "Learn the core documents and compliance items every business must maintain.",
      learnMoreLabel: "Documentation Basics",
    },
    {
      id: "operational-readiness",
      title: "Operational Readiness",
      description:
        "Processes, workflows, and systems that support consistent performance.",
      learnMoreLabel: "Operational Readiness",
    },
    {
      id: "financial-readiness",
      title: "Financial Readiness",
      description:
        "Cash flow, financial documentation, and stability indicators.",
      learnMoreLabel: "Financial Readiness",
    },
    {
      id: "market-readiness",
      title: "Market & Opportunity Readiness",
      description:
        "How your business positions itself for growth and visibility.",
      learnMoreLabel: "Market Readiness",
    },
  ],
  routingButtons: [
    { label: "Take the Readiness Assessment", href: LINKS.GYBS, external: true },
    { label: "Explore SBA Education", href: ROUTES.SBA },
  ],
};

export const SBA_LIBRARY: EducationLibrary = {
  metadata: {
    title: "SBA Education | Misconi USA Network",
    description:
      "Learn how SBA programs, documentation, and pathways support business growth, funding, and long-term stability.",
  },
  h1: "SBA Education",
  intro:
    "Learn how SBA programs, documentation, and pathways support business growth, funding, and long-term stability.",
  topics: [
    {
      id: "sba-programs",
      title: "SBA Program Overview",
      description:
        "Understand the major SBA programs and how they support small businesses.",
      learnMoreLabel: "SBA Programs",
    },
    {
      id: "sba-documentation",
      title: "SBA Documentation Requirements",
      description:
        "Learn the documents SBA lenders and partners expect.",
      learnMoreLabel: "SBA Documentation",
    },
    {
      id: "sba-certifications",
      title: "SBA Certifications",
      description:
        "Explore SBA certifications that strengthen your business profile.",
      learnMoreLabel: "SBA Certifications",
    },
    {
      id: "sba-funding",
      title: "SBA Funding Pathways",
      description:
        "Understand how SBA loans work and how to prepare.",
      learnMoreLabel: "SBA Funding",
    },
    {
      id: "lender-expectations",
      title: "SBA Lender Expectations",
      description:
        "Learn what lenders look for when reviewing your business.",
      learnMoreLabel: "Lender Expectations",
    },
    {
      id: "readiness-to-sba",
      title: "How Readiness Connects to SBA",
      description:
        "See how readiness supports SBA approval and funding success.",
      learnMoreLabel: "Readiness → SBA",
    },
  ],
  routingButtons: [
    { label: "Visit SBAReady.org", href: LINKS.SBA_READY, external: true },
    { label: "Take the Readiness Assessment", href: LINKS.GYBS, external: true },
  ],
};

export const DOCUMENTATION_LIBRARY: EducationLibrary = {
  metadata: {
    title: "Documentation & Compliance | Misconi USA Network",
    description:
      "Understand what documents matter and why they are essential for SBA, funding, and procurement.",
  },
  h1: "Documentation & Compliance",
  intro:
    "Documentation is the backbone of readiness. These resources help you understand what documents matter and why they are essential for SBA, funding, and procurement.",
  topics: [
    {
      id: "core-documents",
      title: "Core Business Documents",
      description:
        "Learn the essential documents every business must maintain.",
      learnMoreLabel: "Core Documents",
    },
    {
      id: "financial-documents",
      title: "Financial Documentation",
      description:
        "Understand the financial records lenders and partners expect.",
      learnMoreLabel: "Financial Documents",
    },
    {
      id: "operational-documents",
      title: "Operational Documentation",
      description:
        "Processes, workflows, and SOPs that support consistency.",
      learnMoreLabel: "Operational Documents",
    },
    {
      id: "compliance-requirements",
      title: "Compliance Requirements",
      description:
        "Licensing, registrations, and regulatory requirements.",
      learnMoreLabel: "Compliance Requirements",
    },
    {
      id: "procurement-documents",
      title: "Procurement Documentation",
      description:
        "Documents required for institutional and government procurement.",
      learnMoreLabel: "Procurement Documents",
    },
  ],
  routingButtons: [
    { label: "Funding Education", href: ROUTES.FUNDING },
    { label: "Procurement Education", href: ROUTES.PROCUREMENT },
  ],
};

export const FUNDING_LIBRARY: EducationLibrary = {
  metadata: {
    title: "Funding Education | Misconi USA Network",
    description:
      "Learn how readiness, documentation, and financial stability support funding opportunities, including SBA loans and private lending.",
  },
  h1: "Funding Education",
  intro:
    "Learn how readiness, documentation, and financial stability support funding opportunities, including SBA loans and private lending.",
  topics: [
    {
      id: "funding-readiness",
      title: "Funding Readiness",
      description: "What lenders look for and how to prepare.",
      learnMoreLabel: "Funding Readiness",
    },
    {
      id: "sba-loan-prep",
      title: "SBA Loan Preparation",
      description: "How to prepare for SBA loan applications.",
      learnMoreLabel: "SBA Loan Prep",
    },
    {
      id: "private-lenders",
      title: "Private Lender Expectations",
      description: "Understand what private lenders require.",
      learnMoreLabel: "Private Lenders",
    },
    {
      id: "financial-docs",
      title: "Financial Documentation Requirements",
      description: "The financial records that matter most.",
      learnMoreLabel: "Financial Docs",
    },
    {
      id: "cash-flow",
      title: "Cash Flow & Stability",
      description: "Why cash flow is a key indicator of readiness.",
      learnMoreLabel: "Cash Flow",
    },
  ],
  routingButtons: [
    { label: "SBA Education", href: ROUTES.SBA },
    { label: "Procurement Education", href: ROUTES.PROCUREMENT },
  ],
};

export const PROCUREMENT_LIBRARY: EducationLibrary = {
  metadata: {
    title: "Procurement Education | Misconi USA Network",
    description:
      "Learn how procurement works and what institutions expect from vendors and suppliers.",
  },
  h1: "Procurement Education",
  intro:
    "Learn how procurement works and what institutions expect from vendors and suppliers.",
  topics: [
    {
      id: "procurement-basics",
      title: "Procurement Basics",
      description: "Understand how procurement decisions are made.",
      learnMoreLabel: "Procurement Basics",
    },
    {
      id: "vendor-requirements",
      title: "Vendor Requirements",
      description: "What institutions expect from approved vendors.",
      learnMoreLabel: "Vendor Requirements",
    },
    {
      id: "packaging-compliance",
      title: "Packaging & Compliance",
      description: "How to prepare your business for procurement review.",
      learnMoreLabel: "Packaging & Compliance",
    },
    {
      id: "multi-campus-ordering",
      title: "Multi-Campus Ordering",
      description: "How large institutions manage multi-location purchasing.",
      learnMoreLabel: "Multi-Campus Ordering",
    },
    {
      id: "readiness-procurement",
      title: "How Readiness Supports Procurement",
      description: "Why readiness is essential for procurement success.",
      learnMoreLabel: "Readiness & Procurement",
    },
  ],
  routingButtons: [
    { label: "Opportunity Education", href: ROUTES.OPPORTUNITY },
    { label: "Documentation Education", href: ROUTES.DOCUMENTATION },
  ],
};

export const OPPORTUNITY_LIBRARY: EducationLibrary = {
  metadata: {
    title: "Opportunity Education | Misconi USA Network",
    description:
      "Learn how readiness, SBA alignment, and documentation prepare your business for future opportunities.",
  },
  h1: "Opportunity Education",
  intro:
    "Learn how readiness, SBA alignment, and documentation prepare your business for future opportunities.",
  topics: [
    {
      id: "what-are-opportunities",
      title: "What Are Opportunities?",
      description:
        "Understand the types of opportunities businesses can pursue.",
      learnMoreLabel: "What Are Opportunities",
    },
    {
      id: "opportunity-requirements",
      title: "Opportunity Requirements",
      description:
        "What institutions look for before awarding opportunities.",
      learnMoreLabel: "Opportunity Requirements",
    },
    {
      id: "readiness-unlocks-opportunities",
      title: "How Readiness Unlocks Opportunities",
      description:
        "Why readiness is the foundation of opportunity access.",
      learnMoreLabel: "Readiness Unlocks Opportunities",
    },
    {
      id: "sba-opportunities",
      title: "How SBA Supports Opportunities",
      description:
        "How SBA programs strengthen your opportunity profile.",
      learnMoreLabel: "SBA & Opportunities",
    },
    {
      id: "future-pathways",
      title: "Future Opportunity Pathways",
      description:
        "How to prepare for long-term growth and visibility.",
      learnMoreLabel: "Future Pathways",
    },
  ],
  routingButtons: [
    { label: "Take the Readiness Assessment", href: LINKS.GYBS, external: true },
    { label: "Visit SBAReady.org", href: LINKS.SBA_READY, external: true },
  ],
};
