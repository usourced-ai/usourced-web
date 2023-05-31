import { enqueueSnackbar } from "notistack";
import { useState } from "react";

import { addNewsletterSubscriber } from "@/utils/firebase";

export function useNewsletterSubscription() {
  const [email, setEmail] = useState("");
  const subscribe = async () => {
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
    } catch (err: any) {
      enqueueSnackbar(err.message, {
        variant: "error",
      });
    }
  };
  return {
    email,
    setEmail,
    subscribe,
  };
}
