import classNames from "classnames";

export function Button(props: {
  children: React.ReactNode;
  className?: string;
  color?: "brand" | "grass";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  [key: string]: any;
}) {
  const { children, className, color = "brand", size = "md", ...rest } = props;
  return (
    <button
      type="button"
      className={classNames(
        "items-center justify-center rounded-full font-semibold shadow-sm transition duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:animate-pulse-fast",
        {
          "px-2 py-1 text-xs": size === "xs",
          "px-2 py-1 text-sm": size === "sm",
          "px-2.5 py-1.5 text-sm": size === "md",
          "px-3 py-2 text-base": size === "lg",
          "px-3.5 py-2.5 text-base": size === "xl",
        },
        {
          "bg-brand text-cream hover:bg-teal-800 focus-visible:outline-teal-700 active:bg-teal-700":
            color === "brand",
          "bg-grass text-brand hover:bg-grass/90 focus-visible:outline-grass active:bg-grass/80":
            color === "grass",
        },
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
