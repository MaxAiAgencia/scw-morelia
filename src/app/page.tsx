import Hero from "@/components/Hero";
import ProximoEvento from "@/components/ProximoEvento";
import RosterPreview from "@/components/RosterPreview";
import DojoSection from "@/components/DojoSection";
import GaleriaPreview from "@/components/GaleriaPreview";
import SocialBanner from "@/components/SocialBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ProximoEvento />
      <RosterPreview />
      <DojoSection />
      <GaleriaPreview />
      <SocialBanner />
    </>
  );
}
