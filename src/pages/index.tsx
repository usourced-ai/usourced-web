import dynamic from "next/dynamic";

import { AboutSection } from "@/components/index/AboutSection";
import { CatalogSection } from "@/components/index/CatalogSection";
import { CustomSourcingSection } from "@/components/index/CustomSourcingSection";
import { HeroSection } from "@/components/index/HeroSection";
import { OurPromiseSection } from "@/components/index/OurPromiseSection";
import { AppConfig } from "@/config/AppConfig";
import { Meta } from "@/layouts/Meta";
import { StorefrontLayout } from "@/layouts/StorefrontLayout";
import { useScrollRevealEffect } from "@/utils/animation-utils";

const FoundingTeamSection = dynamic(() =>
  import("@/components/index/FoundingTeamSection").then(
    (mod) => mod.FoundingTeamSection
  )
);

export default function IndexPage() {
  useScrollRevealEffect();
  return (
    <StorefrontLayout
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
      showDemoBar
    >
      <HeroSection />
      <AboutSection />
      <CatalogSection />
      <OurPromiseSection />
      <CustomSourcingSection />
      <FoundingTeamSection />
    </StorefrontLayout>
  );
}
