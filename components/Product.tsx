import { Prod } from "@/types";
import React from "react";
import unDraw from "@/public/undraw_void_-3-ggu.svg";
import { useRouter } from "next/router";

interface props {
  product: Prod;
}

function Product({ product }: props) {

  const router = useRouter()
  
  const handleLink = (url:string) => {
    const newTab = window.open('', '_blank')

    if (newTab) {
      newTab.location.href = url
    } else {
      router.push(url)
    }
  }

  return (
    <>
      <img onClick={() => handleLink(product.link)}  className=" w-28 mdw-[480px] rounded-xl " src={product.image} alt="" />

      {/* <h2>{product.brand}</h2>
      <h3>{product.name}</h3>
      <p>${product.price}0</p> */}
    </>
  );
}

export default Product;
