import React, { useState } from "react";

export default function Product({
  product,
  onClickViewDetails,
  onClickAddToCart,
}) {
  const [idProduct, setIdProduct] = useState();
  const handleUpdateProduct = () => {
    setIdProduct(20);
  };
  const [like, setLike] = useState(false);
  return (
    <div className="w-full border border-input rounded-lg p-6 space-y-4">
      <img
        src={product.hinhAnh}
        className="w-full h-[250px] object-cover"
        alt="apple-phone"
      />
      <h3 className="text-lg font-semibold">{product.tenSP}</h3>
      <button
        className="p-3  rounded-lg text-white bg-blue-500"
        onClick={() => {
          onClickViewDetails(product);
        }}
      >
        Xem thông số
      </button>
      <button
        className="mx-2 p-3  rounded-lg text-white bg-red-500"
        onClick={() => onClickAddToCart(product)}
      >
        Thêm giỏ hàng
      </button>
      <button onClick={() => setLike(!like)}>
        {like ? "Đã Thích" : "Thích"}{" "}
      </button>
    </div>
  );
}
