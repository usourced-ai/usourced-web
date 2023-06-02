import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import usourcedMasthead from "@/public/images/nav/usourced-masthead.png";

export function Masthead({ className = "" }: { className: string }) {
  return (
    <Link href="/">
      <Image
        className={clsx("w-auto", className)}
        src={usourcedMasthead}
        alt="USourced"
        priority
      />
    </Link>
  );
}
