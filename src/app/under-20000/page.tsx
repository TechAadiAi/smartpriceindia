import { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PhoneGrid from "@/components/phones/PhoneGrid";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { getPhonesByCategory } from "@/lib/phones";

export const metadata: Metadata = {
  title: "Best Products Under ₹20000",
  description: "Top-tier appliances and gadgets under ₹20000 for your home.",
};

export default function Page() {
  const products = getPhonesByCategory("under-20000");
  return (
    <PageLayout>
      <Breadcrumb items={[{ label: "Best Products Under ₹20000" }]} />
      <PhoneGrid phones={products} title="Best Products Under ₹20000" subtitle="Top-tier appliances and gadgets for your home, all under ₹20000." showFilters />
    </PageLayout>
  );
}
