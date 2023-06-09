import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { AIChatMenuItem } from "@/components/my/projects/chat/AIChatMenuItem";
import { navigation } from "@/models/navigation";
import usourcedIcon from "@/public/images/site/usourced-icon.png";

export function DesktopThinSidebar() {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-28 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 text-center">
        <div className="mx-auto h-16 shrink-0 pt-4">
          <Link href="/">
            <Image
              className="h-10 w-auto"
              src={usourcedIcon}
              alt="USourced"
              priority
            />
          </Link>
        </div>
        <nav className="mt-6 w-full flex-1 space-y-1 px-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                item.current
                  ? "bg-teal-700 text-white"
                  : "text-gray-700 hover:bg-gray-50",
                "flex w-full flex-col items-center rounded-md p-3 text-xs font-semibold transition"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.icon && (
                <item.icon
                  className={clsx(
                    item.current ? "text-white" : "text-gray-400",
                    "h-6 w-6"
                  )}
                  aria-hidden="true"
                />
              )}
              <span className="mt-2">{item.name}</span>
            </Link>
          ))}
          <AIChatMenuItem thin />
        </nav>
      </div>
    </div>
  );
}
