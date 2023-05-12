import classNames from "classnames";
import { useState } from "react";

function FeatureParagraph({
  icon,
  children,
}: {
  icon: string;
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <p
      className="mb-4"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className={classNames("float-left pr-4 text-4xl", {
          "animate__animated animate__tada": hovered,
        })}
      >
        {icon}
      </span>
      {children}
    </p>
  );
}

export function AboutSection() {
  return (
    <section
      className="mt-4 bg-contain bg-no-repeat py-20"
      style={{ backgroundImage: "url(/images/index/bg/about-bg.svg)" }}
    >
      <div className="mx-auto max-w-5xl sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center font-brand text-4xl text-brand md:text-5xl">
          <img
            src="/images/index/star.png"
            alt=""
            className="mr-4 inline h-6 align-middle"
          />
          About USourced
          <img
            src="/images/index/star.png"
            alt=""
            className="ml-4 inline h-6 align-middle"
          />
        </h2>
        <div className="mx-4 mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <p className="mb-4">
              <span className="font-semibold">Our mission</span> is to
              streamline access to unique, high-quality products across global
              suppliers and simplify supply chain management. By harnessing the
              power of generative AI, we&rsquo;re making it easier and faster
              than ever to bring your brand vision into reality. Here at
              USourced, you can:
            </p>
            <FeatureParagraph icon="🎨">
              Shop thousands of high-quality & unique bespoke products and
              customize with our 3D & AI design tools for seamless checkout
            </FeatureParagraph>
            <FeatureParagraph icon="🌟">
              Enter your website and social links and receive product
              recommendations based on your audience and industry
            </FeatureParagraph>
            <FeatureParagraph icon="💬">
              Chat with our 24/7 generative AI-powered customer service and get
              instant updates and responses
            </FeatureParagraph>
            <FeatureParagraph icon="✨">
              Describe what you what and instantly receive AI generated 3D
              product mock-ups
            </FeatureParagraph>
          </div>
          <div>
            <FeatureParagraph icon="📊">
              Stay on top of your projects with our all-in-one user dashboard &
              fulfillment tracking
            </FeatureParagraph>
            <FeatureParagraph icon="🔍">
              Let our AI work its magic to match you with the perfect supplier
              for your unique needs without language barriers
            </FeatureParagraph>
            <p className="mb-4">
              It all started when our founder Julia Xu (ex-Alibaba Chief of
              Staff) realized how difficult it was for small businesses to
              source custom products. By bridging the gap between brand and
              manufacturer, she realized that she could open the door to easy
              and unlimited customization that&rsquo;s actually intuitive.
            </p>
            <p className="mb-4">
              <span className="font-semibold">
                If you can dream it, we can make it
              </span>
              . With USourced, you can say goodbye to the hassle of traditional
              product sourcing, and hello to easy and automated custom product
              sourcing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
