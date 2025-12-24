const Review = () => {
  return (
    <section className="body-font text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h1 className="text-xl sm:text-3xl font-medium title-font text-indigo-400 mb-4">
          Review
        </h1>
        <div className="flex flex-col gap-4">
          <div className="w-full bg-gray-900 p-4 sm:p-8 rounded-lg shadow-md">
            <p className="leading-relaxed mb-4 text-gray-300">
              Write your comment
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <textarea
                rows="3"
                className="w-full sm:flex-1 rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 resize-none"
                placeholder="Write your review..."
              ></textarea>
              <button className="w-full sm:w-auto inline-flex items-center justify-center text-white bg-indigo-500 py-2 px-6 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-lg transition">
                Submit Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
