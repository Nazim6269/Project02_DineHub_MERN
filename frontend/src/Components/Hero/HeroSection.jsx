const HeroSection = () => {
  return (
    <section
      className="
        relative overflow-hidden
        bg-background-dark
        text-text-primary
      "
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-(--background-image-gradient-mesh)
        "
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center gap-14">
          {/* Text content */}
          <div className="flex flex-col text-center md:text-left md:w-1/2 gap-6">
            <h1
              className="
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                font-bold leading-tight
                bg-gradient-to-r
                from-[var(--color-primary-cyan)]
                to-[var(--color-primary-blue)]
                bg-clip-text text-transparent
              "
            >
              Savor Every Flavor,
              <br />
              Accelerate Your Taste.
            </h1>

            <p
              className="
                max-w-xl mx-auto md:mx-0
                text-base sm:text-lg
                text-text-secondary
              "
            >
              Welcome to a place where passion meets plate. Immerse yourself in
              a world of exquisite tastes, curated with love and served with
              flair. Every bite is crafted to feel unforgettable.
            </p>

            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <button
                className="
                  rounded-full px-6 py-3
                  font-semibold text-black
                  bg-(--color-accent-cyan)
                  hover:bg-[var(--color-accent-cyan-light)]
                  shadow-[0_0_40px_rgba(0,217,192,0.35)]
                  transition
                "
              >
                Get Started
              </button>

              <button
                className="
                  rounded-full px-6 py-3
                  font-medium
                  text-text-primary
                  border border-white/10
                  hover:border-[var(--color-accent-cyan)]
                  transition
                "
              >
                Watch Demo
              </button>
            </div>
          </div>

          {/* Image content */}
          <div className="md:w-1/2 w-full flex justify-center">
            <div
              className="
                relative rounded-2xl overflow-hidden
                bg-background-card
                border border-white/10
              "
            >
              <img
                src="./h11.png"
                alt="hero"
                className="w-full max-w-md sm:max-w-lg object-cover"
              />

              {/* Image glow */}
              <div
                className="
                  absolute inset-0
                  shadow-[0_0_80px_rgba(45,77,232,0.25)]
                  pointer-events-none
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
