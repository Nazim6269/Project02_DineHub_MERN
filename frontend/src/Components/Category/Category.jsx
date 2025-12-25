import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Category = () => {
  const { data } = useSelector((state) => state.fetchReducer);

  if (!data) {
    return (
      <div
        className="
          h-[55vh] flex items-center justify-center
          text-xl sm:text-3xl
          text-text-secondary
        "
      >
        Loading...
      </div>
    );
  }

  return (
    <section className="relative py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2
          className="
            mb-10 text-center
            text-3xl sm:text-4xl font-bold
            bg-gradient-to-r
            from-[var(--color-primary-cyan)]
            to-[var(--color-primary-blue)]
            bg-clip-text text-transparent
          "
        >
          Food Categories
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {data.map((item) => (
            <Link
              key={item._id}
              to={`/category/${item.CategoryName}`}
              className="
                group relative
                rounded-2xl
                bg-background-card
                border border-white/10
                p-6
                flex flex-col items-center
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[var(--color-accent-cyan)]
                hover:shadow-[0_0_40px_rgba(0,217,192,0.25)]
              "
            >
              {/* Image */}
              <div
                className="
                  mb-4
                  w-24 h-24 sm:w-28 sm:h-28
                  rounded-full
                  overflow-hidden
                  border border-white/10
                  bg-black/20
                "
              >
                <img
                  src={item.img}
                  alt={item.CategoryName}
                  className="
                    w-full h-full object-cover
                    group-hover:scale-105
                    transition-transform duration-300
                  "
                />
              </div>

              {/* Title */}
              <h3
                className="
                  text-lg sm:text-xl font-semibold
                  text-text-primary
                  group-hover:text-(--color-accent-cyan)
                  transition
                  text-center
                "
              >
                {item.CategoryName}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
