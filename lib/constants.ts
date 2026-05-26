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
  RESOURCES: "/resources",
  CONTACT: "/contact",
  PRIVACY: "/privacy",
} as const;

export const NAV_ITEMS = [
  { label: "About", href: ROUTES.ABOUT },
  { label: "Ecosystem", href: ROUTES.ECOSYSTEM },
  { label: "Readiness", href: ROUTES.READINESS },
  { label: "Resources", href: ROUTES.RESOURCES },
  { label: "Contact", href: ROUTES.CONTACT },
] as const;
