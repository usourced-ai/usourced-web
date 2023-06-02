import Image from "next/image";

function ProductMockupEmptyView() {
  return (
    <div className="mx-auto px-4 text-center text-xl text-gray-500">
      product mockup will appear here
    </div>
  );
}

function ProductMockupImageView({ url }: { url: string }) {
  return (
    <div className="h-full w-full bg-white">
      <Image
        key={url} // This forces a re-render when the url changes for animations
        width={352}
        height={440}
        src={url}
        className="animate__animated animate__fadeIn h-full object-contain"
        alt="Mockup"
      />
    </div>
  );
}

export function ProductMockupView({ url }: { url?: string }) {
  return (
    <div className="flex h-[440px] w-full max-w-[400px] items-center rounded-lg border-4 border-double border-gray-400 shadow-xl backdrop-blur transition-all duration-500 hover:border-gray-500">
      {url ? <ProductMockupImageView url={url} /> : <ProductMockupEmptyView />}
    </div>
  );
}
