import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/sections/hero';
import { WorkSection } from '@/components/sections/work';
import { ContactSection } from '@/components/sections/contact';
import { JsonLd } from '@/components/json-ld';

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Navigation />
      <main>
        <HeroSection />
        <WorkSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
