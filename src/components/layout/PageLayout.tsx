import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AdBanner from "@/components/home/AdBanner";

interface PageLayoutProps {
  children: React.ReactNode;
  showTopAd?: boolean;
  showBottomAd?: boolean;
}

export default function PageLayout({
  children,
  showTopAd = true,
  showBottomAd = true,
}: PageLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {showTopAd && (
            <div className="mb-8">
              <AdBanner size="leaderboard" slot="page-top" />
            </div>
          )}
          {children}
          {showBottomAd && (
            <div className="mt-12">
              <AdBanner size="leaderboard" slot="page-bottom" />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
