import React from "react";
import Product from "./Product";
import { Prod } from "@/types";

interface props {
  products: Prod[] | undefined;
}

function Products({ products }: props) {
  return (
    <div className="h-40 md:h-[250px] max-w-5xl">
      <h1 className="text-lg font-bold mb-2">Beauty products</h1>
    <div className="flex space-x-1 md:space-x-4 overflow-x-scroll w-full items-center justify-center scrollbar-hide">
      {products
        ?.filter((product) => product.price > 3.0)
        .map((product: Prod) => (
          <Product key={product.id} product={product} />
        ))}
    </div>
    </div>
  );
}

export default Products;
