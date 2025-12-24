import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { setLocalSeclectedProduct } from "../../helpers/setLocalStorage";
import {
  addToCart,
  setSelectProduct,
} from "../../redux/actions/actionsCreator";
import Question from "../Question/Question";
import RecentView from "../RecentView/RecentView";
import RelatedItem from "../RelatedItem/RelatedItem";
import Review from "../Review/Review";

const CardDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { selectedProduct } = useSelector(
    (state) => state.selectedProductReducer
  );

  if (!selectedProduct) return <div>Loading</div>;

  const arrData = selectedProduct.filter((item) => item._id === id);
  if (!arrData || arrData.length === 0) {
    return (
      <div className="h-[55vh] flex justify-center items-center text-2xl sm:text-4xl text-white">
        Loading...
      </div>
    );
  }

  useEffect(() => {
    dispatch(setSelectProduct(arrData));
    setLocalSeclectedProduct(arrData);
  }, []);

  const handleCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="bgDarkGray">
      <section className=" text-white body-font overflow-hidden">
        {arrData.map((item) => {
          const { _id, img, description, name, CategoryName } = item;
          const { full } = item.options[0];

          return (
            <div
              key={_id}
              className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Product Image */}
                <div className="lg:col-span-2">
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <img
                      src={img}
                      alt={name}
                      className="w-full h-96 sm:h-125 object-cover object-center"
                    />
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex flex-col gap-6">
                  <div>
                    <h2 className="text-sm sm:text-md font-semibold tracking-widest text-gray-400">
                      {name}
                    </h2>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-1">
                      {CategoryName}
                    </h1>
                  </div>

                  <p className="text-gray-300 leading-relaxed">{description}</p>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mt-6">
                    <span className="text-2xl sm:text-3xl font-semibold text-white">
                      ${full}
                    </span>

                    <div className="flex flex-wrap gap-3">
                      <Link
                        to="/"
                        className="px-5 py-3 bg-linear-to-r from-blue-600 to-sky-500 rounded-lg text-white font-semibold shadow-lg hover:from-blue-700 hover:to-sky-600 transition"
                      >
                        Home
                      </Link>
                      <button
                        onClick={() => handleCart(item)}
                        className="px-5 py-3 bg-linear-to-r from-green-600 to-teal-500 rounded-lg text-white font-semibold shadow-lg hover:from-green-700 hover:to-teal-600 transition"
                      >
                        Add to Cart
                      </button>
                      <Link
                        to="/cart"
                        className="px-5 py-3 bg-linear-to-r from-purple-600 to-indigo-500 rounded-lg text-white font-semibold shadow-lg hover:from-purple-700 hover:to-indigo-600 transition"
                      >
                        View Cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Sidebar Layout for Question, Review, Related & Recent */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content: Question & Review */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <Question />
          <Review />
        </div>

        {/* Sidebar: Related & Recent */}
        <div className="flex flex-col gap-6 sticky top-24">
          <div className="bg-gray-800 rounded-xl p-4 shadow-lg">
            <RelatedItem />
          </div>
          <div className="bg-gray-800 rounded-xl p-4 shadow-lg">
            <RecentView />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
