import { HeroSection } from "@/components/sections/HeroSection";
import { WelcomeSection } from "@/components/sections/WelcomeSection";
import { LatestSermonSection } from "@/components/sections/LatestSermonSection";
import { VisitCtaSection } from "@/components/sections/VisitCtaSection";
import { MinistriesPreviewSection } from "@/components/sections/MinistriesPreviewSection";
import { EventsPreviewSection } from "@/components/sections/EventsPreviewSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <LatestSermonSection />
      <VisitCtaSection />
      <MinistriesPreviewSection />
      <EventsPreviewSection />
    </>
  );
}
