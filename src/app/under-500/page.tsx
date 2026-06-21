import { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PhoneGrid from "@/components/phones/PhoneGrid";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { getPhonesByCategory } from "@/lib/phones";

export const metadata: Metadata = {
  title: "Best Products Under ₹500",
  description: "Smart picks that cost less than a movie ticket — handpicked deals under ₹500.",
};

export default function Page() {
  const products = getPhonesByCategory("under-500");
  return (
    <PageLayout>
      <Breadcrumb items={[{ label: "Best Products Under ₹500" }]} />
      <PhoneGrid phones={products} title="Best Products Under ₹500" subtitle="Smart picks that cost less than a movie ticket — handpicked deals under ₹500." showFilters />
    </PageLayout>
  );
}
