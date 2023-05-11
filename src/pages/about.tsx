import { AboutSection } from "@/components/index/AboutSection";
import { CatalogSection } from "@/components/index/CatalogSection";
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
      <AboutSection />
      <CatalogSection />
    </AppLayout>
  );
}
