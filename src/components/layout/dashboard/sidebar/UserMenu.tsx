import { Menu } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { AppViewState, AppViewStateEnum } from "@/states/AppViewState";

function SetAppViewStateButton({
  appViewState,
  setAppViewState,
}: {
  appViewState: AppViewStateEnum;
  setAppViewState: (appViewState: AppViewStateEnum) => void;
}) {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          type="button"
          onClick={() => setAppViewState(appViewState)}
          className={clsx(
            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
            "block w-full px-4 py-2 text-left text-sm"
          )}
        >
          View as {appViewState}
        </button>
      )}
    </Menu.Item>
  );
}

export function UserMenu() {
  const appViewState = useRecoilValue(AppViewState);
  const setAppViewState = useSetRecoilState(AppViewState);
  return (
    <div>
      <div className="py-1">
        <Menu.Item>
          {({ active }) => (
            <Link
              href="/"
              className={clsx(
                active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                "block px-4 py-2 text-sm"
              )}
            >
              View profile
            </Link>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <Link
              href="/"
              className={clsx(
                active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                "block px-4 py-2 text-sm"
              )}
            >
              Settings
            </Link>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <Link
              href="/"
              className={clsx(
                active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                "block px-4 py-2 text-sm"
              )}
            >
              Notifications
            </Link>
          )}
        </Menu.Item>
      </div>
      <div className="py-1">
        {appViewState !== AppViewStateEnum.MEMBER && (
          <SetAppViewStateButton
            appViewState={AppViewStateEnum.MEMBER}
            setAppViewState={setAppViewState}
          />
        )}
        {appViewState !== AppViewStateEnum.ADMIN && (
          <SetAppViewStateButton
            appViewState={AppViewStateEnum.ADMIN}
            setAppViewState={setAppViewState}
          />
        )}
      </div>
      <div className="py-1">
        <Menu.Item>
          {({ active }) => (
            <Link
              href="/"
              className={clsx(
                active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                "block px-4 py-2 text-sm"
              )}
            >
              Logout
            </Link>
          )}
        </Menu.Item>
      </div>
    </div>
  );
}
