import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import Link from "next/link";

export type NavigationItem = {
  name: string;
  href: string;
  badge?: string;
  icon?: React.ComponentType;
  current?: boolean;
  children?: NavigationItem[];
};

function ItemIcon({ item }: { item: NavigationItem }) {
  return item.icon ? (
    <div
      className={classNames(
        item.current ? "text-teal-700" : "text-gray-400",
        "inline-block mr-1"
      )}
    >
      <item.icon />
    </div>
  ) : null;
}

function PlainNavigationItem({ item }: { item: NavigationItem }) {
  return (
    <Link
      href={item.href}
      className={classNames(
        item.current
          ? "bg-gray-50 text-teal-700"
          : "text-gray-700 hover:text-teal-700 hover:bg-gray-50",
        "flex items-center gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
      )}
    >
      <ItemIcon item={item} />
      <div className="grow">{item.name}</div>
      {item.badge && (
        <div className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
          {item.badge}
        </div>
      )}
    </Link>
  );
}

function NestedNavigationItem({ item }: { item: NavigationItem }) {
  return (
    <Disclosure as="div" defaultOpen={item.current}>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={classNames(
              item.current ? "bg-gray-50" : "hover:bg-gray-50",
              "flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700"
            )}
          >
            <ItemIcon item={item} />
            <div className="grow">{item.name}</div>
            <ChevronRightIcon
              className={classNames(
                open ? "rotate-90 text-gray-500" : "text-gray-400",
                "h-4 w-4 shrink-0 transition"
              )}
            />
          </Disclosure.Button>
          <Disclosure.Panel as="ul" className="mt-1 px-2">
            {item.children!.map((subItem) => (
              <li key={subItem.name}>
                <Disclosure.Button
                  as={Link}
                  href={subItem.href}
                  className={classNames(
                    subItem.current ? "bg-gray-50" : "hover:bg-gray-50",
                    "block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-gray-700"
                  )}
                >
                  {subItem.name}
                </Disclosure.Button>
              </li>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export function SidebarNavigationItem({ item }: { item: NavigationItem }) {
  return item.children ? (
    <NestedNavigationItem item={item} />
  ) : (
    <PlainNavigationItem item={item} />
  );
}
