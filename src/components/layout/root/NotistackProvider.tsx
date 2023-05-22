import { XMarkIcon } from "@heroicons/react/24/outline";
import type { SnackbarKey } from "notistack";
import { SnackbarProvider, useSnackbar } from "notistack";
import { type PropsWithChildren } from "react";

function SnackbarCloseButton({ snackbarKey }: { snackbarKey: SnackbarKey }) {
  const { closeSnackbar } = useSnackbar();
  return (
    <button
      type="button"
      className="inline-flex rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2"
      onClick={() => closeSnackbar(snackbarKey)}
    >
      <span className="sr-only">Close</span>
      <XMarkIcon className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}

export function NotistackProvider({ children }: PropsWithChildren<{}>) {
  const action = (key: SnackbarKey) => (
    <SnackbarCloseButton snackbarKey={key} />
  );

  return (
    <SnackbarProvider preventDuplicate action={action}>
      {children}
    </SnackbarProvider>
  );
}
