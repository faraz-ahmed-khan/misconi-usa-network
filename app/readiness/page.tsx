import EducationLibraryPage from "@/components/education/EducationLibraryPage";
import { READINESS_LIBRARY } from "@/lib/education-content";

export const metadata = READINESS_LIBRARY.metadata;

export default function ReadinessPage() {
  return <EducationLibraryPage library={READINESS_LIBRARY} />;
}
