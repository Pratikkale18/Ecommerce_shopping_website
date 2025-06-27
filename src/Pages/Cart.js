// src/Pages/Cart.js
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-16">
      {cart.length > 0 ? (
        <div className="flex flex-col lg:flex-row max-w-6xl mx-auto gap-10 px-6">
          {/* Cart Items */}
          <div className="lg:w-2/3 w-full space-y-6">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          {/* Summary Box */}
          <div className="lg:w-1/3 w-full bg-white p-6 rounded-xl shadow-md flex flex-col justify-between h-fit sticky top-20">
            <div>
              <h2 className="text-xl text-green-700 font-semibold uppercase">Your Cart</h2>
              <h3 className="text-4xl font-bold text-green-800 mt-1 mb-4">Summary</h3>
              <p className="text-slate-700 text-lg font-medium">
                Total Items: <span className="font-semibold">{cart.length}</span>
              </p>
            </div>

            <div className="mt-8">
              <p className="text-xl font-medium text-gray-800 mb-4">
                Total Amount:
                <span className="ml-2 font-bold text-black">${totalAmount.toFixed(2)}</span>
              </p>
              <button className="w-full bg-green-600 text-white py-3 text-lg font-bold rounded-lg border-2 border-green-600 hover:bg-white hover:text-green-600 transition-all duration-300 ease-in-out">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Empty Cart UI
        <div className="w-screen h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 bg-white px-6">
          <h1 className="text-2xl font-bold text-gray-700">🛒 Your Cart is Empty!</h1>
          <Link to="/">
            <button className="bg-green-600 text-white uppercase font-semibold px-8 py-3 rounded-lg border-2 border-green-600 hover:bg-white hover:text-green-600 transition-all duration-300">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
