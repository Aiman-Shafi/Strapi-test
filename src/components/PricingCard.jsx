import { useEffect } from "react";
import { CartState } from "../context/Context";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function PricingCard({ service }) {
  const navigate = useNavigate();
  const data = service.attributes;
  const { cart, setCart } = CartState();

  // Function to add a product to the cart
  const addToCart = (data) => {
    setCart([...cart, data]);
    navigate("/checkout");
  };

  // Function to remove a product from the cart
  const removeFromCart = () => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== data.id));
  };

  // Function to clear the entire cart
  //   const clearCart = () => {
  //     setCart([]);
  //   };

  useEffect(() => {
    console.log("Cart updated:", cart);
  }, [cart]);
  return (
    <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
      <div className="p-6 sm:px-8">
        <h2 className="text-lg font-medium text-gray-900 uppercase tracking-widest">
          {data.package_type}
          <span className="sr-only">Plan</span>
        </h2>

        {/* <p className="mt-2 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p> */}

        <p className="mt-2 sm:mt-4">
          <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {" "}
            {data.price}${" "}
          </strong>

          <span className="text-sm font-medium text-gray-700">/year</span>
        </p>

        {cart?.includes(data) ? (
          <button
            onClick={removeFromCart}
            className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
          >
            Remove From Cart
          </button>
        ) : (
          <button
            onClick={() => addToCart(data)}
            className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
          >
            Add to Cart
          </button>
        )}
      </div>

      <div className="p-6 sm:px-8">
        <p className="text-lg font-medium text-gray-900 sm:text-xl">
          What&apos;s included:
        </p>

        {/* <ul className="mt-2 space-y-2 sm:mt-4">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-indigo-700 flex-shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>

              <span className="text-gray-700"> {feature} </span>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}
