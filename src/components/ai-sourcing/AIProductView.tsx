import { ProductMockupEmptyView } from "@/components/ai-sourcing/ProductMockupEmptyView";
import { ProductSummaryView } from "@/components/ai-sourcing/ProductSummaryView";

export function AIProductView() {
  return (
    <div className="mt-8">
      <h1 className="text-3xl">Customize Your New Product with USourced AI</h1>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <ProductMockupEmptyView />
        <ProductSummaryView />
      </div>
    </div>
  );
}
