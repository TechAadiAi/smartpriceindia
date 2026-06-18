import { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PhoneGrid from "@/components/phones/PhoneGrid";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { getLatestPhones } from "@/lib/phones";

export const metadata: Metadata = {
  title: "Latest Smartphones in India 2024",
  description:
    "Explore the newest smartphones launched in India. Expert reviews with prices, specs, and Amazon buying links.",
};

export default function LatestPage() {
  const phones = getLatestPhones(20);

  return (
    <PageLayout>
      <Breadcrumb items={[{ label: "Latest Smartphones" }]} />
      <PhoneGrid
        phones={phones}
        title="Latest Smartphones in India"
        subtitle="The newest phones reviewed and updated for 2024 — sorted by launch date."
        showFilters
      />
    </PageLayout>
  );
}
