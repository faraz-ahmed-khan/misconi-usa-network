/** Contact form payload for POST /api/contact */
export interface ContactFormPayload {
  fullName: string;
  email: string;
  phone?: string;
  companyName?: string;
  message: string;
}

/** API contact response */
export interface ContactApiResponse {
  success: boolean;
  message: string;
}

/** Resource item for GET /api/resources */
export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  category: "articles" | "guides" | "videos" | "glossary" | "faq";
  url?: string;
  thumbnail?: string;
}

/** Grouped resources response */
export interface ResourcesResponse {
  articles: ResourceItem[];
  guides: ResourceItem[];
  videos: ResourceItem[];
  glossary: ResourceItem[];
  faq: ResourceItem[];
}

/** Testimonial for GET /api/testimonials */
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
  company?: string;
}

/** Partner/ecosystem logo for GET /api/partners */
export interface Partner {
  id: string;
  name: string;
  logoUrl?: string;
  url?: string;
}
