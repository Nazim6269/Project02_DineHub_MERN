const Review = () => {
  return (
    <section className="body-font text-text-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h1 className="text-xl sm:text-3xl font-medium mb-4 text-(--color-accent-cyan)">
          Review
        </h1>

        <div className="flex flex-col gap-4">
          <div className="w-full bg-background-card p-4 sm:p-6 rounded-xl shadow-lg">
            <p className="text-text-secondary leading-relaxed mb-4">
              Write your comment
            </p>

            <div className="flex flex-col sm:flex-row gap-2">
              <textarea
                rows={3}
                className="w-full sm:flex-1 rounded-lg border border-white/20 bg-background-dark px-3 py-2 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-(--color-accent-cyan) focus:border-[var(--color-accent-cyan)] resize-none transition"
                placeholder="Write your review..."
              ></textarea>

              <button className="w-full sm:w-auto inline-flex items-center justify-center text-white bg-[var(--color-accent-pink)] py-2 px-6 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-pink-light)] text-lg font-semibold transition">
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
