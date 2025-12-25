const RecentView = ({ items = [] }) => {
  return (
    <section className="body-font text-text-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h1 className="text-lg sm:text-xl font-medium mb-3 text-(--color-accent-cyan)">
          Recently Viewed
        </h1>

        <div className="flex flex-col gap-3">
          {items.length ? (
            items.map((item) => (
              <div
                key={item._id}
                className="flex items-center gap-3 bg-background-card p-3 rounded-xl shadow hover:shadow-lg transition"
              >
                <img
                  src={item.img || ""}
                  alt={item.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover object-center border border-white/20"
                />
                <div className="flex flex-col">
                  <h2 className="text-text-primary text-sm sm:text-md font-medium mb-1">
                    {item.name}
                  </h2>
                  <span className="font-semibold text-text-secondary text-sm sm:text-lg">
                    ${item.options[0]?.full || "0.00"}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-text-secondary text-sm sm:text-base">
              No recently viewed items.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default RecentView;
