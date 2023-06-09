import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import type { ProductCategory } from "@/api/product_categories";
import { getProductCategories } from "@/api/product_categories";

function CategoryCard({ category }: { category: ProductCategory }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      key={category.id}
      className={clsx("flex flex-col items-center", {
        "animate__animated animate__swing": hovered,
      })}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={`/products/${category.id}`}>
        <Image
          width={160}
          height={160}
          className="mx-auto h-32 w-32 lg:h-40 lg:w-40"
          src={category.imageUrl}
          alt={category.name}
        />
        <div className="mt-2 text-brand">{category.name}</div>
      </Link>
    </div>
  );
}

export function CatalogSection() {
  const categories = getProductCategories();
  return (
    <section
      className="__scrollreveal bg-no-repeat"
      style={{
        backgroundImage:
          "url(/images/index/bg/orange-1.svg), url(/images/index/bg/orange-2.svg)",
        backgroundPosition: "top 120px left 0px, top 20px right 0px",
        backgroundSize: "20vw",
      }}
    >
      <div className="mx-auto max-w-screen-lg text-center text-brand sm:px-6 lg:px-8">
        <h2 className="mb-8 font-brand text-3xl md:text-5xl">
          Quality, Speed, Value
        </h2>
        <h3 className="mx-auto max-w-xl px-2 text-xl font-light md:px-0">
          Discover unique products across multiple categories, from tech gadgets
          to packaging supplies, and get instant quotes
        </h3>
        <div className="mx-4 mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
