import React from "react";

export default function ProductItem({ item, setStateModal }) {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-64 object-cover rounded-t-lg mb-4"
      />
      <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
      <p className="text-gray-600">Price: ${item.price}</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
        onClick={() => setStateModal(item)}
      >
        Details
      </button>
    </div>
  );
}
