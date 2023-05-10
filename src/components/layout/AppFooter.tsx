import Link from "next/link";
import { FaEnvelope, FaInstagram, FaLinkedin, FaMapPin } from "react-icons/fa";

import { Button } from "@/components/common/Button";

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/usourced.ai/",
    icon: <FaInstagram size={32} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/usourced/",
    icon: <FaLinkedin size={32} />,
  },
];

function NewsletterSection() {
  return (
    <div>
      <div>
        <h3 className="font-brand text-2xl text-cream md:text-4xl">
          Sign up and be the first to know when we launch
        </h3>
      </div>
      <form className="mt-12 sm:flex sm:max-w-md">
        <input
          type="email"
          name="email-address"
          id="newsletter-email-address"
          autoComplete="email"
          required
          className="w-full min-w-0 appearance-none rounded-full border-0 bg-white/5 px-3 py-1.5 text-base text-brand shadow-sm ring-1 ring-inset ring-white/10 transition duration-500 placeholder:text-gray-500 hover:bg-white/10 focus:bg-white/80 focus:ring-white/10 sm:w-56 sm:text-sm sm:leading-6"
          placeholder="Enter your email"
        />
        <div className="mt-4 sm:ml-4 sm:mt-0 sm:shrink-0">
          <Button type="submit" color="grass" size="xl" className="flex w-full">
            Subscribe
          </Button>
        </div>
      </form>
    </div>
  );
}

export function AppFooter() {
  return (
    <footer
      className="mt-20 bg-[url('/assets/footer/footer-background.svg')] bg-cover bg-no-repeat"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <NewsletterSection />
        <div className="mt-10 border-t border-white/10 pt-8">
          <img
            className="h-10"
            src="/assets/footer/usourced-masthead-white.png"
            alt="USourced"
          />
        </div>
        <div className="ml-1 mt-6 text-lg text-gray-200">
          <p>
            <FaEnvelope className="mr-1 inline" />{" "}
            <Link href="mailto:hello@usourced.com">hello@usourced.com</Link>
          </p>
          <p>
            <FaMapPin className="mr-1 inline" /> 600 N Broad St, Ste 5 #3766,
            Middletown, DE 19709
          </p>
        </div>
        <div className="mt-6 flex space-x-4">
          {SOCIAL_LINKS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-cream transition duration-500 hover:animate-pulse hover:text-cream/80"
            >
              <span className="sr-only">{item.name}</span>
              <div aria-hidden="true">{item.icon}</div>
            </a>
          ))}
        </div>
      </div>
      <div className="mt-10 bg-teal-900 py-8 text-center">
        <p className="text-base text-cream/50">
          &copy; 2023 USourced, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
