import { Prod } from "@/types";
import React from "react";
import unDraw from "@/public/undraw_void_-3-ggu.svg";
import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue } from "recoil";
import { makeUpState, modalState, productState } from "@/states/searchState";
import useAuth from "@/cHooks/useAuth";
import{ useState, useEffect } from 'react'

interface props {
  product: Prod;
  products: Prod[];
}

function Product({ product, products }: props) {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentProduct, setCurrentProduct] = useRecoilState(productState);
  const [loading, setLoading] = useState(false)
  const search = useRecoilValue(makeUpState)
  const router = useRouter();

 



  const handleLink = (url: string) => {
    const newTab = window.open("", "_blank");

    if (newTab) {
      newTab.location.href = url;
    } else {
      router.push(url);
    }
  };

  return (
    <>
      {products?.length === 0 ? (
        <div className="w-screen">
          <div className="w-28  rounded-xl bg-white text-black h-28"></div>

        </div>
      ) : (
        <img
          onClick={() => {
            setShowModal(true);
            setCurrentProduct(product);
          }}
          className=" w-28 rounded-xl "
          src={product.image}
          alt=""
        />
      )}

      {/* <h2>{product.brand}</h2>
      <h3>{product.name}</h3>
      <p>${product.price}0</p> */}
    </>
  );
}

export default Product;
