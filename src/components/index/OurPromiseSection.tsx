import classNames from "classnames";
import { useState } from "react";

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
        className={classNames("mx-auto h-24 w-24", {
          "animate__animated animate__bounce": hovered,
        })}
      >
        <img src={icon} alt={title} className="" />
      </div>
      <h2 className="mt-6 font-brand text-xl">{title}</h2>
      <p className="mt-3 text-sm">{children}</p>
    </div>
  );
}

export function OurPromiseSection() {
  return (
    <section className="mt-10">
      <div className="mx-auto max-w-5xl py-20 sm:px-6 lg:px-8">
        <div
          className="h-10 bg-cover"
          style={{ backgroundImage: "url(/images/index/bg/blue-bg.svg)" }}
        >
          <img
            className="relative -top-12 mx-auto h-24 w-24"
            src="/images/index/usourced-seal.png"
            alt="Our Promise"
          />
        </div>
        <div className="rounded-b-3xl bg-sky pb-20 pt-10">
          <h2 className="mb-4 text-center font-brand text-4xl text-brand md:text-5xl">
            Our Promise
          </h2>
          <div className="mx-16 mt-8 grid grid-cols-1 gap-16 md:grid-cols-3">
            <ValueCard
              title="Customer First"
              icon="/images/index/values/customer.svg"
            >
              Our customers are at the center of everything we do. You want it?
              We can source it &ndash; our small but mighty team is ready to
              help you. Plus, our generative AI capabilities mean you can get
              the answers you need ASAP.
            </ValueCard>
            <ValueCard
              title="Vetted Quality"
              icon="/images/index/values/quality.svg"
            >
              Enjoy our curated catalog of tried and tested products. We source
              globally from a large network of suppliers and manufacturers to
              ensure you get the best quality and the best price.
            </ValueCard>
            <ValueCard
              title="Seamless Experience"
              icon="/images/index/values/steps.svg"
            >
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
