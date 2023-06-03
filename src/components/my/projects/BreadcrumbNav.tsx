import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export type NavItem = {
  label: string;
  href: string;
};

const HOME_ITEM = {
  label: "Home",
  href: "/my",
};

export function BreadcrumbNav({ items = [] }: { items?: NavItem[] }) {
  const navItems = [HOME_ITEM, ...items];
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="-ml-2 flex items-center">
        {navItems.map((item) => (
          <li key={item.href} className="flex items-center space-x-2">
            <Link
              href={item.href}
              className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              {item.label}
            </Link>
            <ChevronRightIcon
              className="h-4 w-4 shrink-0 text-gray-400"
              aria-hidden="true"
            />
          </li>
        ))}
      </ol>
    </nav>
  );
}
