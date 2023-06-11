import { Menu, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { Fragment } from "react";
import { useRecoilValue } from "recoil";

import { Avatar } from "@/components/common/Avatar";
import { UserMenu } from "@/components/layout/dashboard/sidebar/UserMenu";
import { CURRENT_USER } from "@/models/chat";
import { AppViewState, AppViewStateEnum } from "@/states/AppViewState";

function getColorClasses(appViewState: AppViewStateEnum) {
  switch (appViewState) {
    case AppViewStateEnum.ADMIN:
      return "text-orange-500";
    case AppViewStateEnum.MEMBER:
      return "text-gray-500";
    default:
      return "text-gray-500";
  }
}

export function SidebarUserMenuItem() {
  const appViewState = useRecoilValue(AppViewState);
  return (
    <Menu as="div" className="relative inline-block w-full text-left">
      <div>
        <Menu.Button className="group w-full rounded-md bg-gray-100 px-3.5 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2 focus:ring-offset-gray-100">
          <span className="flex w-full items-center justify-between">
            <span className="flex min-w-0 items-center justify-between space-x-3">
              <Avatar user={CURRENT_USER} />
              <span className="flex min-w-0 flex-1 flex-col">
                <span className="truncate text-sm font-medium text-gray-900">
                  Julia Xu
                </span>
                <span
                  className={clsx(
                    "truncate text-sm",
                    getColorClasses(appViewState)
                  )}
                >
                  {appViewState}
                </span>
              </span>
            </span>
            <ChevronUpDownIcon
              className="h-5 w-5 shrink-0 text-gray-400 group-hover:text-gray-500"
              aria-hidden="true"
            />
          </span>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute inset-x-0 bottom-20 z-10 mx-3 mt-1 origin-bottom divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <UserMenu />
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
