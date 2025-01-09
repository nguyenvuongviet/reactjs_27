import React from "react";

export default function Modal({ content }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <img
          src={content.image}
          alt={content.name}
          className="w-full h-64 object-contain rounded-t-lg mb-4"
        />
        <h2 className="text-2xl font-bold text-gray-800">{content.name}</h2>
        <p className="text-gray-600 mb-1">
          <strong>Alias:</strong> {content.alias}
        </p>
        <p className="text-gray-600 mb-1">
          <strong>Price:</strong> ${content.price}
        </p>
        <p className="text-gray-600 mb-1">
          <strong>Description:</strong> {content.description}
        </p>
        <p className="text-gray-600 mb-1">
          <strong>Short Description:</strong> {content.shortDescription}
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Quantity:</strong> {content.quantity}
        </p>
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition-colors duration-300"
          onClick={() => window.location.reload()}
        >
          Close
        </button>
      </div>
    </div>
  );
}
