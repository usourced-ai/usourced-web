import { XMarkIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState } from "react";
import { useRecoilValue } from "recoil";

import { AppViewState, AppViewStateEnum } from "@/states/AppViewState";

export function ContentVisibilityBanner() {
  const appViewState = useRecoilValue(AppViewState);
  const [hidden, setHidden] = useState(false);
  if (appViewState === AppViewStateEnum.MEMBER) {
    return null;
  }
  return (
    <div
      className={clsx(
        "m-1 flex items-center gap-x-6 rounded bg-orange-600 px-6 py-1 shadow sm:px-3 sm:before:flex-1",
        { hidden }
      )}
    >
      <p className="text-sm font-medium leading-6 text-white">
        <span className="font-semibold">Reminder:</span> files and content on
        this page are visible to clients.
      </p>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          onClick={() => setHidden(true)}
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
