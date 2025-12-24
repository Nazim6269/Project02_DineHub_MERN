import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setAccessTokenCookie } from "../../helpers/setAccessToken";
import { profileInLocalStorage } from "../../helpers/setLocalStorage";
import { setProfileInfo } from "../../redux/actions/actionsCreator";

const SignupForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const updateForm = (value) => setValue((prev) => ({ ...prev, ...value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPerson = { ...value };

    try {
      const res = await fetch("http://localhost:3333/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPerson),
      });
      const data = await res.json();

      if (!data.success) {
        toast(data.message);
        setValue({ name: "", email: "", password: "" });
      } else {
        setAccessTokenCookie("accessToken", data.payload, 30);
        dispatch(setProfileInfo(newPerson));
        profileInLocalStorage(newPerson);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      toast("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bgDarkGray flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md rounded-xl bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 p-8 shadow-lg text-white">
        <h2 className="text-center text-3xl font-bold text-primaryTextColor mb-6">
          Create Your Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-300"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              value={value.name}
              onChange={(e) => updateForm({ name: e.target.value })}
              placeholder="Enter your name"
              className="w-full rounded-lg border border-gray-600 bg-gray-800 px-3 py-2 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-300"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={value.email}
              onChange={(e) => updateForm({ email: e.target.value })}
              placeholder="name@example.com"
              className="w-full rounded-lg border border-gray-600 bg-gray-800 px-3 py-2 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-300"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={value.password}
              onChange={(e) => updateForm({ password: e.target.value })}
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-600 bg-gray-800 px-3 py-2 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          <button type="submit" className="w-full rounded-lg primaryBtnUi">
            Sign Up Now
          </button>

          <Link to="/login" className="inline-block w-full secondaryBtnUi">
            Already Have an Account? Login
          </Link>
        </form>
      </div>

      <ToastContainer position="top-center" autoClose={4000} />
    </div>
  );
};

export default SignupForm;
