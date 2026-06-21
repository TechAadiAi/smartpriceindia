import { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PhoneGrid from "@/components/phones/PhoneGrid";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { getPhonesByCategory } from "@/lib/phones";

export const metadata: Metadata = {
  title: "Best Products Under ₹5000",
  description: "Premium picks without the premium price tag, all under ₹5000.",
};

export default function Page() {
  const products = getPhonesByCategory("under-5000");
  return (
    <PageLayout>
      <Breadcrumb items={[{ label: "Best Products Under ₹5000" }]} />
      <PhoneGrid phones={products} title="Best Products Under ₹5000" subtitle="Premium picks without the premium price tag, all under ₹5000." showFilters />
    </PageLayout>
  );
}
