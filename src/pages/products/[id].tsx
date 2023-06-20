import { useState } from "react";

import { Button } from "@/components/common/Button";
import { ButtonPicker } from "@/components/products/show/ButtonPicker";
import { ColorPicker } from "@/components/products/show/ColorPicker";
import { PriceQuoteTable } from "@/components/products/show/PriceQuoteTable";
import { ProductBreadcrumbs } from "@/components/products/show/ProductBreadcrumbs";
import { ProductCustomizer } from "@/components/products/show/ProductCustomizer";
import { ProductPriceCalculator } from "@/components/products/show/ProductPriceCalculator";
import { ProductReviews } from "@/components/products/show/ProductReviews";
import { ProductVariantGallery } from "@/components/products/show/ProductVariantGallery";
import { Meta } from "@/layouts/Meta";
import { StorefrontLayout } from "@/layouts/StorefrontLayout";
import { demoAlert } from "@/utils/demo-utils";

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
  variants: [
    {
      color: "#9CAFC4",
      imageUrl: "/images/demo/mugs/blue.JPG",
    },
    {
      color: "#EEE2C8",
      imageUrl: "/images/demo/mugs/cream.JPG",
    },
    {
      color: "#DCD1A2",
      imageUrl: "/images/demo/mugs/green.JPG",
    },
    {
      color: "#E8C6C6",
      imageUrl: "/images/demo/mugs/pink.JPG",
    },
    {
      color: "#D3CBD6",
      imageUrl: "/images/demo/mugs/purple.JPG",
    },
    {
      color: "#EBD59A",
      imageUrl: "/images/demo/mugs/yellow.JPG",
    },
  ],
  imageUrls: [
    "/images/demo/mugs/actual/actual-01.jpg",
    "/images/demo/mugs/actual/actual-02.jpg",
    "/images/demo/mugs/actual/actual-03.jpg",
    "/images/demo/mugs/actual/actual-04.jpg",
    "/images/demo/mugs/actual/actual-05.jpg",
  ],
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

function ProductSpecSection() {
  return (
    <div>
      <h2 className="text-sm font-medium text-gray-900">+ Specs & Details</h2>
      <div className="prose prose-sm mt-4 text-gray-500">
        <p>
          Introducing our Cloud-Handled Ceramic Mug in pastel colors &ndash; the
          perfect addition to your morning routine or afternoon tea break! Made
          with high-quality ceramic material and featuring a unique cloud-shaped
          handle, this mug is both stylish and functional.
        </p>
        <p>
          But that&rsquo;s not all &ndash; with our full 360-degree color print
          customization option, you can make this mug truly your own. Choose
          your favorite design or create your own, and we&rsquo;ll bring it to
          life on your mug with vibrant, fade-resistant colors. And with our
          pastel color options, your mug will be a soft and calming addition to
          your collection.
        </p>
        <p>
          Not only does this mug look great, but it&rsquo;s also practical. Its
          generous 9.5-ounce size is perfect for your favorite hot or cold
          beverage, and its ceramic material provides excellent insulation to
          keep your drink at the perfect temperature for longer. Plus,
          it&rsquo;s dishwasher and microwave safe, making it easy to clean and
          use every day.
        </p>
        <p>
          Upgrade your mug game with our Cloud-Handled Ceramic Mug in Pastel
          Colors, fully customizable to fit your unique style and taste.
        </p>
        <ul>
          <li>Material: Porcelain Ceramic</li>
          <li>Size: 280ml/9.5 oz</li>
          <li>Dimension: 4 inch (H) x 4.7 inch (W)</li>
          <li>Weight: 500g</li>
          <li>Care Instructions: Dishwasher & Microwave safe</li>
        </ul>
      </div>
    </div>
  );
}

function ProductPricingSection() {
  return (
    <div>
      <ProductPriceCalculator pricingTiers={product.pricingTiers} />
      <h2 className="mt-8 text-sm font-medium text-gray-900">
        Express Shipping
      </h2>
      <div className="prose prose-sm mt-4 text-gray-500">
        <p>
          We understand the importance of receiving your order quickly, which is
          why we offer partial express shipping. This means you&rsquo;ll receive
          a portion of your order sooner while saving on shipping costs for the
          remaining items.
        </p>
        <p>Turnaround time including production &amp; shipping:</p>
        <ul>
          <li>Express shipping: 2&ndash;3 weeks</li>
          <li>Standard shipping: 4&ndash;5 weeks</li>
        </ul>
      </div>
      <h2 className="mt-8 text-sm font-medium text-gray-900">Pricing Table</h2>
      <div className="mt-4 text-gray-700">
        <PriceQuoteTable pricingTiers={product.pricingTiers} />
      </div>
    </div>
  );
}

export default function ProductShowPage() {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const colors = product.variants.map((variant) => variant.color);
  const onSelectColor = (color: string) => {
    const variant = product.variants.find((v) => v.color === color);
    setSelectedVariant(variant);
  };

  return (
    <StorefrontLayout meta={<Meta title={product.name} />} showDemoBar>
      <div className="pb-16 pt-6">
        <ProductBreadcrumbs breadcrumbs={product.breadcrumbs} />
        <div className="mx-auto mt-8 px-4 sm:px-6 lg:px-8 xl:max-w-screen-xl">
          <div className="grid lg:grid-cols-10 lg:items-start lg:gap-8 xl:grid-cols-12">
            <div className="order-3 col-span-4 mt-8 lg:col-span-12 lg:mt-0 xl:order-1 xl:col-span-2">
              <ProductVariantGallery imageUrls={product.imageUrls} />
            </div>
            <div className="order-2 col-span-5 mt-8 lg:order-1 lg:mt-0 xl:order-2">
              <ProductCustomizer imageUrl={selectedVariant!.imageUrl} />
              <div className="mt-8">
                <ProductSpecSection />
              </div>
            </div>
            <div className="order-1 col-span-5 lg:order-2 xl:order-3">
              <div className="flex justify-between">
                <h1 className="text-2xl font-medium text-gray-900">
                  {product.name}
                </h1>
              </div>
              <ProductReviews rating={product.rating} />
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-900">Color</h3>
                <ColorPicker colors={colors} onSelect={onSelectColor} />

                <h3 className="mt-8 text-sm font-medium text-gray-900">
                  Print Effect
                </h3>
                <ButtonPicker selections={product.printEffects} />

                <Button size="xl" className="mt-8 w-full" onClick={demoAlert}>
                  Customize Now
                </Button>
              </div>

              <div className="mt-8">
                <ProductPricingSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </StorefrontLayout>
  );
}
