import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const ResetPassword = () => {
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  const handleSend = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3333/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newPass, confirmPass, id }),
      });
      setNewPass("");
      setConfirmPass("");
      const data = await res.json();
      toast(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md sm:max-w-xl rounded-xl bg-white p-6 sm:p-8 shadow-md">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-pink-600 mb-6">
          Enter Your Password
        </h2>
        <form className="space-y-4" onSubmit={handleSend}>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              New Password
            </label>
            <input
              type="password"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-pink-600 px-4 py-2 text-white font-semibold shadow-sm transition hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200"
          >
            Send
          </button>
        </form>
      </div>
      <ToastContainer position="top-center" autoClose={4000} />
    </div>
  );
};

export default ResetPassword;
