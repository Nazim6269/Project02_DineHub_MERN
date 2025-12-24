const Question = () => {
  return (
    <section className="body-font text-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <h1 className="text-2xl sm:text-3xl font-medium title-font text-indigo-400 mb-4">
          Ask Questions
        </h1>
        <div className="flex flex-col gap-4">
          <div className="bg-gray-900 p-6 sm:p-8 rounded-lg shadow-md">
            <p className="leading-relaxed mb-4 sm:mb-6 text-gray-300">
              Have a question about this product? Ask something about the
              product!
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <textarea
                className="w-full sm:flex-1 rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                placeholder="Type your question here..."
                rows={2}
              ></textarea>
              <button className="w-full sm:w-auto inline-flex justify-center text-white bg-indigo-500 py-2 px-6 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-lg transition">
                Ask Question
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Question;
