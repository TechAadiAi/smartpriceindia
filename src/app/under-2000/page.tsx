import { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PhoneGrid from "@/components/phones/PhoneGrid";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { getPhonesByCategory } from "@/lib/phones";

export const metadata: Metadata = {
  title: "Best Products Under ₹2000",
  description: "Great value gadgets and home helpers under ₹2000.",
};

export default function Page() {
  const products = getPhonesByCategory("under-2000");
  return (
    <PageLayout>
      <Breadcrumb items={[{ label: "Best Products Under ₹2000" }]} />
      <PhoneGrid phones={products} title="Best Products Under ₹2000" subtitle="Great value gadgets and home helpers under ₹2000." showFilters />
    </PageLayout>
  );
}
