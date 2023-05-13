import classNames from "classnames";
import { useState } from "react";

import { Button } from "../common/Button";

export function CustomSourcingSection() {
  const [hovered, setHovered] = useState(false);
  return (
    <section
      className="bg-contain bg-no-repeat"
      style={{
        backgroundImage: "url(/images/index/bg/starfish.svg)",
        backgroundPosition: "bottom 0px left -5vw",
        backgroundSize: "20vw",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <img
          className="ml-16 h-80 sm:float-right"
          src="/images/index/we-source-it.png"
          alt="We Source It"
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
            className={classNames({
              "animate__animated animate__rubberBand": hovered,
            })}
          >
            Chat Now
          </Button>
          <img
            className="-mt-10 ml-32 h-[88px]"
            src="/images/index/chat-with-ai.png"
            alt="Chat with AI"
          />
        </div>
      </div>
    </section>
  );
}
