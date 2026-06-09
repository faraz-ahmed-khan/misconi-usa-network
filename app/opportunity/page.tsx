import EducationLibraryPage from "@/components/education/EducationLibraryPage";
import { OPPORTUNITY_LIBRARY } from "@/lib/education-content";

export const metadata = OPPORTUNITY_LIBRARY.metadata;

export default function OpportunityPage() {
  return <EducationLibraryPage library={OPPORTUNITY_LIBRARY} />;
}
