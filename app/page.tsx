import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhatIsSection from '@/components/WhatIsSection';
import FeaturesSection from '@/components/FeaturesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ClientsSection from '@/components/ClientsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <WhatIsSection />
      <WhyChooseUsSection />
      <FeaturesSection />
      <ClientsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
