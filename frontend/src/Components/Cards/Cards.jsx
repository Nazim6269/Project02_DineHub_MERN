import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setSelectProduct } from "../../redux/actions/actionsCreator";

const Cards = () => {
  const { data } = useSelector((state) => state.fetchReducer);
  const dispatch = useDispatch();

  if (!data) {
    return (
      <div
        className="
          h-[55vh] flex items-center justify-center
          text-xl sm:text-3xl
          bg-background-dark
          text-text-secondary
        "
      >
        Loading...
      </div>
    );
  }

  const handleClick = () => {
    dispatch(setSelectProduct(data));
  };

  return (
    <section
      className="
        relative
        bg-background-dark
        text-text-primary
      "
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-(--background-image-gradient-mesh)
          opacity-30
        "
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-6 mb-14 items-center">
          <div className="w-full lg:w-1/2">
            <h1
              className="
                text-3xl sm:text-4xl font-bold mb-3
                bg-gradient-to-r
                from-[var(--color-primary-cyan)]
                to-[var(--color-primary-blue)]
                bg-clip-text text-transparent
              "
            >
              Food Items
            </h1>
            <div className="h-1 w-24 rounded bg-(--color-accent-cyan)" />
          </div>

          <p
            className="
              w-full lg:w-1/2
              text-sm sm:text-base
              text-text-secondary
              leading-relaxed
            "
          >
            Explore our wide variety of fast-food options, carefully curated to
            satisfy every taste. Enjoy a seamless experience while discovering
            your favorites.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.map((item) => {
            const { _id, img, name, CategoryName, description } = item;

            return (
              <div
                key={_id}
                className="
                  group relative
                  rounded-2xl overflow-hidden
                  bg-background-card
                  border border-white/10
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[var(--color-accent-cyan)]
                  hover:shadow-[0_0_40px_rgba(0,217,192,0.25)]
                "
              >
                {/* Image */}
                <Link to={`/cardDetails/${_id}`}>
                  <img
                    onClick={handleClick}
                    src={img}
                    alt={name}
                    className="
                      w-full h-56 sm:h-64
                      object-cover
                      group-hover:scale-105
                      transition-transform duration-300
                    "
                  />
                </Link>

                {/* Content */}
                <div className="p-5 flex flex-col gap-2">
                  <span
                    className="
                      text-xs font-semibold tracking-widest
                      text-text-muted
                    "
                  >
                    {name}
                  </span>

                  <h2
                    className="
                      text-lg sm:text-xl font-bold
                      text-text-primary
                      group-hover:text-(--color-accent-cyan)
                      transition
                    "
                  >
                    {CategoryName}
                  </h2>

                  <p
                    className="
                      text-sm sm:text-base
                      text-text-secondary
                      leading-relaxed
                    "
                  >
                    {description.length > 80
                      ? description.substring(0, 80) + "..."
                      : description}
                  </p>

                  <Link
                    to={`/cardDetails/${_id}`}
                    className="
                      mt-3 rounded-full
                      px-4 py-2 text-sm font-semibold
                      text-black text-center
                      bg-(--color-accent-cyan)
                      hover:bg-[var(--color-accent-cyan-light)]
                      shadow-[0_0_25px_rgba(0,217,192,0.35)]
                      transition
                    "
                  >
                    View Details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Cards;
