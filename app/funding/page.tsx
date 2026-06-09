import EducationLibraryPage from "@/components/education/EducationLibraryPage";
import { FUNDING_LIBRARY } from "@/lib/education-content";

export const metadata = FUNDING_LIBRARY.metadata;

export default function FundingPage() {
  return <EducationLibraryPage library={FUNDING_LIBRARY} />;
}
