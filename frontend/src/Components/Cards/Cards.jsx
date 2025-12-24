import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setSelectProduct } from "../../redux/actions/actionsCreator";

const Cards = () => {
  const { data } = useSelector((state) => state.fetchReducer);
  const dispatch = useDispatch();

  if (!data) {
    return (
      <div className="h-[55vh] flex justify-center items-center text-2xl sm:text-4xl text-white">
        Loading...
      </div>
    );
  }

  const handleClick = () => {
    dispatch(setSelectProduct(data));
  };

  return (
    <section className="bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 text-white body-font">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row flex-wrap w-full mb-12 gap-4 items-center">
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl font-bold title-font text-primaryTextColor mb-2">
              Food Items
            </h1>
            <div className="h-1 w-24 bg-primaryTextColor rounded"></div>
          </div>
          <p className="w-full lg:w-1/2 text-gray-300 text-sm sm:text-base leading-relaxed">
            Explore our wide variety of fast-food options, carefully curated to
            satisfy every taste. Enjoy a seamless experience while discovering
            your favorites.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data?.map((item) => {
            const { _id, img, name, CategoryName, description } = item;
            return (
              <div
                key={_id}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
              >
                <Link to={`/cardDetails/${_id}`}>
                  <img
                    onClick={handleClick}
                    src={img}
                    alt={name}
                    className="w-full h-56 sm:h-64 object-cover object-center"
                  />
                </Link>
                <div className="p-4 flex flex-col gap-2">
                  <h3 className="text-primaryTextColor text-xs sm:text-sm font-semibold tracking-widest">
                    {name}
                  </h3>
                  <h2 className="text-white text-lg sm:text-xl font-bold">
                    {CategoryName}
                  </h2>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {description.length > 80
                      ? description.substring(0, 80) + "..."
                      : description}
                  </p>
                  <Link
                    to={`/cardDetails/${_id}`}
                    className="mt-2 inline-block rounded text-center primaryBtnUi"
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
