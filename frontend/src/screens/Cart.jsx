import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setLocalCart } from "../helpers/setLocalStorage";
import {
  addToCart,
  decrementItem,
  removeFromCart,
} from "../redux/actions/actionsCreator";

const Cart = () => {
  const { cart } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  // Save cart to localStorage and update amount
  useEffect(() => {
    setLocalCart(cart);
    setAmount(cart.length);
  }, [cart]);

  // Calculate total
  const total = useMemo(() => {
    return (
      cart.reduce(
        (sum, item) => sum + item.options[0].full * item.quantity,
        0
      ) + 10
    );
  }, [cart]);

  if (!cart.length) {
    return (
      <div className="h-[55vh] flex justify-center items-center text-2xl font-semibold text-gray-300">
        Your cart is empty.
      </div>
    );
  }

  return (
    <div className="min-h-screen bgDarkGray px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col lg:flex-row gap-6 shadow-md rounded-lg bg-background-card p-4 sm:p-6">
        {/* Cart Items */}
        <div className="w-full lg:w-2/3">
          <h1 className="font-semibold text-2xl text-(--color-primary-cyan) border-b pb-4 mb-4">
            Shopping Cart
          </h1>

          {/* Table headers */}
          <div className="hidden lg:flex mt-3 text-xs uppercase text-gray-400">
            <h3 className="font-semibold w-2/5">Product Details</h3>
            <h3 className="font-semibold text-center w-1/5">Quantity</h3>
            <h3 className="font-semibold text-center w-1/5">Price</h3>
            <h3 className="font-semibold text-center w-1/5">Total</h3>
          </div>

          {cart.map((item) => {
            const { _id, CategoryName, img, quantity } = item;
            const { full } = item.options[0];

            return (
              <div
                key={_id}
                className="flex flex-col sm:flex-row sm:items-center gap-4 py-4 border-b border-gray-700"
              >
                {/* Product Info */}
                <div className="flex items-center gap-4 sm:flex-1">
                  <img
                    className="h-20 w-20 object-cover rounded"
                    src={img}
                    alt={CategoryName}
                  />
                  <div className="flex flex-col gap-2">
                    <span className="text-(--color-accent-cyan) font-bold capitalize">
                      {CategoryName}
                    </span>
                    <button
                      onClick={() => dispatch(removeFromCart(_id))}
                      className="text-xs text-gray-400 hover:text-red-500 self-start"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3 sm:justify-center sm:w-1/5">
                  <button
                    onClick={() => dispatch(decrementItem(_id))}
                    className="p-2 text-gray-400 hover:text-gray-200"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 448 512"
                      fill="currentColor"
                    >
                      <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                  </button>
                  <div className="px-3 py-1 border border-gray-700 rounded text-center min-w-[3rem]">
                    {quantity}
                  </div>
                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className="p-2 text-gray-400 hover:text-gray-200"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 448 512"
                      fill="currentColor"
                    >
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                  </button>
                </div>

                {/* Price Info */}
                <div className="flex flex-wrap sm:flex-nowrap sm:items-center gap-4 sm:gap-6 sm:w-2/5">
                  <span className="text-center sm:text-left font-semibold text-sm flex-1">
                    ${full}
                  </span>
                  <span className="text-center sm:text-left font-semibold text-sm flex-1">
                    ${full * quantity}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Continue Shopping */}
          <Link
            to="/"
            className="flex items-center font-semibold text-(--color-accent-cyan) text-sm mt-6 gap-2 hover:text-(--color-primary-cyan) transition"
          >
            <svg
              className="fill-current text-(--color-accent-cyan) w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </Link>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3 px-2 sm:px-4 lg:px-6 py-6 bg-gray-800 rounded-lg border border-gray-700 mt-6 lg:mt-0">
          <h1 className="font-semibold text-2xl text-(--color-primary-cyan) border-b pb-4">
            Order Summary
          </h1>
          <div className="flex font-bold justify-between my-4 uppercase text-gray-300">
            <span>Items</span>
            <span>{amount}</span>
          </div>

          <div className="space-y-2 mb-4">
            <label className="font-medium inline-block text-sm uppercase text-gray-300">
              Shipping
            </label>
            <select className="block p-2 text-gray-400 w-full text-sm border border-gray-700 rounded bg-gray-900">
              <option>Standard shipping - $10.00</option>
            </select>
          </div>

          <div className="space-y-2 mb-4">
            <label
              htmlFor="promo"
              className="font-semibold inline-block text-sm uppercase text-gray-300"
            >
              Promo Code
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              className="p-2 text-sm w-full border border-gray-700 rounded bg-gray-900 text-white mt-2"
            />
            <button className="w-full bg-(--color-accent-cyan) hover:bg-(--color-primary-cyan) px-5 py-2 text-sm text-white uppercase rounded transition">
              Apply
            </button>
          </div>

          <div className="border-t border-gray-700 pt-4">
            <div className="flex font-bold justify-between text-md uppercase mb-4 text-gray-300">
              <span>Total cost</span>
              <span>${total}</span>
            </div>
            <button className="w-full bg-(--color-accent-cyan) hover:bg-(--color-primary-cyan) font-semibold py-3 text-sm text-white uppercase rounded transition">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
