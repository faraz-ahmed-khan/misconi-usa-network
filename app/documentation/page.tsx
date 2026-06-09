import EducationLibraryPage from "@/components/education/EducationLibraryPage";
import { DOCUMENTATION_LIBRARY } from "@/lib/education-content";

export const metadata = DOCUMENTATION_LIBRARY.metadata;

export default function DocumentationPage() {
  return <EducationLibraryPage library={DOCUMENTATION_LIBRARY} />;
}
