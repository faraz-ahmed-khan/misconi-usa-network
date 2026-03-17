import type { ResourceItem, Testimonial, Partner } from "./types";

/** Mock resources for GET /api/resources - grouped by category */
export const MOCK_RESOURCES: {
  articles: ResourceItem[];
  guides: ResourceItem[];
  videos: ResourceItem[];
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
  videos: [
    { id: "v1", title: "Introduction to Readiness", description: "A short overview of readiness and the Misconi ecosystem.", category: "videos", thumbnail: "/placeholder-video.jpg" },
    { id: "v2", title: "How the Business Score Works", description: "What to expect when you take the Business Score assessment.", category: "videos", thumbnail: "/placeholder-video.jpg" },
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

/** Mock testimonials for GET /api/testimonials - orientation-style, professional */
export const MOCK_TESTIMONIALS: Testimonial[] = [
  { id: "t1", quote: "The Network gave me the clarity I needed before taking the Business Score. I knew exactly what readiness meant and what to expect.", author: "Maria S.", role: "Small Business Owner" },
  { id: "t2", quote: "Understanding the three surfaces—Network, GYBS, and MisconiUSA—helped me choose the right next step without confusion.", author: "James L.", role: "Supplier" },
  { id: "t3", quote: "Educational, not pushy. This is where I recommend anyone start when exploring readiness.", author: "Patricia K.", company: "Contractor" },
];

/** Mock partners/ecosystem logos for GET /api/partners */
export const MOCK_PARTNERS: Partner[] = [
  { id: "p1", name: "Get Your Business Score", url: "https://GetYourBusinessScore.com" },
  { id: "p2", name: "MisconiUSA", url: "https://MisconiUSA.com" },
  { id: "p3", name: "SBA Ready", url: "https://SBAReady.org" },
  { id: "p4", name: "SBA-Aligned Training" },
  { id: "p5", name: "Prime Agent Ecosystem" },
];
