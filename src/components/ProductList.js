import React from "react";
import ProductItem from "./ProductItem";
import { products } from "../products";

const ProductList = () => {
  return (
    <div className="row">
      {products.map((product, i) => (
        <ProductItem product={product} key={i} />
      ))}
    </div>
  );
};

export default ProductList;
