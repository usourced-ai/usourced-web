export type ProductCategory = {
  id: string;
  name: string;
  imageUrl: string;
};

export function getProductCategories() {
  return [
    {
      id: "1",
      name: "Apparel & Accessories",
      imageUrl: "/images/index/categories/1.png",
    },
    {
      id: "2",
      name: "Home & Lifestyle",
      imageUrl: "/images/index/categories/2.png",
    },
    {
      id: "3",
      name: "Office Supplies",
      imageUrl: "/images/index/categories/3.png",
    },
    {
      id: "4",
      name: "Packaging & Prints",
      imageUrl: "/images/index/categories/4.png",
    },
    {
      id: "5",
      name: "Tech & Gadgets",
      imageUrl: "/images/index/categories/5.png",
    },
    {
      id: "6",
      name: "Toys & Games",
      imageUrl: "/images/index/categories/6.png",
    },
    {
      id: "7",
      name: "New Arrivals",
      imageUrl: "/images/index/categories/7.png",
    },
    {
      id: "8",
      name: "Shop All",
      imageUrl: "/images/index/categories/8.png",
    },
  ];
}
