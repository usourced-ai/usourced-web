import { useState } from "react";

export function InputSlider({
  minValue,
  maxValue,
  initialValue,
  step,
  unit,
  onChange,
}: {
  minValue?: number;
  maxValue: number;
  initialValue?: number;
  step?: number;
  unit?: string;
  onChange?: (value: number) => void;
}) {
  const [value, setValue] = useState<number>(initialValue ?? minValue ?? 0);

  const handleValueChange = (newValue: number) => {
    setValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div className="flex max-w-md flex-row">
      <div className="mr-4 w-[80%]">
        <input
          type="range"
          min={minValue ?? 0}
          max={maxValue}
          step={step}
          className="range range-primary cursor-pointer"
          value={value}
          onChange={(e) => handleValueChange(Number(e.target.value))}
        />
      </div>
      <div className=" relative -mt-0.5 rounded-md shadow-sm">
        <input
          className="block appearance-none rounded-md border-0 bg-transparent py-1 pl-4 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-700"
          style={{ width: `${(unit ? unit.length : 5) + 7}ch` }}
          value={value}
          onChange={(e) => handleValueChange(Number(e.target.value))}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <span className="text-gray-500 sm:text-sm">{unit ?? "units"}</span>
        </div>
      </div>
    </div>
  );
}
