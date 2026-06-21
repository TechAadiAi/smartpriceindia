import { Metadata } from "next";
import { notFound } from "next/navigation";
import PageLayout from "@/components/layout/PageLayout";
import PhoneGrid from "@/components/phones/PhoneGrid";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { getPhonesByCategory, productCategories } from "@/lib/phones";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return productCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = productCategories.find((c) => c.slug === slug);
  if (!cat) return {};
  return {
    title: `${cat.label} - Best Products & Reviews`,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = productCategories.find((c) => c.slug === slug);
  if (!cat) notFound();

  const products = getPhonesByCategory(slug);

  return (
    <PageLayout>
      <Breadcrumb items={[{ label: "Categories" }, { label: cat.label }]} />

      {/* Category hero */}
      <div className={`bg-gradient-to-r ${cat.color} rounded-2xl p-6 md:p-8 mb-8 text-white`}>
        <div className="text-4xl mb-2">{cat.icon}</div>
        <h1 className="text-2xl md:text-3xl font-extrabold mb-2">{cat.label}</h1>
        <p className="text-white/90 text-sm max-w-xl">{cat.description}</p>
      </div>

      <PhoneGrid phones={products} />
    </PageLayout>
  );
}