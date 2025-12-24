const HeroSection = () => {
  return (
    <section className="bgDarkGray text-white body-font">
      <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between px-4 sm:px-6 lg:px-8 py-16 sm:py-20 gap-10">
        {/* Text content */}
        <div className="flex flex-col text-center md:text-left md:items-start md:w-1/2 gap-6 lg:pr-16">
          <h1 className="title-font text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primaryTextColor drop-shadow-lg">
            Savor Every Flavor, Indulge in Culinary Delights
          </h1>
          <p className="leading-relaxed text-gray-300 text-base sm:text-lg md:text-base lg:text-lg">
            Welcome to a place where passion meets plate. Immerse yourself in a
            world of exquisite tastes, curated with love and served with flair.
            Every bite is a celebration of flavor, creating unforgettable
            moments.
          </p>
          <div className="flex justify-center md:justify-start mt-4">
            <button className="inline-flex primaryBtnUi">Get Started</button>
          </div>
        </div>

        {/* Image content */}
        <div className="md:w-1/2 w-full flex justify-center lg:max-w-full">
          <img
            src="./h11.png"
            alt="hero"
            className="w-full max-w-md sm:max-w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
