import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import CustomersContent from "./CustomersContent";

export const metadata: Metadata = {
  title: "Our Customers - Manav Canvassers",
  description:
    "See why industry leaders trust Manav Canvassers for their cattle feed brokerage needs.",
};

export default function CustomersPage() {
  return (
    <div className="w-full font-sans antialiased selection:bg-secondary-container selection:text-on-secondary-container">
      <Header />
      <main>
        <CustomersContent />
        <Footer />
      </main>
      <WhatsAppFAB />
    </div>
  );
}
