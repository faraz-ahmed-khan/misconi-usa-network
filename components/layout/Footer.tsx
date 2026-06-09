import Link from "next/link";
import { ROUTES, LINKS } from "@/lib/constants";

const BRAND_DESCRIPTION =
  "The Misconi USA Network is your education center for business readiness, SBA alignment, documentation, funding, procurement, and opportunity preparation.";

const QUICK_LINKS = [
  { label: "Readiness Education", href: ROUTES.READINESS },
  { label: "SBA Education", href: ROUTES.SBA },
  { label: "Documentation", href: ROUTES.DOCUMENTATION },
  { label: "Funding", href: ROUTES.FUNDING },
  { label: "Procurement", href: ROUTES.PROCUREMENT },
  { label: "Opportunity", href: ROUTES.OPPORTUNITY },
  { label: "Contact", href: ROUTES.CONTACT },
];

const EXTERNAL_LINKS = [
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
            <h3 className="text-[11px] font-medium uppercase tracking-[0.1em] text-type-muted">Education</h3>
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
            <h3 className="text-[11px] font-medium uppercase tracking-[0.1em] text-type-muted">Resources</h3>
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
                  href={ROUTES.PRIVACY}
                  className="text-[14px] text-footer-text hover:text-white transition-colors duration-200 ease focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded"
                >
                  Terms &amp; Policies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-footer-border">
          <p className="text-[13px] text-type-muted">
            © {new Date().getFullYear()} Misconi USA Network. Educational use only.
          </p>
        </div>
      </div>
    </footer>
  );
}
