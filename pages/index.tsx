import Header from "@/components/Header";
import Products from "@/components/Products";
import Slider from "@/components/Slider";
import { makeUpState } from "@/states/searchState";
import productLinks from "@/utils/ProductLinks";
import { useEffect, useState } from "react";
import { useRecoilState } from 'recoil'

interface props {
  makeUpProducts: string;
  booksProduct: string;
}

export default function Home({ makeUpProducts, booksProduct }: props) {
  const [search, setSearch] = useRecoilState(makeUpState)
  const [products, setProducts] = useState()

  const getProducts = async () => {
   const url = fetch(productLinks.makeUpProducts)
   const promise = await url
   const data = await promise.json()

   setProducts(data.slice(0, 20).map((product:any) => {return {
    id: product.id,
    name: product.name,
    description: product.description,
    image: product.image_link,
    price: product.price,
    link: product.website_link,
    brand: product.brand
  }}))
  };
  console.log(products);
  
  useEffect(() => {
    
    getProducts();

  }, [])
  return (
    <>
      <Header />
      <main>
        <Slider />
        <input type="search" onChange={(e) => setSearch(e.target.value)} />
        <div>
          <Products />
          <Products />
        </div>
      </main>
    </>
  );
}
