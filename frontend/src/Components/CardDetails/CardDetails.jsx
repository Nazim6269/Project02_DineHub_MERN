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

  if (!selectedProduct)
    return (
      <div className="h-[55vh] flex items-center justify-center text-xl sm:text-3xl text-text-secondary">
        Loading...
      </div>
    );

  const arrData = selectedProduct.filter((item) => item._id === id);
  if (!arrData.length)
    return (
      <div className="h-[55vh] flex items-center justify-center text-xl sm:text-3xl text-text-secondary">
        Product not found.
      </div>
    );

  useEffect(() => {
    dispatch(setSelectProduct(arrData));
    setLocalSeclectedProduct(arrData);
  }, []);

  const handleCart = (item) => dispatch(addToCart(item));

  return (
    <div className="bg-background-dark text-text-primary">
      {/* Product Section */}
      {arrData.map((item) => {
        const { _id, img, description, name, CategoryName } = item;
        const { full } = item.options[0];

        return (
          <section
            key={_id}
            className="container mx-auto px-4 sm:px-6 lg:px-8 py-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Image */}
              <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={img}
                  alt={name}
                  className="w-full h-72 sm:h-96 object-cover object-center transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col gap-4">
                <div>
                  <h2 className="text-sm sm:text-md font-semibold tracking-widest text-text-muted">
                    {name}
                  </h2>
                  <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mt-1">
                    {CategoryName}
                  </h1>
                </div>

                <p className="text-text-secondary leading-relaxed">
                  {description}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 gap-3">
                  <span className="text-2xl sm:text-3xl font-semibold text-(--color-accent-cyan)">
                    ${full}
                  </span>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      to="/"
                      className="px-5 py-2 bg-(--color-accent-pink) hover:bg-pink-700 rounded-lg text-white font-semibold shadow transition"
                    >
                      Home
                    </Link>
                    <button
                      onClick={() => handleCart(item)}
                      className="px-5 py-2 bg-(--color-accent-cyan) hover:bg-cyan-600 rounded-lg text-white font-semibold shadow transition"
                    >
                      Add to Cart
                    </button>
                    <Link
                      to="/cart"
                      className="px-5 py-2 bg-[var(--color-accent-blue)] hover:bg-blue-600 rounded-lg text-white font-semibold shadow transition"
                    >
                      View Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Sidebar Layout */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <Question />
          <Review />
        </div>

        <div className="flex flex-col gap-6 sticky top-24">
          <div className="bg-background-card rounded-xl p-4 shadow-lg">
            <RelatedItem />
          </div>
          <div className="bg-background-card rounded-xl p-4 shadow-lg">
            <RecentView />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
