import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";

export type Color = string;

export function ColorPicker({
  colors,
  defaultIndex,
  onSelect,
}: {
  colors: Color[];
  defaultIndex?: number;
  onSelect?: (color: Color) => void;
}) {
  const [selectedColor, setSelectedColor] = useState(colors[defaultIndex ?? 0]);
  const onColorChange = (color: Color) => {
    setSelectedColor(color);
    onSelect?.(color);
  };
  return (
    <div>
      <RadioGroup
        value={selectedColor}
        onChange={onColorChange}
        className="mt-2"
      >
        <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
        <div className="flex items-center space-x-3">
          {colors.map((color) => (
            <RadioGroup.Option
              key={color}
              value={color}
              className={({ active, checked }) =>
                clsx(
                  "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 transition hover:animate-pulse focus:outline-none",
                  {
                    "ring ring-offset-1": active && checked,
                    "ring-2": !active && checked,
                  }
                )
              }
              style={{ "--tw-ring-color": color } as React.CSSProperties}
            >
              <RadioGroup.Label as="span" className="sr-only">
                {color}
              </RadioGroup.Label>
              <span
                aria-hidden="true"
                className="h-6 w-6 rounded-full border border-black/10"
                style={{ backgroundColor: color }}
              />
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}
