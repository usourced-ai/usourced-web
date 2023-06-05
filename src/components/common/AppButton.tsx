import clsx from "clsx";

export function AppButton(props: {
  children?: React.ReactNode;
  icon?: React.ComponentType<{ className?: string }>;
  label?: string;
  className?: string;
  color?: "gray" | "blue";
  size?: "md";
  variant?: "outlined" | "solid";
  [key: string]: any;
}) {
  const {
    children,
    icon,
    label,
    className,
    color = "gray",
    size = "md",
    variant = "outlined",
    ...rest
  } = props;
  const Icon = icon;
  return (
    <button
      type="button"
      className={clsx(
        "inline-flex items-center justify-center shadow-sm ring-1 ring-inset transition duration-fast focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        {
          "gap-x-1.5 rounded-lg px-3 py-2 text-sm font-semibold": size === "md",
          "bg-white text-gray-900 ring-gray-300 hover:bg-gray-50 focus-visible:outline-gray-600 active:bg-gray-300":
            color === "gray" && variant === "outlined",
          "bg-blue-600 text-white ring-blue-600 hover:bg-blue-700 focus-visible:outline-blue-600 active:bg-blue-900":
            color === "blue" && variant === "solid",
        },
        className
      )}
      {...rest}
    >
      {Icon && (
        <Icon
          className={clsx({
            "h-4 w-4": size === "md",
            "text-white": variant === "solid",
            "text-gray-700": color === "gray" && variant === "outlined",
          })}
        />
      )}
      {label && <span>{label}</span>}
      {children}
    </button>
  );
}
