import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { profile } = useSelector((state) => state.profileReducer);

  const handleModal = () => setShowModal((prev) => !prev);
  const closeModal = () => setShowModal(false);

  return (
    <header className="bgDarkGray text-white font-semibold shadow-md body-font">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center">
            <span className="text-2xl sm:text-3xl italic font-bold text-primaryTextColor">
              DineHub
            </span>
          </Link>
        </div>

        {/* Hamburger button for mobile */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
          aria-label="Toggle navigation"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`flex-col md:flex-row md:flex items-start md:items-center gap-2 md:gap-6 w-full md:w-auto ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          {["Home", "About", "Contact", "Profile"].map((link) => (
            <Link
              key={link}
              to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
              className="w-full md:w-auto hover:text-primaryTextHoverColor transition"
            >
              {link}
            </Link>
          ))}
        </nav>

        {/* Navbar Buttons */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-start md:justify-end mt-2 md:mt-0">
          {["Go to cart", "Login", "Language"].map((btn) => (
            <button
              key={btn}
              className="inline-flex items-center bg-gray-800 border border-white/20 py-2 px-3 rounded hover:bg-gray-700 transition text-sm sm:text-base"
            >
              {btn}
            </button>
          ))}
        </div>

        {/* Profile & Modal */}
        <div className="flex items-center gap-3 mt-2 md:mt-0">
          <img
            className="w-8 h-8 rounded-full object-cover"
            src={profile.picture}
            alt="profile"
          />
          <button
            className="hover:text-pink-400 transition"
            onClick={handleModal}
          >
            {profile.name}
          </button>
          {showModal && <Modal closeModal={closeModal} profile={profile} />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
