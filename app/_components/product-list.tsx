import React from "react";
import { db } from "../_lib/prisma";
import ProductItem from "./product-item";
import { Prisma } from "@prisma/client";

interface ProductListProps {
  products: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
        };
      };
    };
  }>[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden gap-4 px-5">
      {products.map((product) => (
        <ProductItem
          product={product}
          key={product.id}
          className="w-[150px] min-w-[150px]"
        />
      ))}
    </div>
  );
};

export default ProductList;
