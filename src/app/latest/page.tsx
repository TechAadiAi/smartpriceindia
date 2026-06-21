import { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PhoneGrid from "@/components/phones/PhoneGrid";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { getLatestPhones } from "@/lib/phones";

export const metadata: Metadata = {
  title: "Latest Product Reviews",
  description: "Explore the newest home, kitchen and tech gadget reviews. Updated for 2026.",
};

export default function LatestPage() {
  const products = getLatestPhones(50);
  return (
    <PageLayout>
      <Breadcrumb items={[{ label: "Latest Reviews" }]} />
      <PhoneGrid phones={products} title="Latest Product Reviews" subtitle="The newest products reviewed and updated for 2026." showFilters />
    </PageLayout>
  );
}
