import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RangeFilter from "../RangeFilter/RangeFilter";
import SelectFilter from "../SelectFilter/SelectFilter";

const SingleCategory = () => {
  const { data } = useSelector((state) => state.fetchReducer);
  console.log(data, "data");
  const { id } = useParams();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data) {
      setFilteredData(data.filter((item) => item.CategoryName === id));
    }
  }, [data, id]);

  if (!data) {
    return (
      <div className="h-[55vh] flex items-center justify-center text-xl sm:text-3xl text-text-secondary">
        Loading...
      </div>
    );
  }

  if (!filteredData.length) {
    return (
      <div className="h-[55vh] flex items-center justify-center text-xl sm:text-3xl text-text-secondary">
        No items match the selected filter.
      </div>
    );
  }

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
          opacity-25
        "
      />

      <div className="relative container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar (mobile-first: top, desktop: left) */}
          <aside className="w-full lg:w-1/4 flex flex-col gap-4">
            {[
              { title: "Filter by Price", component: <RangeFilter /> },
              { title: "Filter by Category", component: <SelectFilter /> },
              { title: "Filter by Rating", component: <SelectFilter /> },
              { title: "Availability", component: <SelectFilter /> },
            ].map((item, i) => (
              <div
                key={i}
                className="
                  bg-background-card
                  border border-white/10
                  rounded-xl p-4
                "
              >
                <h3 className="font-semibold mb-2 text-sm">{item.title}</h3>
                {item.component}
              </div>
            ))}
          </aside>

          {/* Main Content */}
          <main className="w-full lg:w-3/4 flex flex-col gap-6">
            {/* Header */}
            <div
              className="
                flex flex-col sm:flex-row
                gap-4 sm:gap-6
                justify-between
                bg-background-card
                border border-white/10
                rounded-xl p-4
              "
            >
              <h2
                className="
                  text-xl sm:text-2xl font-bold
                  bg-gradient-to-r
                  from-[var(--color-primary-cyan)]
                  to-[var(--color-primary-blue)]
                  bg-clip-text text-transparent
                "
              >
                {id}
              </h2>

              <div className="flex flex-col sm:flex-row gap-3">
                <select
                  className="
                    rounded-lg px-3 py-2 text-sm
                    bg-background-dark
                    border border-white/10
                    text-text-primary
                  "
                >
                  <option>Show 20</option>
                  <option>Show 30</option>
                  <option>Show 50</option>
                </select>

                <select
                  className="
                    rounded-lg px-3 py-2 text-sm
                    bg-background-dark
                    border border-white/10
                    text-text-primary
                  "
                >
                  <option>Default</option>
                  <option>Price: Low → High</option>
                  <option>Price: High → Low</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredData.map((item) => (
                <div
                  key={item._id}
                  className="
                    group
                    bg-background-card
                    border border-white/10
                    rounded-2xl overflow-hidden
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-[var(--color-accent-cyan)]
                    hover:shadow-[0_0_40px_rgba(0,217,192,0.25)]
                  "
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="
                        w-full h-full object-cover
                        group-hover:scale-105
                        transition-transform duration-300
                      "
                    />
                  </div>

                  <div className="p-4 flex flex-col gap-1">
                    <span className="text-xs tracking-widest text-text-muted">
                      {item.CategoryName}
                    </span>

                    <h3 className="text-lg font-semibold">{item.name}</h3>

                    <p className="text-sm font-semibold text-(--color-accent-cyan)">
                      Tk-{item.options[0].half}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default SingleCategory;
