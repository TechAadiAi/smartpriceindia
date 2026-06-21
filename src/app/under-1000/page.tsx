import { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PhoneGrid from "@/components/phones/PhoneGrid";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { getPhonesByCategory } from "@/lib/phones";

export const metadata: Metadata = {
  title: "Best Products Under ₹1000",
  description: "Everyday essentials and gadgets under a thousand rupees.",
};

export default function Page() {
  const products = getPhonesByCategory("under-1000");
  return (
    <PageLayout>
      <Breadcrumb items={[{ label: "Best Products Under ₹1000" }]} />
      <PhoneGrid phones={products} title="Best Products Under ₹1000" subtitle="Everyday essentials and gadgets under a thousand rupees." showFilters />
    </PageLayout>
  );
}
