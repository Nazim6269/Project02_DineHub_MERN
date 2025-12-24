import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Category = () => {
  const { data } = useSelector((state) => state.fetchReducer);

  if (!data) {
    return (
      <div className="h-[55vh] flex justify-center items-center text-2xl sm:text-4xl text-white">
        Loading...
      </div>
    );
  }

  return (
    <section className="bgDarkGray text-white body-font py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-primaryTextColor mb-8 text-center">
          Food Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {data.map((item) => (
            <Link
              key={item._id}
              to={`/category/${item.CategoryName}`}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 flex flex-col items-center p-4 sm:p-6"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center mb-4">
                <img
                  src={item.img}
                  alt={item.CategoryName}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-primaryTextColor text-center">
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
