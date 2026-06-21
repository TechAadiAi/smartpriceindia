import { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PhoneGrid from "@/components/phones/PhoneGrid";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { getPhonesByCategory } from "@/lib/phones";

export const metadata: Metadata = {
  title: "Best Products Under ₹10000",
  description: "Upgrade your home and tech setup with the best products under ₹10000.",
};

export default function Page() {
  const products = getPhonesByCategory("under-10000");
  return (
    <PageLayout>
      <Breadcrumb items={[{ label: "Best Products Under ₹10000" }]} />
      <PhoneGrid phones={products} title="Best Products Under ₹10000" subtitle="Upgrade your home and tech setup with these top picks under ₹10000." showFilters />
    </PageLayout>
  );
}
