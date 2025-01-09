import React, { useState } from "react";
import Product from "./product";
import ProductDetails from "./product-details";
import Cart from "./cart";

export default function Example3() {
  const [data, setData] = useState([
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "/images/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "/images/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "/images/applephone.jpg",
    },
  ]);

  const [dataDetails, setDataDetails] = useState(null);

  const [cart, setCart] = useState([]);

  const handleViewDetails = (data) => {
    setDataDetails(data);
  };

  const findIndexProduct = (maSP) =>
    cart.findIndex((product) => product.maSP === maSP);

  const handleAddToCart = (data) => {
    const productAddToCart = {
      maSP: data.maSP,
      hinhAnh: data.hinhAnh,
      tenSP: data.tenSP,
      soLuong: 1,
      giaBan: data.giaBan,
    };

    // tạo mảng mới từ mảng cart
    const newCart = [...cart];

    const index = findIndexProduct(productAddToCart.maSP);

    if (index !== -1) {
      // update SL sản phẩm trong giỏ hàng
      newCart[index].soLuong += 1;
    } else {
      // thêm productAddToCart vô trong mảng newCart
      newCart.push(productAddToCart);
    }

    // cập nhật lại state cart
    setCart(newCart);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-lg font-bold mb-4">Danh sách sản phẩm</h2>

      {/* Giỏ hàng */}
      <Cart cart={cart} />

      <div className="grid grid-cols-3 grid-rows-1 gap-4">
        {data.map((item, index) => {
          return (
            <Product
              key={item.maSP}
              product={item}
              onClickViewDetails={handleViewDetails}
              onClickAddToCart={handleAddToCart}
            />
          );
        })}
      </div>

      {/* {dataDetails !== null && dataDetails !== undefined && ( */}
      {!!dataDetails && (
        <>
          <h2 className="text-lg font-bold mt-8 mb-4">Thông số kỹ thuật</h2>
          <ProductDetails product={dataDetails} />
        </>
      )}
    </div>
  );
}
