import clsx from "clsx";

export function Button(props: {
  children: React.ReactNode;
  className?: string;
  color?: "brand" | "grass" | "gray";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  variant?: "solid" | "outlined";
  [key: string]: any;
}) {
  const {
    children,
    className,
    color = "brand",
    size = "md",
    variant = "solid",
    ...rest
  } = props;
  return (
    <button
      type="button"
      className={clsx(
        "items-center justify-center rounded-full shadow-sm transition duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:animate-pulse-fast-once",
        {
          "px-2 py-1 text-xs": size === "xs",
          "px-2.5 py-1 text-sm font-medium": size === "sm",
          "px-2.5 py-1.5 text-sm font-semibold": size === "md",
          "px-3 py-2 text-base font-semibold": size === "lg",
          "px-3.5 py-2.5 text-base font-semibold": size === "xl",
          "px-4 py-3 text-lg font-semibold": size === "2xl",
          "border bg-white/50 hover:bg-white/90 active:bg-white/80":
            variant === "outlined",
        },
        {
          "bg-brand text-cream hover:bg-teal-800 focus-visible:outline-teal-700 active:bg-teal-700":
            color === "brand" && variant === "solid",
          "bg-grass text-brand hover:bg-grass/90 focus-visible:outline-grass active:bg-grass/80":
            color === "grass" && variant === "solid",
          "border-brand text-brand focus-visible:outline-teal-700":
            color === "brand" && variant === "outlined",
          "border-gray-600 text-gray-600 focus-visible:outline-gray-600":
            color === "gray" && variant === "outlined",
        },
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
