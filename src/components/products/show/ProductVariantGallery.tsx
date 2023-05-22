export function ProductVariantGallery({ imageUrls }: { imageUrls: string[] }) {
  return (
    <div>
      <h2 className="border-t pt-4 text-sm font-medium text-gray-900">
        Sample Photos
      </h2>
      <div className="mt-4 flex flex-col gap-4 pr-4">
        {imageUrls.map((imageUrl) => (
          <img
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
