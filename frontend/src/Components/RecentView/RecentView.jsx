const RecentView = () => {
  return (
    <section className="body-font text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h1 className="text-lg sm:text-xl font-medium title-font mb-3 text-indigo-400">
          Recently Viewed
        </h1>
        <div className="flex items-center gap-3 bg-gray-900 p-3 rounded-lg shadow-md">
          <img
            alt="recent product"
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover object-center border border-gray-700"
            src="" // Add actual image URL here
          />
          <div className="flex flex-col">
            <h2 className="text-white text-sm sm:text-md font-medium mb-1">
              The Catcher in the Rye
            </h2>
            <span className="font-semibold text-gray-300 text-sm sm:text-lg">
              $58.00
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentView;
