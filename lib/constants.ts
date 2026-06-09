/** External links from env (NEXT_PUBLIC_* for client components). */
export const LINKS = {
  GYBS: process.env.NEXT_PUBLIC_GYBS_URL ?? "",
  MISCONI_USA: process.env.NEXT_PUBLIC_MISCONI_USA_URL ?? "",
  SBA_READY: process.env.NEXT_PUBLIC_SBA_READY_URL ?? "",
} as const;

export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  ECOSYSTEM: "/ecosystem",
  READINESS: "/readiness",
  SBA: "/sba",
  DOCUMENTATION: "/documentation",
  FUNDING: "/funding",
  PROCUREMENT: "/procurement",
  OPPORTUNITY: "/opportunity",
  RESOURCES: "/resources",
  CONTACT: "/contact",
  PRIVACY: "/privacy",
} as const;

export const NAV_ITEMS = [
  { label: "Readiness", href: ROUTES.READINESS },
  { label: "SBA", href: ROUTES.SBA },
  { label: "Contact", href: ROUTES.CONTACT },
] as const;

export const NAV_EDUCATION_ITEMS = [
  { label: "Documentation", href: ROUTES.DOCUMENTATION },
  { label: "Funding", href: ROUTES.FUNDING },
  { label: "Procurement", href: ROUTES.PROCUREMENT },
  { label: "Opportunity", href: ROUTES.OPPORTUNITY },
] as const;

export const SUPPORT_EMAIL = "support@misconiusanetwork.com";
