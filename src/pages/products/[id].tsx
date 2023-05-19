import classNames from "classnames";

import { Button } from "@/components/common/Button";
import { ButtonPicker } from "@/components/products/show/ButtonPicker";
import { ColorPicker } from "@/components/products/show/ColorPicker";
import { PriceQuoteTable } from "@/components/products/show/PriceQuoteTable";
import { ProductBreadcrumbs } from "@/components/products/show/ProductBreadcrumbs";
import { ProductPriceCalculator } from "@/components/products/show/ProductPriceCalculator";
import { ProductReviews } from "@/components/products/show/ProductReviews";
import { AppLayout } from "@/layouts/AppLayout";
import { Meta } from "@/layouts/Meta";

const productName = "Cloud-Handle Ceramic Mug";

const product = {
  name: productName,
  price: "$10",
  rating: 4.9,
  href: "#",
  breadcrumbs: [
    { id: "/", name: "Home & Lifestyle", href: "/" },
    { id: "0", name: "Drinkware", href: "/" },
    {
      id: "1",
      name: productName,
      href: "/products/1",
    },
  ],
  images: [
    {
      id: 1,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
      imageAlt: "Back of women's Basic Tee in black.",
      primary: true,
    },
    {
      id: 2,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-01.jpg",
      imageAlt: "Side profile of women's Basic Tee in black.",
      primary: false,
    },
    {
      id: 3,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg",
      imageAlt: "Front of women's Basic Tee in black.",
      primary: false,
    },
  ],
  colors: ["#9CAFC4", "#EEE2C8", "#DCD1A2", "#E8C6C6", "#D3CBD6", "#EBD59A"],
  printEffects: [
    { name: "Silk Printing" },
    { name: "UV Printing" },
    { name: "3D Sublimation" },
  ],
  pricingTiers: [
    {
      minimumQuantity: 500,
      pricePerItem: 3,
    },
    {
      minimumQuantity: 300,
      pricePerItem: 3.5,
    },
    {
      minimumQuantity: 200,
      pricePerItem: 4,
    },
    {
      minimumQuantity: 100,
      pricePerItem: 5,
    },
  ],
};

export default function ProductShowPage() {
  return (
    <AppLayout meta={<Meta title="AI Product Sourcing" />} showDemoBar>
      <div className="pb-16 pt-6">
        <ProductBreadcrumbs breadcrumbs={product.breadcrumbs} />
        <div className="mx-auto mt-8 max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="flex justify-between">
                <h1 className="text-2xl font-medium text-gray-900">
                  {product.name}
                </h1>
              </div>
              <ProductReviews rating={product.rating} />
            </div>

            {/* Image gallery */}
            <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
              <h2 className="sr-only">Images</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                {product.images.map((image) => (
                  <img
                    key={image.id}
                    src={image.imageSrc}
                    alt={image.imageAlt}
                    className={classNames(
                      image.primary
                        ? "lg:col-span-2 lg:row-span-2"
                        : "hidden lg:block",
                      "rounded-lg"
                    )}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8 lg:col-span-5">
              <form>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>
                <ColorPicker colors={product.colors} />

                <h3 className="mt-8 text-sm font-medium text-gray-900">
                  Print Effect
                </h3>
                <ButtonPicker selections={product.printEffects} />

                <Button size="xl" className="mt-8 w-full">
                  Customize Now
                </Button>
              </form>

              <div className="mt-8">
                <ProductPriceCalculator />
              </div>

              <div className="mt-8">
                <h2 className="text-sm font-medium text-gray-900">
                  Express Shipping
                </h2>
                <div className="prose prose-sm mt-4 text-gray-500">
                  <p>
                    We understand the importance of receiving your order
                    quickly, which is why we offer partial express shipping.
                    This means you&rsquo;ll receive a portion of your order
                    sooner while saving on shipping costs for the remaining
                    items.
                  </p>
                  <p>Turnaround time including production &amp; shipping:</p>
                  <ul>
                    <li>Express shipping: 2&ndash;3 weeks</li>
                    <li>Standard shipping: 4&ndash;5 weeks</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-sm font-medium text-gray-900">
                  Pricing Table
                </h2>
                <div className="mt-4 text-gray-700">
                  <PriceQuoteTable pricingTiers={product.pricingTiers} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
