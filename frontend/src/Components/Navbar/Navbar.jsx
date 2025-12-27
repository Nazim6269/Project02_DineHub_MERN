import { LayoutDashboardIcon, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const { profile } = useSelector((state) => state.profileReducer);

  const handleModal = () => setShowModal((prev) => !prev);
  const closeModal = () => setShowModal(false);

  return (
    <header
      className="
        sticky top-0 z-50
        bg-background-dark
        backdrop-blur
        border-b border-white/5
      "
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link
            to="/"
            className="
              text-xl sm:text-2xl
              italic font-bold
              text-text-primary
            "
          >
            Dine
            <span className="text-(--color-primary-cyan)">Hub</span>
          </Link>

          {/* Right Section */}

          {profile ? (
            // 🔐 Logged In
            <div className="flex items-center gap-4">
              {/* admin dashboard */}
              <button
                className="
                  relative
                  text-text-secondary
                  hover:text-(--color-accent-cyan)
                  transition
                "
              >
                <Link to={"/admin/dashboard"}>
                  <LayoutDashboardIcon className="w-6 h-6" />
                </Link>
              </button>

              {/* Cart */}
              <button
                className="
                  relative
                  text-text-secondary
                  hover:text-(--color-accent-cyan)
                  transition
                "
              >
                <ShoppingCart className="w-6 h-6" />
              </button>

              {/* Profile */}
              <button
                onClick={handleModal}
                className="
                  flex items-center gap-2
                  hover:text-(--color-accent-cyan)
                  transition
                "
              >
                <img
                  src={profile.picture}
                  alt="profile"
                  className="
                    w-8 h-8 rounded-full object-cover
                    border border-white/10
                  "
                />
                <span
                  className="
                    hidden sm:inline
                    text-sm font-medium
                    text-text-primary
                  "
                >
                  {profile.name}
                </span>
              </button>
            </div>
          ) : (
            // 🔓 Logged Out
            <Link
              to="/login"
              className="
                rounded-full px-5 py-2
                text-sm font-semibold text-black
                bg-(--color-accent-cyan)
                hover:bg-accent-cyan-light
                shadow-[0_0_30px_rgba(0,217,192,0.35)]
                transition
              "
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Profile Modal */}
      {showModal && <Modal closeModal={closeModal} profile={profile} />}
    </header>
  );
};

export default Navbar;
