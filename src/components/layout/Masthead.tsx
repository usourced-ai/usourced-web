import classNames from "classnames";
import Link from "next/link";

export function Masthead({ className }: { className?: string }) {
  return (
    <Link href="/">
      <img
        className={classNames("w-auto", className)}
        src="/images/nav/usourced-masthead.png"
        alt="USourced"
      />
    </Link>
  );
}
