export const metadata = {
  title: "Privacy Policy | Misconi USA Network",
  description: "Privacy policy for Misconi USA Network.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-surface-white">
      <div className="border-b border-surface-gray-border bg-surface-white pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content">
          <h1 className="text-section font-bold text-type-heading">
            Privacy Policy
          </h1>
          <p className="mt-2 text-[14px] text-type-muted">
            Last updated: {new Date().toLocaleDateString("en-US")}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-content px-4 py-24 sm:px-6 lg:px-8 prose-width">
        <p className="text-[17px] text-type-body leading-[1.7]">
          Misconi USA Network is an educational and orientation website. We do not collect business information for readiness intake or scoring on this site. If you contact us through the contact form, we use the information you provide only to respond to your inquiry. We do not sell your information to third parties. For full privacy terms applicable to the broader Misconi Readiness Ecosystem and its operational systems (including Get Your Business Score and MisconiUSA.com), please refer to the policies on those respective platforms.
        </p>
      </div>
    </div>
  );
}
