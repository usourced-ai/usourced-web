import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/common/Button";
import chatWithAi from "@/public/images/index/chat-with-ai.png";
import weSourceIt from "@/public/images/index/we-source-it.png";

export function CustomSourcingSection() {
  const [hovered, setHovered] = useState(false);
  return (
    <section
      className="__scrollreveal bg-contain bg-no-repeat"
      style={{
        backgroundImage: "url(/images/index/bg/starfish.svg)",
        backgroundPosition: "bottom 0px left -5vw",
        backgroundSize: "20vw",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="mx-auto max-w-screen-lg px-4 py-10 sm:px-6 lg:px-8">
        <Image
          src={weSourceIt}
          alt="We Source It"
          className="ml-16 h-80 w-auto sm:float-right"
        />
        <h1 className="font-brand text-4xl leading-tight md:text-5xl md:leading-tight">
          Want it? <br />
          We&rsquo;ll source it.
        </h1>
        <p className="mt-4">
          Can&rsquo;t find exactly what you&rsquo;re looking for? Don&rsquo;t
          worry &ndash; we got you.
        </p>
        <p className="mt-4">
          Whether you want to source a product not on our website, or simply
          want to make a few tweaks to an existing product, USourced can help.
        </p>
        <div className="mt-6">
          <Button
            color="brand"
            size="2xl"
            className={clsx({
              "animate__animated animate__rubberBand": hovered,
            })}
          >
            Chat Now
          </Button>
          <Image
            src={chatWithAi}
            alt="Chat with AI"
            className="-mt-10 ml-32 h-[88px] w-auto"
          />
        </div>
      </div>
    </section>
  );
}
