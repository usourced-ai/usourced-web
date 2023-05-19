import { RadioGroup } from "@headlessui/react";
import classNames from "classnames";
import { useState } from "react";

export type ButtonPickerSelection = {
  name: string;
  value?: string;
  unavailable?: boolean;
};

export function ButtonPicker({
  selections,
  defaultIndex,
  onSelect,
}: {
  selections: ButtonPickerSelection[];
  defaultIndex?: number;
  onSelect?: (selection: ButtonPickerSelection) => void;
}) {
  const [selected, setSelected] = useState(selections[defaultIndex ?? 0]);
  const onChange = (selection: ButtonPickerSelection) => {
    setSelected(selection);
    onSelect?.(selection);
  };
  return (
    <RadioGroup value={selected} onChange={onChange} className="mt-2">
      <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
      <div className="flex gap-2">
        {selections.map((selection) => (
          <RadioGroup.Option
            key={selection.value ?? selection.name}
            value={selection.name}
            className={({ active, checked }) =>
              classNames(
                "flex items-center justify-center rounded-full border transition py-2 px-3 text-sm font-medium sm:flex-1",
                {
                  "cursor-pointer focus:outline-none": !selection.unavailable,
                  "cursor-not-allowed opacity-25": selection.unavailable,
                  "hover:ring-2 ring-teal-700 ring-offset-2": active,
                  "border-transparent bg-brand text-white hover:bg-teal-800":
                    checked,
                  "border-gray-200 bg-white text-gray-900 hover:bg-gray-50":
                    !checked,
                }
              )
            }
            disabled={selection.unavailable}
          >
            <RadioGroup.Label as="span">{selection.name}</RadioGroup.Label>
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}
