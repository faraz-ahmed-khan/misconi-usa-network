import EducationLibraryPage from "@/components/education/EducationLibraryPage";
import { SBA_LIBRARY } from "@/lib/education-content";

export const metadata = SBA_LIBRARY.metadata;

export default function SbaEducationPage() {
  return <EducationLibraryPage library={SBA_LIBRARY} />;
}
