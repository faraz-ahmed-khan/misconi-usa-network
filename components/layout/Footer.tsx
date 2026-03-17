import Link from "next/link";
import { ROUTES, LINKS } from "@/lib/constants";

const BRAND_DESCRIPTION =
  "Misconi USA Network is the education layer of the Misconi Readiness Ecosystem. Learn what readiness means, how the ecosystem works, and how to move confidently into your next step.";

const QUICK_LINKS = [
  { label: "About", href: ROUTES.ABOUT },
  { label: "Ecosystem", href: ROUTES.ECOSYSTEM },
  { label: "Readiness", href: ROUTES.READINESS },
  { label: "Resources", href: ROUTES.RESOURCES },
  { label: "Contact", href: ROUTES.CONTACT },
];

const EXTERNAL_LINKS = [
  { label: "GYBS", href: LINKS.GYBS },
  { label: "MisconiUSA.com", href: LINKS.MISCONI_USA },
  { label: "SBAReady.org", href: LINKS.SBA_READY },
];

export default function Footer() {
  return (
    <footer className="bg-footer-dark text-white pt-20 pb-12" role="contentinfo">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              href={ROUTES.HOME}
              className="text-[18px] font-bold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded"
            >
              Misconi USA Network
            </Link>
            <p className="mt-3 max-w-md text-[14px] leading-relaxed text-footer-text">
              {BRAND_DESCRIPTION}
            </p>
          </div>

          <div>
            <h3 className="text-[11px] font-medium uppercase tracking-[0.1em] text-type-muted">Quick links</h3>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[14px] text-footer-text hover:text-white transition-colors duration-200 ease focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-medium uppercase tracking-[0.1em] text-type-muted">Ecosystem & legal</h3>
            <ul className="mt-4 space-y-2.5">
              {EXTERNAL_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-footer-text hover:text-white transition-colors duration-200 ease focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href={ROUTES.CONTACT}
                  className="text-[14px] text-footer-text hover:text-white transition-colors duration-200 ease focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.PRIVACY}
                  className="text-[14px] text-footer-text hover:text-white transition-colors duration-200 ease focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-footer-border flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-type-muted">
            © {new Date().getFullYear()} Misconi USA Network. Educational use only.
          </p>
          <div className="flex gap-6" aria-label="Social media">
            <a
              href="#"
              className="text-[14px] text-footer-text hover:text-white transition-colors duration-200 ease focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-[14px] text-footer-text hover:text-white transition-colors duration-200 ease focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded"
              aria-label="Twitter"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
