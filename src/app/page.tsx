import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/sections/hero';
import { WorkSection } from '@/components/sections/work';
import { ContactSection } from '@/components/sections/contact';
import { JsonLd } from '@/components/json-ld';

function SectionDivider() {
  return (
    <div className="flex justify-center py-12">
      <div className="w-px h-16 bg-gradient-to-b from-transparent via-border to-transparent" />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Navigation />
      <main>
        <HeroSection />
        <SectionDivider />
        <WorkSection />
        <SectionDivider />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
