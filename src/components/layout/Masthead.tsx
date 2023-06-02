import clsx from "clsx";
import Link from "next/link";

export function Masthead({ className }: { className?: string }) {
  return (
    <Link href="/">
      <img
        className={clsx("w-auto", className)}
        src="/images/nav/usourced-masthead.png"
        alt="USourced"
      />
    </Link>
  );
}
