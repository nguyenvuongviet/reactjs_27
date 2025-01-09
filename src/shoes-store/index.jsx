import React, { useState } from "react";
import ProductList from "./product-list";
import Modal from "./modal";
import data from "./data.json";

export default function ShoesStore() {
  const [productDetail, setProductDetail] = useState(null);
  const handleViewDetails = (product) => {
    setProductDetail(product);
  };
  return (
    <div className="container mx-auto p-4">
      <ProductList productsData={data} setStateModal={handleViewDetails} />
      {productDetail && <Modal content={productDetail} />}
    </div>
  );
}
