import { FAQAccordion, type FAQItem } from "@/components/shared/FAQAccordion";

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Does the Network collect my business information?",
    answer:
      "No. The Network is for education and orientation only. It does not collect information for readiness intake or scoring.",
  },
  {
    id: "faq-2",
    question: "Where do I take the Business Score?",
    answer: "The Business Score is taken at GetYourBusinessScore.com (GYBS).",
  },
  {
    id: "faq-3",
    question: "What is the difference between the Network and MisconiUSA.com?",
    answer:
      "The Network helps you learn. MisconiUSA.com is where you subscribe and complete your readiness pathway.",
  },
  {
    id: "faq-4",
    question: "What is readiness?",
    answer:
      "Readiness is the structured process that prepares your business for real opportunities. It evaluates identity, operations, financial preparedness, capability alignment, and opportunity requirements.",
  },
  {
    id: "faq-5",
    question: "Is this site for scoring or intake?",
    answer:
      "No. This site is educational only. It does not activate readiness, score users, or collect business information for intake. For assessment, go to GetYourBusinessScore.com.",
  },
];

export default function FAQSection() {
  return (
    <section className="bg-surface-white py-24 px-4 sm:px-6 lg:px-8" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-faq">
        <h2 id="faq-heading" className="text-section font-bold text-type-heading text-center">
          Frequently asked questions
        </h2>
        <FAQAccordion items={FAQ_ITEMS} className="mt-10" />
      </div>
    </section>
  );
}
