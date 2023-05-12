import { AboutSection } from "@/components/index/AboutSection";
import { CatalogSection } from "@/components/index/CatalogSection";
import { HeroSection } from "@/components/index/HeroSection";
import { AppLayout } from "@/layouts/AppLayout";
import { Meta } from "@/layouts/Meta";
import { AppConfig } from "@/utils/AppConfig";

export default function About() {
  return (
    <AppLayout
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
    >
      <HeroSection />
      <AboutSection />
      <CatalogSection />
    </AppLayout>
  );
}
