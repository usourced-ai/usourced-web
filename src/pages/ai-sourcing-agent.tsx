import { AIChatSlideout } from "@/components/ai-sourcing/AIChatSlideout";
import { AIProductView } from "@/components/ai-sourcing/AIProductView";
import { AppLayout } from "@/layouts/AppLayout";
import { Meta } from "@/layouts/Meta";

export default function AiSourcingAgentPage() {
  return (
    <AppLayout meta={<Meta title="AI Product Sourcing" />}>
      <section
        className="bg-contain bg-bottom bg-no-repeat"
        style={{ backgroundImage: "url(/images/index/bg/about-bg.svg)" }}
      >
        <div className="mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="lg:order-2">
              <AIChatSlideout />
            </div>
            <div className="lg:order-1">
              <AIProductView />
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
