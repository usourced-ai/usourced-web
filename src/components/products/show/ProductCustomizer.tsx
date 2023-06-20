import {
  MagnifyingGlassMinusIcon,
  MagnifyingGlassPlusIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

import { Button } from "@/components/common/Button";
import { demoAlert } from "@/utils/demo-utils";

export function ProductCustomizer({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="h-[calc(100vw-24px)] max-h-[480px] w-[calc(100vw-24px)] max-w-[480px] rounded-lg bg-white shadow-lg sm:h-[480px] sm:w-[480px]">
      <div className="relative">
        <h5 className="absolute left-4 top-4 z-10 mb-4 text-sm text-gray-600">
          Drag to view in 3D
        </h5>
        <div className="absolute left-4 top-12 flex flex-col gap-2">
          <button type="button">
            <MagnifyingGlassPlusIcon className="h-5 w-5 text-gray-600" />
          </button>
          <button type="button">
            <MagnifyingGlassMinusIcon className="h-5 w-5 text-gray-600" />
          </button>
        </div>
        <Button
          className="absolute left-4 top-[440px] hidden sm:block"
          color="gray"
          size="sm"
          variant="outlined"
          onClick={demoAlert}
        >
          Add text
        </Button>
        <Button
          className="absolute left-24 top-[440px] hidden sm:block"
          color="gray"
          size="sm"
          variant="outlined"
          onClick={demoAlert}
        >
          Upload design
        </Button>
        <div className="absolute left-[29%] top-[140px] z-10 text-center text-3xl text-white opacity-50 sm:top-[192px] sm:text-4xl">
          <p>YOUR</p>
          <p>DESIGN</p>
          <p>HERE</p>
        </div>
      </div>
      <div className="ml-4">
        <Image
          src={imageUrl}
          width={400}
          height={400}
          alt="Demo"
          className="animate__animated animate__fadeIn mx-auto aspect-square w-[90%]"
        />
      </div>
    </div>
  );
}
