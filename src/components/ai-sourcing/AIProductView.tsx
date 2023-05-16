import { ProductMockupView } from "@/components/ai-sourcing/ProductMockupView";
import { ProductSummaryView } from "@/components/ai-sourcing/ProductSummaryView";
import { useAiSourcingDemoScene } from "@/models/demo-scenes/ai-sourcing-playbook";

export function AIProductView() {
  const { scene } = useAiSourcingDemoScene();
  return (
    <div className="mt-8">
      <h1 className="text-3xl">{scene.productName}</h1>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <ProductMockupView url={scene.productMockupState} />
        <ProductSummaryView summary={scene.summary} />
      </div>
    </div>
  );
}
