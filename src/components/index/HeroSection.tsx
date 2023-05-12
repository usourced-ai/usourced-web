export function HeroSection() {
  return (
    <section className="mt-2 bg-cream bg-contain bg-no-repeat">
      <div className="mx-auto max-w-7xl rounded-[24px] bg-brand text-cream sm:px-6 lg:px-8">
        <div className="mx-4 grid grid-cols-1 gap-8 pb-20 pt-96 xl:grid-cols-2">
          <div className="font-brand text-4xl uppercase sm:text-6xl">
            <h1>You dream it,</h1>
            <div className="animate__animated animate__tada mt-4 inline-block rounded-full bg-cream px-6 py-4 text-brand xl:ml-4">
              we make it
              <span className="-mb-3 ml-4 inline-block">
                <img
                  className="h-12 sm:h-16"
                  src="/images/index/smiley.svg"
                  alt=":)"
                />
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
    </section>
  );
}
