import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

import usourcedSeal from "@/public/images/index/usourced-seal.png";
import customer from "@/public/images/index/values/customer.svg";
import quality from "@/public/images/index/values/quality.svg";
import steps from "@/public/images/index/values/steps.svg";

function ValueCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon: string;
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="mb-4 text-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={clsx("mx-auto h-24 w-24", {
          "animate__animated animate__bounce": hovered,
        })}
      >
        <Image src={icon} alt={title} />
      </div>
      <h2 className="mt-6 text-xl font-medium">{title}</h2>
      <p className="mt-3 text-sm">{children}</p>
    </div>
  );
}

export function OurPromiseSection() {
  return (
    <section className="__scrollreveal mt-10">
      <div className="mx-auto max-w-screen-lg py-20 sm:px-6 lg:px-8">
        <div
          className="h-10 bg-cover"
          style={{ backgroundImage: "url(/images/index/bg/blue-bg.svg)" }}
        >
          <Image
            src={usourcedSeal}
            alt="Our Promise"
            className="relative -top-12 mx-auto h-24 w-24"
          />
        </div>
        <div className="rounded-b-3xl bg-sky pb-20 pt-10">
          <h2 className="mb-4 text-center font-brand text-4xl text-brand md:text-5xl">
            Our Promise
          </h2>
          <div className="mx-16 mt-8 grid grid-cols-1 gap-16 md:grid-cols-3">
            <ValueCard title="Customer First" icon={customer}>
              Our customers are at the center of everything we do. You want it?
              We can source it &ndash; our small but mighty team is ready to
              help you. Plus, our generative AI capabilities mean you can get
              the answers you need ASAP.
            </ValueCard>
            <ValueCard title="Vetted Quality" icon={quality}>
              Enjoy our curated catalog of tried and tested products. We source
              globally from a large network of suppliers and manufacturers to
              ensure you get the best quality and the best price.
            </ValueCard>
            <ValueCard title="Seamless Experience" icon={steps}>
              Design your product, approve a mockup, and place your order within
              minutes using our self-serve platform. Then, easily keep track of
              your projects and order status with our integrated user dashboard.
            </ValueCard>
          </div>
        </div>
      </div>
    </section>
  );
}
