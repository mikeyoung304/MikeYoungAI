import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/sections/hero';
import { ProofBarSection } from '@/components/sections/proof-bar';
import { ServicesSection } from '@/components/sections/services';
import { ProcessSection } from '@/components/sections/process';
import { WorkSection } from '@/components/sections/work';
import { AboutSection } from '@/components/sections/about';
import { ThinkingSection } from '@/components/sections/thinking';
import { ContactSection } from '@/components/sections/contact';
import { JsonLd } from '@/components/json-ld';

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Navigation />
      <main>
        <HeroSection />
        <ProofBarSection />
        <ServicesSection />
        <ProcessSection />
        <WorkSection />
        <AboutSection />
        <ThinkingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
