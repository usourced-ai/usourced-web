import Image from "next/image";

export function ProductVariantGallery({ imageUrls }: { imageUrls: string[] }) {
  return (
    <div>
      <h2 className="border-t pt-4 text-sm font-medium text-gray-900">
        Sample Photos
      </h2>
      <div className="mt-4 grid grid-cols-2 gap-4 pr-2 md:grid-cols-4 lg:grid-cols-1">
        {imageUrls.map((imageUrl) => (
          <Image
            width={168}
            height={168}
            key={imageUrl}
            src={imageUrl}
            alt={imageUrl}
            className="aspect-square w-full rounded-md object-cover"
          />
        ))}
      </div>
    </div>
  );
}
