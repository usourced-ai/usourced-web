import { enqueueSnackbar } from "notistack";
import { useState } from "react";

import { addNewsletterSubscriber } from "@/utils/firebase";

export function useNewsletterSubscription() {
  const [email, setEmail] = useState("");
  return {
    email,
    setEmail,
    subscribe: async () => {
      if (!email) {
        return;
      }
      try {
        await addNewsletterSubscriber(email, "homepage");
        enqueueSnackbar(
          "You are signed up. You will be the first to know when we launch!",
          { variant: "success" }
        );
        setEmail("");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        enqueueSnackbar(err.message, {
          variant: "error",
        });
      }
    },
  };
}
