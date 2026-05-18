import type { ResourceItem } from "./types";

/** Mock resources for GET /api/resources - grouped by category */
export const MOCK_RESOURCES: {
  articles: ResourceItem[];
  guides: ResourceItem[];
  glossary: ResourceItem[];
  faq: ResourceItem[];
} = {
  articles: [
    { id: "a1", title: "What Is Readiness?", description: "An introduction to the readiness concept and why it matters for your business.", category: "articles" },
    { id: "a2", title: "The Three Surfaces of the Ecosystem", description: "How Network, GYBS, and MisconiUSA.com work together.", category: "articles" },
    { id: "a3", title: "Understanding Your Business Score", description: "What the score represents and how it supports your pathway.", category: "articles" },
  ],
  guides: [
    { id: "g1", title: "Readiness Orientation Guide", description: "Step-by-step orientation for new businesses exploring the ecosystem.", category: "guides" },
    { id: "g2", title: "Pathway Preparation Checklist", description: "What to gather and understand before beginning your readiness pathway.", category: "guides" },
    { id: "g3", title: "Prime Agent Model Overview", description: "How the Prime Agent supports businesses through the readiness process.", category: "guides" },
  ],
  glossary: [
    { id: "gl1", title: "Readiness", description: "The structured process that prepares your business for real opportunities.", category: "glossary" },
    { id: "gl2", title: "Business Score", description: "The assessment that activates readiness and assigns a readiness level.", category: "glossary" },
    { id: "gl3", title: "Prime Agent", description: "Misconi USA in its role guiding businesses through the readiness ecosystem.", category: "glossary" },
    { id: "gl4", title: "Pathway", description: "The subscribed readiness pathway on MisconiUSA.com that leads to opportunity access.", category: "glossary" },
  ],
  faq: [
    { id: "f1", title: "Does the Network collect my business information?", description: "No. The Network is for education and orientation only. It does not collect information for readiness intake or scoring.", category: "faq" },
    { id: "f2", title: "Where do I take the Business Score?", description: "The Business Score is taken at GetYourBusinessScore.com (GYBS).", category: "faq" },
    { id: "f3", title: "What is the difference between the Network and MisconiUSA.com?", description: "The Network helps you learn. MisconiUSA.com is where you subscribe and complete your readiness pathway.", category: "faq" },
  ],
};
