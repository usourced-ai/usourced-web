import { initializeApp } from "firebase/app";
import { collection, doc, getFirestore, setDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useEffect, useState } from "react";

export const app = initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "usourced-platform.firebaseapp.com",
  projectId: "usourced-platform",
  storageBucket: "usourced-platform.appspot.com",
  messagingSenderId: "237045703507",
  appId: process.env.FIREBASE_APP_ID,
  measurementId: "G-70S4K701MH",
});

export const db = getFirestore(app);

export const storage = getStorage(app);

export const NEWSLETTER_SUBSCRIBERS_COL = "newsletter_subscribers";

export async function addNewsletterSubscriber(
  email: string,
  funnel?: string
): Promise<void> {
  await setDoc(doc(collection(db, NEWSLETTER_SUBSCRIBERS_COL), email), {
    email,
    funnel,
    created_at: new Date(),
  });
}

export function useFirestoreImage({ path }: { path: string }) {
  const [image, setImage] = useState<string | undefined>(undefined);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function effect() {
      try {
        const url = await getDownloadURL(ref(storage, path));
        setImage(url);
      } catch (e: any) {
        setError(e);
      }
    }
    effect();
  }, [path]);

  return {
    image,
    error,
  };
}
