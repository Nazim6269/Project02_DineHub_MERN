import { Link } from "react-router-dom";
import { logout } from "../../helpers/logout";

const Modal = ({ closeModal, profile }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-40 z-40"
        onClick={closeModal}
      ></div>

      {/* Modal container */}
      <div className="fixed top-1/2 left-1/2 z-50 w-11/12 max-w-sm transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col gap-3 text-gray-700 capitalize">
          <span className="hover:text-pink-600 cursor-pointer transition">
            Change password
          </span>
          <span className="hover:text-pink-600 cursor-pointer transition">
            Manage accounts
          </span>
          <span className="hover:text-pink-600 cursor-pointer transition">
            Security and privacy
          </span>
          <Link
            onClick={() => logout(profile)}
            className="hover:text-pink-600 cursor-pointer transition"
          >
            Log out
          </Link>
          <button
            onClick={closeModal}
            className="mt-4 w-full bg-pink-600 text-white py-2 rounded-lg font-medium hover:bg-pink-500 transition focus:outline-none focus:ring-2 focus:ring-pink-200"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
