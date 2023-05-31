import * as ReactTooltip from "@radix-ui/react-tooltip";
import type { PropsWithChildren } from "react";

export function Tooltip({
  children,
  tooltip,
}: PropsWithChildren<{ tooltip: string }>) {
  return (
    <ReactTooltip.Provider delayDuration={0}>
      <ReactTooltip.Root>
        <ReactTooltip.Trigger asChild>{children}</ReactTooltip.Trigger>
        <ReactTooltip.Portal>
          <ReactTooltip.Content
            sideOffset={4}
            className="rounded-md bg-black/70 px-2.5 py-1 text-sm text-cream"
          >
            {tooltip}
            <ReactTooltip.Arrow className="fill-black/75" />
          </ReactTooltip.Content>
        </ReactTooltip.Portal>
      </ReactTooltip.Root>
    </ReactTooltip.Provider>
  );
}
