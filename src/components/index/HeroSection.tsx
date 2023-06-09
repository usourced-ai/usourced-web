import { BellAlertIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

import { useNewsletterSubscription } from "@/api/newsletter_subscription";
import backpack from "@/public/images/index/products/backpack.png";
import cat from "@/public/images/index/products/cat.png";
import fan from "@/public/images/index/products/fan.png";
import mug from "@/public/images/index/products/mug.png";
import phoneStand from "@/public/images/index/products/phone-stand.png";
import smiley from "@/public/images/index/smiley.svg";

function SignUpCard() {
  const { email, setEmail, subscribe } = useNewsletterSubscription();
  return (
    <div className="mx-auto -mt-16 w-full rounded-2xl bg-peachy px-8 py-4 drop-shadow-xl sm:w-[440px]">
      <h4>Sign up and be the first to know when we launch:</h4>
      <div className="mt-2 flex rounded-full shadow-sm">
        <div className="relative flex grow items-stretch">
          <input
            className="w-full rounded-none rounded-l-full border-0 py-2 pl-5 leading-8 text-gray-900 ring-1 ring-inset ring-brand transition duration-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand"
            type="email"
            autoComplete="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={async (e) => {
              if (e.key === "Enter") {
                await subscribe();
              }
            }}
          />
        </div>
        <button
          type="button"
          className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-full bg-brand px-3 py-2 text-cream ring-1 ring-inset ring-brand transition duration-500 hover:bg-gray-50 hover:text-brand"
          onClick={subscribe}
        >
          <BellAlertIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

function ProductImages() {
  return (
    <>
      <Image
        src={phoneStand}
        alt="Lavender Phone Stand"
        className="animate__animated animate__bounceIn animate__delay-1s absolute left-[-40px] top-[-60px] w-[300px]"
      />
      <Image
        src={mug}
        alt="Pink Cloud Mug"
        className="animate__animated animate__bounceIn animate__delay-2s absolute left-[260px] top-[28px] w-[280px]"
      />
      <Image
        src={fan}
        alt="Green Desk Fan"
        className="animate__animated animate__bounceIn animate__delay-1s absolute left-[580px] top-[-80px] w-[240px]"
      />
      <Image
        src={cat}
        alt="Fluffy White Cat Plushie"
        className="animate__animated animate__bounceIn animate__delay-2s absolute left-[860px] top-[70px] w-[240px]"
      />
      <Image
        src={backpack}
        alt="Yellow Backpack"
        className="animate__animated animate__bounceIn animate__delay-1s absolute left-[1110px] top-[-70px] w-[280px] rotate-12"
      />
    </>
  );
}

export function HeroSection() {
  return (
    <section className="mt-2">
      <div
        className="relative mx-auto max-w-screen-xl overflow-hidden rounded-2xl text-cream sm:px-6 md:rounded-[48px] lg:px-8"
        style={{
          backgroundImage: "url('/images/index/bg/hero-bg.svg')",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <ProductImages />
        <div className="mx-4 grid grid-cols-1 gap-8 pb-28 pt-56 sm:pt-80 xl:grid-cols-2">
          <div className="font-brand text-4xl uppercase sm:text-6xl">
            <h1>You dream it,</h1>
            <div className="animate__animated animate__tada mt-4 inline-block rounded-full bg-cream px-6 py-4 text-brand xl:ml-4">
              we make it
              <span className="-mb-3 ml-4 inline-block">
                <Image src={smiley} alt=":)" className="h-12 w-auto sm:h-16" />
              </span>
            </div>
          </div>
          <div>
            <h2 className="mr-8 text-2xl font-light sm:text-3xl xl:ml-28 xl:mr-20">
              Bespoke product sourcing with generative AI, connecting you to the
              best manufacturers worldwide
            </h2>
          </div>
        </div>
      </div>
      <SignUpCard />
    </section>
  );
}
