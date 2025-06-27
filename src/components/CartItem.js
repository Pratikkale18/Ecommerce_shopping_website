import React from "react";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slice/CartSlice";
import { toast } from "react-hot-toast";
import { MdDeleteOutline } from "react-icons/md";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  };

  return (
    <div className="flex gap-4 p-4 border-b border-gray-200 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
      
      {/* Image */}
      <div>
        <img
          src={item.image}
          alt={item.title}
          className="w-24 h-24 object-contain border border-gray-300 rounded-md p-2 bg-white"
        />
      </div>

      {/* Details */}
      <div className="flex-1 flex flex-col justify-between space-y-2">
        <div>
          <h1 className="text-lg font-semibold text-gray-900">{item.title}</h1>
          <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-green-700 font-bold text-lg">${item.price.toFixed(2)}</p>
          <button onClick={removeFromCart}
          className="flex items-center gap-2 px-5 py-2 rounded-full border border-red-500 text-red-600 hover:bg-red-500 hover:text-white transition-all duration-300 font-[Poppins] text-sm shadow-md"
        >
          <MdDeleteOutline className="text-xl" />
          Remove
        </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
