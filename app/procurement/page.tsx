import EducationLibraryPage from "@/components/education/EducationLibraryPage";
import { PROCUREMENT_LIBRARY } from "@/lib/education-content";

export const metadata = PROCUREMENT_LIBRARY.metadata;

export default function ProcurementPage() {
  return <EducationLibraryPage library={PROCUREMENT_LIBRARY} />;
}
