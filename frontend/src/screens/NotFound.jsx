const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      {/* Animated 404 */}
      <h1 className="text-8xl font-extrabold text-pink-600 animate-bounce mb-6">
        404
      </h1>

      {/* Message */}
      <p className="text-2xl text-gray-700 mb-6 text-center">
        Oops! The page you're looking for doesn't exist.
      </p>

      {/* Button */}
      <a
        href="/"
        className="px-6 py-3 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-500 transition"
      >
        Go Back Home
      </a>

      {/* Optional Illustration */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/748/748113.png"
        alt="not found illustration"
        className="w-48 mt-10 animate-pulse"
      />
    </div>
  );
};

export default NotFound;
