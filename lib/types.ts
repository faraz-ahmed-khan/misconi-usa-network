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
  category: "articles" | "guides" | "glossary" | "faq";
  url?: string;
}

/** Grouped resources response */
export interface ResourcesResponse {
  articles: ResourceItem[];
  guides: ResourceItem[];
  glossary: ResourceItem[];
  faq: ResourceItem[];
}
