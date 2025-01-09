import React from "react";
import ProductItem from "./product-item";

export default function ProductList({ productsData, setStateModal }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {productsData.map((product, index) => (
        <ProductItem key={index} item={product} setStateModal={setStateModal} />
      ))}
    </div>
  );
}
