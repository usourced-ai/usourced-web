import { initializeApp } from "firebase/app";
import { collection, doc, getFirestore, setDoc } from "firebase/firestore";

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
