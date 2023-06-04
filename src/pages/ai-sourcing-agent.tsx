import { enqueueSnackbar } from "notistack";
import { useEffect } from "react";

import { AIChatView } from "@/components/ai-sourcing/AIChatView";
import { AIProductView } from "@/components/ai-sourcing/AIProductView";
import { Meta } from "@/layouts/Meta";
import { StorefrontLayout } from "@/layouts/StorefrontLayout";

export default function AiSourcingAgentPage() {
  useEffect(() => {
    enqueueSnackbar(
      "To see the AI Sourcing Agent in action, simply press send message button.",
      {
        autoHideDuration: 30000,
        className: "text-xl",
      }
    );
  }, []);
  return (
    <StorefrontLayout meta={<Meta title="AI Product Sourcing" />} showDemoBar>
      <section
        className="bg-contain bg-bottom bg-no-repeat"
        style={{ backgroundImage: "url(/images/index/bg/about-bg.svg)" }}
      >
        <div className="mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="lg:order-2">
              <AIChatView />
            </div>
            <div className="lg:order-1">
              <AIProductView />
            </div>
          </div>
        </div>
      </section>
    </StorefrontLayout>
  );
}
