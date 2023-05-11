import classNames from "classnames";
import { useState } from "react";

import type { ProductCategory } from "@/api/product_categories";
import { getProductCategories } from "@/api/product_categories";

function CategoryCard({ category }: { category: ProductCategory }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      key={category.id}
      className={classNames("flex flex-col items-center", {
        "animate__animated animate__swing": hovered,
      })}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a href={`/product/${category.id}`}>
        <img
          className="h-40 w-40"
          src={category.imageUrl}
          alt={category.name}
        />
        <div className="mt-2 text-brand">{category.name}</div>
      </a>
    </div>
  );
}

export function CatalogSection() {
  const categories = getProductCategories();
  return (
    <section
      className="bg-cream bg-no-repeat pb-12 pt-8"
      style={{
        backgroundImage:
          "url(/assets/index/bg/orange-1.svg), url(/assets/index/bg/orange-2.svg)",
        backgroundPosition: "bottom 200px left 0px, top 100px right 0px",
        backgroundSize: "20vw",
      }}
    >
      <div className="mx-auto max-w-5xl text-center text-brand sm:px-6 lg:px-8">
        <h2 className="mb-8 font-brand text-4xl md:text-5xl">
          Quality, Speed, Value
        </h2>
        <h3 className="mx-auto max-w-xl px-2 text-xl font-light md:px-0">
          Discover unique products across multiple categories, from tech gadgets
          to packaging supplies, and get instant quotes
        </h3>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
