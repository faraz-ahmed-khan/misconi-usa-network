/** External links - used across header, footer, CTAs */
export const LINKS = {
  GYBS: "https://get-your-business-score-com.vercel.app/",
  MISCONI_USA: "https://misocniusa.vercel.app/",
  SBA_READY: "https://SBAReady.org",
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
