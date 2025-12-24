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

  // Calculate total using useMemo
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
      <div className="h-[55vh] flex justify-center items-center text-2xl font-semibold">
        Your cart is empty.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col lg:flex-row gap-6 shadow-md rounded-lg bg-white p-4 sm:p-6">
        {/* Cart Items */}
        <div className="w-full lg:w-2/3">
          <h1 className="font-semibold text-2xl border-b pb-4 mb-4">
            Shopping Cart
          </h1>

          {/* Table headers for large screens */}
          <div className="hidden lg:flex mt-3 text-xs uppercase text-gray-600">
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
                className="flex flex-col sm:flex-row sm:items-center gap-4 py-4 border-b"
              >
                {/* Product Info */}
                <div className="flex items-center gap-4 sm:flex-1">
                  <img
                    className="h-20 w-20 object-cover rounded"
                    src={img}
                    alt={CategoryName || "product"}
                  />
                  <div className="flex flex-col gap-2">
                    <span className="text-red-500 font-bold capitalize">
                      {CategoryName}
                    </span>
                    <button
                      onClick={() => dispatch(removeFromCart(_id))}
                      className="text-xs text-gray-500 hover:text-red-500 self-start"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3 sm:justify-center sm:w-1/5">
                  <button
                    onClick={() => dispatch(decrementItem(_id))}
                    className="p-2 text-gray-600 hover:text-gray-800"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 448 512"
                      fill="currentColor"
                    >
                      <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                  </button>

                  <div className="px-3 py-1 border rounded text-center min-w-[3rem]">
                    {quantity}
                  </div>

                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className="p-2 text-gray-600 hover:text-gray-800"
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
            className="flex items-center font-semibold text-pink-600 text-sm mt-6 gap-2 hover:text-pink-700"
          >
            <svg
              className="fill-current text-pink-600 w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </Link>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3 px-2 sm:px-4 lg:px-6 py-6 bg-gray-50 rounded-lg border mt-6 lg:mt-0">
          <h1 className="font-semibold text-2xl border-b pb-4">
            Order Summary
          </h1>
          <div className="flex font-bold justify-between my-4 uppercase">
            <span>Items</span>
            <span>{amount}</span>
          </div>

          <div className="space-y-2 mb-4">
            <label className="font-medium inline-block text-sm uppercase">
              Shipping
            </label>
            <select className="block p-2 text-gray-600 w-full text-sm border rounded">
              <option>Standard shipping - $10.00</option>
            </select>
          </div>

          <div className="space-y-2 mb-4">
            <label
              htmlFor="promo"
              className="font-semibold inline-block text-sm uppercase"
            >
              Promo Code
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              className="p-2 text-sm w-full border rounded mt-2"
            />
            <button className="w-full bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase rounded">
              Apply
            </button>
          </div>

          <div className="border-t pt-4">
            <div className="flex font-bold justify-between text-md uppercase mb-4">
              <span>Total cost</span>
              <span>${total}</span>
            </div>
            <button className="w-full bg-pink-500 font-semibold hover:bg-pink-600 py-3 text-sm text-white uppercase rounded">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
