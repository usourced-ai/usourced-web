import { Disclosure, Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import React from "react";

import { Button } from "@/components/common/Button";

const NAVIGATION_LINKS = [
  { name: "About", href: "/about" },
  { name: "Custom Request", href: "/custom-request" },
  { name: "Catalog Products", href: "/contact" },
  { name: "AI Sourcing Agent", href: "/contact" },
  { name: "Project Dashboard", href: "/contact" },
];

type NavigationItem = {
  name: string;
  href: string;
  current: boolean;
};

function Masthead() {
  return (
    <Link href="/">
      <img
        className="block h-14 w-auto"
        src="/assets/nav/usourced-masthead.png"
        alt="USourced"
      />
    </Link>
  );
}

function SignInButton() {
  const { enqueueSnackbar } = useSnackbar();
  return (
    <Button size="xl" onClick={() => enqueueSnackbar("This is a demo.")}>
      Sign In
    </Button>
  );
}

function MobileMenuButton({ open }: { open: boolean }) {
  return (
    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2">
      <span className="sr-only">Open main menu</span>
      {open ? (
        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
      ) : (
        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
      )}
    </Disclosure.Button>
  );
}

function MobileMenu({
  navigationItems,
}: {
  navigationItems: NavigationItem[];
}) {
  return (
    <Disclosure.Panel className="sm:hidden">
      <div className="space-y-1 pb-3 pt-2">
        {navigationItems.map((item) => (
          <Disclosure.Button
            key={item.name}
            as="a"
            href={item.href}
            className={classNames(
              item.current
                ? "border-brand bg-teal-50 text-brand hover:border-brand"
                : "border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800",
              "block border-l-4 py-2 pl-3 pr-4 text-base font-medium"
            )}
            aria-current={item.current ? "page" : undefined}
          >
            {item.name}
          </Disclosure.Button>
        ))}
      </div>
    </Disclosure.Panel>
  );
}

export function AppBar() {
  const router = useRouter();
  const navigationItems = NAVIGATION_LINKS.map((link) => ({
    ...link,
    current: router.pathname === link.href,
  }));
  return (
    <Disclosure as="nav" className="border-b border-gray-200 bg-cream">
      {({ open }) => (
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-24 justify-between">
            <div className="flex">
              <div className="flex shrink-0 items-center">
                <Masthead />
              </div>
            </div>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "border-brand text-gray-900 hover:border-teal-800 hover:text-teal-800"
                      : "border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-700",
                    "inline-flex items-center border-b-2 px-1 pt-1 text-md font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <Menu as="div" className="relative ml-3">
                <SignInButton />
              </Menu>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <MobileMenuButton open={open} />
            </div>
          </div>
          <MobileMenu navigationItems={navigationItems} />
        </div>
      )}
    </Disclosure>
  );
}
