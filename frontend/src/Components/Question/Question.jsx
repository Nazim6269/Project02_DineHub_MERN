const Question = () => {
  return (
    <section className="body-font text-text-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-medium mb-4 text-(--color-accent-cyan)">
          Ask Questions
        </h1>

        <div className="flex flex-col gap-4">
          <div className="bg-background-card p-4 sm:p-6 rounded-xl shadow-lg">
            <p className="text-text-secondary leading-relaxed mb-4 sm:mb-6">
              Have a question about this product? Ask something about the
              product!
            </p>

            <div className="flex flex-col sm:flex-row gap-2">
              <textarea
                className="w-full sm:flex-1 rounded-lg border border-white/20 bg-background-dark px-3 py-2 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-(--color-accent-cyan) focus:border-[var(--color-accent-cyan)] transition"
                placeholder="Type your question here..."
                rows={2}
              ></textarea>

              <button className="w-full sm:w-auto inline-flex justify-center items-center text-white bg-[var(--color-accent-pink)] py-2 px-6 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-pink-light)] text-lg font-semibold transition">
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
