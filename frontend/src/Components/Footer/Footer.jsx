const Footer = () => {
  return (
    <footer className="bgDarkGray text-white body-font">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row justify-between gap-8 md:gap-0">
        {/* Brand / About */}
        <div className="md:w-1/3 flex flex-col gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-primaryTextColor">
            DineHub
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Savor every flavor with our curated culinary delights. Join us to
            explore a world of exquisite tastes and unforgettable experiences.
          </p>
        </div>

        {/* Links */}
        <div className="md:w-1/3 flex flex-col sm:flex-row justify-between gap-6 md:gap-12">
          <div className="flex flex-col gap-2">
            <h3 className="text-primaryTextColor font-semibold text-lg">
              Company
            </h3>
            <a href="/" className="hover:text-primaryTextHoverColor transition">
              About
            </a>
            <a
              href="/contact"
              className="hover:text-primaryTextHoverColor transition"
            >
              Contact
            </a>
            <a
              href="/faq"
              className="hover:text-primaryTextHoverColor transition"
            >
              FAQ
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-primaryTextColor font-semibold text-lg">
              Follow Us
            </h3>
            <a href="#" className="hover:text-primaryTextHoverColor transition">
              Facebook
            </a>
            <a href="#" className="hover:text-primaryTextHoverColor transition">
              Instagram
            </a>
            <a href="#" className="hover:text-primaryTextHoverColor transition">
              Twitter
            </a>
          </div>
        </div>

        {/* Newsletter / CTA */}
        <div className="md:w-1/3 flex flex-col gap-4">
          <h3 className="text-primaryTextColor font-semibold text-lg">
            Subscribe
          </h3>
          <p className="text-gray-300 text-sm">
            Get updates about new menus and offers.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 rounded-l-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primaryTextHoverColor"
            />
            <button className="primaryBtnUi">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} DineHub — All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
